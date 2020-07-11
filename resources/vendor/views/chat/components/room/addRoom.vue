<template>
  <v-dialog :value="open" max-width="500" @click:outside="close">
    <v-card v-on:keyup.enter="validate()">
      <v-card-title>
        <span class="headline">{{$t('$new_room.title')}}</span>
      </v-card-title>

      <v-card-text>
        <ValidationProvider :name="$t('label.search')" rules="max:30|alpha_spaces">
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
            :label="$tc('label.invite_someone')"
            no-filter
            outlined
            multiple
            return-object
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
            <template v-slot:append-item>
              <v-container>
                <template>
                  <v-list-item-content>
                    <v-pagination
                      v-if="pagination.last_page>1"
                      :length="pagination.last_page"
                      @input="loadMore"
                      v-model="pagination.current_page"
                      color="info"
                      total-visible="5"
                      circle
                    ></v-pagination>
                  </v-list-item-content>
                </template>
              </v-container>
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
                  class="white--text"
                  left
                  color="info"
                >{{data.item.username.slice(0, 1).toUpperCase()}}</v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{data.item.username}}</v-list-item-title>
                  <v-list-item-subtitle>{{data.item.email}}</v-list-item-subtitle>
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
          :disabled="clicked"
        >
          <ValidationProvider :name="$tc('label.name',1)" rules="max:30|alpha_spaces">
            <v-text-field
              slot-scope="{
                            errors,
                            valid
                        }"
              v-model="room_name"
              :error-messages="errors"
              :success="valid"
              :label="`${$tc('label.name',1)} ${$tc('label.optionnal')}`"
              outlined
              solo
              rounded
            ></v-text-field>
          </ValidationProvider>
        </ValidationObserver>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="info" dark @click="validate()" :disabled="clicked">{{$t('$new_room.create')}}</v-btn>
        <v-btn :color="dark?'light':'secondary'" text @click="close()">{{$t('qst.cancel')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { debounce } from "lodash";
import { max, alpha_spaces } from "./validate";
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
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      people: [],
      select: [],
      loading: false,
      clicked: false,
      pagination: {
        current_page: 1,
        last_page: 1
      },
      room_name: "",
      u_query: ""
    };
  },
  created() {
    this.debouncedServiceSearchPeople = debounce(this.serviceSearchPeople, 500);
  },
  methods: {
    loadMore() {
      let current_page = this.pagination.current_page;
      if (current_page <= this.pagination.last_page)
        this.debouncedServiceSearchPeople(
          { u_query: this.u_query },
          current_page
        );
    },
    searchPeople(u_query) {
      this.u_query = u_query;
      this.debouncedServiceSearchPeople({ u_query });
    },
    serviceSearchPeople({ u_query }, page) {
      if (!u_query || u_query.length < 2) return;
      this.loading = true;
      let select = [...this.select.filter(e => typeof e === "object")];

      searchUserApi({ u_query }, page)
        .then(({ users }) => {
          let { data, ...res } = users;

          this.people = [...select, ...data];
          this.select = select;
          this.pagination = Object.assign(this.pagination, res);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
    create() {
      if (!this.select || !this.select.length) return;
      this.vLoading(true);
      this.clicked = true;
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
          this.snackbar({
            text: this.$i18n.t("alert.complete"),
            color: "success"
          });
        })
        .catch(err => {
          console.log(err);
          this.snackbar({
            text: this.$i18n.t("alert.failed"),
            color: "error"
          });
          this.$emit("shiftRoom", { room });
        })
        .finally(() => {
          this.vLoading(false);
          this.$emit("clearRoomIndex");
          this.close();
          setTimeout(() => {
            this.clicked = false;
          }, 1000);
        });
    },
    createVirtualroom({ room_name, select }) {
      return {
        room_id: "v" + this.roomsLength,
        room_name: room_name,
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

<style scoped>
.v-input__icon.v-input__icon--append {
  display: none;
}
.v-dialog {
  overflow-y: initial !important;
}
</style>