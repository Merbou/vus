<template>
  <v-dialog :value="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title class="headline">{{$t('$invite_user_room.title')}}</v-card-title>
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
          :label="$t('label.invite_someone')"
          no-filter
          outlined
          multiple
          solo
          small-chips
          rounded
          chips
        >
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
                <v-list-item-title>{{data.item.username}}</v-list-item-title>
                <v-list-item-subtitle>{{data.item.email}}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-combobox>
      </v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn
          color="info"
          dark
          @click="inviteUser()"
          :disabled="clicked"
        >{{$t('$invite_user_room.submit')}}</v-btn>
        <v-btn :color="dark?'light':'secondary'" text @click="close()">{{$t('qst.cancel')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { inviteRoomApi } from "@/api/chat/room.js";
import { searchUserApi } from "@/api/user/search.js";
import { debounce } from "lodash";

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
      let select = [
        ...(this.select && this.select.filter(e => typeof e === "object"))
      ];

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
    //    searchPeople(data) {
    //      if (data) {
    //        const ids = this.room && this.room.users.map(e => e.id).filter(e => e);
    //        this.loading = true;
    //        searchUserApi({ selected: data, ids })
    //          .then(res => {
    //            this.people = res.users;
    //          })
    //          .catch(err => {
    //            console.log(err);
    //          })
    //          .finally(() => (this.loading = false));
    //      }
    //    },
    inviteUser() {
      if (!this.select || !this.select.length) return;
      this.vLoading(true);
      this.clicked = true;
      const users = this.room.users;
      this.select = this.select.filter(
        e => users.map(e => e.id).indexOf(e.id) == -1 && typeof e === "object"
      );

      const ids = this.select.map(e => e.id);

      const room_id = this.room.room_id;
      this.$emit("putRoomIndex", room_id);
      if (this.room)
        inviteRoomApi(room_id, { ids })
          .then(res => {
            this.$emit("pushRoomContent", {
              users: [...users, ...this.select]
            });
          })
          .catch(err => {
            console.log(err);

            this.snackbar({
              text: this.$i18n.t("alert.failed"),
              color: "error"
            });
            this.$emit("pushRoomContent", {
              users: users
            });
          })
          .finally(() => {
            this.vLoading(false);
            this.$emit("clearRoomIndex");
            this.close();
            setTimeout(() => {
              this.clicked = true;
            }, 1000);
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
.v-input__icon.v-input__icon--append {
  display: none;
}
.v-dialog {
  overflow-y: initial !important;
}
</style>