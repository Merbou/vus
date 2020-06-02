<template>
  <v-navigation-drawer app dark width="200" v-model="state" class="side-bar">
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
      state: 0
    };
  },
  computed: {
    ...mapGetters(["routes", "sidebar"]),
    stateSidebar(){
      return this.sidebar
    }
  },
  created() {
    this.state = this.sidebar;
  },
  watch: {
    stateSidebar(val) {
      this.state=this.sidebar
      this.state = val;
    }
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