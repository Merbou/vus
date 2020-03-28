<template>
  <materiel-table :headers="headers" :modulePath="modulePath">
    <template v-slot:item.is_active>Hello World</template>
  </materiel-table>
</template>    
<script>
import materielTable from "../materiels";
export default {
  components: { materielTable },
  data() {
    return {
      headers: [
        {
          text: "email",
          align: "left",
          value: "email"
        },
        { text: "name", value: "name" },
        { text: "creationDate", value: "created_at" },
        {
          text: "accountVerified",
          value: "email_verified_at"
        },
        { text: "blocked", value: "is_active" },
        {
          text: "actions",
          value: "action",
          sortable: false
        }
      ],
      modulePath: "user/account.js"
    };
  }
};
</script>

<style>
</style>