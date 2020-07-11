<template>
  <v-overlay :value="loading" v-if="loading">
    <v-card v-if="loading" persistent width="300">
      <v-card color="info" dark>
        <v-card-text>
          Please wait
          <v-progress-linear indeterminate :color="'white'" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-card>
  </v-overlay>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "materielLoading",
  computed: {
    ...mapGetters(["loading"])
  }
};
</script> 
 <style scoped>
