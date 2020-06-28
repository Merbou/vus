<template >
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
      @focusMessageFrom="focusMessageFrom"
      @menuActionHandler="menuActionHandler"
    ></chat-window>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatWindow from "@/materiels/Chat/ChatWindow";
import { addRoom, quitRoom, removeUser, inviteUser } from "./components/room";
import methods from "./parts";

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
    ...methods
  }
};
</script>
