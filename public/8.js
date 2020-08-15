(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/auth/mail/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/auth/mail/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _materiels_LangSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/materiels/LangSelect */ "./resources/vendor/materiels/LangSelect/index.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validate */ "./resources/vendor/views/auth/validate.js");
/* harmony import */ var _api_mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/mail */ "./resources/vendor/api/mail/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "confirmation",
  components: {
    LangSelect: _materiels_LangSelect__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"]
  },
  data: function data() {
    return {
      form: {
        code: ""
      },
      BackErrors: {
        code: ""
      },
      loading: false
    };
  },
  mounted: function mounted() {
    this.sendMail(false);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(["user", "dark"])),
  methods: {
    confirmation: function confirmation() {
      var _this = this;

      this.loading = true;
      this.vLoading(true);
      var id = this.user.id;
      Object(_api_mail__WEBPACK_IMPORTED_MODULE_4__["confirm"])(id, this.form.code).then(function (response) {
        _this.loading = false;

        _this.vLoading(false);

        _this.$store.dispatch("mailVerifed", response).then(function () {
          _this.snackbar({
            text: _this.$i18n.t("_mail.success"),
            color: "success"
          });

          _this.$router.push({
            path: "/dashboard"
          })["catch"](function (err) {});
        });
      })["catch"](function (error) {
        _this.loading = false;

        _this.vLoading(false);

        if (error && error.status == 422) {
          Object.assign(_this.BackErrors, error.data.errors);
        } else if (error && error.status == 401) {}
      });
    },
    sendMail: function sendMail(resend) {
      var _this2 = this;

      var id = this.user.id;
      this.loading = true;
      Object(_api_mail__WEBPACK_IMPORTED_MODULE_4__["send"])(id, resend).then(function (response) {
        _this2.loading = false;
      })["catch"](function (error) {
        _this2.loading = false;
      });
    },
    validate: function validate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$refs.form.validate();

              case 2:
                result = _context.sent;

                if (!result) {
                  _context.next = 7;
                  break;
                }

                _this3.confirmation();

                _context.next = 8;
                break;

              case 7:
                return _context.abrupt("return", false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    errorRender: function errorRender(errors, backError) {
      if (errors.length > 0) return errors;else if (backError) return backError[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/auth/mail/index.vue?vue&type=template&id=b181095e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/auth/mail/index.vue?vue&type=template&id=b181095e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        "ValidationObserver",
        {
          ref: "form",
          staticClass: "container",
          attrs: { autocomplete: "on" },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.validate($event)
            }
          }
        },
        [
          _c(
            "v-card",
            {
              staticClass: "mx-auto",
              attrs: {
                "max-width": "400",
                loading: _vm.loading,
                disabled: _vm.loading,
                shaped: "",
                elevation: "10"
              }
            },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-layout",
                    {
                      attrs: {
                        "align-center": "",
                        "justify-space-between": "",
                        "fill-height": ""
                      }
                    },
                    [
                      _c(
                        "div",
                        [_c("lang-select", { attrs: { is_white: !_vm.dark } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.$t("_mail.title")))])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-layout",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", md12: "", lg12: "", sm12: "" } },
                        [
                          _c("ValidationProvider", {
                            attrs: {
                              name: _vm.$tc("label.code"),
                              rules: "integer|required"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return _c("v-text-field", {
                                    attrs: {
                                      loading: _vm.loading,
                                      outlined: "",
                                      autocomplete: "on",
                                      solo: "",
                                      rounded: "",
                                      "single-line": "",
                                      "error-messages": _vm.errorRender(
                                        errors,
                                        _vm.BackErrors.code
                                      ),
                                      label: _vm.$tc("label.code"),
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.form.code,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "code", _vm._n($$v))
                                      },
                                      expression: "form.code"
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
                { staticClass: "d-flex justify-space-between" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", small: "" },
                      on: {
                        click: function($event) {
                          return _vm.sendMail(true)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("_mail.resend")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-2",
                      attrs: { color: "success", dark: "", rounded: "" },
                      on: { click: _vm.validate }
                    },
                    [_vm._v(_vm._s(_vm.$t("_mail.submit")))]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/views/auth/mail/index.vue":
/*!****************************************************!*\
  !*** ./resources/vendor/views/auth/mail/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b181095e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b181095e& */ "./resources/vendor/views/auth/mail/index.vue?vue&type=template&id=b181095e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/views/auth/mail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b181095e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b181095e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/auth/mail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/auth/mail/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/vendor/views/auth/mail/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/auth/mail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/auth/mail/index.vue?vue&type=template&id=b181095e&":
/*!***********************************************************************************!*\
  !*** ./resources/vendor/views/auth/mail/index.vue?vue&type=template&id=b181095e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b181095e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b181095e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/auth/mail/index.vue?vue&type=template&id=b181095e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b181095e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b181095e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);