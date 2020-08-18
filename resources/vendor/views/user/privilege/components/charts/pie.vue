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
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
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
          let elm = document.getElementById("main");

          var myChart = echarts.init(
            ...(this.dark ? [elm, "dark"] : [elm, "light"])
          );
          this.loading = false;
          this.options.series[0].data = _res.map((e) => {
            this.options.legend.data.push(this.$i18n.t(`roles.${e.label}`));
            return {
              name: this.$i18n.t(`roles.${e.label}`),
              value: e.series,
            };
          });
          myChart.setOption(this.options, true);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
  watch: {
    dark(val) {
      let elm = document.getElementById("main");
      var myChart = echarts.init(...(val ? [elm, "dark"] : [elm, "light"]));

      let textStyle = {
        color: val ? "#ffff" : "rgba(0, 0, 0, 0.5)",
      };

      this.options.title["textStyle"] = textStyle;
      this.options.legend["textStyle"] = textStyle;
      myChart.setOption(this.options, true);
    },
  },
};
</script>
