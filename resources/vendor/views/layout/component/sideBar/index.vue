<template>
  <v-navigation-drawer
    :mobile-break-point="0"
    app
    expand-on-hover
    dark
    width="200"
    :value="sidebar"
    :right="RTL"
    class="side-bar"
  >
    <vs-list :items="routes" v-if="routes.length" />
    <v-skeleton-loader v-else v-for="n in 5" :key="n" class="mx-2 my-3" type="avatar"></v-skeleton-loader>
  </v-navigation-drawer>
</template>

<script>
import vsList from "./component/list";
import { mapGetters } from "vuex";
export default {
  name: "sideBar",
  components: {
    vsList
  },
  computed: {
    ...mapGetters(["routes", "sidebar", "RTL"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleRTL");
    }
  }
};
</script>
<style >
/* nav.side-bar.v-navigation-drawer.v-navigation-drawer--fixed.v-navigation-drawer--mini-variant.v-navigation-drawer--open.v-navigation-drawer--open-on-hover.theme--dark {
  width: 67px !important ;
} */
</style>