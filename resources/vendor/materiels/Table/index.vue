<template>
  <v-container>
    <structure
      :select="select"
      ref="_str"
      :headers="headers"
      :response="response"
      @renderData="fetchData"
      :loading="loading"
    >
      <template v-for="header in headers" v-slot:[header.value]="{ item }">
        <slot :name="header.value" :item="item"></slot>
      </template>
      <template v-slot:top="{selected}">
        <slot name="top" :selected="selected"></slot>
      </template>
    </structure>
  </v-container>
</template>

<script>
import structure from "./component/structure";

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
    },
    select: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
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
      this.vLoading(true);

      fetchDataApi(page)
        .then(Response => {
          this.vLoading(false);
          this.response = Response;
          this.loading = false;
        })
        .catch(error => {
          this.vLoading(false);
          console.log(error);
        });
    },
    renderApiFunction() {
      //import dynamically api Functions
      //useing asyn function import

      import("@/api/" + this.modulePath).then(_m => {
        //save names of api function
        this.apiFunctionsKeys = Object.keys(_m);
        //save api function
        this.apiFunctions = _m;
        this.fetchData();
      });
    },
    getData() {
      return this.$refs._str.getData();
    },
    setSelected($array) {
      this.$refs._str.setSelected($array);
    }
  }
};
</script>