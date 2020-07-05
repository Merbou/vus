<template>
  <v-bottom-sheet :value="open" hide-overlay @click:outside="close" inset height="180">
    <v-sheet class="text-center">
      <v-item-group>
        <v-container>
          <v-row>
            <v-col md="4" mx-3>
              <v-item>
                <v-switch :value="rtl" label="RTL" flat inset @change="toggleRtl"></v-switch>
              </v-item>
              <v-item>
                <v-switch :value="dark" label="Dark mode" flat inset @change="toggleDark"></v-switch>
              </v-item>
            </v-col>
            <v-col md="4" mx-3>
              <v-item>
                <vue-palette :dark="dark" :palettes="palettes" @input="changeTheme" />
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import vuePalette from "@/materiels/vuePalette";
export default {
  components: {
    vuePalette
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      palettes: [
        ["#17252A", "#2B7A78", "#3AAFA9", "#DEF2F1", "#FEFFFF"],
        ["#F8E9A1", "#F76C6C", "#A8D0E6", "#374785", "#24305E"],
        ["#0B0C10", "#1F2833", "#C5C6C7", "#66FCF1", "#45A29E"]
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    toggleRtl() {
      this.$store.dispatch("toggleRTL");
    },
    toggleDark() {
      this.$store.dispatch("toggleDark");
    },
    changeTheme(palette) {
      this.$store.dispatch("changeTheme", palette);
    }
  }
};
</script>

<style>
.v-color-picker__controls {
  display: none;
}
</style>