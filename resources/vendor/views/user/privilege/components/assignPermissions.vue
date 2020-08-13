<template>
  <v-dialog :value="open" scrollable max-width="300px" @click:outside="close">
    <v-card>
      <v-card-title>{{$t('$assign_permission.title')}}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="card-permission">
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
        <v-btn :color="dark?'light':'secondary'" text @click="close()">{{$t('qst.cancel')}}</v-btn>
        <v-btn dark color="info" @click="assing()">{{$t('$assign_permission.submit')}}</v-btn>
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
    },
    dark: {
      type: Boolean,
      default: false
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

<style scoped>
.card-permission{
height: 300px;
}
</style>