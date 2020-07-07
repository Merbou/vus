<template>
  <v-menu offset-y trigger="click" :close-on-content-click="true">
    <template v-slot:activator="{ on }">
      <v-icon :dark="!is_white" :light="is_white" tile class="mx-3 my-1" v-on="on">fas fa-language</v-icon>
    </template>
    <v-list>
      <v-list-item :disabled="locale==='ar'" @click="changeLocale('ar')">
        <v-list-item-title>العربية</v-list-item-title>
      </v-list-item>
      <v-list-item :disabled="locale==='en'" @click="changeLocale('en')">
        <v-list-item-title>English</v-list-item-title>
      </v-list-item>
      <v-list-item :disabled="locale==='fr'" @click="changeLocale('fr')">
        <v-list-item-title>Français</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    is_white: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters(["locale"])
  },
  methods: {
    changeLocale(locale) {
      this.langSide(locale);

      this.$i18n.locale = locale;
      this.$store.dispatch("changeLocale", locale);
      if (this.$vuetify && this.$vuetify.lang)
        this.$vuetify.lang.current = locale;

      this.snackbar({
        text: this.$i18n.t("alert.switchLocale"),
        color: "success"
      });
    },
    langSide(locale) {
      const RTL_LANG = ["ar"],
        LTR_LANG = ["en", "fr"];
      if (RTL_LANG.indexOf(locale) > -1)
        this.$store.dispatch("toggleRTL", true);
      else if (LTR_LANG.indexOf(locale) > -1)
        this.$store.dispatch("toggleRTL", false);
    }
  }
};
</script> 

