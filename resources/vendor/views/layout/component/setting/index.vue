<template>
  <div>
    <sheet :open="open" @close="open=false" :rtl="RTL" :dark="dark" />
    <v-fab-transition>
      <v-btn
        color="green darken-3"
        small
        dark
        absolute
        bottom
        :left="RTL"
        :right="!RTL"
        fab
        @click="open=true"
      >
        <v-icon>fas fa-cog</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import sheet from "./components/sheet";
export default {
  name: "setting",
  components: {
    sheet
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapGetters(["RTL", "dark"])
  }
};
</script>

<style>
</style>