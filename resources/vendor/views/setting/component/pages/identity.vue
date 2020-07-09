<template>
  <v-card :loading="loading" :disabled="loading" shaped>
    <v-card-text>
      <v-col wrap>
        <div xs12 md12 lg12 sm12>
          <ValidationProvider :name="$tc('label.lastname')" rules="alpha_spaces">
            <v-text-field
              @change="fireInfo"
              slot-scope="{
                            errors,
                            valid
                        }"
              v-model="form.lastname"
              :error-messages="errors"
              @update:error="firePage(errors)"
              :success="form.lastname?valid:null"
              :label="$tc('label.lastname')"
              outlined
              solo
              rounded
              single-line
            ></v-text-field>
          </ValidationProvider>
        </div>
        <div xs12 md12 lg12 sm12>
          <ValidationProvider :name="$tc('label.firstname')" rules="alpha_spaces">
            <v-text-field
              @change="fireInfo"
              slot-scope="{
                            errors,
                            valid
                        }"
              v-model="form.firstname"
              :error-messages="errors"
              @update:error="firePage(errors)"
              :success="form.firstname?valid:null"
              :label="$tc('label.firstname')"
              outlined
              solo
              rounded
              single-line
            ></v-text-field>
          </ValidationProvider>
        </div>
        <div xs12 md12 lg12 sm12>
          <ValidationProvider :name="$tc('label.username')" rules="alpha_spaces">
            <v-text-field
              @change="fireInfo"
              slot-scope="{
                            errors,
                            valid
                        }"
              v-model="form.username"
              :error-messages="errors"
              @update:error="firePage(errors)"
              :success="form.username?valid:null"
              :label="$tc('label.username')"
              outlined
              solo
              rounded
              single-line
            ></v-text-field>
          </ValidationProvider>
        </div>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import { confirmed, alpha_spaces } from "../../validate";

import { ValidationProvider } from "vee-validate";

export default {
  name: "identity",
  components: {
    ValidationProvider
  },
  props: {
    user: {
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        lastname: "",
        firstname: "",
        username: ""
      },
      show: false
    };
  },
  mounted() {
    this.initform(this.user);
  },
  methods: {
    fireInfo() {
      this.$emit("fireInfo", this.form);
    },
    initform(form) {
      this.form.lastname = form.lastname;
      this.form.firstname = form.firstname;
      this.form.username = form.username;
    },
    firePage(error) {
      if (error.length) this.$emit("alarm", true);
      else this.$emit("alarm", false);
      return error;
    }
  },
  watch: {
    user(val) {
      this.initform(val);
    }
  }
};
</script>

<style>
</style>
<style>
</style>