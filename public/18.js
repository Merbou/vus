(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/vendor/api/chat/room.js":
/*!*******************************************!*\
  !*** ./resources/vendor/api/chat/room.js ***!
  \*******************************************/
/*! exports provided: fetchRoomsApi, fetchRoomApi, createRoomsApi, quitRoomApi, kickRoomApi, inviteRoomApi, searchRoomsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoomsApi", function() { return fetchRoomsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoomApi", function() { return fetchRoomApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoomsApi", function() { return createRoomsApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quitRoomApi", function() { return quitRoomApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kickRoomApi", function() { return kickRoomApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteRoomApi", function() { return inviteRoomApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRoomsApi", function() { return searchRoomsApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");



function fetchRoomsApi(page) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/rooms?page=".concat(page || 1),
    method: "get"
  });
}
function fetchRoomApi(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/room/".concat(id),
    method: "get"
  });
}
function createRoomsApi(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/create-room",
    method: "post",
    data: data
  });
}
function quitRoomApi(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/quit-room/".concat(id),
    method: "post"
  });
}
function kickRoomApi(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/kick-room/".concat(id),
    method: "post",
    data: data
  });
}
function inviteRoomApi(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/invite-room/".concat(id),
    method: "post",
    data: data
  });
}
function searchRoomsApi(_ref, page) {
  var r_query = _ref.r_query;
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/room-q-search/".concat(r_query, "?page=").concat(page || 1),
    method: "get"
  });
}

/***/ })

}]);