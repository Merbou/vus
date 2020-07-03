<template>
  <div>
    <ValidationObserver ref="form" class="container" autocomplete="on" v-on:keyup.enter="validate">
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
            <div>{{$t('_mail.title')}}</div>
          </v-layout>
        </v-card-title>

        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider :name="$t('label.code')" rules="integer|required">
                <v-text-field
                  :loading="loading"
                  outlined
                  autocomplete="on"
                  slot-scope="{errors}"
                  v-model.number="form.code"
                  solo
                  rounded
                  single-line
                  :error-messages="errorRender(errors,BackErrors.code)"
                  :label="$t('label.code')"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn text small @click="sendMail(true)">{{$t('_mail.resend')}}</v-btn>
          <v-btn
            class="ma-2 white--text"
            color="blue"
            @click="validate"
            rounded
          >{{$t('_mail.submit')}}</v-btn>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { integer } from "../validate";
import { confirm, send } from "@/api/mail";
import { mapGetters } from "vuex";
export default {
  name: "confirmation",
  components: {
    ValidationObserver,
    ValidationProvider
  },

  data() {
    return {
      form: {
        code: ""
      },
      BackErrors: {
        code: ""
      },
      loading: false
    };
  },

  mounted() {
    this.sendMail(false);
  },

  computed: {
    ...mapGetters(["user"])
  },

  methods: {
    confirmation() {
      this.loading = true;
      this.vLoading(true);

      const id = this.user.id;
      confirm(id, this.form.code)
        .then(response => {
          this.loading = false;
          this.vLoading(false);
          this.$store.dispatch("mailVerifed", response).then(() => {
            this.snackbar({
              text: this.$i18n.t("_mail.success"),
              color: "success"
            });

            this.$router.push({ path: "/home" }).catch(err => {});
          });
        })
        .catch(error => {
          this.loading = false;
          this.vLoading(false);
          if (error && error.status == 422) {
            Object.assign(this.BackErrors, error.data.errors);
          } else if (error && error.status == 401) {
          }
        });
    },
    sendMail(resend) {
      const id = this.user.id;
      this.loading = true;
      send(id, resend)
        .then(response => {
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
        });
    },
    async validate() {
      const result = await this.$refs.form.validate();
      if (result) {
        this.confirmation();
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