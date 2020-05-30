<template>
  <v-card :disabled="loading" raised :loading="loading">
    <v-card-text>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider name="phone">
          <VuePhoneNumberInput
            v-model="form.phone"
            @change="fireInfo"
            label="phone"
            outlined
            class="mb-5"
            required
            default-country-code="DZ"
          />
        </ValidationProvider>
      </v-flex>
      <v-flex xs12 md12 lg12 sm12>
        <ValidationProvider name="sex" rules="alpha_dash">
          <v-select
            slot-scope="{
                            errors
                        }"
            @change="fireInfo"
            v-model="form.sex"
            :error-messages="errors"
            @update:error="firePage(errors)"
            :success="true"
            required
            outlined
            item-text="text"
            item-value="value"
            :items="[{text:'Homme',value:1},{text:'Femme',value:0}]"
            label="sex"
          ></v-select>
        </ValidationProvider>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { alpha_dash } from "../../validate";

import { ValidationProvider } from "vee-validate";

export default {
  name: "personalInformation",
  components: {
    ValidationProvider,
    VuePhoneNumberInput
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
        sex: "",
        phone: ""
      },
      show: false
    };
  },
  mounted() {
    this.initform(this.user);
  },
  methods: {
    fireInfo() {
      this.$emit("fireInfo", {
        sex: this.form.sex,
        phone: this.form.phone
      });
    },
    initform(form) {
      this.form.sex = parseInt(form.sex);
      this.form.phone = form.phone;
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