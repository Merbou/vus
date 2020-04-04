<template>
  <v-layout>
    <v-flex xl12 sm12 xs12>
      <v-card :loading="loading">
        <v-card-title>
          <v-slider
            class="mt-5 pt-5"
            v-model="pagination.itemsPerPage"
            :value="pagination.itemsPerPage"
            color="success"
            label="items Per Page"
            min="5"
            step="5"
            max="100"
            thumb-label
          ></v-slider>

          <v-spacer></v-spacer>

          <v-text-field v-model="search" label="search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="data"
          :items-per-page="pagination.itemsPerPage"
          class="elevation-1"
          @page-count="pagination.pageCount = $event"
          :page.sync="pagination.page"
          hide-default-footer
          :search="search"
          :show-select="select"
        >
          <template v-for="header in headers" v-slot:[itemCase(header.value)]="{ item }">
            <slot :item="item" :name="header.value">{{item[header.value]}}</slot>
          </template>
          <template  v-slot:top>
            <slot :selected="selected" name="top"></slot>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-container>
            <v-pagination
              v-model="pagination.page"
              :length="pagination.pageCount"
              @input="onPageChange"
            ></v-pagination>
          </v-container>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
    }
  },
  data() {
    return {
      pagination: {
        Backpage: 1,
        page: 1,
        pageCount: 0,
        itemsPerPage: 20
      },
      search: "",
      editedIndex: -1,
      data: [],
      selected: [],
    };
  },
  watch: {
    response(val) {
      this.initData(val);
    }
  },
  methods: {
    onPageChange() {
      let Varientpage = parseInt(
        this.data.length / this.pagination.itemsPerPage
      );

      if (this.pagination.page >= Varientpage) {
        this.pagination.Backpage++;
        this.$emit("renderData", this.pagination.Backpage);
      }
    },

    initData(Response) {
      if (Response.current_page <= Response.last_page) {
        var countItem = this.data.length;
        var table = this.data.concat(Response.data);
        this.data = table;
        this.pagination.page =
          Response.current_page +
          parseInt(countItem / this.pagination.itemsPerPage);
        this.pagination.pageCount =
          Response.last_page *
          parseInt(countItem / this.pagination.itemsPerPage);
      }
    },
    itemCase(value) {
      return `item.${value}`;
    },
    getData() {
      return this.data;
    },
    setSelected($array) {
      this.selected=$array;
    }
  }
};
</script>