(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "assignPermissions",
  props: {
    open: {
      type: Boolean,
      "default": false
    },
    item: {
      type: Object,
      "default": function _default() {
        return {
          id: "",
          name: ""
        };
      }
    },
    permissions: {
      type: Array,
      "default": []
    },
    selected: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    dark: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      $item: {
        id: "",
        name: ""
      },
      permissionsForm: []
    };
  },
  methods: {
    assing: function assing() {
      this.$emit("assing", this.permissionsForm);
    },
    close: function close() {
      this.$emit("close");
    }
  },
  watch: {
    selected: function selected(val) {
      this.permissionsForm = _toConsumableArray(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/user/privilege/role.js */ "./resources/vendor/api/user/privilege/role.js");
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
// import apexchart from "vue-apexcharts";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pieChart",
  components: {// apexchart
  },
  props: {
    dark: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      loading: false,
      series: [],
      chartOptions: {
        theme: {
          mode: ""
        },
        labels: [],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }]
      }
    };
  },
  created: function created() {
    this.chartOptions.theme.mode = this.dark ? "dark" : "light";
    this.fetchRolesPercentage();
  },
  methods: {
    fetchRolesPercentage: function fetchRolesPercentage() {
      var _this = this;

      this.loading = true;
      Object(_api_user_privilege_role_js__WEBPACK_IMPORTED_MODULE_0__["fetchRolesPercentageApi"])().then(function (_res) {
        _this.loading = false;

        _res.forEach(function (e) {
          var label = _this.$i18n.t("roles.".concat(e.label));

          _this.chartOptions.labels.push(label);
        });

        _this.series = _res.map(function (e) {
          return parseFloat(e.series).toFixed(2) * 100;
        });
      })["catch"](function (err) {
        _this.loading = false;
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./resources/vendor/views/user/privilege/validate.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "newRole",
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"]
  },
  props: {
    open: {
      type: Boolean,
      "default": false
    },
    dark: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      item: {
        id: "",
        name: ""
      }
    };
  },
  methods: {
    validate: function validate() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.create.validate();

              case 2:
                result = _context.sent;
                if (result) _this.$emit("create", _this.item);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    close: function close() {
      this.$emit("close");
    }
  }
});

/***/ }),

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-permission[data-v-9a9bd364]{\r\nheight: 300px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { value: _vm.open, scrollable: "", "max-width": "300px" },
      on: { "click:outside": _vm.close }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _vm._v(_vm._s(_vm.$t("$assign_permission.title")))
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "card-permission" },
            [
              _c("v-treeview", {
                attrs: {
                  shaped: "",
                  selectable: "",
                  dense: "",
                  "selected-color": "tail",
                  items: _vm.permissions
                },
                model: {
                  value: _vm.permissionsForm,
                  callback: function($$v) {
                    _vm.permissionsForm = $$v
                  },
                  expression: "permissionsForm"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  attrs: { color: _vm.dark ? "light" : "secondary", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("qst.cancel")))]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", color: "info" },
                  on: {
                    click: function($event) {
                      return _vm.assing()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("$assign_permission.submit")))]
              )
            ],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=template&id=e83b912e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=template&id=e83b912e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card",
        { attrs: { id: "chart", loading: _vm.loading, "max-width": "380" } },
        [_c("v-card-text")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=template&id=72f11da2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=template&id=72f11da2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { value: _vm.open, "max-width": "500px" },
      on: { "click:outside": _vm.close }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.$t("$new_role.title")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "ValidationObserver",
                    {
                      ref: "create",
                      staticClass: "container",
                      attrs: { autocomplete: "on" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.validate()
                        }
                      }
                    },
                    [
                      _c("ValidationProvider", {
                        attrs: {
                          name: _vm.$tc("label.role", 1),
                          rules: "max:20|required|alpha_spaces"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              var valid = ref.valid
                              return _c("v-text-field", {
                                attrs: {
                                  "error-messages": errors,
                                  success: valid,
                                  label: _vm.$tc("label.role", 1)
                                },
                                model: {
                                  value: _vm.item.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "name", $$v)
                                  },
                                  expression: "item.name"
                                }
                              })
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("div", { staticClass: "flex-grow-1" }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: _vm.dark ? "light" : "secondary", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("qst.cancel")))]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", color: "secondary" },
                  on: {
                    click: function($event) {
                      return _vm.validate()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("$new_role.submit")))]
              )
            ],
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

