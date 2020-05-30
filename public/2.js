(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/vendor/api/mail/index.js":
/*!********************************************!*\
  !*** ./resources/vendor/api/mail/index.js ***!
  \********************************************/
/*! exports provided: send, confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"send\", function() { return send; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return confirm; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction send(id, resend) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/mail-send/\".concat(id),\n    method: \"post\",\n    data: {\n      resend: resend\n    }\n  });\n}\nfunction confirm(id, code) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/mail-confirmation/\".concat(id),\n    method: \"post\",\n    data: {\n      code: code\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9tYWlsL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3ZlbmRvci9hcGkvbWFpbC9pbmRleC5qcz81MjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiQC91dGlscy9yZXF1ZXN0XCI7XG5leHBvcnQgZnVuY3Rpb24gc2VuZChpZCwgcmVzZW5kKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL21haWwtc2VuZC9cIi5jb25jYXQoaWQpLFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgZGF0YToge1xuICAgICAgcmVzZW5kOiByZXNlbmRcbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm0oaWQsIGNvZGUpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCIvbWFpbC1jb25maXJtYXRpb24vXCIuY29uY2F0KGlkKSxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGNvZGU6IGNvZGVcbiAgICB9XG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/vendor/api/mail/index.js\n");

/***/ })

}]);