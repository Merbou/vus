<template>
  <div>
    <ValidationObserver
      ref="loginForm"
      class="container"
      autocomplete="on"
      v-on:keyup.enter="validate"
    >
      <v-card max-width="400" class="mx-auto" :loading="loading" :disabled="loading">
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
                  :loading="loading"
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
                  :loading="loading"
                  @click:append="show = !show"
                  :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn text small>
            <router-link to="/register">Register</router-link>
          </v-btn>
          <v-btn class="ma-2 white--text" color="blue" @click="validate">login</v-btn>
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
      this.vLoading(true);

      this.$store
        .dispatch("login", this.loginForm)
        .then(response => {
          this.loading = false;
          this.vLoading(false);
          this.snackbar({ text: "welcome back!", color: "success" });
          this.$router.push({ path: "/dashboard" }).catch(err => {});
        })
        .catch(error => {
          this.loading = false;
          this.vLoading(false);
          if (error && error.status == 422) {
            Object.assign(this.BackErrors, error.data.errors);
          } else if (error && error.status == 403) {
            alert("email or password is wrong!");
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
 
 