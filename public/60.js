(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/components/assignRole.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/account/components/assignRole.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "assignRole",
  props: {
    open: {
      type: Boolean,
      "default": false
    },
    item: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    roles: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selected: []
    };
  },
  methods: {
    storeRole: function storeRole() {
      var data = {
        user_id: this.item.id,
        roles: this.selected
      };
      this.$emit("storeRole", data);
    },
    close: function close() {
      this.$emit("close");
    }
  },
  watch: {
    item: function item() {
      this.selected = this.item && this.item.roles && this.item.roles.map(function (e) {
        return e.name;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/components/assignRole.vue?vue&type=template&id=51ef9c98&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/user/account/components/assignRole.vue?vue&type=template&id=51ef9c98& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      attrs: { width: "300" },
      on: { "click:outside": _vm.close },
      model: {
        value: _vm.open,
        callback: function($$v) {
          _vm.open = $$v
        },
        expression: "open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _vm._v(_vm._s(_vm.$t("_user_table.select_roles")))
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-select", {
                key: _vm.item.id,
                attrs: {
                  items: _vm.roles,
                  "item-text": "name",
                  "item-value": "name",
                  outlined: "",
                  dense: "",
                  multiple: ""
                },
                on: { change: _vm.storeRole },
                scopedSlots: _vm._u([
                  {
                    key: "selection",
                    fn: function(ref) {
                      var item = ref.item
                      var index = ref.index
                      return [
                        index === 0
                          ? _c("v-chip", [
                              _c("span", [_vm._v(_vm._s(item.name))])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        index === 1
                          ? _c("span", { staticClass: "grey--text caption" }, [
                              _vm._v(
                                "(+" +
                                  _vm._s(_vm.selected.length - 1) +
                                  " " +
                                  _vm._s(_vm.$t("_user_table.others")) +
                                  " )"
                              )
                            ])
                          : _vm._e()
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              })
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

/***/ "./resources/vendor/views/user/account/components/assignRole.vue":
/*!***********************************************************************!*\
  !*** ./resources/vendor/views/user/account/components/assignRole.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRole_vue_vue_type_template_id_51ef9c98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRole.vue?vue&type=template&id=51ef9c98& */ "./resources/vendor/views/user/account/components/assignRole.vue?vue&type=template&id=51ef9c98&");
/* harmony import */ var _assignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRole.vue?vue&type=script&lang=js& */ "./resources/vendor/views/user/account/components/assignRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assignRole_vue_vue_type_template_id_51ef9c98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assignRole_vue_vue_type_template_id_51ef9c98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/user/account/components/assignRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/user/account/components/assignRole.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/vendor/views/user/account/components/assignRole.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assignRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/components/assignRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assignRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/user/account/components/assignRole.vue?vue&type=template&id=51ef9c98&":
/*!******************************************************************************************************!*\
  !*** ./resources/vendor/views/user/account/components/assignRole.vue?vue&type=template&id=51ef9c98& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignRole_vue_vue_type_template_id_51ef9c98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assignRole.vue?vue&type=template&id=51ef9c98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/user/account/components/assignRole.vue?vue&type=template&id=51ef9c98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignRole_vue_vue_type_template_id_51ef9c98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assignRole_vue_vue_type_template_id_51ef9c98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);