<template>
  <v-container>
    <v-layout>
      <v-flex xl12 sm12 xs12>
        <v-card :loading="loading">
          <v-card-title>
            <v-slider
              class="mt-5 pt-5"
              v-model="pagination.itemsPerPage"
              :value="pagination.itemsPerPage"
              color="success"
              label="items Per Page"
              min="5"
              step="5"
              max="100"
              thumb-label
            ></v-slider>

            <v-spacer></v-spacer>

            <v-text-field v-model="search" label="search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="users"
            :items-per-page="pagination.itemsPerPage"
            class="elevation-1"
            @page-count="pagination.pageCount = $event"
            :page.sync="pagination.page"
            hide-default-footer
            :search="search"
          >
            <template v-slot:item.email_verified_at="{ item }">
              <v-chip v-if="item.email_verified_at" color="green" dark>{{"yes"}}</v-chip>
              <v-chip v-else color="red" dark>{{"no"}}</v-chip>
            </template>

            <template v-slot:item.is_active="{ item }">
              <v-chip @click="blockItem(item)" v-if="!item.is_active" color="red" dark>{{'yes'}}</v-chip>
              <v-chip @click="blockItem(item)" v-else color="green" dark>{{'no'}}</v-chip>
            </template>
          </v-data-table>

          <div class="text-center pt-2">
            <v-container>
              <v-pagination
                v-model="pagination.page"
                :length="pagination.pageCount"
                @input="onPageChange"
              ></v-pagination>
            </v-container>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fetchUsersApi, blockUserApi } from "@/api/user/account";

export default {
  name: "tableUser",
  data() {
    return {
      pagination: {
        Backpage: 1,
        page: 1,
        pageCount: 0,
        itemsPerPage: 20
      },
      search: "",
      editedIndex: -1,

      headers: [
        {
          text: "email",
          align: "left",
          value: "email"
        },
        { text: "name", value: "name" },
        { text: "creationDate", value: "created_at" },
        {
          text: "accountVerified",
          value: "email_verified_at"
        },
        { text: "blocked", value: "is_active" },
        {
          text: "actions",
          value: "action",
          sortable: false
        }
      ],
      users: [],
      loading: true
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetchUsersApi(this.pagination.Backpage)
        .then(Response => {
          this.initData(Response.users);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    blockItem(item) {
      this.editedIndex = this.users.indexOf(item);
      let is_active = this.users[this.editedIndex].is_active;

      is_active = this.users[this.editedIndex].is_active = !is_active;

      blockUserApi(this.users[this.editedIndex].id)
        .then(Response => {
          alert("success");
        })
        .catch(error => {
          alert("fail");
          this.users[this.editedIndex].is_active = !is_active;
        });
    },

    onPageChange() {
      let Varientpage = parseInt(
        this.users.length / this.pagination.itemsPerPage
      );

      if (this.pagination.page >= Varientpage) {
        this.pagination.Backpage++;
        this.fetchData();
      }
    },

    initData(Response) {
      if (Response.current_page <= Response.last_page) {
        var countItem = this.users.length;
        var table = this.users.concat(Response.data);
        this.users = table;
        this.pagination.page =
          Response.current_page +
          parseInt(countItem / this.pagination.itemsPerPage);
        this.pagination.pageCount =
          Response.last_page *
          parseInt(countItem / this.pagination.itemsPerPage);
      }
    }
  }
};
</script>