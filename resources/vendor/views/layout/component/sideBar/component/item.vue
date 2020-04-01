<template>
  <router-link style="text-decoration: none;" :to="item.path">
    <v-list-item>
      <v-list-item-icon>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{item.name | upperCaseFirst}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: "ngItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  filters: {
    upperCaseFirst(val) {
      return val && typeof val === "string"
        ? val.charAt(0).toUpperCase() + val.slice(1)
        : undefined;
    }
  }
};
</script>

<style>
</style>