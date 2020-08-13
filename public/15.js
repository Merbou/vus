(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{338:function(e,t,a){"use strict";a.r(t);var s=a(327),n=a(71),r=a(16),l=a(236),i=a(21);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c={components:{materielTable:s.a,assignRole:l.default},data:function(){return{headers:[{text:this.$i18n.tc("label.email"),align:"left",value:"email"},{text:this.$i18n.tc("label.username"),value:"username"},{text:this.$i18n.tc("label.fullname"),value:"fullname"},{text:this.$i18n.tc("label.sex",0),value:"sex"},{text:this.$i18n.tc("label.created_at"),value:"created_at"},{text:this.$i18n.tc("label.state"),value:"state"},{text:this.$i18n.tc("label.role",2),value:"role",sortable:!1}],modulePath:"user/account.js",roles:[],item:{id:null,roles:[]},dialog:!1,res_server_side:{}}},mounted:function(){this.fetchOnlyRoles()},methods:{fetchOnlyRoles:function(){var e=this;Object(i.fetchOnlyRolesApi)().then((function(t){e.roles=t})).catch((function(e){console.log(e)}))},assignRole:function(e){var t=this,a=this.getData().indexOf(this.item),s=o(this.getData()[a].roles);this.getData()[a].roles=e.roles,Object(i.assignRoleApi)(e).then((function(){t.snackbar({text:t.$i18n.t("_user_table.success_assign_role"),color:"success"})})).catch((function(e){t.snackbar({text:t.$i18n.t("alert.failed"),color:"error"}),t.getData()[a].roles=s}))},blockItem:function(e){var t=this,a=this.getData().indexOf(e),s=this.getData()[a].is_active;s=this.getData()[a].is_active=!s,Object(n.blockUserApi)(this.getData()[a].id).then((function(e){t.snackbar({text:t.$i18n.t("alert.complete"),color:"success"})})).catch((function(e){t.snackbar({text:t.$i18n.t("alert.failed"),color:"error"}),t.getData()[a].is_active=!s}))},globalSearchUser:function(e){var t=this,a=e.query,s=e.page;Object(r.globalSearchUserApi)({u_query:a},s).then((function(e){var a=e.users;t.res_server_side=a})).catch((function(e){console.log(e)}))},openDialog:function(e){this.item=e,this.dialog=!0},closeDialog:function(){this.dialog=!1},getData:function(){return this.$refs.table.getData()}}},u=a(1),v=Object(u.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("assign-role",{directives:[{name:"can",rawName:"v-can",value:"@assign role",expression:"'@assign role'"}],attrs:{item:e.item,roles:e.roles,open:e.dialog},on:{storeRole:e.assignRole,close:e.closeDialog}}),e._v(" "),a("materiel-table",{ref:"table",attrs:{headers:e.headers,modulePath:e.modulePath,searched:e.res_server_side},on:{globalSearch:e.globalSearchUser},scopedSlots:e._u([{key:"state",fn:function(t){var s=t.item;return[a("div",{staticClass:"d-flex flex-row justify-space-between"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[s.email_verified_at?a("v-icon",e._g({staticClass:"state",attrs:{color:"success",small:""}},n),[e._v("fas fa-user-check")]):a("v-icon",e._g({staticClass:"state",attrs:{small:"",color:"red"}},n),[e._v("fas fa-user-times")])]}}],null,!0)},[e._v(" "),s.email_verified_at?a("span",[e._v(e._s(e.$t("_user_table.verified")))]):a("span",[e._v(e._s(e.$t("_user_table.not_verified")))])]),e._v(" "),a("v-tooltip",{directives:[{name:"can",rawName:"v-can",value:"@block user",expression:"'@block user'"}],attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[s.is_active?a("v-chip",e._g({directives:[{name:"can",rawName:"v-can",value:"@block user",expression:"'@block user'"}],staticClass:"state",attrs:{"x-small":"",color:"success",dark:""},on:{click:function(t){return e.blockItem(s)}}},n),[e._v(e._s(e.$t("qst.no")))]):a("v-chip",e._g({directives:[{name:"can",rawName:"v-can",value:"@block user",expression:"'@block user'"}],staticClass:"state",attrs:{color:"error","x-small":"",dark:""},on:{click:function(t){return e.blockItem(s)}}},n),[e._v(e._s(e.$t("qst.yes")))])]}}],null,!0)},[e._v(" "),a("span",[e._v(e._s(e.$tc("tooltip.block",1)))])])],1)]}},{key:"fullname",fn:function(t){var a=t.item;return[e._v(e._s(a.lastname)+" "+e._s(a.firstname))]}},{key:"role",fn:function(t){var s=t.item;return[a("v-icon",{key:s.id,attrs:{small:""},on:{click:function(t){return e.openDialog(s)}}},[e._v("fas fa-edit")])]}},{key:"sex",fn:function(t){var s=t.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[s.sex?a("v-icon",e._g({staticClass:"my-2"},n),[e._v("fas fa-male")]):a("v-icon",e._g({staticClass:"my-2"},n),[e._v("fas fa-female")])]}}],null,!0)},[e._v(" "),s.sex?a("span",[e._v(e._s(e.$tc("label.sex",1)))]):a("span",[e._v(e._s(e.$tc("label.sex",2)))])])]}}])})],1)}),[],!1,null,null,null);t.default=v.exports}}]);