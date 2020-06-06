<template>
  <div>
    <assign-role
      :item="item"
      :roles="roles"
      @storeRole="assignRole"
      :open="dialog"
      @close="closeDialog"
    />
    <ng-table :headers="headers" :modulePath="modulePath" ref="table">
      <template v-slot:state="{item}">
        <div class="d-flex flex-row justify-space-between">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                class="state"
                v-if="item.email_verified_at"
                v-on="on"
                color="green"
              >fas fa-user-check</v-icon>
              <v-icon class="state" v-else v-on="on" color="red">fas fa-user-times</v-icon>
            </template>
            <span>account verified</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-chip
                class="state"
                @click="blockItem(item)"
                v-on="on"
                v-if="item.is_active"
                color="green"
                dark
              >yes</v-chip>
              <v-chip
                class="state"
                @click="blockItem(item)"
                v-on="on"
                v-else
                color="red"
                dark
              >no</v-chip>
            </template>
            <span>blocked</span>
          </v-tooltip>
        </div>
      </template>

      <template v-slot:fullname="{item}">{{item.lastname}} {{item.firstname}}</template>

      <template v-slot:roles="{item}">
        <v-icon :key="item.id" @click="openDialog(item)">fas fa-edit</v-icon>
      </template>
      <template v-slot:fullname="{item}">{{item.lastname}} {{item.firstname}}</template>

      <template v-slot:sex="{item}">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon class="my-2" v-on="on" v-if="item.sex">fas fa-male</v-icon>
            <v-icon class="my-2" v-on="on" v-else>fas fa-female</v-icon>
          </template>
          <span v-if="item.sex">Man</span>
          <span v-else>Woman</span>
        </v-tooltip>
      </template>
    </ng-table>
  </div>
</template>   


<script>
import ngTable from "@/materiels/ngTable";
import { blockUserApi } from "@/api/user/account";
import { assignRole } from "./components";
import { fetchOnlyRolesApi, assignRoleApi } from "@/api/user/privilege/role.js";

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
        { text: "State", value: "state" },
        {
          text: "Roles",
          value: "roles",
          sortable: false
        }
      ],
      modulePath: "user/account.js",
      roles: [],
      item: {
        id: null,
        roles: []
      },
      dialog: false
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
    assignRole(data) {
      const index = this.getData().indexOf(this.item);
      const roles = [...this.getData()[index].roles];
      this.getData()[index].roles = data.roles;

      assignRoleApi(data)
        .then(() => {})
        .catch(err => {
          this.getData()[index].roles = roles;
        });
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
    openDialog(item) {
      this.item = item;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    getData() {
      return this.$refs.table.getData();
    }
  }
};
</script>

<style>
.state {
  zoom: 0.7;
}
</style>
