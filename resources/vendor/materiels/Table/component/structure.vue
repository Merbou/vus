<template>
  <v-layout>
    <v-flex xl12 sm12 xs12>
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-container>
            <v-row class="lg-12">
              <v-container>
                <v-text-field
                  v-model="search"
                  @input="serverGlobalSearch"
                  :label="$t('label.search')"
                  single-line
                  hide-details
                ></v-text-field>
              </v-container>
            </v-row>
            <v-row class="lg-12">
              <v-container>
                <v-pagination
                  v-if="pagination.last_page>1"
                  v-model="pagination.current_page"
                  :length="pagination.last_page"
                  @input="onPageChange"
                  color="info"
                  total-visible="7"
                  circle
                ></v-pagination>
              </v-container>
            </v-row>
          </v-container>
        </v-card-title>
        <v-data-table
          :loading="loading||loading_data"
          v-model="selected"
          :headers="headers"
          :items="data"
          :items-per-page="50"
          class="elevation-1"
          :page.sync="pagination.current_page"
          :hide-default-footer="true"
          :show-select="select"
          ref="dataTable"
          dense
        >
          <template
            v-for="header in headers"
            v-slot:[getHead(header)]="table"
          >{{ $tc(`label.${table.header.value}`) }}</template>
          <template v-for="header in headers" v-slot:[itemCase(header.value)]="{ item }">
            <slot
              v-if="header.value!='created_at'"
              :item="item"
              :name="header.value"
            >{{item[header.value]}}</slot>

            <slot v-else :item="item" :name="header.value">{{pareDate(item[header.value])}}</slot>
          </template>
          <template v-slot:top>
            <slot :selected="selected" name="top"></slot>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-container>
            <v-pagination
              v-if="pagination.last_page>1"
              :length="pagination.last_page"
              @input="onPageChange"
              v-model="pagination.current_page"
              color="info"
              total-visible="7"
              circle
            ></v-pagination>
          </v-container>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from "moment";
import { debounce } from "lodash";
import { numeric } from "vee-validate/dist/rules";

export default {
  name: "structure",
  props: {
    headers: {
      type: Array,
      required: true
    },
    response: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    select: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: true
    },
    searched: {
      type: Object
    }
  },
  data() {
    return {
      pagination: {
        current_page: 5,
        perPage: 0,
        itemsPerPage: 20
      },
      pagination_cache: {
        current_page: 5,
        perPage: 0,
        itemsPerPage: 20
      },
      search: "",
      data: [],
      data_cache: [],
      selected: [],
      loading_data: false
    };
  },
  watch: {
    response(val) {
      this.initData(val);
    },
    searched(response) {
      if (!response) return;
      let { data, ...res } = response;

      this.pagination = Object.assign(this.pagination, res);

      this.data = data;
      this.vLoading(false);
      this.loading_data = false;
    }
  },
  created() {
    this.debouncedServerGlobalSearch = debounce(this.globalSearch, 500);
  },
  methods: {
    onPageChange(page) {
      this.vLoading(true);
      if (page <= this.pagination.last_page)
        if (this.search) this.serverGlobalSearch(this.search, page);
        else this.$emit("renderData", page);
    },

    initData(Response) {
      let { data, ...res } = Response;
      this.pagination = Object.assign(this.pagination, res);
      this.data = data;

      //save data,reuse the whene search is empty
      this.pagination_cache = Object.assign(this.pagination, res);
      this.data_cache = [...this.data];
    },
    serverGlobalSearch(query, page = 1) {
      if (!query || query.length < 2) {
        this.pagination = { ...this.pagination_cache };
        this.data = [...this.data_cache];
        return;
      }
      this.loading_data = true;

      this.debouncedServerGlobalSearch({ query, page });
    },
    globalSearch(data) {
      this.$emit("globalSearch", data);
    },
    marge(data) {
      return (
        data && data.filter((e, i) => data.map(e => e.id).indexOf(e.id) === i)
      );
    },
    pareDate(date) {
      return moment(date).format("YYYY MM DD LT");
    },
    itemCase(value) {
      return `item.${value}`;
    },
    getHead(header) {
      return `header.${header.value}`;
    },
    getData() {
      return this.data;
    },
    setSelected($array) {
      this.selected = $array;
    }
  }
};
</script>
<style  scoped>
ul.v-pagination.theme--dark {
  zoom: 0.8;
}
</style>