<template>
  <div>
    <materiel-table
      :headers="__headers"
      :modulePath="modulePath"
      ref="table"
      @globalSearch="globalSearchModel"
      :searched="res_server_side"
      :select="true"
    >
      <template v-slot:top="{selected}">
        <v-tooltip top v-can="'@delete from trash'">
          <template v-slot:activator="{ on }">
            <v-icon
              color="error"
              class="mx-4 mt-4"
              v-can="'@delete from trash'"
              :disabled="!(selected && selected.length>0)"
              @click="ShowItem(selected,'delete')"
              v-on="on"
              depressed
            >fas fa-trash</v-icon>
          </template>
          <span>{{$tc('tooltip.delete')}}</span>
        </v-tooltip>
        <v-tooltip top v-can="'@recycle from trash'">
          <template v-slot:activator="{ on }">
            <v-icon
              color="success"
              class="mx-4 mt-4"
              v-can="'@recycle from trash'"
              :disabled="!(selected && selected.length>0)"
              @click="ShowItem(selected,'recycle')"
              v-on="on"
              depressed
            >fas fa-recycle</v-icon>
          </template>
          <span>{{$tc('tooltip.recycle')}}</span>
        </v-tooltip>
      </template>

      <template v-slot:delete="{ item }" v-can="'@delete from trash'">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              class="mx-2 mx-2"
              @click="ShowItem([item],'delete')"
              v-on="on"
            >fas fa-trash</v-icon>
          </template>
          <span>{{$t('tooltip.delete',{obj:$tc(`label.${moduleName}`,1)})}}</span>
        </v-tooltip>
      </template>
      <template v-slot:recycle="{ item }" v-can="'@recycle from trash'">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              class="mx-2 mx-2"
              @click="ShowItem([item],'recycle')"
              v-on="on"
            >fas fa-recycle</v-icon>
          </template>
          <span>{{$t('tooltip.recycle',{obj:$tc(`label.${moduleName}`,1)})}}</span>
        </v-tooltip>
      </template>
    </materiel-table>
  </div>
</template>
<script>
import materielTable from "@/materiels/Table";
import { mapGetters } from "vuex";
export default {
  name: "materielTrash",
  components: { materielTable },
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
      apiSearchs: {},
      moduleName: "",
      selected: [],
      res_server_side: {}
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
        { text: this.$i18n.tc("tooltip.recycle"), value: "recycle" },
        {
          text: this.$i18n.tc("tooltip.delete"),
          value: "delete",
          sortable: false
        }
      ];
      return [...this.headers, ...optionsArray];
    }
  },
  methods: {
    async renderApiFunctions() {
      this.moduleName = getModule(this.modulePath).toLowerCase();

      //import dynamically api Functions
      //useing asyn function import
      //save api function
      this.apiFunctions = await import("@/api/" + this.modulePath);
      this.apiSearchs = await import("@/api/" + this.moduleName + "/search");
    },
    ShowItem(selected, option) {
      this.selected = selected;
      this.option = option;
      this.ShowItemDialog();
    },
    ShowItemDialog() {
      this.$store.dispatch("toggleDialog", {
        message: this.$i18n.t("asker.message", {
          obj: this.$i18n.tc(`label.${this.moduleName}`, 1),
          opt: this.$i18n.tc(`tooltip.${this.option}`)
        }),
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
    globalSearchModel({ query, page }) {
      let m_query = {};
      m_query[`${this.moduleName[0]}_query`] = query;
      const globalSearchModelApi = this.apiSearchs[
        `trashGlobalSearch${this.moduleName.replace(/^\w/, c =>
          c.toUpperCase()
        )}Api`
      ];
      globalSearchModelApi(m_query, page)
        .then(data => {
          this.res_server_side = data[`${this.moduleName}s`];
        })
        .catch(err => {
          console.log(err);
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
        accepte: this.$i18n.t("qst.accepte"),
        cancel: this.$i18n.t("qst.cancel")
      });
    }
  },
  watch: {
    restraint(val) {
      const $callback = this.apiFunctions[
        this.option +
          this.moduleName.replace(/^\w/, c => c.toUpperCase()) +
          "s" +
          "Api"
      ];
      if (val) this.handleItems($callback);
    }
  }
};

function getModule(modulePath) {
  let modulePiece = modulePath.split(new RegExp("\\/|\\."));
  let modu = modulePiece[modulePiece.length - 2];
  return modu.replace(/^\w/, c => c.toUpperCase());
}
</script>
