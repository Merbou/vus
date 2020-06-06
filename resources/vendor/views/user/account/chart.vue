<template>
  <div>
    <curve-chart :series="series" type="line" :loading="loading" />
  </div>
</template>

<script>
import { fetchAccountCountApi } from "@/api/user/chart";
import curveChart from "@/materiels/ngCharts/curveChart/index";
export default {
  name: "chartUser",
  components: {
    curveChart
  },
  data() {
    return {
      series: [{ data: [] }],
      loading:false
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetchAccountCountApi()
        .then(Response => {
          this.series[0].data = Response;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
