<template>
  <div>
    <add-room :open="openAddRoom" @create="createRoom" @close="openAddRoom = false" />
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
    ></chat-window>
  </div>
</template>

<script>
import ChatWindow from "@/materiels/Chat/ChatWindow";

import { mapGetters } from "vuex";
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
import filterItems from "@/utils/filterItems";

import addRoom from "./components/addRoom";
import { isCancel } from "axios";

export default {
  components: {
    ChatWindow,
    addRoom
  },
  data() {
    return {
      rooms: [],
      messages: [],
      loadingRooms: false,
      messagesLoaded: false,
      openAddRoom: false,
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
          name: "inviteUser",
          title: "Invite User"
        },
        {
          name: "removeUser",
          title: "Remove User"
        },
        {
          name: "deleteRoom",
          title: "Delete Room"
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
    addRoom() {
      this.openAddRoom = true;
    },
    createRoom(data) {
      const { roomName, select } = data;

      const ids = select.map(e => e.id);

      const index = this.rooms.push(this.createVirtualroom(data)) - 1;

      createRoomsApi({ roomName, ids })
        .then(res => {
          this.rooms[index]["roomId"] = res.id;
        })
        .catch(err => {
          console.log(err);
          this.rooms.splice(index, 1);
        })
        .finally(err => (this.openAddRoom = false));
    },
    fetchRoom({ room }) {
      this._httpCancel && this._httpCancel.cancel();
      this.pagination.message = {
        current_page: 1,
        last_page: ""
      };
      this.messages = [];
      this.fetchMessages({ room });
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
    createVirtualroom({ roomName, select }) {
      const room = roomName ? roomName : nameSeries(select);
      return {
        roomId: "v" + this.rooms.length,
        roomName: room,
        users: select
      };
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
          if (current_page == 1) this.messages = data.reverse();
          else this.messages.push(...data.reverse());
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
