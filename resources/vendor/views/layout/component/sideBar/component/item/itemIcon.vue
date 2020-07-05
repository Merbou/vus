<template>
  <v-list-item-icon v-if="icon">
    <v-icon small>fas fa-{{icon}}</v-icon>
  </v-list-item-icon>
</template>

<script>
export default {
  name: "itemIcon",
  props: {
    icon: {
      type: String
    }
  }
};
</script>

<style>
</style>