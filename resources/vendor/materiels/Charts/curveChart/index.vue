<template>
  <v-card elevation="10" class="py-2" :loading="loading" :disabled="loading">
    <selection @handleSelection="ChangeSelection" :chartOptions="chartOptions" />
    <v-card-text>
      <apexchart :type="type" height="400" :options="chartOptions" :series="series" />
    </v-card-text>
  </v-card>
</template>

<script>
import apexchart from "vue-apexcharts";
import selection from "./component/selection";
export default {
  name: "curveChart",
  components: {
    apexchart,
    selection
  },
  props: {
    series: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: true
    },
    dark:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      selection: "all",

      chartOptions: {
        theme: {
          mode: ""
        },
        annotations: {
          yaxis: [
            {
              y: 20,
              borderColor: "#999",
              label: {
                show: true,
                text: this.$i18n.t('_user_curve_chart.yaxis'),
                style: {
                  color: "#fff",
                  background: "#00E396"
                }
              }
            }
          ],
          xaxis: [
            {
              x: new Date().getTime(),
              borderColor: "#999",
              yAxisIndex: 0,
              label: {
                show: true,
                text: this.$i18n.t('_user_curve_chart.xaxis'),

                style: {
                  color: "#fff",
                  background: "#775DD0"
                }
              }
            }
          ]
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime",
          min: undefined,
          max: undefined,
          tickAmount: 6
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        }
      }
    };
  },
  created(){
    this.darkMode()
  },
  methods: {
    darkMode() { 
      this.chartOptions.theme.mode = this.dark?"dark":"light";
    },
    ChangeSelection(chartOptions) {
      this.chartOptions = chartOptions;
    }
  }
};
</script>
