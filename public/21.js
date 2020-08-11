(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/vendor/api/user/privilege/role.js":
/*!*****************************************************!*\
  !*** ./resources/vendor/api/user/privilege/role.js ***!
  \*****************************************************/
/*! exports provided: fetchRolesApi, fetchOnlyRolesApi, fetchRolesPercentageApi, storeRoleApi, assignRoleApi, deleteRoleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRolesApi\", function() { return fetchRolesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchOnlyRolesApi\", function() { return fetchOnlyRolesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRolesPercentageApi\", function() { return fetchRolesPercentageApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeRoleApi\", function() { return storeRoleApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignRoleApi\", function() { return assignRoleApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteRoleApi\", function() { return deleteRoleApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction fetchRolesApi() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/roles\",\n    method: \"get\"\n  });\n}\nfunction fetchOnlyRolesApi() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/roles-only\",\n    method: \"get\"\n  });\n}\nfunction fetchRolesPercentageApi() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/roles-percentage\",\n    method: \"get\"\n  });\n}\nfunction storeRoleApi(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/role\",\n    method: \"post\",\n    data: data\n  });\n}\nfunction assignRoleApi(_ref) {\n  var user_id = _ref.user_id,\n      roles = _ref.roles;\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/role-assign/\".concat(user_id),\n    method: \"post\",\n    data: {\n      roles: roles\n    }\n  });\n}\nfunction deleteRoleApi(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/role/\".concat(id),\n    method: \"delete\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS91c2VyL3ByaXZpbGVnZS9yb2xlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3ZlbmRvci9hcGkvdXNlci9wcml2aWxlZ2Uvcm9sZS5qcz9mMDYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiQC91dGlscy9yZXF1ZXN0XCI7XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSb2xlc0FwaSgpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCIvcm9sZXNcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hPbmx5Um9sZXNBcGkoKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL3JvbGVzLW9ubHlcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSb2xlc1BlcmNlbnRhZ2VBcGkoKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL3JvbGVzLXBlcmNlbnRhZ2VcIixcbiAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVSb2xlQXBpKGRhdGEpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCIvcm9sZVwiLFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgZGF0YTogZGF0YVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Sb2xlQXBpKF9yZWYpIHtcbiAgdmFyIHVzZXJfaWQgPSBfcmVmLnVzZXJfaWQsXG4gICAgICByb2xlcyA9IF9yZWYucm9sZXM7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL3JvbGUtYXNzaWduL1wiLmNvbmNhdCh1c2VyX2lkKSxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIHJvbGVzOiByb2xlc1xuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUm9sZUFwaShpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi9yb2xlL1wiLmNvbmNhdChpZCksXG4gICAgbWV0aG9kOiBcImRlbGV0ZVwiXG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/vendor/api/user/privilege/role.js\n");

/***/ })

}]);