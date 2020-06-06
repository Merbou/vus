<template>
  <v-container>
    <v-card id="chart" :loading="loading" max-width="380">
      <v-card-text>
        <apexchart type="donut" :options="chartOptions" :series="series" />
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
  data() {
    return {
      loading: false,
      series: [],
      chartOptions: {
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
          this.series = _res.map(e => parseFloat(e.series) * 100);
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