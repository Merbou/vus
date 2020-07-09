<template>
  <div>
    <sheet
      :open="open"
      @close="open=false"
      :rtl="RTL"
      :dark="dark"
      :palette="palette"
      :appBar="appBar"
    />
    <v-fab-transition>
      <v-btn
        color="info"
        small
        dark
        absolute
        bottom
        fixed
        class="mb-7 float-btn"
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
    ...mapGetters(["RTL", "dark", "palette", "appBar"])
  }
};
</script>
<style scoped>
.float-btn {
  zoom: 0.8;
}
</style>

