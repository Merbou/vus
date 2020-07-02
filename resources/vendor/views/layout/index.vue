<template>
  <div>
    <side-bar :key="'sideBar'" />
    <nav-bar />
    <v-content>
      <app-main :key="'appMain'" />
      <setting/>
    </v-content>
    <v-footer padless>
      <app-Footer app />
    </v-footer>
  </div>
</template>

<script>
import { appMain, navBar, sideBar, appFooter, setting } from "./component/";
export default {
  components: {
    appMain,
    sideBar,
    navBar,
    appFooter,
    setting
  },
  name: "home"
};
</script> 
