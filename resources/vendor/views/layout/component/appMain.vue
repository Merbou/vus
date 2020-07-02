<template >
  <v-container class="app-main" :class="{'app-light':!dark}" fluid>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "appMain",
  computed: {
    ...mapGetters(["dark"])
  }
};
</script>

<style>
.app-main {
  left: 0;
  top: 0;
  z-index: 0;
  min-height: calc(100vh - 50px);
}
.app-light {
  background: #eeeeee;
}
.app-dark {
  background: #272727;
}
</style>
