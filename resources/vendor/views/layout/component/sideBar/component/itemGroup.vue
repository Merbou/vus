<template>
  <div>
    <v-list-group v-if="item.children&&item.children.length>1">
      <template v-slot:activator>
        <item-icon :icon="item.icon" />
        <item-title :title="item.name" />
      </template>

      <template v-for="(child, i) in item.children">
        <v-list-group :key="i" :sub-group="true" v-if="child.children&&child.children.length">
          <template v-slot:activator>
            <item-icon :icon="child.icon" />
            <item-title :title="child.name" />
          </template>

          <vs-item-group
            v-if="child.children"
            :key="child.name"
            :item="withParentPath(child.path,child.children)"
          />
        </v-list-group>
        <v-list-item v-else :key="i" @click="to(item.path+'/'+child.path)">
          <item-icon :icon="child.icon" />
          <item-title :title="child.name" />
        </v-list-item>
      </template>
    </v-list-group>
    <v-list-item
      v-else-if="item.children&&item.children.length==1"
      @click="to(item.children[0].path)"
    >
      <item-icon :icon="item.children[0].icon" />
      <item-title :title="item.children[0].name" />
    </v-list-item>
    <v-list-item v-else @click="to(item.path)">
      <item-icon :icon="item.icon" />
      <item-title :title="item.name" />
    </v-list-item>
  </div>
</template>

<script>
import vsItemGroup from "./itemGroup";
import { itemTitle, itemIcon } from "./item/index";

export default {
  name: "itemGroup",
  components: { itemTitle, itemIcon, vsItemGroup },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    withParentPath(parentPath, childs) {
      return childs.map((e) => parentPath.path + "/" + e.path);
    },
    to(path) {
      this.$router.push({ path }).catch((err) => {});
    },
  },
};
</script>

<style>
.v-list-group.v-list-group--active.v-list-group--sub-group.primary--text,
.v-list-group__header.v-list-item.v-list-item--active.v-list-item--link.theme--dark {
  color: #fff !important;
}
i.v-icon.notranslate.fas.fa-chevron-down.theme--dark {
  font-size: 15px;
}
</style>