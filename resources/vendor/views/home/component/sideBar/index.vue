<template>
  <v-navigation-drawer app dark width="200" v-model="open" class="side-bar">
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
  data() {
    return {
      open: true,
    };
  },
  computed: {
    ...mapGetters(["routes"])
  }
};
</script>
<style >
.side-bar {
  left: 0;
  top: 0;
  background: #eeeeee;
  z-index: 0;
  min-height: calc(100vh - 50px);
}
</style>