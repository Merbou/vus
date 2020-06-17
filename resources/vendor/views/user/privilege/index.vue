<template>
  <v-container>
    <new-role @create="storeRole" :open="dialogs.create" @close="closeDialog" />
    <assign-permissions
      :open="dialogs.tree"
      :item="item"
      :selected="item&&item.permissions&&item.permissions.map(e=>e.id)"
      :permissions="permissions"
      @assing="assignRole"
      @close="closeDialog"
    />
    <v-row>
      <v-col cols="12" lg="7" md="8" sm="12">
        <materiel-table :headers="headers" :modulePath="modulePath" ref="table">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Roles</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" dark @click="dialogs['create'] = true" class="mb-2">New role</v-btn>
            </v-toolbar>
          </template>

          <template v-slot:actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  small
                  class="mr-2 mx-2"
                  @click="ShowAsker(item,'delete')"
                  v-on="on"
                >fas fa-trash</v-icon>
              </template>
              <span>Delete Role</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  small
                  class="mr-2 mx-2"
                  @click="ShowDialogWithItem(item,'tree')"
                  v-on="on"
                >fas fa-edit</v-icon>
              </template>
              <span>Assign permissions</span>
            </v-tooltip>
          </template>
        </materiel-table>
      </v-col>
      <v-col cols="12" lg="5" md="4" sm="12">
        <pieChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import materielTable from "@/materiels/Table";
import { mapGetters } from "vuex";
import { toTree } from "@/utils/permission";

import { storeRoleApi, deleteRoleApi } from "@/api/user/privilege/role.js";
import {
  fetchPermissionsApi,
  storePermissionsApi
} from "@/api/user/privilege/permission.js";

import { newRole, assignPermissions, pieChart } from "./components";
export default {
  components: {
    materielTable,
    newRole,
    assignPermissions,
    pieChart
  },
  data() {
    return {
      loading: true,
      dialogs: { tree: false, create: false },
      headers: [
        {
          text: "Role",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false
        }
      ],
      roles: [],
      permissions: [],
      modulePath: "user/privilege/role.js",
      ItemIndex: -1,
      item: {
        id: "",
        name: ""
      },
      defaultItem: {
        id: "",
        name: ""
      },
      option: ""
    };
  },
  computed: {
    ...mapGetters(["dialog"]),
    value() {
      return this.dialog.value;
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      fetchPermissionsApi()
        .then(_res => {
          this.permissions = toTree(_res);
        })
        .catch(err => console.log(err));
    },
    storeRole(role) {
      this.vLoading(true);
      this.open = false;
      const index = this.save(role);
      storeRoleApi(role)
        .then(res => {
          this.vLoading(false);
          this.snackbar({
            text: "The role is stored successfully !",
            color: "success"
          });
          this.getData()[index].id = res.id;
        })
        .catch(err => {
          this.vLoading(false);
          this.snackbar({
            text: "The operation did not complete. Try again later!",
            color: "error"
          });
          this.remove(index);
        });
    },
    deleteRole() {
      const index = this.getData().indexOf(this.item);
      this.remove(index);
      deleteRoleApi(this.item.id)
        .then(() => {
          this.snackbar({
            text: "The operation completed successfully !",
            color: "success"
          });
          this.item = { id: "", name: "" };
        })
        .catch(err => {
          this.snackbar({
            text: "The operation did not complete. Try again later!",
            color: "error"
          });
          const index = this.save(this.item);
          this.item = { id: "", name: "" };
        });
    },
    assignRole(permissions) {
      const index = this.getData().indexOf(this.item);
      this.getData()[index].permissions = [
        ...permissions.map(e => {
          return { id: e };
        })
      ];
      this.closeDialog();
      const data = {
        role_id: this.item.id,
        permissions_id: permissions
      };
      this.vLoading(true);

      storePermissionsApi(data)
        .then(() => {
          this.vLoading(false);
          this.snackbar({
            text: "the permissions was assigned to role successfully !",
            color: "success"
          });
          this.item = { id: "", name: "" };
        })
        .catch(err => {
          this.vLoading(false);
          this.snackbar({
            text: "The operation did not complete. Try again later!",
            color: "error"
          });
          this.item = { id: "", name: "" };
        });
    },
    ShowAsker(item, option) {
      this.item = item;
      this.option = option;
      this.$store.dispatch("toggleDialog", {
        message: `Are you sure to ${option} this role`,
        open: true,
        value: false
      });
    },
    ShowDialogWithItem(item, prop) {
      this.item = item;
      this.dialogs[prop] = true;
    },
    save(role) {
      return this.getData().push(role) - 1;
    },
    remove(index) {
      return this.getData().splice(index, 1);
    },
    closeDialog() {
      for (const key in this.dialogs) {
        this.dialogs[key] = false;
      }
    },
    getData() {
      return this.$refs.table.getData();
    }
  },
  watch: {
    value(val) {
      if (val) {
        if (this.option === "delete") this.deleteRole();
        else if (this.option === "assign") this.assignRole();
      }
    }
  }
};
</script>