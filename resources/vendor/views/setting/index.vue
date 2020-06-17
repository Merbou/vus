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
          this.vLoading(false);
          this.snackbar({
            text: "The setting was updated successfully !",
            color: "success"
          });
          this.loading = false;
          this.$store.dispatch("setInfo", Response);
          this.initUser(Response);
          this.clearPassword();
        })
        .catch(rej => {
          this.snackbar({
            text: "The setting was not updated.",
            color: "error"
          });
          this.vLoading(false);
          this.loading = false;
          this.errors = rej && rej.data && rej.data.errors;
        });
    },
    initUser(data) {
      this.userInfo = Object.assign(this.userInfo, data);
    },
    clearPassword() {
      this.form.last_password = "";
      this.form.password = "";
      this.form.password_confirmation = "";
    }
  }
};
</script>
