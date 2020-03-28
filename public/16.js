(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/vendor/api/mail/index.js":
/*!********************************************!*\
  !*** ./resources/vendor/api/mail/index.js ***!
  \********************************************/
/*! exports provided: send, confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"send\", function() { return send; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return confirm; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\"use strict\";\n\n\nfunction send(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/mail-send/\".concat(id),\n    method: \"post\"\n  });\n}\nfunction confirm(id, code) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/mail-confirmation/\".concat(id),\n    method: \"post\",\n    data: {\n      code: code\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9tYWlsL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3ZlbmRvci9hcGkvbWFpbC9pbmRleC5qcz81MjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZXF1ZXN0IGZyb20gXCJAL3V0aWxzL3JlcXVlc3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBzZW5kKGlkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL21haWwtc2VuZC9cIi5jb25jYXQoaWQpLFxuICAgIG1ldGhvZDogXCJwb3N0XCJcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29uZmlybShpZCwgY29kZSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi9tYWlsLWNvbmZpcm1hdGlvbi9cIi5jb25jYXQoaWQpLFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgZGF0YToge1xuICAgICAgY29kZTogY29kZVxuICAgIH1cbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/vendor/api/mail/index.js\n");

/***/ })

}]);