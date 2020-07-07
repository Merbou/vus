
<template >
  <div
    class="palette"
    @click="picked"
    :class="{
      'active-dark':active_colors&&dark,
      'active-light':active_colors&&!dark,
      'palette-dark':dark,
      'palette-light':!dark
      }"
  >
    <icon v-if="active_colors" />
    <div
      v-for="(color,index) in colors"
      :key="color+index"
      class="color"
      :style="{'background':color}"
    ></div>
  </div>
</template>

<script>
import icon from "./icon";
export default {
  name: "single",
  components: {
    icon
  },
  props: {
    colors: {
      type: Array,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      default: -1
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active_colors:
        this.active > -1 && this.active === this.order ? true : false
    };
  },
  methods: {
    picked() {
      this.active_colors = true;
      this.$emit("picked", { colors: this.colors, order: this.order });
    }
  },
  watch: {
    active(val) {
      this.active_colors = val > -1 && val === this.order ? true : false;
    }
  }
};
</script>

<style>
.palette {
  position: relative;
  width: 100%;
  display: flex;
  border: 1px rgba(253, 253, 253, 0.8) solid;
  opacity: 0.6;
  cursor: pointer;
  transition: transform 500ms;
  -moz-transition: transform 500ms;
  -webkit-transition: transform 500ms;
  -o-transition: transform 500ms;
}

.palette-light {
  border: 1px rgba(26, 25, 25, 0.8) solid;
}
.palette-dark {
  border: 1px rgba(253, 253, 253, 0.8) solid;
}

.palette:hover {
  opacity: 1;
  transform: scaleY(1.1);
  transform: scaleY(1.1);
  -moz-transform: scaleY(1.1);
  -webkit-transform: scaleY(1.1);
  -o-transform: scaleY(1.1);
}

.active-light {
  border: 2px rgba(26, 25, 25, 0.8) solid;
  opacity: 1;
  transform: scaleY(1.1);
  transform: scaleY(1.1);
  -moz-transform: scaleY(1.1);
  -webkit-transform: scaleY(1.1);
  -o-transform: scaleY(1.1);
}
.active-dark {
  border: 2px rgba(253, 253, 253, 0.8) solid;
  opacity: 1;
  transform: scaleY(1.1);
  transform: scaleY(1.1);
  -moz-transform: scaleY(1.1);
  -webkit-transform: scaleY(1.1);
  -o-transform: scaleY(1.1);
}

.palette div {
  height: 12px;
  width: 40px;
}
.color {
  flex-grow: 2;
}
</style>