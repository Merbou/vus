<template v-if="notifications.length">
  <div>
    <div v-for="notification in items" :key="notification.id">
      <v-list-item @click="to(notification.link)">
        <v-list-item-avatar :color="colors[getRandomInt(colors.length)]+' accent-4'">
          <v-icon color="grey lighten-5">{{`fas fa-${notification.icon?notification.icon:'flag'}`}}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{notification.title}}</v-list-item-title>
          <v-tooltip bottom v-if="notification.description">
            <template v-slot:activator="{ on }">
              <v-list-item-subtitle v-on="on" class="font-weight-bold">
                <p>{{notification.description}}</p>
              </v-list-item-subtitle>
            </template>
            <p>{{notification.description}}</p>
          </v-tooltip>
        </v-list-item-content>
      </v-list-item>
      <v-divider :inset="true"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "notifyItem",
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      items: [],
      colors: ["light-blue", "cyan", "teal", "green", "indigo", "purple"]
    };
  },
  created() {
    this.items = this.notifications;
  },
  methods: {
    to(path) {
      if (path) {
        const link = this.$router.resolve({ path });
        if (link && link.href !== "/") this.$router.push(path).catch(err => {});

        window.open(path);
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
};
</script>

<style>
.v-icon.v-icon:after {
  background-color: #fff !important ;
}
</style>