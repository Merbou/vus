<template>
  <div>
    <ValidationObserver
      ref="RegisterForm"
      class="container"
      autocomplete="on"
      v-on:keyup.enter="validate"
    >
      <v-card max-width="400" class="mx-auto" :loading="loading">
        <v-card-title>
          <v-layout align-center justify-space-between fill-height>
            <div>Login</div>
          </v-layout>
        </v-card-title>

        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider name="Email" rules="email|required">
                <v-text-field
                  autocomplete="on"
                  slot-scope="{
                            errors,
                            valid
                        }"
                  v-model="RegisterForm.email"
                  :error-messages="errorRender(errors,BackErrors.email)"
                  :success="(valid)?null:valid"
                  label="Email"
                  outlined
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider name="Pseudo" rules="required">
                <v-text-field
                  autocomplete="on"
                  slot-scope="{
                            errors,
                            valid
                        }"
                  v-model="RegisterForm.username"
                  :error-messages="errorRender(errors,BackErrors.username)"
                  :success="(valid)?null:valid"
                  label="Pseudo"
                  outlined
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>

            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider name="Password" rules="required|min:8" vid="confirm">
                <v-text-field
                  slot-scope="{
                            errors,
                            valid
                        }"
                  outlined
                  v-model="RegisterForm.password"
                  :error-messages="errorRender(errors,BackErrors.password)"
                  :success="(valid)?null:valid"
                  :counter="30"
                  label="password"
                  @click:append="show = !show"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider
                name="Password confirmation"
                rules="required|confirmed:confirm|min:8"
              >
                <v-text-field
                  slot-scope="{
                            errors,
                            valid
                        }"
                  outlined
                  v-model="RegisterForm.password_configuration"
                  :error-messages="errorRender(errors,BackErrors.password_configuration)"
                  :success="(valid)?null:valid"
                  data-vv-as="password"
                  :counter="30"
                  label="password configuration"
                  @click:append="show = !show"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-layout>
            <v-flex xs12 md12 lg12 sm12 class="text-right">
              <v-btn class="ma-2 white--text" color="blue" @click="validate">login</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  withValidation
} from "vee-validate";
import { required, email, min, confirmed } from "../validate";
import { send } from "@/api/mail";

export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
    withValidation
  },

  data() {
    return {
      RegisterForm: {
        username: "",
        email: "",
        password: "",
        password_configuration: ""
      },
      BackErrors: {
        username: "",
        email: "",
        password: ""
      },
      show: false,
      loading: false,
      redirect: undefined
    };
  },
  methods: {
    handleRegister() {
      this.loading = true;
      this.$store
        .dispatch("register", this.RegisterForm)
        .then(id => {
          this.loading = false;
          debugger;
          this.sendMail(id);
          this.$router.push({ path: "/mail-confirmation" });
        })
        .catch(error => {
          this.loading = false;
          if (error && error.status == 422) {
            Object.assign(this.BackErrors, error.data.errors);
          } else if (error && error.status == 401) {
          }
        });
    },
    sendMail(id) {
      this.loading = true;
      this.$store;
      send(id)
        .then(response => {
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
        });
    },
    async validate() {
      const result = await this.$refs.RegisterForm.validate();
      if (result) {
        this.handleRegister();
      } else {
        return false;
      }
    },
    errorRender(errors, backError) {
      if (errors.length > 0) return errors;
      else if (backError) return backError[0];
    }
  }
};
</script>
 
 