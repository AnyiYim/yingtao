webpackJsonp([8],{

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// wx-radio
exports.default = window.exparser.registerElement({
  is: 'wx-radio',
  template: '\n    <div class="wx-radio-wrapper">\n      <div id="input" class="wx-radio-input" class.wx-radio-input-checked="{{checked}}" class.wx-radio-input-disabled="{{disabled}}" style.background-color="{{_getColor(checked,color)}}" style.border-color="{{_getColor(checked,color)}}"></div>\n      <slot></slot>\n    </div>\n  ',
  behaviors: ['wx-base', 'wx-label-target', 'wx-disabled', 'wx-item'],
  properties: {
    color: {
      type: String,
      value: '#09BB07',
      public: !0
    }
  },
  listeners: {
    tap: '_inputTap'
  },
  _getColor: function _getColor(checked, color) {
    return checked ? color : '';
  },
  _inputTap: function _inputTap() {
    return !this.disabled && void (this.checked || (this.checked = !0, this.changedByTap()));
  },
  handleLabelTap: function handleLabelTap() {
    this._inputTap();
  }
});

/***/ })

});