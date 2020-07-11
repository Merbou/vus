<template>
  <v-dialog v-model="dialog.open" max-width="290">
    <v-card>
      <v-card-title>{{dialog.title}}</v-card-title>

      <v-card-text>{{dialog.message}}</v-card-text>

      <v-card-actions>
        <div class="flex-grow-1"></div>

        <v-btn dark color="info" @click="accepte">{{$t('qst.yes')}}</v-btn>

        <v-btn :color="dark?'light':'secondary'" text @click="cancel">{{$t('qst.cancel')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "materielAsker",
  computed: {
    ...mapGetters(["dialog","dark"])
  },
  methods: {
    cancel() {
      this.$store.dispatch("toggleDialog", { open: false, value: false });
    },
    accepte() {
      this.$store.dispatch("toggleDialog", { open: false, value: true });
    }
  }
};
</script>
