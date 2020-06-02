(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./resources/vendor/api/trash/contact.js":
/*!***********************************************!*\
  !*** ./resources/vendor/api/trash/contact.js ***!
  \***********************************************/
/*! exports provided: fetchContactsApi, deleteContactsApi, recycleContactsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchContactsApi\", function() { return fetchContactsApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteContactsApi\", function() { return deleteContactsApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recycleContactsApi\", function() { return recycleContactsApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction fetchContactsApi(page) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/trash-contacts?page=\".concat(page || 1),\n    method: \"get\"\n  });\n}\nfunction deleteContactsApi(ids) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/trash-contacts/trash\",\n    method: \"delete\",\n    data: {\n      ids: ids\n    }\n  });\n}\nfunction recycleContactsApi(ids) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/trash-contacts/recycle\",\n    method: \"post\",\n    data: {\n      ids: ids\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS90cmFzaC9jb250YWN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3ZlbmRvci9hcGkvdHJhc2gvY29udGFjdC5qcz8yMTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiQC91dGlscy9yZXF1ZXN0XCI7XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb250YWN0c0FwaShwYWdlKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL3RyYXNoLWNvbnRhY3RzP3BhZ2U9XCIuY29uY2F0KHBhZ2UgfHwgMSksXG4gICAgbWV0aG9kOiBcImdldFwiXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvbnRhY3RzQXBpKGlkcykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi90cmFzaC1jb250YWN0cy90cmFzaFwiLFxuICAgIG1ldGhvZDogXCJkZWxldGVcIixcbiAgICBkYXRhOiB7XG4gICAgICBpZHM6IGlkc1xuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVjeWNsZUNvbnRhY3RzQXBpKGlkcykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi90cmFzaC1jb250YWN0cy9yZWN5Y2xlXCIsXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBkYXRhOiB7XG4gICAgICBpZHM6IGlkc1xuICAgIH1cbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/vendor/api/trash/contact.js\n");

/***/ }),

/***/ "./resources/vendor/utils/request.js":
/*!*******************************************!*\
  !*** ./resources/vendor/utils/request.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/token */ \"./resources/vendor/utils/token.js\");\n\n\n\n ///create configuration of request api\n\nvar service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  //set url MIX_BASE_API variable from .env   \n  baseURL: \"/api\",\n  //timeout of request 10s\n  timeout: 30000\n}); //config before request is handling\n\nservice.interceptors.request.use(function (config) {\n  ///config request with adding token access\n  var token = Object(_utils_token__WEBPACK_IMPORTED_MODULE_1__[\"getToken\"])();\n  if (token) config.headers[\"Authorization\"] = \"Bearer \".concat(token);\n  return config;\n}, function (error) {\n  return Promise.reject(error.response);\n}); //config before response is handling\n\nservice.interceptors.response.use(function (response) {\n  //if response has token then set token to cookie and return data of response\n  if (response.headers.Authorization) {\n    Object(_utils_token__WEBPACK_IMPORTED_MODULE_1__[\"setToken\"])(response.headers.Authorization);\n    response.data.token = response.headers.Authorization;\n  }\n\n  return response.data;\n}, function (error) {\n  return Promise.reject(error.response);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL3V0aWxzL3JlcXVlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL3V0aWxzL3JlcXVlc3QuanM/NzNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0VG9rZW4sIHNldFRva2VuIH0gZnJvbSBcIkAvdXRpbHMvdG9rZW5cIjsgLy8vY3JlYXRlIGNvbmZpZ3VyYXRpb24gb2YgcmVxdWVzdCBhcGlcblxudmFyIHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICAvL3NldCB1cmwgTUlYX0JBU0VfQVBJIHZhcmlhYmxlIGZyb20gLmVudiAgIFxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5NSVhfQkFTRV9BUEksXG4gIC8vdGltZW91dCBvZiByZXF1ZXN0IDEwc1xuICB0aW1lb3V0OiAzMDAwMFxufSk7IC8vY29uZmlnIGJlZm9yZSByZXF1ZXN0IGlzIGhhbmRsaW5nXG5cbnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgLy8vY29uZmlnIHJlcXVlc3Qgd2l0aCBhZGRpbmcgdG9rZW4gYWNjZXNzXG4gIHZhciB0b2tlbiA9IGdldFRva2VuKCk7XG4gIGlmICh0b2tlbikgY29uZmlnLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKTtcbiAgcmV0dXJuIGNvbmZpZztcbn0sIGZ1bmN0aW9uIChlcnJvcikge1xuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UpO1xufSk7IC8vY29uZmlnIGJlZm9yZSByZXNwb25zZSBpcyBoYW5kbGluZ1xuXG5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vaWYgcmVzcG9uc2UgaGFzIHRva2VuIHRoZW4gc2V0IHRva2VuIHRvIGNvb2tpZSBhbmQgcmV0dXJuIGRhdGEgb2YgcmVzcG9uc2VcbiAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuQXV0aG9yaXphdGlvbikge1xuICAgIHNldFRva2VuKHJlc3BvbnNlLmhlYWRlcnMuQXV0aG9yaXphdGlvbik7XG4gICAgcmVzcG9uc2UuZGF0YS50b2tlbiA9IHJlc3BvbnNlLmhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/vendor/utils/request.js\n");

/***/ })

}]);