<template>
  <v-app-bar color="white" mb-5 dark flat app fade-img-on-scroll dense>
    <v-app-bar-nav-icon color="grey darken-4" @click.stop="toggleSideBar"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>
    <v-menu :close-on-content-click="false" bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="grey darken-4" text dark v-on="on">my Account</v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="'/storage/'+user.picture_path" :alt="user.username" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                v-if="user.lastname&&user.firstname"
              >{{user.lastname}} {{user.firstname}}</v-list-item-title>
              <v-list-item-title v-else>{{user.username}}</v-list-item-title>
              <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <router-link class="inlineBlock" to="/setting" style="text-decoration: none;">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon text v-on="on">fas fa-cog</v-icon>
              </template>
              <span>Setting</span>
            </v-tooltip>
          </router-link>
          <v-spacer></v-spacer>
          <div class="flex-grow-1"></div>
          <router-link class="inlineBlock" to="/dashboard" style="text-decoration: none;">
            <v-btn text>Home</v-btn>
          </router-link>
          <v-btn style="display:block;" text @click="logout">logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navBar",
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // Re-instantiate the vue-router object to avoid bugs
      });
    },
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    }
  }
};
</script> 
 