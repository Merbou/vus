<template>
  <v-card elevation="10" class="py-2" :loading="loading" :disabled="loading">
    <v-card-text>
      <div id="main" style="width: 600px;height:400px;"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import echarts from "echarts";

export default {
  name: "curveChart",
  props: {
    series: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "line",
            areaStyle: {},
          },
        ],
      },
    };
  },
  watch: {
    series(val) {
      var myChart = echarts.init(document.getElementById("main"));
      this.options.xAxis.data = this.series.map((e) => e[0]);
      this.options.series[0].data = this.series.map((e) => e[1]);
      myChart.setOption(this.options);
    },
  },
};
</script>
