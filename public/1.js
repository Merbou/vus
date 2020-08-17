(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomsList */ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue");
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room */ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales */ "./resources/vendor/materiels/Chat/locales/index.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes */ "./resources/vendor/materiels/Chat/themes/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var _require = __webpack_require__(/*! ../utils/roomValidation */ "./resources/vendor/materiels/Chat/utils/roomValidation.js"),
    roomsValid = _require.roomsValid,
    partcipantsValid = _require.partcipantsValid;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "chat-container",
  components: {
    RoomsList: _RoomsList__WEBPACK_IMPORTED_MODULE_0__["default"],
    Room: _Room__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    height: {
      type: String,
      "default": "600px"
    },
    theme: {
      type: String,
      "default": "light"
    },
    styles: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    responsiveBreakpoint: {
      type: Number,
      "default": 900
    },
    singleRoom: {
      type: Boolean,
      "default": false
    },
    filterRoom: {
      type: Boolean,
      "default": true
    },
    textMessages: {
      type: Object,
      "default": null
    },
    currentUserId: {
      type: [String, Number],
      "default": ""
    },
    rooms: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    loadingRooms: {
      type: Boolean,
      "default": false
    },
    room_id: {
      type: [String, Number],
      "default": null
    },
    messages: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    messagesLoaded: {
      type: Boolean,
      "default": false
    },
    rtl: {
      type: Boolean,
      "default": false
    },
    menuActions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    messageActions: {
      type: Array,
      "default": function _default() {
        return [{
          name: "replyMessage",
          title: "Reply"
        }, {
          name: "editMessage",
          title: "Edit Message",
          onlyMe: true
        }, {
          name: "deleteMessage",
          title: "Delete Message",
          onlyMe: true
        }];
      }
    },
    showAddRoom: {
      type: Boolean,
      "default": true
    },
    showFiles: {
      type: Boolean,
      "default": true
    },
    showEmojis: {
      type: Boolean,
      "default": true
    },
    showReactionEmojis: {
      type: Boolean,
      "default": true
    },
    textFormatting: {
      type: Boolean,
      "default": true
    },
    newMessage: {
      type: Object,
      "default": null
    },
    isLastRoomList: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      room: {},
      showRoomsList: true,
      isMobile: false
    };
  },
  watch: {
    rooms: function rooms(newVal, oldVal) {
      var _this = this;

      if (newVal[0] && newVal.length !== oldVal.length) {
        if (this.room_id) {
          var room = newVal.find(function (r) {
            return r.room_id === _this.room_id;
          });
          this.fetchRoom({
            room: room
          });
        } else if (!this.isMobile) {
          this.fetchRoom({
            room: this.orderedRooms[0]
          });
        } else {
          this.showRoomsList = true;
        }
      }
    },
    room_id: {
      immediate: true,
      handler: function handler(val) {
        if (val && !this.loadingRooms && this.rooms.length) {
          var room = this.rooms.find(function (r) {
            return r.room_id === val;
          });
          this.fetchRoom({
            room: room
          });
        }
      }
    },
    _room: function _room(val) {
      if (!val) return;
      if (Object.entries(val).length === 0) return;

      if (!roomsValid(val)) {
        throw "Rooms object is not valid! Must contain room_id[String, Number], room_name[String] and users[Array]";
      }

      val.users.forEach(function (user) {
        if (!partcipantsValid(user)) {
          throw "Participants object is not valid! Must contain _id[String, Number] and username[String]";
        }
      });
    },
    newMessage: function newMessage(val) {
      this.$set(this.messages, val.index, val.message);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.updateResponsive();
    window.addEventListener("resize", function (ev) {
      if (ev.isTrusted) _this2.updateResponsive();
    });
  },
  computed: {
    t: function t() {
      return _objectSpread({}, _locales__WEBPACK_IMPORTED_MODULE_2__["default"], {}, this.textMessages);
    },
    cssVars: function cssVars() {
      var _this3 = this;

      var defaultStyles = _themes__WEBPACK_IMPORTED_MODULE_3__["defaultThemeStyles"][this.theme];
      var customStyles = {};
      Object.keys(defaultStyles).map(function (key) {
        customStyles[key] = _objectSpread({}, defaultStyles[key], {}, _this3.styles[key] || {});
      });
      return Object(_themes__WEBPACK_IMPORTED_MODULE_3__["cssThemeVars"])(customStyles);
    },
    orderedRooms: function orderedRooms() {
      return this.rooms.slice().sort(function (a, b) {
        var aVal = a.last_message || {
          date: 0
        };
        var bVal = b.last_message || {
          date: 0
        };
        return aVal.date > bVal.date ? -1 : bVal.date > aVal.date ? 1 : 0;
      });
    }
  },
  methods: {
    loadMore: function loadMore(query) {
      this.$emit("loadMore", query);
    },
    searchRoom: function searchRoom(elm) {
      this.$emit("searchRoom", elm);
    },
    updateResponsive: function updateResponsive() {
      this.isMobile = window.innerWidth < this.responsiveBreakpoint;
    },
    toggleRoomsList: function toggleRoomsList() {
      this.showRoomsList = !this.showRoomsList;
      if (this.isMobile) this.room = {};
    },
    fetchRoom: function fetchRoom(_ref) {
      var room = _ref.room;
      this.$emit("fetchRoom", {
        room: room
      });
      this.room = room; // this.fetchMessages({ reset: true });

      if (this.isMobile) this.showRoomsList = false;
    },
    roomInfo: function roomInfo() {
      this.$emit("roomInfo", this.room);
    },
    addRoom: function addRoom() {
      this.$emit("addRoom");
    },
    fetchMessages: function fetchMessages(options) {
      this.$emit("fetchMessages", {
        room: this.room,
        options: options
      });
    },
    sendMessage: function sendMessage(message) {
      this.$emit("sendMessage", _objectSpread({}, message, {
        room_id: this.room.room_id
      }));
    },
    editMessage: function editMessage(message) {
      this.$emit("editMessage", _objectSpread({}, message, {
        room_id: this.room.room_id
      }));
    },
    deleteMessage: function deleteMessage(message_id) {
      this.$emit("deleteMessage", {
        message_id: message_id,
        room_id: this.room.room_id
      });
    },
    openFile: function openFile(message) {
      this.$emit("openFile", message);
    },
    menuActionHandler: function menuActionHandler(ev) {
      this.$emit("menuActionHandler", {
        action: ev,
        room_id: this.room.room_id
      });
    },
    messageActionHandler: function messageActionHandler(ev) {
      this.$emit("messageActionHandler", _objectSpread({}, ev, {
        room_id: this.room.room_id
      }));
    },
    sendMessageReaction: function sendMessageReaction(messageReaction) {
      this.$emit("sendMessageReaction", _objectSpread({}, messageReaction, {
        room_id: this.room.room_id
      }));
    },
    typingMessage: function typingMessage(message) {
      this.$emit("typingMessage", {
        message: message,
        room_id: this.room.room_id
      });
    },
    focusMessageFrom: function focusMessageFrom() {
      this.$emit("focusMessageFrom", {
        room_id: this.room.room_id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-emoji-picker */ "./node_modules/vue-emoji-picker/dist-module/main.js");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EmojiPicker: vue_emoji_picker__WEBPACK_IMPORTED_MODULE_0___default.a,
    SvgIcon: _SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['emojiOpened', 'emojiReaction', 'roomFooterRef', 'positionTop', 'positionRight'],
  data: function data() {
    return {
      search: '',
      emojiPickerHeight: 320,
      emojiPickerTop: 0,
      emojiPickerRight: ''
    };
  },
  methods: {
    append: function append(_ref) {
      var emoji = _ref.emoji,
          emojiName = _ref.emojiName;
      this.$emit('addEmoji', {
        icon: emoji,
        name: emojiName
      });
    },
    openEmoji: function openEmoji(ev) {
      this.$emit('openEmoji', true);
      this.setEmojiPickerPosition(ev.clientY, ev.view.innerWidth, ev.view.innerHeight);
    },
    setEmojiPickerPosition: function setEmojiPickerPosition(clientY, innerWidth, innerHeight) {
      var _this = this;

      setTimeout(function () {
        var mobileSize = innerWidth < 500 || innerHeight < 700;

        if (!_this.roomFooterRef) {
          if (mobileSize) _this.emojiPickerRight = '0px';
          return;
        }

        if (mobileSize) {
          _this.emojiPickerRight = innerWidth / 2 - 120 + 'px';
          _this.emojiPickerTop = 100;
          _this.emojiPickerHeight = innerHeight - 200;
        } else {
          var roomFooterTop = _this.roomFooterRef.getBoundingClientRect().top;

          var pickerTopPosition = roomFooterTop - clientY > _this.emojiPickerHeight - 50;
          if (pickerTopPosition) _this.emojiPickerTop = clientY + 10;else _this.emojiPickerTop = clientY - _this.emojiPickerHeight - 10;
          _this.emojiPickerRight = _this.positionTop ? '-50px' : _this.positionRight ? '60px' : '';
        }
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcon */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue");
/* harmony import */ var _utils_formatString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formatString */ "./resources/vendor/materiels/Chat/utils/formatString.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'format-message',
  components: {
    SvgIcon: _SvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    content: {
      type: [String, Number],
      required: true
    },
    deleted: {
      type: Boolean,
      "default": false
    },
    formatLinks: {
      type: Boolean,
      "default": true
    },
    singleLine: {
      type: Boolean,
      "default": false
    },
    textFormatting: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    linkifiedMessage: function linkifiedMessage() {
      return Object(_utils_formatString__WEBPACK_IMPORTED_MODULE_1__["default"])(this.content, this.formatLinks);
    }
  },
  methods: {
    checkType: function checkType(message, type) {
      return message.types.indexOf(type) !== -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'loader',
  props: ['show', 'infinite']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue");
/* harmony import */ var _EmojiPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmojiPicker */ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue");
/* harmony import */ var _FormatMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatMessage */ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "message",
  components: {
    SvgIcon: _SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
    Loader: _Loader__WEBPACK_IMPORTED_MODULE_2__["default"],
    EmojiPicker: _EmojiPicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormatMessage: _FormatMessage__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  directives: {
    clickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_0___default.a.directive
  },
  props: {
    currentUserId: {
      type: [String, Number],
      required: true
    },
    textMessages: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    message: {
      type: Object,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    editedMessage: {
      type: Object,
      required: true
    },
    roomUsers: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    messageActions: {
      type: Array,
      required: true
    },
    roomFooterRef: {
      type: HTMLDivElement
    },
    newMessages: {
      type: Array
    },
    showReactionEmojis: {
      type: Boolean,
      required: true
    },
    textFormatting: {
      type: Boolean,
      required: true
    },
    emojisList: {
      type: Object,
      required: true
    },
    hideOptions: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      hoverMessageId: null,
      imageLoading: false,
      imageHover: false,
      messageHover: false,
      optionsOpened: false,
      optionsClosing: false,
      menuOptionsTop: 0,
      messageReaction: "",
      newMessage: {},
      emojiOpened: false,
      imageResponsive: ""
    };
  },
  watch: {
    message: {
      immediate: true,
      handler: function handler() {
        this.checkImgLoad();
      }
    },
    newMessages: function newMessages(val) {
      if (!val.length) return;
      this.newMessage = val.reduce(function (res, obj) {
        return obj.index < res.index ? obj : res;
      });
    },
    emojiOpened: function emojiOpened(val) {
      if (val) this.optionsOpened = false;
    },
    hideOptions: function hideOptions(val) {
      if (val) {
        this.closeEmoji();
        this.closeOptions();
      }
    }
  },
  mounted: function mounted() {
    if (!this.message.seen && this.message.sender_id === this.currentUserId) {
      this.$emit("addNewMessage", {
        _id: this.message.id,
        index: this.index
      });
    }

    this.imageResponsive = {
      maxHeight: this.$refs.imageRef.clientWidth - 18,
      loaderTop: this.$refs.imageRef.clientWidth / 2
    };
  },
  computed: {
    showDate: function showDate() {
      return this.message.date && this.index > 0 && this.message.date !== this.messages[this.index - 1].date;
    },
    messageOffset: function messageOffset() {
      return this.index > 0 && this.message.sender_id !== this.messages[this.index - 1].sender_id;
    },
    isImage: function isImage() {
      return this.checkImageFile();
    },
    isImageReply: function isImageReply() {
      return this.checkImageReplyFile();
    },
    isImageLoading: function isImageLoading() {
      return this.message.file.url.indexOf("blob:http") !== -1 || this.imageLoading;
    },
    isMessageSeen: function isMessageSeen() {
      return this.message.sender_id === this.currentUserId && this.message.seen && !this.message.deleted && !this.message.joind;
    },
    replyUsername: function replyUsername() {
      var sender_id = this.message.reply_message.sender_id;
      var replyUser = this.roomUsers.find(function (user) {
        return user.id === sender_id;
      });
      return replyUser ? replyUser.username : "";
    },
    isMessageActions: function isMessageActions() {
      return this.filteredMessageActions.length && this.messageHover && !this.message.deleted && !this.message.joind && !this.message.disable_actions;
    },
    isMessageReactions: function isMessageReactions() {
      return this.showReactionEmojis && this.messageHover && !this.message.deleted && !this.message.joind && !this.message.disable_reactions;
    },
    filteredMessageActions: function filteredMessageActions() {
      return this.message.sender_id === this.currentUserId ? this.messageActions : this.messageActions.filter(function (message) {
        return !message.onlyMe;
      });
    }
  },
  methods: {
    isMessageHover: function isMessageHover() {
      return this.editedMessage.id === this.message.id || this.hoverMessageId === this.message.id;
    },
    onHoverMessage: function onHoverMessage() {
      this.imageHover = true;
      this.messageHover = true;
      if (this.canEditMessage()) this.hoverMessageId = this.message.id;
    },
    canEditMessage: function canEditMessage() {
      return !this.message.deleted && !this.message.joind;
    },
    onLeaveMessage: function onLeaveMessage() {
      this.imageHover = false;
      if (!this.optionsOpened && !this.emojiOpened) this.messageHover = false;
      this.hoverMessageId = null;
    },
    openFile: function openFile() {
      this.$emit("openFile", this.message);
    },
    messageActionHandler: function messageActionHandler(action) {
      var _this = this;

      this.closeOptions();
      this.messageHover = false;
      this.hoverMessageId = null;
      setTimeout(function () {
        _this.$emit("messageActionHandler", {
          action: action,
          message: _this.message
        });
      }, 300);
    },
    checkImageFile: function checkImageFile() {
      return this.checkImageType(this.message.file);
    },
    checkImageReplyFile: function checkImageReplyFile() {
      return this.checkImageType(this.message.reply_message.file);
    },
    checkImageType: function checkImageType(file) {
      if (!file) return;
      var imageTypes = ["png", "jpg", "jpeg", "svg"];
      var type = file.type;
      return imageTypes.some(function (t) {
        return type.includes(t);
      });
    },
    checkImgLoad: function checkImgLoad() {
      var _this2 = this;

      if (!this.checkImageFile()) return;
      this.imageLoading = true;
      var image = new Image();
      image.src = this.message.file.url;
      image.addEventListener("load", function () {
        return _this2.imageLoading = false;
      });
    },
    canDropDown: function canDropDown() {
      return this.optionsOpened && !this.message.deleted && !this.message.joind;
    },
    openOptions: function openOptions() {
      var _this3 = this;

      if (this.optionsClosing) return;
      this.optionsOpened = !this.optionsOpened;
      if (!this.optionsOpened) return;
      this.$emit("hideOptions", false);
      setTimeout(function () {
        if (!_this3.roomFooterRef || !_this3.$refs.menuOptions || !_this3.$refs.actionIcon) return;

        var menuOptionsTop = _this3.$refs.menuOptions.getBoundingClientRect().height;

        var actionIconTop = _this3.$refs.actionIcon.getBoundingClientRect().top;

        var roomFooterTop = _this3.roomFooterRef.getBoundingClientRect().top;

        var optionsTopPosition = roomFooterTop - actionIconTop > menuOptionsTop + 50;
        if (optionsTopPosition) _this3.menuOptionsTop = 30;else _this3.menuOptionsTop = -menuOptionsTop;
      }, 0);
    },
    closeOptions: function closeOptions() {
      var _this4 = this;

      this.optionsOpened = false;
      this.optionsClosing = true;
      setTimeout(function () {
        return _this4.optionsClosing = false;
      }, 100);
      if (this.hoverMessageId !== this.message.id) this.messageHover = false;
    },
    openEmoji: function openEmoji() {
      this.emojiOpened = !this.emojiOpened;
      this.$emit("hideOptions", false);
    },
    closeEmoji: function closeEmoji() {
      this.emojiOpened = false;
      if (this.hoverMessageId !== this.message.id) this.messageHover = false;
    },
    getEmojiByName: function getEmojiByName(emojiName) {
      return this.emojisList[emojiName];
    },
    sendMessageReaction: function sendMessageReaction(emoji, reaction) {
      this.$emit("sendMessageReaction", {
        messageId: this.message.id,
        reaction: emoji,
        remove: reaction && reaction.indexOf(this.currentUserId) !== -1
      });
      this.closeEmoji();
      this.messageHover = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-infinite-loading */ "./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js");
/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_emoji_picker_src_emojis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-emoji-picker/src/emojis */ "./node_modules/vue-emoji-picker/src/emojis.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader */ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Message */ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue");
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SvgIcon */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue");
/* harmony import */ var _EmojiPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmojiPicker */ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var _require = __webpack_require__(/*! ../utils/roomValidation */ "./resources/vendor/materiels/Chat/utils/roomValidation.js"),
    messagesValid = _require.messagesValid;

var _require2 = __webpack_require__(/*! ../utils/mobileDetection */ "./resources/vendor/materiels/Chat/utils/mobileDetection.js"),
    detectMobile = _require2.detectMobile;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "room",
  components: {
    InfiniteLoading: vue_infinite_loading__WEBPACK_IMPORTED_MODULE_1___default.a,
    Loader: _Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Message: _Message__WEBPACK_IMPORTED_MODULE_5__["default"],
    SvgIcon: _SvgIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
    EmojiPicker: _EmojiPicker__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  directives: {
    clickOutside: v_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a.directive
  },
  props: {
    currentUserId: {
      type: [String, Number],
      required: true
    },
    textMessages: {
      type: Object,
      required: true
    },
    singleRoom: {
      type: Boolean,
      required: true
    },
    showRoomsList: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    },
    rooms: {
      type: Array,
      required: true
    },
    room_id: {
      type: [String, Number],
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    messagesLoaded: {
      type: Boolean,
      required: true
    },
    menuActions: {
      type: Array,
      required: true
    },
    messageActions: {
      type: Array,
      required: true
    },
    showFiles: {
      type: Boolean,
      required: true
    },
    showEmojis: {
      type: Boolean,
      required: true
    },
    rtl: {
      type: Boolean,
      "default": false
    },
    showReactionEmojis: {
      type: Boolean,
      required: true
    },
    textFormatting: {
      type: Boolean,
      required: true
    },
    loadingRooms: {
      type: Boolean,
      required: true
    },
    roomInfo: {
      type: Function
    }
  },
  data: function data() {
    return {
      message: "",
      editedMessage: {},
      messageReply: null,
      infiniteState: null,
      loadingMessages: false,
      loadingMoreMessages: false,
      file: null,
      imageFile: null,
      imageDimensions: null,
      menuOpened: false,
      emojiOpened: false,
      emojisList: {},
      hideOptions: true,
      scrollIcon: false,
      newMessages: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.newMessages = [];
    window.addEventListener("keyup", function (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        if (detectMobile()) {
          _this.message = _this.message + "\n";
          setTimeout(function () {
            return _this.onChangeInput();
          }, 0);
        } else {
          _this.sendMessage();
        }
      }
    });
    this.$refs.scrollContainer.addEventListener("scroll", function (e) {
      _this.hideOptions = true;
      setTimeout(function () {
        _this.scrollIcon = e.target.scrollHeight > 500 && e.target.scrollHeight - e.target.scrollTop > 1000;
      }, 200);
    });
    var emojisTable = Object.keys(vue_emoji_picker_src_emojis__WEBPACK_IMPORTED_MODULE_3__["default"]).map(function (key) {
      return vue_emoji_picker_src_emojis__WEBPACK_IMPORTED_MODULE_3__["default"][key];
    });
    this.emojisList = Object.assign.apply(Object, [{}].concat(_toConsumableArray(emojisTable)));
  },
  watch: {
    loadingMessages: function loadingMessages(val) {
      if (val) this.infiniteState = null;else this.focusTextarea(true);
    },
    room: function room(newVal, oldVal) {
      if (newVal.room_id && newVal.room_id !== oldVal.room_id) {
        this.loadingMessages = true;
        this.scrollIcon = false;
        this.resetMessage(true);
      }
    },
    messages: function messages(newVal, oldVal) {
      var _this2 = this;

      newVal.forEach(function (message) {
        if (!messagesValid(message)) {
          throw "Messages object is not valid! Must contain id[String, Number], content[String, Number] and sender_id[String, Number]";
        }
      });
      var element = this.$refs.scrollContainer;
      if (!element) return;
      var options = {
        top: element.scrollHeight
      };

      if (oldVal && newVal && oldVal.length === newVal.length - 1) {
        return setTimeout(function () {
          options.behavior = "smooth";
          element.scrollTo(options);
        }, 50);
      }

      if (this.infiniteState) {
        this.infiniteState.loaded();
        setTimeout(function () {
          return _this2.loadingMoreMessages = false;
        }, 0);
      } else if (newVal.length) {
        setTimeout(function () {
          element.scrollTo(options);
          _this2.loadingMessages = false;
        }, 0);
      }
    },
    messagesLoaded: function messagesLoaded(val) {
      if (val) this.loadingMessages = false;
      if (this.infiniteState) this.infiniteState.complete();
    },
    imageFile: function imageFile() {
      var _this3 = this;

      setTimeout(function () {
        if (!_this3.$refs.imageFile) {
          _this3.imageDimensions = null;
          setTimeout(function () {
            return _this3.resizeTextarea();
          }, 0);
        } else {
          var height = _this3.$refs.imageFile.height;
          if (height < 30) height = 30;
          _this3.imageDimensions = {
            height: _this3.$refs.imageFile.height - 10,
            width: _this3.$refs.imageFile.width + 26
          };
        }
      }, 20);
    }
  },
  computed: {
    room: function room() {
      var _this4 = this;

      return this.rooms.find(function (room) {
        return room.room_id === _this4.room_id;
      }) || {};
    },
    showNoMessages: function showNoMessages() {
      return this.room.room_id && !this.messages.length && !this.loadingMessages && !this.loadingRooms;
    },
    showMessagesStarted: function showMessagesStarted() {
      return this.messages.length && this.messagesLoaded;
    },
    inputDisabled: function inputDisabled() {
      return this.isMessageEmpty();
    },
    typingUsers: function typingUsers() {
      var _this5 = this;

      if (!this.room.typingUsers) return;
      var typingUsers = this.room.users.filter(function (user) {
        if (user.id === _this5.currentUserId) return;
        if (_this5.room.typingUsers.indexOf(user.id) === -1) return; // if (user.status && user.status.state === 'offline') return

        return true;
      });
      return typingUsers.map(function (user) {
        return user.username;
      }).join(", ");
    },
    userStatus: function userStatus() {
      var _this6 = this;

      if (!this.room.users || this.room.users.length !== 2) return;
      var user = this.room.users.find(function (u) {
        return u.id !== _this6.currentUserId;
      });
      if (!user.status) return;
      var text = "";

      if (user.status.state === "online") {
        text = this.textMessages.IS_ONLINE;
      } else if (user.status.last_changed) {
        text = this.textMessages.LAST_SEEN + user.status.last_changed;
      }

      return text;
    }
  },
  methods: {
    addNewMessage: function addNewMessage(message) {
      this.newMessages.push(message);
    },
    resetMessage: function resetMessage() {
      var _this7 = this;

      var disableMobileFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var editFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.$emit("typingMessage", null);

      if (editFile) {
        this.file = null;
        this.message = "";
        return;
      }

      this.resetTextareaSize();
      this.message = "";
      this.editedMessage = {};
      this.messageReply = null;
      this.file = null;
      this.imageFile = null;
      this.emojiOpened = false;
      setTimeout(function () {
        return _this7.focusTextarea(disableMobileFocus);
      }, 0);
    },
    resetImageFile: function resetImageFile() {
      this.imageFile = null;
      this.editedMessage.file = null;
      this.file = null;
      this.focusTextarea();
    },
    resetTextareaSize: function resetTextareaSize() {
      if (!this.$refs["roomTextarea"]) return;
      this.$refs["roomTextarea"].style.height = "20px";
    },
    focusTextarea: function focusTextarea(disableMobileFocus) {
      if (detectMobile() && disableMobileFocus) return;
      this.$refs["roomTextarea"] && this.$refs["roomTextarea"].focus();
    },
    isMessageEmpty: function isMessageEmpty() {
      return !this.file && !this.message.trim();
    },
    sendMessage: function sendMessage() {
      if (!this.file && !this.message.trim()) return;

      if (this.editedMessage.id) {
        if (this.editedMessage.content !== this.message || this.file) {
          this.$emit("editMessage", {
            message_id: this.editedMessage.id,
            new_content: this.message.trim(),
            file: this.file,
            reply_message: this.messageReply
          });
        }
      } else {
        this.$emit("sendMessage", {
          content: this.message.trim(),
          file: this.file,
          reply_message: this.messageReply
        });
      }

      this.resetMessage(true);
    },
    loadMoreMessages: function loadMoreMessages(infiniteState) {
      if (this.loadingMoreMessages) return;

      if (this.messagesLoaded || !this.room.room_id) {
        return infiniteState.complete();
      }

      this.infiniteState = infiniteState;
      this.$emit("fetchMessages");
      this.loadingMoreMessages = true;
    },
    messageActionHandler: function messageActionHandler(_ref) {
      var action = _ref.action,
          message = _ref.message;

      switch (action.name) {
        case "replyMessage":
          return this.reply_message(message);

        case "editMessage":
          return this.editMessage(message);

        case "deleteMessage":
          return this.$emit("deleteMessage", message.id);

        default:
          return this.$emit("messageActionHandler", {
            action: action,
            message: message
          });
      }
    },
    sendMessageReaction: function sendMessageReaction(messageReaction) {
      this.$emit("sendMessageReaction", messageReaction);
    },
    reply_message: function reply_message(message) {
      this.resetMessage();
      this.messageReply = message;
    },
    editMessage: function editMessage(message) {
      var _this8 = this;

      this.resetMessage();
      this.editedMessage = _objectSpread({}, message);
      this.file = message.file;
      if (this.isImageCheck(this.file)) this.imageFile = message.file.url;
      this.message = message.content;
      setTimeout(function () {
        return _this8.resizeTextarea();
      }, 0);
    },
    scrollToBottom: function scrollToBottom() {
      var element = this.$refs.scrollContainer;
      element.scrollTo({
        top: element.scrollHeight,
        behavior: "smooth"
      });
    },
    onChangeInput: function onChangeInput() {
      this.resizeTextarea();
      this.$emit("typingMessage", this.message);
    },
    focusMessageFrom: function focusMessageFrom() {
      this.$emit("focusMessageFrom");
    },
    resizeTextarea: function resizeTextarea() {
      var el = this.$refs["roomTextarea"];
      var padding = window.getComputedStyle(el, null).getPropertyValue("padding-top").replace("px", "");
      el.style.height = 0;
      el.style.height = el.scrollHeight - padding * 2 + "px";
    },
    addEmoji: function addEmoji(emoji) {
      this.message += emoji.icon;
      this.focusTextarea(true);
    },
    launchFilePicker: function launchFilePicker() {
      this.$refs.file.value = "";
      this.$refs.file.click();
    },
    onFileChange: function onFileChange(files) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var file, fileURL, blobFile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this9.resetImageFile();

                file = files[0];
                fileURL = URL.createObjectURL(file);
                _context.next = 5;
                return fetch(fileURL).then(function (res) {
                  return res.blob();
                });

              case 5:
                blobFile = _context.sent;
                _this9.file = {
                  blob: blobFile,
                  name: file.name.split(".")[0],
                  size: file.size,
                  type: file.name.split(".")[1] || file.type,
                  localUrl: fileURL
                };
                if (_this9.isImageCheck(_this9.file)) _this9.imageFile = fileURL;else _this9.message = file.name;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    isImageCheck: function isImageCheck(file) {
      if (!file) return;
      var imageTypes = ["png", "jpg", "jpeg", "svg"];
      var type = file.type;
      return imageTypes.some(function (t) {
        return type.includes(t);
      });
    },
    openFile: function openFile(message) {
      this.$emit("openFile", message);
    },
    menuActionHandler: function menuActionHandler(action) {
      this.closeMenu();
      this.$emit("menuActionHandler", action);
    },
    closeMenu: function closeMenu() {
      this.menuOpened = false;
    },
    nameFromUsers: function nameFromUsers(_users) {
      var _this10 = this;

      if (!_users || !_users.length) return;

      var _usersWithOutCurrent = _toConsumableArray(_users).filter(function (e) {
        return e.id !== _this10.currentUserId;
      });

      return _usersWithOutCurrent && _usersWithOutCurrent.reduce(function (acc, curr) {
        return acc + "," + curr.username;
      }, "").substring(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue");
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue");
/* harmony import */ var _FormatMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatMessage */ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue");
/* harmony import */ var _utils_filterItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filterItems */ "./resources/vendor/materiels/Chat/utils/filterItems.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "rooms-list",
  components: {
    Loader: _Loader__WEBPACK_IMPORTED_MODULE_0__["default"],
    SvgIcon: _SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormatMessage: _FormatMessage__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    currentUserId: {
      type: [String, Number],
      required: true
    },
    textMessages: {
      type: Object,
      required: true
    },
    showRoomsList: {
      type: Boolean,
      required: true
    },
    filterRoom: {
      type: Boolean,
      "default": true
    },
    showAddRoom: {
      type: Boolean,
      required: true
    },
    textFormatting: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    },
    rooms: {
      type: Array,
      required: true
    },
    loadingRooms: {
      type: Boolean,
      required: true
    },
    isLastRoomList: {
      type: Boolean,
      required: true
    },
    room: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      filteredRooms: this.rooms || [],
      selectedRoomId: "",
      query: ""
    };
  },
  watch: {
    rooms: function rooms(val) {
      this.filteredRooms = val;
    },
    room: function room(val) {
      if (val) this.selectedRoomId = val.room_id;
    }
  },
  methods: {
    searchRoom: function searchRoom(ev) {
      this.query = ev.target.value;
      if (this.filterRoom) this.filteredRooms = Object(_utils_filterItems__WEBPACK_IMPORTED_MODULE_3__["default"])(this.rooms, "room_name", this.query);
      this.$emit("searchRoom", {
        pattern: this.query,
        rooms: this.filteredRooms
      });
    },
    openRoom: function openRoom(room) {
      if (room.room_id === this.room.room_id && !this.isMobile) return;
      this.selectedRoomId = room.room_id;
      this.$emit("fetchRoom", {
        room: room
      });
    },
    addRoom: function addRoom() {
      this.$emit("addRoom");
    },
    userStatus: function userStatus(room) {
      var _this = this;

      if (!room.users || room.users.length !== 2) return;
      var user = room.users.find(function (u) {
        return u.id !== _this.currentUserId;
      });
      if (user.status) return user.status.state;
    },
    getLastMessage: function getLastMessage(room) {
      var content = room.last_message.deleted ? this.textMessages.MESSAGE_DELETED : room.last_message.content;

      if (room.users.length <= 2) {
        return content;
      }

      var user = room.users.find(function (user) {
        return user.id === room.last_message.sender_id;
      });
      if (!user) return "User - ".concat(content);

      if (user.id === this.currentUserId) {
        return content;
      }

      return "".concat(user.username, " - ").concat(content);
    },
    nameFromUsers: function nameFromUsers(_users) {
      var _this2 = this;

      if (!_users || !_users.length) return;

      var _usersWithOutCurrent = _toConsumableArray(_users).filter(function (e) {
        return e.id !== _this2.currentUserId;
      });

      return _usersWithOutCurrent && _usersWithOutCurrent.reduce(function (acc, curr) {
        return acc + "," + curr.username;
      }, "").substring(1);
    },
    loadMore: function loadMore() {
      this.$emit('loadMore', {
        query: this.query
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "svg-icon",
  props: ["name", "path", "param"],
  computed: {
    svgId: function svgId() {
      var param = this.param ? "-" + this.param : "";
      return "chat-icon-".concat(this.name).concat(param);
    }
  },
  data: function data() {
    return {
      svgItem: [{
        name: "search",
        path: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
      }, {
        name: "add",
        path: "M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      }, {
        name: "toggle",
        path: "M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"
      }, {
        name: "menu",
        path: "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
      }, {
        name: "close",
        path: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
      }, {
        name: "file",
        path: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
      }, {
        name: "paperclip",
        path: "M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"
      }, {
        name: "close-outline",
        path: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
      }, {
        name: "send",
        path: "M2,21L23,12L2,3V10L17,12L2,14V21Z"
      }, {
        name: "emoji",
        path: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
      }, {
        name: "document",
        path: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
      }, {
        name: "pencil",
        path: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
      }, {
        name: "checkmark",
        path: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
      }, {
        name: "eye",
        path: "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
      }, {
        name: "dropdown",
        path: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
      }, {
        name: "deleted",
        path: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z"
      }, {
        name: "options",
        path: "M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/chat/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/chat/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _materiels_Chat_ChatWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/materiels/Chat/ChatWindow */ "./resources/vendor/materiels/Chat/ChatWindow/index.js");
/* harmony import */ var _components_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/room */ "./resources/vendor/views/chat/components/room/index.js");
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts */ "./resources/vendor/views/chat/parts/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatWindow: _materiels_Chat_ChatWindow__WEBPACK_IMPORTED_MODULE_1__["default"],
    addRoom: _components_room__WEBPACK_IMPORTED_MODULE_2__["addRoom"],
    quitRoom: _components_room__WEBPACK_IMPORTED_MODULE_2__["quitRoom"],
    removeUser: _components_room__WEBPACK_IMPORTED_MODULE_2__["removeUser"],
    inviteUser: _components_room__WEBPACK_IMPORTED_MODULE_2__["inviteUser"]
  },
  data: function data() {
    return {
      rooms: [],
      room: {},
      indexRoom: "",
      messages: [],
      loadingRooms: false,
      messagesLoaded: false,
      openAddRoom: false,
      openquitRoom: false,
      openInviteUser: false,
      openRemoveUser: false,
      _httpCancel: "",
      pagination: {
        room: {
          current_page: 1,
          last_page: 1
        },
        message: {
          current_page: 1,
          last_page: 1
        }
      },
      rooms_cache: [],
      pagination_cache: {
        current_page: 1,
        last_page: 1
      },
      menuActions: [{
        name: "quitRoom",
        title: this.$i18n.t("$menu_chat_room.quitRoom")
      }],
      messageActions: [{
        name: "replyMessage",
        title: this.$i18n.t("$menu_chat_message.replyMessage")
      }, {
        name: "editMessage",
        title: this.$i18n.t("$menu_chat_message.editMessage"),
        onlyMe: true
      }, {
        name: "deleteMessage",
        title: this.$i18n.t("$menu_chat_message.deleteMessage"),
        onlyMe: true
      }],
      textMessages: {
        ROOMS_EMPTY: this.$i18n.t("_chat.rooms_empty"),
        LOADMORE: this.$i18n.t("_chat.load_more"),
        NEW_MESSAGES: this.$i18n.t("_chat.new_messages"),
        MESSAGE_DELETED: this.$i18n.t("_chat.echo_messages_deleted"),
        MESSAGES_EMPTY: this.$i18n.t("_chat.messages_empty"),
        CONVERSATION_STARTED: this.$i18n.t("_chat.conversation_started"),
        TYPE_MESSAGE: this.$i18n.t("_chat.type_messages"),
        SEARCH: this.$i18n.t("_chat.search")
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["user", "channel", "dark", "RTL"]), {
    load_more: function load_more() {
      if (this.pagination && this.pagination.room) return this.pagination.room.current_page >= this.pagination.room.last_page;
    }
  }),
  created: function created() {
    //load the laravel-echo
    this.MessageEcho();
    this.fetchRooms();
    this.debouncedServiceSearchRoom = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"])(this.serviceSearchRoom, 500);
  },
  destroyed: function destroyed() {
    localStorage.removeItem("rooms");
  },
  methods: _objectSpread({}, _parts__WEBPACK_IMPORTED_MODULE_3__["default"])
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-spinner-enter {\n  opacity: 0;\n}\n.fade-spinner-enter-active {\n  transition: opacity 0.8s;\n}\n.fade-spinner-leave-active {\n  transition: opacity 0.2s;\n  opacity: 0;\n}\n.fade-image-enter {\n  opacity: 0;\n}\n.fade-image-enter-active {\n  transition: opacity 1s;\n}\n.fade-image-leave-active {\n  transition: opacity 0.5s;\n  opacity: 0;\n}\n.fade-message-enter {\n  opacity: 0;\n}\n.fade-message-enter-active {\n  transition: opacity 0.5s;\n}\n.fade-message-leave-active {\n  transition: opacity 0.2s;\n  opacity: 0;\n}\n.slide-left-enter-active,\n.slide-right-enter-active {\n  transition: all 0.3s ease;\n  transition-property: transform, opacity;\n}\n.slide-left-leave-active,\n.slide-right-leave-active {\n  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n  transition-property: transform, opacity;\n}\n.slide-left-enter,\n.slide-left-leave-to {\n  transform: translateX(10px);\n  opacity: 0;\n}\n.slide-right-enter,\n.slide-right-leave-to {\n  transform: translateX(-10px);\n  opacity: 0;\n}\n.slide-up-enter-active {\n  transition: all 0.3s ease;\n}\n.slide-up-leave-active {\n  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-up-enter,\n.slide-up-leave-to {\n  transform: translateY(10px);\n  opacity: 0;\n}\n.bounce-enter-active {\n  animation: bounce-in 0.5s;\n}\n.bounce-leave-active {\n  animation: bounce-in 0.3s reverse;\n}\n@keyframes bounce-in {\n0% {\n    transform: scale(0);\n}\n50% {\n    transform: scale(1.05);\n}\n100% {\n    transform: scale(1);\n}\n}\n.menu-list {\n  border-radius: 4px;\n  display: block;\n  cursor: pointer;\n  background: var(--chat-dropdown-bg-color);\n  padding: 6px 0;\n}\n.menu-list :hover {\n  background: var(--chat-dropdown-bg-color-hover);\n  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.menu-list :not(:hover) {\n  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.menu-item {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  min-height: 30px;\n  padding: 5px 16px;\n  position: relative;\n  white-space: nowrap;\n  line-height: 30px;\n}\n.menu-options {\n  position: absolute;\n  z-index: 9999;\n  zoom: 0.66;\n  top: 0px;\n  min-width: 150px;\n  display: inline-block;\n  border-radius: 4px;\n  font-size: 14px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  contain: content;\n  box-shadow: 0 2px 2px -4px rgba(0, 0, 0, 0.1), 0 2px 2px 1px rgba(0, 0, 0, 0.12), 0 1px 8px 1px rgba(0, 0, 0, 0.12);\n}\n.menu-options-left {\n  right: auto;\n  left: 10px;\n}\n.menu-options-right {\n  left: auto;\n  right: 10px;\n}\n.app-border {\n  border: var(--chat-border-style);\n}\n.app-border-t {\n  border-top: var(--chat-border-style);\n}\n.app-border-r {\n  border-right: var(--chat-border-style);\n}\n.app-border-b {\n  border-bottom: var(--chat-border-style);\n}\n.item-clickable {\n  cursor: pointer;\n}\n.vertical-center {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.vertical-center .vertical-container {\n  width: 100%;\n  text-align: center;\n}\n.svg-button {\n  max-height: 30px;\n  display: flex;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.svg-button:hover {\n  transform: scale(1);\n  opacity: 0.7;\n}\n.room-avatar {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #ddd;\n  height: 42px;\n  width: 42px;\n  margin-right: 15px;\n  border-radius: 50%;\n}\n.text-bold {\n  font-weight: bold;\n}\n.text-italic {\n  font-style: italic;\n}\n.text-strike {\n  text-decoration: line-through;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.text-inline-code {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--chat-markdown-color);\n  background: var(--chat-markdown-bg);\n  border: 1px solid var(--chat-markdown-border);\n  border-radius: 3px;\n  margin: 2px 0;\n  padding: 2px 3px;\n}\n.text-multiline-code {\n  display: block;\n  font-size: 12px;\n  color: var(--chat-markdown-color-multi);\n  background: var(--chat-markdown-bg);\n  border: 1px solid var(--chat-markdown-border);\n  border-radius: 3px;\n  margin: 4px 0;\n  padding: 7px;\n}\n* {\n  font-family: inherit;\n}\na {\n  color: #0d579c;\n}\n.card-window {\n  width: 100%;\n  display: block;\n  max-width: 100%;\n  background: var(--chat-content-bg-color);\n  color: var(--chat-color);\n  overflow-wrap: break-word;\n  position: relative;\n  white-space: normal;\n  border: var(--chat-container-border);\n  border-radius: var(--chat-container-border-radius);\n  box-shadow: var(--chat-container-box-shadow);\n}\n.chat-container {\n  height: 100%;\n  display: flex;\n}\n.chat-container textarea,\n.chat-container input[type=text],\n.chat-container input[type=search] {\n  -webkit-appearance: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper[data-v-66464796] {\n  position: relative;\n  display: flex;\n}\n.emoji-picker[data-v-66464796] {\n  position: absolute;\n  z-index: 9999;\n  bottom: 32px;\n  right: 10px;\n  width: 240px;\n  overflow: scroll;\n  padding: 16px;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  background: var(--chat-emoji-bg-color);\n  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 1px rgba(0, 0, 0, 0.1);\n}\n.picker-reaction[data-v-66464796] {\n  position: fixed;\n  top: initial;\n  right: initial;\n}\n.emoji-picker__search[data-v-66464796] {\n  display: flex;\n}\n.emoji-picker__search > input[data-v-66464796] {\n  flex: 1;\n  border-radius: 10rem;\n  border: var(--chat-border-style);\n  padding: 5px 10px;\n  outline: none;\n  background: var(--chat-bg-color-input);\n  color: var(--chat-color);\n}\n.emoji-picker h5[data-v-66464796] {\n  margin: 15px 0 8px;\n  color: #b1b1b1;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  cursor: default;\n}\n.emoji-picker .emojis[data-v-66464796] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.emoji-picker .emojis[data-v-66464796]:after {\n  content: \"\";\n  flex: auto;\n}\n.emoji-picker .emojis span[data-v-66464796] {\n  padding: 0.2rem;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.emoji-picker .emojis span[data-v-66464796]:hover {\n  background: var(--chat-sidemenu-bg-color-hover);\n  cursor: pointer;\n}\n.button-reaction svg[data-v-66464796] {\n  height: 19px;\n  width: 19px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-center[data-v-57abec61] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.container-top[data-v-57abec61] {\n  padding: 21px;\n}\n.container-top #circle[data-v-57abec61] {\n  height: 20px;\n  width: 20px;\n}\n#circle[data-v-57abec61] {\n  margin: auto;\n  height: 28px;\n  width: 28px;\n  border: 3px rgba(0, 0, 0, 0.25) solid;\n  border-top: 3px var(--chat-color-spinner) solid;\n  border-right: 3px var(--chat-color-spinner) solid;\n  border-bottom: 3px var(--chat-color-spinner) solid;\n  border-radius: 50%;\n  -webkit-animation: spin-data-v-57abec61 1s infinite linear;\n  animation: spin-data-v-57abec61 1s infinite linear;\n}\n@media only screen and (max-width: 768px) {\n#circle[data-v-57abec61] {\n    height: 24px;\n    width: 24px;\n}\n.container-top[data-v-57abec61] {\n    padding: 18px;\n}\n.container-top #circle[data-v-57abec61] {\n    height: 16px;\n    width: 16px;\n}\n}\n@-webkit-keyframes spin-data-v-57abec61 {\nfrom {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n}\n}\n@keyframes spin-data-v-57abec61 {\nfrom {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-date[data-v-476172a9] {\n  border-radius: 4px;\n  max-width: 150px;\n  text-align: center;\n  margin: 10px auto;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 4px;\n  color: var(--chat-message-color-date);\n  background: var(--chat-message-bg-color-date);\n  display: block;\n  overflow-wrap: break-word;\n  position: relative;\n  white-space: normal;\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.11), 0 1px 2px -1px rgba(0, 0, 0, 0.11);\n}\n.line-new[data-v-476172a9] {\n  color: var(--chat-message-color-new-messages);\n  position: relative;\n  text-align: center;\n  font-size: 13px;\n  padding: 10px 0;\n}\n.line-new[data-v-476172a9]:after,\n.line-new[data-v-476172a9]:before {\n  border-top: 1px solid var(--chat-message-color-new-messages);\n  content: \"\";\n  left: 0;\n  position: absolute;\n  top: 50%;\n  width: calc(50% - 60px);\n}\n.line-new[data-v-476172a9]:before {\n  left: auto;\n  right: 0;\n}\n.message-box[data-v-476172a9] {\n  display: flex;\n  flex: 0 0 50%;\n  max-width: 50%;\n  justify-content: flex-start;\n  line-height: 1.4;\n}\n.message-container[data-v-476172a9] {\n  position: relative;\n  padding: 2px 10px;\n  align-items: end;\n  min-width: 100px;\n  box-sizing: content-box;\n  direction: ltr !important;\n}\n.message-container-offset[data-v-476172a9] {\n  margin-top: 10px;\n}\n.offset-current[data-v-476172a9] {\n  margin-left: 50%;\n  justify-content: flex-end;\n}\n.message-card[data-v-476172a9] {\n  background: var(--chat-message-bg-color);\n  color: var(--chat-message-color);\n  border-radius: 8px;\n  font-size: 14px;\n  padding: 6px 9px 3px;\n  max-width: 100%;\n  -webkit-transition-property: box-shadow, opacity;\n  transition-property: box-shadow, opacity;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow;\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 1px -1px rgba(0, 0, 0, 0.11), 0 1px 2px -1px rgba(0, 0, 0, 0.11);\n}\n.message-highlight[data-v-476172a9] {\n  box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.11), 0 1px 5px -1px rgba(0, 0, 0, 0.11);\n}\n.message-current[data-v-476172a9] {\n  background: var(--chat-message-bg-color-me) !important;\n}\n.message-deleted[data-v-476172a9] {\n  color: var(--chat-message-color-deleted) !important;\n  font-size: 13px !important;\n  font-style: italic !important;\n  background: var(--chat-message-bg-color-deleted) !important;\n}\n.icon-deleted[data-v-476172a9] {\n  height: 14px;\n  width: 14px;\n  vertical-align: middle;\n  margin: -2px 2px 0 0;\n  fill: var(--chat-message-color-deleted);\n}\n.image-container[data-v-476172a9] {\n  width: 250px;\n  max-width: 100%;\n}\n.image-reply-container[data-v-476172a9] {\n  width: 70px;\n}\n.message-image[data-v-476172a9] {\n  position: relative;\n  background-color: var(--chat-message-bg-color-image) !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  background-repeat: no-repeat !important;\n  height: 250px;\n  width: 250px;\n  max-width: 100%;\n  border-radius: 4px;\n  margin: 4px auto 5px;\n  transition: 0.4s filter linear;\n}\n.message-image-reply[data-v-476172a9] {\n  height: 70px;\n  width: 70px;\n  margin: 4px auto 3px;\n}\n.image-loading[data-v-476172a9] {\n  filter: blur(3px);\n}\n.reply-message[data-v-476172a9] {\n  background: var(--chat-message-bg-color-reply);\n  border-radius: 4px;\n  margin: -1px -5px 8px;\n  padding: 8px 10px;\n}\n.reply-message .reply-username[data-v-476172a9] {\n  color: var(--chat-message-color-reply-username);\n  font-size: 12px;\n  line-height: 15px;\n  margin-bottom: 2px;\n}\n.reply-message .reply-content[data-v-476172a9] {\n  font-size: 12px;\n  color: var(--chat-message-color-reply-content);\n}\n.text-username[data-v-476172a9] {\n  font-size: 13px;\n  color: var(--chat-message-color-username);\n  margin-bottom: 2px;\n}\n.username-reply[data-v-476172a9] {\n  margin-bottom: 5px;\n}\n.text-timestamp[data-v-476172a9] {\n  font-size: 10px;\n  color: var(--chat-message-color-timestamp);\n  text-align: right;\n}\n.file-message[data-v-476172a9] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 3px;\n}\n.file-message span[data-v-476172a9] {\n  max-width: 100%;\n}\n.file-message .icon-file svg[data-v-476172a9] {\n  margin-right: 5px;\n}\n.icon-edited[data-v-476172a9] {\n  -webkit-box-align: center;\n  align-items: center;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  justify-content: center;\n  letter-spacing: normal;\n  line-height: 1;\n  text-indent: 0;\n  vertical-align: middle;\n  margin: 0 4px 2px;\n}\n.icon-edited svg[data-v-476172a9] {\n  height: 12px;\n  width: 12px;\n}\n.options-container[data-v-476172a9] {\n  position: absolute;\n  top: 2px;\n  right: 10px;\n  height: 40px;\n  width: 70px;\n  overflow: hidden;\n  border-top-right-radius: 8px;\n}\n.blur-container[data-v-476172a9] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 8px;\n  bottom: 10px;\n  background: var(--chat-message-bg-color);\n  filter: blur(3px);\n  border-bottom-left-radius: 8px;\n}\n.options-me[data-v-476172a9] {\n  background: var(--chat-message-bg-color-me);\n}\n.options-image .blur-container[data-v-476172a9] {\n  background: rgba(255, 255, 255, 0.6);\n  border-bottom-left-radius: 15px;\n}\n.image-buttons[data-v-476172a9] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.02) 60%, rgba(0, 0, 0, 0.05) 65%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.5) 85%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.7) 95%, rgba(0, 0, 0, 0.8) 100%);\n}\n.image-buttons svg[data-v-476172a9] {\n  height: 26px;\n  width: 26px;\n}\n.image-buttons .button-view[data-v-476172a9],\n.image-buttons .button-download[data-v-476172a9] {\n  position: absolute;\n  bottom: 6px;\n  left: 7px;\n}\n.image-buttons[data-v-476172a9] :first-child {\n  left: 40px;\n}\n.image-buttons .button-view[data-v-476172a9] {\n  max-width: 18px;\n  bottom: 8px;\n}\n.message-options[data-v-476172a9] {\n  border-radius: 50%;\n  position: absolute;\n  top: 7px;\n  right: 7px;\n}\n.message-options svg[data-v-476172a9] {\n  height: 20px;\n  width: 20px;\n  padding: 3px;\n  fill: var(--chat-message-color-timestamp);\n  margin: -5px;\n}\n.message-reactions[data-v-476172a9] {\n  position: absolute;\n  top: 6px;\n  right: 30px;\n}\n.menu-options[data-v-476172a9] {\n  right: 15px;\n}\n.menu-left[data-v-476172a9] {\n  right: -118px;\n}\n.icon-check[data-v-476172a9] {\n  height: 14px;\n  width: 14px;\n  vertical-align: middle;\n  margin: -3px -3px 0 3px;\n}\n.button-reaction[data-v-476172a9] {\n  display: inline-flex;\n  align-items: center;\n  border: var(--chat-message-border-style-reaction);\n  outline: none;\n  background: var(--chat-message-bg-color-reaction);\n  border-radius: 4px;\n  margin: 4px 2px 0;\n  transition: 0.3s;\n  padding: 0 5px;\n  font-size: 18px;\n  line-height: 23px;\n}\n.button-reaction span[data-v-476172a9] {\n  font-size: 11px;\n  font-weight: 500;\n  min-width: 7px;\n  color: var(--chat-message-color-reaction-counter);\n}\n.button-reaction[data-v-476172a9]:hover {\n  border: var(--chat-message-border-style-reaction-hover);\n  background: var(--chat-message-bg-color-reaction-hover);\n  cursor: pointer;\n}\n.reaction-me[data-v-476172a9] {\n  border: var(--chat-message-border-style-reaction-me);\n  background: var(--chat-message-bg-color-reaction-me);\n}\n.reaction-me span[data-v-476172a9] {\n  color: var(--chat-message-color-reaction-counter-me);\n}\n.reaction-me[data-v-476172a9]:hover {\n  border: var(--chat-message-border-style-reaction-hover-me);\n  background: var(--chat-message-bg-color-reaction-hover-me);\n}\n@media only screen and (max-width: 768px) {\n.message-container[data-v-476172a9] {\n    padding: 2px 3px 1px;\n}\n.message-container-offset[data-v-476172a9] {\n    margin-top: 10px;\n}\n.message-box[data-v-476172a9] {\n    flex: 0 0 80%;\n    max-width: 80%;\n}\n.offset-current[data-v-476172a9] {\n    margin-left: 20%;\n}\n.options-container[data-v-476172a9] {\n    right: 3px;\n}\n.menu-left[data-v-476172a9] {\n    right: -50px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-messages[data-v-718beea9] {\n  position: relative;\n  height: 100%;\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column;\n}\n.room-header[data-v-718beea9] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  height: 64px;\n  width: 100%;\n  z-index: 4;\n  margin-right: 1px;\n  background: var(--chat-header-bg-color);\n  border-top-right-radius: var(--chat-container-border-radius);\n}\n.room-wrapper[data-v-718beea9] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 0 16px;\n}\n.info-wrapper[data-v-718beea9] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.toggle-button[data-v-718beea9] {\n  margin-right: 15px;\n}\n.toggle-button svg[data-v-718beea9] {\n  height: 26px;\n  width: 26px;\n}\n.rotate-icon[data-v-718beea9] {\n  transform: rotate(180deg) !important;\n}\n.room-name[data-v-718beea9] {\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 22px;\n  color: var(--chat-header-color-name);\n  display: inline-block;\n  width: 700px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n.room-info[data-v-718beea9] {\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--chat-header-color-info);\n}\n.room-options[data-v-718beea9] {\n  margin-left: auto;\n}\n.container-scroll[data-v-718beea9] {\n  background: var(--chat-content-bg-color);\n  flex: 1;\n  overflow-y: scroll;\n  margin-right: 1px;\n  margin-top: 60px;\n  padding-bottom: 39px;\n  -webkit-overflow-scrolling: touch;\n}\n.messages-container[data-v-718beea9] {\n  padding: 0 5px 5px;\n  direction: ltr !important;\n}\n.text-started[data-v-718beea9] {\n  font-size: 14px;\n  color: var(--chat-message-color-started);\n  font-style: italic;\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 45px !important;\n}\n.icon-scroll[data-v-718beea9] {\n  position: absolute;\n  bottom: 80px;\n  right: 20px;\n  padding: 8px;\n  background: var(--chat-bg-scroll-icon);\n  border-radius: 50%;\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);\n  display: flex;\n  cursor: pointer;\n}\n.icon-scroll svg[data-v-718beea9] {\n  height: 25px;\n  width: 25px;\n}\n.room-footer[data-v-718beea9] {\n  width: calc(100% - 1px);\n  border-bottom-right-radius: 4px;\n}\n.box-footer[data-v-718beea9] {\n  display: flex;\n  position: relative;\n  background: var(--chat-footer-bg-color);\n  padding: 10px 8px 10px;\n}\n.reply-container[data-v-718beea9] {\n  display: flex;\n  padding: 10px 10px 0 10px;\n  background: var(--chat-content-bg-color);\n  align-items: center;\n  max-width: 100%;\n}\n.reply-container .reply-box[data-v-718beea9] {\n  width: 100%;\n  overflow: hidden;\n  background: var(--chat-footer-bg-color-reply);\n  border-radius: 4px;\n  padding: 8px 10px;\n  display: flex;\n}\n.reply-container .reply-info[data-v-718beea9] {\n  overflow: hidden;\n}\n.reply-container .reply-username[data-v-718beea9] {\n  color: var(--chat-message-color-reply-username);\n  font-size: 12px;\n  line-height: 15px;\n  margin-bottom: 2px;\n}\n.reply-container .reply-content[data-v-718beea9] {\n  font-size: 12px;\n  color: var(--chat-message-color-reply-content);\n}\n.reply-container .icon-reply[data-v-718beea9] {\n  margin-left: 10px;\n}\n.reply-container .icon-reply svg[data-v-718beea9] {\n  height: 20px;\n  width: 20px;\n}\n.reply-container .image-reply[data-v-718beea9] {\n  max-height: 100px;\n  margin-right: 10px;\n}\ntextarea[data-v-718beea9] {\n  height: 20px;\n  width: 100%;\n  line-height: 20px;\n  overflow: hidden;\n  outline: 0;\n  resize: none;\n  border-radius: 20px;\n  padding: 12px 16px;\n  box-sizing: content-box;\n  font-size: 16px;\n  background: var(--chat-bg-color-input);\n  color: var(--chat-color);\n  caret-color: var(--chat-color-caret);\n  border: var(--chat-border-style-input);\n}\ntextarea[data-v-718beea9]::placeholder {\n  color: var(--chat-color-placeholder);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.textarea-outline[data-v-718beea9] {\n  border: 1px solid var(--chat-border-color-input-selected);\n  box-shadow: inset 0px 0px 0px 1px var(--chat-border-color-input-selected);\n}\n.icon-textarea[data-v-718beea9] {\n  display: flex;\n  margin: 12px 0 0 5px;\n}\n.icon-textarea svg[data-v-718beea9],\n.icon-textarea .wrapper[data-v-718beea9] {\n  margin: 0 7px;\n}\n.image-container[data-v-718beea9] {\n  position: absolute;\n  max-width: 25%;\n  left: 16px;\n  top: 18px;\n}\n.image-file[data-v-718beea9] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  min-height: 30px;\n}\n.image-file img[data-v-718beea9] {\n  border-radius: 15px;\n  width: 100%;\n  max-width: 150px;\n  max-height: 100%;\n}\n.icon-image[data-v-718beea9] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n}\n.icon-image svg[data-v-718beea9] {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n.icon-image[data-v-718beea9]:before {\n  content: \" \";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  z-index: -1;\n}\n.file-container[data-v-718beea9] {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 75px);\n  height: 20px;\n  padding: 12px 0;\n  box-sizing: content-box;\n  background: var(--chat-bg-color-input);\n  border: var(--chat-border-style-input);\n  border-radius: 20px;\n}\n.file-container-edit[data-v-718beea9] {\n  width: calc(100% - 109px);\n}\n.file-message[data-v-718beea9] {\n  max-width: calc(100% - 75px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icon-file[data-v-718beea9] {\n  display: flex;\n  margin: 0 8px 0 15px;\n}\n.icon-remove[data-v-718beea9] {\n  margin-left: 8px;\n}\n.icon-remove svg[data-v-718beea9] {\n  height: 18px;\n  width: 18px;\n}\n.send-disabled[data-v-718beea9],\n.send-disabled svg[data-v-718beea9] {\n  cursor: none !important;\n  pointer-events: none !important;\n  transform: none !important;\n}\n.messages-hidden[data-v-718beea9] {\n  opacity: 0;\n}\n@media only screen and (max-width: 768px) {\n.room-header[data-v-718beea9] {\n    height: 50px;\n}\n.room-header .room-wrapper[data-v-718beea9] {\n    padding: 0 10px;\n}\n.room-header .room-name[data-v-718beea9] {\n    font-size: 16px;\n    line-height: 22px;\n    display: inline-block;\n    width: 400px;\n    white-space: nowrap;\n    overflow: hidden !important;\n    text-overflow: ellipsis;\n}\n.room-header .room-info[data-v-718beea9] {\n    font-size: 12px;\n    line-height: 16px;\n}\n.room-header .room-avatar[data-v-718beea9] {\n    height: 37px;\n    width: 37px;\n}\n.container-scroll[data-v-718beea9] {\n    margin-top: 50px;\n}\n.box-footer[data-v-718beea9] {\n    border-top: var(--chat-border-style-input);\n    padding: 7px 2px 7px 7px;\n}\n.text-started[data-v-718beea9] {\n    margin-top: 20px;\n}\ntextarea[data-v-718beea9] {\n    padding: 7px;\n    line-height: 18px;\n}\ntextarea[data-v-718beea9]::placeholder {\n    color: transparent;\n}\n.icon-textarea[data-v-718beea9] {\n    margin: 6px 0 0 5px;\n}\n.icon-textarea svg[data-v-718beea9],\n.icon-textarea .wrapper[data-v-718beea9] {\n    margin: 0 5px;\n}\n.image-container[data-v-718beea9] {\n    top: 10px;\n    left: 10px;\n}\n.image-file img[data-v-718beea9] {\n    transform: scale(0.97);\n}\n.room-footer[data-v-718beea9] {\n    width: 100%;\n}\n.file-container[data-v-718beea9] {\n    padding: 7px 0;\n}\n.file-container .icon-file[data-v-718beea9] {\n    margin-left: 10px;\n}\n.reply-container[data-v-718beea9] {\n    padding: 5px 8px;\n}\n.icon-scroll[data-v-718beea9] {\n    bottom: 70px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rooms-container[data-v-c3a26750] {\n  display: flex;\n  flex-flow: column;\n  flex: 0 0 25%;\n  min-width: 260px;\n  max-width: 500px;\n  position: relative;\n  background: var(--chat-sidemenu-bg-color);\n  height: 100%;\n  border-top-left-radius: var(--chat-container-border-radius);\n  border-bottom-left-radius: var(--chat-container-border-radius);\n}\n.rooms-container-full[data-v-c3a26750] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.box-search[data-v-c3a26750] {\n  position: sticky;\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 15px;\n}\n.icon-search[data-v-c3a26750] {\n  display: flex;\n  position: inherit;\n  left: 30px;\n}\n.icon-search svg[data-v-c3a26750] {\n  width: 18px;\n  height: 18px;\n}\n.add-icon[data-v-c3a26750] {\n  margin-left: auto;\n  padding-left: 10px;\n}\ninput[data-v-c3a26750] {\n  height: 38px;\n  width: 100%;\n  background: var(--chat-bg-color-input);\n  color: var(--chat-color);\n  border-radius: 4px;\n  font-size: 15px;\n  outline: 0;\n  caret-color: var(--chat-color-caret);\n  padding: 10px 10px 10px 40px;\n  border: 1px solid var(--chat-sidemenu-border-color-search);\n  border-radius: 20px;\n}\ninput[data-v-c3a26750]::placeholder {\n  color: var(--chat-color-placeholder);\n}\n.rooms-empty[data-v-c3a26750] {\n  font-size: 14px;\n  color: #9ca6af;\n  font-style: italic;\n  text-align: center;\n  margin: 40px 0;\n  line-height: 20px;\n  white-space: pre-line;\n}\n.room-list[data-v-c3a26750] {\n  flex: 1;\n  position: relative;\n  max-width: 100%;\n  cursor: pointer;\n  padding: 0 10px 5px;\n  overflow-y: auto;\n}\n.room-item[data-v-c3a26750] {\n  border-radius: 8px;\n  align-items: center;\n  display: flex;\n  flex: 1 1 100%;\n  margin-bottom: 5px;\n  padding: 0 16px;\n  position: relative;\n  min-height: 71px;\n}\n.room-item[data-v-c3a26750]:hover {\n  background: var(--chat-sidemenu-bg-color-hover);\n  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.room-item[data-v-c3a26750]:not(:hover) {\n  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.room-selected[data-v-c3a26750] {\n  color: var(--chat-sidemenu-color-active) !important;\n  background: var(--chat-sidemenu-bg-color-active) !important;\n}\n.room-selected[data-v-c3a26750]:hover {\n  background: var(--chat-sidemenu-bg-color-active) !important;\n}\n.name-container[data-v-c3a26750] {\n  flex: 1;\n}\n.title-container[data-v-c3a26750] {\n  display: flex;\n  align-items: center;\n  line-height: 25px;\n}\n.text-ellipsis[data-v-c3a26750] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.room-name[data-v-c3a26750] {\n  flex: 1;\n  color: var(--chat-room-color-username);\n  font-weight: 500;\n}\n.text-last[data-v-c3a26750] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  line-height: 17px;\n  color: var(--chat-room-color-message);\n}\n.message-new[data-v-c3a26750] {\n  color: var(--chat-room-color-username);\n  font-weight: 500;\n}\n.text-date[data-v-c3a26750] {\n  margin-left: 5px;\n  font-size: 11px;\n  color: var(--chat-room-color-timestamp);\n}\n.icon-check[data-v-c3a26750] {\n  display: flex;\n  height: 14px;\n  width: 14px;\n  margin-top: -2px;\n  margin-right: 2px;\n}\n.state-circle[data-v-c3a26750] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background-color: var(--chat-room-color-offline);\n  margin-right: 6px;\n  transition: 0.3s;\n}\n.state-online[data-v-c3a26750] {\n  background-color: var(--chat-room-color-online);\n}\n@media only screen and (max-width: 768px) {\n.box-search[data-v-c3a26750] {\n    height: 58px;\n}\n.room-list[data-v-c3a26750] {\n    padding: 0 7px 5px;\n}\n.room-item[data-v-c3a26750] {\n    min-height: 60px;\n    padding: 0 8px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chat-icon-search {\n  fill: var(--chat-icon-color-search);\n}\n#chat-icon-add {\n  fill: var(--chat-icon-color-add);\n}\n#chat-icon-toggle {\n  fill: var(--chat-icon-color-toggle);\n}\n#chat-icon-menu {\n  fill: var(--chat-icon-color-menu);\n}\n#chat-icon-close {\n  fill: var(--chat-icon-color-close);\n}\n#chat-icon-close-image {\n  fill: var(--chat-icon-color-close-image);\n}\n#chat-icon-file {\n  fill: var(--chat-icon-color-file);\n}\n#chat-icon-paperclip {\n  fill: var(--chat-icon-color-paperclip);\n}\n#chat-icon-close-outline {\n  fill: var(--chat-icon-color-close-outline);\n}\n#chat-icon-send {\n  fill: var(--chat-icon-color-send);\n}\n#chat-icon-send-disabled {\n  fill: var(--chat-icon-color-send-disabled);\n}\n#chat-icon-emoji {\n  fill: var(--chat-icon-color-emoji);\n}\n#chat-icon-emoji-reaction {\n  fill: var(--chat-icon-color-emoji-reaction);\n}\n#chat-icon-document {\n  fill: var(--chat-icon-color-document);\n}\n#chat-icon-pencil {\n  fill: var(--chat-icon-color-pencil);\n}\n#chat-icon-checkmark {\n  fill: var(--chat-icon-color-checkmark);\n}\n#chat-icon-eye {\n  fill: var(--chat-icon-color-eye);\n}\n#chat-icon-dropdown-message {\n  fill: var(--chat-icon-color-dropdown-message);\n}\n#chat-icon-dropdown-scroll {\n  fill: var(--chat-icon-color-dropdown-scroll);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-deleted {\n\tfont-style: italic;\n}\n.icon-deleted {\n\theight: 14px;\n\twidth: 14px;\n\tvertical-align: middle;\n\tmargin: -3px 1px 0 0;\n\tfill: var(--chat-room-color-message);\n}\n.text-ellipsis {\n\twidth: 100%;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatMessage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=template&id=099cf836&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=template&id=099cf836& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card-window",
      style: [{ height: _vm.height }, _vm.cssVars]
    },
    [
      _c(
        "div",
        { staticClass: "chat-container" },
        [
          !_vm.singleRoom
            ? _c("rooms-list", {
                attrs: {
                  currentUserId: _vm.currentUserId,
                  rooms: _vm.orderedRooms,
                  loadingRooms: _vm.loadingRooms,
                  room: _vm.room,
                  filterRoom: _vm.filterRoom,
                  textMessages: _vm.t,
                  showAddRoom: _vm.showAddRoom,
                  showRoomsList: _vm.showRoomsList,
                  textFormatting: _vm.textFormatting,
                  isMobile: _vm.isMobile,
                  isLastRoomList: _vm.isLastRoomList
                },
                on: {
                  loadMore: _vm.loadMore,
                  fetchRoom: _vm.fetchRoom,
                  addRoom: _vm.addRoom,
                  searchRoom: _vm.searchRoom
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "rooms-header",
                      fn: function() {
                        return [_vm._t("rooms-header")]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  true
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c("room", {
            attrs: {
              currentUserId: _vm.currentUserId,
              rooms: _vm.rooms,
              room_id: _vm.room.room_id || "",
              messages: _vm.messages,
              messagesLoaded: _vm.messagesLoaded,
              menuActions: _vm.menuActions,
              messageActions: _vm.messageActions,
              showFiles: _vm.showFiles,
              showEmojis: _vm.showEmojis,
              showReactionEmojis: _vm.showReactionEmojis,
              textMessages: _vm.t,
              singleRoom: _vm.singleRoom,
              showRoomsList: _vm.showRoomsList,
              textFormatting: _vm.textFormatting,
              isMobile: _vm.isMobile,
              loadingRooms: _vm.loadingRooms,
              roomInfo: _vm.$listeners.roomInfo,
              rtl: _vm.rtl
            },
            on: {
              toggleRoomsList: _vm.toggleRoomsList,
              roomInfo: _vm.roomInfo,
              fetchMessages: _vm.fetchMessages,
              sendMessage: _vm.sendMessage,
              editMessage: _vm.editMessage,
              deleteMessage: _vm.deleteMessage,
              openFile: _vm.openFile,
              menuActionHandler: _vm.menuActionHandler,
              messageActionHandler: _vm.messageActionHandler,
              sendMessageReaction: _vm.sendMessageReaction,
              typingMessage: _vm.typingMessage,
              focusMessageFrom: _vm.focusMessageFrom
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=template&id=66464796&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=template&id=66464796&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c("emoji-picker", {
        attrs: { search: _vm.search },
        on: { emoji: _vm.append },
        scopedSlots: _vm._u(
          [
            {
              key: "emoji-invoker",
              fn: function(ref) {
                var clickEvent = ref.events.click
                return _c(
                  "div",
                  {
                    staticClass: "svg-button",
                    class: { "button-reaction": _vm.emojiReaction },
                    on: {
                      click: [
                        function($event) {
                          $event.stopPropagation()
                          return clickEvent($event)
                        },
                        _vm.openEmoji
                      ]
                    }
                  },
                  [
                    _c("svg-icon", {
                      attrs: {
                        name: "emoji",
                        param: _vm.emojiReaction ? "reaction" : ""
                      }
                    })
                  ],
                  1
                )
              }
            },
            {
              key: "emoji-picker",
              fn: function(ref) {
                var emojis = ref.emojis
                var insert = ref.insert
                return _vm.emojiOpened
                  ? _c(
                      "div",
                      {},
                      [
                        _c(
                          "transition",
                          { attrs: { name: "slide-up", appear: "" } },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "emoji-picker",
                                class: { "picker-reaction": _vm.emojiReaction },
                                style: {
                                  height: _vm.emojiPickerHeight + "px",
                                  top: _vm.positionTop
                                    ? _vm.emojiPickerHeight
                                    : _vm.emojiPickerTop + "px",
                                  right: _vm.emojiPickerRight,
                                  display:
                                    _vm.emojiPickerTop || !_vm.emojiReaction
                                      ? "initial"
                                      : "none"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "emoji-picker__search" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.search,
                                          expression: "search"
                                        }
                                      ],
                                      attrs: { type: "text" },
                                      domProps: { value: _vm.search },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.search = $event.target.value
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  _vm._l(emojis, function(
                                    emojiGroup,
                                    category
                                  ) {
                                    return _c("div", { key: category }, [
                                      category !== "Frequently used"
                                        ? _c("h5", [_vm._v(_vm._s(category))])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      category !== "Frequently used"
                                        ? _c(
                                            "div",
                                            { staticClass: "emojis" },
                                            _vm._l(emojiGroup, function(
                                              emoji,
                                              emojiName
                                            ) {
                                              return _c(
                                                "span",
                                                {
                                                  key: emojiName,
                                                  attrs: { title: emojiName },
                                                  on: {
                                                    click: function($event) {
                                                      return insert({
                                                        emoji: emoji,
                                                        emojiName: emojiName
                                                      })
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(emoji) +
                                                      "\n\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        : _vm._e()
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=template&id=229d02b2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=template&id=229d02b2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "text-ellipsis": _vm.singleLine
      }
    },
    [
      _vm.textFormatting
        ? _c(
            "div",
            [
              _vm._l(_vm.linkifiedMessage, function(message, i) {
                return [
                  _c(
                    _vm.checkType(message, "url") ? "a" : "span",
                    {
                      key: i,
                      tag: "component",
                      class: {
                        "text-ellipsis": _vm.singleLine,
                        "text-deleted": _vm.deleted,
                        "text-bold": _vm.checkType(message, "bold"),
                        "text-italic": _vm.checkType(message, "italic"),
                        "text-strike": _vm.checkType(message, "strike"),
                        "text-underline": _vm.checkType(message, "underline"),
                        "text-inline-code":
                          !_vm.singleLine &&
                          _vm.checkType(message, "inline-code"),
                        "text-multiline-code":
                          !_vm.singleLine &&
                          _vm.checkType(message, "multiline-code")
                      },
                      attrs: { href: message.href, target: "_blank" }
                    },
                    [
                      _vm.deleted
                        ? _c("svg-icon", {
                            staticClass: "icon-deleted",
                            attrs: { name: "deleted" }
                          })
                        : _vm._e(),
                      _vm._v(_vm._s(message.value))
                    ],
                    1
                  )
                ]
              })
            ],
            2
          )
        : _c("div", [_vm._v(_vm._s(_vm.content))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=template&id=57abec61&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=template&id=57abec61&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade-spinner", appear: "" } }, [
    _vm.show
      ? _c(
          "div",
          {
            class: {
              "container-center": !_vm.infinite,
              "container-top": _vm.infinite
            }
          },
          [_c("div", { attrs: { id: "circle" } })]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=template&id=476172a9&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=template&id=476172a9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.showDate
      ? _c("div", { staticClass: "card-date" }, [
          _vm._v(_vm._s(_vm.message.date))
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.newMessage.id === _vm.message.id
      ? _c("div", { staticClass: "line-new" }, [
          _vm._v(_vm._s(_vm.textMessages.NEW_MESSAGES))
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "message-box",
        class: { "offset-current": _vm.message.sender_id === _vm.currentUserId }
      },
      [
        _c(
          "div",
          {
            staticClass: "message-container",
            class: {
              "message-container-offset": _vm.messageOffset
            }
          },
          [
            _c(
              "div",
              {
                ref: "imageRef",
                staticClass: "message-card",
                class: {
                  "message-highlight": _vm.isMessageHover(_vm.message),
                  "message-current":
                    _vm.message.sender_id === _vm.currentUserId,
                  "message-deleted": _vm.message.deleted
                },
                on: {
                  mouseover: function($event) {
                    return _vm.onHoverMessage(_vm.message)
                  },
                  mouseleave: _vm.onLeaveMessage
                }
              },
              [
                _vm.roomUsers.length > 2 &&
                _vm.message.sender_id !== _vm.currentUserId
                  ? _c(
                      "div",
                      {
                        staticClass: "text-username",
                        class: {
                          "username-reply":
                            !_vm.message.deleted &&
                            !_vm.message.joind &&
                            _vm.message.reply_message
                        }
                      },
                      [
                        !_vm.message.joind
                          ? _c("span", [_vm._v(_vm._s(_vm.message.username))])
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.message.deleted &&
                !_vm.message.joind &&
                _vm.message.reply_message
                  ? _c("div", { staticClass: "reply-message" }, [
                      _c("div", { staticClass: "reply-username" }, [
                        _vm._v(_vm._s(_vm.replyUsername))
                      ]),
                      _vm._v(" "),
                      _vm.isImageReply
                        ? _c("div", { staticClass: "image-reply-container" }, [
                            _c("div", {
                              staticClass: "message-image message-image-reply",
                              style: {
                                "background-image":
                                  "url('" +
                                  _vm.message.reply_message.file.url +
                                  "')"
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "reply-content" }, [
                        _vm._v(_vm._s(_vm.message.reply_message.content))
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.message.deleted
                  ? _c(
                      "div",
                      [
                        _c("svg-icon", {
                          staticClass: "icon-deleted",
                          attrs: { name: "deleted" }
                        }),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.textMessages.MESSAGE_DELETED))
                        ])
                      ],
                      1
                    )
                  : !_vm.message.file
                  ? _c(
                      "div",
                      [
                        _c("format-message", {
                          attrs: {
                            content: this.message.content,
                            textFormatting: _vm.textFormatting
                          }
                        })
                      ],
                      1
                    )
                  : _vm.isImage
                  ? _c(
                      "div",
                      { staticClass: "image-container" },
                      [
                        _c("loader", {
                          style: { top: _vm.imageResponsive.loaderTop + "px" },
                          attrs: { show: _vm.isImageLoading }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "message-image",
                            class: {
                              "image-loading":
                                _vm.isImageLoading &&
                                _vm.message.sender_id === _vm.currentUserId
                            },
                            style: {
                              "background-image":
                                "url('" + _vm.message.file.url + "')",
                              "max-height": _vm.imageResponsive.maxHeight + "px"
                            }
                          },
                          [
                            _c(
                              "transition",
                              { attrs: { name: "fade-image" } },
                              [
                                _vm.imageHover && !_vm.isImageLoading
                                  ? _c(
                                      "div",
                                      { staticClass: "image-buttons" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "svg-button button-view",
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.openFile(
                                                  _vm.message.file
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("svg-icon", {
                                              attrs: { name: "eye" }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "svg-button button-download",
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.openFile(
                                                  _vm.message.file
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("svg-icon", {
                                              attrs: { name: "document" }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("format-message", {
                          attrs: {
                            content: this.message.content,
                            textFormatting: _vm.textFormatting
                          }
                        })
                      ],
                      1
                    )
                  : _c("div", { staticClass: "file-message" }, [
                      _c(
                        "div",
                        {
                          staticClass: "svg-button icon-file",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.openFile(_vm.message.file)
                            }
                          }
                        },
                        [_c("svg-icon", { attrs: { name: "document" } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.message.content))])
                    ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-timestamp" }, [
                  _vm.message.edited && !_vm.message.deleted
                    ? _c(
                        "div",
                        { staticClass: "icon-edited" },
                        [_c("svg-icon", { attrs: { name: "pencil" } })],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.message.timestamp))]),
                  _vm._v(" "),
                  _vm.isMessageSeen
                    ? _c(
                        "span",
                        [
                          _c("svg-icon", {
                            staticClass: "icon-check",
                            attrs: { name: "checkmark" }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.showReactionEmojis ||
                          !_vm.message.reply_message ||
                          (_vm.message.reply_message &&
                            _vm.message.reply_message.sender_id ===
                              _vm.currentUserId),
                        expression:
                          "showReactionEmojis||!message.reply_message||message.reply_message&&message.reply_message.sender_id=== currentUserId"
                      }
                    ],
                    staticClass: "options-container",
                    class: {
                      "options-image": _vm.isImage && !_vm.message.reply_message
                    },
                    style: {
                      width:
                        _vm.filteredMessageActions.length &&
                        _vm.showReactionEmojis
                          ? "70px"
                          : "45px"
                    }
                  },
                  [
                    _c(
                      "transition-group",
                      { attrs: { name: "slide-left" } },
                      [
                        _vm.isMessageActions || _vm.isMessageReactions
                          ? _c("div", {
                              key: "1",
                              staticClass: "blur-container",
                              class: {
                                "options-me":
                                  _vm.message.sender_id === _vm.currentUserId
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isMessageActions && !_vm.canDropDown()
                          ? _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      !_vm.message.reply_message ||
                                      (_vm.message.reply_message &&
                                        _vm.message.reply_message.sender_id ===
                                          _vm.currentUserId),
                                    expression:
                                      "!message.reply_message||message.reply_message&&message.reply_message.sender_id=== currentUserId"
                                  }
                                ],
                                key: "2",
                                ref: "actionIcon",
                                staticClass: "svg-button message-options",
                                on: { click: _vm.openOptions }
                              },
                              [
                                _c("svg-icon", {
                                  attrs: { name: "options", param: "message" }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isMessageReactions
                          ? _c("emoji-picker", {
                              directives: [
                                {
                                  name: "click-outside",
                                  rawName: "v-click-outside",
                                  value: _vm.closeEmoji,
                                  expression: "closeEmoji"
                                }
                              ],
                              key: "3",
                              staticClass: "message-reactions",
                              style: {
                                right: _vm.isMessageActions ? "30px" : "5px"
                              },
                              attrs: {
                                emojiOpened: _vm.emojiOpened,
                                emojiReaction: true,
                                roomFooterRef: _vm.roomFooterRef,
                                positionRight:
                                  _vm.message.sender_id === _vm.currentUserId
                              },
                              on: {
                                addEmoji: _vm.sendMessageReaction,
                                openEmoji: _vm.openEmoji
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.filteredMessageActions.length
                  ? _c(
                      "transition",
                      {
                        attrs: {
                          name:
                            _vm.message.sender_id === _vm.currentUserId
                              ? "slide-left"
                              : "slide-right"
                        }
                      },
                      [
                        _vm.canDropDown()
                          ? _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "click-outside",
                                    rawName: "v-click-outside",
                                    value: _vm.closeOptions,
                                    expression: "closeOptions"
                                  }
                                ],
                                ref: "menuOptions",
                                staticClass: "menu-options",
                                class: {
                                  "menu-left":
                                    _vm.message.sender_id !== _vm.currentUserId
                                },
                                style: { top: _vm.menuOptionsTop + "px" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "menu-list" },
                                  _vm._l(_vm.filteredMessageActions, function(
                                    action
                                  ) {
                                    return _c("div", { key: action.name }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "menu-item",
                                          on: {
                                            click: function($event) {
                                              return _vm.messageActionHandler(
                                                action
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(action.title))]
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            !_vm.message.deleted && !_vm.message.joind
              ? _c(
                  "transition-group",
                  { attrs: { name: "slide-left" } },
                  _vm._l(_vm.message.reactions, function(reaction, key) {
                    return _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: reaction.length,
                            expression: "reaction.length"
                          }
                        ],
                        key: key + 0,
                        staticClass: "button-reaction",
                        class: {
                          "reaction-me":
                            reaction.indexOf(_vm.currentUserId) !== -1
                        },
                        style: {
                          float:
                            _vm.message.sender_id === _vm.currentUserId
                              ? "right"
                              : "left"
                        },
                        on: {
                          click: function($event) {
                            return _vm.sendMessageReaction(
                              { name: key },
                              reaction
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.getEmojiByName(key)) +
                            "\n            "
                        ),
                        _c("span", [_vm._v(_vm._s(reaction.length))])
                      ]
                    )
                  }),
                  0
                )
              : _vm._e()
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=template&id=718beea9&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=template&id=718beea9&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: (_vm.isMobile && !_vm.showRoomsList) || !_vm.isMobile,
          expression: "(isMobile && !showRoomsList) || !isMobile"
        }
      ],
      staticClass: "col-messages"
    },
    [
      _c("div", { staticClass: "room-header app-border-b" }, [
        _c(
          "div",
          { staticClass: "room-wrapper" },
          [
            !_vm.singleRoom
              ? _c(
                  "div",
                  {
                    staticClass: "svg-button toggle-button mx-2",
                    class: {
                      "rotate-icon": !_vm.showRoomsList && !_vm.isMobile
                    },
                    on: {
                      click: function($event) {
                        return _vm.$emit("toggleRoomsList")
                      }
                    }
                  },
                  [_c("svg-icon", { attrs: { name: "toggle" } })],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "info-wrapper",
                class: { "item-clickable": _vm.roomInfo },
                on: {
                  click: function($event) {
                    return _vm.$emit("roomInfo", _vm.room)
                  }
                }
              },
              [
                _vm.room.avatar
                  ? _c("div", {
                      staticClass: "room-avatar",
                      style: {
                        "background-image": "url('" + _vm.room.avatar + "')"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "room-name",
                      attrs: { title: _vm.nameFromUsers(_vm.room["users"]) }
                    },
                    [_vm._v(_vm._s(_vm.nameFromUsers(_vm.room["users"])))]
                  ),
                  _vm._v(" "),
                  _vm.typingUsers
                    ? _c("div", { staticClass: "room-info" }, [
                        _vm._v(
                          _vm._s(_vm.typingUsers) +
                            " " +
                            _vm._s(_vm.textMessages.IS_TYPING)
                        )
                      ])
                    : _c("div", { staticClass: "room-info" }, [
                        _vm._v(_vm._s(_vm.userStatus))
                      ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm.menuActions.length && _vm.room.room_id
              ? _c(
                  "div",
                  {
                    staticClass: "svg-button room-options",
                    on: {
                      click: function($event) {
                        _vm.menuOpened = !_vm.menuOpened
                      }
                    }
                  },
                  [_c("svg-icon", { attrs: { name: "menu" } })],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.menuActions.length
              ? _c("transition", { attrs: { name: "slide-left" } }, [
                  _vm.menuOpened
                    ? _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: _vm.closeMenu,
                              expression: "closeMenu"
                            }
                          ],
                          staticClass: "menu-options",
                          class: {
                            "menu-options-left": _vm.rtl,
                            "menu-options-right": !_vm.rtl,
                            "menu-plural": true
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "menu-list" },
                            _vm._l(_vm.menuActions, function(action) {
                              return _c("div", { key: action.name }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "menu-item",
                                    on: {
                                      click: function($event) {
                                        return _vm.menuActionHandler(action)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(action.title))]
                                )
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    : _vm._e()
                ])
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { ref: "scrollContainer", staticClass: "container-scroll" },
        [
          _c("loader", { attrs: { show: _vm.loadingMessages } }),
          _vm._v(" "),
          _c("div", { staticClass: "messages-container" }, [
            _c(
              "div",
              { class: { "messages-hidden": _vm.loadingMessages } },
              [
                _c("transition", { attrs: { name: "fade-message" } }, [
                  _vm.showNoMessages
                    ? _c("div", { staticClass: "text-started" }, [
                        _vm._v(_vm._s(_vm.textMessages.MESSAGES_EMPTY))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.showMessagesStarted
                    ? _c("div", { staticClass: "text-started" }, [
                        _vm._v(
                          _vm._s(_vm.textMessages.CONVERSATION_STARTED) +
                            " " +
                            _vm._s(_vm.messages[0].date)
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "transition",
                  { attrs: { name: "fade-message" } },
                  [
                    _vm.messages.length
                      ? _c(
                          "infinite-loading",
                          {
                            attrs: { spinner: "spiral", direction: "top" },
                            on: { infinite: _vm.loadMoreMessages }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "spinner" }, slot: "spinner" },
                              [
                                _c("loader", {
                                  attrs: { show: true, infinite: true }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", {
                              attrs: { slot: "no-results" },
                              slot: "no-results"
                            }),
                            _vm._v(" "),
                            _c("div", {
                              attrs: { slot: "no-more" },
                              slot: "no-more"
                            })
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "transition-group",
                  { attrs: { name: "fade-message" } },
                  _vm._l(_vm.messages, function(message, i) {
                    return _c(
                      "div",
                      { key: message.sender_id + "/" + i },
                      [
                        _c("message", {
                          attrs: {
                            currentUserId: _vm.currentUserId,
                            message: message,
                            index: i,
                            messages: _vm.messages,
                            editedMessage: _vm.editedMessage,
                            messageActions: _vm.messageActions,
                            roomUsers: _vm.room.users,
                            textMessages: _vm.textMessages,
                            roomFooterRef: _vm.$refs.roomFooter,
                            newMessages: _vm.newMessages,
                            showReactionEmojis: _vm.showReactionEmojis,
                            textFormatting: _vm.textFormatting,
                            emojisList: _vm.emojisList,
                            hideOptions: _vm.hideOptions
                          },
                          on: {
                            messageActionHandler: _vm.messageActionHandler,
                            openFile: _vm.openFile,
                            addNewMessage: _vm.addNewMessage,
                            sendMessageReaction: _vm.sendMessageReaction,
                            hideOptions: function($event) {
                              _vm.hideOptions = $event
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  0
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.loadingMessages
        ? _c(
            "div",
            [
              _c("transition", { attrs: { name: "bounce" } }, [
                _vm.scrollIcon
                  ? _c(
                      "div",
                      {
                        staticClass: "icon-scroll",
                        on: { click: _vm.scrollToBottom }
                      },
                      [
                        _c("svg-icon", {
                          attrs: { name: "dropdown", param: "scroll" }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      Object.keys(_vm.room).length
        ? _c(
            "div",
            { ref: "roomFooter", staticClass: "room-footer" },
            [
              _c("transition", { attrs: { name: "slide-up" } }, [
                _vm.messageReply
                  ? _c("div", { staticClass: "reply-container" }, [
                      _c("div", { staticClass: "reply-box" }, [
                        _vm.isImageCheck(_vm.messageReply.file)
                          ? _c("img", {
                              staticClass: "image-reply",
                              attrs: { src: _vm.messageReply.file.url }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "reply-info" }, [
                          _c("div", { staticClass: "reply-username" }, [
                            _vm._v(_vm._s(_vm.messageReply.username))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "reply-content" }, [
                            _vm._v(_vm._s(_vm.messageReply.content))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "icon-reply" }, [
                        _c(
                          "div",
                          {
                            staticClass: "svg-button",
                            on: { click: _vm.resetMessage }
                          },
                          [
                            _c("svg-icon", { attrs: { name: "close-outline" } })
                          ],
                          1
                        )
                      ])
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "box-footer" }, [
                _vm.imageFile
                  ? _c("div", { staticClass: "image-container" }, [
                      _c(
                        "div",
                        {
                          staticClass: "svg-button icon-image",
                          on: { click: _vm.resetImageFile }
                        },
                        [
                          _c("svg-icon", {
                            attrs: { name: "close", param: "image" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "image-file" }, [
                        _c("img", {
                          ref: "imageFile",
                          attrs: { src: _vm.imageFile }
                        })
                      ])
                    ])
                  : _vm.file
                  ? _c(
                      "div",
                      {
                        staticClass: "file-container",
                        class: { "file-container-edit": _vm.editedMessage.id }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon-file" },
                          [_c("svg-icon", { attrs: { name: "file" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "file-message" }, [
                          _vm._v(_vm._s(_vm.message))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "svg-button icon-remove",
                            on: {
                              click: function($event) {
                                return _vm.resetMessage(null, true)
                              }
                            }
                          },
                          [_c("svg-icon", { attrs: { name: "close" } })],
                          1
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.file || _vm.imageFile,
                      expression: "!file || imageFile"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.message,
                      expression: "message"
                    }
                  ],
                  ref: "roomTextarea",
                  class: {
                    "textarea-outline": _vm.editedMessage.id
                  },
                  style: {
                    "min-height":
                      (_vm.imageDimensions ? _vm.imageDimensions.height : 20) +
                      "px",
                    "padding-left":
                      (_vm.imageDimensions
                        ? _vm.imageDimensions.width - 10
                        : 12) + "px"
                  },
                  attrs: { placeholder: _vm.textMessages.TYPE_MESSAGE },
                  domProps: { value: _vm.message },
                  on: {
                    focus: _vm.focusMessageFrom,
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.message = $event.target.value
                      },
                      _vm.onChangeInput
                    ],
                    keydown: [
                      function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k($event.keyCode, "esc", 27, $event.key, [
                            "Esc",
                            "Escape"
                          ])
                        ) {
                          return null
                        }
                        return _vm.resetMessage($event)
                      },
                      function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        if (
                          $event.ctrlKey ||
                          $event.shiftKey ||
                          $event.altKey ||
                          $event.metaKey
                        ) {
                          return null
                        }
                        $event.preventDefault()
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "icon-textarea" },
                  [
                    _vm.editedMessage.id
                      ? _c(
                          "div",
                          {
                            staticClass: "svg-button",
                            on: { click: _vm.resetMessage }
                          },
                          [
                            _c("svg-icon", { attrs: { name: "close-outline" } })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showEmojis && (!_vm.file || _vm.imageFile)
                      ? _c("emoji-picker", {
                          attrs: {
                            emojiOpened: _vm.emojiOpened,
                            positionTop: true
                          },
                          on: {
                            addEmoji: _vm.addEmoji,
                            openEmoji: function($event) {
                              _vm.emojiOpened = $event
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showFiles
                      ? _c(
                          "div",
                          {
                            staticClass: "svg-button",
                            on: { click: _vm.launchFilePicker }
                          },
                          [_c("svg-icon", { attrs: { name: "paperclip" } })],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showFiles
                      ? _c("input", {
                          ref: "file",
                          staticStyle: { display: "none" },
                          attrs: { type: "file" },
                          on: {
                            change: function($event) {
                              return _vm.onFileChange($event.target.files)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "svg-button",
                        class: { "send-disabled": _vm.inputDisabled },
                        on: { click: _vm.sendMessage }
                      },
                      [
                        _c("svg-icon", {
                          attrs: {
                            name: "send",
                            param: _vm.inputDisabled ? "disabled" : ""
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=template&id=c3a26750&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=template&id=c3a26750&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showRoomsList,
          expression: "showRoomsList"
        }
      ],
      staticClass: "rooms-container app-border-r",
      class: { "rooms-container-full": _vm.isMobile }
    },
    [
      _vm._t("rooms-header"),
      _vm._v(" "),
      _c("div", { staticClass: "box-search" }, [
        _c(
          "div",
          { staticClass: "icon-search" },
          [_c("svg-icon", { attrs: { name: "search" } })],
          1
        ),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "search",
            placeholder: _vm.textMessages.SEARCH,
            autocomplete: "off"
          },
          on: { input: _vm.searchRoom }
        }),
        _vm._v(" "),
        _vm.showAddRoom
          ? _c(
              "div",
              {
                staticClass: "svg-button add-icon",
                on: { click: _vm.addRoom }
              },
              [_c("svg-icon", { attrs: { name: "add" } })],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("loader", { attrs: { show: _vm.loadingRooms } }),
      _vm._v(" "),
      !_vm.loadingRooms && !_vm.rooms.length
        ? _c("div", { staticClass: "rooms-empty" }, [
            _vm._v(_vm._s(_vm.textMessages.ROOMS_EMPTY))
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.loadingRooms
        ? _c(
            "div",
            { staticClass: "room-list" },
            [
              _vm._l(_vm.filteredRooms, function(room) {
                return _c(
                  "div",
                  {
                    key: room.room_id,
                    staticClass: "room-item",
                    class: {
                      "room-selected": _vm.selectedRoomId === room.room_id
                    },
                    on: {
                      click: function($event) {
                        return _vm.openRoom(room)
                      }
                    }
                  },
                  [
                    room.avatar
                      ? _c("div", {
                          staticClass: "room-avatar",
                          style: {
                            "background-image": "url('" + room.avatar + "')"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "name-container text-ellipsis" }, [
                      _c("div", { staticClass: "title-container" }, [
                        _vm.userStatus(room)
                          ? _c("div", {
                              staticClass: "state-circle",
                              class: {
                                "state-online":
                                  _vm.userStatus(room) === "online"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        room.room_name
                          ? _c(
                              "div",
                              {
                                staticClass: "room-name text-ellipsis",
                                attrs: { title: room.room_name }
                              },
                              [_vm._v(_vm._s(room.room_name))]
                            )
                          : _c(
                              "div",
                              {
                                staticClass: "room-name text-ellipsis",
                                attrs: {
                                  title: _vm.nameFromUsers(room["users"])
                                }
                              },
                              [_vm._v(_vm._s(_vm.nameFromUsers(room["users"])))]
                            ),
                        _vm._v(" "),
                        room.last_message
                          ? _c("div", { staticClass: "text-date" }, [
                              _vm._v(_vm._s(room.last_message.timestamp))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      room.last_message
                        ? _c(
                            "div",
                            {
                              staticClass: "text-last",
                              class: { "message-new": room.last_message.new }
                            },
                            [
                              room.last_message.seen
                                ? _c(
                                    "span",
                                    [
                                      _c("svg-icon", {
                                        staticClass: "icon-check",
                                        attrs: { name: "checkmark" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("format-message", {
                                attrs: {
                                  content: _vm.getLastMessage(room),
                                  deleted: !!room.last_message.deleted,
                                  formatLinks: false,
                                  textFormatting: _vm.textFormatting,
                                  singleLine: true
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c("div", [
                !_vm.isLastRoomList
                  ? _c(
                      "button",
                      { style: { width: "100%" }, on: { click: _vm.loadMore } },
                      [_vm._v(_vm._s(_vm.textMessages.LOADMORE))]
                    )
                  : _vm._e()
              ])
            ],
            2
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=template&id=7769a49f&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=template&id=7769a49f& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }
    },
    [
      _c("path", {
        attrs: {
          id: _vm.svgId,
          d: _vm.svgItem.find(function(item) {
            return item.name === _vm.name
          }).path
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/chat/index.vue?vue&type=template&id=830aad0a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vendor/views/chat/index.vue?vue&type=template&id=830aad0a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.openAddRoom
        ? _c("add-room", {
            attrs: {
              open: _vm.openAddRoom,
              roomsLength: _vm.rooms.length,
              user: _vm.user,
              dark: _vm.dark
            },
            on: {
              putRoomIndex: _vm.putRoomIndex,
              pushRoomContent: _vm.pushRoomContent,
              clearRoomIndex: _vm.clearRoomIndex,
              shiftRoom: _vm.shiftRoom,
              pushRoom: _vm.pushRoom,
              close: function($event) {
                return _vm.close()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.openquitRoom
        ? _c("quit-room", {
            attrs: {
              open: _vm.openquitRoom,
              room: _vm.room,
              dark: _vm.dark,
              user: _vm.user
            },
            on: {
              shiftRoom: _vm.shiftRoom,
              pushRoom: _vm.pushRoom,
              clearRoomIndex: _vm.clearRoomIndex,
              close: function($event) {
                return _vm.close()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.openInviteUser
        ? _c("invite-user", {
            attrs: {
              open: _vm.openInviteUser,
              room: _vm.room,
              user: _vm.user,
              dark: _vm.dark
            },
            on: {
              clearRoomIndex: _vm.clearRoomIndex,
              putRoomIndex: _vm.putRoomIndex,
              pushRoomContent: _vm.pushRoomContent,
              close: function($event) {
                return _vm.close()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.openRemoveUser
        ? _c("remove-user", {
            attrs: {
              open: _vm.openRemoveUser,
              room: _vm.room,
              user: _vm.user,
              dark: _vm.dark
            },
            on: {
              putRoomIndex: _vm.putRoomIndex,
              pushRoomContent: _vm.pushRoomContent,
              clearRoomIndex: _vm.clearRoomIndex,
              shiftRoom: _vm.shiftRoom,
              pushRoom: _vm.pushRoom,
              close: function($event) {
                return _vm.close()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("chat-window", {
        attrs: {
          theme: _vm.dark ? "dark" : "light",
          rtl: _vm.RTL,
          showFiles: false,
          showEmojis: false,
          showReactionEmojis: false,
          filterRoom: false,
          cachRooms: "",
          currentUserId: _vm.user.id,
          rooms: _vm.rooms,
          messages: _vm.messages,
          menuActions: _vm.menuActions,
          messageActions: _vm.messageActions,
          textMessages: _vm.textMessages,
          loadingRooms: _vm.loadingRooms,
          messagesLoaded: _vm.messagesLoaded,
          isLastRoomList: _vm.load_more
        },
        on: {
          fetchMessages: _vm.fetchMessages,
          fetchRoom: _vm.fetchRoom,
          sendMessage: _vm.sendMessage,
          editMessage: _vm.editMessage,
          deleteMessage: _vm.deleteMessage,
          addRoom: _vm.addRoom,
          searchRoom: _vm.searchRoom,
          focusMessageFrom: _vm.focusMessageFrom,
          loadMore: _vm.loadMore,
          menuActionHandler: _vm.menuActionHandler
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue":
/*!*******************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatWindow_vue_vue_type_template_id_099cf836___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=template&id=099cf836& */ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=template&id=099cf836&");
/* harmony import */ var _ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=style&index=0&lang=scss& */ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatWindow_vue_vue_type_template_id_099cf836___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatWindow_vue_vue_type_template_id_099cf836___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=template&id=099cf836&":
/*!**************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=template&id=099cf836& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_099cf836___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=template&id=099cf836& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue?vue&type=template&id=099cf836&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_099cf836___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_099cf836___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue":
/*!********************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmojiPicker_vue_vue_type_template_id_66464796_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmojiPicker.vue?vue&type=template&id=66464796&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=template&id=66464796&scoped=true&");
/* harmony import */ var _EmojiPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmojiPicker.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmojiPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmojiPicker_vue_vue_type_template_id_66464796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmojiPicker_vue_vue_type_template_id_66464796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66464796",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=style&index=0&id=66464796&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_66464796_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=template&id=66464796&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=template&id=66464796&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_template_id_66464796_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmojiPicker.vue?vue&type=template&id=66464796&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/EmojiPicker.vue?vue&type=template&id=66464796&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_template_id_66464796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_template_id_66464796_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue":
/*!**********************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormatMessage_vue_vue_type_template_id_229d02b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatMessage.vue?vue&type=template&id=229d02b2& */ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=template&id=229d02b2&");
/* harmony import */ var _FormatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatMessage.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatMessage.vue?vue&type=style&index=0&lang=css& */ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormatMessage_vue_vue_type_template_id_229d02b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormatMessage_vue_vue_type_template_id_229d02b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatMessage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=template&id=229d02b2&":
/*!*****************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=template&id=229d02b2& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_template_id_229d02b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormatMessage.vue?vue&type=template&id=229d02b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/FormatMessage.vue?vue&type=template&id=229d02b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_template_id_229d02b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormatMessage_vue_vue_type_template_id_229d02b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue":
/*!***************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Loader.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_57abec61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=57abec61&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=template&id=57abec61&scoped=true&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_57abec61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_57abec61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57abec61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=style&index=0&id=57abec61&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_57abec61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=template&id=57abec61&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=template&id=57abec61&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_57abec61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=57abec61&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Loader.vue?vue&type=template&id=57abec61&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_57abec61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_57abec61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue":
/*!****************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Message.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue_vue_type_template_id_476172a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=476172a9&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=template&id=476172a9&scoped=true&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_476172a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Message_vue_vue_type_template_id_476172a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "476172a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/Message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=style&index=0&id=476172a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_476172a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=template&id=476172a9&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=template&id=476172a9&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_476172a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=template&id=476172a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Message.vue?vue&type=template&id=476172a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_476172a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_476172a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue":
/*!*************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Room.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Room_vue_vue_type_template_id_718beea9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room.vue?vue&type=template&id=718beea9&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=template&id=718beea9&scoped=true&");
/* harmony import */ var _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Room_vue_vue_type_template_id_718beea9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Room_vue_vue_type_template_id_718beea9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "718beea9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/Room.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=style&index=0&id=718beea9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_718beea9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=template&id=718beea9&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=template&id=718beea9&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_718beea9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Room.vue?vue&type=template&id=718beea9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/Room.vue?vue&type=template&id=718beea9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_718beea9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_template_id_718beea9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue":
/*!******************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomsList_vue_vue_type_template_id_c3a26750_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomsList.vue?vue&type=template&id=c3a26750&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=template&id=c3a26750&scoped=true&");
/* harmony import */ var _RoomsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomsList.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true& */ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoomsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomsList_vue_vue_type_template_id_c3a26750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomsList_vue_vue_type_template_id_c3a26750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3a26750",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=style&index=0&id=c3a26750&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_style_index_0_id_c3a26750_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=template&id=c3a26750&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=template&id=c3a26750&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_template_id_c3a26750_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsList.vue?vue&type=template&id=c3a26750&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/RoomsList.vue?vue&type=template&id=c3a26750&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_template_id_c3a26750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsList_vue_vue_type_template_id_c3a26750_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue":
/*!****************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SvgIcon_vue_vue_type_template_id_7769a49f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcon.vue?vue&type=template&id=7769a49f& */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=template&id=7769a49f&");
/* harmony import */ var _SvgIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon.vue?vue&type=script&lang=js& */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SvgIcon.vue?vue&type=style&index=0&lang=scss& */ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SvgIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SvgIcon_vue_vue_type_template_id_7769a49f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SvgIcon_vue_vue_type_template_id_7769a49f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=template&id=7769a49f&":
/*!***********************************************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=template&id=7769a49f& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_template_id_7769a49f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SvgIcon.vue?vue&type=template&id=7769a49f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/materiels/Chat/ChatWindow/SvgIcon.vue?vue&type=template&id=7769a49f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_template_id_7769a49f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_template_id_7769a49f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/materiels/Chat/ChatWindow/index.js":
/*!*************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/ChatWindow/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatWindow */ "./resources/vendor/materiels/Chat/ChatWindow/ChatWindow.vue");

Object.defineProperty(_ChatWindow__WEBPACK_IMPORTED_MODULE_0__["default"], 'install', {
  configurable: false,
  enumerable: false,
  value: function value(Vue) {
    Vue.component('chat-window', _ChatWindow__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (_ChatWindow__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/vendor/materiels/Chat/locales/index.js":
/*!**********************************************************!*\
  !*** ./resources/vendor/materiels/Chat/locales/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ROOMS_EMPTY: 'No rooms',
  NEW_MESSAGES: 'New Messages',
  MESSAGE_DELETED: 'This message was deleted',
  MESSAGES_EMPTY: 'No messages',
  CONVERSATION_STARTED: 'Conversation started on:',
  TYPE_MESSAGE: 'Type message',
  SEARCH: 'Search',
  IS_ONLINE: 'is online',
  LAST_SEEN: 'last seen ',
  IS_TYPING: 'is writing...'
});

/***/ }),

/***/ "./resources/vendor/materiels/Chat/themes/index.js":
/*!*********************************************************!*\
  !*** ./resources/vendor/materiels/Chat/themes/index.js ***!
  \*********************************************************/
/*! exports provided: defaultThemeStyles, cssThemeVars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultThemeStyles", function() { return defaultThemeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssThemeVars", function() { return cssThemeVars; });
var defaultThemeStyles = {
  light: {
    general: {
      color: '#0a0a0a',
      backgroundInput: '#fff',
      colorPlaceholder: '#9ca6af',
      colorCaret: '#1976d2',
      colorSpinner: '#333',
      borderStyle: '1px solid #e1e4e8',
      backgroundScrollIcon: '#fff'
    },
    container: {
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
    },
    header: {
      background: '#fff',
      colorRoomName: '#0a0a0a',
      colorRoomInfo: '#9ca6af'
    },
    footer: {
      background: '#f8f9fa',
      borderStyleInput: '1px solid #e1e4e8',
      borderInputSelected: '#1976d2',
      backgroundReply: 'rgba(0, 0, 0, 0.08)'
    },
    content: {
      background: '#f8f9fa'
    },
    sidemenu: {
      background: '#fff',
      backgroundHover: '#f6f6f6',
      backgroundActive: '#e5effa',
      colorActive: '#1976d2',
      borderColorSearch: '#e1e5e8'
    },
    dropdown: {
      background: '#fff',
      backgroundHover: '#f6f6f6'
    },
    message: {
      background: '#fff',
      backgroundMe: '#ccf2cf',
      color: '#0a0a0a',
      colorStarted: '#9ca6af',
      backgroundDeleted: '#dadfe2',
      colorDeleted: '#757e85',
      colorUsername: '#9ca6af',
      colorTimestamp: '#828c94',
      backgroundDate: '#e5effa',
      colorDate: '#505a62',
      backgroundReply: 'rgba(0, 0, 0, 0.08)',
      colorReplyUsername: '#0a0a0a',
      colorReply: '#6e6e6e',
      backgroundImage: '#ddd',
      colorNewMessages: '#1976d2',
      backgroundReaction: '#eee',
      borderStyleReaction: '1px solid #eee',
      backgroundReactionHover: '#fff',
      borderStyleReactionHover: '1px solid #ddd',
      colorReactionCounter: '#0a0a0a',
      backgroundReactionMe: '#cfecf5',
      borderStyleReactionMe: '1px solid #3b98b8',
      backgroundReactionHoverMe: '#cfecf5',
      borderStyleReactionHoverMe: '1px solid #3b98b8',
      colorReactionCounterMe: '#0b59b3'
    },
    markdown: {
      background: 'rgba(239, 239, 239, 0.7)',
      border: 'rgba(212, 212, 212, 0.9)',
      color: '#e01e5a',
      colorMulti: '#0a0a0a'
    },
    room: {
      colorUsername: '#0a0a0a',
      colorMessage: '#67717a',
      colorTimestamp: '#a2aeb8',
      colorStateOnline: '#4caf50',
      colorStateOffline: '#9ca6af'
    },
    emoji: {
      background: '#fff'
    },
    icons: {
      search: '#9ca6af',
      add: '#1976d2',
      toggle: '#0a0a0a',
      menu: '#0a0a0a',
      close: '#9ca6af',
      closeImage: '#fff',
      file: '#1976d2',
      paperclip: '#1976d2',
      closeOutline: '#000',
      send: '#1976d2',
      sendDisabled: '#9ca6af',
      emoji: '#1976d2',
      emojiReaction: 'rgba(0, 0, 0, 0.3)',
      document: '#1976d2',
      pencil: '#9e9e9e',
      checkmark: '#0696c7',
      eye: '#fff',
      dropdownMessage: '#fff',
      dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
      dropdownScroll: '#0a0a0a'
    }
  },
  dark: {
    general: {
      color: '#fff',
      backgroundInput: '#202223',
      colorPlaceholder: '#596269',
      colorCaret: '#1976d2',
      colorSpinner: '#fff',
      borderStyle: 'none',
      backgroundScrollIcon: '#fff'
    },
    container: {
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
    },
    header: {
      background: '#181a1b',
      colorRoomName: '#fff',
      colorRoomInfo: '#9ca6af'
    },
    footer: {
      background: '#131415',
      borderStyleInput: 'none',
      borderInputSelected: '#1976d2',
      backgroundReply: '#1b1c1c'
    },
    content: {
      background: '#131415'
    },
    sidemenu: {
      background: '#181a1b',
      backgroundHover: '#202224',
      backgroundActive: '#151617',
      colorActive: '#fff',
      borderColorSearch: '#181a1b'
    },
    dropdown: {
      background: '#2a2c33',
      backgroundHover: '#26282e'
    },
    message: {
      background: '#22242a',
      backgroundMe: '#4fb381',
      color: '#fff',
      colorStarted: '#9ca6af',
      backgroundDeleted: '#1b1c21',
      colorDeleted: '#a2a5a8',
      colorUsername: '#b3bac9',
      colorTimestamp: '#ebedf2',
      backgroundDate: 'rgba(0, 0, 0, 0.1)',
      colorDate: '#9ca6af',
      backgroundReply: 'rgba(0, 0, 0, 0.18)',
      colorReplyUsername: '#fff',
      colorReply: '#d6d6d6',
      backgroundImage: '#ddd',
      colorNewMessages: '#fff',
      backgroundReaction: 'none',
      borderStyleReaction: 'none',
      backgroundReactionHover: '#202223',
      borderStyleReactionHover: 'none',
      colorReactionCounter: '#fff',
      backgroundReactionMe: '#4e9ad1',
      borderStyleReactionMe: 'none',
      backgroundReactionHoverMe: '#4e9ad1',
      borderStyleReactionHoverMe: 'none',
      colorReactionCounterMe: '#fff'
    },
    markdown: {
      background: 'rgba(239, 239, 239, 0.7)',
      border: 'rgba(212, 212, 212, 0.9)',
      color: '#e01e5a',
      colorMulti: '#0a0a0a'
    },
    room: {
      colorUsername: '#fff',
      colorMessage: '#6c7278',
      colorTimestamp: '#6c7278',
      colorStateOnline: '#4caf50',
      colorStateOffline: '#596269'
    },
    emoji: {
      background: '#343740'
    },
    icons: {
      search: '#596269',
      add: '#fff',
      toggle: '#fff',
      menu: '#fff',
      close: '#9ca6af',
      closeImage: '#fff',
      file: '#1976d2',
      paperclip: '#fff',
      closeOutline: '#fff',
      send: '#fff',
      sendDisabled: '#646a70',
      emoji: '#fff',
      emojiReaction: '#fff',
      document: '#1976d2',
      pencil: '#ebedf2',
      checkmark: '#f0d90a',
      eye: '#fff',
      dropdownMessage: '#fff',
      dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
      dropdownScroll: '#0a0a0a'
    }
  }
};
var cssThemeVars = function cssThemeVars(_ref) {
  var general = _ref.general,
      container = _ref.container,
      header = _ref.header,
      footer = _ref.footer,
      sidemenu = _ref.sidemenu,
      content = _ref.content,
      dropdown = _ref.dropdown,
      message = _ref.message,
      markdown = _ref.markdown,
      room = _ref.room,
      emoji = _ref.emoji,
      icons = _ref.icons;
  return {
    // general
    '--chat-color': general.color,
    '--chat-bg-color-input': general.backgroundInput,
    '--chat-color-spinner': general.colorSpinner,
    '--chat-color-placeholder': general.colorPlaceholder,
    '--chat-color-caret': general.colorCaret,
    '--chat-border-style': general.borderStyle,
    '--chat-bg-scroll-icon': general.backgroundScrollIcon,
    // container
    '--chat-container-border': container.border,
    '--chat-container-border-radius': container.borderRadius,
    '--chat-container-box-shadow': container.boxShadow,
    // header
    '--chat-header-bg-color': header.background,
    '--chat-header-color-name': header.colorRoomName,
    '--chat-header-color-info': header.colorRoomInfo,
    // footer
    '--chat-footer-bg-color': footer.background,
    '--chat-border-style-input': footer.borderStyleInput,
    '--chat-border-color-input-selected': footer.borderInputSelected,
    '--chat-footer-bg-color-reply': footer.backgroundReply,
    // content
    '--chat-content-bg-color': content.background,
    // sidemenu
    '--chat-sidemenu-bg-color': sidemenu.background,
    '--chat-sidemenu-bg-color-hover': sidemenu.backgroundHover,
    '--chat-sidemenu-bg-color-active': sidemenu.backgroundActive,
    '--chat-sidemenu-color-active': sidemenu.colorActive,
    '--chat-sidemenu-border-color-search': sidemenu.borderColorSearch,
    // dropdown
    '--chat-dropdown-bg-color': dropdown.background,
    '--chat-dropdown-bg-color-hover': dropdown.backgroundHover,
    // message
    '--chat-message-bg-color': message.background,
    '--chat-message-bg-color-me': message.backgroundMe,
    '--chat-message-color-started': message.colorStarted,
    '--chat-message-bg-color-deleted': message.backgroundDeleted,
    '--chat-message-color-deleted': message.colorDeleted,
    '--chat-message-color-username': message.colorUsername,
    '--chat-message-color-timestamp': message.colorTimestamp,
    '--chat-message-bg-color-date': message.backgroundDate,
    '--chat-message-color-date': message.colorDate,
    '--chat-message-color': message.color,
    '--chat-message-bg-color-reply': message.backgroundReply,
    '--chat-message-color-reply-username': message.colorReplyUsername,
    '--chat-message-color-reply-content': message.colorReply,
    '--chat-message-bg-color-image': message.backgroundImage,
    '--chat-message-color-new-messages': message.colorNewMessages,
    '--chat-message-bg-color-reaction': message.backgroundReaction,
    '--chat-message-border-style-reaction': message.borderStyleReaction,
    '--chat-message-bg-color-reaction-hover': message.backgroundReactionHover,
    '--chat-message-border-style-reaction-hover': message.borderStyleReactionHover,
    '--chat-message-color-reaction-counter': message.colorReactionCounter,
    '--chat-message-bg-color-reaction-me': message.backgroundReactionMe,
    '--chat-message-border-style-reaction-me': message.borderStyleReactionMe,
    '--chat-message-bg-color-reaction-hover-me': message.backgroundReactionHoverMe,
    '--chat-message-border-style-reaction-hover-me': message.borderStyleReactionHoverMe,
    '--chat-message-color-reaction-counter-me': message.colorReactionCounterMe,
    // markdown
    '--chat-markdown-bg': markdown.background,
    '--chat-markdown-border': markdown.border,
    '--chat-markdown-color': markdown.color,
    '--chat-markdown-color-multi': markdown.colorMulti,
    // room
    '--chat-room-color-username': room.colorUsername,
    '--chat-room-color-message': room.colorMessage,
    '--chat-room-color-timestamp': room.colorTimestamp,
    '--chat-room-color-online': room.colorStateOnline,
    '--chat-room-color-offline': room.colorStateOffline,
    // emoji
    '--chat-emoji-bg-color': emoji.background,
    // icons
    '--chat-icon-color-search': icons.search,
    '--chat-icon-color-add': icons.add,
    '--chat-icon-color-toggle': icons.toggle,
    '--chat-icon-color-menu': icons.menu,
    '--chat-icon-color-close': icons.close,
    '--chat-icon-color-close-image': icons.closeImage,
    '--chat-icon-color-file': icons.file,
    '--chat-icon-color-paperclip': icons.paperclip,
    '--chat-icon-color-close-outline': icons.closeOutline,
    '--chat-icon-color-send': icons.send,
    '--chat-icon-color-send-disabled': icons.sendDisabled,
    '--chat-icon-color-emoji': icons.emoji,
    '--chat-icon-color-emoji-reaction': icons.emojiReaction,
    '--chat-icon-color-document': icons.document,
    '--chat-icon-color-pencil': icons.pencil,
    '--chat-icon-color-checkmark': icons.checkmark,
    '--chat-icon-color-eye': icons.eye,
    '--chat-icon-color-dropdown-message': icons.dropdownMessage,
    '--chat-icon-bg-dropdown-message': icons.dropdownMessageBackground,
    '--chat-icon-color-dropdown-scroll': icons.dropdownScroll
  };
};

/***/ }),

/***/ "./resources/vendor/materiels/Chat/utils/filterItems.js":
/*!**************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/utils/filterItems.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (items, prop, val) {
  if (!val || val === '') return items;
  return items.filter(function (v) {
    return v[prop].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(val.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) > -1;
  });
});

/***/ }),

/***/ "./resources/vendor/materiels/Chat/utils/formatString.js":
/*!***************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/utils/formatString.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _pseudo_markdown;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var linkify = __webpack_require__(/*! linkifyjs */ "./node_modules/linkifyjs/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (text, doLinkify) {
  var json = compileToJSON(text);
  var html = compileToHTML(json);
  var flatten = flattenResult(html);
  var result = [].concat.apply([], flatten);
  markdownResult(result);
  if (doLinkify) linkifyResult(result);
  return result;
});
var type_markdown = {
  bold: '*',
  italic: '_',
  strike: '~',
  underline: '°'
};
var pseudo_markdown = (_pseudo_markdown = {}, _defineProperty(_pseudo_markdown, type_markdown.bold, {
  end: '\\' + [type_markdown.bold],
  allowed_chars: '.',
  type: 'bold'
}), _defineProperty(_pseudo_markdown, type_markdown.italic, {
  end: [type_markdown.italic],
  allowed_chars: '.',
  type: 'italic'
}), _defineProperty(_pseudo_markdown, type_markdown.strike, {
  end: [type_markdown.strike],
  allowed_chars: '.',
  type: 'strike'
}), _defineProperty(_pseudo_markdown, type_markdown.underline, {
  end: [type_markdown.underline],
  allowed_chars: '.',
  type: 'underline'
}), _defineProperty(_pseudo_markdown, '```', {
  end: '```',
  allowed_chars: '(.|\n)',
  type: 'multiline-code'
}), _defineProperty(_pseudo_markdown, '`', {
  end: '`',
  allowed_chars: '.',
  type: 'inline-code'
}), _pseudo_markdown);

function compileToJSON(str) {
  var result = [];
  var min_index_of = -1;
  var min_index_of_key = null;
  Object.keys(pseudo_markdown).forEach(function (starting_value) {
    var io = str.indexOf(starting_value);

    if (io >= 0 && (min_index_of < 0 || io < min_index_of)) {
      min_index_of = io;
      min_index_of_key = starting_value;
    }
  });

  if (min_index_of_key) {
    var str_left = str.substr(0, min_index_of);
    var _char = min_index_of_key;
    var str_right = str.substr(min_index_of + _char.length);
    var match = str_right.match(new RegExp('^(' + (pseudo_markdown[_char].allowed_chars || '.') + '*' + (pseudo_markdown[_char].end ? '?' : '') + ')' + (pseudo_markdown[_char].end ? '(' + pseudo_markdown[_char].end + ')' : ''), 'm'));

    if (!match) {
      str_left = str_left + _char;
      result.push(str_left);
    } else {
      if (str_left) {
        result.push(str_left);
      }

      var object = {
        start: _char,
        content: compileToJSON(match[1]),
        end: match[2],
        type: pseudo_markdown[_char].type
      };
      result.push(object);
      str_right = str_right.substr(match[0].length);
    }

    result = result.concat(compileToJSON(str_right));
    return result;
  } else {
    if (str) {
      return [str];
    } else {
      return [];
    }
  }
}

function compileToHTML(json) {
  var result = [];
  json.forEach(function (item) {
    if (typeof item == 'string') {
      result.push({
        types: [],
        value: item
      });
    } else {
      if (pseudo_markdown[item.start]) {
        result.push(parseContent(item));
      }
    }
  });
  return result;
}

function parseContent(item) {
  var result = [];
  item.content.forEach(function (it) {
    if (typeof it == 'string') {
      result.push({
        types: [item.type],
        value: it
      });
    } else {
      it.content.forEach(function (i) {
        if (typeof i == 'string') {
          result.push({
            types: [it.type].concat([item.type]),
            value: i
          });
        } else {
          result.push({
            types: [i.type].concat([it.type]).concat([item.type]),
            value: parseContent(i)
          });
        }
      });
    }
  });
  return result;
}

function flattenResult(array) {
  var types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var result = [];
  array.forEach(function (arr) {
    if (typeof arr.value == 'string') {
      arr.types = arr.types.concat(types);
      result.push(arr);
    } else {
      arr.forEach(function (a) {
        if (typeof a.value == 'string') {
          a.types = a.types.concat(types);
          result.push(a);
        } else {
          result.push(flattenResult(a.value, a.types));
        }
      });
    }
  });
  return result;
}

function markdownResult(array) {
  for (var i = 0; i < array.length; i) {
    if (array[i - 1]) {
      var isInline = array[i].types.indexOf('inline-code') !== -1 && array[i - 1].types.indexOf('inline-code') !== -1;
      var isMultiline = array[i].types.indexOf('multiline-code') !== -1 && array[i - 1].types.indexOf('multiline-code') !== -1;

      if (isInline || isMultiline) {
        (function () {
          var value = array[i].value;
          array[i].types.forEach(function (type) {
            var markdown = type_markdown[type] || '';
            value = markdown + value + markdown;
          });
          array[i - 1].value = array[i - 1].value + value;
          array.splice(i, 1);
        })();
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
}

function linkifyResult(array) {
  var result = [];
  array.forEach(function (arr) {
    var links = linkify.find(arr.value);

    if (links.length) {
      var spaces = arr.value.replace(links[0].value, '');
      result.push({
        types: arr.types,
        value: spaces
      });
      arr.types = ['url'].concat(arr.types);
      arr.href = links[0].href;
      arr.value = links[0].value;
    }

    result.push(arr);
  });
  return result;
}

/***/ }),

/***/ "./resources/vendor/materiels/Chat/utils/mobileDetection.js":
/*!******************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/utils/mobileDetection.js ***!
  \******************************************************************/
/*! exports provided: detectMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectMobile", function() { return detectMobile; });
function detectMobile() {
  var userAgent = getUserAgent();
  var userAgentPart = userAgent.substr(0, 4);
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(userAgentPart);
}

function getUserAgent() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera || null;
  if (!userAgent) throw new Error('Failed to look for user agent information.');
  return userAgent;
}

/***/ }),

/***/ "./resources/vendor/materiels/Chat/utils/roomValidation.js":
/*!*****************************************************************!*\
  !*** ./resources/vendor/materiels/Chat/utils/roomValidation.js ***!
  \*****************************************************************/
/*! exports provided: roomsValid, partcipantsValid, messagesValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomsValid", function() { return roomsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partcipantsValid", function() { return partcipantsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesValid", function() { return messagesValid; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function roomsValid(obj) {
  var roomsValidate = [{
    key: 'room_id',
    type: ['string', 'number']
  }, {
    key: 'room_name',
    type: ['string']
  }, {
    key: 'users',
    type: ['array']
  }];

  var validate = function validate(obj, props) {
    return props.every(function (prop) {
      var validType = false;

      if (prop.type[0] === 'array' && Array.isArray(obj[prop.key])) {
        validType = true;
      } else if (prop.type.find(function (t) {
        return t === _typeof(obj[prop.key]);
      })) {
        validType = true;
      }

      return validType && checkObjectValid(obj, prop.key);
    });
  };

  return validate(obj, roomsValidate);
}
function partcipantsValid(obj) {
  var participantsValidate = [{
    key: 'id',
    type: ['string', 'number']
  }, {
    key: 'username',
    type: ['string']
  }];

  var validate = function validate(obj, props) {
    return props.every(function (prop) {
      var validType = prop.type.find(function (t) {
        return t === _typeof(obj[prop.key]);
      });
      return validType && checkObjectValid(obj, prop.key);
    });
  };

  return validate(obj, participantsValidate);
}
function messagesValid(obj) {
  var participantsValidate = [{
    key: 'id',
    type: ['string', 'number']
  }, {
    key: 'content',
    type: ['string', 'number']
  }, {
    key: 'sender_id',
    type: ['string', 'number']
  }];

  var validate = function validate(obj, props) {
    return props.every(function (prop) {
      var validType = prop.type.find(function (t) {
        return t === _typeof(obj[prop.key]);
      });
      return validType && checkObjectValid(obj, prop.key);
    });
  };

  return validate(obj, participantsValidate);
}

function checkObjectValid(obj, key) {
  return obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined;
}

/***/ }),

/***/ "./resources/vendor/utils/filterItems.js":
/*!***********************************************!*\
  !*** ./resources/vendor/utils/filterItems.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (items, callback, val) {
  if (!val || val === '') return items;
  return items.filter(function (v) {
    return callback(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').indexOf(val.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) > -1;
  });
});

/***/ }),

/***/ "./resources/vendor/views/chat/components/room/index.js":
/*!**************************************************************!*\
  !*** ./resources/vendor/views/chat/components/room/index.js ***!
  \**************************************************************/
/*! exports provided: addRoom, quitRoom, removeUser, inviteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoom */ "./resources/vendor/views/chat/components/room/addRoom.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoom", function() { return _addRoom__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _quitRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quitRoom */ "./resources/vendor/views/chat/components/room/quitRoom.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quitRoom", function() { return _quitRoom__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _removeUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeUser */ "./resources/vendor/views/chat/components/room/removeUser.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return _removeUser__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _inviteUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inviteUser */ "./resources/vendor/views/chat/components/room/inviteUser.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inviteUser", function() { return _inviteUser__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./resources/vendor/views/chat/index.vue":
/*!***********************************************!*\
  !*** ./resources/vendor/views/chat/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_830aad0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=830aad0a& */ "./resources/vendor/views/chat/index.vue?vue&type=template&id=830aad0a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vendor/views/chat/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_830aad0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_830aad0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vendor/views/chat/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vendor/views/chat/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/vendor/views/chat/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/chat/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vendor/views/chat/index.vue?vue&type=template&id=830aad0a&":
/*!******************************************************************************!*\
  !*** ./resources/vendor/views/chat/index.vue?vue&type=template&id=830aad0a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_830aad0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=830aad0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vendor/views/chat/index.vue?vue&type=template&id=830aad0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_830aad0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_830aad0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vendor/views/chat/parts/index.js":
/*!****************************************************!*\
  !*** ./resources/vendor/views/chat/parts/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room */ "./resources/vendor/views/chat/parts/room.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./resources/vendor/views/chat/parts/messages.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _room__WEBPACK_IMPORTED_MODULE_0__["default"], {}, _messages__WEBPACK_IMPORTED_MODULE_1__["default"], {
  MessageEcho: function MessageEcho() {// this.channel && this.channel
    //     .listen("MessageEvent", e => {
    //         this.channelChat(e)
    //     })
    //     .listen("userEvent", e => {
    //         this.channelRoomUser(e);
    //     });
  },
  paginate: function paginate(name) {
    if (this.pagination[name].current_page && this.pagination[name].last_page) if (this.pagination[name].current_page < this.pagination[name].last_page) {
      this.pagination[name].current_page += 1;
      return true;
    } else return false;
  },
  menuActionHandler: function menuActionHandler(_ref) {
    var room_id = _ref.room_id,
        action = _ref.action;

    switch (action.name) {
      case "inviteUser":
        this.openInviteUser = true;
        break;

      case "removeUser":
        this.openRemoveUser = true;
        break;

      case "quitRoom":
        this.openquitRoom = true;
        break;
    }
  },
  menuActionsOption: function menuActionsOption(isOwner) {
    if (isOwner) this.menuActions = [{
      name: "inviteUser",
      title: this.$i18n.t("$menu_chat_room.inviteUser")
    }, {
      name: "removeUser",
      title: this.$i18n.t("$menu_chat_room.removeUser")
    }, {
      name: "quitRoom",
      title: this.$i18n.t("$menu_chat_room.quitRoom")
    }];else this.menuActions = [{
      name: "quitRoom",
      title: this.$i18n.t("$menu_chat_room.quitRoom")
    }];
  },
  close: function close() {
    this.openAddRoom = false;
    this.openquitRoom = false;
    this.openInviteUser = false;
    this.openRemoveUser = false;
  }
}));

/***/ }),

/***/ "./resources/vendor/views/chat/parts/messages.js":
/*!*******************************************************!*\
  !*** ./resources/vendor/views/chat/parts/messages.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_chat_room_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/chat/room.js */ "./resources/vendor/api/chat/room.js");
/* harmony import */ var _api_chat_message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/chat/message.js */ "./resources/vendor/api/chat/message.js");
/* harmony import */ var _utils_notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/notify */ "./resources/vendor/utils/notify.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






/* harmony default export */ __webpack_exports__["default"] = ({
  fetchMessages: function fetchMessages(_ref) {
    var _this = this;

    var room = _ref.room;
    //if there we are in last page of message stop spinner
    if (!this.paginate("message")) this.messagesLoaded = true; //get instence of api object

    var MessagesApi = Object(_api_chat_message_js__WEBPACK_IMPORTED_MODULE_3__["fetchMessagesApi"])(this.pagination.message.current_page, room.room_id); //lance spinner

    this.messagesLoaded = false; //get http broker

    this._httpCancel = MessagesApi._httpCancel;
    MessagesApi.request.then(function (_ref2) {
      var _this$messages;

      var data = _ref2.data,
          current_page = _ref2.current_page,
          last_page = _ref2.last_page;
      //do not change this cause there is auther messages of rooms 
      //every first page we init with data
      if (current_page == 1) _this.messages = data && data.reverse();else (_this$messages = _this.messages).unshift.apply(_this$messages, _toConsumableArray(data && data.reverse())); //update pagination

      _this.pagination.message = {
        current_page: current_page,
        last_page: last_page
      }; //if there is no auther page stop spinner

      if (current_page == last_page) _this.messagesLoaded = true;
    })["catch"](function (err) {
      if (Object(axios__WEBPACK_IMPORTED_MODULE_0__["isCancel"])()) console.log("request cancelled");else console.log(err);
    });
  },
  sendMessage: function sendMessage(_ref3) {
    var _this2 = this;

    var room_id = _ref3.room_id,
        content = _ref3.content,
        reply_message = _ref3.reply_message;
    var v_message = this.createVirtualMessage({
      content: content
    }); //push message or reply message

    var index = this.getIndexReplyMessageOrMessage(v_message, reply_message && reply_message.id);
    Object(_api_chat_message_js__WEBPACK_IMPORTED_MODULE_3__["sendMessagesApi"])(room_id, {
      content: content,
      reply_id: reply_message && reply_message.id
    }).then(function (res) {
      //update lastMesage of room to apears in list room if room exist
      if (_this2.putRoomIndex(_this2.room.room_id) > -1) {
        //update message or reply message
        var updated_message = _objectSpread({}, _this2.updateReplyMessageOrMessage(res, reply_message, index));

        updated_message.timestamp = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY HH:mm");
        updated_message.date = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYYMMDDHHmmss");

        _this2.pushRoomContent({
          last_message: updated_message
        });
      }
    })["catch"](function (err) {
      console.log(err); //if there is error except "Room Not existe" remove message 

      if (reply_message && reply_message.id) _this2.messages[index] = null;else _this2.messages.splice(index, 1); //if error throw "Room Not existe" delete room & messages

      if (err.data === "Room Not existe" || err.status == 403) {
        _this2.snackbar({
          text: _this2.$i18n.t("$room.not_exist"),
          color: "error"
        });

        _this2.messages = [];

        _this2.shiftRoom({
          room_id: room_id
        });
      } else _this2.snackbar({
        text: _this2.$i18n.t("alert.failed"),
        color: "error"
      });
    });
  },
  editMessage: function editMessage(_ref4) {
    var _this3 = this;

    var room_id = _ref4.room_id,
        message_id = _ref4.message_id,
        new_content = _ref4.new_content,
        file = _ref4.file,
        reply_message = _ref4.reply_message;
    var index = this.messages.findIndex(function (e) {
      return e.id == message_id;
    });
    var content = this.messages[index].content; ///change som col

    this.messages[index].content = new_content;
    this.messages[index].edited = 1;
    Object(_api_chat_message_js__WEBPACK_IMPORTED_MODULE_3__["editMessagesApi"])(message_id, {
      content: new_content
    }).then(function (res) {})["catch"](function (err) {
      _this3.messages[index].content = content;
      _this3.messages[index].edited = 0;

      _this3.messages.splice(first_index, 0, message);

      if (err.data === "Room Not existe" || err.status == 403) {
        _this3.snackbar({
          text: _this3.$i18n.t("$room.not_exist"),
          color: "error"
        });

        _this3.messages = [];

        _this3.shiftRoom({
          room_id: room_id
        });
      } else _this3.snackbar({
        text: _this3.$i18n.t("alert.failed"),
        color: "error"
      });
    });
  },
  deleteMessage: function deleteMessage(_ref5) {
    var _this4 = this;

    var room_id = _ref5.room_id,
        message_id = _ref5.message_id;
    var index = this.messages.findIndex(function (e) {
      return e.id == message_id;
    });
    this.messages[index].deleted = true;
    this.messages[index].seen = true;
    if (this.room && this.room.last_message && this.room.last_message) this.room.last_message.content = this.$i18n.t("_chat.echo_messages_deleted");
    Object(_api_chat_message_js__WEBPACK_IMPORTED_MODULE_3__["deleteMessagesApi"])(message_id).then()["catch"](function (err) {
      _this4.messages[index].deleted = false;

      _this4.messages.splice(index, 0, message);

      if (_this4.room && _this4.room.last_message && _this4.room.last_message) _this4.room.last_message.content = _this4.messages[index].content;

      if (err.data === "Room Not existe" || err.status == 403) {
        _this4.snackbar({
          text: _this4.$i18n.t("$room.not_exist"),
          color: "error"
        });

        _this4.messages = [];

        _this4.shiftRoom({
          room_id: room_id
        });
      } else _this4.snackbar({
        text: _this4.$i18n.t("alert.failed"),
        color: "error"
      });
    });
  },
  focusMessageFrom: function focusMessageFrom(_ref6) {
    var room_id = _ref6.room_id;
    if (!room_id) return;

    if (this.messages.findIndex(function (e) {
      return e.seen === 0;
    }) > -1) {
      if (this.room && this.room.last_message) this.room.last_message["new"] = 0;
      Object(_api_chat_message_js__WEBPACK_IMPORTED_MODULE_3__["viewMessagesApi"])(room_id)["catch"](function (err) {
        return console.log(err);
      });
    }
  },
  typingMessage: function typingMessage(_ref7) {// if (!room_id || !message) return;
    // typingMessagesApi(this.user.id, room_id).catch(err => console.log(err));

    var room_id = _ref7.room_id,
        message = _ref7.message;
  },
  channelChat: function channelChat(_ref8) {
    var _this5 = this;

    var message = _ref8.message,
        is_updated = _ref8.is_updated,
        is_deleted = _ref8.is_deleted,
        is_typing = _ref8.is_typing,
        is_view = _ref8.is_view;
    console.log({
      message: message,
      is_updated: is_updated,
      is_deleted: is_deleted,
      is_typing: is_typing,
      is_view: is_view
    });

    if (is_typing) {
      if (this.room) if (!this.room.typingUsers) this.room.typingUsers = [];
      this.room.typingUsers.push(message && message.typing_id);
      return;
    }

    if (is_view || !message) {
      this.messages.forEach(function (e) {
        return e.seen = 1;
      });
      return;
    } //notify browser if is msg


    if (!is_updated && !is_deleted) _utils_notify__WEBPACK_IMPORTED_MODULE_4__["default"].browser();
    var index = this.messages.findIndex(function (e) {
      return e.id == message.id;
    });

    if (is_deleted) {
      this.messages[index].timestamp = this.timestamp(message && message.updated_at);
      this.messages[index].deleted = true;
      this.messages[index].seen = true;
      if (this.room && this.room.last_message && this.room.last_message) this.room.last_message.content = this.$i18n.t("_chat.echo_messages_deleted");
      return;
    } //set timestemp format according to chat room


    if (message) {
      message["new"] = true;
      message.timestamp = this.timestamp(message && message.updated_at);
    } //if is updaated msg then delete origin before pushing the new


    if (is_updated) {
      this.messages.splice(index, 1);
      message.edited = true;
      index = this.messages.push(message) - 1;
    } // if we get meesage of current room push directly
    else if (message.room_id === this.room.room_id) {
        this.getIndexReplyMessageOrMessage(message, message.reply_id);
      } // update lastMessage every time


    if (this.putRoomIndex(message.room_id) > -1) {
      var last_message = _objectSpread({}, message);

      last_message.timestamp = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY HH:mm");
      last_message.date = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYYMMDDHHmmss");
      this.pushRoomContent({
        last_message: last_message
      });
    } else //if message is from unexisted room fetch this room from server-side
      Object(_api_chat_room_js__WEBPACK_IMPORTED_MODULE_2__["fetchRoomApi"])(message.room_id).then(function (res) {
        //push directly
        _this5.rooms.push(res.room);
      })["catch"](function (err) {
        console.log(err);
      });
  },
  createVirtualMessage: function createVirtualMessage(_ref9) {
    var content = _ref9.content;
    return {
      id: "v" + this.messages.length,
      content: content,
      sender_id: this.user.id,
      username: this.user.username,
      timestamp: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("HH:mm"),
      seen: 0,
      "new": 1
    };
  },
  getIndexReplyMessageOrMessage: function getIndexReplyMessageOrMessage(v_message, reply_id) {
    var index;

    if (reply_id) {
      index = this.messages.findIndex(function (e) {
        return e.id == reply_id;
      }); //descend msg&reply msg to the first messages

      this.messages[index]["reply_message"] = v_message;
      var _message = this.messages[index];
      this.messages.splice(index, 1);
      index = this.messages.push(_message) - 1;
    } else index = this.messages.push(v_message) - 1;

    return index;
  },
  updateReplyMessageOrMessage: function updateReplyMessageOrMessage(res, reply_message, index) {
    if (reply_message && reply_message.id) {
      this.messages[index]["reply_message"] = Object.assign(this.messages[index]["reply_message"], res);
      return this.messages[index]["reply_message"];
    } else this.messages[index] = Object.assign(this.messages[index], res);

    return this.messages[index];
  },
  timestamp: function timestamp(_date) {
    return moment__WEBPACK_IMPORTED_MODULE_1___default()(_date).format("HH:mm");
  }
});

/***/ }),

/***/ "./resources/vendor/views/chat/parts/room.js":
/*!***************************************************!*\
  !*** ./resources/vendor/views/chat/parts/room.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_chat_room_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/chat/room.js */ "./resources/vendor/api/chat/room.js");
/* harmony import */ var _utils_filterItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/filterItems */ "./resources/vendor/utils/filterItems.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/* harmony default export */ __webpack_exports__["default"] = ({
  fetchRooms: function fetchRooms() {
    var _this = this;

    this.loadingRooms = true; //if there we are in last page of rooms

    if (!this.paginate("room")) {
      this.loadingRooms = false;
      this.vLoading(false);
    }

    Object(_api_chat_room_js__WEBPACK_IMPORTED_MODULE_0__["fetchRoomsApi"])(this.pagination.room.current_page).then(function (_ref) {
      var data = _ref.data,
          current_page = _ref.current_page,
          last_page = _ref.last_page;
      _this.rooms = _this.marge([].concat(_toConsumableArray(data), _toConsumableArray(_this.rooms))); //store rooms in cache

      _this.rooms_cache = _toConsumableArray(_this.rooms); //update pagination

      _this.pagination.room = {
        current_page: current_page,
        last_page: last_page
      };
      _this.pagination_cache = _objectSpread({}, _this.pagination.room);
      _this.isLastRoomList = current_page >= last_page;
    })["catch"](function (err) {
      return console.log(err);
    })["finally"](function () {
      return _this.loadingRooms = false;
    });
  },
  loadMore: function loadMore(_ref2) {
    var query = _ref2.query;
    if (!this.pagination && !this.pagination.room) return;
    var current_page = this.pagination.room.current_page;
    current_page++;
    if (current_page <= this.pagination.room.last_page) if (query) this.debouncedServiceSearchRoom({
      pattern: query
    }, current_page);else this.fetchRooms();
  },
  searchRoom: function searchRoom(_ref3) {
    var pattern = _ref3.pattern;
    //filter rooms in browser-side (search from existen data)
    this.rooms = _toConsumableArray(this.rooms_cache);
    this.rooms = Object(_utils_filterItems__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rooms, this.nameSeries, pattern);
    this.debouncedServiceSearchRoom({
      pattern: pattern
    });
  },
  serviceSearchRoom: function serviceSearchRoom(_ref4, page) {
    var _this2 = this;

    var pattern = _ref4.pattern;
    //save rooms in cache then use rooms saved as a init data 
    this.pagination.room = _objectSpread({}, this.pagination_cache);
    if (!pattern || pattern.length < 2) return;
    this.loadingRooms = true; //durring the time of request of search in server-side

    Object(_api_chat_room_js__WEBPACK_IMPORTED_MODULE_0__["searchRoomsApi"])({
      r_query: pattern
    }, page).then(function (_ref5) {
      var rooms = _ref5.rooms;

      //marge result in one list (delete deplicate)
      var data = rooms.data,
          res = _objectWithoutProperties(rooms, ["data"]);

      _this2.rooms = _this2.marge([].concat(_toConsumableArray(data), _toConsumableArray(_this2.rooms)));
      _this2.pagination.room = Object.assign(_this2.pagination.room, res);
      _this2.isLastRoomList = _this2.pagination.room.current_page >= _this2.pagination.room.last_page;
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      return _this2.loadingRooms = false;
    });
  },
  fetchRoom: function fetchRoom(_ref6) {
    var room = _ref6.room;
    this.room = room;
    this.room.typingUsers = []; //if current user have access to

    this.menuActionsOption(room.owner == this.user.id);
    this._httpCancel && this._httpCancel.cancel();
    this.pagination.message = {
      current_page: 1,
      last_page: ""
    };
    this.messages = [];
    this.fetchMessages({
      room: room
    });
  },
  channelRoomUser: function channelRoomUser(_ref7) {
    var _this3 = this;

    var users = _ref7.users,
        user_ids = _ref7.user_ids,
        room_id = _ref7.room_id,
        is_invited = _ref7.is_invited,
        is_deleted = _ref7.is_deleted;
    if (!users && !user_ids && !room_id) return;
    var index = this.rooms.findIndex(function (e) {
      return e.room_id === parseInt(room_id);
    });

    if (is_deleted) {
      var _users = this.rooms && this.rooms[index].users;

      if (!_users) return;

      var kicked_users = _users.filter(function (e) {
        return user_ids.indexOf(e.id) > -1;
      });

      this.rooms[index].users = _users.filter(function (_u) {
        return kicked_users.findIndex(function (_k_u) {
          return parseInt(_k_u.id) === parseInt(_u.id);
        }) !== -1;
      });
      kicked_users.forEach(function (user) {
        _this3.channelChat({
          message: {
            content: _this3.$i18n.t("_chat.echo_leave_user", {
              username: user.username
            }),
            id: "_vv".concat(_this3.messages.length + user.id),
            sender_id: user.id,
            username: user.username,
            room_id: parseInt(room_id),
            joind: true
          }
        });
      });
      return;
    }

    if (is_invited) users.forEach(function (user) {
      _this3.rooms[index] && _this3.rooms[index].users.push(user);

      _this3.channelChat({
        message: {
          content: _this3.$i18n.t("_chat.echo_join_user", {
            username: user.username
          }),
          id: "_vv".concat(_this3.messages.length + user.id),
          sender_id: user.id,
          username: user.username,
          room_id: parseInt(room_id),
          joind: true
        }
      });
    });
  },
  pushRoom: function pushRoom(_ref8) {
    var room = _ref8.room;
    this.indexRoom = this.rooms && this.rooms.push(room) - 1;
  },
  shiftRoom: function shiftRoom(_ref9) {
    var room = _ref9.room,
        room_id = _ref9.room_id;

    var _room_id = room ? room.room_id : room_id;

    if (!this.indexRoom) {
      this.indexRoom = this.rooms && this.rooms.findIndex(function (e) {
        return e.room_id === _room_id;
      });
    }

    this.rooms.length && this.rooms && this.rooms.splice(this.indexRoom, 1);
    if (!this.rooms.length) this.messages = [];
  },
  pushRoomContent: function pushRoomContent(Content) {
    for (var key in Content) {
      this.rooms[this.indexRoom][key] = Content[key];
    }
  },
  clearRoomIndex: function clearRoomIndex() {
    this.indexRoom = "";
  },
  putRoomIndex: function putRoomIndex(id) {
    return this.indexRoom = this.rooms && this.rooms.findIndex(function (e) {
      return e.room_id === id;
    });
  },
  addRoom: function addRoom() {
    this.openAddRoom = true;
  },
  nameSeries: function nameSeries(_obj) {
    return _obj["users"].reduce(function (acc, curr) {
      return acc + "," + curr.username;
    }, "").substring(1);
  },
  marge: function marge(rooms) {
    return rooms && rooms.filter(function (e, i) {
      return rooms.map(function (e) {
        return e.room_id;
      }).indexOf(e.room_id) === i;
    });
  }
});

/***/ })

}]);