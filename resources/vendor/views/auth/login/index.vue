<template>
  <div>
    <ValidationObserver
      ref="loginForm"
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
              <ValidationProvider name="email" rules="email|required">
                <v-text-field
                  outlined
                  autocomplete="on"
                  slot-scope="{
                            errors,
                            valid
                        }"
                  v-model="loginForm.email"
                  :error-messages="errorRender(errors,BackErrors.email)"
                  :success="(valid)?null:valid"
                  label="email"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>

            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider name="password" rules="required|min:8">
                <v-text-field
                  outlined
                  slot-scope="{
                            errors,
                            valid
                        }"
                  v-model="loginForm.password"
                  :error-messages="errorRender(errors,BackErrors.password)"
                  :success="(valid)?null:valid"
                  label="password"
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
        <router-link to="/">Hello WORLD</router-link>
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
import { required, email, min } from "../validate";

export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
    withValidation
  },

  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      BackErrors: {
        email: "",
        password: ""
      },
      show: false,
      loading: false,
      redirect: undefined
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$store
        .dispatch("login", this.loginForm)
        .then(response => {
          this.loading = false;
           this.$router.push({ path:"/" });
        })
        .catch(error => {
          this.loading = false;
          if (error && error.status == 422) {
            Object.assign(this.BackErrors, error.data.errors);
          } else if (error && error.status == 401) {
          }
        });
    },
    async validate() {
      const result = await this.$refs.loginForm.validate();
      if (result) {
        this.handleLogin();
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
 
 