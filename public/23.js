(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/vendor/api/user/account.js":
/*!**********************************************!*\
  !*** ./resources/vendor/api/user/account.js ***!
  \**********************************************/
/*! exports provided: fetchUsersApi, blockUserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsersApi\", function() { return fetchUsersApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockUserApi\", function() { return blockUserApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction fetchUsersApi(page) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/users-account?page=\".concat(page || 1),\n    method: \"get\"\n  });\n}\nfunction blockUserApi(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/block-account/\".concat(id),\n    method: \"put\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS91c2VyL2FjY291bnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS91c2VyL2FjY291bnQuanM/ZGU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcnNBcGkocGFnZSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi91c2Vycy1hY2NvdW50P3BhZ2U9XCIuY29uY2F0KHBhZ2UgfHwgMSksXG4gICAgbWV0aG9kOiBcImdldFwiXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrVXNlckFwaShpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi9ibG9jay1hY2NvdW50L1wiLmNvbmNhdChpZCksXG4gICAgbWV0aG9kOiBcInB1dFwiXG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/vendor/api/user/account.js\n");

/***/ })

}]);