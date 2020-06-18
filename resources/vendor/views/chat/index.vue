<template>
  <div>
    <chat-window
      :currentUserId="1234"
      :rooms="rooms"
      :messages="messages"
      @fetchMessages="fetchMessages"
    ></chat-window>
  </div>
</template>

<script>
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";
import { fetchRoomsApi } from "@/api/chat/room.js";
export default {
  components: {
    ChatWindow
  },
  data() {
    return {
      rooms: [],
      messages: []
    };
  },
  mounted() {
    this.fetchRooms();
  },
  methods: {
    fetchRooms() {
      fetchRoomsApi()
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    },
    fetchMessages({ room, options = {} }) {}
  }
};
</script>
