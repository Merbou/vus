(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materiels_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/materiels/Table */ "./resources/vendor/materiels/Table/index.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/permission */ "./resources/vendor/utils/permission.js");
/* harmony import */ var _api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/user/privilege/role.js */ "./resources/vendor/api/user/privilege/role.js");
/* harmony import */ var _api_user_privilege_permission_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/user/privilege/permission.js */ "./resources/vendor/api/user/privilege/permission.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./resources/vendor/views/user/privilege/components/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    materielTable: _materiels_Table__WEBPACK_IMPORTED_MODULE_0__["default"],
    newRole: _components__WEBPACK_IMPORTED_MODULE_5__["newRole"],
    assignPermissions: _components__WEBPACK_IMPORTED_MODULE_5__["assignPermissions"],
    pieChart: _components__WEBPACK_IMPORTED_MODULE_5__["pieChart"]
  },
  data: function data() {
    return {
      loading: true,
      dialogs: {
        tree: false,
        create: false
      },
      headers: [{
        text: this.$i18n.tc("label.role", 2),
        align: "left",
        sortable: false,
        value: "name"
      }, {
        text: this.$i18n.tc("label.actions"),
        value: "actions",
        sortable: false
      }],
      roles: [],
      permissions: [],
      modulePath: "user/privilege/role.js",
      ItemIndex: -1,
      item: {
        id: "",
        name: ""
      },
      defaultItem: {
        id: "",
        name: ""
      },
      option: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["dialog", "dark"]), {
    value: function value() {
      return this.dialog.value;
    }
  }),
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      Object(_api_user_privilege_permission_js__WEBPACK_IMPORTED_MODULE_4__["fetchPermissionsApi"])().then(function (_res) {
        _this.permissions = Object(_utils_permission__WEBPACK_IMPORTED_MODULE_2__["toTree"])(_res);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    storeRole: function storeRole(role) {
      var _this2 = this;

      this.vLoading(true);
      this.open = false;
      var index = this.save(role);
      Object(_api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_3__["storeRoleApi"])(role).then(function (res) {
        _this2.vLoading(false);

        _this2.snackbar({
          text: _this2.$i18n.t("_user_privilege.success_role_store"),
          color: "success"
        });

        _this2.getData()[index].id = res.id;
      })["catch"](function (err) {
        _this2.vLoading(false);

        _this2.snackbar({
          text: _this2.$i18n.t("alert.failed"),
          color: "error"
        });

        _this2.remove(index);
      });
    },
    deleteRole: function deleteRole() {
      var _this3 = this;

      var index = this.getData().indexOf(this.item);
      this.remove(index);
      Object(_api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_3__["deleteRoleApi"])(this.item.id).then(function () {
        _this3.snackbar({
          text: _this3.$i18n.t("alert.complete"),
          color: "success"
        });

        _this3.item = {
          id: "",
          name: ""
        };
      })["catch"](function (err) {
        _this3.snackbar({
          text: _this3.$i18n.t("alert.failed"),
          color: "error"
        });

        var index = _this3.save(_this3.item);

        _this3.item = {
          id: "",
          name: ""
        };
      });
    },
    assignRole: function assignRole(permissions) {
      var _this4 = this;

      var index = this.getData().indexOf(this.item);
      this.getData()[index].permissions = _toConsumableArray(permissions.map(function (e) {
        return {
          id: e
        };
      }));
      this.closeDialog();
      var data = {
        role_id: this.item.id,
        permissions_id: permissions
      };
      this.vLoading(true);
      Object(_api_user_privilege_permission_js__WEBPACK_IMPORTED_MODULE_4__["storePermissionsApi"])(data).then(function () {
        _this4.vLoading(false);

        _this4.snackbar({
          text: _this4.$i18n.t("_user_privilege.success_assign_permissions"),
          color: "success"
        });

        _this4.item = {
          id: "",
          name: ""
        };
      })["catch"](function (err) {
        _this4.vLoading(false);

        _this4.snackbar({
          text: _this4.$i18n.t("alert.failed"),
          color: "error"
        });

        _this4.item = {
          id: "",
          name: ""
        };
      });
    },
    ShowAsker: function ShowAsker(item, option) {
      this.item = item;
      this.option = option;
      this.$store.dispatch("toggleDialog", {
        message: this.$i18n.t("asker.message", {
          obj: this.$i18n.tc("label.role", 1),
          opt: this.$i18n.tc("tooltip.".concat(option))
        }),
        open: true,
        value: false
      });
    },
    ShowDialogWithItem: function ShowDialogWithItem(item, prop) {
      this.item = item;
      this.dialogs[prop] = true;
    },
    save: function save(role) {
      return this.getData().push(role) - 1;
    },
    remove: function remove(index) {
      return this.getData().splice(index, 1);
    },
    closeDialog: function closeDialog() {
      for (var key in this.dialogs) {
        this.dialogs[key] = false;
      }
    },
    getData: function getData() {
      return this.$refs.table.getData();
    }
  },
  watch: {
    value: function value(val) {
      if (val) {
        if (this.option === "delete") this.deleteRole();else if (this.option === "assign") this.assignRole();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/index.vue?vue&type=template&id=1ca98960&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/index.vue?vue&type=template&id=1ca98960& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("new-role", {
        attrs: { dark: _vm.dark, open: _vm.dialogs.create },
        on: { create: _vm.storeRole, close: _vm.closeDialog }
      }),
      _vm._v(" "),
      _c("assign-permissions", {
        attrs: {
          dark: _vm.dark,
          open: _vm.dialogs.tree,
          item: _vm.item,
          selected:
            _vm.item &&
            _vm.item.permissions &&
            _vm.item.permissions.map(function(e) {
              return e.id
            }),
          permissions: _vm.permissions
        },
        on: { assing: _vm.assignRole, close: _vm.closeDialog }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "7", md: "8", sm: "12" } },
            [
              _c("materiel-table", {
                ref: "table",
                attrs: { headers: _vm.headers, modulePath: _vm.modulePath },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c(
                          "v-toolbar",
                          { attrs: { flat: "" } },
                          [
                            _c("v-toolbar-title", [
                              _vm._v(_vm._s(_vm.$t("_user_privilege.title")))
                            ]),
                            _vm._v(" "),
                            _c("v-divider", {
                              staticClass: "mx-4",
                              attrs: { inset: "", vertical: "" }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex-grow-1" }),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "mb-2 ",
                                attrs: { color: "info", dark: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialogs["create"] = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("_user_privilege.create_role"))
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-tooltip",
                          {
                            attrs: { bottom: "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          {
                                            staticClass: "mr-2 mx-2",
                                            attrs: { small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.ShowAsker(
                                                  item,
                                                  "delete"
                                                )
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("fas fa-trash")]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          },
                          [
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("tooltip.delete", {
                                    obj: _vm.$tc("label.role", 1)
                                  })
                                )
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tooltip",
                          {
                            attrs: { bottom: "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          {
                                            staticClass: "mr-2 mx-2",
                                            attrs: { small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.ShowDialogWithItem(
                                                  item,
                                                  "tree"
                                                )
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("fas fa-edit")]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          },
                          [
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("tooltip.assign", {
                                    obj: _vm.$tc("label.permission", 1)
                                  })
                                )
                              )
                            ])
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "5", md: "4", sm: "12" } },
            [_c("pieChart", { attrs: { dark: _vm.dark } })],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/index.js":
/*!*******************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/index.js ***!
  \*******************************************************************/
/*! exports provided: pieChart, newRole, assignPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_pie_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/pie.vue */ "./resources/vendor/views/user/privilege/components/charts/pie.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pieChart", function() { return _charts_pie_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _newRole_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newRole.vue */ "./resources/vendor/views/user/privilege/components/newRole.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newRole", function() { return _newRole_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _assignPermissions_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignPermissions.vue */ "./resources/vendor/views/user/privilege/components/assignPermissions.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignPermissions", function() { return _assignPermissions_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./resources/vendor/views/user/privilege/index.vue":
/*!*********************************************************!*\
  !*** ./resources/vendor/views/user/privilege/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1ca98960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1ca98960& */ "./resources/vendor/views/user/privilege/index.vue?vue&type=template&id=1ca98960&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/views/user/privilege/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1ca98960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1ca98960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/user/privilege/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/user/privilege/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/user/privilege/index.vue?vue&type=template&id=1ca98960&":
/*!****************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/index.vue?vue&type=template&id=1ca98960& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1ca98960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1ca98960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/index.vue?vue&type=template&id=1ca98960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1ca98960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1ca98960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);