(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "materielAsker",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["dialog", "dark"])),
  methods: {
    cancel: function cancel() {
      this.$store.dispatch("toggleDialog", {
        open: false,
        value: false
      });
    },
    accepte: function accepte() {
      this.$store.dispatch("toggleDialog", {
        open: false,
        value: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "materielLoading",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["loading"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "materielSnackbar",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["vSnackbar"])),
  methods: {
    close: function close() {
      this.$store.dispatch("snackbarStore", {
        state: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/theme */ "./resources/vendor/utils/theme.js");
/* harmony import */ var _materiels_Dialog_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/materiels/Dialog/index.js */ "./resources/vendor/materiels/Dialog/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    materielAsker: _materiels_Dialog_index_js__WEBPACK_IMPORTED_MODULE_1__["materielAsker"],
    materielLoading: _materiels_Dialog_index_js__WEBPACK_IMPORTED_MODULE_1__["materielLoading"],
    materielSnackbar: _materiels_Dialog_index_js__WEBPACK_IMPORTED_MODULE_1__["materielSnackbar"]
  },
  name: "App",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["RTL", "dark", "palette"])),
  created: function created() {
    this.$vuetify.rtl = this.RTL;
    this.$vuetify.theme.dark = this.dark;
    this.$vuetify.theme.themes.dark = this.theme(this.palette);
    this.$vuetify.theme.themes.light = this.theme(this.palette);
  },
  methods: _objectSpread({}, _utils_theme__WEBPACK_IMPORTED_MODULE_0__["default"]),
  watch: {
    RTL: function RTL(val) {
      this.$vuetify.rtl = val;
    },
    dark: function dark(val) {
      this.$vuetify.theme.dark = val;
    },
    palette: function palette(val) {
      this.$vuetify.theme.themes.dark = this.theme(val);
      this.$vuetify.theme.themes.light = this.theme(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=template&id=cba03780&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=template&id=cba03780& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      attrs: { "max-width": "290" },
      model: {
        value: _vm.dialog.open,
        callback: function($$v) {
          _vm.$set(_vm.dialog, "open", $$v)
        },
        expression: "dialog.open"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.dialog.title))]),
          _vm._v(" "),
          _c("v-card-text", [_vm._v(_vm._s(_vm.dialog.message))]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("div", { staticClass: "flex-grow-1" }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", color: "info" },
                  on: { click: _vm.accepte }
                },
                [_vm._v(_vm._s(_vm.$t("qst.yes")))]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: _vm.dark ? "light" : "secondary", text: "" },
                  on: { click: _vm.cancel }
                },
                [_vm._v(_vm._s(_vm.$t("qst.cancel")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=template&id=5cb81156&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=template&id=5cb81156&scoped=true& ***!
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
  return _vm.loading
    ? _c(
        "v-overlay",
        { attrs: { value: _vm.loading } },
        [
          _vm.loading
            ? _c(
                "v-card",
                { attrs: { persistent: "", width: "300" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "info", dark: "" } },
                    [
                      _c(
                        "v-card-text",
                        [
                          _vm._v("\n        Please wait\n        "),
                          _c("v-progress-linear", {
                            staticClass: "mb-0",
                            attrs: { indeterminate: "", color: "white" }
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
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=template&id=63082c7e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=template&id=63082c7e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-snackbar",
    {
      attrs: { timeout: _vm.vSnackbar.timeout, color: _vm.vSnackbar.color },
      model: {
        value: _vm.vSnackbar.state,
        callback: function($$v) {
          _vm.$set(_vm.vSnackbar, "state", $$v)
        },
        expression: "vSnackbar.state"
      }
    },
    [
      _vm._v("\n  " + _vm._s(_vm.vSnackbar.text) + "\n  "),
      _c(
        "v-btn",
        {
          attrs: { text: "" },
          on: {
            click: function($event) {
              return _vm.close()
            }
          }
        },
        [_vm._v("Close")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/App.vue?vue&type=template&id=12426811&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/App.vue?vue&type=template&id=12426811& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c("materiel-loading"),
      _vm._v(" "),
      _c("materiel-snackbar"),
      _vm._v(" "),
      _c("materiel-asker"),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/api/auth/index.js":
/*!********************************************!*\
  !*** ./resources/vendor/api/auth/index.js ***!
  \********************************************/
/*! exports provided: login, register, userInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfo", function() { return userInfo; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function login(email, password) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/login",
    method: "post",
    data: {
      email: email,
      password: password
    }
  });
}
function register(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/register",
    method: "post",
    data: data
  });
}
function userInfo() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/user",
    method: "get"
  });
}

/***/ }),

/***/ "./resources/vendor/app.js":
/*!*********************************!*\
  !*** ./resources/vendor/app.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/App */ "./resources/vendor/views/App.vue");
/* harmony import */ var _src_plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/plugins/vuetify */ "./resources/vendor/src/plugins/vuetify.js");
/* harmony import */ var _src_plugins_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/plugins/i18n */ "./resources/vendor/src/plugins/i18n.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./resources/vendor/router/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/index */ "./resources/vendor/store/index.js");
/* harmony import */ var _utils_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/mixin */ "./resources/vendor/utils/mixin.js");
/* harmony import */ var _src_plugins_laravel_echo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/plugins/laravel-echo */ "./resources/vendor/src/plugins/laravel-echo.js");
/* harmony import */ var _src_plugins_laravel_echo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_laravel_echo__WEBPACK_IMPORTED_MODULE_7__);








__webpack_require__.nc = document.getElementById("csp_nonce").content;
vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin(_utils_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]);
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  vuetify: _src_plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__["default"],
  i18n: _src_plugins_i18n__WEBPACK_IMPORTED_MODULE_3__["default"],
  router: _router__WEBPACK_IMPORTED_MODULE_4__["default"],
  store: _store_index__WEBPACK_IMPORTED_MODULE_5__["default"],
  render: function render(h) {
    return h(_views_App__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./resources/vendor/directives/index.js":
/*!**********************************************!*\
  !*** ./resources/vendor/directives/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  can: {
    inserted: function inserted(el, binding, vnode) {
      var vm = vnode.context;
      var _permission = binding.value;
      if (!(_permission instanceof Array)) _permission = [_permission];

      var _permissions = vm.$store.getters.permissions.filter(function (e) {
        var elm = e.split(".");
        return elm[elm.length - 1][0] === "@";
      }).map(function (e) {
        var elm = e.split(".");
        return elm[elm.length - 1].substring(1);
      });

      var _roles = vm.$store.getters.roles;
      if (_roles.some(function (e) {
        return e !== "super-admin";
      }) && !_permission.every(function (_p) {
        return _permissions.indexOf(_p) > -1;
      })) vnode.elm.remove();
    }
  }
});

/***/ }),

/***/ "./resources/vendor/locales/ar.js":
/*!****************************************!*\
  !*** ./resources/vendor/locales/ar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  routes: {
    dashboard: "لوحة القيادة",
    users: "المستخدمون",
    table: "جدول",
    chart: "مخطط",
    privilege: "شرف",
    chat: "دردشة",
    trash: "قمامة",
    setting: "ضبط",
    contacts: "الاتصال"
  },
  alert: {
    switchLocale: "تم تغيير اللغة بنجاح"
  }
});

/***/ }),

/***/ "./resources/vendor/locales/en.js":
/*!****************************************!*\
  !*** ./resources/vendor/locales/en.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // _name:means is a page
  // $name:means is a component
  routes: {
    dashboard: "Dashboard",
    users: "users",
    table: "table",
    chart: "chart",
    privilege: "privilege",
    chat: "chat",
    trash: "trash",
    setting: "setting",
    contacts: "contacts"
  },
  label: {
    email: "Email",
    username: "Username",
    lastname: "Last name",
    firstname: "First name",
    fullname: "Fullname",
    name: "Name",
    password: "Password",
    password_confirmation: "Password confirmation",
    new_password: "New Password",
    phone: "Phone",
    sex: "Sex | Man | Woman",
    code: "Code activation",
    created_at: "Creation date",
    view: "Views",
    state: "State",
    role: "Role | Roles",
    permission: "Permission | Permissions",
    room: "Room | Rooms",
    contact: "Contact | Contacts",
    search: "Search",
    subject: "Subject",
    actions: "Actions",
    invite_someone: 'Invite someone',
    kick_someone: 'Kick someone',
    "delete": "Delete {obj}",
    recycle: "Recycle {obj}",
    optionnal: "(optionnal)"
  },
  roles: {
    "super-admin": "Super admin",
    "admin": "Admin",
    "writer": "Writer"
  },
  // permissions: {
  //     "dashboard": "dashboard",
  //     "users.table": "users.table",
  //     "users.chart": "users.chart",
  //     "users.privilege": "users.privilege",
  //     "chat": "chat",
  //     "trash": "trash",
  //     "setting": "setting",
  //     "contacts.@delete contacts": "contacts.@delete contacts",
  //     "contacts.@read contacts": "contacts.@read contacts",
  // },
  _login: {
    title: "Vus",
    submit: "login",
    register: "Register",
    errorAuth: "Email or password is wrong!",
    successAuth: "welcome back!"
  },
  _register: {
    title: "Vus",
    log: "Register",
    submit: "Register",
    errorAuth: "Email or password is wrong!",
    successAuth: "Please confirm your email address"
  },
  _mail: {
    title: "Vus",
    submit: "Verifie",
    resend: "Resend",
    success: "Welcome to your dashboard"
  },
  _setting: {
    tab_1: "Information",
    tab_2: "Password",
    submit: "update",
    change_avatar: "Change avatar",
    error: "The setting was not updated.",
    success: "The setting was updated successfully !"
  },
  _contact: {
    delete_tooltip: "Delete",
    delete_contact_tooltip: "Delete it",
    read_tooltip: "Read it",
    read: "Reading"
  },
  _trash: {
    tab_1: "Contact"
  },
  _user_table: {
    verified: "account verified",
    not_verified: "account not verified",
    success_assign_role: "the role was assigned to user successfully !",
    select_roles: "Select roles",
    others: "others"
  },
  _user_privilege: {
    title: "Roles",
    create_role: "New role",
    success_role_store: "The role is stored successfully !",
    success_assign_permissions: "the permissions was assigned to role successfully !"
  },
  _user_curve_chart: {
    yaxis: "The number of registrations",
    xaxis: "Registration date",
    label: "series-1"
  },
  _chat: {
    rooms_empty: "no rooms",
    load_more: "More rooms",
    new_messages: "New messages",
    messages_deleted: "Messages deleted",
    messages_empty: "Messages empty",
    conversation_started: "conversation started on",
    type_messages: "type messages",
    search: "search",
    echo_messages_deleted: "this message has been deleted",
    echo_leave_user: "{username} has been leave the conversation",
    echo_join_user: "{username} has been joined the conversation"
  },
  $navbar: {
    account: "My Account",
    setting: "setting",
    home: "Home",
    logout: "Logout"
  },
  $notification: {
    show_more: "show more",
    empty: "You have no notifications"
  },
  $new_role: {
    title: "New role",
    submit: "Save"
  },
  $assign_permission: {
    title: "Select",
    submit: "Save"
  },
  $curve_chart_selection: {
    one_month: "One month",
    six_months: "Six months",
    one_year: "One year",
    all: "All"
  },
  $new_room: {
    title: "New room",
    create: "Create room"
  },
  $invite_user_room: {
    title: "Invitation",
    submit: "Invite"
  },
  $remove_user_room: {
    title: "Kick someone out",
    submit: "Kick"
  },
  $menu_chat_room: {
    inviteUser: "Invite user",
    removeUser: "Remove user",
    quitRoom: "Quit room"
  },
  $room: {
    not_exist: "Room is not exist"
  },
  $menu_chat_message: {
    replyMessage: "Reply",
    editMessage: "Edit Message",
    deleteMessage: "Delete Message"
  },
  $setting: {
    title: "Customize"
  },
  $appBarOptions: {
    title: "Navbar"
  },
  $palettes: {
    title: "Palette"
  },
  alert: {
    switchLocale: "language has been successfully changed",
    complete: "The operation completed successfully !",
    failed: "The operation did not complete. Try again later !"
  },
  asker: {
    title: "Are you sure !",
    message: "Are you sure to {opt} this {obj}."
  },
  qst: {
    accepte: "Accepte",
    cancel: "Cancel",
    yes: "Yes",
    no: "No",
    ok: "Ok"
  },
  tooltip: {
    "delete": "Delete {obj}",
    recycle: "Recycle {obj}",
    read: "Read {obj}",
    block: "blocked | block {obj}",
    assign: "Assign {obj}"
  }
});

/***/ }),

/***/ "./resources/vendor/locales/fr.js":
/*!****************************************!*\
  !*** ./resources/vendor/locales/fr.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  routes: {
    dashboard: "Tableau de bord",
    users: "utilisateurs",
    table: "table",
    chart: "graphique",
    privilege: "privilège",
    chat: "chat",
    trash: "corbeille",
    setting: "réglage",
    contacts: "Contacts"
  },
  alert: {
    switchLocale: "la langue a été changé avec succès"
  }
});

/***/ }),

/***/ "./resources/vendor/locales/index.js":
/*!*******************************************!*\
  !*** ./resources/vendor/locales/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ar */ "./resources/vendor/locales/ar.js");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en */ "./resources/vendor/locales/en.js");
