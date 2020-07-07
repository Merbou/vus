<template>
  <v-bottom-sheet :value="open" hide-overlay @click:outside="close" inset height="180">
    <v-card max-height="400">
      <v-card-title>{{$t('$setting.title')}}</v-card-title>
      <v-container>
        <v-item-group>
          <v-row>
            <v-col md="4" mx-3>
              <v-item>
                <v-switch v-model="rtl_model" label="RTL" flat inset @change="toggleRtl"></v-switch>
              </v-item>
              <v-item>
                <v-switch v-model="dark_model" label="Dark mode" flat inset @change="toggleDark"></v-switch>
              </v-item>
            </v-col>
            <v-col md="4" mx-3>
              <v-item>
                <v-card>
                  <v-card-title>{{$t("$palettes.title")}}</v-card-title>
                  <v-container>
                    <vue-palette
                      :dark="dark"
                      :palettes="palettes"
                      @input="changeTheme"
                      :pick="palette"
                    />
                  </v-container>
                </v-card>
              </v-item>
            </v-col>
            <v-col md="4" mx-3>
              <v-item>
                <app-bar-options :appBar="appBar" />
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import vuePalette from "@/materiels/vuePalette";
import colors from "./palettes";
import AppBarOptions from "./AppBarOptions";

export default {
  components: {
    vuePalette,
    AppBarOptions
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
    },
    palette: {
      type: Array,
      default: () => []
    },
    appBar: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      palettes: colors,
      rtl_model: this.rtl,
      dark_model: this.dark
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

.v-card {
  overflow-y: auto;
}
</style>