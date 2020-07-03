<template>
  <v-container>
    <v-card id="chart" :loading="loading" max-width="380">
      <v-card-text>
        <apexchart type="pie" :options="chartOptions" :series="series" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import apexchart from "vue-apexcharts";
import { fetchRolesPercentageApi } from "@/api/user/privilege/role.js";
export default {
  name: "pieChart",
  components: {
    apexchart
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      series: [],
      chartOptions: {
        theme:{
          mode:""
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  },
  created() {
    this.chartOptions.theme.mode = this.dark ? "dark" : "light";
    this.fetchRolesPercentage();
  },
  methods: {
    fetchRolesPercentage() {
      this.loading = true;
      fetchRolesPercentageApi()
        .then(_res => {
          this.loading = false;
          _res.forEach(element => {
            this.chartOptions.labels.push(element.labels);
          });
          this.series = _res.map(e => parseFloat(e.series).toFixed(2) * 100);
        })
        .catch(err => {
          this.loading = false;

          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>