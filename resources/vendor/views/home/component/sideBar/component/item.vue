<template>
  <v-list-group no-action sub-group>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{item.name | upperCaseFirst}}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon v-if="item.icon">{{item.icon}}</v-icon>
      </v-list-item-icon>
    </template>

    <v-list-item v-for="(children, i) in item.children" :key="i">
      <v-list-item-title>{{children.name | upperCaseFirst}}</v-list-item-title>
      <v-list-item-icon>
        <v-icon v-if="children.icon">{{children.icon}}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
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