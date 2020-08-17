(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/forms.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./resources/vendor/views/setting/component/pages/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    fileForm: _pages__WEBPACK_IMPORTED_MODULE_3__["fileForm"],
    passwd: _pages__WEBPACK_IMPORTED_MODULE_3__["passwd"],
    personalInformation: _pages__WEBPACK_IMPORTED_MODULE_3__["personalInformation"],
    identity: _pages__WEBPACK_IMPORTED_MODULE_3__["identity"]
  },
  props: {
    loading: {
      type: Boolean,
      "default": false
    },
    user: {
      type: Object
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      tab: null,
      form: {},
      avatar: "",
      alarm: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(["RTL"])),
  mounted: function mounted() {
    this.initform(this.user);
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
                return _this.$refs.obs.validate();

              case 2:
                result = _context.sent;
                if (result) _this.$emit("update", _this.GetFormData());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setAvatar: function setAvatar(avatar) {
      this.avatar = avatar;
    },
    initform: function initform(data) {
      this.form = data;
    },
    GetFormData: function GetFormData() {
      var formData = new FormData();

      for (var key in this.form) {
        formData.append(key, this.form[key]);
      }

      formData.append("avatar", this.avatar);
      formData.append("_method", "put");
      return formData;
    },
    assignForm: function assignForm(form) {
      this.form = Object.assign(this.form, form);
    },
    handleAlarm: function handleAlarm(bool) {
      this.alarm = bool;
    },
    is_empty: function is_empty(val) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(val);
    }
  },
  watch: {
    user: function user(val) {
      this.initform(val);
    }
  }
});

/***/ }),

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.setting-section[data-v-dd77ab24] {\r\n  margin-top: -20px;\n}\n.setting-top-section[data-v-dd77ab24] {\r\n  margin-bottom: -53px;\n}\n.setting-avatar[data-v-dd77ab24] {\r\n  z-index: 2;\n}\n.setting-bottom-section[data-v-dd77ab24] {\r\n  z-index: 1;\r\n  margin-left: 70px;\r\n  margin-right: 70px;\n}\n.ltr-class[data-v-dd77ab24] {\r\n  direction: ltr;\n}\n.rtl-class[data-v-dd77ab24] {\r\n  direction: rtl;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=template&id=dd77ab24&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/setting/component/forms.vue?vue&type=template&id=dd77ab24&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setting-section" },
    [
      _c(
        "v-row",
        {
          staticClass: "setting-top-section",
          attrs: { justify: "center", align: "center" }
        },
        [
          _c(
            "v-col",
            { attrs: { lg: "12", md: "12", sm: "12", cols: "12" } },
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c("file-form", {
                    staticClass: "setting-avatar",
                    attrs: {
                      picture_path: _vm.form.picture_path,
                      user: _vm.user,
                      errors:
                        _vm.errors && _vm.errors.avatar
                          ? _vm.errors.avatar
                          : [],
                      loading: _vm.loading
                    },
                    on: { processFile: _vm.setAvatar }
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
        "v-card",
        { staticClass: "setting-bottom-section" },
        [
          _c(
            "v-card-text",
            [
              _c(
                "ValidationObserver",
                { ref: "obs", staticClass: "container" },
                [
                  _c(
                    "v-row",
                    { attrs: { justify: "center", align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "5", md: "5", sm: "12", cols: "12" } },
                        [
                          _c("identity", {
                            attrs: { user: _vm.user, loading: _vm.loading },
                            on: {
                              alarm: _vm.handleAlarm,
                              fireInfo: _vm.assignForm
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "5", md: "5", sm: "12", cols: "12" } },
                        [
                          _c("personal-information", {
                            attrs: { user: _vm.user, loading: _vm.loading },
                            on: {
                              alarm: _vm.handleAlarm,
                              fireInfo: _vm.assignForm
                            }
                          }),
                          _vm._v(" "),
                          _c("passwd", {
                            attrs: {
                              errors:
                                _vm.errors && _vm.errors.password
                                  ? _vm.errors.password
                                  : [],
                              user: _vm.user,
                              loading: _vm.loading
                            },
                            on: {
                              alarm: _vm.handleAlarm,
                              fireInfo: _vm.assignForm
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        {
                          staticClass: "mt-2",
                          class: {
                            "ltr-class": _vm.RTL,
                            "rtl-class": !_vm.RTL
                          },
                          attrs: { xs12: "", md12: "", lg12: "", sm12: "" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "info", rounded: "" },
                              on: {
                                click: function($event) {
                                  return _vm.validate()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("_setting.submit")))]
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

/***/ "./resources/vendor/views/setting/component/forms.vue":
/*!************************************************************!*\
  !*** ./resources/vendor/views/setting/component/forms.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_vue_vue_type_template_id_dd77ab24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.vue?vue&type=template&id=dd77ab24&scoped=true& */ "./resources/vendor/views/setting/component/forms.vue?vue&type=template&id=dd77ab24&scoped=true&");
/* harmony import */ var _forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.vue?vue&type=script&lang=js& */ "./resources/vendor/views/setting/component/forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css& */ "./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forms_vue_vue_type_template_id_dd77ab24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forms_vue_vue_type_template_id_dd77ab24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dd77ab24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/setting/component/forms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/setting/component/forms.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/forms.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./forms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=style&index=0&id=dd77ab24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_id_dd77ab24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/views/setting/component/forms.vue?vue&type=template&id=dd77ab24&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vendor/views/setting/component/forms.vue?vue&type=template&id=dd77ab24&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_template_id_dd77ab24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./forms.vue?vue&type=template&id=dd77ab24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/setting/component/forms.vue?vue&type=template&id=dd77ab24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_template_id_dd77ab24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_template_id_dd77ab24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/vendor/views/setting/component/pages/index.js":
/*!*****************************************************************!*\
  !*** ./resources/vendor/views/setting/component/pages/index.js ***!
  \*****************************************************************/
/*! exports provided: passwd, personalInformation, identity, fileForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.vue */ "./resources/vendor/views/setting/component/pages/password.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passwd", function() { return _password_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _personalInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalInformation */ "./resources/vendor/views/setting/component/pages/personalInformation.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "personalInformation", function() { return _personalInformation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "./resources/vendor/views/setting/component/pages/identity.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _fileForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fileForm.vue */ "./resources/vendor/views/setting/component/pages/fileForm.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileForm", function() { return _fileForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

}]);