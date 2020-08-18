<template>
  <v-card elevation="10" class="py-2" :loading="loading" :disabled="loading">
    <div id="main" style="width: 100%;height:400px;"></div>
  </v-card>
</template>

<script>
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
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
        title: {
          text: "Users",
          subtext: "Number user registration per day",
        },
        xAxis: {
          data: [],
          axisLabel: {
            inside: true,
            textStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              color: "rgba(0,0,0,0.05)",
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: null,
            animation: false,
          },
          {
            type: "bar",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  computed: {
    dataShadow() {
      let max = Math.max(...this.series.map((e) => e[1]));
      return this.series.map((e) => max + max * 0.288);
    },
  },
  watch: {
    series(val) {
      var myChart = echarts.init(document.getElementById("main"));

      this.options.xAxis.data = this.series.map((e) => e[0]);
      this.options.series[1].data = this.series.map((e) => e[1]);
      this.options.series[0].data = this.dataShadow;
      myChart.setOption(this.options);
    },
    dark(val) {
      let elm = document.getElementById("main");
      console.log(val);
      var myChart = echarts.init(...(val ? [elm, "dark"] : [elm, "light"]));
      let textStyle = {
        color: val ? "#ffff" : "rgba(0, 0, 0, 0.5)",
      };
      this.options.title["textStyle"] = textStyle;
      myChart.setOption(this.options);
    },
  },
};
</script>
