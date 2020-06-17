<template>
  <v-card class="flex" flat tile>
    <v-card-text class="py-2 text-center">
      {{ new Date().getFullYear() }} —
      <strong>Copyright © {{name()}}. All rights reserved</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "appFooter",
  methods:{
    name(){
      return process.env.MIX_APP_NAME
    }
  }

};
</script>

<style>
</style>