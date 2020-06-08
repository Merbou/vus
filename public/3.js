(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/vendor/api/notification/index.js":
/*!****************************************************!*\
  !*** ./resources/vendor/api/notification/index.js ***!
  \****************************************************/
/*! exports provided: fetchNotificationsApi, storeNotificationApi, viewNotificationApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNotificationsApi\", function() { return fetchNotificationsApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeNotificationApi\", function() { return storeNotificationApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewNotificationApi\", function() { return viewNotificationApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction fetchNotificationsApi(page) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/notifications?page=\".concat(page || 1),\n    method: \"get\"\n  });\n}\nfunction storeNotificationApi(data, id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/notification/\".concat(id),\n    method: \"post\",\n    data: data\n  });\n}\nfunction viewNotificationApi() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"view-notifications\",\n    method: 'put'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9ub3RpZmljYXRpb24vaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9ub3RpZmljYXRpb24vaW5kZXguanM/NWZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTm90aWZpY2F0aW9uc0FwaShwYWdlKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL25vdGlmaWNhdGlvbnM/cGFnZT1cIi5jb25jYXQocGFnZSB8fCAxKSxcbiAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVOb3RpZmljYXRpb25BcGkoZGF0YSwgaWQpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCIvbm90aWZpY2F0aW9uL1wiLmNvbmNhdChpZCksXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBkYXRhOiBkYXRhXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdOb3RpZmljYXRpb25BcGkoKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwidmlldy1ub3RpZmljYXRpb25zXCIsXG4gICAgbWV0aG9kOiAncHV0J1xuICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/vendor/api/notification/index.js\n");

/***/ })

}]);