/* harmony import */ var _fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fr */ "./resources/vendor/locales/fr.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  ar: _ar__WEBPACK_IMPORTED_MODULE_0__["default"],
  en: _en__WEBPACK_IMPORTED_MODULE_1__["default"],
  fr: _fr__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Asker/index.vue":
/*!***********************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Asker/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_cba03780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cba03780& */ "./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=template&id=cba03780&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cba03780___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_cba03780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Dialog/Asker/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=template&id=cba03780&":
/*!******************************************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=template&id=cba03780& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cba03780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=cba03780& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Asker/index.vue?vue&type=template&id=cba03780&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cba03780___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cba03780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Loading/index.vue":
/*!*************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Loading/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5cb81156_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5cb81156&scoped=true& */ "./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=template&id=5cb81156&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5cb81156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5cb81156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cb81156",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Dialog/Loading/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=template&id=5cb81156&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=template&id=5cb81156&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5cb81156_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5cb81156&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Loading/index.vue?vue&type=template&id=5cb81156&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5cb81156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5cb81156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Snackbar/index.vue":
/*!**************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Snackbar/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_63082c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=63082c7e& */ "./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=template&id=63082c7e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_63082c7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_63082c7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Dialog/Snackbar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=template&id=63082c7e&":
/*!*********************************************************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=template&id=63082c7e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63082c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=63082c7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Dialog/Snackbar/index.vue?vue&type=template&id=63082c7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63082c7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63082c7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Dialog/index.js":
/*!****************************************************!*\
  !*** ./resources/vendor/materiels/Dialog/index.js ***!
  \****************************************************/
