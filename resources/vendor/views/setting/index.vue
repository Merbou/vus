<template>
  <div>
    <forms @update="updateUser" :loading="loading" :user="user" :errors="errors" />
  </div>
</template>

<script>
import { updateUserApi } from "@/api/user/account";
import forms from "./component/forms";
import { mapGetters } from "vuex";

export default {
  components: { forms },
  data() {
    return {
      loading: false,
      userInfo: {},
      errors: {}
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    this.initUser(this.user);
  },
  methods: {
    updateUser(formData) {
      this.vLoading(true);
      this.loading = true;
      updateUserApi(formData)
        .then(Response => {
          this.snackbar({
            text: this.$i18n.t('setting.success'),
            color: "success"
          });
          this.$store.dispatch("setInfo", Response);
          this.initUser(Response);
        })
        .catch(rej => {
          console.log(rej)
          this.snackbar({
            text: this.$i18n.t('setting.error'),
            color: "error"
          });
          this.errors = rej && rej.data && rej.data.errors;
        })
        .finally(() => {
          this.vLoading(false);
          this.loading = false;
        });
    },
    initUser(data) {
      this.userInfo = Object.assign(this.userInfo, data);
    },
  }
};
</script>
