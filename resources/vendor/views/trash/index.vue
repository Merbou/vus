<template>
  <v-tabs background-color="deep-purple accent-4" centered dark v-model="tab">
    <v-tabs-slider></v-tabs-slider>

    <v-tab href="#tab-1">{{$t('_trash.tab_1')}}</v-tab>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <materiel-trash :headers="headers" :modulePath="modulePath" />
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import materielTrash from "@/materiels/Trash";
export default {
  components: {
    materielTrash
  },
  data() {
    return {
      tab: null,
      headers: [
        {
          text: this.$i18n.t("label.email"),
          align: "left",
          value: "email"
        },
        { text: this.$i18n.t("label.subject"), value: "subject" },
        { text: this.$i18n.t("label.creation_date"), value: "created_at" }
      ],
      modulePath: "trash/contact.js"
    };
  }
};
</script>
