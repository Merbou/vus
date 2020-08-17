(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/identity.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/pages/identity.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../validate */ "./resources/vendor/views/setting/validate.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
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
  name: "identity",
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  props: {
    user: {
      type: Object
    },
    loading: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      form: {
        lastname: "",
        firstname: "",
        username: ""
      },
      show: false
    };
  },
  mounted: function mounted() {
    this.initform(this.user);
  },
  methods: {
    fireInfo: function fireInfo() {
      this.$emit("fireInfo", this.form);
    },
    initform: function initform(form) {
      this.form.lastname = form.lastname;
      this.form.firstname = form.firstname;
      this.form.username = form.username;
    },
    firePage: function firePage(error) {
      if (error.length) this.$emit("alarm", true);else this.$emit("alarm", false);
      return error;
    }
  },
  watch: {
    user: function user(val) {
      this.initform(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/identity.vue?vue&type=template&id=5180957a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/pages/identity.vue?vue&type=template&id=5180957a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { loading: _vm.loading, disabled: _vm.loading, shaped: "" } },
    [
      _c("v-col", { attrs: { wrap: "" } }, [
        _c(
          "div",
          { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
          [
            _c("ValidationProvider", {
              attrs: { name: _vm.$tc("label.lastname"), rules: "alpha_spaces" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var errors = ref.errors
                    var valid = ref.valid
                    return _c("v-text-field", {
                      attrs: {
                        "error-messages": errors,
                        success: _vm.form.lastname ? valid : null,
                        label: _vm.$tc("label.lastname"),
                        outlined: "",
                        solo: "",
                        rounded: "",
                        "single-line": ""
                      },
                      on: {
                        change: _vm.fireInfo,
                        "update:error": function($event) {
                          return _vm.firePage(errors)
                        }
                      },
                      model: {
                        value: _vm.form.lastname,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "lastname", $$v)
                        },
                        expression: "form.lastname"
                      }
                    })
                  }
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
          [
            _c("ValidationProvider", {
              attrs: {
                name: _vm.$tc("label.firstname"),
                rules: "alpha_spaces"
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
                        success: _vm.form.firstname ? valid : null,
                        label: _vm.$tc("label.firstname"),
                        outlined: "",
                        solo: "",
                        rounded: "",
                        "single-line": ""
                      },
                      on: {
                        change: _vm.fireInfo,
                        "update:error": function($event) {
                          return _vm.firePage(errors)
                        }
                      },
                      model: {
                        value: _vm.form.firstname,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "firstname", $$v)
                        },
                        expression: "form.firstname"
                      }
                    })
                  }
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
          [
            _c("ValidationProvider", {
              attrs: { name: _vm.$tc("label.username"), rules: "alpha_spaces" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var errors = ref.errors
                    var valid = ref.valid
                    return _c("v-text-field", {
                      attrs: {
                        "error-messages": errors,
                        success: _vm.form.username ? valid : null,
                        label: _vm.$tc("label.username"),
                        outlined: "",
                        solo: "",
                        rounded: "",
                        "single-line": ""
                      },
                      on: {
                        change: _vm.fireInfo,
                        "update:error": function($event) {
                          return _vm.firePage(errors)
                        }
                      },
                      model: {
                        value: _vm.form.username,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "username", $$v)
                        },
                        expression: "form.username"
                      }
                    })
                  }
                }
              ])
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/views/setting/component/pages/identity.vue":
/*!*********************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/identity.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity_vue_vue_type_template_id_5180957a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.vue?vue&type=template&id=5180957a& */ "./resources/vendor/views/setting/component/pages/identity.vue?vue&type=template&id=5180957a&");
/* harmony import */ var _identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.vue?vue&type=script&lang=js& */ "./resources/vendor/views/setting/component/pages/identity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _identity_vue_vue_type_template_id_5180957a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _identity_vue_vue_type_template_id_5180957a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/setting/component/pages/identity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/setting/component/pages/identity.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/identity.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./identity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/identity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/setting/component/pages/identity.vue?vue&type=template&id=5180957a&":
/*!****************************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/identity.vue?vue&type=template&id=5180957a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identity_vue_vue_type_template_id_5180957a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./identity.vue?vue&type=template&id=5180957a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/identity.vue?vue&type=template&id=5180957a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identity_vue_vue_type_template_id_5180957a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identity_vue_vue_type_template_id_5180957a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/views/setting/validate.js":
/*!****************************************************!*\
  !*** ./resources/vendor/views/setting/validate.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("email", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("integer", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_spaces", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_spaces"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_dash", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_num", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("size", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["size"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("mimes", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["mimes"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("required", _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"], {
  message: "This field is required "
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("min", _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"], {
  message: "password should be minimum 8 characters "
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"], {
  message: 'Password confirmation does not match'
}));
/* harmony default export */ __webpack_exports__["default"] = ({
  required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"],
  email: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"],
  min: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"],
  confirmed: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"],
  integer: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"],
  alpha_spaces: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_spaces"],
  alpha_num: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"],
  alpha_dash: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"],
  size: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["size"],
  mimes: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["mimes"]
});

/***/ })

}]);