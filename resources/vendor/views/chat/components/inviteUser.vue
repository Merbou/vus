<template>
  <v-dialog :value="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title class="headline">Invite someone out</v-card-title>
      <v-card-text>
        <v-combobox
          :loading="loading"
          v-model="select"
          :items="people"
          :allow-overflow="false"
          hide-no-data
          hide-selected
          @update:search-input="searchPeople"
          item-value="id"
          item-text="username"
          label="invite someone"
          no-filter
          outlined
          multiple
          solo
          small-chips
          rounded
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove(data.item)"
            >{{ data.item.username|etc }}</v-chip>
          </template>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item"></v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-avatar v-if="data.item.picture_path">
                <img :src="'/storage/' + data.item.picture_path" />
              </v-list-item-avatar>
              <v-list-item-avatar
                v-else
                class="accent white--text"
                left
                v-text="data.item.username.slice(0, 1).toUpperCase()"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.username"></v-list-item-title>
                <v-list-item-subtitle v-html="data.item.email"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-combobox>
      </v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="green" text class="white--text" @click="inviteUser()">Invite</v-btn>
        <v-btn color="secondary" text class="white--text" @click="close()">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { inviteRoomApi } from "@/api/chat/room.js";
import { searchUserApi } from "@/api/user/search.js";

export default {
  name: "inviteUser",

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
      default: {}
    }
  },
  data() {
    return {
      people: [],
      select: null,
      loading: false
    };
  },
  methods: {
    searchPeople(data) {
      if (data) {
        const ids = this.room && this.room.users.map(e => e._id).filter(e => e);
        this.loading = true;
        searchUserApi({ selected: data, ids })
          .then(res => {
            this.people = res.users;
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => (this.loading = false));
      }
    },
    inviteUser() {
      const users = this.room.users;
      this.select = this.select.filter(
        e => users.map(e => e._id).indexOf(e.id) == -1 && typeof e === "object"
      );

      const ids = this.select.map(e => e.id);

      const roomId = this.room.roomId;
      this.$emit("putRoomIndex", roomId);
      if (this.room)
        inviteRoomApi(roomId, { ids })
          .then(res => {
            this.$emit("pushRoomContent", {
              users: [...users, ...this.select]
            });
          })
          .catch(err => {
            console.log(err);
            this.$emit("pushRoomContent", {
              users: users
            });
          })
          .finally(() => {
            this.$emit("clearRoomIndex");
            this.close();
          });
      else this.close();
    },

    close() {
      this.$emit("close");
    }
  },
  filters: {
    etc(val) {
      if (val) return val.length > 10 ? val.slice(0, 10) + "..." : val;
    }
  }
};
</script>

<style>
</style>