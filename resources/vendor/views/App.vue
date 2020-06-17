<template>
  <v-app>
    <materiel-loading />
    <materiel-snackbar />
    <materiel-asker />
    <router-view />
  </v-app>
</template>

<script>
import { materielAsker, materielLoading, materielSnackbar } from "@/materiels/Dialog/index.js";
import { mapGetters } from "vuex";
export default {
  components: {
    materielAsker,
    materielLoading,
    materielSnackbar
  },
  name: "App"
};
</script> 
 