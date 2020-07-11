(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/vendor/api/contact/search.js":
/*!************************************************!*\
  !*** ./resources/vendor/api/contact/search.js ***!
  \************************************************/
/*! exports provided: globalSearchContactApi, trashGlobalSearchContactApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalSearchContactApi\", function() { return globalSearchContactApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trashGlobalSearchContactApi\", function() { return trashGlobalSearchContactApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n\n\n\nfunction globalSearchContactApi(_ref, page) {\n  var c_query = _ref.c_query;\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/contacts-g-q-search/\".concat(c_query, \"?page=\").concat(page || 1),\n    method: \"get\"\n  });\n}\nfunction trashGlobalSearchContactApi(_ref2, page) {\n  var c_query = _ref2.c_query;\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/trash-contacts-g-q-search/\".concat(c_query, \"?page=\").concat(page || 1),\n    method: \"get\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9jb250YWN0L3NlYXJjaC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy92ZW5kb3IvYXBpL2NvbnRhY3Qvc2VhcmNoLmpzPzNhOGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZXF1ZXN0IGZyb20gXCJAL3V0aWxzL3JlcXVlc3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBnbG9iYWxTZWFyY2hDb250YWN0QXBpKF9yZWYsIHBhZ2UpIHtcbiAgdmFyIGNfcXVlcnkgPSBfcmVmLmNfcXVlcnk7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICB1cmw6IFwiL2NvbnRhY3RzLWctcS1zZWFyY2gvXCIuY29uY2F0KGNfcXVlcnksIFwiP3BhZ2U9XCIpLmNvbmNhdChwYWdlIHx8IDEpLFxuICAgIG1ldGhvZDogXCJnZXRcIlxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFzaEdsb2JhbFNlYXJjaENvbnRhY3RBcGkoX3JlZjIsIHBhZ2UpIHtcbiAgdmFyIGNfcXVlcnkgPSBfcmVmMi5jX3F1ZXJ5O1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi90cmFzaC1jb250YWN0cy1nLXEtc2VhcmNoL1wiLmNvbmNhdChjX3F1ZXJ5LCBcIj9wYWdlPVwiKS5jb25jYXQocGFnZSB8fCAxKSxcbiAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/vendor/api/contact/search.js\n");

/***/ })

}]);