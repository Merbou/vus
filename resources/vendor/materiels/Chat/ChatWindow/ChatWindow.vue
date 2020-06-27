<template>
  <div class="card-window" :style="[{ height }, cssVars]">
    <div class="chat-container">
      <rooms-list
        v-if="!singleRoom"
        :currentUserId="currentUserId"
        :rooms="orderedRooms"
        :loadingRooms="loadingRooms"
        :room="room"
        :filterRoom="filterRoom"
        :textMessages="t"
        :showAddRoom="showAddRoom"
        :showRoomsList="showRoomsList"
        :textFormatting="textFormatting"
        :isMobile="isMobile"
        @fetchRoom="fetchRoom"
        @addRoom="addRoom"
        @searchRoom="searchRoom"
      >
        <template v-slot:rooms-header>
          <slot name="rooms-header"></slot>
        </template>
      </rooms-list>

      <room
        :currentUserId="currentUserId"
        :rooms="rooms"
        :room_id="room.room_id || ''"
        :messages="messages"
        :messagesLoaded="messagesLoaded"
        :menuActions="menuActions"
        :messageActions="messageActions"
        :showFiles="showFiles"
        :showEmojis="showEmojis"
        :showReactionEmojis="showReactionEmojis"
        :textMessages="t"
        :singleRoom="singleRoom"
        :showRoomsList="showRoomsList"
        :textFormatting="textFormatting"
        :isMobile="isMobile"
        :loadingRooms="loadingRooms"
        :roomInfo="$listeners.roomInfo"
        @toggleRoomsList="toggleRoomsList"
        @roomInfo="roomInfo"
        @fetchMessages="fetchMessages"
        @sendMessage="sendMessage"
        @editMessage="editMessage"
        @deleteMessage="deleteMessage"
        @openFile="openFile"
        @menuActionHandler="menuActionHandler"
        @messageActionHandler="messageActionHandler"
        @sendMessageReaction="sendMessageReaction"
        @typingMessage="typingMessage"
      ></room>
    </div>
  </div>
</template>

