<template>
  <v-card raised :disabled="loading" :loading="loading">
    <v-card-text>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider name="password" vid="password" ref="password" rules="min:8|alpha_dash">
          <v-text-field
            slot-scope="{
                            errors,
                            valid
                        }"
            outlined
            v-model="form.password"
            @change="fireInfo"
            @update:error="firePage(errors)"
            :error-messages="errors"
            :success="form.password?valid:null"
            :counter="30"
            label="Password"
            @click:append="show = !show"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :type="show ? 'text' : 'password'"
          ></v-text-field>
        </ValidationProvider>
      </v-flex>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider name="confirm" :rules="_c_rule+'confirmed:password|alpha_dash'">
          <v-text-field
            slot-scope="{
                            errors,
                            valid
                        }"
            outlined
            v-model="form.password_confirmation"
            @change="fireInfo"
            @update:error="firePage(errors)"
            :error-messages="errors"
            :success="form.password_confirmation?valid:null"
            data-vv-as="password"
            name="password_confirmation"
            :counter="30"
            label="password confirm"
            @click:append="show = !show"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :type="show ? 'text' : 'password'"
          ></v-text-field>
        </ValidationProvider>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import { ValidationProvider } from "vee-validate";

import { min, confirmed, alpha_dash } from "../../validate";

export default {
  name: "passwd",
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
        password: "",
        new_password: "",
        password_confirmation: ""
      },
      show: false,
      rule: "",
    };
  },
  computed: {
    _c_rule() {
      return this.rule + "|";
    }
  },
  mounted() {
    this.initform(this.user);
  },
  methods: {
    fireInfo() {
      if (this.form.password) this.rule = "required";
      this.$emit("fireInfo", {
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
      });
    },
    initform(form) {
      this.form.password = form.password;
      this.form.password_confirmation = form.password_confirmation;
    },
    firePage(error) {
      if (error.length) this.$emit("alarm",true)
      else this.$emit("alarm",false)
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