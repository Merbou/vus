<template>
  <v-menu offset-y  :close-on-content-click="false">
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
    <v-list width="400" v-if="notifications.length>0" two-line>
      <template v-for="(notification,index) in notifications">
        <!-- <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
        <v-list-item :key="notification.title" @click="to(notification.link)">
          <v-list-item-avatar>
            <v-icon>{{`fas fa-${notification.icon}`}}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{notification.title}}</v-list-item-title>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-list-item-subtitle v-on="on" class="font-weight-bold">
                  <p>{{notification.description}}</p>
                </v-list-item-subtitle>
              </template>
              <p>{{notification.description}}</p>
            </v-tooltip>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index<notifications.length-1" :key="index" :inset="true"></v-divider>
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
    <v-list width="400" v-if="notifications.length==0 || loading" two-line>
      <v-list-item class="d-flex justify-center">
        <v-progress-circular class="my-2 loadigData" indeterminate color="green"></v-progress-circular>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { fetchNotificationsApi, viewNotificationApi } from "@/api/notification";
export default {
  data: () => ({
    loading: false,
    notifications: [],
    pagination: { page: 1, last_page: 0 },
    view: 0
  }),
  mounted() {
    this.fetchNotifications(this.pagination.page);
  },
  methods: {
    fetchNotifications(page) {
      this.loading = true;
      fetchNotificationsApi(page)
        .then(({ view, notifications }) => {
          this.loading = false;
          this.view = view;
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
      const view = this.view;
      this.view = 0;
      viewNotificationApi()
        .then(() => {})
        .catch(err => {
          this.view = view;
          console.log(err);
        });
    },
    to(path) {
      if (path) {
        const link = this.$router.resolve({ path });
        if (link && link.href !== "/") this.$router.push(path).catch(err => {});

        window.open(path);
      }
    }
  }
};
</script>

<style>
.v-icon.v-icon:after {
  background-color: #fff !important ;
}
div#list-item-133,
.loadigData {
  zoom: 0.7;
}
</style>