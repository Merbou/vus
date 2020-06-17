<template>
  <v-tabs background-color="deep-purple accent-4" centered dark v-model="tab">
    <v-tabs-slider></v-tabs-slider>

    <v-tab href="#tab-1">Contact</v-tab>

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
          text: "email",
          align: "left",
          value: "email"
        },
        { text: "subject", value: "subject" },
        { text: "creation date", value: "created_at" }
      ],
      modulePath: "trash/contact.js"
    };
  }
};
</script>
