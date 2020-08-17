(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./resources/vendor/views/setting/validate.js":
/*!****************************************************!*\
  !*** ./resources/vendor/views/setting/validate.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("email", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("integer", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_spaces", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_spaces"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_dash", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("alpha_num", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("size", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["size"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("mimes", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["mimes"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("required", _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"], {
  message: "This field is required "
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])("min", _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"], {
  message: "password should be minimum 8 characters "
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"], {
  message: 'Password confirmation does not match'
}));
/* harmony default export */ __webpack_exports__["default"] = ({
  required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"],
  email: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"],
  min: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"],
  confirmed: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"],
  integer: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"],
  alpha_spaces: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_spaces"],
  alpha_num: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"],
  alpha_dash: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"],
  size: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["size"],
  mimes: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["mimes"]
});

/***/ })

}]);