<template>
  <v-app>
    <ng-loading />
    <ng-snackbar />
    <ng-asker />
    <router-view />
  </v-app>
</template>

<script>
import { ngAsker, ngLoading, ngSnackbar } from "@/materiels/ngDialog/index.js";
import { mapGetters } from "vuex";
export default {
  components: {
    ngAsker,
    ngLoading,
    ngSnackbar
  },
  name: "App"
};
</script> 
 