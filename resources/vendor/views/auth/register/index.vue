<template>
  <div>
    <ValidationObserver
      ref="RegisterForm"
      class="container"
      autocomplete="on"
      v-on:keyup.enter="validate"
    >
      <v-card
        max-width="400"
        class="mx-auto"
        :loading="loading"
        :disabled="loading"
        shaped
        elevation="10"
      >
        <v-card-title>
          <v-layout align-center justify-space-between fill-height>
            <div>
              <lang-select :is_white="!dark" />
            </div>
            <div>{{$t('_register.title')}}</div>
          </v-layout>
        </v-card-title>

        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider :name="$tc('label.email')" rules="email|required">
                <v-text-field
                  autocomplete="on"
                  slot-scope="{
                            errors,
                            valid
                        }"
                  v-model="RegisterForm.email"
                  :error-messages="errorRender(errors,backErrors.email)"
                  :success="(valid)?null:valid"
                  :label="$tc('label.email')"
                  outlined
                  solo
                  rounded
                  single-line
                  dense
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider :name="$tc('label.username')" rules="required">
                <v-text-field
                  autocomplete="on"
                  slot-scope="{
                            errors,
                            valid
                        }"
                  v-model="RegisterForm.username"
                  :error-messages="errorRender(errors,backErrors.username)"
                  :success="(valid)?null:valid"
                  :label="$tc('label.username')"
                  outlined
                  solo
                  rounded
                  single-line
                  dense
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>

            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider
                :name="$tc('label.password')"
                rules="required|min:8|alpha_spaces|alpha_num"
                vid="confirm"
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
                  dense
                  v-model="RegisterForm.password"
                  :error-messages="errorRender(errors,backErrors.password)"
                  :success="(valid)?null:valid"
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
                :name="$tc('label.password_confirmation')"
                rules="required|confirmed:confirm|min:8|alpha_spaces|alpha_num"
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
                  dense
                  v-model="RegisterForm.password_configuration"
                  :error-messages="errorRender(errors,backErrors.password_configuration)"
                  :success="(valid)?null:valid"
                  data-vv-as="password"
                  :counter="30"
                  :label="$tc('label.password_confirmation')"
                  @click:append="show = !show"
                  :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="show ? 'text' : 'password'"
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-layout>
            <v-flex xs12 md12 lg12 sm12 class="text-right">
              <v-btn
                class="ma-2"
                color="success"
                dark
                @click="validate"
                rounded
              >{{$t('_register.submit')}}</v-btn>
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
import { required, email, min, confirmed,alpha_spaces,alpha_num } from "../validate";
import LangSelect from "@/materiels/LangSelect";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
    withValidation,
    LangSelect
  },

  data() {
    return {
      RegisterForm: {
        username: "",
        email: "",
        password: "",
        password_configuration: ""
      },
      backErrors: {
        username: "",
        email: "",
        password: ""
      },
      show: false,
      loading: false,
      redirect: undefined
    };
  },
  computed: {
    ...mapGetters(["dark"])
  },
  methods: {
    handleRegister() {
      this.loading = true;
      this.vLoading(true);

      this.$store
        .dispatch("register", this.RegisterForm)
        .then(id => {
          this.loading = false;
          this.vLoading(false);
          this.snackbar({
            text: this.$i18n.t("_register.successAuth"),
            color: "info"
          });
          this.$router.push({ path: "/mail-confirmation" }).catch(err => {});
        })
        .catch(error => {
          this.loading = false;
          this.vLoading(false);
          if (error && error.status == 422) {
            Object.assign(this.backErrors, error.data.errors);
          } else if (error && error.status == 401) {
          }
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
 
 