/*! exports provided: materielAsker, materielLoading, materielSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asker */ "./resources/vendor/materiels/Dialog/Asker/index.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materielAsker", function() { return _Asker__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./resources/vendor/materiels/Dialog/Loading/index.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materielLoading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snackbar */ "./resources/vendor/materiels/Dialog/Snackbar/index.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materielSnackbar", function() { return _Snackbar__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./resources/vendor/router/config.js":
/*!*******************************************!*\
  !*** ./resources/vendor/router/config.js ***!
  \*******************************************/
/*! exports provided: routeCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeCase", function() { return routeCase; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function routeCase(routes) {
  var _rs = routes.map(function (_ro) {
    if (_ro.is_layout) return; //Me:Layout if compenent need Adoption then adopte him PLS

    if (_ro.withLayout) _ro = layoutAdoption(_ro);

    var _ro2 = _ro,
        children = _ro2.children,
        view = _ro2.view,
        rest = _objectWithoutProperties(_ro2, ["children", "view"]);

    var route = _objectSpread({}, rest, {
      component: function component() {
        return __webpack_require__("./resources/vendor/views lazy recursive ^\\.\\/.*\\.vue$")("./".concat(view, ".vue"));
      },
      children: children && children.length && routeCase(children)
    });

    return route;
  });

  return _rs;
}
/**
 * layout Adoption of child 
 * @param {object} _ro 
 */

function layoutAdoption(_ref) {
  var withLayout = _ref.withLayout,
      child = _objectWithoutProperties(_ref, ["withLayout"]);

  if (!child.view) return Object.assign({
    view: 'layout/index',
    is_layout: true
  }, child);
  var _ro_temp = {
    view: 'layout/index',
    is_layout: true,
    path: child.path,
    rank: child.rank
  };
  _ro_temp["children"] = [_objectSpread({}, child)];
  return _ro_temp;
}

/***/ }),

/***/ "./resources/vendor/router/index.js":
/*!******************************************!*\
  !*** ./resources/vendor/router/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route */ "./resources/vendor/router/route.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares */ "./resources/vendor/router/middlewares/index.js");




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var opts = {
  mode: 'history',
  scrollBehavior: function scrollBehavior() {
    return {
      y: 0
    };
  },
  routes: _route__WEBPACK_IMPORTED_MODULE_2__["default"].get(false, ["init", "portail", "mail"])
};
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"](opts);
_route__WEBPACK_IMPORTED_MODULE_2__["default"].middleware({
  router: router,
  middlewares: _middlewares__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/vendor/router/middlewares/auth.middleware.js":
/*!****************************************************************!*\
  !*** ./resources/vendor/router/middlewares/auth.middleware.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/vendor/store/index.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route */ "./resources/vendor/router/route.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./resources/vendor/router/index.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/token */ "./resources/vendor/utils/token.js");
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/permission */ "./resources/vendor/utils/permission.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/* harmony default export */ __webpack_exports__["default"] = ({
  before: function before(_ref) {
    var to = _ref.to,
        from = _ref.from;
    return new Promise(function (resolve) {
      if (Object(_utils_token__WEBPACK_IMPORTED_MODULE_3__["getToken"])()) {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("userInfo").then(function (_ref2) {
          var roles = _ref2.roles,
              permissions = _ref2.permissions,
              res = _objectWithoutProperties(_ref2, ["roles", "permissions"]);

          if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.routes || _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.routes.length < 1) {
            var asyncRoutes = roles.indexOf("super-admin") > -1 ? _route__WEBPACK_IMPORTED_MODULE_1__["default"].get(false, "auth") : Object(_utils_permission__WEBPACK_IMPORTED_MODULE_4__["premissionsDrop"])(_route__WEBPACK_IMPORTED_MODULE_1__["default"].get(false, "auth"), permissions);
            _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("initRoutes", asyncRoutes).then(function (_res) {
              _index__WEBPACK_IMPORTED_MODULE_2__["default"].addRoutes(asyncRoutes);
              if (from.path === "/login" || from.path === "/mail-confirmation") _index__WEBPACK_IMPORTED_MODULE_2__["default"].push({
                path: asyncRoutes.reduce(function (acc, curr) {
                  if (!acc.rank) return curr;
                  if (!curr.rank) return acc;
                  return acc.rank > curr.rank ? acc : curr;
                }).path
              });
            });
          }

          resolve();
        })["catch"](function (err) {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("LogOut");
          resolve("/login");
        });
      } else {
        resolve("/login");
      }
    });
  }
});

/***/ }),

/***/ "./resources/vendor/router/middlewares/index.js":
/*!******************************************************!*\
  !*** ./resources/vendor/router/middlewares/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.middleware */ "./resources/vendor/router/middlewares/init.middleware.js");
/* harmony import */ var _auth_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.middleware */ "./resources/vendor/router/middlewares/auth.middleware.js");
/* harmony import */ var _mail_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.middleware */ "./resources/vendor/router/middlewares/mail.middleware.js");
/* harmony import */ var _portail_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portail.middleware */ "./resources/vendor/router/middlewares/portail.middleware.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  init: _init_middleware__WEBPACK_IMPORTED_MODULE_0__["default"],
  auth: _auth_middleware__WEBPACK_IMPORTED_MODULE_1__["default"],
  mail: _mail_middleware__WEBPACK_IMPORTED_MODULE_2__["default"],
  portail: _portail_middleware__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/vendor/router/middlewares/init.middleware.js":
/*!****************************************************************!*\
  !*** ./resources/vendor/router/middlewares/init.middleware.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  before: function before() {
    return new Promise(function (res, rej) {
      res();
    });
  }
});

/***/ }),

