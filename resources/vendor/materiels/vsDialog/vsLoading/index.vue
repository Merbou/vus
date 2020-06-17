<template>
  <v-overlay :value="ling">
    <v-dialog :value="ling" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please wait
          <v-progress-linear indeterminate :color="'white'" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "vsLoading",
  computed: {
    ...mapGetters(["loading"])
  },
  data(){
    return {
      ling:false
    }
  },
  watch: {
    loading(val) {
      this.ling = val;
    }
  }
};
</script> 
 