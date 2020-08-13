(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/vendor/api/trash/contact.js":
/*!***********************************************!*\
  !*** ./resources/vendor/api/trash/contact.js ***!
  \***********************************************/
/*! exports provided: fetchContactsApi, deleteContactsApi, recycleContactsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContactsApi", function() { return fetchContactsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContactsApi", function() { return deleteContactsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recycleContactsApi", function() { return recycleContactsApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchContactsApi(page) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/trash-contacts?page=".concat(page || 1),
    method: "get"
  });
}
function deleteContactsApi(ids) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/trash-contacts/trash",
    method: "delete",
    data: {
      ids: ids
    }
  });
}
function recycleContactsApi(ids) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/trash-contacts/recycle",
    method: "post",
    data: {
      ids: ids
    }
  });
}

/***/ })

}]);