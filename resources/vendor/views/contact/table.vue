<template>
  <div>
    <dialog-contact :dialog="showContent" :item="item" @close="closeDialog" />

    <ng-table :headers="headers" :modulePath="modulePath" ref="table" :select="true">
      <template v-slot:top="{selected}">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              color="error"
              class="ml-4 mt-4"
              :disabled="!(selected && selected.length>0)"
              @click="ShowDeleteItem(selected)"
              v-on="on"
              depressed
            >fas fa-trash</v-icon>
          </template>
          <span>delete</span>
        </v-tooltip>
      </template>

      <template v-slot:actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon small class="mr-2 mx-2" @click="ShowDeleteItem([item])" v-on="on">fas fa-trash</v-icon>
          </template>
          <span>Delete message</span>
        </v-tooltip>
      </template>

      <template v-slot:vu="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              v-if="item.vu"
              small
              class="mr-2"
              @click="readItem(item,true)"
              v-on="on"
            >fas fa-envelope-open</v-icon>
            <v-icon
              v-else
              small
              class="mr-2"
              @click="readItem(item,false)"
              v-on="on"
            >fas fa-envelope</v-icon>
          </template>
          <span>Read it</span>
        </v-tooltip>
      </template>
    </ng-table>
  </div>
</template>
<script>
import dialogContact from "./component/dialogContact";
import ngTable from "@/materiels/ngTable";
import { deleteContactsApi, readContactApi } from "@/api/contact";
import { mapGetters } from "vuex";
export default {
  components: { ngTable, dialogContact },
  data() {
    return {
      headers: [
        {
          text: "email",
          align: "left",
          value: "email"
        },
        { text: "subject", value: "subject" },
        { text: "creation date", value: "created_at" },
        { text: "read", value: "vu" },
        {
          text: "actions",
          value: "actions",
          sortable: false
        }
      ],
      modulePath: "contact/index.js",
      item: {},
      showContent: false,
      selected: []
    };
  },
  mounted() {
    this.initDialog();
  },
  computed: {
    ...mapGetters(["dialog"]),
    value() {
      return this.dialog.value;
    }
  },
  methods: {
    readContact(item) {
      item.vu = 1;
      readContactApi(item.id)
        .then(result => {})
        .catch(err => {
          item.vu = 0;
        });
    },
    readItem(item, type) {
      this.readContact(item);
      this.item = item;
      this.showContent = true;
    },
    closeDialog() {
      this.showContent = false;
    },
    ShowDeleteItem(selected) {
      this.selected = selected;
      this.$store.dispatch("toggleDialog", { open: true, value: false });
    },
    deleteItems() {
      var ids = this.selected.map(item => item.id);

      this.dialogDelete = false;

      this.Removeitems();
      this.vLoading(true);
      deleteContactsApi(ids)
        .then(Response => {
          this.vLoading(false);
          this.snackbar({
            text: "The operation completed successfully !",
            color: "success"
          });
          this.selected = [];
          this.setSelected([]);
        })
        .catch(error => {
          this.vLoading(false);
          this.snackbar({
            text: "The operation did not complete. Try again later!",
            color: "error"
          });

          this.getData().push(this.selected);
        });
    },
    Removeitems() {
      this.selected.forEach(item => {
        var index = this.getData().indexOf(item);
        if (index > -1) {
          this.getData().splice(index, 1);
        }
      });
    },
    getData() {
      return this.$refs.table.getData();
    },
    setSelected($array) {
      this.$refs.table.setSelected($array);
    },
    initDialog() {
      this.$store.dispatch("initDialog", {
        message: "Are you sure to delete this contact",
        title: "Are you sure !",
        accepte: "Yes",
        cancel: "Cancel"
      });
    }
  },
  watch: {
    value(val) {
      if (val) this.deleteItems();
    }
  }
};
</script>

<style>
</style>