<script>
import RoomsList from "./RoomsList";
import Room from "./Room";
import locales from "../locales";
import { defaultThemeStyles, cssThemeVars } from "../themes";
const { roomsValid, partcipantsValid } = require("../utils/roomValidation");
export default {
  name: "chat-container",
  components: {
    RoomsList,
    Room
  },
  props: {
    height: { type: String, default: "600px" },
    theme: { type: String, default: "light" },
    styles: { type: Object, default: () => ({}) },
    responsiveBreakpoint: { type: Number, default: 900 },
    singleRoom: { type: Boolean, default: false },
    filterRoom: { type: Boolean, default: true },
    textMessages: { type: Object, default: null },
    currentUserId: { type: [String, Number], default: "" },
    rooms: { type: Array, default: () => [] },
    loadingRooms: { type: Boolean, default: false },
    room_id: { type: [String, Number], default: null },
    messages: { type: Array, default: () => [] },
    messagesLoaded: { type: Boolean, default: false },
    menuActions: { type: Array, default: () => [] },
    messageActions: {
      type: Array,
      default: () => [
        { name: "replyMessage", title: "Reply" },
        { name: "editMessage", title: "Edit Message", onlyMe: true },
        { name: "deleteMessage", title: "Delete Message", onlyMe: true }
      ]
    },
    showAddRoom: { type: Boolean, default: true },
    showFiles: { type: Boolean, default: true },
    showEmojis: { type: Boolean, default: true },
    showReactionEmojis: { type: Boolean, default: true },
    textFormatting: { type: Boolean, default: true },
    newMessage: { type: Object, default: null }
  },
  data() {
    return {
      room: {},
      showRoomsList: true,
      isMobile: false
    };
  },
  watch: {
    rooms(newVal, oldVal) {
      if (newVal[0] && newVal.length !== oldVal.length) {
        if (this.room_id) {
          const room = newVal.find(r => r.room_id === this.room_id);
          this.fetchRoom({ room });
        } else if (!this.isMobile) {
          this.fetchRoom({ room: this.orderedRooms[0] });
        } else {
          this.showRoomsList = true;
        }
      }
    },
    room_id: {
      immediate: true,
      handler(val) {
        if (val && !this.loadingRooms && this.rooms.length) {
          const room = this.rooms.find(r => r.room_id === val);
          this.fetchRoom({ room });
        }
      }
    },
    _room(val) {
      if (!val) return;
      if (Object.entries(val).length === 0) return;
      if (!roomsValid(val)) {
        throw "Rooms object is not valid! Must contain room_id[String, Number], room_name[String] and users[Array]";
      }
      val.users.forEach(user => {
        if (!partcipantsValid(user)) {
          throw "Participants object is not valid! Must contain _id[String, Number] and username[String]";
        }
      });
    },
    newMessage(val) {
      this.$set(this.messages, val.index, val.message);
    }
  },
  mounted() {
    this.updateResponsive();
    window.addEventListener("resize", ev => {
      if (ev.isTrusted) this.updateResponsive();
    });
  },
  computed: {
    t() {
      return {
        ...locales,
        ...this.textMessages
      };
    },
    cssVars() {
      const defaultStyles = defaultThemeStyles[this.theme];
      const customStyles = {};
      Object.keys(defaultStyles).map(key => {
        customStyles[key] = {
          ...defaultStyles[key],
          ...(this.styles[key] || {})
        };
      });
      return cssThemeVars(customStyles);
    },
    orderedRooms() {
      return this.rooms.slice().sort((a, b) => {
        const aVal = a.last_message || { date: 0 };
        const bVal = b.last_message || { date: 0 };
        return aVal.date > bVal.date ? -1 : bVal.date > aVal.date ? 1 : 0;
      });
    },
  },
  methods: {
    searchRoom(elm) {
      this.$emit("searchRoom", elm);
    },
    updateResponsive() {
      this.isMobile = window.innerWidth < this.responsiveBreakpoint;
    },
    toggleRoomsList() {
      this.showRoomsList = !this.showRoomsList;
      if (this.isMobile) this.room = {};
    },
    fetchRoom({ room }) {
      this.$emit("fetchRoom", {room});
      this.room = room;
      // this.fetchMessages({ reset: true });
      if (this.isMobile) this.showRoomsList = false;
    },
    roomInfo() {
      this.$emit("roomInfo", this.room);
    },
    addRoom() {
      this.$emit("addRoom");
    },
    fetchMessages(options) {
      this.$emit("fetchMessages", { room: this.room, options });
    },
    sendMessage(message) {
      this.$emit("sendMessage", { ...message, room_id: this.room.room_id });
    },
    editMessage(message) {
      this.$emit("editMessage", { ...message, room_id: this.room.room_id });
    },
    deleteMessage(message_id) {
      this.$emit("deleteMessage", { message_id, room_id: this.room.room_id });
    },
    openFile(message) {
      this.$emit("openFile", message);
    },
    menuActionHandler(ev) {
      this.$emit("menuActionHandler", { action: ev, room_id: this.room.room_id });
    },
    messageActionHandler(ev) {
      this.$emit("messageActionHandler", {
        ...ev,
        room_id: this.room.room_id
      });
    },
    sendMessageReaction(messageReaction) {
      this.$emit("sendMessageReaction", {
        ...messageReaction,
        room_id: this.room.room_id
      });
    },
    typingMessage(message) {
      this.$emit("typingMessage", {
        message,
        room_id: this.room.room_id
      });
    }
  }
};

</script>

<style lang="scss">
@import "../styles/index.scss";
* {
  font-family: inherit;
}
a {
  color: #0d579c;
}
.card-window {
  width: 100%;
  display: block;
  max-width: 100%;
  background: var(--chat-content-bg-color);
  color: var(--chat-color);
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  border: var(--chat-container-border);
  border-radius: var(--chat-container-border-radius);
  box-shadow: var(--chat-container-box-shadow);
}
.chat-container {
  height: 100%;
  display: flex;
  textarea,
  input[type="text"],
  input[type="search"] {
    -webkit-appearance: none;
  }
}
</style>