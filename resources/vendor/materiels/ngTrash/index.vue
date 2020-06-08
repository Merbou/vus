<template>
  <div>
    <ng-table :headers="__headers" :modulePath="modulePath" ref="table" :select="true">
      <template v-slot:top="{selected}">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              color="error"
              class="ml-4 mt-4"
              :disabled="!(selected && selected.length>0)"
              @click="ShowItem(selected,'delete')"
              v-on="on"
              depressed
            >fas fa-trash</v-icon>
          </template>
          <span>delete</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              color="success"
              class="ml-4 mt-4"
              :disabled="!(selected && selected.length>0)"
              @click="ShowItem(selected,'recycle')"
              v-on="on"
              depressed
            >fas fa-recycle</v-icon>
          </template>
          <span>recycle</span>
        </v-tooltip>
      </template>

      <template v-slot:delete="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              class="mr-2 mx-2"
              @click="ShowItem([item],'delete')"
              v-on="on"
            >fas fa-trash</v-icon>
          </template>
          <span>Delete {{moduleName}}</span>
        </v-tooltip>
      </template>
      <template v-slot:recycle="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              class="mr-2 mx-2"
              @click="ShowItem([item],'recycle')"
              v-on="on"
            >fas fa-recycle</v-icon>
          </template>
          <span>Recycle {{moduleName}}</span>
        </v-tooltip>
      </template>
    </ng-table>
  </div>
</template>
<script>
import ngTable from "@/materiels/ngTable";
import { mapGetters } from "vuex";
export default {
  name: "ngTrash",
  components: { ngTable },
  props: {
    headers: {
      type: Array,
      required: true
    },
    modulePath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // __headers: [],
      item: {},
      option: "",
      apiFunctions: {},
      moduleName: "",
      selected: []
    };
  },
  mounted() {
    this.renderApiFunctions();
    this.initDialog();
  },
  computed: {
    ...mapGetters(["dialog"]),
    restraint() {
      return this.dialog.value;
    },
    __headers() {
      const optionsArray = [
        { text: "recycle", value: "recycle" },
        { text: "delete", value: "delete", sortable: false }
      ];
      return [...this.headers, ...optionsArray];
    }
  },
  methods: {
    async renderApiFunctions() {
      this.moduleName = getModule(this.modulePath);

      //import dynamically api Functions
      //useing asyn function import
      //save api function
      this.apiFunctions = await import("@/api/" + this.modulePath);
    },
    ShowItem(selected, option) {
      this.selected = selected;
      this.option = option;
      this.ShowItemDialog();
    },
    ShowItemDialog() {
      this.$store.dispatch("toggleDialog", {
        message: "Are you sure to " + this.option + " this " + this.moduleName,
        open: true,
        value: false
      });
    },
    handleItems(callbackApi) {
      this.vLoading(true);

      var ids = this.selected.map(item => item.id);
      this.Removeitems();
      callbackApi(ids)
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
        title: "Are you sure !",
        accepte: "Yes",
        cancel: "Cancel"
      });
    }
  },
  watch: {
    restraint(val) {
      const $callback = this.apiFunctions[
        this.option + this.moduleName + "s" + "Api"
      ];
      if (val) this.handleItems($callback);
    }
  }
};

function getModule(modulePath) {
  let modulePiece = modulePath.split(new RegExp("\\/|\\."));
  let modu = modulePiece[modulePiece.length - 2];
  return upperFirstChar(modu);
}
function upperFirstChar(str) {
  str = str.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
}
</script>
