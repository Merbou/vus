<template>
  <div>
    <side-bar :key="'sideBar'" />
    <nav-bar />
    <v-content>
      <app-main :key="'appMain'" />
    </v-content>
  </div>
</template>

<script>
import { appMain, navBar, sideBar } from "./component/";
export default {
  components: {
    appMain,
    sideBar,
    navBar
  },
  name: "home"
};
</script> 
