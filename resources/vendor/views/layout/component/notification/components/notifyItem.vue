<template v-if="notifications.length"  >
  <div>
    <v-list-item
      v-for="notification in items"
      :key="notification.id"
      @click="to(notification.link)"
    >
      <v-list-item-avatar>
        <v-icon>{{`fas fa-${notification.icon?notification.icon:'flag'}`}}</v-icon>
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
      items: []
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
    }
  }
};
</script>

<style>
.v-icon.v-icon:after {
  background-color: #fff !important ;
}
</style>