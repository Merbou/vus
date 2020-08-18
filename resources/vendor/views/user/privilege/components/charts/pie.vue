<template>
  <v-container>
    <v-card id="chart" :loading="loading">
      <v-card-text>
        <div id="main" style="width:100%;height:300px;"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import echarts from "echarts";
import { fetchRolesPercentageApi } from "@/api/user/privilege/role.js";
export default {
  name: "pieChart",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      options: {
        title: {
          text: this.$i18n.tc(`label.role`, 2),
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [],
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {
              show: true,
              type: ["funnel"],
            },
          },
        },
        series: [
          {
            type: "pie",
            radius: [20, 110],
            center: ["50%", "50%"],
            roseType: "area",
            data: [],
          },
        ],
      },
    };
  },
  created() {
    this.fetchRolesPercentage();
  },
  methods: {
    fetchRolesPercentage() {
      this.loading = true;
      fetchRolesPercentageApi()
        .then((_res) => {
          var myChart = echarts.init(
            document.getElementById("main"),
            this.dark ? "dark" : null
          );

          this.loading = false;
          this.options.series[0].data = _res.map((e) => {
            this.options.legend.data.push(this.$i18n.t(`roles.${e.label}`));
            return {
              name: this.$i18n.t(`roles.${e.label}`),
              value: e.series,
            };
          });
          myChart.setOption(this.options,true);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
  watch: {
    dark(val) {
      var myChart = echarts.init(
        document.getElementById("main"),
        val ? "dark" : null
      );
      myChart.setOption(this.options,true);
    },
  },
};
</script>
