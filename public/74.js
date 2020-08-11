(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./resources/vendor/api/user/account.js":
/*!**********************************************!*\
  !*** ./resources/vendor/api/user/account.js ***!
  \**********************************************/
/*! exports provided: fetchUsersApi, blockUserApi, updateUserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsersApi\", function() { return fetchUsersApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockUserApi\", function() { return blockUserApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserApi\", function() { return updateUserApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction fetchUsersApi(page) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/users?page=\".concat(page || 1),\n    method: \"get\"\n  });\n}\nfunction blockUserApi(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/block-account/\".concat(id),\n    method: \"put\"\n  });\n}\nfunction updateUserApi(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"update-user\",\n    method: 'post',\n    data: data,\n    headers: {\n      'Content-Type': 'multipart/form-data'\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS91c2VyL2FjY291bnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS91c2VyL2FjY291bnQuanM/ZGU3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcnNBcGkocGFnZSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi91c2Vycz9wYWdlPVwiLmNvbmNhdChwYWdlIHx8IDEpLFxuICAgIG1ldGhvZDogXCJnZXRcIlxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBibG9ja1VzZXJBcGkoaWQpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCIvYmxvY2stYWNjb3VudC9cIi5jb25jYXQoaWQpLFxuICAgIG1ldGhvZDogXCJwdXRcIlxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVc2VyQXBpKGRhdGEpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCJ1cGRhdGUtdXNlclwiLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgIH1cbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/vendor/api/user/account.js\n");

/***/ }),

/***/ "./resources/vendor/utils/request.js":
/*!*******************************************!*\
  !*** ./resources/vendor/utils/request.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/token */ \"./resources/vendor/utils/token.js\");\n\n\n\n ///create configuration of request api\n\nvar service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  //set url MIX_BASE_API variable from .env   \n  baseURL: \"/api\",\n  //timeout of request 10s\n  timeout: 30000\n}); //config before request is handling\n\nservice.interceptors.request.use(function (config) {\n  ///config request with adding token access\n  var token = Object(_utils_token__WEBPACK_IMPORTED_MODULE_1__[\"getToken\"])();\n  var socketId = window.Echo && window.Echo.socketId();\n  if (token) config.headers[\"Authorization\"] = \"Bearer \".concat(token);\n  if (socketId) config.headers['X-Socket-ID'] = socketId; // Echo instance\n\n  return config;\n}, function (error) {\n  return Promise.reject(error.response);\n}); //config before response is handling\n\nservice.interceptors.response.use(function (response) {\n  //if response has token then set token to cookie and return data of response\n  if (response.headers.Authorization) {\n    Object(_utils_token__WEBPACK_IMPORTED_MODULE_1__[\"setToken\"])(response.headers.Authorization);\n    response.data.token = response.headers.Authorization;\n  }\n\n  return response.data;\n}, function (error) {\n  return Promise.reject(error.response);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL3V0aWxzL3JlcXVlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL3V0aWxzL3JlcXVlc3QuanM/NzNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0VG9rZW4sIHNldFRva2VuIH0gZnJvbSBcIkAvdXRpbHMvdG9rZW5cIjsgLy8vY3JlYXRlIGNvbmZpZ3VyYXRpb24gb2YgcmVxdWVzdCBhcGlcblxudmFyIHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICAvL3NldCB1cmwgTUlYX0JBU0VfQVBJIHZhcmlhYmxlIGZyb20gLmVudiAgIFxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5NSVhfQkFTRV9BUEksXG4gIC8vdGltZW91dCBvZiByZXF1ZXN0IDEwc1xuICB0aW1lb3V0OiAzMDAwMFxufSk7IC8vY29uZmlnIGJlZm9yZSByZXF1ZXN0IGlzIGhhbmRsaW5nXG5cbnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgLy8vY29uZmlnIHJlcXVlc3Qgd2l0aCBhZGRpbmcgdG9rZW4gYWNjZXNzXG4gIHZhciB0b2tlbiA9IGdldFRva2VuKCk7XG4gIHZhciBzb2NrZXRJZCA9IHdpbmRvdy5FY2hvICYmIHdpbmRvdy5FY2hvLnNvY2tldElkKCk7XG4gIGlmICh0b2tlbikgY29uZmlnLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKTtcbiAgaWYgKHNvY2tldElkKSBjb25maWcuaGVhZGVyc1snWC1Tb2NrZXQtSUQnXSA9IHNvY2tldElkOyAvLyBFY2hvIGluc3RhbmNlXG5cbiAgcmV0dXJuIGNvbmZpZztcbn0sIGZ1bmN0aW9uIChlcnJvcikge1xuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UpO1xufSk7IC8vY29uZmlnIGJlZm9yZSByZXNwb25zZSBpcyBoYW5kbGluZ1xuXG5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vaWYgcmVzcG9uc2UgaGFzIHRva2VuIHRoZW4gc2V0IHRva2VuIHRvIGNvb2tpZSBhbmQgcmV0dXJuIGRhdGEgb2YgcmVzcG9uc2VcbiAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuQXV0aG9yaXphdGlvbikge1xuICAgIHNldFRva2VuKHJlc3BvbnNlLmhlYWRlcnMuQXV0aG9yaXphdGlvbik7XG4gICAgcmVzcG9uc2UuZGF0YS50b2tlbiA9IHJlc3BvbnNlLmhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/vendor/utils/request.js\n");

/***/ })

}]);