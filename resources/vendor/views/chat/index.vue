<template>
  <div>
    <add-room
      v-if="openAddRoom"
      :open="openAddRoom"
      :roomsLength="rooms.length"
      :user="user"
      @putRoomIndex="putRoomIndex"
      @pushRoomContent="pushRoomContent"
      @clearRoomIndex="clearRoomIndex"
      @shiftRoom="shiftRoom"
      @pushRoom="pushRoom"
      @close="close()"
    />
    <quit-room
      v-if="openquitRoom"
      :open="openquitRoom"
      :room="room"
      :user="user"
      @shiftRoom="shiftRoom"
      @pushRoom="pushRoom"
      @clearRoomIndex="clearRoomIndex"
      @close="close()"
    />
    <invite-user
      v-if="openInviteUser"
      :open="openInviteUser"
      :room="room"
      :user="user"
      @clearRoomIndex="clearRoomIndex"
      @putRoomIndex="putRoomIndex"
      @pushRoomContent="pushRoomContent"
      @close="close()"
    />
    <remove-user
      v-if="openRemoveUser"
      :open="openRemoveUser"
      :room="room"
      :user="user"
      @putRoomIndex="putRoomIndex"
      @pushRoomContent="pushRoomContent"
      @clearRoomIndex="clearRoomIndex"
      @shiftRoom="shiftRoom"
      @pushRoom="pushRoom"
      @close="close()"
    />
    <chat-window
      :showFiles="false"
      :showEmojis="false"
      :showReactionEmojis="false"
      :filterRoom="false"
      cachRooms
      :currentUserId="user.id"
      :rooms="rooms"
      :messages="messages"
      :menuActions="menuActions"
      :loadingRooms="loadingRooms"
      :messagesLoaded="messagesLoaded"
      @fetchMessages="fetchMessages"
      @fetchRoom="fetchRoom"
      @sendMessage="sendMessage"
      @editMessage="editMessage"
      @deleteMessage="deleteMessage"
      @addRoom="addRoom"
      @searchRoom="searchRoom"
      @menuActionHandler="menuActionHandler"
    ></chat-window>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isCancel } from "axios";
import ChatWindow from "@/materiels/Chat/ChatWindow";
import { addRoom, quitRoom, removeUser, inviteUser } from "./components";

import notify from "@/utils/notify";
import filterItems from "@/utils/filterItems";

import {
  fetchRoomsApi,
  createRoomsApi,
  searchRoomsApi
} from "@/api/chat/room.js";
import {
  fetchMessagesApi,
  sendMessagesApi,
  editMessagesApi,
  deleteMessagesApi
} from "@/api/chat/message.js";

