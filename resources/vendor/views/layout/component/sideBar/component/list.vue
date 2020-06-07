<template>
  <v-list flat>
    <template v-for="item in items">
      <ng-item-group :key="item.name" :item="item" />
    </template>
  </v-list>
</template>

<script>
import ngItemGroup from "./itemGroup";
export default {
  name: "ngList",
  components: { ngItemGroup },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>