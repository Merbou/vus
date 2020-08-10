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
    <vs-list :items="links" v-if="links.length" />
    <v-skeleton-loader v-else v-for="n in 5" :key="n" class="mx-1 my-3" type="avatar"></v-skeleton-loader>
  </v-navigation-drawer>
</template>

<script>
import vsList from "./component/list";
import { mapGetters } from "vuex";
export default {
  name: "sideBar",
  components: {
    vsList,
  },
  computed: {
    ...mapGetters(["routes", "sidebar", "RTL"]),
    links() {
      return this.routes.filter((_ro) => {
        if (_ro.children && _ro.children.length === 1)
          return !_ro.children[0].hidden && _ro.is_layout;
        return !_ro.hidden && _ro.is_layout;
      });
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleRTL");
    },
  },
};
</script>
