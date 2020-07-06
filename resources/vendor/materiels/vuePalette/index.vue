<template>
  <div class="container-palette">
    <single
      v-for="(palette,index) in palettes"
      :key="index"
      :order="index"
      :colors="palette"
      :active="active"
      :dark="dark"
      @picked="picked"
    />
  </div>
</template>

<script>
import single from "./components/single";
import { isEqual } from "lodash";
export default {
  name: "vuePalette",
  components: { single },
  props: {
    palettes: {
      type: Array,
      required: true
    },
    pick: {
      type: Array,
      default: () => []
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: -1
    };
  },
  mounted() {
    this.active = this.palettes.findIndex(palette =>
      isEqual(palette, this.pick)
    );
  },
  methods: {
    picked({ colors, order }) {
      this.active = order;
      this.$emit("input", colors);
    }
  }
};
</script>

<style>
.container-palette {
  width: 200px;
  height: 200px;
  overflow-x: none;
  overflow-y: auto;
}
</style>