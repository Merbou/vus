<template>
  <div>
    <curve-chart :dark="dark" :series="series" type="line" :loading="loading" />
  </div>
</template>

<script>
import { fetchAccountCountApi } from "@/api/user/chart";
import curveChart from "@/materiels/Charts/curveChart/index";
import { mapGetters } from 'vuex';
export default {
  name: "chartUser",
  components: {
    curveChart
  },
  data() {
    return {
      series: [{name:this.$i18n.t('_user_curve_chart.label'), data: [] }],
      loading:false
    };
  },
  computed:{
    ...mapGetters(["dark"])
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
