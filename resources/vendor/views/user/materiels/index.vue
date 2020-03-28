<template>
  <v-container>
    <structure :headers="headers" :response="response" @renderData="fetchData" :loading="loading">
      <slot></slot>
    </structure>
  </v-container>
</template>

<script>
import structure from "./structure";

export default {
  name: "materielTable",
  components: { structure },
  props: {
    headers: {
      type: Array,
      required: true
    },
    modulePath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      response: {},
      apiFunctionsKeys: [],
      apiFunctions: {},
      fetchDataIndex: 0
    };
  },
  mounted() {
    this.renderApiFunction();
  },
  methods: {
    fetchData(page) {
      this.loading = true;
      ///get name of api function fetchdata from specifique module
      const fetchDataApiName = this.apiFunctionsKeys[this.fetchDataIndex];
      //get api function fetchdata from list of functions
      const fetchDataApi = this.apiFunctions[fetchDataApiName];

      fetchDataApi(page)
        .then(Response => {
          this.response = Response;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    renderApiFunction() {
      //import dynamically api Functions
      //useing asyn function import
      import("../../../api/" + this.modulePath).then(_m => {
        //save names of api function
        this.apiFunctionsKeys = Object.keys(_m);
        //save api function
        this.apiFunctions = _m;
        this.fetchData();
      });
    }
  }
};
</script>