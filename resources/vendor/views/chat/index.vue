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
    ></chat-window>
  </div>
</template>

<script>
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";
import { fetchRoomsApi } from "@/api/chat/room.js";
import { fetchMessagesApi } from "@/api/chat/message.js";
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
          this.rooms = res.data;
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
    }
  }
};
</script>
