(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/table.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/account/table.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _materiels_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/materiels/Table */ "./resources/vendor/materiels/Table/index.vue");
/* harmony import */ var _api_user_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/user/account */ "./resources/vendor/api/user/account.js");
/* harmony import */ var _api_user_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/user/search */ "./resources/vendor/api/user/search.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./resources/vendor/views/user/account/components/index.js");
/* harmony import */ var _api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/user/privilege/role.js */ "./resources/vendor/api/user/privilege/role.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    assignRole: _components__WEBPACK_IMPORTED_MODULE_3__["assignRole"]
  },
  data: function data() {
    return {
      headers: [{
        text: this.$i18n.tc("label.email"),
        align: "left",
        value: "email"
      }, {
        text: this.$i18n.tc("label.username"),
        value: "username"
      }, {
        text: this.$i18n.tc("label.fullname"),
        value: "fullname"
      }, {
        text: this.$i18n.tc("label.sex", 0),
        value: "sex"
      }, {
        text: this.$i18n.tc("label.created_at"),
        value: "created_at"
      }, {
        text: this.$i18n.tc("label.state"),
        value: "state"
      }, {
        text: this.$i18n.tc("label.role", 2),
        value: "role",
        sortable: false
      }],
      modulePath: "user/account.js",
      roles: [],
      item: {
        id: null,
        roles: []
      },
      dialog: false,
      res_server_side: {}
    };
  },
  mounted: function mounted() {
    this.fetchOnlyRoles();
  },
  methods: {
    fetchOnlyRoles: function fetchOnlyRoles() {
      var _this = this;

      Object(_api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_4__["fetchOnlyRolesApi"])().then(function (res) {
        _this.roles = res;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    assignRole: function assignRole(data) {
      var _this2 = this;

      var index = this.getData().indexOf(this.item);

      var roles = _toConsumableArray(this.getData()[index].roles);

      this.getData()[index].roles = data.roles;
      Object(_api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_4__["assignRoleApi"])(data).then(function () {
        _this2.snackbar({
          text: _this2.$i18n.t("_user_table.success_assign_role"),
          color: "success"
        });
      })["catch"](function (err) {
        _this2.snackbar({
          text: _this2.$i18n.t("alert.failed"),
          color: "error"
        });

        _this2.getData()[index].roles = roles;
      });
    },
    blockItem: function blockItem(item) {
      var _this3 = this;

      var editedIndex = this.getData().indexOf(item);
      var is_active = this.getData()[editedIndex].is_active;
      is_active = this.getData()[editedIndex].is_active = !is_active;
      Object(_api_user_account__WEBPACK_IMPORTED_MODULE_1__["blockUserApi"])(this.getData()[editedIndex].id).then(function (Response) {
        _this3.snackbar({
          text: _this3.$i18n.t("alert.complete"),
          color: "success"
        });
      })["catch"](function (error) {
        _this3.snackbar({
          text: _this3.$i18n.t("alert.failed"),
          color: "error"
        });

        _this3.getData()[editedIndex].is_active = !is_active;
      });
    },
    globalSearchUser: function globalSearchUser(_ref) {
      var _this4 = this;

      var query = _ref.query,
          page = _ref.page;
      Object(_api_user_search__WEBPACK_IMPORTED_MODULE_2__["globalSearchUserApi"])({
        u_query: query
      }, page).then(function (_ref2) {
        var users = _ref2.users;
        _this4.res_server_side = users;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    openDialog: function openDialog(item) {
      this.item = item;
      this.dialog = true;
    },
    closeDialog: function closeDialog() {
      this.dialog = false;
    },
    getData: function getData() {
      return this.$refs.table.getData();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/table.vue?vue&type=template&id=ed168c70&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/account/table.vue?vue&type=template&id=ed168c70& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("assign-role", {
        directives: [
          {
            name: "can",
            rawName: "v-can",
            value: "@assign role",
            expression: "'@assign role'"
          }
        ],
        attrs: { item: _vm.item, roles: _vm.roles, open: _vm.dialog },
        on: { storeRole: _vm.assignRole, close: _vm.closeDialog }
      }),
      _vm._v(" "),
      _c("materiel-table", {
        ref: "table",
        attrs: {
          headers: _vm.headers,
          modulePath: _vm.modulePath,
          searched: _vm.res_server_side
        },
        on: { globalSearch: _vm.globalSearchUser },
        scopedSlots: _vm._u([
          {
            key: "state",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "div",
                  { staticClass: "d-flex flex-row justify-space-between" },
                  [
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
                                  item.email_verified_at
                                    ? _c(
                                        "v-icon",
                                        _vm._g(
                                          {
                                            staticClass: "state",
                                            attrs: {
                                              color: "success",
                                              small: ""
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v("fas fa-user-check")]
                                      )
                                    : _c(
                                        "v-icon",
                                        _vm._g(
                                          {
                                            staticClass: "state",
                                            attrs: { small: "", color: "red" }
                                          },
                                          on
                                        ),
                                        [_vm._v("fas fa-user-times")]
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
                        item.email_verified_at
                          ? _c("span", [
                              _vm._v(_vm._s(_vm.$t("_user_table.verified")))
                            ])
                          : _c("span", [
                              _vm._v(_vm._s(_vm.$t("_user_table.not_verified")))
                            ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        directives: [
                          {
                            name: "can",
                            rawName: "v-can",
                            value: "@block user",
                            expression: "'@block user'"
                          }
                        ],
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  !item.is_active
                                    ? _c(
                                        "v-chip",
                                        _vm._g(
                                          {
                                            directives: [
                                              {
                                                name: "can",
                                                rawName: "v-can",
                                                value: "@block user",
                                                expression: "'@block user'"
                                              }
                                            ],
                                            staticClass: "state",
                                            attrs: {
                                              color: "error",
                                              "x-small": "",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.blockItem(item)
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v(_vm._s(_vm.$t("qst.yes")))]
                                      )
                                    : _c(
                                        "v-chip",
                                        _vm._g(
                                          {
                                            directives: [
                                              {
                                                name: "can",
                                                rawName: "v-can",
                                                value: "@block user",
                                                expression: "'@block user'"
                                              }
                                            ],
                                            staticClass: "state",
                                            attrs: {
                                              "x-small": "",
                                              color: "success",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.blockItem(item)
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_vm._v(_vm._s(_vm.$t("qst.no")))]
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
                          _vm._v(_vm._s(_vm.$tc("tooltip.block", 1)))
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "fullname",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(_vm._s(item.lastname) + " " + _vm._s(item.firstname))
              ]
            }
          },
          {
            key: "role",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    key: item.id,
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.openDialog(item)
                      }
                    }
                  },
                  [_vm._v("fas fa-edit")]
                )
              ]
            }
          },
          {
            key: "sex",
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
                              item.sex
                                ? _c(
                                    "v-icon",
                                    _vm._g({ staticClass: "my-2" }, on),
                                    [_vm._v("fas fa-male")]
                                  )
                                : _c(
                                    "v-icon",
                                    _vm._g({ staticClass: "my-2" }, on),
                                    [_vm._v("fas fa-female")]
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
                    item.sex
                      ? _c("span", [_vm._v(_vm._s(_vm.$tc("label.sex", 1)))])
                      : _c("span", [_vm._v(_vm._s(_vm.$tc("label.sex", 2)))])
                  ]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/views/user/account/components/index.js":
/*!*****************************************************************!*\
  !*** ./resources/vendor/views/user/account/components/index.js ***!
  \*****************************************************************/
/*! exports provided: assignRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRole */ "./resources/vendor/views/user/account/components/assignRole.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignRole", function() { return _assignRole__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./resources/vendor/views/user/account/table.vue":
/*!*******************************************************!*\
  !*** ./resources/vendor/views/user/account/table.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_ed168c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=ed168c70& */ "./resources/vendor/views/user/account/table.vue?vue&type=template&id=ed168c70&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/vendor/views/user/account/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_ed168c70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_ed168c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/user/account/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/user/account/table.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/vendor/views/user/account/table.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/user/account/table.vue?vue&type=template&id=ed168c70&":
/*!**************************************************************************************!*\
  !*** ./resources/vendor/views/user/account/table.vue?vue&type=template&id=ed168c70& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_ed168c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=ed168c70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/table.vue?vue&type=template&id=ed168c70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_ed168c70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_ed168c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);