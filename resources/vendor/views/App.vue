<template>
  <v-app>
    <ngDialog />
    <router-view />
  </v-app>
</template>

<script>
import ngDialog from "@/materiels/ngDialog";
export default {
  components: {
    ngDialog
  },
  name: "App"
};
</script> 
 