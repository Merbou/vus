(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/vendor/api/user/account.js":
/*!**********************************************!*\
  !*** ./resources/vendor/api/user/account.js ***!
  \**********************************************/
/*! exports provided: fetchUsersApi, blockUserApi, updateUserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersApi", function() { return fetchUsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockUserApi", function() { return blockUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserApi", function() { return updateUserApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchUsersApi(page) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/users?page=".concat(page || 1),
    method: "get"
  });
}
function blockUserApi(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/block-account/".concat(id),
    method: "put"
  });
}
function updateUserApi(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "update-user",
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ })

}]);