<template >
  <div>
    <add-room
      v-if="openAddRoom"
      :open="openAddRoom"
      :roomsLength="rooms.length"
      :user="user"
      :dark="dark"
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
      :dark="dark"
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
      :dark="dark"
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
      :dark="dark"
      @putRoomIndex="putRoomIndex"
      @pushRoomContent="pushRoomContent"
      @clearRoomIndex="clearRoomIndex"
      @shiftRoom="shiftRoom"
      @pushRoom="pushRoom"
      @close="close()"
    />
    <chat-window
      :theme="(dark)?'dark':'light'"
      :rtl="RTL"
      :showFiles="false"
      :showEmojis="false"
      :showReactionEmojis="false"
      :filterRoom="false"
      cachRooms
      :currentUserId="user.id"
      :rooms="rooms"
      :messages="messages"
      :menuActions="menuActions"
      :messageActions="messageActions"
      :textMessages="textMessages"
      :loadingRooms="loadingRooms"
      :messagesLoaded="messagesLoaded"
      :isLastRoomList="load_more"
      @fetchMessages="fetchMessages"
      @fetchRoom="fetchRoom"
      @sendMessage="sendMessage"
      @editMessage="editMessage"
      @deleteMessage="deleteMessage"
      @addRoom="addRoom"
      @searchRoom="searchRoom"
      @focusMessageFrom="focusMessageFrom"
      @loadMore="loadMore"
      @menuActionHandler="menuActionHandler"
    ></chat-window>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatWindow from "@/materiels/Chat/ChatWindow";
import { addRoom, quitRoom, removeUser, inviteUser } from "./components/room";
import methods from "./parts";
import { debounce } from "lodash";
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
          last_page: 1
        },
        message: {
          current_page: 1,
          last_page: 1
        }
      },
      rooms_cache: [],
      pagination_cache: {
        current_page: 1,
        last_page: 1
      },
      menuActions: [
        {
          name: "quitRoom",
          title: this.$i18n.t("$menu_chat_room.quitRoom")
        }
      ],
      messageActions: [
        {
          name: "replyMessage",
          title: this.$i18n.t("$menu_chat_message.replyMessage")
        },
        {
          name: "editMessage",
          title: this.$i18n.t("$menu_chat_message.editMessage"),
          onlyMe: true
        },
        {
          name: "deleteMessage",
          title: this.$i18n.t("$menu_chat_message.deleteMessage"),
          onlyMe: true
        }
      ],
      textMessages: {
        ROOMS_EMPTY: this.$i18n.t("_chat.rooms_empty"),
        LOADMORE: this.$i18n.t("_chat.load_more"),
        NEW_MESSAGES: this.$i18n.t("_chat.new_messages"),
        MESSAGE_DELETED: this.$i18n.t("_chat.echo_messages_deleted"),
        MESSAGES_EMPTY: this.$i18n.t("_chat.messages_empty"),
        CONVERSATION_STARTED: this.$i18n.t("_chat.conversation_started"),
        TYPE_MESSAGE: this.$i18n.t("_chat.type_messages"),
        SEARCH: this.$i18n.t("_chat.search")
      }
    };
  },
  computed: {
    ...mapGetters(["user", "channel", "dark", "RTL"]),
    load_more() {
      if (this.pagination && this.pagination.room)
        return (
          this.pagination.room.current_page >= this.pagination.room.last_page
        );
    }
  },
  created() {
    //load the laravel-echo
    this.MessageEcho();
    this.fetchRooms();
    this.debouncedServiceSearchRoom = debounce(this.serviceSearchRoom, 500);
  },
  destroyed() {
    localStorage.removeItem("rooms");
  },
  methods: {
    ...methods
  }
};
</script>