/***/ "./resources/vendor/api/user/privilege/permission.js":
/*!***********************************************************!*\
  !*** ./resources/vendor/api/user/privilege/permission.js ***!
  \***********************************************************/
/*! exports provided: fetchPermissionsApi, storePermissionsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPermissionsApi", function() { return fetchPermissionsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storePermissionsApi", function() { return storePermissionsApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchPermissionsApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/permissions",
    method: "get"
  });
}
function storePermissionsApi(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/permissions",
    method: "post",
    data: data
  });
}

/***/ }),

/***/ "./resources/vendor/api/user/privilege/role.js":
/*!*****************************************************!*\
  !*** ./resources/vendor/api/user/privilege/role.js ***!
  \*****************************************************/
/*! exports provided: fetchRolesApi, fetchOnlyRolesApi, fetchRolesPercentageApi, storeRoleApi, assignRoleApi, deleteRoleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRolesApi", function() { return fetchRolesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOnlyRolesApi", function() { return fetchOnlyRolesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRolesPercentageApi", function() { return fetchRolesPercentageApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRoleApi", function() { return storeRoleApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRoleApi", function() { return assignRoleApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRoleApi", function() { return deleteRoleApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchRolesApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/roles",
    method: "get"
  });
}
function fetchOnlyRolesApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/roles-only",
    method: "get"
  });
}
function fetchRolesPercentageApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/roles-percentage",
    method: "get"
  });
}
function storeRoleApi(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role",
    method: "post",
    data: data
  });
}
function assignRoleApi(_ref) {
  var user_id = _ref.user_id,
      roles = _ref.roles;
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role-assign/".concat(user_id),
    method: "post",
    data: {
      roles: roles
    }
  });
}
function deleteRoleApi(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/role/".concat(id),
    method: "delete"
  });
}

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/assignPermissions.vue":
/*!********************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/assignPermissions.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignPermissions_vue_vue_type_template_id_9a9bd364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true& */ "./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true&");
/* harmony import */ var _assignPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignPermissions.vue?vue&type=script&lang=js& */ "./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css& */ "./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _assignPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assignPermissions_vue_vue_type_template_id_9a9bd364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assignPermissions_vue_vue_type_template_id_9a9bd364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9a9bd364",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/user/privilege/components/assignPermissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assignPermissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=style&index=0&id=9a9bd364&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_style_index_0_id_9a9bd364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_template_id_9a9bd364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/assignPermissions.vue?vue&type=template&id=9a9bd364&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_template_id_9a9bd364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignPermissions_vue_vue_type_template_id_9a9bd364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/charts/pie.vue":
/*!*************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/charts/pie.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie_vue_vue_type_template_id_e83b912e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie.vue?vue&type=template&id=e83b912e& */ "./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=template&id=e83b912e&");
/* harmony import */ var _pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie.vue?vue&type=script&lang=js& */ "./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pie_vue_vue_type_template_id_e83b912e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pie_vue_vue_type_template_id_e83b912e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/user/privilege/components/charts/pie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./pie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=template&id=e83b912e&":
/*!********************************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=template&id=e83b912e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_vue_vue_type_template_id_e83b912e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./pie.vue?vue&type=template&id=e83b912e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/charts/pie.vue?vue&type=template&id=e83b912e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_vue_vue_type_template_id_e83b912e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_vue_vue_type_template_id_e83b912e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/vendor/views/user/privilege/components/newRole.vue":
/*!**********************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/newRole.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newRole_vue_vue_type_template_id_72f11da2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newRole.vue?vue&type=template&id=72f11da2& */ "./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=template&id=72f11da2&");
/* harmony import */ var _newRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newRole.vue?vue&type=script&lang=js& */ "./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newRole_vue_vue_type_template_id_72f11da2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newRole_vue_vue_type_template_id_72f11da2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/user/privilege/components/newRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./newRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=template&id=72f11da2&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=template&id=72f11da2& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newRole_vue_vue_type_template_id_72f11da2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./newRole.vue?vue&type=template&id=72f11da2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/privilege/components/newRole.vue?vue&type=template&id=72f11da2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newRole_vue_vue_type_template_id_72f11da2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newRole_vue_vue_type_template_id_72f11da2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/vendor/views/user/privilege/validate.js":
/*!***********************************************************!*\
  !*** ./resources/vendor/views/user/privilege/validate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_spaces", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_spaces"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("required", _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"], {
  message: "This field is required "
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("max", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["max"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"],
  max: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["max"],
  alpha_spaces: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_spaces"]
});

/***/ })

}]);