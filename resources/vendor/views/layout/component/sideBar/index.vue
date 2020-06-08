<template>
  <v-navigation-drawer
    :mobile-break-point="0"
    app
    expand-on-hover
    dark
    width="200"
    :value="sidebar"
    class="side-bar"
  >
    <ng-list :items="routes" />
  </v-navigation-drawer>
</template>

<script>
import ngList from "./component/list";
import { mapGetters } from "vuex";
export default {
  name: "sideBar",
  components: {
    ngList
  },
  computed: {
    ...mapGetters(["routes", "sidebar"])
  }
};
</script>
<style >
nav.side-bar.v-navigation-drawer.v-navigation-drawer--fixed.v-navigation-drawer--mini-variant.v-navigation-drawer--open.v-navigation-drawer--open-on-hover.theme--dark {
  width: 67px !important ;
}
</style>