/***/ "./resources/vendor/router/middlewares/mail.middleware.js":
/*!****************************************************************!*\
  !*** ./resources/vendor/router/middlewares/mail.middleware.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/vendor/store/index.js");


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  before: function before(_ref) {
    var to = _ref.to;
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
        var _ref3, roles, permissions, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("userInfo");

              case 2:
                _ref3 = _context.sent;
                roles = _ref3.roles;
                permissions = _ref3.permissions;
                res = _objectWithoutProperties(_ref3, ["roles", "permissions"]);
                if (res.email_verified_at) if (to.path == "/mail-confirmation") resolve("/dashboard");else resolve("/mail-confirmation");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
});

/***/ }),

/***/ "./resources/vendor/router/middlewares/portail.middleware.js":
/*!*******************************************************************!*\
  !*** ./resources/vendor/router/middlewares/portail.middleware.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/token */ "./resources/vendor/utils/token.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  before: function before(_ref) {
    var to = _ref.to;
    return new Promise(function (resolve) {
      if (Object(_utils_token__WEBPACK_IMPORTED_MODULE_0__["getToken"])()) {
        if (to.path === "/login" || to.path === "/register") resolve("/dashboard");
      } else resolve("/login");
    });
  }
});

/***/ }),

/***/ "./resources/vendor/router/route.js":
/*!******************************************!*\
  !*** ./resources/vendor/router/route.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_road__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-road */ "./node_modules/vue-road/dist/index.js");
/* harmony import */ var vue_road__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_road__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/vendor/router/config.js");


/* harmony default export */ __webpack_exports__["default"] = (new vue_road__WEBPACK_IMPORTED_MODULE_0___default.a(function () {
  this.route([// { path: '*', redirect: "/404" },
  {
    path: '/',
    view: 'welcome/index',
    name: "welcome"
  }, {
    path: '/404',
    view: 'errors/404',
    name: "pageNotFound"
  }]);
  this.route([{
    path: '/login',
    view: 'auth/login/index'
  }, {
    path: '/register',
    view: 'auth/register/index'
  }], "portail");
  this.route([{
    path: '/mail-confirmation',
    view: 'auth/mail/index'
  }], "auth,mail");
  this.route([{
    path: '/dashboard',
    view: 'dashboard/index',
    name: "dashboard",
    rank: 0.9,
    withLayout: true,
    icon: "tachometer-alt"
  }, {
    path: '/users',
    name: "users",
    icon: "users",
    withLayout: true,
    children: [{
      path: 'table',
      view: 'user/account/table',
      name: "table",
      icon: "table"
    }, {
      path: 'chart',
      view: 'user/account/chart',
      name: "chart",
      icon: "chart-line"
    }, {
      path: 'privilege',
      view: 'user/privilege/index',
      name: "privilege",
      icon: "star"
    }]
  }, {
    path: '/chats',
    view: 'chat/index',
    name: "chat",
    rank: 0.5,
    withLayout: true,
    hidden: true
  }, {
    path: '/contacts',
    view: 'contact/table',
    name: "contacts",
    rank: 0.7,
    withLayout: true,
    hidden: true
  }, {
    path: '/setting',
    view: 'setting/index',
    name: "setting",
    rank: 0.8,
    withLayout: true,
    icon: "cogs"
  }, {
    path: '/trash',
    view: 'trash/index',
    name: "trash",
    rank: 0.6,
    withLayout: true,
    icon: "trash"
  }], "auth");
}, _config__WEBPACK_IMPORTED_MODULE_1__["routeCase"]));

/***/ }),

/***/ "./resources/vendor/src/plugins/i18n.js":
/*!**********************************************!*\
  !*** ./resources/vendor/src/plugins/i18n.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/locales */ "./resources/vendor/locales/index.js");
/* harmony import */ var _utils_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/layout */ "./resources/vendor/utils/layout.js");




var ress = new _utils_layout__WEBPACK_IMPORTED_MODULE_3__["default"]();
var opts = {
  locale: ress.get()["locale"],
  // set locale
  fallbackLocale: 'en',
  messages: _locales__WEBPACK_IMPORTED_MODULE_2__["default"]
};
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"](opts));

/***/ }),

/***/ "./resources/vendor/src/plugins/laravel-echo.js":
/*!******************************************************!*\
  !*** ./resources/vendor/src/plugins/laravel-echo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Echo from "laravel-echo"
// window.io = require('socket.io-client');
// import { getToken } from '@/utils/token';
// window.Echo = new Echo({
//     broadcaster: 'socket.io',
//     host: window.location.hostname + ':6001',
//     auth:
//     {
//         headers:
//         {
//             Authorization: 'Bearer ' + getToken()
//         }
//     }
// });

/***/ }),

/***/ "./resources/vendor/src/plugins/vuetify.js":
/*!*************************************************!*\
  !*** ./resources/vendor/src/plugins/vuetify.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuetify_es5_locale_ar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/es5/locale/ar */ "./node_modules/vuetify/es5/locale/ar.js");
/* harmony import */ var vuetify_es5_locale_ar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_locale_ar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetify_es5_locale_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/es5/locale/en */ "./node_modules/vuetify/es5/locale/en.js");
/* harmony import */ var vuetify_es5_locale_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_locale_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_es5_locale_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/es5/locale/fr */ "./node_modules/vuetify/es5/locale/fr.js");
/* harmony import */ var vuetify_es5_locale_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_locale_fr__WEBPACK_IMPORTED_MODULE_4__);





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a);
var opts = {
  theme: {
    options: {
      cspNonce: document.getElementById("csp_nonce").content
    }
  },
  icons: {
    iconfont: 'fa' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'

  },
  lang: {
    locales: {
      en: vuetify_es5_locale_en__WEBPACK_IMPORTED_MODULE_3___default.a,
      ar: vuetify_es5_locale_ar__WEBPACK_IMPORTED_MODULE_2___default.a,
      fr: vuetify_es5_locale_fr__WEBPACK_IMPORTED_MODULE_4___default.a
    },
    current: 'en'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (new vuetify__WEBPACK_IMPORTED_MODULE_1___default.a(opts));

/***/ }),

/***/ "./resources/vendor/store/getters.js":
/*!*******************************************!*\
  !*** ./resources/vendor/store/getters.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  user: function user(state) {
    return state.auth.user;
  },
  roles: function roles(state) {
    return state.auth.roles;
  },
  permissions: function permissions(state) {
    return state.auth.permissions;
  },
  channel: function channel(state) {
    return state.auth.channel;
  },
  routes: function routes(state) {
    return state.app.routes;
  },
  dialog: function dialog(state) {
    return state.app.dialog;
  },
  loading: function loading(state) {
    return state.app.loading;
  },
  vSnackbar: function vSnackbar(state) {
    return state.app.vSnackbar;
  },
  sidebar: function sidebar(state) {
    return state.layout.sidebar;
  },
  RTL: function RTL(state) {
    return state.layout.RTL;
  },
  dark: function dark(state) {
    return state.layout.dark;
  },
  locale: function locale(state) {
    return state.layout.locale;
  },
  palette: function palette(state) {
    return state.layout.palette;
  },
  appBar: function appBar(state) {
    return state.layout.appBar;
  }
});

/***/ }),

