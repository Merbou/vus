<template>
  <v-app>
    <materiel-loading />
    <materiel-snackbar />
    <materiel-asker />
    <router-view />
  </v-app>
</template>

<script>
import theme from "@/utils/theme";
import {
  materielAsker,
  materielLoading,
  materielSnackbar
} from "@/materiels/Dialog/index.js";

import { mapGetters } from "vuex";
export default {
  components: {
    materielAsker,
    materielLoading,
    materielSnackbar
  },
  name: "App",
  computed: {
    ...mapGetters(["RTL", "dark", "palette"])
  },
  created() {
    this.$vuetify.rtl = this.RTL;
    this.$vuetify.theme.dark = this.dark;
    this.$vuetify.theme.themes.dark = this.theme(this.palette);
    this.$vuetify.theme.themes.light = this.theme(this.palette);
  },
  methods: {
    ...theme
  },
  watch: {
    RTL(val) {
      this.$vuetify.rtl = val;
    },
    dark(val) {
      this.$vuetify.theme.dark = val;
    },
    palette(val) {
      this.$vuetify.theme.themes.dark = this.theme(val);
      this.$vuetify.theme.themes.light = this.theme(val);
    }
  }
};
</script>
<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgb(82, 80, 80);
  border-radius: 40px;
}
</style>