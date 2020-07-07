(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/vendor/api/chat/message.js":
/*!**********************************************!*\
  !*** ./resources/vendor/api/chat/message.js ***!
  \**********************************************/
/*! exports provided: fetchMessagesApi, viewMessagesApi, fetchViewsMessagesApi, sendMessagesApi, editMessagesApi, deleteMessagesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchMessagesApi\", function() { return fetchMessagesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewMessagesApi\", function() { return viewMessagesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchViewsMessagesApi\", function() { return fetchViewsMessagesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMessagesApi\", function() { return sendMessagesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editMessagesApi\", function() { return editMessagesApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteMessagesApi\", function() { return deleteMessagesApi; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./resources/vendor/utils/request.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar cancel_token = axios__WEBPACK_IMPORTED_MODULE_1__[\"CancelToken\"];\nfunction fetchMessagesApi(page, id) {\n  var source = cancel_token.source();\n  return {\n    _httpCancel: source,\n    request: Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      url: \"/messages/\".concat(id, \"?page=\").concat(page || 1),\n      method: \"get\",\n      cancelToken: source.token\n    })\n  };\n}\nfunction viewMessagesApi(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/view-messages/\".concat(id),\n    method: \"get\"\n  });\n}\nfunction fetchViewsMessagesApi() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/messages-view-count\",\n    method: \"get\"\n  });\n} // export function typingMessagesApi(id, room_id) {\n//     return request({\n//         url: `/typing-messages/${id}/${room_id}`,\n//         method: \"get\",\n//     })\n// }\n\nfunction sendMessagesApi(id, data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"/message/\".concat(id),\n    method: \"post\",\n    data: data\n  });\n}\nfunction editMessagesApi(id, data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"edit-message/\".concat(id),\n    method: 'put',\n    data: data\n  });\n}\nfunction deleteMessagesApi(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: \"destroy-message/\".concat(id),\n    method: 'delete'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9jaGF0L21lc3NhZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdmVuZG9yL2FwaS9jaGF0L21lc3NhZ2UuanM/ZWEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIkAvdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ2FuY2VsVG9rZW4gfSBmcm9tIFwiYXhpb3NcIjtcbnZhciBjYW5jZWxfdG9rZW4gPSBDYW5jZWxUb2tlbjtcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzQXBpKHBhZ2UsIGlkKSB7XG4gIHZhciBzb3VyY2UgPSBjYW5jZWxfdG9rZW4uc291cmNlKCk7XG4gIHJldHVybiB7XG4gICAgX2h0dHBDYW5jZWw6IHNvdXJjZSxcbiAgICByZXF1ZXN0OiByZXF1ZXN0KHtcbiAgICAgIHVybDogXCIvbWVzc2FnZXMvXCIuY29uY2F0KGlkLCBcIj9wYWdlPVwiKS5jb25jYXQocGFnZSB8fCAxKSxcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW5cbiAgICB9KVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdNZXNzYWdlc0FwaShpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi92aWV3LW1lc3NhZ2VzL1wiLmNvbmNhdChpZCksXG4gICAgbWV0aG9kOiBcImdldFwiXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVmlld3NNZXNzYWdlc0FwaSgpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIHVybDogXCIvbWVzc2FnZXMtdmlldy1jb3VudFwiLFxuICAgIG1ldGhvZDogXCJnZXRcIlxuICB9KTtcbn0gLy8gZXhwb3J0IGZ1bmN0aW9uIHR5cGluZ01lc3NhZ2VzQXBpKGlkLCByb29tX2lkKSB7XG4vLyAgICAgcmV0dXJuIHJlcXVlc3Qoe1xuLy8gICAgICAgICB1cmw6IGAvdHlwaW5nLW1lc3NhZ2VzLyR7aWR9LyR7cm9vbV9pZH1gLFxuLy8gICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4vLyAgICAgfSlcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlc0FwaShpZCwgZGF0YSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcIi9tZXNzYWdlL1wiLmNvbmNhdChpZCksXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBkYXRhOiBkYXRhXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRNZXNzYWdlc0FwaShpZCwgZGF0YSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcImVkaXQtbWVzc2FnZS9cIi5jb25jYXQoaWQpLFxuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgZGF0YTogZGF0YVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVNZXNzYWdlc0FwaShpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiBcImRlc3Ryb3ktbWVzc2FnZS9cIi5jb25jYXQoaWQpLFxuICAgIG1ldGhvZDogJ2RlbGV0ZSdcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/vendor/api/chat/message.js\n");

/***/ })

}]);