(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/LangSelect/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/LangSelect/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    is_white: {
      type: Boolean,
      "default": true
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["locale"])),
  methods: {
    changeLocale: function changeLocale(locale) {
      this.langSide(locale);
      this.$i18n.locale = locale;
      this.$store.dispatch("changeLocale", locale);
      if (this.$vuetify && this.$vuetify.lang) this.$vuetify.lang.current = locale;
      this.snackbar({
        text: this.$i18n.t("alert.switchLocale"),
        color: "success"
      });
    },
    langSide: function langSide(locale) {
      var RTL_LANG = ["ar"],
          LTR_LANG = ["en", "fr"];
      if (RTL_LANG.indexOf(locale) > -1) this.$store.dispatch("toggleRTL", true);else if (LTR_LANG.indexOf(locale) > -1) this.$store.dispatch("toggleRTL", false);
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/LangSelect/index.vue?vue&type=template&id=70dd196a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/LangSelect/index.vue?vue&type=template&id=70dd196a& ***!
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
    "v-menu",
    {
      attrs: {
        "offset-y": "",
        trigger: "click",
        "close-on-content-click": true
      },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            return [
              _c(
                "v-icon",
                _vm._g(
                  {
                    staticClass: "mx-3 my-1",
                    attrs: {
                      dark: !_vm.is_white,
                      light: _vm.is_white,
                      tile: ""
                    }
                  },
                  on
                ),
                [_vm._v("fas fa-language")]
              )
            ]
          }
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "v-list",
        [
          _c(
            "v-list-item",
            {
              attrs: { disabled: _vm.locale === "ar" },
              on: {
                click: function($event) {
                  return _vm.changeLocale("ar")
                }
              }
            },
            [_c("v-list-item-title", [_vm._v("العربية")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              attrs: { disabled: _vm.locale === "en" },
              on: {
                click: function($event) {
                  return _vm.changeLocale("en")
                }
              }
            },
            [_c("v-list-item-title", [_vm._v("English")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              attrs: { disabled: _vm.locale === "fr" },
              on: {
                click: function($event) {
                  return _vm.changeLocale("fr")
                }
              }
            },
            [_c("v-list-item-title", [_vm._v("Français")])],
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

/***/ "./resources/vendor/api/mail/index.js":
/*!********************************************!*\
  !*** ./resources/vendor/api/mail/index.js ***!
  \********************************************/
/*! exports provided: send, confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function send(id, resend) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/mail-send/".concat(id),
    method: "post",
    data: {
      resend: resend
    }
  });
}
function confirm(id, code) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/mail-confirmation/".concat(id),
    method: "post",
    data: {
      code: code
    }
  });
}

/***/ }),

/***/ "./resources/vendor/materiels/LangSelect/index.vue":
/*!*********************************************************!*\
  !*** ./resources/vendor/materiels/LangSelect/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_70dd196a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=70dd196a& */ "./resources/vendor/materiels/LangSelect/index.vue?vue&type=template&id=70dd196a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/LangSelect/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_70dd196a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_70dd196a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/LangSelect/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/LangSelect/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/vendor/materiels/LangSelect/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/LangSelect/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/LangSelect/index.vue?vue&type=template&id=70dd196a&":
/*!****************************************************************************************!*\
  !*** ./resources/vendor/materiels/LangSelect/index.vue?vue&type=template&id=70dd196a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70dd196a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=70dd196a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/LangSelect/index.vue?vue&type=template&id=70dd196a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70dd196a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70dd196a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/vendor/views/auth/validate.js":
/*!*************************************************!*\
  !*** ./resources/vendor/views/auth/validate.js ***!
  \*************************************************/
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
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_num", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
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
  alpha_num: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]
});

/***/ })

}]);