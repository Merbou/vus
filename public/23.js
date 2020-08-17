(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

/***/ })

}]);