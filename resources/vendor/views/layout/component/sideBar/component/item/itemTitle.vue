<template>
  <div>
    <v-list-item-content>
      <v-list-item-title>{{$t(`routes.${title}`)| upperCaseFirst}}</v-list-item-title>
    </v-list-item-content>
  </div>
</template>

<script>
export default {
  name: "itemTitle",
  props: {
    title: {
      type: String,
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