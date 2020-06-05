<template>
  <ng-table :headers="headers" :modulePath="modulePath" ref="table">
    <template v-slot:email_verified_at="{item}">
      <v-chip v-if="item.email_verified_at" color="green" dark>yes</v-chip>
      <v-chip v-else color="red" dark>no</v-chip>
    </template>

    <template v-slot:is_active="{item}">
      <v-chip @click="blockItem(item)" v-if="item.is_active" color="green" dark>yes</v-chip>
      <v-chip @click="blockItem(item)" v-else color="red" dark>no</v-chip>
    </template>

    <template v-slot:is_active="{item}">
      <v-chip @click="blockItem(item)" v-if="item.is_active" color="green" dark>yes</v-chip>
      <v-chip @click="blockItem(item)" v-else color="red" dark>no</v-chip>
    </template>
    <template v-slot:fullname="{item}">{{item.lastname}} {{item.firstname}}</template>

    <template v-slot:actions="{item}">
      <assign-role :item="item" :roles="roles" @storeRole="assignRole" />
    </template>
    <template v-slot:fullname="{item}">{{item.lastname}} {{item.firstname}}</template>

    <template v-slot:sex="{item}">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" v-if="item.sex">fas fa-male</v-icon>
          <v-icon v-on="on" v-else>fas fa-female</v-icon>
        </template>
        <span v-if="item.sex">Man</span>
        <span v-else>Woman</span>
      </v-tooltip>
    </template>
  </ng-table>
</template>   


<script>
import ngTable from "@/materiels/ngTable";
import { blockUserApi } from "@/api/user/account";
import { assignRole } from "./components";
import { fetchOnlyRolesApi } from "@/api/user/privilege.js";

export default {
  components: { ngTable, assignRole },
  data() {
    return {
      headers: [
        {
          text: "email",
          align: "left",
          value: "email"
        },
        { text: "username", value: "username" },
        { text: "Full name", value: "fullname" },
        { text: "sex", value: "sex" },
        { text: "creation date", value: "created_at" },
        {
          text: "accountVerified",
          value: "email_verified_at"
        },
        { text: "blocked", value: "is_active" },
        {
          text: "actions",
          value: "actions",
          sortable: false
        }
      ],
      modulePath: "user/account.js",
      roles: []
    };
  },

  mounted() {
    this.fetchOnlyRoles();
  },
  methods: {
    fetchOnlyRoles() {
      fetchOnlyRolesApi()
        .then(res => {
          this.roles = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    assignRole(roles) {
      console.log(roles)
      // fetchOnlyRolesApi()
      //   .then(res => {
      //     this.roles = res;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    blockItem(item) {
      const editedIndex = this.getData().indexOf(item);
      let is_active = this.getData()[editedIndex].is_active;

      is_active = this.getData()[editedIndex].is_active = !is_active;

      blockUserApi(this.getData()[editedIndex].id)
        .then(Response => {
          alert("success");
        })
        .catch(error => {
          alert("fail");
          this.getData()[editedIndex].is_active = !is_active;
        });
    },

    getData() {
      return this.$refs.table.getData();
    }
  }
};
</script>

<style>
</style>