<template>
  <div>
    <ValidationObserver ref="form" class="container" autocomplete="on" v-on:keyup.enter="validate">
      <v-card max-width="400" class="mx-auto" :loading="loading">
        <v-card-title>
          <v-layout align-center justify-space-between fill-height>
            <div>Activation</div>
          </v-layout>
        </v-card-title>

        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 md12 lg12 sm12>
              <ValidationProvider name="code" rules="integer|required">
                <v-text-field
                  outlined
                  autocomplete="on"
                  slot-scope="{errors}"
                  v-model.number="form.code"
                  :error-messages="errorRender(errors,BackErrors.code)"
                  label="Code activation"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-layout>
            <v-flex xs12 md12 lg12 sm12 justify-space-around align-self-end>
              <v-btn class="ma-2 white--text" color="blue" @click="sendMail">Resend</v-btn>
              <v-btn class="ma-2 white--text" color="blue" @click="validate">Verifie</v-btn>
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
import { integer } from "../validate";
import { confirm, send } from "@/api/mail";
export default {
  name: "confirmation",
  components: {
    ValidationObserver,
    ValidationProvider,
    withValidation
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
  methods: {
    confirmation() {
      this.loading = true;
      const id = this.$store.getters.user.id;
      confirm(id)
        .then(response => {
          this.loading = false;
          this.$router.push({ path: "/home" });
        })
        .catch(error => {
          this.loading = false;
          if (error && error.status == 422) {
            Object.assign(this.BackErrors, error.data.errors);
          } else if (error && error.status == 401) {
          }
        });
    },
    sendMail() {
      const id = this.$store.getters.user.id;

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
 
 