<template>
  <v-app>
    <vs-loading />
    <vs-snackbar />
    <vs-asker />
    <router-view />
  </v-app>
</template>

<script>
import { vsAsker, vsLoading, vsSnackbar } from "@/materiels/vsDialog/index.js";
import { mapGetters } from "vuex";
export default {
  components: {
    vsAsker,
    vsLoading,
    vsSnackbar
  },
  name: "App"
};
</script> 
 