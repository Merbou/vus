<template>
  <v-dialog v-model="open" scrollable max-width="300px" @click:outside="close">
    <v-card>
      <v-card-title>select</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-treeview
          shaped
          selectable
          dense
          selected-color="tail"
          v-model="permissionsForm"
          :items="permissions"
        ></v-treeview>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="close()">cancel</v-btn>
        <v-btn color="blue darken-1" text @click="assing()">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "assignPermissions",
  props: {
    open: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => ({
        id: "",
        name: ""
      })
    },
    permissions: {
      type: Array,
      default: []
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      $item: {
        id: "",
        name: ""
      },
      permissionsForm: []
    };
  },
  methods: {
    assing() {
      this.$emit("assing", this.permissionsForm);
    },
    close() {
      this.$emit("close");
    }
  },
  watch: {
    selected(val) {
      this.permissionsForm = [...val];
    }
  }
};
</script>

<style>
</style>