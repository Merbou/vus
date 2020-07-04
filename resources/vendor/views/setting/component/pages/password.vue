<template>
  <v-card raised :disabled="loading" :loading="loading">
    <v-card-text>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider :name="$tc('label.password')" :rules="_c_rule+'|min:8|alpha_dash'">
          <v-text-field
            slot-scope="{
                            errors,
                            valid
                        }"
            outlined
            solo
            rounded
            single-line
            v-model="form.last_password"
            @change="fireInfo"
            @update:error="firePage(errors)"
            :error-messages="errors_d.length?errors_d:errors"
            :success="form.last_password?valid:null"
            :counter="30"
            :label="$tc('label.password')"
            @click:append="show = !show"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :type="show ? 'text' : 'password'"
          ></v-text-field>
        </ValidationProvider>
      </v-flex>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider
          :name="$tc('label.new_password')"
          vid="password"
          ref="password"
          :rules="_c_rule+'|min:8|alpha_dash'"
        >
          <v-text-field
            slot-scope="{
                            errors,
                            valid
                        }"
            outlined
            solo
            rounded
            single-line
            v-model="form.password"
            @change="fireInfo"
            @update:error="firePage(errors)"
            :error-messages="errors"
            :success="form.password?valid:null"
            :counter="30"
            :label="$tc('label.new_password')"
            @click:append="show = !show"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :type="show ? 'text' : 'password'"
          ></v-text-field>
        </ValidationProvider>
      </v-flex>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider :name="$tc('label.password_confirmation')" :rules="_c_rule+'|confirmed:password|alpha_dash'">
          <v-text-field
            slot-scope="{
                            errors,
                            valid
                        }"
            outlined
            solo
            rounded
            single-line
            v-model="form.password_confirmation"
            @change="fireInfo"
            @update:error="firePage(errors)"
            :error-messages="errors"
            :success="form.password_confirmation?valid:null"
            data-vv-as="password"
            :name="$tc('label.password_confirmation')"
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
    },
    errors: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      form: {
        last_password: "",
        password: "",
        password_confirmation: ""
      },
      show: false,
      errors_d: []
    };
  },
  computed: {
    _c_rule() {
      return this.form.password || this.form.last_password ? "required" : "";
    }
  },
  mounted() {
    this.initform(this.user);
  },
  methods: {
    fireInfo() {
      this.errors_d = [];

      this.$emit("fireInfo", this.form);
    },
    initform(form) {
      const { last_password, password, password_confirmation, ...ret } = form;
      this.form.last_password = last_password;
      this.form.password = password;
      this.form.password_confirmation = password_confirmation;
    },
    firePage(error) {
      if (error.length) this.$emit("alarm", true);
      else this.$emit("alarm", false);
      return error;
    },
  },
  watch: {
    user(val) {
      this.initform(val);
    },
    errors(val) {
      this.errors_d = val;
    }
  }
};
</script>
