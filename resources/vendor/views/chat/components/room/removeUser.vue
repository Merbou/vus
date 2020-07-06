<template>
  <v-dialog :value="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title class="headline">{{$t('$remove_user_room.title')}}</v-card-title>
      <v-card-text>
        <v-select
          v-model="kicked"
          :items="roomWithOutCurrentUser"
          attach
          chips
          item-text="username"
          return-object
          outlined
          multiple
          solo
          small-chips
          rounded
        ></v-select>
      </v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="info"
          dark
          @click="removeUser()"
          :disabled="clicked"
        >{{$t('$remove_user_room.submit')}}</v-btn>
        <v-btn :color="dark?'light':'secondary'" text class="white--text" @click="close()">{{$t('qst.cancel')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { kickRoomApi } from "@/api/chat/room.js";

export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    room: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    roomWithOutCurrentUser() {
      return (
        (this.room && this.room.users.filter(e => e.id !== this.user.id)) || []
      );
    }
  },
  data() {
    return {
      kicked: [],
      clicked: false
    };
  },
  name: "removeUser",
  methods: {
    removeUser() {
      if (!this.kicked || !this.kicked.length) return;

      this.clicked = true;
      const ids = this.kicked.map(e => e.id);
      const room = { ...this.room };
      if (room) {
        const users = room.users;
        const noKicked = room.users.filter(
          e => this.kicked.map(e => e.id).indexOf(e.id) == -1
        );
        const room_id = room.room_id;
        this.$emit("putRoomIndex", room_id);

        if (noKicked.length < 2) this.$emit("shiftRoom", { room });
        else this.$emit("pushRoomContent", { users: noKicked });
        this.close();
        kickRoomApi(room_id, { ids })
          .then(res => {})
          .catch(err => {
            console.log(err);

            if (noKicked.length < 2) this.$emit("pushRoom", { room });
            else this.$emit("pushRoomContent", { users: users });
          })
          .finally(() => {
            this.$emit("clearRoomIndex");
            this.close();
            setTimeout(() => {
              this.clicked = true;
            }, 1000);
          });
      } else this.close();
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>