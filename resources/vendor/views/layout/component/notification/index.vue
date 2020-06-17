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
      <v-icon dark color="grey darken-4" v-show="view==0" class="mx-3" v-on="on">far fa-bell</v-icon>
    </template>
    <v-list width="400" height="400" style="overflow-y:auto" v-if="notifications.length>0" two-line>
      <notify-item :notifications="notifications" />
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
    <v-list width="400" v-if="notifications.length==0 || loading" two-line>
      <v-list-item class="d-flex justify-center">
        <v-progress-circular class="my-2 loadigData" indeterminate color="green"></v-progress-circular>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { fetchNotificationsApi, viewNotificationApi } from "@/api/notification";
import { mapGetters } from "vuex";
import notify from "@/utils/notify";
import notifyItem from "./components/notifyItem.vue";
export default {
  components: {
    notifyItem
  },
  data: () => ({
    loading: false,
    notifications: [],
    pagination: { page: 1, last_page: 0 },
    view: 0
  }),
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    this.fetchNotifications(this.pagination.page);
  },

  created() {
    Echo.private(`App.User.${this.user.id}`).listen("notificationEvent", e => {
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
          this.pagination.page = notifications.current_page;
          this.pagination.last_page = notifications.last_page;
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