/***/ "./resources/vendor/store/index.js":
/*!*****************************************!*\
  !*** ./resources/vendor/store/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth */ "./resources/vendor/store/modules/auth.js");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/app */ "./resources/vendor/store/modules/app.js");
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/layout */ "./resources/vendor/store/modules/layout.js");
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getters */ "./resources/vendor/store/getters.js");






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var opts = {
  modules: {
    auth: _modules_auth__WEBPACK_IMPORTED_MODULE_2__["default"],
    app: _modules_app__WEBPACK_IMPORTED_MODULE_3__["default"],
    layout: _modules_layout__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  getters: _getters__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store(opts));

/***/ }),

/***/ "./resources/vendor/store/modules/app.js":
/*!***********************************************!*\
  !*** ./resources/vendor/store/modules/app.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    routes: [],
    loading: false,
    dialog: {
      open: false,
      value: false,
      message: "Message",
      title: "Are you sure !",
      accepte: "Ok",
      cancel: "Cancel"
    },
    vSnackbar: {
      state: false,
      color: "success",
      timeout: 3000,
      text: "Hi :)"
    }
  },
  mutations: {
    SET_ROUTES: function SET_ROUTES(state, routes) {
      state.routes = routes;
    },
    SET_DIALOG: function SET_DIALOG(state, dialog) {
      state.dialog = Object.assign(state.dialog, dialog);
    },
    TOGGLE_DIALOG: function TOGGLE_DIALOG(state, opVal) {
      state.dialog = Object.assign(state.dialog, opVal);
    },
    SET_LOADING: function SET_LOADING(state, val) {
      state.loading = val;
    },
    SET_VSNACKBAR: function SET_VSNACKBAR(state, _snackbar) {
      state.vSnackbar = _snackbar;
    }
  },
  actions: {
    /**
     * Store all routes Objects
     * @param {callback}
     * 
     * @param {Object} routes 
     */
    initRoutes: function initRoutes(_ref, routes) {
      var commit = _ref.commit,
          state = _ref.state;
      return new Promise(function (resolve) {
        if (state.routes.length < 1) {
          commit('SET_ROUTES', RoutesBrokes(routes));
          resolve(state.routes);
        }
      });
    },

    /**
     * Store dialog Object
     * @param {callback}
     * 
     * @param {Object} routes 
     */
    initDialog: function initDialog(_ref2, dialog) {
      var commit = _ref2.commit;
      commit('SET_DIALOG', dialog);
    },

    /**
     * Store toggleDialog Object
     * @param {callback}
     * 
     * @param {Object} routes 
     */
    toggleDialog: function toggleDialog(_ref3, opVal) {
      var commit = _ref3.commit;
      commit('TOGGLE_DIALOG', opVal);
    },

    /**
     * toggle sideBar
     * @param {callback}
     * 
     * @param None 
     */
    loading: function loading(_ref4, val) {
      var commit = _ref4.commit;
      commit('SET_LOADING', val);
    },
    snackbarStore: function snackbarStore(_ref5, _snackbar) {
      var commit = _ref5.commit;
      commit('SET_VSNACKBAR', _snackbar);
    }
  }
});
/**
 * return routes object without component
 * @param {*} _rs 
 */

function RoutesBrokes(_rs) {
  var _rs_temp = _rs.map(function (_r) {
    var _r2 = _objectSpread({}, _r),
        component = _r2.component,
        _rp = _objectWithoutProperties(_r2, ["component"]);

    _rp.children = _rp.children && RoutesBrokes(_r.children);
    return _rp;
  });

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(_rs_temp)) return _rs_temp;
}

/***/ }),

/***/ "./resources/vendor/store/modules/auth.js":
/*!************************************************!*\
  !*** ./resources/vendor/store/modules/auth.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/token */ "./resources/vendor/utils/token.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/auth */ "./resources/vendor/api/auth/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/permission */ "./resources/vendor/utils/permission.js");


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    token: Object(_utils_token__WEBPACK_IMPORTED_MODULE_0__["getToken"])(),
    user: {},
    roles: [],
    permissions: [],
    channel: null
  },
  mutations: {
    SET_TOKEN: function SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER: function SET_USER(state, user) {
      state.user = user;
    },
    SET_ROLES: function SET_ROLES(state, roles) {
      state.roles = roles.map(function (e) {
        return e.name;
      });
    },
    SET_PERMISSIONS: function SET_PERMISSIONS(state, roles) {
      state.permissions = Object(_utils_permission__WEBPACK_IMPORTED_MODULE_3__["permissionsExtraction"])(roles);
    },
    SET_EMAIL_VERIFIED: function SET_EMAIL_VERIFIED(state, email_verified_at) {
      state.user.email_verified_at = email_verified_at;
    },
    SET_CHANNEL: function SET_CHANNEL(state, channel) {
      state.channel = channel;
    },
    SET_COMPLATE: function SET_COMPLATE(state, user) {
      var roles = user.roles,
          _user = _objectWithoutProperties(user, ["roles"]);

      state.user = _user;
      state.roles = roles.map(function (e) {
        return e.name;
      });
      state.permissions = Object(_utils_permission__WEBPACK_IMPORTED_MODULE_3__["permissionsExtraction"])(roles);
    },
    UNSET_COMPLATE: function UNSET_COMPLATE(state) {
      state.user = null;
      state.roles = [];
      state.permissions = [];
      state.token = "";
    }
  },
  actions: {
    /**
     * @param {callback}
     * 
     * @param {email,password} userInfo 
     */
    login: function login(_ref, userInfo) {
      var commit = _ref.commit;
      var _userInfo$email = userInfo.email,
          email = _userInfo$email === void 0 ? email.trim() : _userInfo$email,
          _userInfo$password = userInfo.password,
          password = _userInfo$password === void 0 ? password.trim() : _userInfo$password;
      return new Promise(function (resolve, reject) {
        Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["login"])(email, password).then(function (response) {
          var token = response.token,
              user = response.user; // commit("SET_CHANNEL", Echo.private(`App.User.${user.id}`));

          commit("SET_TOKEN", token);
          Object(_utils_token__WEBPACK_IMPORTED_MODULE_0__["setToken"])(token);
          commit("SET_COMPLATE", user);
          resolve();
        })["catch"](function (error) {
          reject(error);
        });
      });
    },

    /**
     * @param {callback}
     * 
     * @param {email,password} userInfo 
     */
    register: function register(_ref2, userInfo) {
      var commit = _ref2.commit;
      var username = userInfo.username.trim(),
          email = userInfo.email.trim(),
          password = userInfo.password.trim(),
          password_configuration = userInfo.password_configuration.trim();
      return new Promise(function (resolve, reject) {
        Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["register"])({
          username: username,
          email: email,
          password: password,
          password_configuration: password_configuration
        }).then(function (response) {
          var token = response.token,
              roles = response.roles,
              user = response.user;
          user.roles = roles; // commit("SET_CHANNEL", Echo.private(`App.User.${user.id}`));

          commit("SET_TOKEN", token);
          commit("SET_COMPLATE", user);
          Object(_utils_token__WEBPACK_IMPORTED_MODULE_0__["setToken"])(token);
          resolve(user);
        })["catch"](function (error) {
          reject(error);
        });
      });
    },

    /**
     * @param {callback}
     * 
     * @param {email,password} userInfo 
     */
    LogOut: function LogOut(_ref3) {
      var commit = _ref3.commit;
      return new Promise(function (resolve, reject) {
        commit("UNSET_COMPLATE");
        resolve(Object(_utils_token__WEBPACK_IMPORTED_MODULE_0__["removeToken"])())["catch"](function (error) {
          reject(error);
        });
      });
    },

    /**
     * @param {callback}
     * 
     * @param null  
     */
    userInfo: function userInfo(_ref4) {
      var commit = _ref4.commit,
          state = _ref4.state;
      return new Promise(function (resolve, reject) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(state.user)) {
          Object(_api_auth__WEBPACK_IMPORTED_MODULE_1__["userInfo"])().then(function (response) {
            commit("SET_COMPLATE", response); // commit("SET_CHANNEL", Echo.private(`App.User.${response.id}`));

            resolve(margeState(state));
          })["catch"](function (error) {
            reject(error);
          });
        } else {
          resolve(margeState(state));
        }
      });
    },

    /**
     * @param {callback}
     * 
     * @param null  
     */
    setInfo: function setInfo(_ref5, data) {
      var commit = _ref5.commit;
      commit("SET_USER", data);
    },

    /**
     * @param {callback}
     * 
     * @param null  
     */
    mailVerifed: function mailVerifed(_ref6, _ref7) {
      var commit = _ref6.commit;
      var email_verified_at = _ref7.email_verified_at;
      return new Promise(function (resolve) {
        commit("SET_EMAIL_VERIFIED", email_verified_at);
        resolve();
      });
    }
  }
});

