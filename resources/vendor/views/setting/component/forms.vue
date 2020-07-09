<template>
  <ValidationObserver ref="obs" class="container">
    <v-row no-gutters justify="space-around" align="center">
      <v-col lg="5" md="5" sm="12" cols="12">
        <v-tabs :background-color="!alarm?'info':'red lighten-1'" centered dark v-model="tab">
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">{{$t('_setting.tab_1')}}</v-tab>
          <v-tab href="#tab-2">{{$t('_setting.tab_2')}}</v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tab-1">
              <personal-information
                @alarm="handleAlarm"
                @fireInfo="assignForm"
                :user="user"
                :loading="loading"
              ></personal-information>
            </v-tab-item>
            <v-tab-item value="tab-2">
              <passwd
                @alarm="handleAlarm"
                :errors="errors&&errors.password?errors.password:[]"
                @fireInfo="assignForm"
                :user="user"
                :loading="loading"
              ></passwd>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-col>

      <v-col lg="5" md="5" sm="12" cols="12">
        <v-row align="center" justify="space-around">
          <file-form
            @processFile="setAvatar"
            :picture_path="form.picture_path"
            :user="user"
            :errors="errors&&errors.avatar?errors.avatar:[]"
            :loading="loading"
          />
        </v-row>
        <identity @alarm="handleAlarm" @fireInfo="assignForm" :user="user" :loading="loading"></identity>
      </v-col>
    </v-row>

    <v-layout>
      <v-flex xs12 md12 lg12 sm12 class="mt-5" :class="{'ltr-class':RTL,'rtl-class':!RTL}">
        <v-btn color="info" @click="validate()" rounded>{{$t('_setting.submit')}}</v-btn>
      </v-flex>
    </v-layout>
  </ValidationObserver>
</template>

<script>
import { isEmpty } from "lodash";
import { ValidationObserver } from "vee-validate";
import { passwd, personalInformation, identity, fileForm } from "./pages";
import { mapGetters } from "vuex";

export default {
  components: {
    ValidationObserver,
    fileForm,
    passwd,
    personalInformation,
    identity
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tab: null,
      form: {},
      avatar: "",
      alarm: false
    };
  },
  computed: {
    ...mapGetters(["RTL"])
  },
  mounted() {
    this.initform(this.user);
  },
  methods: {
    async validate() {
      const result = await this.$refs.obs.validate();
      if (result) this.$emit("update", this.GetFormData());
    },
    setAvatar(avatar) {
      this.avatar = avatar;
    },
    initform(data) {
      this.form = data;
    },
    GetFormData() {
      var formData = new FormData();

      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }
      formData.append("avatar", this.avatar);
      formData.append("_method", "put");
      return formData;
    },
    assignForm(form) {
      this.form = Object.assign(this.form, form);
    },
    handleAlarm(bool) {
      this.alarm = bool;
    },
    is_empty(val) {
      return isEmpty(val);
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
.ltr-class {
  direction: ltr;
}
.rtl-class {
  direction: rtl;
}
</style>
