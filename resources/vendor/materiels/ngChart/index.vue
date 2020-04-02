<template>
  <v-card elevation="10" class="py-2" :loading="loading" :disabled="loading">
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
    <v-card-text>
      <apexchart type="line" height="400" :options="chartOptions" :series="series" />
    </v-card-text>
  </v-card>
</template>

<script>
import apexchart from "vue-apexcharts";

export default {
  name: "chartUser",
  components: {
    apexchart
  },
  props: {
    series: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selection: "all",

      chartOptions: {
        annotations: {
          yaxis: [
            {
              y: 20,
              borderColor: "#999",
              label: {
                show: true,
                text: "Le nombre d'inscription",
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
                text: "La date d'inscription",

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
  mounted() {
    setTimeout(() => {
      this.updateData("all");
    }, 1000);
  },
  methods: {
    updateData(timeline) {
      this.selection = timeline;
      switch (timeline) {
        case "one_month":
          this.chartOptions = {
            xaxis: {
              min: new Date(this.getMonthSub(1)).getTime(),
              max: new Date().getTime()
            }
          };
          break;
        case "six_months":
          this.chartOptions = {
            xaxis: {
              min: new Date(this.getMonthSub(6)).getTime(),
              max: new Date().getTime()
            }
          };
          break;
        case "one_year":
          this.chartOptions = {
            xaxis: {
              min: new Date(this.getYearSub(1)).getTime(),
              max: new Date().getTime()
            }
          };
          break;

        case "all":
          this.chartOptions = {
            xaxis: {
              min: undefined,
              max: undefined
            }
          };
          break;
        default:
      }
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