function margeState(state) {
  var response = state.user;
  response["roles"] = state.roles;
  response["permissions"] = state.permissions;
  return response;
}

/***/ }),

/***/ "./resources/vendor/store/modules/layout.js":
/*!**************************************************!*\
  !*** ./resources/vendor/store/modules/layout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/layout */ "./resources/vendor/utils/layout.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




var ress = new _utils_layout__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    sidebar: ress.get()["sidebar"],
    RTL: ress.get()["locale"] === 'ar' ? true : ress.get()["RTL"],
    dark: ress.get()["dark"],
    locale: ress.get()["locale"] && ress.get()["locale"] !== "" ? ress.get()["locale"] : ress.set({
      locale: "en"
    })["locale"],
    palette: ress.get()["palette"].length ? ress.get()["palette"] : ["#25274D", "#464866", "#AAABB8", "#2E9CCA", "#29648A"],
    appBar: ress.get()["appBar"]
  },
  mutations: {
    TOGGLE_SIDEBAR: function TOGGLE_SIDEBAR(state) {
      state.sidebar = state.sidebar ? false : true;
      ress.set({
        sidebar: state.sidebar
      });
    },
    TOGGLE_RTL: function TOGGLE_RTL(state, bool) {
      state.RTL = bool !== undefined ? bool : state.RTL ? false : true;
      ress.set({
        RTL: state.RTL
      });
    },
    TOGGLE_DARK: function TOGGLE_DARK(state) {
      state.dark = state.dark ? false : true;
      ress.set({
        dark: state.dark
      });
    },
    CHANGE_LOCAL: function CHANGE_LOCAL(state, locale) {
      state.locale = locale;
      ress.set({
        locale: state.locale
      });
    },
    CHANGE_THEME: function CHANGE_THEME(state, palette) {
      state.palette = palette;
      ress.set({
        palette: state.palette
      });
    },
    CHANGE_APP_BAR: function CHANGE_APP_BAR(state, appBar) {
      state.appBar = appBar;
      ress.set({
        appBar: state.appBar
      });
    }
  },
  actions: {
    toggleSideBar: function toggleSideBar(_ref) {
      var commit = _ref.commit;
      commit('TOGGLE_SIDEBAR');
    },
    toggleRTL: function toggleRTL(_ref2, bool) {
      var commit = _ref2.commit;
      commit('TOGGLE_RTL', bool);
    },
    toggleDark: function toggleDark(_ref3) {
      var commit = _ref3.commit;
      commit('TOGGLE_DARK');
    },
    changeLocale: function changeLocale(_ref4, locale) {
      var commit = _ref4.commit;
      if (!locale) return;
      commit('CHANGE_LOCAL', locale);
    },
    changeTheme: function changeTheme(_ref5, palette) {
      var commit = _ref5.commit;
      if (!palette && !palette instanceof Array) return;
      commit('CHANGE_THEME', palette);
    },
    changeAppBar: function changeAppBar(_ref6, appBar) {
      var commit = _ref6.commit;
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(appBar) && !appBar instanceof Object) return;
      commit('CHANGE_APP_BAR', appBar);
    }
  }
});

/***/ }),

/***/ "./resources/vendor/utils/layout.js":
/*!******************************************!*\
  !*** ./resources/vendor/utils/layout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAP_KEYS = new Map([[Boolean, ["sidebar", "RTL", "dark"]], [String, ['locale']], [Array, ['palette', 'appBar']]]);

var _default = /*#__PURE__*/function () {
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    this.ressources = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var _step$value = _slicedToArray(_step.value, 2),
            _type = _step$value[0],
            _keys = _step$value[1];

        _keys.forEach(function (_key) {
          try {
            var ress = JSON.parse(localStorage.getItem(_key));
            if (_typeof(ress) !== "".concat(_type.name).toLowerCase() && !ress instanceof _type) throw "".concat(_key, " is type invalide");
            if (ress !== null && ress !== undefined) _this.ressources[_key] = ress;else throw "there is no value in cache";
          } catch (error) {
            console.log(error);
            localStorage.setItem(_key, JSON.stringify(_type()));
            _this.ressources[_key] = _type();
          }
        });
      };

      for (var _iterator = MAP_KEYS.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(_default, [{
    key: "get",
    value: function get() {
      return this.ressources;
    }
  }, {
    key: "set",
    value: function set(ressources) {
      for (var key in ressources) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = MAP_KEYS.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                _type = _step2$value[0],
                _KEYS = _step2$value[1];

            if (_KEYS.indexOf(key) > -1) localStorage.setItem(key, JSON.stringify(ressources[key]));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return ressources;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = MAP_KEYS.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              _type = _step3$value[0],
              _KEYS = _step3$value[1];

          if (_KEYS.indexOf(key) > -1) if (localStorage.getItem(key)) localStorage.removeItem(key);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/vendor/utils/mixin.js":
/*!*****************************************!*\
  !*** ./resources/vendor/utils/mixin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/directives */ "./resources/vendor/directives/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  directives: _directives__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    vLoading: function vLoading(val) {
      this.$store.dispatch("loading", val);
    },
    snackbar: function snackbar(val) {
      this.$store.dispatch("snackbarStore", _objectSpread({}, val, {
        state: true
      }));
    }
  }
});

/***/ }),

