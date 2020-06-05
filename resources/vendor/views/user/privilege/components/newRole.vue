<template>
  <v-dialog v-model="open" max-width="500px" @click:outside="close">
    <v-card>
      <v-card-title>
        <span class="headline">New role</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <ValidationObserver
            ref="create"
            class="container"
            autocomplete="on"
            v-on:submit.prevent="validate()"
          >
            <ValidationProvider name="name" rules="max:20|required|alpha_dash">
              <v-text-field
                slot-scope="{
                            errors,
                            valid
                        }"
                v-model="item.name"
                :error-messages="errors"
                :success="valid"
                label="Role"
              ></v-text-field>
            </ValidationProvider>
          </ValidationObserver>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="blue darken-1" text @click="close()">cancel</v-btn>
        <v-btn color="blue darken-1" text @click="validate()">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { max, required, alpha_dash } from "../validate";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "newRole",
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
      item: {
        id: "",
        name: ""
      }
    };
  },
  methods: {
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