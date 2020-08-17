(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/vendor/api/user/chart.js":
/*!********************************************!*\
  !*** ./resources/vendor/api/user/chart.js ***!
  \********************************************/
/*! exports provided: fetchAccountCountApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccountCountApi", function() { return fetchAccountCountApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchAccountCountApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/count-account",
    method: "get"
  });
}

/***/ })

}]);