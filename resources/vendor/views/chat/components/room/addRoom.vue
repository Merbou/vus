<template>
  <v-dialog :value="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="headline">New Room</span>
      </v-card-title>

      <v-card-text>
        <ValidationProvider name="Search field" rules="max:30|alpha_dash">
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
        </ValidationProvider>
        <ValidationObserver
          ref="create"
          class="container"
          autocomplete="on"
          v-on:submit.prevent="validate()"
        >
          <ValidationProvider name="Room name" rules="max:30|alpha_dash">
            <v-text-field
              slot-scope="{
                            errors,
                            valid
                        }"
              v-model="room_name"
              :error-messages="errors"
              :success="valid"
              label="Room name (optionnal)"
              outlined
              solo
              rounded
            ></v-text-field>
          </ValidationProvider>
        </ValidationObserver>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="blue darken-1" text @click="close()">cancel</v-btn>
        <v-btn color="blue darken-1" text @click="validate()">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { max, alpha_dash } from "./validate";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { searchUserApi } from "@/api/user/search.js";
import { createRoomsApi } from "@/api/chat/room.js";
export default {
  name: "addRoom",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    roomsLength: {
      type: Number,
      default: 0
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
      loading: false,
      room_name: ""
    };
  },
  methods: {
    searchPeople(data) {
      if (data) {
        this.loading = true;
        searchUserApi({ selected: data })
          .then(res => {
            this.people = res.users;
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => (this.loading = false));
      }
    },
    create() {
      this.select = this.select.filter(e => typeof e === "object");
      const room_name = this.room_name;
      const ids = this.select.map(e => e.id);
      const room = this.createVirtualroom({
        room_name,
        select: [...this.select, this.user]
      });

      this.$emit("pushRoom", { room });

      createRoomsApi({ room_name, ids })
        .then(res => {
          this.$emit("pushRoomContent", { room_id: res.id });
        })
        .catch(err => {
          console.log(err);
          this.$emit("shiftRoom", { room });
        })
        .finally(() => {
          this.$emit("clearRoomIndex");
          this.close();
        });
    },
    createVirtualroom({ room_name, select }) {
      const room = room_name ? room_name : nameSeries({ users: select });
      return {
        room_id: "v" + this.roomsLength,
        room_name: room,
        users: select,
        owner: this.user.id
      };
    },
    async validate() {
      const result = await this.$refs.create.validate();
      if (result) this.create();
    },
    remove(item) {
      const index = this.select.indexOf(item);
      if (index >= 0) this.select.splice(index, 1);
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

function nameSeries(_obj) {
  return _obj["users"]
    .reduce((acc, curr) => acc + "," + curr.username, "")
    .substring(1);
}
</script>

<style>
</style>