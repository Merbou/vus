<template>
  <v-dialog :value="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="headline">New Room</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <ValidationProvider name="Search field" rules="max:30|alpha_dash">
            <v-combobox
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
                  <!-- <v-list-item-avatar>
                      <img :src="data.item.avatar" />
                  </v-list-item-avatar>-->
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
                v-model="roomName"
                :error-messages="errors"
                :success="valid"
                label="Room name"
                outlined
                solo
                rounded
              ></v-text-field>
            </ValidationProvider>
          </ValidationObserver>
        </v-container>
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
    }
  },
  data() {
    return {
      people: [],
      select: null,
      roomName: ""
    };
  },
  methods: {
    searchPeople(data) {
      if (data)
        searchUserApi({ selected: data })
          .then(res => {
            this.people = res.users;
          })
          .catch(err => {
            console.log(err);
          });
    },
    create() {
      const select = this.select.filter(e => typeof e === "object");
      const roomName = this.roomName;
      this.$emit("create", { roomName, select });
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
</script>

<style>
</style>