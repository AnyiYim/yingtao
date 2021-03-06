webpackJsonp([0],{

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = undefined;

var _keys = __webpack_require__(9);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(4);

var _typeof3 = _interopRequireDefault(_typeof2);

var _isIterable2 = __webpack_require__(309);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(81);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _slicedToArray = function () {
  function sliceForIteratorObj(obj, length) {
    var res = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(obj), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        res.push(val);
        if (length && res.length === length) break;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return res;
  }

  return function (obj, length) {
    if (Array.isArray(obj)) return obj;
    if ((0, _isIterable3.default)(Object(obj))) return sliceForIteratorObj(obj, length);
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
  };
}();

var Video = exports.Video = window.exparser.registerElement({
  is: 'wx-video',
  behaviors: ['wx-base', 'wx-player'],
  template: '\n      <div class="wx-video-container">\n        <video id="player" webkit-playsinline style="display: none;"></video>\n        <div id="default" class$="wx-video-bar {{_barType}}" style="display: none;">\n          <div id="controls" class="wx-video-controls">\n            <div id="button" class$="wx-video-button {{_buttonType}}"></div>\n            <div class="wx-video-time" parse-text-content>{{_currentTime}}</div>\n            <div id="progress" class="wx-video-progress">\n              <div id="ball" class="wx-video-ball" style$="left: {{_progressLeft}}px;">\n                <div class="wx-video-inner"></div>\n              </div>\n              <div class="wx-video-inner" style$="width: {{_progressLength}}px;"></div>\n            </div>\n            <div class="wx-video-time" parse-text-content>{{_duration}}</div>\n          </div>\n          <div id="danmuBtn" class$="wx-video-danmu-btn {{_danmuStatus}}" style="display: none">弹幕</div>\n          <div id="fullscreen" class="wx-video-fullscreen"></div>\n        </div>\n        <div id="danmu" class="wx-video-danmu" style="z-index: -9999">\n        </div>\n      </div>\n      <div id="fakebutton"></div>\n    ',
  properties: {
    hidden: {
      type: Boolean,
      value: !1,
      public: !0,
      observer: '_hiddenChanged'
    },
    autoplay: {
      type: Boolean,
      value: !1,
      public: !0
    },
    danmuBtn: {
      type: Boolean,
      value: !1,
      public: !0,
      observer: 'danmuBtnChanged'
    },
    enableDanmu: {
      type: Boolean,
      value: !1,
      observer: 'enableDanmuChanged',
      public: !0
    },
    enableFullScreen: {
      type: Boolean,
      value: !1,
      public: !0
    },
    controls: {
      type: Boolean,
      value: !0,
      public: !0,
      observer: 'controlsChanged'
    },
    danmuList: {
      type: Array,
      value: [],
      public: !0
    },
    objectFit: {
      type: String,
      value: 'contain',
      public: !0,
      observer: 'objectFitChanged'
    },
    duration: {
      type: Number,
      value: 0,
      public: !0,
      observer: 'durationChanged'
    },
    _videoId: {
      type: Number
    },
    _isLockTimeUpdateProgress: {
      type: Boolean,
      value: !1
    },
    _rate: {
      type: Number,
      value: 0
    },
    _progressLeft: {
      type: Number,
      value: -22
    },
    _progressLength: {
      type: Number,
      value: 0
    },
    _barType: {
      type: String,
      value: 'full'
    },
    _danmuStatus: {
      type: String,
      value: ''
    }
  },
  listeners: {
    'ball.touchstart': 'onBallTouchStart'
  },
  _reset: function _reset() {
    this._buttonType = 'play';
    this._currentTime = '00:00';
    this._duration = this._formatTime(this.duration);
    this._progressLeft = -22;
    this._progressLength = 0;
    this._barType = this.controls ? 'full' : 'part';
  },
  _hiddenChanged: function _hiddenChanged(isHidden, t) {
    this.$.player.pause();
    this.$$.style.display = isHidden ? 'none' : '';
  },
  posterChanged: function posterChanged(posterUrl, t) {
    this._isError || (this.$.player.poster = posterUrl);
  },
  srcChanged: function srcChanged(srcURL, t) {
    if (!this._isError && srcURL) {
      var self = this;
      /*
                 if (wd.getPlatform() === 'wechatdevtools') {
                 this.$.player.src = srcURL.replace(
                 'wdfile://',
                 'http://wxfile.open.weixin.qq.com/'
                 )
                 setTimeout(function () {
                 self._reset()
                 }, 0)
                 } else {
                 this.$.player.src = srcURL
                 setTimeout(function () {
                 self._reset()
                 }, 0)
                 }
                 */
      this.$.player.src = srcURL;
      setTimeout(function () {
        self._reset();
      }, 0);
    }
  },
  controlsChanged: function controlsChanged(show, t) {
    this.controls ? this._barType = 'full' : this.danmuBtn ? this._barType = 'part' : this._barType = 'none';
    this.$.fullscreen.style.display = show ? 'block' : 'none';
    this.$.controls.style.display = show ? 'flex' : 'none';
  },
  objectFitChanged: function objectFitChanged(objectFit, t) {
    this.$.player.style.objectFit = objectFit;
  },
  durationChanged: function durationChanged(duration, t) {
    console.log('durationChanged', duration);
    duration > 0 && (this._duration = this._formatTime(Math.floor(duration)));
  },
  danmuBtnChanged: function danmuBtnChanged(isDanmuBtnShow, t) {
    this.controls ? this._barType = 'full' : this.danmuBtn ? this._barType = 'part' : this._barType = 'none';
    this.$.danmuBtn.style.display = isDanmuBtnShow ? '' : 'none';
  },
  enableDanmuChanged: function enableDanmuChanged(enableDanmu, t) {
    this._danmuStatus = enableDanmu ? 'active' : '';
    this.$.danmu.style.zIndex = enableDanmu ? '0' : '-9999';
  },
  actionChanged: function actionChanged(action, t) {
    if ((typeof action === 'undefined' ? 'undefined' : (0, _typeof3.default)(action)) === 'object') {
      var method = action.method,
          data = action.data;
      if (method === 'play') {
        this.$.player.play();
      } else if (method === 'pause') {
        this.$.player.pause();
      } else if (method === 'seek') {
        ;this.$.player.currentTime = data[0], this._resetDanmu();
      } else if (method === 'sendDanmu') {
        var danmuInfo = _slicedToArray(data, 2),
            txt = danmuInfo[0],
            color = danmuInfo[1],
            currentTime = parseInt(this.$.player.currentTime);
        this.danmuObject[currentTime] ? this.danmuObject[currentTime].push({
          text: txt,
          color: color,
          time: currentTime
        }) : this.danmuObject[currentTime] = [{
          text: txt,
          color: color,
          time: currentTime
        }];
      }
    }
  },
  onPlay: function onPlay() {
    var self = this;
    var damuItems = document.querySelectorAll('.wx-video-danmu-item');
    Array.prototype.forEach.apply(damuItems, [function (damuItem) {
      var transitionDuration = 3 * (parseInt(getComputedStyle(damuItem).left) + damuItem.offsetWidth) / (damuItem.offsetWidth + self.$$.offsetWidth);
      damuItem.style.left = '-' + damuItem.offsetWidth + 'px';
      damuItem.style.transitionDuration = transitionDuration + 's';
      damuItem.style.webkitTransitionDuration = transitionDuration + 's';
    }]);
  },
  onPause: function onPause(event) {
    var danmuItems = document.querySelectorAll('.wx-video-danmu-item');
    Array.prototype.forEach.apply(danmuItems, [function (danmu) {
      danmu.style.left = getComputedStyle(danmu).left;
    }]);
  },
  onEnded: function onEnded(event) {},
  _computeRate: function _computeRate(targetPos) {
    var elapsed = this.$.progress.getBoundingClientRect().left,
        totalLen = this.$.progress.offsetWidth,
        rate = (targetPos - elapsed) / totalLen;
    rate < 0 ? rate = 0 : rate > 1 && (rate = 1);
    return rate;
  },
  _setProgress: function _setProgress(rate) {
    this._progressLength = Math.floor(this.$.progress.offsetWidth * rate);
    this._progressLeft = this._progressLength - 22;
  },
  _sendDanmu: function _sendDanmu(data) {
    if (this.playing && !data.flag) {
      data.flag = !0;
      var danmuItem = document.createElement('p');
      danmuItem.className += 'wx-video-danmu-item';
      danmuItem.textContent = data.text;
      danmuItem.style.top = this._genDanmuPosition() + '%';
      danmuItem.style.color = data.color;
      this.$.danmu.appendChild(danmuItem);
      danmuItem.style.left = '-' + danmuItem.offsetWidth + 'px';
    }
  },
  _genDanmuPosition: function _genDanmuPosition() {
    if (this.lastDanmuPosition) {
      var danmuPos = 100 * Math.random();
      Math.abs(danmuPos - this.lastDanmuPosition) < 10 ? this.lastDanmuPosition = (this.lastDanmuPosition + 50) % 100 : this.lastDanmuPosition = danmuPos;
    } else {
      this.lastDanmuPosition = 100 * Math.random();
    }
    return this.lastDanmuPosition;
  },
  attached: function attached() {
    // var e = this
    var self = this;
    H5WeixinJSBridge.publish('videoPlayerInsert', {
      domId: this.id,
      videoPlayerId: 0
    });
    this.$.default.style.display = '';
    this.$.player.style.display = '';
    this.$.player.autoplay = this.autoplay;
    this.$.player.style.objectFit = this.objectFit;
    console.log('attached', this.objectFit);
    this.danmuObject = this.danmuList.reduce(function (acc, danmu) {
      if (typeof danmu.time === 'number' && danmu.time >= 0 && typeof danmu.text === 'string' && danmu.text.length > 0) {
        if (acc[danmu.time]) {
          acc[danmu.time].push({
            text: danmu.text,
            color: danmu.color || '#ffffff'
          });
        } else {
          acc[danmu.time] = [{
            text: danmu.text,
            color: danmu.color || '#ffffff'
          }];
        }
      }
      return acc;
    }, {});
    this.$.button.onclick = function (event) {
      event.stopPropagation();
      self.$.player[self._buttonType]();
    };
    this.$.progress.onclick = function (event) {
      event.stopPropagation();
      var rate = self._computeRate(event.clientX);
      self.$.player.currentTime = self.$.player.duration * rate;
      self._resetDanmu();
    };
    this.$.fullscreen.onclick = function (event) {
      event.stopPropagation();
      self.enableFullScreen = !self.enableFullScreen;
      self.enableFullScreen && self.$.player.webkitEnterFullscreen();
      self.triggerEvent('togglefullscreen', {
        enable: self.enableFullScreen
      });
    };
    this.$.danmuBtn.onclick = function (event) {
      event.stopPropagation();
      self.enableDanmu = !self.enableDanmu;
      self.triggerEvent('toggledanmu', {
        enable: self.enableDanmu
      });
    };

    H5WeixinJSBridge.subscribe('video_' + this.id + '_actionChanged', function (res) {
      self.action = res;
      self.actionChanged(res);
    });
  },
  onTimeUpdate: function onTimeUpdate(event) {
    var self = this;
    event.stopPropagation();
    var rate = this.$.player.currentTime / this.$.player.duration;
    this._isLockTimeUpdateProgress || this._setProgress(rate);
    var danmuList = this.danmuObject[parseInt(this.$.player.currentTime)];
    void 0 !== danmuList && danmuList.length > 0 && danmuList.forEach(function (danmu) {
      self._sendDanmu(danmu);
    });
  },
  detached: function detached() {},
  onBallTouchStart: function onBallTouchStart() {
    if (!this.isLive) {
      var self = this;
      self._isLockTimeUpdateProgress = !0;
      var touchMoveHandler = function touchMoveHandler(event) {
        event.stopPropagation();
        event.preventDefault();
        self._rate = self._computeRate(event.touches[0].clientX);
        self._setProgress(self._rate);
      };
      var touchEndHandler = function touchEndHandler(event) {
        self.$.player.currentTime = self.$.player.duration * self._rate;
        document.removeEventListener('touchmove', touchMoveHandler);
        document.removeEventListener('touchend', touchEndHandler);
        self._isLockTimeUpdateProgress = !1;
        self._resetDanmu();
      };
      document.addEventListener('touchmove', touchMoveHandler);
      document.addEventListener('touchend', touchEndHandler);
    }
  },
  _resetDanmu: function _resetDanmu() {
    var self = this;
    this.$.danmu.innerHTML = '';
    (0, _keys2.default)(this.danmuObject).forEach(function (danmuListKey) {
      self.danmuObject[danmuListKey].forEach(function (danmu) {
        danmu.flag = !1;
      });
    });
  }
});

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(310), __esModule: true };

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(32);
module.exports = __webpack_require__(311);

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(80)
  , ITERATOR  = __webpack_require__(6)('iterator')
  , Iterators = __webpack_require__(33);
module.exports = __webpack_require__(2).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ })

});