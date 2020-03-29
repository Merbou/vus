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
  </ng-table>
</template>   






















<script>
import ngTable from "@/materiels/ngTable";
import { blockUserApi } from "@/api/user/account";

export default {
  components: { ngTable },

  data() {
    return {
      headers: [
        {
          text: "email",
          align: "left",
          value: "email"
        },
        { text: "name", value: "username" },
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
      modulePath: "user/account.js",
      data: []
    };
  },

  methods: {
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