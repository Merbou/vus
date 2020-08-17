(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/vendor/api/chat/message.js":
/*!**********************************************!*\
  !*** ./resources/vendor/api/chat/message.js ***!
  \**********************************************/
/*! exports provided: fetchMessagesApi, viewMessagesApi, fetchViewsMessagesApi, sendMessagesApi, editMessagesApi, deleteMessagesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMessagesApi", function() { return fetchMessagesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewMessagesApi", function() { return viewMessagesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchViewsMessagesApi", function() { return fetchViewsMessagesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessagesApi", function() { return sendMessagesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editMessagesApi", function() { return editMessagesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessagesApi", function() { return deleteMessagesApi; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/vendor/utils/request.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);




var cancel_token = axios__WEBPACK_IMPORTED_MODULE_1__["CancelToken"];
function fetchMessagesApi(page, id) {
  var source = cancel_token.source();
  return {
    _httpCancel: source,
    request: Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
      url: "/messages/".concat(id, "?page=").concat(page || 1),
      method: "get",
      cancelToken: source.token
    })
  };
}
function viewMessagesApi(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/view-messages/".concat(id),
    method: "get"
  });
}
function fetchViewsMessagesApi() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/messages-view-count",
    method: "get"
  });
} // export function typingMessagesApi(id, room_id) {
//     return request({
//         url: `/typing-messages/${id}/${room_id}`,
//         method: "get",
//     })
// }

function sendMessagesApi(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/message/".concat(id),
    method: "post",
    data: data
  });
}
function editMessagesApi(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "edit-message/".concat(id),
    method: 'put',
    data: data
  });
}
function deleteMessagesApi(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "destroy-message/".concat(id),
    method: 'delete'
  });
}

/***/ })

}]);