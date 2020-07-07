<template>
  <div @click="redirect" class="redirect">
    <v-badge color="info" :content="views" v-show="views>0" overlap right bottom>
      <v-icon small tile dark class="mx-3 my-2">fas fa-inbox</v-icon>
    </v-badge>
    <v-icon v-show="views==0" class="mx-3 my-2" small dark tile>fas fa-inbox</v-icon>
  </div>
</template>

<script>
import {
  //   viewNotificationApi,
  fetchViewsContactsApi
} from "@/api/contact";
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    views: 0
  }),
  mounted() {
    this.fetchCountContactsView();
  },
  methods: {
    fetchCountContactsView() {
      fetchViewsContactsApi()
        .then(({ views }) => {
          this.views = views;
        })
        .catch(err => {
          console.log(err);
        });
    },
    redirect() {
      this.$router.push({ path: "/contacts" }).catch(err => {});
    }
  }
};
</script>
<style>
.redirect{
  cursor: pointer;
}
</style>