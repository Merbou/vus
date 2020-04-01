      <router-view />
<template >
  <v-container class="app-main" fluid>
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "appMain"
};
</script>

<style>
.app-main {
  left: 0;
  top: 0;
  background: #eeeeee;
  z-index: 0;
  min-height: calc(100vh - 50px);
}
</style>
