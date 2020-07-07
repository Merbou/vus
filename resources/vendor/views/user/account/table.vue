<template>
  <div>
    <assign-role
      :item="item"
      :roles="roles"
      @storeRole="assignRole"
      :open="dialog"
      @close="closeDialog"
    />
    <materiel-table :headers="headers" :modulePath="modulePath" ref="table">
      <template v-slot:state="{item}">
        <div class="d-flex flex-row justify-space-between">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon
                class="state"
                v-if="item.email_verified_at"
                v-on="on"
                color="success"
                small
              >fas fa-user-check</v-icon>
              <v-icon class="state" v-else v-on="on" small color="red">fas fa-user-times</v-icon>
            </template>
            <span v-if="item.email_verified_at">{{$t('_user_table.verified')}}</span>
            <span v-else>{{$t('_user_table.not_verified')}}</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-chip
                class="state"
                @click="blockItem(item)"
                v-on="on"
                v-if="item.is_active"
                color="success"
                small
                dark
              >{{$t('qst.yes')}}</v-chip>
              <v-chip
                class="state"
                @click="blockItem(item)"
                small
                v-on="on"
                v-else
                color="red"
                dark
              >{{$t('qst.no')}}</v-chip>
            </template>
            <span>{{$tc('tooltip.block',1)}}</span>
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
          <span v-if="item.sex">{{$tc('label.sex',1)}}</span>
          <span v-else>{{$tc('label.sex',2)}}</span>
        </v-tooltip>
      </template>
    </materiel-table>
  </div>
</template>   


<script>
import materielTable from "@/materiels/Table";
import { blockUserApi } from "@/api/user/account";
import { assignRole } from "./components";
import { fetchOnlyRolesApi, assignRoleApi } from "@/api/user/privilege/role.js";
export default {
  components: { materielTable, assignRole },
  data() {
    return {
      headers: [
        {
          text: this.$i18n.tc("label.email"),
          align: "left",
          value: "email"
        },
        { text: this.$i18n.tc("label.username"), value: "username" },
        { text: this.$i18n.tc("label.fullname"), value: "fullname" },
        { text: this.$i18n.tc("label.sex", 0), value: "sex" },
        { text: this.$i18n.tc("label.creation_date"), value: "created_at" },
        { text: this.$i18n.tc("label.state"), value: "state" },
        {
          text: this.$i18n.tc("label.role", 2),
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
        .then(() => {
          this.snackbar({
            text: this.$i18n.t("_user_table.success_assign_role"),
            color: "success"
          });
        })
        .catch(err => {
          this.snackbar({
            text: this.$i18n.t("alert.failed"),
            color: "error"
          });
          this.getData()[index].roles = roles;
        });
    },
    blockItem(item) {
      const editedIndex = this.getData().indexOf(item);
      let is_active = this.getData()[editedIndex].is_active;

      is_active = this.getData()[editedIndex].is_active = !is_active;

      blockUserApi(this.getData()[editedIndex].id)
        .then(Response => {
          this.snackbar({
            text: this.$i18n.t("alert.complete"),
            color: "success"
          });
        })
        .catch(error => {
          this.snackbar({
            text: this.$i18n.t("alert.failed"),
            color: "error"
          });
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
