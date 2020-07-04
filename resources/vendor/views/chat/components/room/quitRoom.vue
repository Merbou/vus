<template>
  <v-dialog :value="open" max-width="300" @click:outside="close">
    <v-card>
      <v-card-title class="headline">{{$t('asker.title')}}</v-card-title>
      <v-card-text>{{$t('asker.message',{opt:'quit',obj:'room'})}}</v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="success" text class="white--text" @click="quitRoom()">{{$t('qst.yes')}}</v-btn>
        <v-btn :color="dark?'light':'secondary'" text class="white--text" @click="close()">{{$t('qst.cancel')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { quitRoomApi } from "@/api/chat/room.js";

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
    dark: {
      type: Boolean,
      default: false
    }
  },
  name: "quitRoom",
  methods: {
    quitRoom() {
      const room = { ...this.room };
      const room_id = room && room.room_id;
      if (room_id) {
        this.$emit("clearRoomIndex");
        this.$emit("shiftRoom", { room });
        quitRoomApi(room_id)
          .then(res => {})
          .catch(err => {
            this.$emit("pushRoom", { room });
            console.log(err);
          })
          .finally(() => {
            this.$emit("clearRoomIndex");
            this.close();
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