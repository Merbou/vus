<template>
  <v-card>
    <v-card-title>{{$t("$appBarOptions.title")}}</v-card-title>
    <v-container>
      <v-chip-group column @change="changeOptions" v-model="options" multiple>
        <v-chip
          small
          v-for="tag in tags"
          :input-value="isActive(tag)"
          dark
          color="info"
          filter
          :key="tag"
        >{{ tag }}</v-chip>
      </v-chip-group>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    appBar: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: [],
      tags: [
        "image",
        "Collapse On Scroll",
        "Dense",
        "Flat",
        "Hide On Scroll",
        "Inverted Scroll",
        "Prominent",
        "Elevate On Scroll",
        "Shrink On Scroll"
      ]
    };
  },
  mounted() {
    this.options = this.selection(this.appBar);
  },
  methods: {
    changeOptions() {
      let handelOptions = this.tags.filter(
        (e, i) => this.options.indexOf(i) > -1
      );

      handelOptions = handelOptions.map(t =>
        t
          .split(" ")
          .join("-")
          .toLowerCase()
      );
      const options = [];
      handelOptions.forEach(op => {
        options.push(op);
      });

      this.$store.dispatch("changeAppBar", options);
    },
    selection(ops) {
      return ops
        .map(op =>
          this.tags
            .map(tag =>
              tag
                .split(" ")
                .join("-")
                .toLowerCase()
            )
            .indexOf(op)
        )
        .filter(op => op > -1);
    },
    isActive(index) {
      return this.options.indexOf(index) > -1;
    }
  },
  watch: {
    appBar(val) {
      this.options = this.selection(val);
    }
  }
};
</script>
<style >
i.v-icon.notranslate.v-chip__filter.v-icon--left.fas.fa-check {
  font-size: 15px !important;
}
</style>