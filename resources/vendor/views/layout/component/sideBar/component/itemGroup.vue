<template>
  <v-list-group sub-group>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{item.name | upperCaseFirst}}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-item-icon>
    </template>

    <router-link
      v-for="(child, i) in item.children"
      :key="i"
      style="text-decoration: none;"
      :to="child.path"
    >
      <v-list-item>
        <v-list-item-title>{{child.name | upperCaseFirst}}</v-list-item-title>
        <v-list-item-icon>
          <v-icon>{{child.icon}}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </router-link>
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