export default {
  components: {
    ChatWindow,
    addRoom,
    quitRoom,
    removeUser,
    inviteUser
  },
  data() {
    return {
      rooms: [],
      room: {},
      indexRoom: "",
      messages: [],
      loadingRooms: false,
      messagesLoaded: false,
      openAddRoom: false,
      openquitRoom: false,
      openInviteUser: false,
      openRemoveUser: false,
      _httpCancel: "",
      pagination: {
        room: {
          current_page: 1,
          last_page: ""
        },
        message: {
          current_page: 1,
          last_page: ""
        }
      },
      menuActions: [
        {
          name: "quitRoom",
          title: "Quit Room"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    this.fetchRooms();
  },
  destroyed() {
    localStorage.removeItem("rooms");
  },

  methods: {
    fetchRooms() {
      this.loadingRooms = true;
      if (!this.paginate("room")) this.loadingRooms = false;
      fetchRoomsApi(this.pagination.room.current_page)
        .then(({ data, current_page, last_page }) => {
          if (current_page == 1) this.rooms = data;
          else this.rooms.push(...data);
          localStorage.setItem("rooms", JSON.stringify([...this.rooms]));

          this.pagination.room = { current_page, last_page };
        })
        .catch(err => console.log(err))
        .finally(() => (this.loadingRooms = false));
    },
    searchRoom({ pattern }) {
      this.rooms = JSON.parse(localStorage.getItem("rooms"));
      if (pattern) {
        this.loadingRooms = true;
        this.rooms = filterItems(this.rooms, nameSeries, pattern);
        searchRoomsApi({ pattern })
          .then(res => {
            this.rooms = marge([...res.rooms, ...this.rooms]);
          })
          .catch(err => {
            console.log(err);
          })
          .finally(err => (this.loadingRooms = false));
      }
    },
    fetchRoom({ room }) {
      this.room = room;
      Echo.join(`message.room.${this.room.room_id}`).listen(
        "MessageEvent",
        e => {
          console.log(e.message);
          this.messages.push(e.message);
          notify.browser();
        }
      );
      this.menuActionsOption(room.owner == this.user.id);
      this._httpCancel && this._httpCancel.cancel();
      this.pagination.message = {
        current_page: 1,
        last_page: ""
      };
      this.messages = [];
      this.fetchMessages({ room });
    },
    addRoom() {
      this.openAddRoom = true;
    },
    pushRoom({ room }) {
      this.indexRoom = this.rooms.push(room) - 1;
    },
    shiftRoom({ room }) {
      if (!this.indexRoom) {
        this.indexRoom = this.rooms.findIndex(e => e.room_id === room.room_id);
      }
      this.rooms.splice(this.indexRoom, 1);
      if (!this.rooms.length) this.messages = [];
    },
    pushRoomContent(Content) {
      for (const key in Content) {
        this.rooms[this.indexRoom][key] = Content[key];
      }
    },
    clearRoomIndex() {
      this.indexRoom = "";
    },
    putRoomIndex(id) {
      this.indexRoom = this.rooms.findIndex(e => e.room_id === id);
    },
    fetchMessages({ room }) {
      if (!this.paginate("message")) this.messagesLoaded = true;
      const MessagesApi = fetchMessagesApi(
        this.pagination.message.current_page,
        room.room_id
      );

      this.messagesLoaded = false;
      this._httpCancel = MessagesApi._httpCancel;
      MessagesApi.request
        .then(({ data, current_page, last_page }) => {
          if (current_page == 1) this.messages = data && data.reverse();
          else this.messages.push(...(data && data.reverse()));
          this.pagination.message = { current_page, last_page };
          if (current_page == last_page) this.messagesLoaded = true;
        })
        .catch(err => {
          if (isCancel()) console.log("request cancelled");
          else console.log(err);
        });
    },
    sendMessage({ room_id, content, file, reply_message }) {
      var date = new Date();
      const data = {
        id: "v" + this.messages.length,
        content,
        sender_id: this.user.id,
        username: this.user.username,
        timestamp: date.getHours() + ":" + date.getMinutes()
      };
      let index;
      if (reply_message && reply_message.id) {
        index = this.messages.findIndex(e => e.id == reply_message.id);
        this.messages[index]["reply_message"] = data;
      } else index = this.messages.push(data) - 1;

      sendMessagesApi(room_id, {
        content,
        replay_id: reply_message && reply_message.id
      })
        .then(res => {
          if (reply_message && reply_message.id)
            this.messages[index]["reply_message"] = Object.assign(
              this.messages[index]["reply_message"],
              res
            );
          else this.messages[index] = Object.assign(this.messages[index], res);
        })
        .catch(err => {
          console.log(err);
          if (reply_message && reply_message.id) this.messages[index] = null;
          else this.messages.splice(index, 1);
        });
    },
    editMessage({ room_id, message_id, new_content, file, reply_message }) {
      const index = this.messages.findIndex(e => e.id == message_id);
      const content = this.messages[index].content;
      this.messages[index].content = new_content;
      editMessagesApi(message_id, { content: new_content })
        .then()
        .catch(err => {
          console.log(err);
          this.messages[index].content = content;
        });
    },
    deleteMessage({ room_id, message_id }) {
      const index = this.messages.findIndex(e => e.id == message_id);
      const message = this.messages.splice(index, 1);
      deleteMessagesApi(message_id)
        .then()
        .catch(err => {
          console.log(err);
          this.messages.splice(index, 0, message);
        });
    },

    paginate(name) {
      if (this.pagination[name].current_page && this.pagination[name].last_page)
        if (
          this.pagination[name].current_page < this.pagination[name].last_page
        ) {
          this.pagination[name].current_page += 1;
          return true;
        } else return false;
    },

    menuActionHandler({ room_id, action }) {
      switch (action.name) {
        case "inviteUser":
          this.openInviteUser = true;
          break;
        case "removeUser":
          this.openRemoveUser = true;
          break;
        case "quitRoom":
          this.openquitRoom = true;
          break;
      }
    },
    menuActionsOption(isOwner) {
      if (isOwner)
        this.menuActions = [
          {
            name: "inviteUser",
            title: "Invite User"
          },
          {
            name: "removeUser",
            title: "Remove User"
          },
          {
            name: "quitRoom",
            title: "Quit Room"
          }
        ];
      else
        this.menuActions = [
          {
            name: "quitRoom",
            title: "Quit Room"
          }
        ];
    },
    close() {
      this.openAddRoom = false;
      this.openquitRoom = false;
      this.openInviteUser = false;
      this.openRemoveUser = false;
    }
  }
};

function nameSeries(_obj) {
  return _obj["users"]
    .reduce((acc, curr) => acc + "," + curr.username, "")
    .substring(1);
}
function marge(rooms) {
  return rooms.filter(
    (e, i) => rooms.map(e => e.room_id).indexOf(e.room_id) === i
  );
}
</script>
