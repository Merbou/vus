(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/password.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/pages/password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validate */ "./resources/vendor/views/setting/validate.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "passwd",
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"]
  },
  props: {
    user: {
      type: Object
    },
    loading: {
      type: Boolean,
      "default": false
    },
    errors: {
      type: Array,
      "default": []
    }
  },
  data: function data() {
    return {
      form: {
        last_password: "",
        password: "",
        password_confirmation: ""
      },
      show: false,
      errors_d: []
    };
  },
  computed: {
    _c_rule: function _c_rule() {
      return this.form.password || this.form.last_password ? "required" : "";
    }
  },
  mounted: function mounted() {
    this.initform(this.user);
  },
  methods: {
    fireInfo: function fireInfo() {
      this.errors_d = [];
      this.$emit("fireInfo", this.form);
    },
    initform: function initform(form) {
      var last_password = form.last_password,
          password = form.password,
          password_confirmation = form.password_confirmation,
          ret = _objectWithoutProperties(form, ["last_password", "password", "password_confirmation"]);

      this.form.last_password = last_password;
      this.form.password = password;
      this.form.password_confirmation = password_confirmation;
    },
    firePage: function firePage(error) {
      if (error.length) this.$emit("alarm", true);else this.$emit("alarm", false);
      return error;
    }
  },
  watch: {
    user: function user(val) {
      this.initform(val);
    },
    errors: function errors(val) {
      this.errors_d = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/password.vue?vue&type=template&id=7a7fa8d7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/pages/password.vue?vue&type=template&id=7a7fa8d7& ***!
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
    [
      _c(
        "v-flex",
        { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
        [
          _c("ValidationProvider", {
            attrs: {
              name: _vm.$tc("label.password"),
              rules: _vm._c_rule + "|min:8|alpha_spaces|alpha_num"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var errors = ref.errors
                  var valid = ref.valid
                  return _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      solo: "",
                      rounded: "",
                      "single-line": "",
                      "error-messages": _vm.errors_d.length
                        ? _vm.errors_d
                        : errors,
                      success: _vm.form.last_password ? valid : null,
                      counter: 30,
                      label: _vm.$tc("label.password"),
                      "append-icon": _vm.show
                        ? "fas fa-eye"
                        : "fas fa-eye-slash",
                      type: _vm.show ? "text" : "password"
                    },
                    on: {
                      change: _vm.fireInfo,
                      "update:error": function($event) {
                        return _vm.firePage(errors)
                      },
                      "click:append": function($event) {
                        _vm.show = !_vm.show
                      }
                    },
                    model: {
                      value: _vm.form.last_password,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "last_password", $$v)
                      },
                      expression: "form.last_password"
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
        "v-flex",
        { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
        [
          _c("ValidationProvider", {
            ref: "password",
            attrs: {
              name: _vm.$tc("label.new_password"),
              vid: "password",
              rules: _vm._c_rule + "|min:8|alpha_spaces|alpha_num"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var errors = ref.errors
                  var valid = ref.valid
                  return _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      solo: "",
                      rounded: "",
                      "single-line": "",
                      "error-messages": errors,
                      success: _vm.form.password ? valid : null,
                      counter: 30,
                      label: _vm.$tc("label.new_password"),
                      "append-icon": _vm.show
                        ? "fas fa-eye"
                        : "fas fa-eye-slash",
                      type: _vm.show ? "text" : "password"
                    },
                    on: {
                      change: _vm.fireInfo,
                      "update:error": function($event) {
                        return _vm.firePage(errors)
                      },
                      "click:append": function($event) {
                        _vm.show = !_vm.show
                      }
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password"
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
        "v-flex",
        { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
        [
          _c("ValidationProvider", {
            attrs: {
              name: _vm.$tc("label.password_confirmation"),
              rules: _vm._c_rule + "|confirmed:password|alpha_spaces|alpha_num"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var errors = ref.errors
                  var valid = ref.valid
                  return _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      solo: "",
                      rounded: "",
                      "single-line": "",
                      "error-messages": errors,
                      success: _vm.form.password_confirmation ? valid : null,
                      "data-vv-as": "password",
                      name: _vm.$tc("label.password_confirmation"),
                      counter: 30,
                      label: "password confirm",
                      "append-icon": _vm.show
                        ? "fas fa-eye"
                        : "fas fa-eye-slash",
                      type: _vm.show ? "text" : "password"
                    },
                    on: {
                      change: _vm.fireInfo,
                      "update:error": function($event) {
                        return _vm.firePage(errors)
                      },
                      "click:append": function($event) {
                        _vm.show = !_vm.show
                      }
                    },
                    model: {
                      value: _vm.form.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password_confirmation", $$v)
                      },
                      expression: "form.password_confirmation"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/views/setting/component/pages/password.vue":
/*!*********************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/password.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_vue_vue_type_template_id_7a7fa8d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.vue?vue&type=template&id=7a7fa8d7& */ "./resources/vendor/views/setting/component/pages/password.vue?vue&type=template&id=7a7fa8d7&");
/* harmony import */ var _password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.vue?vue&type=script&lang=js& */ "./resources/vendor/views/setting/component/pages/password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _password_vue_vue_type_template_id_7a7fa8d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _password_vue_vue_type_template_id_7a7fa8d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/setting/component/pages/password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/setting/component/pages/password.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/password.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/setting/component/pages/password.vue?vue&type=template&id=7a7fa8d7&":
/*!****************************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/password.vue?vue&type=template&id=7a7fa8d7& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_7a7fa8d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./password.vue?vue&type=template&id=7a7fa8d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/pages/password.vue?vue&type=template&id=7a7fa8d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_7a7fa8d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_7a7fa8d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);