<template>
  <v-app-bar color="white" mb-5 flat app fade-img-on-scroll dense class="nav-bar">
    <v-app-bar-nav-icon class="mx-1" dark @click.stop="toggleSideBar"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <Lang-select :is_white="false" />
    <notification />

    <v-menu :close-on-content-click="false" bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text dark v-on="on">{{$t('$navbar.account')}}</v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar height="50" width="50">
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
              <span>{{$t('$navbar.setting')}}</span>
            </v-tooltip>
          </router-link>
          <v-spacer></v-spacer>
          <div class="flex-grow-1"></div>
          <router-link class="inlineBlock" to="/dashboard" style="text-decoration: none;">
            <v-btn text>{{$t('$navbar.home')}}</v-btn>
          </router-link>
          <v-btn style="display:block;" text @click="logout">{{$t('$navbar.logout')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import notification from "./notification";
import LangSelect from "@/materiels/LangSelect";

export default {
  name: "navBar",
  components: { notification, LangSelect },
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
 