<template>
  <v-card class="flex" flat tile>
    <v-card-text class="py-2 text-center">
      {{ new Date().getFullYear() }} —
      <strong>Copyright © ngDashboard. All rights reserved</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "appFooter"
};
</script>

<style>
</style>