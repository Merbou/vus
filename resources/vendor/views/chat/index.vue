<template>
  <div>
    <add-room :open="openAddRoom" @create="createRoom" @close="openAddRoom = false" />
    <chat-window
      :showFiles="false"
      :showEmojis="false"
      :showReactionEmojis="false"
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
import ChatWindow from "@/materiels/Chat/ChatWindow";

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
      openAddRoom: false,
      pagination: {
        room: {
          current_page: 1,
          last_page: ""
        },
        message: {
          current_page: 1,
          last_page: ""
        }
      }
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
      if (!this.paginate("room")) this.loadingRooms = false;
      fetchRoomsApi(this.pagination.room.current_page)
        .then(({ data, current_page, last_page }) => {
          this.rooms.push(...data);
          this.pagination.room = { current_page, last_page };
        })
        .catch(err => console.log(err))
        .finally(() => (this.loadingRooms = false));
    },
    fetchMessages({ room, options = {} }) {
      if (!this.paginate("message")) this.messagesLoaded = true;

      this.messagesLoaded = false;
      fetchMessagesApi(this.pagination.message.current_page, room.roomId)
        .then(({ data, current_page, last_page }) => {
          this.messages.push(...data);
          this.pagination.message = { current_page, last_page };
          if (current_page == last_page) this.messagesLoaded = true;
        })
        .catch(err => {
          console.log(err);
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
</script>

<style>
.room-header.app-border-b,
.container-scroll {
  z-index: 1 !important;
}
</style>