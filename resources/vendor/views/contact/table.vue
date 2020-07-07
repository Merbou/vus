<template>
  <div>
    <dialog-contact :dialog="showContent" :item="item" @close="closeDialog" />

    <materiel-table :headers="headers" :modulePath="modulePath" ref="table" :select="true">
      <template v-slot:top="{selected}">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              color="error"
              class="mx-4 mt-4"
              :disabled="!(selected && selected.length>0)"
              @click="ShowDeleteItem(selected)"
              v-on="on"
              depressed
            >fas fa-trash</v-icon>
          </template>
          <span>{{$tc('tooltip.delete')}}</span>
        </v-tooltip>
      </template>

      <template v-slot:actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon small class="mx-2 mx-2" @click="ShowDeleteItem([item])" v-on="on">fas fa-trash</v-icon>
          </template>
          <span>{{$t('tooltip.delete',{obj:$tc('label.contact',1)})}}</span>
        </v-tooltip>
      </template>

      <template v-slot:view="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              v-if="item.view"
              small
              class="mx-2"
              @click="readItem(item,true)"
              v-on="on"
            >fas fa-envelope-open</v-icon>
            <v-icon
              v-else
              small
              class="mx-2"
              @click="readItem(item,false)"
              v-on="on"
            >fas fa-envelope</v-icon>
          </template>
          <span>{{$t('tooltip.read',{obj:$tc('label.contact',1)})}}</span>
        </v-tooltip>
      </template>
    </materiel-table>
  </div>
</template>
<script>
import dialogContact from "./component/dialogContact";
import materielTable from "@/materiels/Table";
import { deleteContactsApi, readContactApi } from "@/api/contact";
import { mapGetters } from "vuex";
export default {
  components: { materielTable, dialogContact },
  data() {
    return {
      headers: [
        {
          text: this.$i18n.tc("label.email"),
          align: "left",
          value: "email"
        },
        { text: this.$i18n.tc("label.subject"), value: "subject" },
        { text: this.$i18n.tc("label.created_at"), value: "created_at" },
        { text: this.$i18n.t("_contact.read"), value: "view" },
        {
          text: this.$i18n.tc("label.actions"),
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
      item.view = 1;
      readContactApi(item.id)
        .then(result => {})
        .catch(err => {
          item.view = 0;
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
            text: this.$i18n.t("alert.complete"),
            color: "success"
          });
          this.selected = [];
          this.setSelected([]);
        })
        .catch(error => {
          this.vLoading(false);
          this.snackbar({
            text: this.$i18n.t("alert.failed"),
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
        title: this.$i18n.t("asker.title"),
        message: this.$i18n.t("asker.message", {
          obj: "contact",
          opt: "delete"
        }),
        accepte: this.$i18n.t("qst.accepte"),
        cancel: this.$i18n.t("qst.cancel")
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