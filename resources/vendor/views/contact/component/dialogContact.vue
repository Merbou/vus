<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>{{item.subject}}</v-card-title>

      <v-card-text>{{item.email}}</v-card-text>
      <v-card-text>{{item.description}}</v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">{{$t('qst.ok')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "dialogContact",
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      required: false
    }
  },methods:{
      close(){
          this.$emit("close")
      }
  }
};
</script>

<style>
</style>