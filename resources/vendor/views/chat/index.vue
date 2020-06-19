<template>
  <div>
    <chat-window
      :currentUserId="user.id"
      :rooms="rooms"
      :messages="messages"
      :loadingRooms="loadingRooms"
      :showAddRoom="false"
      :messagesLoaded="messagesLoaded"
      @fetchMessages="fetchMessages"
      @sendMessage="sendMessage"
      @editMessage="editMessage"
      @deleteMessage="deleteMessage"
    ></chat-window>
  </div>
</template>

<script>
import moment from "moment";
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";
import { fetchRoomsApi } from "@/api/chat/room.js";
import {
  fetchMessagesApi,
  sendMessagesApi,
  editMessagesApi,
  deleteMessagesApi
} from "@/api/chat/message.js";
import { mapGetters } from "vuex";
export default {
  components: {
    ChatWindow
  },
  data() {
    return {
      rooms: [],
      messages: [],
      loadingRooms: false,
      messagesLoaded: false
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
      fetchMessagesApi(1, room.roomId)
        .then(res => {
          this.messages = res.data;
          if ((res.current_page = res.last_page)) this.messagesLoaded = true;
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
    }
  }
};

function reform(e) {
  e["lastMessage"] = { ...e["last_message"] };
  delete e["last_message"];
  return e;
}
</script>

<style>
.room-header.app-border-b {
  z-index: 1 !important;
}
</style>