<template>
  <v-list>
    <template v-for="item in items">
      <v-list-item-group :key="item.name" v-if="!item.children">
        <ng-item :item="item" />
      </v-list-item-group>
      <ng-item-group v-else :key="item.name" :item="item" />
    </template>
  </v-list>
</template>

<script>
import ngItem from "./item";
import ngItemGroup from "./itemGroup";
export default {
  name: "ngList",
  components: { ngItem, ngItemGroup },
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