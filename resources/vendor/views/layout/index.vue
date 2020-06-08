<template>
  <div>
    <side-bar :key="'sideBar'" />
    <nav-bar />
    <v-content>
      <app-main :key="'appMain'" />
    </v-content>
    <v-footer padless>
      <app-Footer app />
    </v-footer>
  </div>
</template>

<script>
import { appMain, navBar, sideBar, appFooter } from "./component/";
export default {
  components: {
    appMain,
    sideBar,
    navBar,
    appFooter
  },
  name: "home"
};
</script> 
