<template>
  <v-bottom-sheet :value="open" hide-overlay @click:outside="close" inset>
    <v-sheet class="text-center" height="150px">
      <v-item-group>
        <v-container>
          <v-row>
            <v-col md="4" mx-3>
              <v-item>
                <v-switch :value="switchRtl" label="RTL" flat inset @change="toggleRtl"></v-switch>
              </v-item>
              <v-item>
                <v-switch  :value="!switchDark" label="Dark mode" flat inset @change="toggleDark"></v-switch>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
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
  },
  data() {
    return {
      switchRtl: this.rtl,
      switchDark: this.dark
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
    }
  }
};
</script>

<style>
</style>