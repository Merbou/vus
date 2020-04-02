<template>
  <div>
    <ngChart :series="series" :loading="loading" />
  </div>
</template>

<script>
import { fetchAccountCountApi } from "@/api/user/chart";
import ngChart from "@/materiels/ngChart/index";
export default {
  name: "chartUser",
  components: {
    ngChart
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
