<template>
  <v-dialog :value="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="headline">New Room</span>
      </v-card-title>

      <v-card-text>
        <v-container>
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
                v-model="item.roomName"
                :error-messages="errors"
                :success="valid"
                label="Room name"
                outlined
                solo
                rounded
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="Search field" rules="max:30|alpha_dash">
              <v-autocomplete
                v-model="item.select"
                :items="people"
                @update:search-input="searchPeople"
                return-object
                label="invite someone"
                no-filter
                multiple
                outlined
                solo
                rounded
                chips
              >
                <template v-slot:selection="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      :disabled="data.disabled"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <v-avatar
                        class="accent white--text"
                        left
                        v-text="data.item.slice(0, 1).toUpperCase()"
                      ></v-avatar>
                      <v-list-item-content v-text="data.item"></v-list-item-content>
                      {{ data.item }}
                    </v-chip>
                  </template>
                  <template v-else>
                    <v-chip
                      :key="data.item.id"
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      :disabled="data.disabled"
                      @click:close="data.parent.selectItem(data.item.username)"
                    >
                      <v-avatar
                        class="accent white--text"
                        left
                        v-text="data.item.username.slice(0, 1).toUpperCase()"
                      ></v-avatar>
                      <v-list-item-content v-text="data.item.username"></v-list-item-content>
                      {{ data.item.username }}
                    </v-chip>
                  </template>
                </template>
                <template v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content v-text="data.item"></v-list-item-content>
                  </template>
                  <template v-else>
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.username"></v-list-item-title>
                      <v-list-item-subtitle v-html="data.item.email"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
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
      item: {
        roomName: "",
        select: []
      }
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
    async validate() {
      const result = await this.$refs.create.validate();
      if (result) this.$emit("create", this.item);
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>