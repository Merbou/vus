<template>
  <div id="main"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    chartdata: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.options);
  },
};
</script>

<style>
</style>