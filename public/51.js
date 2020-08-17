(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

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



/***/ })

}]);