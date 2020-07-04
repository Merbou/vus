<template>
  <v-dialog v-model="open" width="300" @click:outside="close">
    <v-card>
      <v-card-title>{{$t('_user_table.select_roles')}}</v-card-title>
      <v-card-text>
        <v-select
          :key="item.id"
          v-model="selected"
          :items="roles"
          item-text="name"
          item-value="name"
          outlined
          dense
          multiple
          @change="storeRole"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item.name }}</span>
            </v-chip>
            <span
              v-if="index === 1"
              class="grey--text caption"
            >(+{{ selected.length - 1 }} {{$t('_user_table.others')}} )</span>
          </template>
        </v-select>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "assignRole",
  props: {
    open: {
      type: Boolean,
      default: false
    },
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
      const data = { user_id: this.item.id, roles: this.selected };
      this.$emit("storeRole", data);
    },
    close() {
      this.$emit("close");
    }
  },
  watch: {
    item() {
      this.selected =
        this.item && this.item.roles && this.item.roles.map(e => e.name);
    }
  }
};
</script>
