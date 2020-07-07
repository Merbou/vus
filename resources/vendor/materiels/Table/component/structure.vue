<template>
  <v-layout>
    <v-flex xl12 sm12 xs12>
      <v-card :loading="loading">
        <v-card-title>
          <v-spacer></v-spacer>

          <v-text-field v-model="search" :label="$t('label.search')" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="data"
          :items-per-page="50"
          class="elevation-1"
          :page.sync="pagination.page"
          :hide-default-footer="true"
          :search="search"
          :show-select="select"
          dense
        >
          <template v-for="header in headers"  v-slot:[`header.${header.value}`]="table">
            {{ $tc(`label.${table.header.value}`) }}
          </template>
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
              v-model="pagination.page"
              :length="pagination.last_page"
              @input="onPageChange(pagination.page)"
              v-if="pagination.page<pagination.last_page"
              color="info"
            ></v-pagination>
          </v-container>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from "moment";
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
    }
  },
  data() {
    return {
      pagination: {
        Backpage: 1,
        page: 1,
        perPage: 0,
        itemsPerPage: 50,
        totla: 0
      },
      search: "",
      data: [],
      selected: []
    };
  },
  watch: {
    response(val) {
      this.initData(val);
    }
  },
  methods: {
    onPageChange(page) {
      if (page <= this.pagination.last_page) this.$emit("renderData", page);
    },

    initData(Response) {
      if (Response.current_page <= Response.last_page) {
        let { data, ...res } = Response;

        this.pagination = Object.assign(this.pagination, res);
        this.data = this.data = data;
      }
    },
    pareDate(date) {
      return moment(date).format("YYYY MM DD LT");
    },
    itemCase(value) {
      return `item.${value}`;
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