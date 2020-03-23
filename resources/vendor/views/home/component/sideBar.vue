<template>
  <v-navigation-drawer app dark width="200" v-model="open" class="side-bar"></v-navigation-drawer>
  <!-- :style="'margin-top:'+marginBetween+'px'" -->
</template>

<script>
export default {
  name: "sideBar",

  data() {
    return {
      open: true
    };
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