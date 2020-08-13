(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{339:function(t,e,i){"use strict";i.r(e);var o=i(327),n=i(5),r=i(19),s=i(21),a=i(74),l=i(238),c=i(228),u=i(237);function d(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p={components:{materielTable:o.a,newRole:c.default,assignPermissions:u.default,pieChart:l.default},data:function(){return{loading:!0,dialogs:{tree:!1,create:!1},headers:[{text:this.$i18n.tc("label.role",2),align:"left",sortable:!1,value:"name"},{text:this.$i18n.tc("label.actions"),value:"actions",sortable:!1}],roles:[],permissions:[],modulePath:"user/privilege/role.js",ItemIndex:-1,item:{id:"",name:""},defaultItem:{id:"",name:""},option:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(n.b)(["dialog","dark"]),{value:function(){return this.dialog.value}}),created:function(){this.initialize()},methods:{initialize:function(){var t=this;Object(a.fetchPermissionsApi)().then((function(e){t.permissions=Object(r.c)(e)})).catch((function(t){return console.log(t)}))},storeRole:function(t){var e=this;this.vLoading(!0),this.open=!1;var i=this.save(t);Object(s.storeRoleApi)(t).then((function(t){e.vLoading(!1),e.snackbar({text:e.$i18n.t("_user_privilege.success_role_store"),color:"success"}),e.getData()[i].id=t.id})).catch((function(t){e.vLoading(!1),e.snackbar({text:e.$i18n.t("alert.failed"),color:"error"}),e.remove(i)}))},deleteRole:function(){var t=this,e=this.getData().indexOf(this.item);this.remove(e),Object(s.deleteRoleApi)(this.item.id).then((function(){t.snackbar({text:t.$i18n.t("alert.complete"),color:"success"}),t.item={id:"",name:""}})).catch((function(e){t.snackbar({text:t.$i18n.t("alert.failed"),color:"error"});t.save(t.item);t.item={id:"",name:""}}))},assignRole:function(t){var e=this,i=this.getData().indexOf(this.item);this.getData()[i].permissions=d(t.map((function(t){return{id:t}}))),this.closeDialog();var o={role_id:this.item.id,permissions_id:t};this.vLoading(!0),Object(a.storePermissionsApi)(o).then((function(){e.vLoading(!1),e.snackbar({text:e.$i18n.t("_user_privilege.success_assign_permissions"),color:"success"}),e.item={id:"",name:""}})).catch((function(t){e.vLoading(!1),e.snackbar({text:e.$i18n.t("alert.failed"),color:"error"}),e.item={id:"",name:""}}))},ShowAsker:function(t,e){this.item=t,this.option=e,this.$store.dispatch("toggleDialog",{message:this.$i18n.t("asker.message",{obj:this.$i18n.tc("label.role",1),opt:this.$i18n.tc("tooltip.".concat(e))}),open:!0,value:!1})},ShowDialogWithItem:function(t,e){this.item=t,this.dialogs[e]=!0},save:function(t){return this.getData().push(t)-1},remove:function(t){return this.getData().splice(t,1)},closeDialog:function(){for(var t in this.dialogs)this.dialogs[t]=!1},getData:function(){return this.$refs.table.getData()}},watch:{value:function(t){t&&("delete"===this.option?this.deleteRole():"assign"===this.option&&this.assignRole())}}},h=i(1),v=Object(h.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("new-role",{attrs:{dark:t.dark,open:t.dialogs.create},on:{create:t.storeRole,close:t.closeDialog}}),t._v(" "),i("assign-permissions",{attrs:{dark:t.dark,open:t.dialogs.tree,item:t.item,selected:t.item&&t.item.permissions&&t.item.permissions.map((function(t){return t.id})),permissions:t.permissions},on:{assing:t.assignRole,close:t.closeDialog}}),t._v(" "),i("v-row",[i("v-col",{attrs:{cols:"12",lg:"7",md:"8",sm:"12"}},[i("materiel-table",{ref:"table",attrs:{headers:t.headers,modulePath:t.modulePath},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v(t._s(t.$t("_user_privilege.title")))]),t._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),i("div",{staticClass:"flex-grow-1"}),t._v(" "),i("v-btn",{staticClass:"mb-2 ",attrs:{color:"info",dark:""},on:{click:function(e){t.dialogs.create=!0}}},[t._v(t._s(t.$t("_user_privilege.create_role")))])],1)]},proxy:!0},{key:"actions",fn:function(e){var o=e.item;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-icon",t._g({staticClass:"mr-2 mx-2",attrs:{small:""},on:{click:function(e){return t.ShowAsker(o,"delete")}}},n),[t._v("fas fa-trash")])]}}],null,!0)},[t._v(" "),i("span",[t._v(t._s(t.$t("tooltip.delete",{obj:t.$tc("label.role",1)})))])]),t._v(" "),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-icon",t._g({staticClass:"mr-2 mx-2",attrs:{small:""},on:{click:function(e){return t.ShowDialogWithItem(o,"tree")}}},n),[t._v("fas fa-edit")])]}}],null,!0)},[t._v(" "),i("span",[t._v(t._s(t.$t("tooltip.assign",{obj:t.$tc("label.permission",1)})))])])]}}])})],1),t._v(" "),i("v-col",{attrs:{cols:"12",lg:"5",md:"4",sm:"12"}},[i("pieChart",{attrs:{dark:t.dark}})],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports}}]);