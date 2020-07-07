<template>
  <div @click="redirect" class="redirect">
    <v-badge color="info" :content="views" v-show="views>0" overlap right bottom>
      <v-icon small tile dark class="mx-3 my-2" >fas fa-comment</v-icon>
    </v-badge>
    <v-icon v-show="views==0" class="mx-3 my-2" small dark tile>fas fa-comment</v-icon>
  </div>
</template>

<script>
import { viewMessagesApi, fetchViewsMessagesApi } from "@/api/chat/message";
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
    this.fetchCountMessagesView();
  },
  methods: {
    fetchCountMessagesView() {
      fetchViewsMessagesApi()
        .then(({ views }) => {
          this.views = views;
        })
        .catch(err => {
          console.log(err);
        });
    },
    redirect() {
      this.$router.push({ path: "/chats" }).catch(err => {});
    }

  }
};
</script>
<style>
.redirect{
  cursor: pointer;
}
</style>