<template>
  <v-snackbar v-model="vSnackbar.state" :timeout="vSnackbar.timeout" :color="vSnackbar.color">
    {{ vSnackbar.text }}
    <v-btn text @click="close()">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ngSnackbar",
  computed: {
    ...mapGetters(["vSnackbar"])
  },
  methods: {
    close() {
      this.$store.dispatch("snackbarStore", { state: false });
    }
  }
};
</script> 
 