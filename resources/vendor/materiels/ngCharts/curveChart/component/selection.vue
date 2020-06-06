<template>
  <div class="toolbar">
    <v-row align="center" justify="center">
      <v-btn-toggle rounded>
        <v-btn
          @click="updateData('one_month')"
          id="one_month"
          small
          :class="{active: selection==='one_month'}"
        >One month</v-btn>
        <v-btn
          @click="updateData('six_months')"
          id="six_months"
          small
          :class="{active: selection==='six_months'}"
        >Six months</v-btn>
        <v-btn
          @click="updateData('one_year')"
          id="one_year"
          small
          :class="{active: selection==='one_year'}"
        >One year</v-btn>
        <v-btn small @click="updateData('all')" id="all" :class="{active: selection==='all'} ">All</v-btn>
      </v-btn-toggle>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "selection",

  props: {
    chartOptions: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selection: "all"
    };
  },
  mounted() {
    setTimeout(() => {
      this.updateData("all");
    }, 1000);
  },
  methods: {
    updateData(timeline) {
      this.selection = timeline;
      let chartOptions = this.wichTimeToSelecte(timeline);
      this.$emit("handleSelection", chartOptions);
    },
    wichTimeToSelecte(timeline) {
      let chartOptions = { ...this.chartOptions };
      switch (timeline) {
        case "one_month":
          chartOptions = {
            xaxis: {
              min: new Date(this.getMonthSub(1)).getTime(),
              max: new Date().getTime()
            }
          };
          break;
        case "six_months":
          chartOptions = {
            xaxis: {
              min: new Date(this.getMonthSub(6)).getTime(),
              max: new Date().getTime()
            }
          };
          break;
        case "one_year":
          chartOptions = {
            xaxis: {
              min: new Date(this.getYearSub(1)).getTime(),
              max: new Date().getTime()
            }
          };
          break;

        case "all":
          chartOptions = {
            xaxis: {
              min: undefined,
              max: undefined
            }
          };
          break;
        default:
      }
      return chartOptions;
    },
    getYearSub(nbr) {
      var date = new Date();
      return date.setFullYear(date.getFullYear() - nbr);
    },
    getMonthSub(nbr) {
      var date = new Date();
      return date.setMonth(date.getMonth() - nbr);
    }
  }
};

var resetCssClasses = function(activeEl) {
  var els = document.querySelectorAll("button");
  Array.prototype.forEach.call(els, function(el) {
    el.classList.remove("active");
  });

  activeEl.target.classList.add("active");
};
</script>
