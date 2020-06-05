<template>
  <v-select
    v-model="selected"
    :items="roles"
    item-value="id"
    item-text="name"
    attach
    chips
    outlined
    dense
    multiple
    @change="storeRole"
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index === 0">
        <span>{{ item.name }}</span>
      </v-chip>
      <span v-if="index === 1" class="grey--text caption">(+{{ selected.length - 1 }} others)</span>
    </template>
  </v-select>
</template>

<script>
export default {
  name: "assignRole",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    roles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: []
    };
  },
  methods: {
    storeRole() {
      const data = { item: this.item, roles: this.selected };
      this.$emit("storeRole", data);
    }
  },
  watch: {
    item(val) {
      this.selected = [...val.roles.map(e => e.id)];
      console.log(this.selected);
    }
  }
};
</script>
