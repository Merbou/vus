<template>
  <v-list dense nav>
    <ng-item v-for="item in items" :key="item.name" :item="item" />
  </v-list>
</template>

<script>
import ngItem from "./item";
export default {
  name: "ngList",
  components: { ngItem },
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