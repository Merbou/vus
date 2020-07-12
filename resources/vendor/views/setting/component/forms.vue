<template>
  <div class="setting-section">
    <v-row justify="center" align="center" class="setting-top-section">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-row justify="center">
          <file-form
            class="setting-avatar"
            @processFile="setAvatar"
            :picture_path="form.picture_path"
            :user="user"
            :errors="errors&&errors.avatar?errors.avatar:[]"
            :loading="loading"
          />
        </v-row>
      </v-col>
    </v-row>

    <v-card class="setting-bottom-section">
      <v-card-text>
        <ValidationObserver ref="obs" class="container">
          <v-row justify="center" align="center">
            <v-col lg="5" md="5" sm="12" cols="12">
              <identity @alarm="handleAlarm" @fireInfo="assignForm" :user="user" :loading="loading"></identity>
            </v-col>
            <v-col lg="5" md="5" sm="12" cols="12">
              <personal-information
                @alarm="handleAlarm"
                @fireInfo="assignForm"
                :user="user"
                :loading="loading"
              ></personal-information>
              <passwd
                @alarm="handleAlarm"
                :errors="errors&&errors.password?errors.password:[]"
                @fireInfo="assignForm"
                :user="user"
                :loading="loading"
              ></passwd>
            </v-col>
          </v-row>

          <v-layout>
            <v-flex xs12 md12 lg12 sm12 class="mt-2" :class="{'ltr-class':RTL,'rtl-class':!RTL}">
              <v-btn color="info" @click="validate()" rounded>{{$t('_setting.submit')}}</v-btn>
            </v-flex>
          </v-layout>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </div>
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
<style scoped>
.setting-section {
  margin-top: -20px;
}
.setting-top-section {
  margin-bottom: -53px;
}
.setting-avatar {
  z-index: 2;
}
.setting-bottom-section {
  z-index: 1;
  margin-left: 70px;
  margin-right: 70px;
}
.ltr-class {
  direction: ltr;
}
.rtl-class {
  direction: rtl;
}
</style>
