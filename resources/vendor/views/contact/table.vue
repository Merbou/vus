<template>
  <div>
    <v-dialog v-model="dialogDelete" max-width="290">
      <v-card>
        <v-card-title>delete Message</v-card-title>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn color="secondary" @click="deleteItems">Yes</v-btn>

          <v-btn color="warning " @click="dialogDelete = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ng-table :headers="headers" :modulePath="modulePath" ref="table" :select="true">
      <template v-slot:top="{selected}">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              color="error"
              class="ml-4 mt-4"
              v-show="selected && selected.length>0"
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
import ngTable from "@/materiels/ngTable";
import { deleteContactsApi, readContactApi } from "@/api/contact";
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
      editedIndex: -1,
      dialogDelete: false,
      selected: []
    };
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
      this.editedIndex = this.getData().indexOf(item);
      this.item = item;
      this.dialog = true;
    },
    ShowDeleteItem(selected) {
      this.selected = selected;
      this.dialogDelete = true;
    },
    deleteItems() {
      var ids = this.selected.map(item => item.id);

      this.dialogDelete = false;

      this.Removeitems();
      deleteContactsApi(ids)
        .then(Response => {
          this.selected = [];
          this.setSelected([]);
        })
        .catch(error => {
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
    }
  }
};
</script>

<style>
</style>