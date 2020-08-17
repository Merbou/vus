(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/vendor/api/user/privilege/permission.js":
/*!***********************************************************!*\
  !*** ./resources/vendor/api/user/privilege/permission.js ***!
  \***********************************************************/
/*! exports provided: fetchPermissionsApi, storePermissionsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPermissionsApi", function() { return fetchPermissionsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storePermissionsApi", function() { return storePermissionsApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchPermissionsApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/permissions",
    method: "get"
  });
}
function storePermissionsApi(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/permissions",
    method: "post",
    data: data
  });
}

/***/ })

}]);