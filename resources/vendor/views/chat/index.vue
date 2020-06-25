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
      @close="openAddRoom = false"
    />
    <quit-room
      v-if="openquitRoom"
      :open="openquitRoom"
      :room="room"
      :user="user"
      @shiftRoom="shiftRoom"
      @pushRoom="pushRoom"
      @clearRoomIndex="clearRoomIndex"
      @close="openquitRoom = false"
    />
    <invite-user
      v-if="openInviteUser"
      :open="openInviteUser"
      :room="room"
      :user="user"
      @clearRoomIndex="clearRoomIndex"
      @putRoomIndex="putRoomIndex"
      @pushRoomContent="pushRoomContent"
      @close="openInviteUser = false"
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
      @close="openRemoveUser = false"
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
import ChatWindow from "@/materiels/Chat/ChatWindow";
import { addRoom, quitRoom, removeUser, inviteUser } from "./components";

import { mapGetters } from "vuex";
import { isCancel } from "axios";
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
  mounted() {
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
        this.indexRoom = this.rooms.findIndex(e => e.roomId === room.roomId);
      }
      this.rooms.splice(this.indexRoom, 1);
      if (!this.rooms.length) this.messages = [];
    },
    pushRoomContent(Content) {
      for (const key in Content) this.rooms[this.indexRoom][key] = Content[key];
    },
    clearRoomIndex() {
      this.indexRoom = "";
    },
    putRoomIndex(id) {
      this.indexRoom = this.rooms.findIndex(e => e.roomId === id);
    },
    fetchMessages({ room }) {
      if (!this.paginate("message")) this.messagesLoaded = true;
      const MessagesApi = fetchMessagesApi(
        this.pagination.message.current_page,
        room.roomId
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
    sendMessage({ roomId, content, file, replyMessage }) {
      var date = new Date();
      const data = {
        _id: "v" + this.messages.length,
        content,
        sender_id: this.user.id,
        username: this.user.username,
        timestamp: date.getHours() + ":" + date.getMinutes()
      };
      const index = this.messages.push(data) - 1;
      sendMessagesApi(roomId, { content })
        .then(res => {
          this.messages[index] = Object.assign(this.messages[index], res);
        })
        .catch(err => {
          console.log(err);
          this.messages.splice(index, 1);
        });
    },
    editMessage({ roomId, messageId, newContent, file, replyMessage }) {
      const index = this.messages.findIndex(e => e._id == messageId);
      const content = this.messages[index].content;
      this.messages[index].content = newContent;
      editMessagesApi(messageId, { content: newContent })
        .then()
        .catch(err => {
          console.log(err);
          this.messages[index].content = content;
        });
    },
    deleteMessage({ roomId, messageId }) {
      const index = this.messages.findIndex(e => e._id == messageId);
      const message = this.messages.splice(index, 1);
      deleteMessagesApi(messageId)
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

    menuActionHandler({ roomId, action }) {
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
    (e, i) => rooms.map(e => e.roomId).indexOf(e.roomId) === i
  );
}
</script>