/***/ "./resources/vendor/utils/permission.js":
/*!**********************************************!*\
  !*** ./resources/vendor/utils/permission.js ***!
  \**********************************************/
/*! exports provided: premissionsDrop, permissionsExtraction, permissionsRoute, toTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premissionsDrop", function() { return premissionsDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsExtraction", function() { return permissionsExtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsRoute", function() { return permissionsRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTree", function() { return toTree; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function premissionsDrop(_routes, _permissions) {
  //return routes according to permissions 
  //["users","contacts.@delete","contacts.@read"] =>["users","contacts"]
  _permissions = justPermissionsPage(_permissions);
  return _routes.map(function (_ro) {
    if (_ro.children && _ro.children.length > 1) {
      //if route exist on _permissions
      var root = _permissions.filter(function (e) {
        return e.split(".")[0] == _ro.name;
      });

      if (!root || !root.length) return; //groupe all first level name & pass result without first lvl name 
      //exp:"users.table","users.chart"=>["table","chart"]

      var child_perm = root.map(function (e) {
        return e.split(".").slice(1).join(".");
      });
      var children = premissionsDrop(_ro.children, child_perm);

      if (children && children.length) {
        _ro.children = children;
        return _ro;
      }
    } else if (_ro.children && _ro.children.length === 1) {
      if (_permissions.findIndex(function (_p) {
        return [_ro.name, _ro.children[0].name].indexOf(_p) > -1;
      }) > -1) return _ro;
    } else if (_permissions.indexOf(_ro.name) > -1) return _ro;
  }).filter(function (e) {
    return e;
  });
}
function permissionsExtraction(roles) {
  var permissions = [];
  roles.map(function (e) {
    return e.permissions;
  }).forEach(function (element) {
    permissions.push.apply(permissions, _toConsumableArray(element));
  });
  return permissions.filter(function (item, index) {
    return permissions.map(function (e) {
      return e.name;
    }).indexOf(item.name) === index;
  }).map(function (e) {
    return e.name;
  });
}
function permissionsRoute(to, permissions) {
  permissions = justPermissionsPage(permissions);
  var fullPath = to.fullPath.split("/").slice(1).join(".");
  if (fullPath.split(".").length > 1) return permissions.indexOf(fullPath) == -1;else return permissions.indexOf(to.name) == -1;
}
function toTree(permissions, translations) {
  //reforme permissions string to tree of array "users.table"=>"users".children[{"table"}]
  var _permissions = permissions.map(function (e) {
    var elm = e.name.split('.');

    var e_clone = _objectSpread({}, e);

    if (elm.length > 1) {
      var childrens = permissions.filter(function (filt) {
        return elm[0] === filt.name.split('.')[0];
      }).map(function (_e) {
        var e_clone = _objectSpread({}, _e);

        e_clone.name = _e.name.split(".").slice(1).join(".");
        return e_clone;
      });
      e_clone["children"] = toTree(childrens);
      e_clone["name"] = elm[0];
      e_clone.id = Symbol(e_clone.id);
    }

    return e_clone;
  });

  return _permissions.filter(function (e, i) {
    return _permissions.map(function (e) {
      return e.name;
    }).indexOf(e.name) === i;
  });
}

function justPermissionsPage(_permissions) {
  _permissions = _permissions.map(function (e) {
    var elm = e.split(".");
    if (elm[elm.length - 1][0] === "@") return elm.slice(0, elm.length - 1).join(".");
    return elm.join(".");
  });
  return _toConsumableArray(new Set(_permissions));
} // function translatePermissionsName(permissions, translations) {
//     if (!translations) return permissions;
//     const _permissions = [...permissions]
//     _permissions.map(e => {
//         e.name = translations.hasOwnProperty(e.name) ? translations[e.name] : e.name;
//         return e
//     });
//     return _permissions
// }

/***/ }),

/***/ "./resources/vendor/utils/request.js":
/*!*******************************************!*\
  !*** ./resources/vendor/utils/request.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/token */ "./resources/vendor/utils/token.js");



 ///create configuration of request api

var service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  //set url MIX_BASE_API variable from .env   
  baseURL: "/api",
  //timeout of request 10s
  timeout: 30000
}); //config before request is handling

service.interceptors.request.use(function (config) {
  ///config request with adding token access
  var token = Object(_utils_token__WEBPACK_IMPORTED_MODULE_1__["getToken"])();
  var socketId = window.Echo && window.Echo.socketId();
  if (token) config.headers["Authorization"] = "Bearer ".concat(token);
  if (socketId) config.headers['X-Socket-ID'] = socketId; // Echo instance

  return config;
}, function (error) {
  return Promise.reject(error.response);
}); //config before response is handling

service.interceptors.response.use(function (response) {
  //if response has token then set token to cookie and return data of response
  if (response.headers.Authorization) {
    Object(_utils_token__WEBPACK_IMPORTED_MODULE_1__["setToken"])(response.headers.Authorization);
    response.data.token = response.headers.Authorization;
  }

  return response.data;
}, function (error) {
  return Promise.reject(error.response);
});
/* harmony default export */ __webpack_exports__["default"] = (service);

/***/ }),

/***/ "./resources/vendor/utils/theme.js":
/*!*****************************************!*\
  !*** ./resources/vendor/utils/theme.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  theme: function theme(palette) {
    var THEMES_LABEL = ["nav-bar", "side-bar", "primary", "light", "info"];
    var _theme = {
      success: "#4caf50",
      error: "#ff5252"
    };

    var _len = Math.min(THEMES_LABEL.length, palette.length);

    for (var index = 0; index < _len; index++) {
      _theme[THEMES_LABEL[index]] = palette[index];
    }

    return _theme;
  }
});

/***/ }),

/***/ "./resources/vendor/utils/token.js":
/*!*****************************************!*\
  !*** ./resources/vendor/utils/token.js ***!
  \*****************************************/
/*! exports provided: getToken, setToken, removeToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeToken", function() { return removeToken; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

var token_key = "access_token";
function getToken() {
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(token_key);
  return token ? token : null;
}
function setToken(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(token_key, token, {
    expires: 7
  });
  return token;
}
function removeToken() {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(token_key) == "removed" ? true : false;
}

/***/ }),

