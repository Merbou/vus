<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-badge color="green" :content="view" v-show="view>0" overlap left>
        <v-icon
          dark
          color="grey darken-4"
          class="mx-3"
          v-on="on"
          @click="viewNotification"
        >far fa-bell</v-icon>
      </v-badge>
      <v-icon
        dark
        color="grey darken-4"
        v-show="view==0"
        class="mx-3"
        v-on="on"
        @click.once="fetchNotifications(0)"
      >far fa-bell</v-icon>
    </template>
    <v-list width="400" :height="height" style="overflow-y:auto" two-line>
      <notify-item :notifications="notifications" v-if="notifications.length>0" />
      <template v-if="loading">
        <v-skeleton-loader
          v-for="n in 1"
          :key="n"
          class="mx-auto"
          max-width="300"
          type="list-item-avatar-two-line"
        ></v-skeleton-loader>
      </template>

      <v-list-item
        @click="moreNotifications"
        v-if="pagination.page < pagination.last_page"
        class="d-flex justify-center"
      >
        <v-list-item-title class="d-flex justify-center">
          <v-chip class="ma-2 d-flex justify-center" link>show more</v-chip>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {
  fetchNotificationsApi,
  viewNotificationApi,
  fetchNotificationsViewApi
} from "@/api/notification";
import { mapGetters } from "vuex";
import notify from "@/utils/notify";
import notifyItem from "./components/notifyItem.vue";
export default {
  components: {
    notifyItem
  },
  data: () => ({
    loading: false,
    height: 90,
    notifications: [],
    pagination: { page: 1, last_page: 0 },
    view: 0
  }),
  computed: {
    ...mapGetters(["user", "channel"])
  },
  mounted() {
    this.fetchNotificationsView();
  },
  created() {
    this.channel &&
      this.channel.listen("notificationEvent", e => {
        this.notifications.push(e.notification);
        this.view++;
        notify.browser();
      });
  },
  methods: {
    fetchNotifications(page) {
      this.loading = true;
      fetchNotificationsApi(page)
        .then(({ view, notifications }) => {
          this.loading = false;
          this.view = view;
          if (this.view) notify.icon();

          this.notifications.push(...notifications.data);
          if (notifications.length) this.height = 400;
          this.pagination.page = notifications.current_page;
          this.pagination.last_page = notifications.last_page;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    fetchNotificationsView(page) {
      this.loading = true;
      fetchNotificationsViewApi(page)
        .then(({ view }) => {
          this.loading = false;
          this.view = view;
          if (this.view) notify.icon();
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },

    moreNotifications() {
      this.pagination.page++;
      if (this.pagination.page <= this.pagination.last_page)
        this.fetchNotifications(this.pagination.page);
    },
    viewNotification() {
      notify.clear();
      const view = this.view;
      this.view = 0;
      viewNotificationApi()
        .then(() => {})
        .catch(err => {
          this.view = view;
          console.log(err);
        });
    }
  },
  watch: {
    // view(val) {
    //   if (this.val) notifyBrowser();
    // }
  }
};
</script>

<style>
.v-icon.v-icon:after {
  background-color: #fff !important ;
}
.loadigData {
  zoom: 0.7;
}
</style>