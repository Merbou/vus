<template>
  <div>
    <add-room :open="openAddRoom" @create="createRoom" @close="openAddRoom = false" />
    <chat-window
      :currentUserId="user.id"
      :rooms="rooms"
      :messages="messages"
      :loadingRooms="loadingRooms"
      :messagesLoaded="messagesLoaded"
      @fetchMessages="fetchMessages"
      @sendMessage="sendMessage"
      @editMessage="editMessage"
      @deleteMessage="deleteMessage"
      @addRoom="addRoom"
    ></chat-window>
  </div>
</template>

<script>
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";

import moment from "moment";
import { mapGetters } from "vuex";
import { fetchRoomsApi, createRoomsApi } from "@/api/chat/room.js";
import {
  fetchMessagesApi,
  sendMessagesApi,
  editMessagesApi,
  deleteMessagesApi
} from "@/api/chat/message.js";

import addRoom from "./components/addRoom";

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
      openAddRoom: false
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    this.fetchRooms();
  },
  methods: {
    fetchRooms() {
      this.loadingRooms = true;
      fetchRoomsApi()
        .then(res => {
          this.loadingRooms = false;
          this.rooms = res.data.map(e => reform(e));
        })
        .catch(err => {
          this.loadingRooms = false;
          console.log(err);
        });
    },
    fetchMessages({ room, options = {} }) {
      this.messagesLoaded = false;
      fetchMessagesApi(1, room.roomId)
        .then(res => {
          this.messages = res.data;
          if (res.current_page == res.last_page) this.messagesLoaded = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendMessage({ roomId, content, file, replyMessage }) {
      const data = {
        _id: "v" + this.messages.length,
        content,
        sender_id: this.user.id,
        username: this.user.username
      };
      const index = this.messages.push(data) - 1;
      sendMessagesApi(roomId, { content })
        .then(res => {
          this.messages[index]["_id"] = res.id;
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
    createVirtualroom({ roomName, select }) {
      const room = roomName ? roomName : nameSeries(select);
      return {
        roomId: "v" + this.rooms.length,
        roomName: room,
        users: select
      };
    }
  }
};

function reform(e) {
  if (!e["roomName"]) e["roomName"] = nameSeries(e["users"]);
  if (e["last_message"]) {
    e["lastMessage"] = { ...e["last_message"] };
    delete e["last_message"];
  } else delete e["last_message"];
  return e;
}
function nameSeries(_obj) {
  return _obj.reduce((acc, curr) => acc + "," + curr.username, "").substring(1);
}
function etc(val) {
  if (val) return val.length > 10 ? val.slice(0, 20) + "..." : val;
}
</script>

<style>
.room-header.app-border-b,
.container-scroll {
  z-index: 1 !important;
}
</style>