/***/ "./resources/vendor/views lazy recursive ^\\.\\/.*\\.vue$":
/*!********************************************************************!*\
  !*** ./resources/vendor/views lazy ^\.\/.*\.vue$ namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.vue": [
		"./resources/vendor/views/App.vue"
	],
	"./auth/login/index.vue": [
		"./resources/vendor/views/auth/login/index.vue",
		"/js/vendor",
		4
	],
	"./auth/mail/index.vue": [
		"./resources/vendor/views/auth/mail/index.vue",
		"/js/vendor",
		8
	],
	"./auth/register/index.vue": [
		"./resources/vendor/views/auth/register/index.vue",
		"/js/vendor",
		9
	],
	"./chat/components/room/addRoom.vue": [
		"./resources/vendor/views/chat/components/room/addRoom.vue",
		"/js/vendor"
	],
	"./chat/components/room/inviteUser.vue": [
		"./resources/vendor/views/chat/components/room/inviteUser.vue",
		"/js/vendor"
	],
	"./chat/components/room/quitRoom.vue": [
		"./resources/vendor/views/chat/components/room/quitRoom.vue",
		"/js/vendor"
	],
	"./chat/components/room/removeUser.vue": [
		"./resources/vendor/views/chat/components/room/removeUser.vue",
		"/js/vendor"
	],
	"./chat/index.vue": [
		"./resources/vendor/views/chat/index.vue",
		"/js/vendor",
		1
	],
	"./contact/component/dialogContact.vue": [
		"./resources/vendor/views/contact/component/dialogContact.vue",
		"/js/vendor"
	],
	"./contact/table.vue": [
		"./resources/vendor/views/contact/table.vue",
		"/js/vendor",
		10
	],
	"./dashboard/index.vue": [
		"./resources/vendor/views/dashboard/index.vue",
		11
	],
	"./errors/404.vue": [
		"./resources/vendor/views/errors/404.vue",
		12
	],
	"./layout/component/appMain.vue": [
		"./resources/vendor/views/layout/component/appMain.vue",
		"/js/vendor"
	],
	"./layout/component/footer/index.vue": [
		"./resources/vendor/views/layout/component/footer/index.vue",
		"/js/vendor"
	],
	"./layout/component/interaction/contacts/index.vue": [
		"./resources/vendor/views/layout/component/interaction/contacts/index.vue",
		"/js/vendor"
	],
	"./layout/component/interaction/messages/index.vue": [
		"./resources/vendor/views/layout/component/interaction/messages/index.vue",
		"/js/vendor"
	],
	"./layout/component/interaction/notifications/components/notifyItem.vue": [
		"./resources/vendor/views/layout/component/interaction/notifications/components/notifyItem.vue",
		"/js/vendor"
	],
	"./layout/component/interaction/notifications/index.vue": [
		"./resources/vendor/views/layout/component/interaction/notifications/index.vue",
		"/js/vendor"
	],
	"./layout/component/navBar.vue": [
		"./resources/vendor/views/layout/component/navBar.vue",
		"/js/vendor"
	],
	"./layout/component/setting/components/AppBarOptions.vue": [
		"./resources/vendor/views/layout/component/setting/components/AppBarOptions.vue",
		"/js/vendor"
	],
	"./layout/component/setting/components/sheet.vue": [
		"./resources/vendor/views/layout/component/setting/components/sheet.vue",
		"/js/vendor"
	],
	"./layout/component/setting/index.vue": [
		"./resources/vendor/views/layout/component/setting/index.vue",
		"/js/vendor"
	],
	"./layout/component/sideBar/component/item/itemIcon.vue": [
		"./resources/vendor/views/layout/component/sideBar/component/item/itemIcon.vue",
		"/js/vendor"
	],
	"./layout/component/sideBar/component/item/itemTitle.vue": [
		"./resources/vendor/views/layout/component/sideBar/component/item/itemTitle.vue",
		"/js/vendor"
	],
	"./layout/component/sideBar/component/itemGroup.vue": [
		"./resources/vendor/views/layout/component/sideBar/component/itemGroup.vue",
		"/js/vendor"
	],
	"./layout/component/sideBar/component/list.vue": [
		"./resources/vendor/views/layout/component/sideBar/component/list.vue",
		"/js/vendor"
	],
	"./layout/component/sideBar/index.vue": [
		"./resources/vendor/views/layout/component/sideBar/index.vue",
		"/js/vendor"
	],
	"./layout/index.vue": [
		"./resources/vendor/views/layout/index.vue",
		"/js/vendor",
		5
	],
	"./setting/component/forms.vue": [
		"./resources/vendor/views/setting/component/forms.vue",
		"/js/vendor"
	],
	"./setting/component/pages/fileForm.vue": [
		"./resources/vendor/views/setting/component/pages/fileForm.vue",
		"/js/vendor"
	],
	"./setting/component/pages/identity.vue": [
		"./resources/vendor/views/setting/component/pages/identity.vue",
		"/js/vendor"
	],
	"./setting/component/pages/password.vue": [
		"./resources/vendor/views/setting/component/pages/password.vue",
		"/js/vendor"
	],
	"./setting/component/pages/personalInformation.vue": [
		"./resources/vendor/views/setting/component/pages/personalInformation.vue",
		"/js/vendor"
	],
	"./setting/index.vue": [
		"./resources/vendor/views/setting/index.vue",
		"/js/vendor",
		13
	],
	"./trash/index.vue": [
		"./resources/vendor/views/trash/index.vue",
		"/js/vendor",
		3
	],
	"./user/account/chart.vue": [
		"./resources/vendor/views/user/account/chart.vue",
		"/js/vendor",
		2
	],
	"./user/account/components/assignRole.vue": [
		"./resources/vendor/views/user/account/components/assignRole.vue",
		"/js/vendor"
	],
	"./user/account/table.vue": [
		"./resources/vendor/views/user/account/table.vue",
		"/js/vendor",
		6
	],
	"./user/privilege/components/assignPermissions.vue": [
		"./resources/vendor/views/user/privilege/components/assignPermissions.vue",
		"/js/vendor"
	],
	"./user/privilege/components/charts/pie.vue": [
		"./resources/vendor/views/user/privilege/components/charts/pie.vue",
		"/js/vendor"
	],
	"./user/privilege/components/newRole.vue": [
		"./resources/vendor/views/user/privilege/components/newRole.vue",
		"/js/vendor"
	],
	"./user/privilege/index.vue": [
		"./resources/vendor/views/user/privilege/index.vue",
		"/js/vendor",
		7
	],
	"./welcome/index.vue": [
		"./resources/vendor/views/welcome/index.vue",
		14
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/vendor/views lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/vendor/views/App.vue":
/*!****************************************!*\
  !*** ./resources/vendor/views/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_12426811___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=12426811& */ "./resources/vendor/views/App.vue?vue&type=template&id=12426811&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/vendor/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_12426811___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_12426811___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/vendor/views/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/App.vue?vue&type=template&id=12426811&":
/*!***********************************************************************!*\
  !*** ./resources/vendor/views/App.vue?vue&type=template&id=12426811& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_12426811___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=12426811& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/App.vue?vue&type=template&id=12426811&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_12426811___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_12426811___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./resources/vendor/app.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Merouane\workSpace\Projects\vus\vus\resources\vendor\app.js */"./resources/vendor/app.js");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);