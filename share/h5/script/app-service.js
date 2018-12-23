define("config/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
// const RootUrl = 'https://www.yt131.com'
const RootUrl = 'http://127.0.0.1:8000'
// const RootUrl = 'http://127.0.0.1:8000'
// const RootUrl = 'https://alpha.liubao.com';

const ApiRootUrl = RootUrl + '/';

module.exports = {
    SSL: RootUrl,
    Host: RootUrl,
  // Host: 'http://www.yt131.com',
  // SSL: 'https://www.yt131.com',
  // Host: 'http://192.168.0.107:8000',
  // SSL: 'http://192.168.0.107:8000',
  // SSL: 'http://third.alpha.liubao.com',
  // Host: 'http://third.alpha.liubao.com',
  // SSL: 'https://alpha.liubao.com',
  // Host: 'http://alpha.liubao.com',


  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口
  CatalogList: ApiRootUrl + 'api/catalogue/category/', //分类目录全部分类数据接口
  CatalogCurrent: ApiRootUrl + 'api/catalogue/category/',  //分类目录当前分类数据接口
  // Promotions: ApiRootUrl + 'api/promotions/',
  // PromotionsProducts: ApiRootUrl + 'api/promotions/{id}/products/',
  // PromotionsCategory: ApiRootUrl + 'api/promotions/auto/',
    // BestSaleGoods: ApiRootUrl + 'api/promotions/bestsale/',

  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录

  GoodsCount: ApiRootUrl + 'goods/count',  //统计商品总数
  GoodsList: ApiRootUrl + 'api/catalogue/',  //获得商品列表
  GoodsCategory: ApiRootUrl + 'api/catalogue/',  //获得商品数据
  GoodsDetail: ApiRootUrl + 'api/products/',  //获得商品的详情

  // GoodsNew: ApiRootUrl + 'goods/new',  //新品
  // GoodsHot: ApiRootUrl + 'goods/hot',  //热门
  // BrandList: ApiRootUrl + 'brand/list',  //品牌列表
  // BrandDetail: ApiRootUrl + 'brand/detail',  //品牌详情


  GoodsRelated: ApiRootUrl + 'goods/related/',  //商品详情页的关联商品（大家都在看）


  CartList: ApiRootUrl + 'api/basket/', //获取购物车的数据
  CartAdd: ApiRootUrl + 'api/basket/add/', // 添加商品到购物车
  CartUpdate: ApiRootUrl + 'api/basket/update/', // 更新购物车的商品
  CartDelete: ApiRootUrl + 'api/basket/update/', // 删除购物车的商品
  // CartChecked: ApiRootUrl + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: ApiRootUrl + 'api/basket/count/', // 获取购物车商品件数
  CartCheckout: ApiRootUrl + 'api/payment-detail/', // 下单前信息确认

  OrderSubmit: ApiRootUrl + 'api/payment-detail/', // 提交订单
  PayPrepayId: ApiRootUrl + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: ApiRootUrl + 'api/collect/collectlist/',  //收藏列表

  CommentList: ApiRootUrl + 'comment/list',  //评论列表
  CommentCount: ApiRootUrl + 'comment/count',  //评论总数
  CommentPost: ApiRootUrl + 'comment/post',   //发表评论

  TopicList: ApiRootUrl + 'topic/list',  //专题列表
  TopicDetail: ApiRootUrl + 'topic/detail',  //专题详情
  TopicRelated: ApiRootUrl + 'topic/related',  //相关专题

  SearchIndex: ApiRootUrl + 'api/search/',  //搜索页面数据
  SearchResult: ApiRootUrl + 'search/result',  //搜索数据
  SearchHelper: ApiRootUrl + 'search/helper',  //搜索帮助
  SearchClearHistory: ApiRootUrl + 'search/clearhistory',  //搜索帮助

  AddressList: ApiRootUrl + 'api/user/address/',  //收货地址列表
  AddressDetail: ApiRootUrl + 'api/user/address/{}/',  //收货地址详情
  AddressCreate: ApiRootUrl + 'api/user/address/create/',  //保存收货地址
  AddressUpdate: ApiRootUrl + 'api/user/address/{}/update/',  //保存收货地址
  AddressDelete: ApiRootUrl + 'api/user/address/{}/delete/',  //保存收货地址

  RegionList: ApiRootUrl + 'api/administrativearea/',  //获取区域列表

  OrderList: ApiRootUrl + 'api/orders/',  //订单列表
  OrderDetail: ApiRootUrl + 'api/orders/',  //订单详情
  OrderCancel: ApiRootUrl + 'api/order/{}/cancel/',  //取消订单
  OrderExpress: ApiRootUrl + 'order/express', //物流详情
  OrderPaymentQuery: ApiRootUrl + 'api/payment/{ordernum}/query/',
  LineCompele: ApiRootUrl + 'api/order/{order_number}/{line_id}/complete/',

  FootprintList: ApiRootUrl + 'footprint/list',  //足迹列表
  FootprintDelete: ApiRootUrl + 'footprint/delete',  //删除足迹

  MyCompanyData: ApiRootUrl + 'virtual_company/',
  Buy: ApiRootUrl + 'api/payment-detail/',
  Payment: ApiRootUrl + 'api/payment/{}/',

  IdentUserUrl: ApiRootUrl + "accounts/identification/",
  CollectInfo: ApiRootUrl + 'api/collect/collectinfo/',
  LogisticsUrl: ApiRootUrl + "api/express/",
  UploadImage: ApiRootUrl + "api/upload/identify-image/",
  Refund: ApiRootUrl + "api/order/{order_number}/{line_id}/refund/",

  SaveOpenId: ApiRootUrl + "wxpay/",
  Balance: ApiRootUrl + 'api/user/balance/',


  UserInfoSet: ApiRootUrl + 'api/user/set/userinfo/',
  GenCount: ApiRootUrl + 'api/user/gen-user/count/',
  AddGenUser: ApiRootUrl + 'api/user/gen-user/{mobile}/update/',
  ShareGoods: ApiRootUrl + 'api/product/{goods_id}/share/',
  ModifyPassword: ApiRootUrl + 'api/user/modify/password/',
  GenStoreApi: ApiRootUrl + 'api/store/',

  WxLogin: ApiRootUrl + 'api/auth/wx/snsapi_base/',
  unBindWeixin: ApiRootUrl + 'api/auth/wx/unbind/',
  PromotionActivate: ApiRootUrl + 'api/promotions/activate/',

  handleInvite: ApiRootUrl + 'api/user/invate/partner/',
  GetScanImg: ApiRootUrl + 'api/qrcode/img/',
  WxConfigSign: ApiRootUrl + 'api/user/wxconfigsign/',

  UserInfoByProfileOpenid: ApiRootUrl + 'api/user/userinfo-by-profileopenid/',
  AddPrevGenUser: ApiRootUrl + 'api/user/prev-gen-user/update/',
  DailyBonusRecord: ApiRootUrl + 'api/bonus/daily-record/',

  Promotions: ApiRootUrl + 'api/promotions/',
  PromotionsProducts: ApiRootUrl + 'api/promotions/{id}/products/',
  BestSaleGoods: ApiRootUrl + 'api/promotions/bestsale/',
  PromotionActivate: ApiRootUrl + 'api/promotions/activate/',

  BoughtNumberProduct: ApiRootUrl + 'api/user/bought-product/{id}/',

};

});;define("lib/clipboard/clipboard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */

        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(6);
var delegate = __webpack_require__(5);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, d, w, options) {
			document = d;
			window = w;
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */

        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(4);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ })
/******/ ]);
});

});;define("lib/clipboard/clipboard.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});
});;define("lib/pingpp/pingpp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pingpp=e()}}(function(){return function e(n,t,a){function r(l,c){if(!t[l]){if(!n[l]){var o="function"==typeof require&&require;if(!c&&o)return o(l,!0);if(i)return i(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var u=t[l]={exports:{}};n[l][0].call(u.exports,function(e){var t=n[l][1][e];return r(t||e)},u,u.exports,e,n,t,a)}return t[l].exports}for(var i="function"==typeof require&&require,l=0;l<a.length;l++)r(a[l]);return r}({1:[function(e,n,t){var a=e('./payment_elements.js');n.exports={userCallback:void 0,urlReturnCallback:void 0,urlReturnChannels:['alipay_pc_direct'],innerCallback:function(e,n){'function'==typeof this.userCallback&&(void 0===n&&(n=this.error()),this.userCallback(e,n),this.userCallback=void 0,a.clear())},error:function(e,n){return e=void 0===e?'':e,n=void 0===n?'':n,{msg:e,extra:n}},triggerUrlReturnCallback:function(e,n){'function'==typeof this.urlReturnCallback&&this.urlReturnCallback(e,n)},shouldReturnUrlByCallback:function(e){return'function'==typeof this.urlReturnCallback&&-1!==this.urlReturnChannels.indexOf(e)}}},{"./payment_elements.js":26}],2:[function(e,n,t){var a=e('../utils'),r={}.hasOwnProperty;n.exports={ALIPAY_PC_DIRECT_URL:'https://mapi.alipay.com/gateway.do',handleCharge:function(e){var n=e.channel,t=e.credential[n],i=this.ALIPAY_PC_DIRECT_URL;r.call(t,'channel_url')&&(i=t.channel_url),r.call(t,'_input_charset')||r.call(t,'service')&&'create_direct_pay_by_user'===t.service&&(t._input_charset='utf-8');var l=a.stringifyData(t,n,!0);a.redirectTo(i+'?'+l,n)}}},{"../utils":29}],3:[function(e,n,t){var a={}.hasOwnProperty,r=e('../callbacks');n.exports={handleCharge:function(e){var n=e.credential[e.channel];a.call(n,'transaction_no')?this.tradePay(n.transaction_no):r.innerCallback('fail',r.error('invalid_credential','missing_field_transaction_no'))},ready:function(e){window.AlipayJSBridge?e&&e():document.addEventListener('AlipayJSBridgeReady',e,!1)},tradePay:function(e){this.ready(function(){AlipayJSBridge.call('tradePay',{tradeNO:e},function(e){'9000'==e.resultCode?r.innerCallback('success'):'6001'==e.resultCode?r.innerCallback('cancel',r.error(e.result)):r.innerCallback('fail',r.error(e.result))})})}}},{"../callbacks":1}],4:[function(e,n,t){var a=e('../utils'),r=e('../mods'),i={}.hasOwnProperty;n.exports={ALIPAY_WAP_URL_OLD:'https://wappaygw.alipay.com/service/rest.htm',ALIPAY_WAP_URL:'https://mapi.alipay.com/gateway.do',handleCharge:function(e){var n=e.channel,t=e.credential[n],l=this.ALIPAY_WAP_URL;i.call(t,'req_data')?l=this.ALIPAY_WAP_URL_OLD:i.call(t,'channel_url')&&(l=t.channel_url),i.call(t,'_input_charset')||(i.call(t,'service')&&'alipay.wap.create.direct.pay.by.user'===t.service||i.call(t,'req_data'))&&(t._input_charset='utf-8');var c=l+'?'+a.stringifyData(t,n,!0),o=r.getExtraModule('ap');a.inWeixin()&&void 0!==o?o.pay(c):a.redirectTo(c,n)}}},{"../mods":25,"../utils":29}],5:[function(e,n,t){var a=e('../utils'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){var n=e.channel,t=e.credential[n];i.call(t,'url')?a.redirectTo(t.url+'?'+a.stringifyData(t,n),n):r.innerCallback('fail',r.error('invalid_credential','missing_field:url'))}}},{"../callbacks":1,"../utils":29}],6:[function(e,n,t){var a=e('../utils'),r={}.hasOwnProperty;n.exports={CMB_WALLET_URL:'https://netpay.cmbchina.com/netpayment/BaseHttp.dll?MB_EUserPay',handleCharge:function(e){var n=e.credential[e.channel],t=this.CMB_WALLET_URL;r.call(n,'ChannelUrl')&&(t=n.ChannelUrl,delete n.ChannelUrl),r.call(n,'channelVersion')&&delete n.channelVersion,a.formSubmit(t,'post',n)}}},{"../utils":29}],7:[function(e,n,t){var a=e('../../utils'),r=e('../../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){var n,t=e.credential[e.channel];if('string'==typeof t)n=t;else{if(!i.call(t,'url'))return void r.innerCallback('fail',r.error('invalid_credential','credential format is incorrect'));n=t.url}a.redirectTo(n,e.channel)}}},{"../../callbacks":1,"../../utils":29}],8:[function(e,n,t){var a=e('../utils');n.exports={CP_B2B_URL:'https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0',handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.CP_B2B_URL,'post',n)}}},{"../utils":29}],9:[function(e,n,t){var a=e('../../stash'),r={}.hasOwnProperty;!function(){var e={},t={};t.PADCHAR='=',t.ALPHA='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',t.makeDOMException=function(){try{return new DOMException(DOMException.INVALID_CHARACTER_ERR)}catch(n){var e=new Error('DOM Exception 5');return e.code=e.number=5,e.name=e.description='INVALID_CHARACTER_ERR',e.toString=function(){return'Error: '+e.name+': '+e.message},e}},t.getbyte64=function(e,n){var a=t.ALPHA.indexOf(e.charAt(n));if(-1===a)throw t.makeDOMException();return a},t.decode=function(e){e=''+e;var n,a,r,i=t.getbyte64,l=e.length;if(0===l)return e;if(l%4!=0)throw t.makeDOMException();n=0,e.charAt(l-1)===t.PADCHAR&&(n=1,e.charAt(l-2)===t.PADCHAR&&(n=2),l-=4);var c=[];for(a=0;a<l;a+=4)r=i(e,a)<<18|i(e,a+1)<<12|i(e,a+2)<<6|i(e,a+3),c.push(String.fromCharCode(r>>16,r>>8&255,255&r));switch(n){case 1:r=i(e,a)<<18|i(e,a+1)<<12|i(e,a+2)<<6,c.push(String.fromCharCode(r>>16,r>>8&255));break;case 2:r=i(e,a)<<18|i(e,a+1)<<12,c.push(String.fromCharCode(r>>16))}return c.join('')},t.getbyte=function(e,n){var a=e.charCodeAt(n);if(a>255)throw t.makeDOMException();return a},t.encode=function(e){if(1!==arguments.length)throw new SyntaxError('Not enough arguments');var n,a,r=t.PADCHAR,i=t.ALPHA,l=t.getbyte,c=[],o=(e=''+e).length-e.length%3;if(0===e.length)return e;for(n=0;n<o;n+=3)a=l(e,n)<<16|l(e,n+1)<<8|l(e,n+2),c.push(i.charAt(a>>18)),c.push(i.charAt(a>>12&63)),c.push(i.charAt(a>>6&63)),c.push(i.charAt(63&a));switch(e.length-o){case 1:a=l(e,n)<<16,c.push(i.charAt(a>>18)+i.charAt(a>>12&63)+r+r);break;case 2:a=l(e,n)<<16|l(e,n+1)<<8,c.push(i.charAt(a>>18)+i.charAt(a>>12&63)+i.charAt(a>>6&63)+r)}return c.join('')},e.url='pay.htm',e.pay=function(n){var i=encodeURIComponent(t.encode(n));r.call(a,'APURL')&&(e.url=a.APURL),location.href=e.url+'?goto='+i},e.decode=function(e){return t.decode(decodeURIComponent(e))},n.exports=e}()},{"../../stash":27}],10:[function(e,n,t){var a=e('./commons/redirect_base');n.exports={handleCharge:function(e){a.handleCharge(e)}}},{"./commons/redirect_base":7}],11:[function(e,n,t){arguments[4][10][0].apply(t,arguments)},{"./commons/redirect_base":7,dup:10}],12:[function(e,n,t){var a=e('./commons/redirect_base'),r=e('../callbacks'),i=e('../utils'),l={}.hasOwnProperty;n.exports={handleCharge:function(e){var n=e.extra;if(l.call(n,'pay_channel')){var t=n.pay_channel;'wx'!==t||i.inWeixin()?'alipay'!==t||i.inAlipay()?a.handleCharge(e):r.innerCallback('fail',r.error('Not in the Alipay browser')):r.innerCallback('fail',r.error('Not in the WeChat browser'))}else r.innerCallback('fail',r.error('invalid_charge','charge 格式不正确'))}}},{"../callbacks":1,"../utils":29,"./commons/redirect_base":7}],13:[function(e,n,t){var a=e('../utils'),r={}.hasOwnProperty;n.exports={JDPAY_WAP_URL_OLD:'https://m.jdpay.com/wepay/web/pay',JDPAY_H5_URL:'https://h5pay.jd.com/jdpay/saveOrder',JDPAY_PC_URL:'https://wepay.jd.com/jdpay/saveOrder',handleCharge:function(e){var n=e.credential[e.channel],t=this.JDPAY_H5_URL;r.call(n,'channelUrl')?(t=n.channelUrl,delete n.channelUrl):r.call(n,'merchantRemark')&&(t=this.JDPAY_WAP_URL_OLD),a.formSubmit(t,'post',n)}}},{"../utils":29}],14:[function(e,n,t){var a=e('../callbacks'),r=e('../utils'),i=e('../stash'),l={}.hasOwnProperty;n.exports={SRC_URL:'https://open.mobile.qq.com/sdk/qqapi.js?_bid=152',ID:'mqq_api',handleCharge:function(e){var n=e.credential[e.channel];l.call(n,'token_id')?(i.tokenId=n.token_id,r.loadUrlJs(this.ID,this.SRC_URL,this.callpay)):a.innerCallback('fail',a.error('invalid_credential','missing_token_id'))},callpay:function(){if('undefined'!=typeof mqq){if(0==mqq.QQVersion)return a.innerCallback('fail',a.error('Not in the QQ client')),void delete i.tokenId;mqq.tenpay.pay({tokenId:i.tokenId},function(e){0==e.resultCode?a.innerCallback('success'):a.innerCallback('fail',a.error(e.retmsg))})}else a.innerCallback('fail',a.error('network_err'));delete i.tokenId}}},{"../callbacks":1,"../stash":27,"../utils":29}],15:[function(e,n,t){var a=e('../utils');n.exports={UPACP_PC_URL:'https://gateway.95516.com/gateway/api/frontTransReq.do',handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.UPACP_PC_URL,'post',n)}}},{"../utils":29}],16:[function(e,n,t){var a=e('../utils');n.exports={UPACP_WAP_URL:'https://gateway.95516.com/gateway/api/frontTransReq.do',handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.UPACP_WAP_URL,'post',n)}}},{"../utils":29}],17:[function(e,n,t){var a=e('../stash'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){for(var n=e.credential[e.channel],t=['appId','timeStamp','nonceStr','package','signType','paySign'],l=0;l<t.length;l++)if(!i.call(n,t[l]))return void r.innerCallback('fail',r.error('invalid_credential','missing_field_'+t[l]));a.jsApiParameters=n,this.callpay()},wxLiteEnabled:function(){return'undefined'!=typeof wx&&wx.requestPayment},callpay:function(){if(this.wxLiteEnabled()){var e=a.jsApiParameters;delete e.appId,e.complete=function(e){'requestPayment:ok'===e.errMsg&&r.innerCallback('success'),'requestPayment:cancel'===e.errMsg&&r.innerCallback('cancel',r.error('用户取消支付')),'undefined'!==e.err_code&&'undefined'!==e.err_desc&&r.innerCallback('fail',r.error(e.err_desc,e))},wx.requestPayment(e)}else ('请在微信小程序中打开')},runTestMode:function(e){wx.showModal({title:'提示',content:'因 "微信小程序" 限制 域名的原因 暂不支持 模拟付款 请使用 livekey 获取 charge 进行支付'})}}},{"../callbacks":1,"../stash":27}],18:[function(e,n,t){var a=e('../callbacks'),r=e('../utils'),i=e('../stash'),l=e('../mods'),c={}.hasOwnProperty;n.exports={PINGPP_NOTIFY_URL_BASE:'https://notify.pingxx.com/notify',handleCharge:function(e){for(var n=e.credential[e.channel],t=['appId','timeStamp','nonceStr','package','signType','paySign'],r=0;r<t.length;r++)if(!c.call(n,t[r]))return void a.innerCallback('fail',a.error('invalid_credential','missing_field_'+t[r]));i.jsApiParameters=n,this.callpay()},callpay:function(){var e=this,n=l.getExtraModule('wx_jssdk');if(void 0!==n&&n.jssdkEnabled())n.callpay();else if('undefined'==typeof ServiceJSBridge){var t=function(){e.jsApiCall()};document.addEventListener?document.addEventListener('WeixinJSBridgeReady',t,!1):document.attachEvent&&(document.attachEvent('WeixinJSBridgeReady',t),document.attachEvent('onWeixinJSBridgeReady',t))}else this.jsApiCall()},jsApiCall:function(){c.call(i,'jsApiParameters')&&ServiceJSBridge.invoke('getBrandWCPayRequest',i.jsApiParameters,function(e){delete i.jsApiParameters,'get_brand_wcpay_request:ok'==e.err_msg?a.innerCallback('success'):'get_brand_wcpay_request:cancel'==e.err_msg?a.innerCallback('cancel'):a.innerCallback('fail',a.error('wx_result_fail',e.err_msg))})},runTestMode:function(e){if(confirm('模拟付款？')){var n='/charges/'+e.id;r.request(this.PINGPP_NOTIFY_URL_BASE+n+'?livemode=false','GET',null,function(e,n){if(n>=200&&n<400&&'success'==e)a.innerCallback('success');else{var t='http_code:'+n+';response:'+e;a.innerCallback('fail',a.error('testmode_notify_fail',t))}},function(){a.innerCallback('fail',a.error('network_err'))})}}}},{"../callbacks":1,"../mods":25,"../stash":27,"../utils":29}],19:[function(e,n,t){var a=e('../utils'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){var n=e.credential[e.channel];'string'==typeof n?a.redirectTo(n,e.channel):'object'==typeof n&&i.call(n,'url')?a.redirectTo(n.url,e.channel):r.innerCallback('fail',r.error('invalid_credential','credential 格式不正确'))}}},{"../callbacks":1,"../utils":29}],20:[function(e,n,t){var a=e('../utils'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={YEEPAY_WAP_URL:'https://ok.yeepay.com/paymobile/api/pay/request',YEEPAY_WAP_TEST_URL:'http://mobiletest.yeepay.com/paymobile/api/pay/request',handleCharge:function(e){for(var n=e.channel,t=e.credential[n],l=['merchantaccount','encryptkey','data'],c=0;c<l.length;c++)if(!i.call(t,l[c]))return void r.innerCallback('fail',r.error('invalid_credential','missing_field_'+l[c]));var o;o=i.call(t,'mode')&&'test'==t.mode?this.YEEPAY_WAP_TEST_URL:this.YEEPAY_WAP_URL,a.redirectTo(o+'?'+a.stringifyData(t,n,!0),e.channel)}}},{"../callbacks":1,"../utils":29}],21:[function(e,n,t){var a=e('./utils'),r=e('./stash'),i=e('./libs/md5'),l={seperator:'###',limit:1,report_url:'https://statistics.pingxx.com/one_stats',timeout:100},c=function(e,n){var t=new RegExp('(^|&)'+n+'=([^&]*)(&|$)','i'),a=e.substr(0).match(t);return null!==a?unescape(a[2]):null},o=function(){return navigator.userAgent},s=function(){return window.location.host};l.store=function(e){if('undefined'!=typeof localStorage&&null!==localStorage){var n=this,t={};t.app_id=e.app_id||r.app_id||'app_not_defined',t.ch_id=e.ch_id||'',t.channel=e.channel||'',t.type=e.type||'',t.user_agent=o(),t.host=s(),t.time=(new Date).getTime(),t.puid=r.puid;var a='app_id='+t.app_id+'&channel='+t.channel+'&ch_id='+t.ch_id+'&host='+t.host+'&time='+t.time+'&type='+t.type+'&user_agent='+t.user_agent+'&puid='+t.puid,i=a;null!==localStorage.getItem('PPP_ONE_STATS')&&0!==localStorage.getItem('PPP_ONE_STATS').length&&(i=localStorage.getItem('PPP_ONE_STATS')+n.seperator+a);try{localStorage.setItem('PPP_ONE_STATS',i)}catch(e){}}},l.send=function(){if('undefined'!=typeof localStorage&&null!==localStorage){var e=this,n=localStorage.getItem('PPP_ONE_STATS');if(!(null===n||n.split(e.seperator).length<e.limit))try{for(var t=[],r=n.split(e.seperator),l=i(r.join('&')),o=0;o<r.length;o++)t.push({app_id:c(r[o],'app_id'),channel:c(r[o],'channel'),ch_id:c(r[o],'ch_id'),host:c(r[o],'host'),time:c(r[o],'time'),type:c(r[o],'type'),user_agent:c(r[o],'user_agent'),puid:c(r[o],'puid')});a.request(e.report_url,'POST',t,function(e,n){200==n&&localStorage.removeItem('PPP_ONE_STATS')},void 0,{'X-Pingpp-Report-Token':l})}catch(e){}}},l.report=function(e){var n=this;n.store(e),setTimeout(function(){n.send()},n.timeout)},n.exports=l},{"./libs/md5":23,"./stash":27,"./utils":29}],22:[function(e,n,t){var a=e('./stash'),r=e('./utils'),i=e('./collection');n.exports={SRC_URL:'https://cookie.pingxx.com',init:function(){var e=this;r.documentReady(function(){try{e.initPuid()}catch(e){}})},initPuid:function(){if('undefined'!=typeof window&&'undefined'!=typeof localStorage&&null!==localStorage){var e=localStorage.getItem('pingpp_uid');if(null===e){e=r.randomString();try{localStorage.setItem('pingpp_uid',e)}catch(e){}}if(a.puid=e,!document.getElementById('p_analyse_iframe')){var n;try{n=document.createElement('iframe')}catch(e){n=document.createElement('<iframe name="ifr"></iframe>')}n.id='p_analyse_iframe',n.src=this.SRC_URL+'/?puid='+e,n.style.display='none',document.body.appendChild(n)}setTimeout(function(){i.send()},0)}}}},{"./collection":21,"./stash":27,"./utils":29}],23:[function(e,n,t){!function(){function e(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function t(e,n){return e<<n|e>>>32-n}function a(n,a,r,i,l,c){return e(t(e(e(a,n),e(i,c)),l),r)}function r(e,n,t,r,i,l,c){return a(n&t|~n&r,e,n,i,l,c)}function i(e,n,t,r,i,l,c){return a(n&r|t&~r,e,n,i,l,c)}function l(e,n,t,r,i,l,c){return a(n^t^r,e,n,i,l,c)}function c(e,n,t,r,i,l,c){return a(t^(n|~r),e,n,i,l,c)}function o(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var a,o,s,u,d,p=1732584193,f=-271733879,h=-1732584194,_=271733878;for(a=0;a<n.length;a+=16)o=p,s=f,u=h,d=_,f=c(f=c(f=c(f=c(f=l(f=l(f=l(f=l(f=i(f=i(f=i(f=i(f=r(f=r(f=r(f=r(f,h=r(h,_=r(_,p=r(p,f,h,_,n[a],7,-680876936),f,h,n[a+1],12,-389564586),p,f,n[a+2],17,606105819),_,p,n[a+3],22,-1044525330),h=r(h,_=r(_,p=r(p,f,h,_,n[a+4],7,-176418897),f,h,n[a+5],12,1200080426),p,f,n[a+6],17,-1473231341),_,p,n[a+7],22,-45705983),h=r(h,_=r(_,p=r(p,f,h,_,n[a+8],7,1770035416),f,h,n[a+9],12,-1958414417),p,f,n[a+10],17,-42063),_,p,n[a+11],22,-1990404162),h=r(h,_=r(_,p=r(p,f,h,_,n[a+12],7,1804603682),f,h,n[a+13],12,-40341101),p,f,n[a+14],17,-1502002290),_,p,n[a+15],22,1236535329),h=i(h,_=i(_,p=i(p,f,h,_,n[a+1],5,-165796510),f,h,n[a+6],9,-1069501632),p,f,n[a+11],14,643717713),_,p,n[a],20,-373897302),h=i(h,_=i(_,p=i(p,f,h,_,n[a+5],5,-701558691),f,h,n[a+10],9,38016083),p,f,n[a+15],14,-660478335),_,p,n[a+4],20,-405537848),h=i(h,_=i(_,p=i(p,f,h,_,n[a+9],5,568446438),f,h,n[a+14],9,-1019803690),p,f,n[a+3],14,-187363961),_,p,n[a+8],20,1163531501),h=i(h,_=i(_,p=i(p,f,h,_,n[a+13],5,-1444681467),f,h,n[a+2],9,-51403784),p,f,n[a+7],14,1735328473),_,p,n[a+12],20,-1926607734),h=l(h,_=l(_,p=l(p,f,h,_,n[a+5],4,-378558),f,h,n[a+8],11,-2022574463),p,f,n[a+11],16,1839030562),_,p,n[a+14],23,-35309556),h=l(h,_=l(_,p=l(p,f,h,_,n[a+1],4,-1530992060),f,h,n[a+4],11,1272893353),p,f,n[a+7],16,-155497632),_,p,n[a+10],23,-1094730640),h=l(h,_=l(_,p=l(p,f,h,_,n[a+13],4,681279174),f,h,n[a],11,-358537222),p,f,n[a+3],16,-722521979),_,p,n[a+6],23,76029189),h=l(h,_=l(_,p=l(p,f,h,_,n[a+9],4,-640364487),f,h,n[a+12],11,-421815835),p,f,n[a+15],16,530742520),_,p,n[a+2],23,-995338651),h=c(h,_=c(_,p=c(p,f,h,_,n[a],6,-198630844),f,h,n[a+7],10,1126891415),p,f,n[a+14],15,-1416354905),_,p,n[a+5],21,-57434055),h=c(h,_=c(_,p=c(p,f,h,_,n[a+12],6,1700485571),f,h,n[a+3],10,-1894986606),p,f,n[a+10],15,-1051523),_,p,n[a+1],21,-2054922799),h=c(h,_=c(_,p=c(p,f,h,_,n[a+8],6,1873313359),f,h,n[a+15],10,-30611744),p,f,n[a+6],15,-1560198380),_,p,n[a+13],21,1309151649),h=c(h,_=c(_,p=c(p,f,h,_,n[a+4],6,-145523070),f,h,n[a+11],10,-1120210379),p,f,n[a+2],15,718787259),_,p,n[a+9],21,-343485551),p=e(p,o),f=e(f,s),h=e(h,u),_=e(_,d);return[p,f,h,_]}function s(e){var n,t='';for(n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function u(e){var n,t=[];for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function d(e){return s(o(u(e),8*e.length))}function p(e,n){var t,a,r=u(e),i=[],l=[];for(i[15]=l[15]=void 0,r.length>16&&(r=o(r,8*e.length)),t=0;t<16;t+=1)i[t]=909522486^r[t],l[t]=1549556828^r[t];return a=o(i.concat(u(n)),512+8*n.length),s(o(l.concat(a),640))}function f(e){var n,t,a='';for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),a+="0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n);return a}function h(e){return unescape(encodeURIComponent(e))}function _(e){return d(h(e))}function y(e){return f(_(e))}function m(e,n){return p(h(e),h(n))}function g(e,n){return f(m(e,n))}n.exports=function(e,n,t){return n?t?m(n,e):g(n,e):t?_(e):y(e)}}()},{}],24:[function(e,n,t){var a=e('./version').v,r={}.hasOwnProperty,PingppSDK=function(){e('./init').init()};PingppSDK.prototype.version=a,n.exports=new PingppSDK;var i=e('./testmode'),l=e('./callbacks'),c=e('./mods'),o=e('./stash'),s=e('./collection'),u=e('./payment_elements');PingppSDK.prototype.createPayment=function(e,n,t,a){if('function'==typeof n&&(l.userCallback=n),u.init(e),r.call(u,'id'))if(r.call(u,'channel')){r.call(u,'app')&&('string'==typeof u.app?o.app_id=u.app:'object'==typeof u.app&&'string'==typeof u.app.id&&(o.app_id=u.app.id)),s.report({type:o.type||'pure_sdk_click',channel:u.channel,ch_id:u.id});var d=u.channel;if(r.call(u,'credential'))if(u.credential)if(r.call(u.credential,d))if(r.call(u,'livemode')){var p=c.getChannelModule(d);if(void 0===p)return console.error('channel module "'+d+'" is undefined'),void l.innerCallback('fail',l.error('invalid_channel','channel module "'+d+'" is undefined'));!1!==u.livemode?(void 0!==t&&(o.signature=t),'boolean'==typeof a&&(o.debug=a),p.handleCharge(u)):r.call(p,'runTestMode')?p.runTestMode(u):i.runTestMode(u)}else l.innerCallback('fail',l.error('invalid_charge','no_livemode_field'));else l.innerCallback('fail',l.error('invalid_credential','credential_is_incorrect'));else l.innerCallback('fail',l.error('invalid_credential','credential_is_undefined'));else l.innerCallback('fail',l.error('invalid_charge','no_credential'))}else l.innerCallback('fail',l.error('invalid_charge','no_channel'));else l.innerCallback('fail',l.error('invalid_charge','no_charge_id'))},PingppSDK.prototype.setAPURL=function(e){o.APURL=e},PingppSDK.prototype.setUrlReturnCallback=function(e,n){if('function'!=typeof e)throw'callback need to be a function';if(l.urlReturnCallback=e,void 0!==n){if(!Array.isArray(n))throw'channels need to be an array';l.urlReturnChannels=n}}},{"./callbacks":1,"./collection":21,"./init":22,"./mods":25,"./payment_elements":26,"./stash":27,"./testmode":28,"./version":30}],25:[function(e,n,t){var a={}.hasOwnProperty,r={};n.exports=r,r.channels={alipay_pc_direct:e('./channels/alipay_pc_direct'),alipay_qr:e('./channels/alipay_qr'),alipay_wap:e('./channels/alipay_wap'),bfb_wap:e('./channels/bfb_wap'),cmb_wallet:e('./channels/cmb_wallet'),cp_b2b:e('./channels/cp_b2b'),fqlpay_qr:e('./channels/fqlpay_qr'),fqlpay_wap:e('./channels/fqlpay_wap'),isv_wap:e('./channels/isv_wap'),jdpay_wap:e('./channels/jdpay_wap'),qpay_pub:e('./channels/qpay_pub'),upacp_pc:e('./channels/upacp_pc'),upacp_wap:e('./channels/upacp_wap'),wx_lite:e('./channels/wx_lite'),wx_pub:e('./channels/wx_pub'),wx_wap:e('./channels/wx_wap'),yeepay_wap:e('./channels/yeepay_wap')},r.extras={ap:e('./channels/extras/ap')},r.getChannelModule=function(e){if(a.call(r.channels,e))return r.channels[e]},r.getExtraModule=function(e){if(a.call(r.extras,e))return r.extras[e]}},{"./channels/alipay_pc_direct":2,"./channels/alipay_qr":3,"./channels/alipay_wap":4,"./channels/bfb_wap":5,"./channels/cmb_wallet":6,"./channels/cp_b2b":8,"./channels/extras/ap":9,"./channels/fqlpay_qr":10,"./channels/fqlpay_wap":11,"./channels/isv_wap":12,"./channels/jdpay_wap":13,"./channels/qpay_pub":14,"./channels/upacp_pc":15,"./channels/upacp_wap":16,"./channels/wx_lite":17,"./channels/wx_pub":18,"./channels/wx_wap":19,"./channels/yeepay_wap":20}],26:[function(e,n,t){var a=e('./callbacks'),r={}.hasOwnProperty;n.exports={id:null,or_id:null,channel:null,app:null,credential:{},extra:null,livemode:null,order_no:null,time_expire:null,init:function(e){var n;if('string'==typeof e)try{n=JSON.parse(e)}catch(e){return void a.innerCallback('fail',a.error('json_decode_fail',e))}else n=e;{if(void 0!==n){if(r.call(n,'object')&&'order'==n.object){n.or_id=n.id,n.order_no=n.merchant_order_no;var t=n.charge_essentials;if(n.channel=t.channel,n.credential=t.credential,n.extra=t.extra,r.call(n,'charge')&&null!=n.charge)n.id=n.charge;else if(r.call(t,'id')&&null!=t.id)n.id=t.id;else if(r.call(n,'charges'))for(var i=0;i<n.charges.data.length;i++)if(n.charges.data[i].channel===t.channel){n.id=n.charges.data[i].id;break}}else r.call(n,'object')&&'recharge'==n.object&&(n=n.charge);for(var l in this)r.call(n,l)&&(this[l]=n[l]);return this}a.innerCallback('fail',a.error('json_decode_fail'))}},clear:function(){for(var e in this)'function'!=typeof this[e]&&(this[e]=null)}}},{"./callbacks":1}],27:[function(e,n,t){n.exports={}},{}],28:[function(e,n,t){var a=e('./utils'),r={}.hasOwnProperty;n.exports={PINGPP_MOCK_URL:'http://sissi.pingxx.com/mock.php',runTestMode:function(e){var n={ch_id:e.id,scheme:'http',channel:e.channel};r.call(e,'order_no')?n.order_no=e.order_no:r.call(e,'orderNo')&&(n.order_no=e.orderNo),r.call(e,'time_expire')?n.time_expire=e.time_expire:r.call(e,'timeExpire')&&(n.time_expire=e.timeExpire),r.call(e,'extra')&&(n.extra=encodeURIComponent(JSON.stringify(e.extra))),a.redirectTo(this.PINGPP_MOCK_URL+'?'+a.stringifyData(n),e.channel)}}},{"./utils":29}],29:[function(e,n,t){var a=e('./callbacks'),r={}.hasOwnProperty,i=n.exports={stringifyData:function(e,n,t){void 0===t&&(t=!1);var a=[];for(var i in e)r.call(e,i)&&'function'!=typeof e[i]&&('bfb_wap'==n&&'url'==i||'yeepay_wap'==n&&'mode'==i||'channel_url'!=i&&a.push(i+'='+(t?encodeURIComponent(e[i]):e[i])));return a.join('&')},request:function(e,n,t,a,l,c){if('undefined'!=typeof XMLHttpRequest){var o=new XMLHttpRequest;if(void 0!==o.timeout&&(o.timeout=6e3),'GET'===(n=n.toUpperCase())&&'object'==typeof t&&t&&(e+='?'+i.stringifyData(t,'',!0)),o.open(n,e,!0),void 0!==c)for(var s in c)r.call(c,s)&&o.setRequestHeader(s,c[s]);'POST'===n?(o.setRequestHeader('Content-type','application/json; charset=utf-8'),o.send(JSON.stringify(t))):o.send(),void 0===a&&(a=function(){}),void 0===l&&(l=function(){}),o.onreadystatechange=function(){4==o.readyState&&a(o.responseText,o.status,o)},o.onerror=function(e){l(o,0,e)}}else ('Function XMLHttpRequest is undefined.')},formSubmit:function(e,n,t){if('undefined'!=typeof window){var a=document.createElement('form');a.setAttribute('method',n),a.setAttribute('action',e);for(var i in t)if(r.call(t,i)){var l=document.createElement('input');l.setAttribute('type','hidden'),l.setAttribute('name',i),l.setAttribute('value',t[i]),a.appendChild(l)}document.body.appendChild(a),a.submit()}else ('Not a browser, form submit url: '+e)},randomString:function(e){void 0===e&&(e=32);for(var n='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',t=n.length,a='',r=0;r<e;r++)a+=n.charAt(Math.floor(Math.random()*t));return a},redirectTo:function(e,n){a.shouldReturnUrlByCallback(n)?a.triggerUrlReturnCallback(null,e):'undefined'!=typeof window?window.location.href=e:('Not a browser, redirect url: '+e)},inWeixin:function(){return'undefined'!=typeof navigator&&-1!==navigator.userAgent.toLowerCase().indexOf('micromessenger')},inAlipay:function(){return'undefined'!=typeof navigator&&-1!==navigator.userAgent.toLowerCase().indexOf('alipayclient')},documentReady:function(e){'undefined'!=typeof document?'loading'!=document.readyState?e():document.addEventListener('DOMContentLoaded',e):e()},loadUrlJs:function(e,n,t){var a=document.getElementsByTagName('head')[0],r=null;null==document.getElementById(e)?((r=document.createElement('script')).setAttribute('type','text/javascript'),r.setAttribute('src',n),r.setAttribute('id',e),r.async=!0,null!=t&&(r.onload=r.onreadystatechange=function(){if(r.ready)return!1;r.readyState&&'loaded'!=r.readyState&&'complete'!=r.readyState||(r.ready=!0,t())}),a.appendChild(r)):null!=t&&t()}}},{"./callbacks":1}],30:[function(e,n,t){n.exports={v:'2.2.1'}},{}]},{},[24])(24)});
//# sourceMappingURL=pingpp.js.map

});;define("lib/wx/fingerprint2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
!function(e, t, i) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t[e] = i()
}("Fingerprint2", this, function() {
    "use strict";
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var i;
        if (null == this)
            throw new TypeError("'this' is null or undefined");
        var a = Object(this)
          , r = a.length >>> 0;
        if (0 === r)
            return -1;
        var n = +t || 0;
        if (Math.abs(n) === 1 / 0 && (n = 0),
        n >= r)
            return -1;
        for (i = Math.max(n >= 0 ? n : r - Math.abs(n), 0); r > i; ) {
            if (i in a && a[i] === e)
                return i;
            i++
        }
        return -1
    }
    );
    var e = function(e) {
        var t = {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(e, t),
        this.nativeForEach = Array.prototype.forEach,
        this.nativeMap = Array.prototype.map
    };
    return e.prototype = {
        extend: function(e, t) {
            if (null == e)
                return t;
            for (var i in e)
                null != e[i] && t[i] !== e[i] && (t[i] = e[i]);
            return t
        },
        log: function(e) {
            window.console && console.log(e)
        },
        get: function(e) {
            var t = [];
            t = this.userAgentKey(t),
            t = this.languageKey(t),
            t = this.colorDepthKey(t),
            t = this.pixelRatioKey(t),
            t = this.screenResolutionKey(t),
            t = this.availableScreenResolutionKey(t),
            t = this.timezoneOffsetKey(t),
            t = this.sessionStorageKey(t),
            t = this.localStorageKey(t),
            t = this.indexedDbKey(t),
            t = this.addBehaviorKey(t),
            t = this.openDatabaseKey(t),
            t = this.cpuClassKey(t),
            t = this.platformKey(t),
            t = this.doNotTrackKey(t),
            t = this.pluginsKey(t),
            t = this.canvasKey(t),
            t = this.webglKey(t),
            t = this.adBlockKey(t),
            t = this.hasLiedLanguagesKey(t),
            t = this.hasLiedResolutionKey(t),
            t = this.hasLiedOsKey(t),
            t = this.hasLiedBrowserKey(t),
            t = this.touchSupportKey(t);
            var i = this;
            this.fontsKey(t, function(t) {
                var a = [];
                i.each(t, function(e) {
                    var t = e.value;
                    "undefined" != typeof e.value.join && (t = e.value.join(";")),
                    a.push(t)
                });
                var r = i.x64hash128(a.join("~~~"), 31);
                return e(r, t)
            })
        },
        userAgentKey: function(e) {
            return this.options.excludeUserAgent || e.push({
                key: "user_agent",
                value: this.getUserAgent()
            }),
            e
        },
        getUserAgent: function() {
            return navigator.userAgent
        },
        languageKey: function(e) {
            return this.options.excludeLanguage || e.push({
                key: "language",
                value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
            }),
            e
        },
        colorDepthKey: function(e) {
            return this.options.excludeColorDepth || e.push({
                key: "color_depth",
                value: screen.colorDepth
            }),
            e
        },
        pixelRatioKey: function(e) {
            return this.options.excludePixelRatio || e.push({
                key: "pixel_ratio",
                value: this.getPixelRatio()
            }),
            e
        },
        getPixelRatio: function() {
            return window.devicePixelRatio || ""
        },
        screenResolutionKey: function(e) {
            return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
        },
        getScreenResolution: function(e) {
            var t;
            return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height],
            "undefined" != typeof t && e.push({
                key: "resolution",
                value: t
            }),
            e
        },
        availableScreenResolutionKey: function(e) {
            return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
        },
        getAvailableScreenResolution: function(e) {
            var t;
            return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]),
            "undefined" != typeof t && e.push({
                key: "available_resolution",
                value: t
            }),
            e
        },
        timezoneOffsetKey: function(e) {
            return this.options.excludeTimezoneOffset || e.push({
                key: "timezone_offset",
                value: (new Date).getTimezoneOffset()
            }),
            e
        },
        sessionStorageKey: function(e) {
            return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
                key: "session_storage",
                value: 1
            }),
            e
        },
        localStorageKey: function(e) {
            return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
                key: "local_storage",
                value: 1
            }),
            e
        },
        indexedDbKey: function(e) {
            return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
                key: "indexed_db",
                value: 1
            }),
            e
        },
        addBehaviorKey: function(e) {
            return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
                key: "add_behavior",
                value: 1
            }),
            e
        },
        openDatabaseKey: function(e) {
            return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
                key: "open_database",
                value: 1
            }),
            e
        },
        cpuClassKey: function(e) {
            return this.options.excludeCpuClass || e.push({
                key: "cpu_class",
                value: this.getNavigatorCpuClass()
            }),
            e
        },
        platformKey: function(e) {
            return this.options.excludePlatform || e.push({
                key: "navigator_platform",
                value: this.getNavigatorPlatform()
            }),
            e
        },
        doNotTrackKey: function(e) {
            return this.options.excludeDoNotTrack || e.push({
                key: "do_not_track",
                value: this.getDoNotTrack()
            }),
            e
        },
        canvasKey: function(e) {
            return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
                key: "canvas",
                value: this.getCanvasFp()
            }),
            e
        },
        webglKey: function(e) {
            return this.options.excludeWebGL ? e : this.isWebGlSupported() ? (e.push({
                key: "webgl",
                value: this.getWebglFp()
            }),
            e) : e
        },
        adBlockKey: function(e) {
            return this.options.excludeAdBlock || e.push({
                key: "adblock",
                value: this.getAdBlock()
            }),
            e
        },
        hasLiedLanguagesKey: function(e) {
            return this.options.excludeHasLiedLanguages || e.push({
                key: "has_lied_languages",
                value: this.getHasLiedLanguages()
            }),
            e
        },
        hasLiedResolutionKey: function(e) {
            return this.options.excludeHasLiedResolution || e.push({
                key: "has_lied_resolution",
                value: this.getHasLiedResolution()
            }),
            e
        },
        hasLiedOsKey: function(e) {
            return this.options.excludeHasLiedOs || e.push({
                key: "has_lied_os",
                value: this.getHasLiedOs()
            }),
            e
        },
        hasLiedBrowserKey: function(e) {
            return this.options.excludeHasLiedBrowser || e.push({
                key: "has_lied_browser",
                value: this.getHasLiedBrowser()
            }),
            e
        },
        fontsKey: function(e, t) {
            return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
        },
        flashFontsKey: function(e, t) {
            return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function(i) {
                e.push({
                    key: "swf_fonts",
                    value: i.join(";")
                }),
                t(e)
            }) : t(e)
        },
        jsFontsKey: function(e, t) {
            var i = this;
            return setTimeout(function() {
                var a = ["monospace", "sans-serif", "serif"]
                  , r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"]
                  , n = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                i.options.extendedJsFonts && (r = r.concat(n)),
                r = r.concat(i.options.userDefinedFonts);
                var o = "mmmmmmmmmmlli"
                  , s = "72px"
                  , l = document.getElementsByTagName("body")[0]
                  , h = document.createElement("div")
                  , u = document.createElement("div")
                  , d = {}
                  , c = {}
                  , g = function() {
                    var e = document.createElement("span");
                    return e.style.position = "absolute",
                    e.style.left = "-9999px",
                    e.style.fontSize = s,
                    e.innerHTML = o,
                    e
                }
                  , p = function(e, t) {
                    var i = g();
                    return i.style.fontFamily = "'" + e + "'," + t,
                    i
                }
                  , f = function() {
                    for (var e = [], t = 0, i = a.length; i > t; t++) {
                        var r = g();
                        r.style.fontFamily = a[t],
                        h.appendChild(r),
                        e.push(r)
                    }
                    return e
                }
                  , m = function() {
                    for (var e = {}, t = 0, i = r.length; i > t; t++) {
                        for (var n = [], o = 0, s = a.length; s > o; o++) {
                            var l = p(r[t], a[o]);
                            u.appendChild(l),
                            n.push(l)
                        }
                        e[r[t]] = n
                    }
                    return e
                }
                  , S = function(e) {
                    for (var t = !1, i = 0; i < a.length; i++)
                        if (t = e[i].offsetWidth !== d[a[i]] || e[i].offsetHeight !== c[a[i]])
                            return t;
                    return t
                }
                  , T = f();
                l.appendChild(h);
                for (var x = 0, v = a.length; v > x; x++)
                    d[a[x]] = T[x].offsetWidth,
                    c[a[x]] = T[x].offsetHeight;
                var M = m();
                l.appendChild(u);
                for (var A = [], E = 0, y = r.length; y > E; E++)
                    S(M[r[E]]) && A.push(r[E]);
                l.removeChild(u),
                l.removeChild(h),
                e.push({
                    key: "js_fonts",
                    value: A
                }),
                t(e)
            }, 1)
        },
        pluginsKey: function(e) {
            return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.push({
                key: "ie_plugins",
                value: this.getIEPlugins()
            }) : e.push({
                key: "regular_plugins",
                value: this.getRegularPlugins()
            })),
            e
        },
        getRegularPlugins: function() {
            for (var e = [], t = 0, i = navigator.plugins.length; i > t; t++)
                e.push(navigator.plugins[t]);
            return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            })),
            this.map(e, function(e) {
                var t = this.map(e, function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join("::")
            }, this)
        },
        getIEPlugins: function() {
            var e = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
                var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                e = this.map(t, function(e) {
                    try {
                        return new ActiveXObject(e),
                        e
                    } catch (t) {
                        return null
                    }
                })
            }
            return navigator.plugins && (e = e.concat(this.getRegularPlugins())),
            e
        },
        pluginsShouldBeSorted: function() {
            for (var e = !1, t = 0, i = this.options.sortPluginsFor.length; i > t; t++) {
                var a = this.options.sortPluginsFor[t];
                if (navigator.userAgent.match(a)) {
                    e = !0;
                    break
                }
            }
            return e
        },
        touchSupportKey: function(e) {
            return this.options.excludeTouchSupport || e.push({
                key: "touch_support",
                value: this.getTouchSupport()
            }),
            e
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        hasIndexedDB: function() {
            return !!window.indexedDB
        },
        getNavigatorCpuClass: function() {
            return navigator.cpuClass ? navigator.cpuClass : "unknown"
        },
        getNavigatorPlatform: function() {
            return navigator.platform ? navigator.platform : "unknown"
        },
        getDoNotTrack: function() {
            return navigator.doNotTrack ? navigator.doNotTrack : "unknown"
        },
        getTouchSupport: function() {
            var e = 0
              , t = !1;
            "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                t = !0
            } catch (i) {}
            var a = "ontouchstart"in window;
            return [e, t, a]
        },
        getCanvasFp: function() {
            var e = []
              , t = document.createElement("canvas");
            t.width = 2e3,
            t.height = 200,
            t.style.display = "inline";
            var i = t.getContext("2d");
            return i.rect(0, 0, 10, 10),
            i.rect(2, 2, 6, 6),
            e.push("canvas winding:" + (i.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
            i.textBaseline = "alphabetic",
            i.fillStyle = "#f60",
            i.fillRect(125, 1, 62, 20),
            i.fillStyle = "#069",
            this.options.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            i.fillStyle = "rgba(102, 204, 0, 0.2)",
            i.font = "18pt Arial",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            i.globalCompositeOperation = "multiply",
            i.fillStyle = "rgb(255,0,255)",
            i.beginPath(),
            i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(0,255,255)",
            i.beginPath(),
            i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,255,0)",
            i.beginPath(),
            i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,0,255)",
            i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            i.fill("evenodd"),
            e.push("canvas fp:" + t.toDataURL()),
            e.join("~")
        },
        getWebglFp: function() {
            var e, t = function(t) {
                return e.clearColor(0, 0, 0, 1),
                e.enable(e.DEPTH_TEST),
                e.depthFunc(e.LEQUAL),
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                "[" + t[0] + ", " + t[1] + "]"
            }, i = function(e) {
                var t, i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                return i ? (t = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                0 === t && (t = 2),
                t) : null
            };
            if (e = this.getWebglCanvas(),
            !e)
                return null;
            var a = []
              , r = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
              , n = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
              , o = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, o);
            var s = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW),
            o.itemSize = 3,
            o.numItems = 3;
            var l = e.createProgram()
              , h = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(h, r),
            e.compileShader(h);
            var u = e.createShader(e.FRAGMENT_SHADER);
            return e.shaderSource(u, n),
            e.compileShader(u),
            e.attachShader(l, h),
            e.attachShader(l, u),
            e.linkProgram(l),
            e.useProgram(l),
            l.vertexPosAttrib = e.getAttribLocation(l, "attrVertex"),
            l.offsetUniform = e.getUniformLocation(l, "uniformOffset"),
            e.enableVertexAttribArray(l.vertexPosArray),
            e.vertexAttribPointer(l.vertexPosAttrib, o.itemSize, e.FLOAT, !1, 0, 0),
            e.uniform2f(l.offsetUniform, 1, 1),
            e.drawArrays(e.TRIANGLE_STRIP, 0, o.numItems),
            null != e.canvas && a.push(e.canvas.toDataURL()),
            a.push("extensions:" + e.getSupportedExtensions().join(";")),
            a.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
            a.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
            a.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
            a.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
            a.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
            a.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
            a.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
            a.push("webgl max anisotropy:" + i(e)),
            a.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            a.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
            a.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
            a.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
            a.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
            a.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
            a.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
            a.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
            a.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            a.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
            a.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
            a.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
            a.push("webgl renderer:" + e.getParameter(e.RENDERER)),
            a.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
            a.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
            a.push("webgl vendor:" + e.getParameter(e.VENDOR)),
            a.push("webgl version:" + e.getParameter(e.VERSION)),
            e.getShaderPrecisionFormat ? (a.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision),
            a.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin),
            a.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax),
            a.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision),
            a.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin),
            a.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax),
            a.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision),
            a.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin),
            a.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax),
            a.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision),
            a.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin),
            a.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax),
            a.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision),
            a.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin),
            a.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax),
            a.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision),
            a.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin),
            a.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax),
            a.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision),
            a.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin),
            a.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax),
            a.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision),
            a.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin),
            a.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax),
            a.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision),
            a.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin),
            a.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax),
            a.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision),
            a.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin),
            a.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax),
            a.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision),
            a.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin),
            a.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax),
            a.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision),
            a.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin),
            a.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax),
            a.join("~")) : a.join("~")
        },
        getAdBlock: function() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;",
            e.className = "adsbox";
            var t = !1;
            try {
                document.body.appendChild(e),
                t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                document.body.removeChild(e)
            } catch (i) {
                t = !1
            }
            return t
        },
        getHasLiedLanguages: function() {
            if ("undefined" != typeof navigator.languages)
                try {
                    var e = navigator.languages[0].substr(0, 2);
                    if (e !== navigator.language.substr(0, 2))
                        return !0
                } catch (t) {
                    return !0
                }
            return !1
        },
        getHasLiedResolution: function() {
            return screen.width < screen.availWidth ? !0 : screen.height < screen.availHeight
        },
        getHasLiedOs: function() {
            var e, t = navigator.userAgent.toLowerCase(), i = navigator.oscpu, a = navigator.platform.toLowerCase();
            e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
            var r;
            if (r = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            r && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
                return !0;
            if ("undefined" != typeof i) {
                if (i = i.toLowerCase(),
                i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
                    return !0;
                if (i.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                    return !0;
                if (i.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                    return !0;
                if (0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== e)
                    return !0
            }
            return a.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e ? !0 : (a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e ? !0 : (a.indexOf("mac") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0 || a.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e ? !0 : 0 === a.indexOf("win") && 0 === a.indexOf("linux") && a.indexOf("mac") >= 0 && "other" !== e ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e
        },
        getHasLiedBrowser: function() {
            var e, t = navigator.userAgent.toLowerCase(), i = navigator.productSub;
            if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other",
            ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== i)
                return !0;
            var a = eval.toString().length;
            if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e)
                return !0;
            if (39 === a && "Internet Explorer" !== e && "Other" !== e)
                return !0;
            if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                return !0;
            var r;
            try {
                throw "a"
            } catch (n) {
                try {
                    n.toSource(),
                    r = !0
                } catch (o) {
                    r = !1
                }
            }
            return !(!r || "Firefox" === e || "Other" === e)
        },
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        isWebGlSupported: function() {
            if (!this.isCanvasSupported())
                return !1;
            var e, t = document.createElement("canvas");
            try {
                e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch (i) {
                e = !1
            }
            return !!window.WebGLRenderingContext && !!e
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName ? !0 : !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        },
        hasSwfObjectLoaded: function() {
            return "undefined" != typeof window.swfobject
        },
        hasMinFlashInstalled: function() {
            return swfobject.hasFlashPlayerVersion("9.0.0")
        },
        addFlashDivNode: function() {
            var e = document.createElement("div");
            e.setAttribute("id", this.options.swfContainerId),
            document.body.appendChild(e)
        },
        loadSwfAndDetectFonts: function(e) {
            var t = "___fp_swf_loaded";
            window[t] = function(t) {
                e(t)
            }
            ;
            var i = this.options.swfContainerId;
            this.addFlashDivNode();
            var a = {
                onReady: t
            }
              , r = {
                allowScriptAccess: "always",
                menu: "false"
            };
            swfobject.embedSWF(this.options.swfPath, i, "1", "1", "9.0.0", !1, a, r, {})
        },
        getWebglCanvas: function() {
            var e = document.createElement("canvas")
              , t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (i) {}
            return t || (t = null),
            t
        },
        each: function(e, t, i) {
            if (null !== e)
                if (this.nativeForEach && e.forEach === this.nativeForEach)
                    e.forEach(t, i);
                else if (e.length === +e.length) {
                    for (var a = 0, r = e.length; r > a; a++)
                        if (t.call(i, e[a], a, e) === {})
                            return
                } else
                    for (var n in e)
                        if (e.hasOwnProperty(n) && t.call(i, e[n], n, e) === {})
                            return
        },
        map: function(e, t, i) {
            var a = [];
            return null == e ? a : this.nativeMap && e.map === this.nativeMap ? e.map(t, i) : (this.each(e, function(e, r, n) {
                a[a.length] = t.call(i, e, r, n)
            }),
            a)
        },
        x64Add: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] + t[3],
            i[2] += i[3] >>> 16,
            i[3] &= 65535,
            i[2] += e[2] + t[2],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[1] += e[1] + t[1],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[0] += e[0] + t[0],
            i[0] &= 65535,
            [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Multiply: function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var i = [0, 0, 0, 0];
            return i[3] += e[3] * t[3],
            i[2] += i[3] >>> 16,
            i[3] &= 65535,
            i[2] += e[2] * t[3],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[2] += e[3] * t[2],
            i[1] += i[2] >>> 16,
            i[2] &= 65535,
            i[1] += e[1] * t[3],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[1] += e[2] * t[2],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[1] += e[3] * t[1],
            i[0] += i[1] >>> 16,
            i[1] &= 65535,
            i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
            i[0] &= 65535,
            [i[0] << 16 | i[1], i[2] << 16 | i[3]]
        },
        x64Rotl: function(e, t) {
            return t %= 64,
            32 === t ? [e[1], e[0]] : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
            [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        x64LeftShift: function(e, t) {
            return t %= 64,
            0 === t ? e : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        x64Xor: function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        x64Fmix: function(e) {
            return e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [4283543511, 3981806797]),
            e = this.x64Xor(e, [0, e[0] >>> 1]),
            e = this.x64Multiply(e, [3301882366, 444984403]),
            e = this.x64Xor(e, [0, e[0] >>> 1])
        },
        x64hash128: function(e, t) {
            e = e || "",
            t = t || 0;
            for (var i = e.length % 16, a = e.length - i, r = [0, t], n = [0, t], o = [0, 0], s = [0, 0], l = [2277735313, 289559509], h = [1291169091, 658871167], u = 0; a > u; u += 16)
                o = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24],
                s = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24],
                o = this.x64Multiply(o, l),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, h),
                r = this.x64Xor(r, o),
                r = this.x64Rotl(r, 27),
                r = this.x64Add(r, n),
                r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 1390208809]),
                s = this.x64Multiply(s, h),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, l),
                n = this.x64Xor(n, s),
                n = this.x64Rotl(n, 31),
                n = this.x64Add(n, r),
                n = this.x64Add(this.x64Multiply(n, [0, 5]), [0, 944331445]);
            switch (o = [0, 0],
            s = [0, 0],
            i) {
            case 15:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 14)], 48));
            case 14:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 13)], 40));
            case 13:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 12)], 32));
            case 12:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 11)], 24));
            case 11:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 10)], 16));
            case 10:
                s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(u + 9)], 8));
            case 9:
                s = this.x64Xor(s, [0, e.charCodeAt(u + 8)]),
                s = this.x64Multiply(s, h),
                s = this.x64Rotl(s, 33),
                s = this.x64Multiply(s, l),
                n = this.x64Xor(n, s);
            case 8:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 7)], 56));
            case 7:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 6)], 48));
            case 6:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 5)], 40));
            case 5:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 4)], 32));
            case 4:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 3)], 24));
            case 3:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 2)], 16));
            case 2:
                o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(u + 1)], 8));
            case 1:
                o = this.x64Xor(o, [0, e.charCodeAt(u)]),
                o = this.x64Multiply(o, l),
                o = this.x64Rotl(o, 31),
                o = this.x64Multiply(o, h),
                r = this.x64Xor(r, o)
            }
            return r = this.x64Xor(r, [0, e.length]),
            n = this.x64Xor(n, [0, e.length]),
            r = this.x64Add(r, n),
            n = this.x64Add(n, r),
            r = this.x64Fmix(r),
            n = this.x64Fmix(n),
            r = this.x64Add(r, n),
            n = this.x64Add(n, r),
            ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (n[1] >>> 0).toString(16)).slice(-8)
        }
    },
    e.VERSION = "1.4.1",
    e
});
/*  |xGv00|89c05614102dae27a650b44eda926edb */

});;define("lib/wx/jweixin-1.0.0.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var navigator =  __wxConfig__.h5_window.navigator;
var location = __wxConfig__.h5_window.location;
var alert = __wxConfig__.h5_window.alert;
!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),function(e){c(n,e,t)}):d(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):t?d(n,t):d(n,i)}function o(e){return e=e||{},e.appId=L.appId,e.verifyAppId=L.appId,e.verifySignType="sha1",e.verifyTimestamp=L.timestamp+"",e.verifyNonceStr=L.nonceStr,e.verifySignature=L.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=a(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",L.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function a(e,n){var i=e,t=g[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}function s(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=m[t];o&&(e[n]=o)}return e}}function d(e,n){if(!(!L.debug||n&&n.isInnerInvoke)){var i=g[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){0!=A.preVerifyState&&(v||w||L.debug||M<"6.0.2"||A.systemType<0||V||(V=!0,A.appId=L.appId,A.initTime=b.initEndTime-b.initStartTime,A.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(e){A.networkType=e.networkType;var n="http://open.weixin.qq.com/sdk/report?v="+A.version+"&o="+A.preVerifyState+"&s="+A.systemType+"&c="+A.clientVersion+"&a="+A.appId+"&n="+A.networkType+"&i="+A.initTime+"&p="+A.preVerifyTime+"&u="+A.url;(new Image).src=n}})))}function u(){return(new Date).getTime()}function p(n){I&&(e.WeixinJSBridge?n():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",n,!1))}function f(){C.invoke||(C.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},C.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},g=function(){var e={};for(var n in m)e[m[n]]=n;return e}(),h=e.document,y=h.title,S=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),v=!(!_.match("mac")&&!_.match("win")),w=-1!=S.indexOf("wxdebugger"),I=-1!=S.indexOf("micromessenger"),T=-1!=S.indexOf("android"),k=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),M=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),V=!1,x=!1,b={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},A={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",preVerifyState:1,systemType:k?1:T?2:-1,clientVersion:M,url:encodeURIComponent(location.href)},L={},P={_completes:[]},W={state:0,data:{}};p(function(){b.initEndTime=u()});var C={config:function(e){L=e,d("config",e);var n=!1!==L.check;p(function(){if(n)i(m.config,{verifyJsApiList:s(L.jsApiList)},function(){P._complete=function(e){b.preVerifyEndTime=u(),W.state=1,W.data=e},P.success=function(e){A.preVerifyState=0},P.fail=function(e){P._fail?P._fail(e):W.state=-1};var e=P._completes;return e.push(function(){l()}),P.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();P._completes=[]},P}()),b.preVerifyStartTime=u();else{W.state=1;for(var e=P._completes,t=0,o=e.length;t<o;++t)e[t]();P._completes=[]}}),L.beta&&f()},ready:function(e){0!=W.state?e():(P._completes.push(e),!I&&L.debug&&e())},error:function(e){M<"6.0.2"||x||(x=!0,-1==W.state?e(W.data):P._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var i in n){var t=g[i];t&&(n[t]=n[i],delete n[i])}return e};i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(T){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e))},onMenuShareTimeline:function(e){t(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(m.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(T){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(k){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var c=n[o],a={card_id:c.cardId,card_ext:c.cardExt};t.push(a)}i(m.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:L.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var c=n[o],a={card_id:c.cardId,code:c.code};t.push(a)}i(m.openCard,{card_list:t},e)},chooseWXPay:function(e){i(m.chooseWXPay,r(e),e)}};return n&&(e.wx_share=e.jWeixin=C),C}});

});;define("lib/wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

var __placeImgeUrlHttps = "https";
var __emojisReg = '';
var __emojisBaseSrc = '';
var __emojis = {};
var wxDiscode = require('wxDiscode.js');
var HTMLParser = require('htmlparser.js');
// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
// Block Elements - HTML 5
var block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
function makeMap(str) {
    var obj = {}, items = str.split(",");
    for (var i = 0; i < items.length; i++)
        obj[items[i]] = true;
    return obj;
}

function q(v) {
    return '"' + v + '"';
}

function removeDOCTYPE(html) {
    return html
        .replace(/<\?xml.*\?>\n/, '')
        .replace(/<!doctype.*\>\n/, '')
        .replace(/<!DOCTYPE.*\>\n/, '');
}


function html2json(html, bindName) {
    //处理字符串
    html = removeDOCTYPE(html);
    html = wxDiscode.strDiscode(html);
    //生成node节点
    var bufArray = [];
    var results = {
        node: bindName,
        nodes: [],
        images:[],
        imageUrls:[]
    };
    HTMLParser(html, {
        start: function (tag, attrs, unary) {
            //debug(tag, attrs, unary);
            // node for this element
            var node = {
                node: 'element',
                tag: tag,
            };

            if (block[tag]) {
                node.tagType = "block";
            } else if (inline[tag]) {
                node.tagType = "inline";
            } else if (closeSelf[tag]) {
                node.tagType = "closeSelf";
            }

            if (attrs.length !== 0) {
                node.attr = attrs.reduce(function (pre, attr) {
                    var name = attr.name;
                    var value = attr.value;
                    if (name == 'class') {
                        //  value = value.join("")
                        node.classStr = value;
                    }
                    // has multi attibutes
                    // make it array of attribute
                    if (name == 'style') {
                        //  value = value.join("")
                        node.styleStr = value;
                    }
                    if (value.match(/ /)) {
                        value = value.split(' ');
                    }

                    // if attr already exists
                    // merge it
                    if (pre[name]) {
                        if (Array.isArray(pre[name])) {
                            // already array, push to last
                            pre[name].push(value);
                        } else {
                            // single value, make it array
                            pre[name] = [pre[name], value];
                        }
                    } else {
                        // not exist, put it
                        pre[name] = value;
                    }

                    return pre;
                }, {});
            }

            //对img添加额外数据
            if (node.tag === 'img') {
                node.imgIndex = results.images.length;
                var imgUrl = node.attr.src;
                imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
                node.attr.src = imgUrl;
                node.from = bindName;
                results.images.push(node);
                results.imageUrls.push(imgUrl);
            }
            if (unary) {
                // if this tag dosen't have end tag
                // like <img src="hoge.png"/>
                // add to parents
                var parent = bufArray[0] || results;
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            } else {
                bufArray.unshift(node);
            }
        },
        end: function (tag) {
            //debug(tag);
            // merge into parent tag
            var node = bufArray.shift();
            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            }
        },
        chars: function (text) {
            //debug(text);
            var node = {
                node: 'text',
                text: text,
                textArray:transEmojiStr(text)
            };

            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            }
        },
        comment: function (text) {
            //debug(text);
            var node = {
                node: 'comment',
                text: text,
            };
            var parent = bufArray[0];
            if (parent.nodes === undefined) {
                parent.nodes = [];
            }
            parent.nodes.push(node);
        },
    });
    return results;
};

function transEmojiStr(str){
  // var eReg = new RegExp("["+__reg+' '+"]");
//   str = str.replace(/\[([^\[\]]+)\]/g,':$1:')

  var emojiObjs = [];
  //如果正则表达式为空
  if(__emojisReg.length == 0 || !__emojis){
      var emojiObj = {}
      emojiObj.node = "text";
      emojiObj.text = str;
      array = [emojiObj];
      return array;
  }
  //这个地方需要调整
  str = str.replace(/\[([^\[\]]+)\]/g,':$1:')
  var eReg = new RegExp("[:]");
  var array = str.split(eReg);
  for(var i = 0; i < array.length; i++){
    var ele = array[i];
    var emojiObj = {};
    if(__emojis[ele]){
      emojiObj.node = "element";
      emojiObj.tag = "emoji";
      emojiObj.text = __emojis[ele];
      emojiObj.baseSrc= __emojisBaseSrc;
    }else{
      emojiObj.node = "text";
      emojiObj.text = ele;
    }
    emojiObjs.push(emojiObj);
  }

  return emojiObjs;
}

function emojisInit(reg='',baseSrc="/wxParse/emojis/",emojis){
    __emojisReg = reg;
    __emojisBaseSrc=baseSrc;
    __emojis=emojis;
}

module.exports = {
    html2json: html2json,
    emojisInit:emojisInit
};

});;define("lib/wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
	endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
	attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

// Block Elements - HTML 5
var block = makeMap("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");

function HTMLParser(html, handler) {
	var index, chars, match, stack = [], last = html;
	stack.last = function () {
		return this[this.length - 1];
	};

	while (html) {
		chars = true;

		// Make sure we're not in a script or style element
		if (!stack.last() || !special[stack.last()]) {

			// Comment
			if (html.indexOf("<!--") == 0) {
				index = html.indexOf("-->");

				if (index >= 0) {
					if (handler.comment)
						handler.comment(html.substring(4, index));
					html = html.substring(index + 3);
					chars = false;
				}

				// end tag
			} else if (html.indexOf("</") == 0) {
				match = html.match(endTag);

				if (match) {
					html = html.substring(match[0].length);
					match[0].replace(endTag, parseEndTag);
					chars = false;
				}

				// start tag
			} else if (html.indexOf("<") == 0) {
				match = html.match(startTag);

				if (match) {
					html = html.substring(match[0].length);
					match[0].replace(startTag, parseStartTag);
					chars = false;
				}
			}

			if (chars) {
				index = html.indexOf("<");

				var text = index < 0 ? html : html.substring(0, index);
				html = index < 0 ? "" : html.substring(index);

				if (handler.chars)
					handler.chars(text);
			}

		} else {

			html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
				text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
				if (handler.chars)
					handler.chars(text);

				return "";
			});


			parseEndTag("", stack.last());
		}

		if (html == last)
			throw "Parse Error: " + html;
		last = html;
	}

	// Clean up any remaining tags
	parseEndTag();

	function parseStartTag(tag, tagName, rest, unary) {
		tagName = tagName.toLowerCase();

		if (block[tagName]) {
			while (stack.last() && inline[stack.last()]) {
				parseEndTag("", stack.last());
			}
		}

		if (closeSelf[tagName] && stack.last() == tagName) {
			parseEndTag("", tagName);
		}

		unary = empty[tagName] || !!unary;

		if (!unary)
			stack.push(tagName);

		if (handler.start) {
			var attrs = [];

			rest.replace(attr, function (match, name) {
				var value = arguments[2] ? arguments[2] :
					arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
							fillAttrs[name] ? name : "";

				attrs.push({
					name: name,
					value: value,
					escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
				});
			});

			if (handler.start) {
				handler.start(tagName, attrs, unary);
			}

		}
	}

	function parseEndTag(tag, tagName) {
		// If no tag name is provided, clean shop
		if (!tagName)
			var pos = 0;

		// Find the closest opened tag of the same type
		else
			for (var pos = stack.length - 1; pos >= 0; pos--)
				if (stack[pos] == tagName)
					break;

		if (pos >= 0) {
			// Close all the open elements, up the stack
			for (var i = stack.length - 1; i >= pos; i--)
				if (handler.end)
					handler.end(stack[i]);

			// Remove the open elements from the stack
			stack.length = pos;
		}
	}
};

function makeMap(str) {
	var obj = {}, items = str.split(",");
	for (var i = 0; i < items.length; i++)
		obj[items[i]] = true;
	return obj;
}

module.exports = HTMLParser;

});;define("lib/wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

function getDefaultOpts(simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Specify a prefix to generated header ids',
      type: 'string'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix identation in es6 strings',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:   true,
        prefixHeaderId:            'user-content-',
        simplifiedAutoLink:        true,
        literalMidWordUnderscores: true,
        strikethrough:             true,
        tables:                    true,
        tablesHeaderId:            true,
        ghCodeBlocks:              true,
        tasklists:                 true
      },
      vanilla: getDefaultOpts(true)
    };

/**
 * helper namespace
 * @type {{}}
 */
showdown.helper = {};

/**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */
showdown.extensions = {};

/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */
showdown.setOption = function (key, value) {
  'use strict';
  globalOptions[key] = value;
  return this;
};

/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
showdown.getOption = function (key) {
  'use strict';
  return globalOptions[key];
};

/**
 * Get the global options
 * @static
 * @returns {{}}
 */
showdown.getOptions = function () {
  'use strict';
  return globalOptions;
};

/**
 * Reset global options to the default values
 * @static
 */
showdown.resetOptions = function () {
  'use strict';
  globalOptions = getDefaultOpts(true);
};

/**
 * Set the flavor showdown should use as default
 * @param {string} name
 */
showdown.setFlavor = function (name) {
  'use strict';
  if (flavor.hasOwnProperty(name)) {
    var preset = flavor[name];
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        globalOptions[option] = preset[option];
      }
    }
  }
};

/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
showdown.getDefaultOptions = function (simple) {
  'use strict';
  return getDefaultOpts(simple);
};

/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
showdown.subParser = function (name, func) {
  'use strict';
  if (showdown.helper.isString(name)) {
    if (typeof func !== 'undefined') {
      parsers[name] = func;
    } else {
      if (parsers.hasOwnProperty(name)) {
        return parsers[name];
      } else {
        throw Error('SubParser named ' + name + ' not registered!');
      }
    }
  }
};

/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|function=} ext
 * @returns {*}
 */
showdown.extension = function (name, ext) {
  'use strict';

  if (!showdown.helper.isString(name)) {
    throw Error('Extension \'name\' must be a string');
  }

  name = showdown.helper.stdExtName(name);

  // Getter
  if (showdown.helper.isUndefined(ext)) {
    if (!extensions.hasOwnProperty(name)) {
      throw Error('Extension named ' + name + ' is not registered!');
    }
    return extensions[name];

    // Setter
  } else {
    // Expand extension if it's wrapped in a function
    if (typeof ext === 'function') {
      ext = ext();
    }

    // Ensure extension is an array
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExtension = validate(ext, name);

    if (validExtension.valid) {
      extensions[name] = ext;
    } else {
      throw Error(validExtension.error);
    }
  }
};

/**
 * Gets all extensions registered
 * @returns {{}}
 */
showdown.getAllExtensions = function () {
  'use strict';
  return extensions;
};

/**
 * Remove an extension
 * @param {string} name
 */
showdown.removeExtension = function (name) {
  'use strict';
  delete extensions[name];
};

/**
 * Removes all extensions
 */
showdown.resetExtensions = function () {
  'use strict';
  extensions = {};
};

/**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */
function validate(extension, name) {
  'use strict';

  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
    ret = {
      valid: true,
      error: ''
    };

  if (!showdown.helper.isArray(extension)) {
    extension = [extension];
  }

  for (var i = 0; i < extension.length; ++i) {
    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
        ext = extension[i];
    if (typeof ext !== 'object') {
      ret.valid = false;
      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
      return ret;
    }

    if (!showdown.helper.isString(ext.type)) {
      ret.valid = false;
      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
      return ret;
    }

    var type = ext.type = ext.type.toLowerCase();

    // normalize extension type
    if (type === 'language') {
      type = ext.type = 'lang';
    }

    if (type === 'html') {
      type = ext.type = 'output';
    }

    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
      return ret;
    }

    if (type === 'listener') {
      if (showdown.helper.isUndefined(ext.listeners)) {
        ret.valid = false;
        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
        return ret;
      }
    } else {
      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
        ret.valid = false;
        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
        return ret;
      }
    }

    if (ext.listeners) {
      if (typeof ext.listeners !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
        return ret;
      }
      for (var ln in ext.listeners) {
        if (ext.listeners.hasOwnProperty(ln)) {
          if (typeof ext.listeners[ln] !== 'function') {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
            return ret;
          }
        }
      }
    }

    if (ext.filter) {
      if (typeof ext.filter !== 'function') {
        ret.valid = false;
        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
        return ret;
      }
    } else if (ext.regex) {
      if (showdown.helper.isString(ext.regex)) {
        ext.regex = new RegExp(ext.regex, 'g');
      }
      if (!ext.regex instanceof RegExp) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }
    }
  }
  return ret;
}

/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
showdown.validateExtension = function (ext) {
  'use strict';

  var validateExtension = validate(ext, null);
  if (!validateExtension.valid) {
    console.warn(validateExtension.error);
    return false;
  }
  return true;
};

/**
 * showdownjs helper functions
 */

if (!showdown.hasOwnProperty('helper')) {
  showdown.helper = {};
}

/**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isString = function isString(a) {
  'use strict';
  return (typeof a === 'string' || a instanceof String);
};

/**
 * Check if var is a function
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isFunction = function isFunction(a) {
  'use strict';
  var getType = {};
  return a && getType.toString.call(a) === '[object Function]';
};

/**
 * ForEach helper function
 * @static
 * @param {*} obj
 * @param {function} callback
 */
showdown.helper.forEach = function forEach(obj, callback) {
  'use strict';
  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  }
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function isArray(a) {
  'use strict';
  return a.constructor === Array;
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function isUndefined(value) {
  'use strict';
  return typeof value === 'undefined';
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  'use strict';
  return s.replace(/[_-]||\s/g, '').toLowerCase();
};

function escapeCharactersCallback(wholeMatch, m1) {
  'use strict';
  var charCodeToEscape = m1.charCodeAt(0);
  return '~E' + charCodeToEscape + 'E';
}

/**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */
showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

/**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */
showdown.helper.escapeCharacters = function escapeCharacters(text, charsToEscape, afterBackslash) {
  'use strict';
  // First we have to escape the escape characters so that
  // we can build a character class out of them
  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

  if (afterBackslash) {
    regexString = '\\\\' + regexString;
  }

  var regex = new RegExp(regexString, 'g');
  text = text.replace(regex, escapeCharactersCallback);

  return text;
};

var rgxFindMatchPos = function (str, left, right, flags) {
  'use strict';
  var f = flags || '',
    g = f.indexOf('g') > -1,
    x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
    l = new RegExp(left, f.replace(/g/g, '')),
    pos = [],
    t, s, m, start, end;

  do {
    t = 0;
    while ((m = x.exec(str))) {
      if (l.test(m[0])) {
        if (!(t++)) {
          s = x.lastIndex;
          start = s - m[0].length;
        }
      } else if (t) {
        if (!--t) {
          end = m.index + m[0].length;
          var obj = {
            left: {start: start, end: s},
            match: {start: s, end: m.index},
            right: {start: m.index, end: end},
            wholeMatch: {start: start, end: end}
          };
          pos.push(obj);
          if (!g) {
            return pos;
          }
        }
      }
    }
  } while (t && (x.lastIndex = s));

  return pos;
};

/**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */
showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
  'use strict';

  var matchPos = rgxFindMatchPos (str, left, right, flags),
    results = [];

  for (var i = 0; i < matchPos.length; ++i) {
    results.push([
      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
      str.slice(matchPos[i].match.start, matchPos[i].match.end),
      str.slice(matchPos[i].left.start, matchPos[i].left.end),
      str.slice(matchPos[i].right.start, matchPos[i].right.end)
    ]);
  }
  return results;
};

/**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */
showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
  'use strict';

  if (!showdown.helper.isFunction(replacement)) {
    var repStr = replacement;
    replacement = function () {
      return repStr;
    };
  }

  var matchPos = rgxFindMatchPos(str, left, right, flags),
      finalStr = str,
      lng = matchPos.length;

  if (lng > 0) {
    var bits = [];
    if (matchPos[0].wholeMatch.start !== 0) {
      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
    }
    for (var i = 0; i < lng; ++i) {
      bits.push(
        replacement(
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        )
      );
      if (i < lng - 1) {
        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
      }
    }
    if (matchPos[lng - 1].wholeMatch.end < str.length) {
      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
    }
    finalStr = bits.join('');
  }
  return finalStr;
};

/**
 * POLYFILLS
 */
if (showdown.helper.isUndefined(console)) {
  console = {
    warn: function (msg) {
      'use strict';
      alert(msg);
    },
    log: function (msg) {
      'use strict';
      alert(msg);
    },
    error: function (msg) {
      'use strict';
      throw msg;
    }
  };
}

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */
showdown.Converter = function (converterOptions) {
  'use strict';

  var
      /**
       * Options used by this converter
       * @private
       * @type {{}}
       */
      options = {},

      /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */
      langExtensions = [],

      /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */
      outputModifiers = [],

      /**
       * Event listeners
       * @private
       * @type {{}}
       */
      listeners = {};

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor() {
    converterOptions = converterOptions || {};

    for (var gOpt in globalOptions) {
      if (globalOptions.hasOwnProperty(gOpt)) {
        options[gOpt] = globalOptions[gOpt];
      }
    }

    // Merge options
    if (typeof converterOptions === 'object') {
      for (var opt in converterOptions) {
        if (converterOptions.hasOwnProperty(opt)) {
          options[opt] = converterOptions[opt];
        }
      }
    } else {
      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
      ' was passed instead.');
    }

    if (options.extensions) {
      showdown.helper.forEach(options.extensions, _parseExtension);
    }
  }

  /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */
  function _parseExtension(ext, name) {

    name = name || null;
    // If it's a string, the extension was previously loaded
    if (showdown.helper.isString(ext)) {
      ext = showdown.helper.stdExtName(ext);
      name = ext;

      // LEGACY_SUPPORT CODE
      if (showdown.extensions[ext]) {
        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
          'Please inform the developer that the extension should be updated!');
        legacyExtensionLoading(showdown.extensions[ext], ext);
        return;
      // END LEGACY SUPPORT CODE

      } else if (!showdown.helper.isUndefined(extensions[ext])) {
        ext = extensions[ext];

      } else {
        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
      }
    }

    if (typeof ext === 'function') {
      ext = ext();
    }

    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExt = validate(ext, name);
    if (!validExt.valid) {
      throw Error(validExt.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {

        case 'lang':
          langExtensions.push(ext[i]);
          break;

        case 'output':
          outputModifiers.push(ext[i]);
          break;
      }
      if (ext[i].hasOwnProperty(listeners)) {
        for (var ln in ext[i].listeners) {
          if (ext[i].listeners.hasOwnProperty(ln)) {
            listen(ln, ext[i].listeners[ln]);
          }
        }
      }
    }

  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading(ext, name) {
    if (typeof ext === 'function') {
      ext = ext(new showdown.Converter());
    }
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }
    var valid = validate(ext, name);

    if (!valid.valid) {
      throw Error(valid.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {
        case 'lang':
          langExtensions.push(ext[i]);
          break;
        case 'output':
          outputModifiers.push(ext[i]);
          break;
        default:// should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */
  function listen(name, callback) {
    if (!showdown.helper.isString(name)) {
      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
    }

    if (typeof callback !== 'function') {
      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
    }

    if (!listeners.hasOwnProperty(name)) {
      listeners[name] = [];
    }
    listeners[name].push(callback);
  }

  function rTrimInputText(text) {
    var rsp = text.match(/^\s*/)[0].length,
        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
    return text.replace(rgx, '');
  }

  /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */
  this._dispatch = function dispatch (evtName, text, options, globals) {
    if (listeners.hasOwnProperty(evtName)) {
      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
        if (nText && typeof nText !== 'undefined') {
          text = nText;
        }
      }
    }
    return text;
  };

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */
  this.listen = function (name, callback) {
    listen(name, callback);
    return this;
  };

  /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */
  this.makeHtml = function (text) {
    //check if text is not falsy
    if (!text) {
      return text;
    }

    var globals = {
      gHtmlBlocks:     [],
      gHtmlMdBlocks:   [],
      gHtmlSpans:      [],
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this,
      ghCodeBlocks:    []
    };

    // attacklab: Replace ~ with ~T
    // This lets us use tilde as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/~/g, '~T');

    // attacklab: Replace $ with ~D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '~D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    if (options.smartIndentationFix) {
      text = rTrimInputText(text);
    }

    // Make sure text begins and ends with a couple of newlines:
    //text = '\n\n' + text + '\n\n';
    text = text;
    // detab
    text = showdown.subParser('detab')(text, options, globals);

    // stripBlankLines
    text = showdown.subParser('stripBlankLines')(text, options, globals);

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // run the sub parsers
    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLSpans')(text, options, globals);
    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
    text = showdown.subParser('blockGamut')(text, options, globals);
    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

    // attacklab: Restore dollar signs
    text = text.replace(/~D/g, '$$');

    // attacklab: Restore tildes
    text = text.replace(/~T/g, '~');

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });
    return text;
  };

  /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */
  this.setOption = function (key, value) {
    options[key] = value;
  };

  /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */
  this.getOption = function (key) {
    return options[key];
  };

  /**
   * Get the options of this Converter instance
   * @returns {{}}
   */
  this.getOptions = function () {
    return options;
  };

  /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */
  this.addExtension = function (extension, name) {
    name = name || null;
    _parseExtension(extension, name);
  };

  /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */
  this.useExtension = function (extensionName) {
    _parseExtension(extensionName);
  };

  /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */
  this.setFlavor = function (name) {
    if (flavor.hasOwnProperty(name)) {
      var preset = flavor[name];
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          options[option] = preset[option];
        }
      }
    }
  };

  /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */
  this.removeExtension = function (extension) {
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var a = 0; a < extension.length; ++a) {
      var ext = extension[a];
      for (var i = 0; i < langExtensions.length; ++i) {
        if (langExtensions[i] === ext) {
          langExtensions[i].splice(i, 1);
        }
      }
      for (var ii = 0; ii < outputModifiers.length; ++i) {
        if (outputModifiers[ii] === ext) {
          outputModifiers[ii].splice(i, 1);
        }
      }
    }
  };

  /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */
  this.getAllExtensions = function () {
    return {
      language: langExtensions,
      output: outputModifiers
    };
  };
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('anchors.before', text, options, globals);

  var writeAnchorTag = function (wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
    if (showdown.helper.isUndefined(m7)) {
      m7 = '';
    }
    wholeMatch = m1;
    var linkText = m2,
        linkId = m3.toLowerCase(),
        url = m4,
        title = m7;

    if (!url) {
      if (!linkId) {
        // lower-case and turn embedded newlines into spaces
        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
        url = globals.gUrls[linkId];
        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
          title = globals.gTitles[linkId];
        }
      } else {
        if (wholeMatch.search(/\(\s*\)$/m) > -1) {
          // Special case for explicit empty url
          url = '';
        } else {
          return wholeMatch;
        }
      }
    }

    url = showdown.helper.escapeCharacters(url, '*_', false);
    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      title = showdown.helper.escapeCharacters(title, '*_', false);
      result += ' title="' + title + '"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  /*
   text = text.replace(/
   (							// wrap whole match in $1
   \[
   (
   (?:
   \[[^\]]*\]		// allow brackets nested one level
   |
   [^\[]			// or anything else
   )*
   )
   \]

   [ ]?					// one optional space
   (?:\n[ ]*)?				// one optional newline followed by spaces

   \[
   (.*?)					// id = $3
   \]
   )()()()()					// pad remaining backreferences
   /g,_DoAnchors_callback);
   */
  text = text.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, writeAnchorTag);

  //
  // Next, inline-style links: [link text](url "optional title")
  //

  /*
   text = text.replace(/
   (						// wrap whole match in $1
   \[
   (
   (?:
   \[[^\]]*\]	// allow brackets nested one level
   |
   [^\[\]]			// or anything else
   )
   )
   \]
   \(						// literal paren
   [ \t]*
   ()						// no id, so leave $3 empty
   <?(.*?)>?				// href = $4
   [ \t]*
   (						// $5
   (['"])				// quote char = $6
   (.*?)				// Title = $7
   \6					// matching quote
   [ \t]*				// ignore any spaces/tabs between closing quote and )
   )?						// title is optional
   \)
   )
   /g,writeAnchorTag);
   */
  text = text.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
                      writeAnchorTag);

  //
  // Last, handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  //

  /*
   text = text.replace(/
   (                // wrap whole match in $1
   \[
   ([^\[\]]+)       // link text = $2; can't contain '[' or ']'
   \]
   )()()()()()      // pad rest of backreferences
   /g, writeAnchorTag);
   */
  text = text.replace(/(\[([^\[\]]+)])()()()()()/g, writeAnchorTag);

  text = globals.converter._dispatch('anchors.after', text, options, globals);
  return text;
});

showdown.subParser('autoLinks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

  var simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,
      delimUrlRegex   = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,
      simpleMailRegex = /(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,
      delimMailRegex  = /<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;

  text = text.replace(delimUrlRegex, replaceLink);
  text = text.replace(delimMailRegex, replaceMail);
  // simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[-.+~:?#@!$&'()*,;=[\]\w]+)\b/gi,
  // Email addresses: <address@domain.foo>

  if (options.simplifiedAutoLink) {
    text = text.replace(simpleURLRegex, replaceLink);
    text = text.replace(simpleMailRegex, replaceMail);
  }

  function replaceLink(wm, link) {
    var lnkTxt = link;
    if (/^www\./i.test(link)) {
      link = link.replace(/^www\./i, 'http://www.');
    }
    return '<a href="' + link + '">' + lnkTxt + '</a>';
  }

  function replaceMail(wholeMatch, m1) {
    var unescapedStr = showdown.subParser('unescapeSpecialChars')(m1);
    return showdown.subParser('encodeEmailAddress')(unescapedStr);
  }

  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

  // we parse blockquotes first so that we can have headings and hrs
  // inside blockquotes
  text = showdown.subParser('blockQuotes')(text, options, globals);
  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
  text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
  text = text.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, key);

  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('tables')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

  return text;
});

showdown.subParser('blockQuotes', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);
  /*
   text = text.replace(/
   (								// Wrap whole match in $1
   (
   ^[ \t]*>[ \t]?			// '>' at the start of a line
   .+\n					// rest of the first line
   (.+\n)*					// subsequent consecutive lines
   \n*						// blanks
   )+
   )
   /gm, function(){...});
   */

  text = text.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
    var bq = m1;

    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, '~0'); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/~0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '~0');
      pre = pre.replace(/~0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });

  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);
  /*
   text = text.replace(text,
   /(?:\n\n|^)
   (								// $1 = the code block -- one or more lines, starting with a space/tab
   (?:
   (?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
   .*\n+
   )+
   )
   (\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
   /g,function(){...});
   */

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '~0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock);
    codeblock = showdown.subParser('encodeCode')(codeblock);
    codeblock = showdown.subParser('detab')(codeblock);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
  return text;
});

/**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */
showdown.subParser('codeSpans', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

  /*
   text = text.replace(/
   (^|[^\\])					// Character before opening ` can't be a backslash
   (`+)						// $2 = Opening run of `
   (							// $3 = The code block
   [^\r]*?
   [^`]					// attacklab: work around lack of lookbehind
   )
   \2							// Matching closer
   (?!`)
   /gm, function(){...});
   */

  if (typeof(text) === 'undefined') {
    text = '';
  }
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c);
      return m1 + '<code>' + c + '</code>';
    }
  );

  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text) {
  'use strict';

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '~A~B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/~B(.+?)~A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/~A/g, '    ');  // g_tab_width
  text = text.replace(/~B/g, '');

  return text;

});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text) {
  'use strict';
  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?\$!])/gi, '&lt;');

  return text;
});

/**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */
showdown.subParser('encodeBackslashEscapes', function (text) {
  'use strict';
  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, showdown.helper.escapeCharactersCallback);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text) {
  'use strict';

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text.replace(/&/g, '&amp;');

  // Do the angle bracket song and dance:
  text = text.replace(/</g, '&lt;');
  text = text.replace(/>/g, '&gt;');

  // Now, escape characters that are magic in Markdown:
  text = showdown.helper.escapeCharacters(text, '*_{}[]\\', false);

  // jj the line above breaks this:
  //---
  //* Item
  //   1. Subitem
  //            special char: *
  // ---

  return text;
});

/**
 *  Input: an email address, e.g. "foo@example.com"
 *
 *  Output: the email address as a mailto link, with each character
 *    of the address encoded as either a decimal or hex entity, in
 *    the hopes of foiling most address harvesting spam bots. E.g.:
 *
 *    <a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
 *       x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
 *       &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
 *
 *  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
 *  mailing list: <http://tinyurl.com/yu7ue>
 *
 */
showdown.subParser('encodeEmailAddress', function (addr) {
  'use strict';

  var encode = [
    function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    },
    function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    },
    function (ch) {
      return ch;
    }
  ];

  addr = 'mailto:' + addr;

  addr = addr.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else if (ch !== ':') {
      // leave ':' alone (to spot mailto: later)
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  addr = '<a href="' + addr + '">' + addr + '</a>';
  addr = addr.replace(/">.+:/g, '">'); // strip the mailto: from the visible part

  return addr;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text) {
  'use strict';

  // Build a regex to find HTML tags and comments.  See Friedl's
  // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
  var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

  text = text.replace(regex, function (wholeMatch) {
    var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, '$1`');
    tag = showdown.helper.escapeCharacters(tag, '\\`*_', false);
    return tag;
  });

  return text;
});

/**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */
showdown.subParser('githubCodeBlocks', function (text, options, globals) {
  'use strict';

  // early exit if option is not enabled
  if (!options.ghCodeBlocks) {
    return text;
  }

  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

  text += '~0';

  text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    // First parse the github code block
    codeblock = showdown.subParser('encodeCode')(codeblock);
    codeblock = showdown.subParser('detab')(codeblock);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

    // Since GHCodeblocks can be false positives, we need to
    // store the primitive text and the parsed text in a global var,
    // and then return a token
    return '\n\n~G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  });

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
});

showdown.subParser('hashBlock', function (text, options, globals) {
  'use strict';
  text = text.replace(/(^\n+|\n+$)/g, '');
  return '\n\n~K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
});

showdown.subParser('hashElement', function (text, options, globals) {
  'use strict';

  return function (wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, '\n');
    blockText = blockText.replace(/^\n/, '');

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, '');

    // Replace the element text with a marker ("~KxK" where x is its key)
    blockText = '\n\n~K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  'use strict';

  var blockTags = [
      'pre',
      'div',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'table',
      'dl',
      'ol',
      'ul',
      'script',
      'noscript',
      'form',
      'fieldset',
      'iframe',
      'math',
      'style',
      'section',
      'header',
      'footer',
      'nav',
      'article',
      'aside',
      'address',
      'audio',
      'canvas',
      'figure',
      'hgroup',
      'output',
      'video',
      'p'
    ],
    repFunc = function (wholeMatch, match, left, right) {
      var txt = wholeMatch;
      // check if this html element is marked as markdown
      // if so, it's contents should be parsed as markdown
      if (left.search(/\bmarkdown\b/) !== -1) {
        txt = left + globals.converter.makeHtml(match) + right;
      }
      return '\n\n~K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
    };

  for (var i = 0; i < blockTags.length; ++i) {
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^(?: |\\t){0,3}<' + blockTags[i] + '\\b[^>]*>', '</' + blockTags[i] + '>', 'gim');
  }

  // HR SPECIAL CASE
  text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments:
  text = text.replace(/(<!--[\s\S]*?-->)/g,
    showdown.subParser('hashElement')(text, options, globals));

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
  text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));
  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashHTMLSpans', function (text, config, globals) {
  'use strict';

  var matches = showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');

  for (var i = 0; i < matches.length; ++i) {
    text = text.replace(matches[i][0], '~L' + (globals.gHtmlSpans.push(matches[i][0]) - 1) + 'L');
  }
  return text;
});

/**
 * Unhash HTML spans
 */
showdown.subParser('unhashHTMLSpans', function (text, config, globals) {
  'use strict';

  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
    text = text.replace('~L' + i + 'L', globals.gHtmlSpans[i]);
  }

  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashPreCodeTags', function (text, config, globals) {
  'use strict';

  var repFunc = function (wholeMatch, match, left, right) {
    // encode html entities
    var codeblock = left + showdown.subParser('encodeCode')(match) + right;
    return '\n\n~G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  };

  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^(?: |\\t){0,3}</code>\\s*</pre>', 'gim');
  return text;
});

showdown.subParser('headers', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('headers.before', text, options, globals);

  var prefixHeader = options.prefixHeaderId,
      headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),

  // Set text-style headers:
  //	Header 1
  //	========
  //
  //	Header 2
  //	--------
  //
      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  text = text.replace(setextRegexH2, function (matchFound, m1) {
    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart + 1,
      hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  // atx-style headers:
  //  # Header 1
  //  ## Header 2
  //  ## Header 2 with closing hashes ##
  //  ...
  //  ###### Header 6
  //
  text = text.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, function (wholeMatch, m1, m2) {
    var span = showdown.subParser('spanGamut')(m2, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId(m) {
    var title, escapedId = m.replace(/[^\w]/g, '').toLowerCase();

    if (globals.hashLinkCounts[escapedId]) {
      title = escapedId + '-' + (globals.hashLinkCounts[escapedId]++);
    } else {
      title = escapedId;
      globals.hashLinkCounts[escapedId] = 1;
    }

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (prefixHeader === true) {
      prefixHeader = 'section';
    }

    if (showdown.helper.isString(prefixHeader)) {
      return prefixHeader + title;
    }
    return title;
  }

  text = globals.converter._dispatch('headers.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('images.before', text, options, globals);

  var inlineRegExp    = /!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,
      referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }

    if (url === '' || url === null) {
      if (linkId === '' || linkId === null) {
        // lower-case and turn embedded newlines into spaces
        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(gUrls[linkId])) {
        url = gUrls[linkId];
        if (!showdown.helper.isUndefined(gTitles[linkId])) {
          title = gTitles[linkId];
        }
        if (!showdown.helper.isUndefined(gDims[linkId])) {
          width = gDims[linkId].width;
          height = gDims[linkId].height;
        }
      } else {
        return wholeMatch;
      }
    }

    altText = altText.replace(/"/g, '&quot;');
    altText = showdown.helper.escapeCharacters(altText, '*_', false);
    url = showdown.helper.escapeCharacters(url, '*_', false);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title) {
      title = title.replace(/"/g, '&quot;');
      title = showdown.helper.escapeCharacters(title, '*_', false);
      result += ' title="' + title + '"';
    }

    if (width && height) {
      width  = (width === '*') ? 'auto' : width;
      height = (height === '*') ? 'auto' : height;

      result += ' width="' + width + '"';
      result += ' height="' + height + '"';
    }

    result += ' />';
    return result;
  }

  // First, handle reference-style labeled images: ![alt text][id]
  text = text.replace(referenceRegExp, writeImageTag);

  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
  text = text.replace(inlineRegExp, writeImageTag);

  text = globals.converter._dispatch('images.after', text, options, globals);
  return text;
});

showdown.subParser('italicsAndBold', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

  if (options.literalMidWordUnderscores) {
    //underscores
    // Since we are consuming a \s character, we need to add it
    text = text.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm, '$1<strong>$2</strong>');
    text = text.replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm, '$1<em>$2</em>');
    //asterisks
    text = text.replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g, '<strong>$2</strong>');
    text = text.replace(/(\*)(?=\S)([^\r]*?\S)\1/g, '<em>$2</em>');

  } else {
    // <strong> must go first:
    text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>');
    text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, '<em>$2</em>');
  }

  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
  return text;
});

/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('lists', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('lists.before', text, options, globals);
  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function processListItems (listStr, trimTrailing) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".
    globals.gListLevel++;

    // trim trailing blank lines:
    listStr = listStr.replace(/\n{2,}$/, '\n');

    // attacklab: add sentinel to emulate \z
    listStr += '~0';

    var rgx = /(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!~0)/.test(listStr));

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');
      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }
      // m1 - Leading line or
      // Has a double return (multi paragraph) or
      // Has sublist
      if (m1 || (item.search(/\n{2,}/) > -1)) {
        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
        item = showdown.subParser('blockGamut')(item, options, globals);
      } else {
        // Recursion for sub-lists:
        item = showdown.subParser('lists')(item, options, globals);
        item = item.replace(/\n$/, ''); // chomp(item)
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
      }
      item =  '\n<li' + bulletStyle + '>' + item + '</li>\n';
      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/~0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function parseConsecutiveLists(list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for UL and vice versa
    var counterRxg = (listType === 'ul') ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm,
      subLists = [],
      result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL(txt) {
        var pos = txt.search(counterRxg);
        if (pos !== -1) {
          // slice
          result += '\n\n<' + listType + '>' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n\n<' + listType + '>' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n\n';
        }
      })(list);
      for (var i = 0; i < subLists.length; ++i) {

      }
    } else {
      result = '\n\n<' + listType + '>' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n\n';
    }

    return result;
  }

  // attacklab: add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '~0';

  // Re-usable pattern to match any entire ul or ol list:
  var wholeList = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

  if (globals.gListLevel) {
    text = text.replace(wholeList, function (wholeMatch, list, m2) {
      var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
      return parseConsecutiveLists(list, listType, true);
    });
  } else {
    wholeList = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
    //wholeList = /(\n\n|^\n?)( {0,3}([*+-]|\d+\.)[ \t]+[\s\S]+?)(?=(~0)|(\n\n(?!\t| {2,}| {0,3}([*+-]|\d+\.)[ \t])))/g;
    text = text.replace(wholeList, function (wholeMatch, m1, list, m3) {

      var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
      return parseConsecutiveLists(list, listType);
    });
  }

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  text = globals.converter._dispatch('lists.after', text, options, globals);
  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text) {
  'use strict';

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '~0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/~0/g, '');

  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];
    // if this is an HTML marker, copy it
    if (str.search(/~(K|G)(\d+)\1/g) >= 0) {
      grafsOut.push(str);
    } else {
      str = showdown.subParser('spanGamut')(str, options, globals);
      str = str.replace(/^([ \t]*)/g, '<p>');
      str += '</p>';
      grafsOut.push(str);
    }
  }

  /** Unhashify HTML blocks */
  end = grafsOut.length;
  for (i = 0; i < end; i++) {
    var blockText = '',
        grafsOutIt = grafsOut[i],
        codeFlag = false;
    // if this is a marker for an html block...
    while (grafsOutIt.search(/~(K|G)(\d+)\1/) >= 0) {
      var delim = RegExp.$1,
          num   = RegExp.$2;

      if (delim === 'K') {
        blockText = globals.gHtmlBlocks[num];
      } else {
        // we need to check if ghBlock is a false positive
        if (codeFlag) {
          // use encoded version of all text
          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text);
        } else {
          blockText = globals.ghCodeBlocks[num].codeblock;
        }
      }
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

      grafsOutIt = grafsOutIt.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/, blockText);
      // Check if grafsOutIt is a pre->code
      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
        codeFlag = true;
      }
    }
    grafsOut[i] = grafsOutIt;
  }
  text = grafsOut.join('\n\n');
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');
  return globals.converter._dispatch('paragraphs.after', text, options, globals);
});

/**
 * Run extension
 */
showdown.subParser('runExtension', function (ext, text, options, globals) {
  'use strict';

  if (ext.filter) {
    text = ext.filter(text, globals.converter, options);

  } else if (ext.regex) {
    // TODO remove this when old extension loading mechanism is deprecated
    var re = ext.regex;
    if (!re instanceof RegExp) {
      re = new RegExp(re, 'g');
    }
    text = text.replace(re, ext.replace);
  }

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('spanGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after _DoAnchors(), because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);

  // Do hard breaks:
  text = text.replace(/  +\n/g, ' <br />\n');

  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
  return text;
});

showdown.subParser('strikethrough', function (text, options, globals) {
  'use strict';

  if (options.strikethrough) {
    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
    text = text.replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g, '<del>$1</del>');
    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
  }

  return text;
});

/**
 * Strip any lines consisting only of spaces and tabs.
 * This makes subsequent regexs easier to write, because we can
 * match consecutive blank lines with /\n+/ instead of something
 * contorted like /[ \t]*\n+/
 */
showdown.subParser('stripBlankLines', function (text) {
  'use strict';
  return text.replace(/^[ \t]+$/mg, '');
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 *
 * ^[ ]{0,3}\[(.+)\]: // id = $1  attacklab: g_tab_width - 1
 * [ \t]*
 * \n?                  // maybe *one* newline
 * [ \t]*
 * <?(\S+?)>?          // url = $2
 * [ \t]*
 * \n?                // maybe one newline
 * [ \t]*
 * (?:
 * (\n*)              // any lines skipped = $3 attacklab: lookbehind removed
 * ["(]
 * (.+?)              // title = $4
 * [")]
 * [ \t]*
 * )?                 // title is optional
 * (?:\n+|$)
 * /gm,
 * function(){...});
 *
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
  'use strict';

  var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '~0';

  text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url);  // Link IDs are case-insensitive

    if (blankLines) {
      // Oops, found blank lines, so it's not a title.
      // Put back the parenthetical statement we stole.
      return blankLines + title;

    } else {
      if (title) {
        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
      }
      if (options.parseImgDimensions && width && height) {
        globals.gDimensions[linkId] = {
          width:  width,
          height: height
        };
      }
    }
    // Completely remove the definition from the text
    return '';
  });

  // attacklab: strip sentinel
  text = text.replace(/~0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {
  'use strict';

  if (!options.tables) {
    return text;
  }

  var tableRgx = /^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;

  function parseStyles(sLine) {
    if (/^:[ \t]*--*$/.test(sLine)) {
      return ' style="text-align:left;"';
    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
      return ' style="text-align:right;"';
    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
      return ' style="text-align:center;"';
    } else {
      return '';
    }
  }

  function parseHeaders(header, style) {
    var id = '';
    header = header.trim();
    if (options.tableHeaderId) {
      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
    }
    header = showdown.subParser('spanGamut')(header, options, globals);

    return '<th' + id + style + '>' + header + '</th>\n';
  }

  function parseCells(cell, style) {
    var subText = showdown.subParser('spanGamut')(cell, options, globals);
    return '<td' + style + '>' + subText + '</td>\n';
  }

  function buildTable(headers, cells) {
    var tb = '<table>\n<thead>\n<tr>\n',
        tblLgn = headers.length;

    for (var i = 0; i < tblLgn; ++i) {
      tb += headers[i];
    }
    tb += '</tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < cells.length; ++i) {
      tb += '<tr>\n';
      for (var ii = 0; ii < tblLgn; ++ii) {
        tb += cells[i][ii];
      }
      tb += '</tr>\n';
    }
    tb += '</tbody>\n</table>\n';
    return tb;
  }

  text = globals.converter._dispatch('tables.before', text, options, globals);

  text = text.replace(tableRgx, function (rawTable) {

    var i, tableLines = rawTable.split('\n');

    // strip wrong first and last column if wrapped tables are used
    for (i = 0; i < tableLines.length; ++i) {
      if (/^[ \t]{0,3}\|/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/^[ \t]{0,3}\|/, '');
      }
      if (/\|[ \t]*$/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
      }
    }

    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
        rawCells = [],
        headers = [],
        styles = [],
        cells = [];

    tableLines.shift();
    tableLines.shift();

    for (i = 0; i < tableLines.length; ++i) {
      if (tableLines[i].trim() === '') {
        continue;
      }
      rawCells.push(
        tableLines[i]
          .split('|')
          .map(function (s) {
            return s.trim();
          })
      );
    }

    if (rawHeaders.length < rawStyles.length) {
      return rawTable;
    }

    for (i = 0; i < rawStyles.length; ++i) {
      styles.push(parseStyles(rawStyles[i]));
    }

    for (i = 0; i < rawHeaders.length; ++i) {
      if (showdown.helper.isUndefined(styles[i])) {
        styles[i] = '';
      }
      headers.push(parseHeaders(rawHeaders[i], styles[i]));
    }

    for (i = 0; i < rawCells.length; ++i) {
      var row = [];
      for (var ii = 0; ii < headers.length; ++ii) {
        if (showdown.helper.isUndefined(rawCells[i][ii])) {

        }
        row.push(parseCells(rawCells[i][ii], styles[ii]));
      }
      cells.push(row);
    }

    return buildTable(headers, cells);
  });

  text = globals.converter._dispatch('tables.after', text, options, globals);

  return text;
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text) {
  'use strict';

  text = text.replace(/~E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });
  return text;
});
module.exports = showdown;

});;define("lib/wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
// HTML 支持的数学符号
function strNumDiscode(str){
    str = str.replace(/&forall;/g, '∀');
    str = str.replace(/&part;/g, '∂');
    str = str.replace(/&exists;/g, '∃');
    str = str.replace(/&empty;/g, '∅');
    str = str.replace(/&nabla;/g, '∇');
    str = str.replace(/&isin;/g, '∈');
    str = str.replace(/&notin;/g, '∉');
    str = str.replace(/&ni;/g, '∋');
    str = str.replace(/&prod;/g, '∏');
    str = str.replace(/&sum;/g, '∑');
    str = str.replace(/&minus;/g, '−');
    str = str.replace(/&lowast;/g, '∗');
    str = str.replace(/&radic;/g, '√');
    str = str.replace(/&prop;/g, '∝');
    str = str.replace(/&infin;/g, '∞');
    str = str.replace(/&ang;/g, '∠');
    str = str.replace(/&and;/g, '∧');
    str = str.replace(/&or;/g, '∨');
    str = str.replace(/&cap;/g, '∩');
    str = str.replace(/&cap;/g, '∪');
    str = str.replace(/&int;/g, '∫');
    str = str.replace(/&there4;/g, '∴');
    str = str.replace(/&sim;/g, '∼');
    str = str.replace(/&cong;/g, '≅');
    str = str.replace(/&asymp;/g, '≈');
    str = str.replace(/&ne;/g, '≠');
    str = str.replace(/&le;/g, '≤');
    str = str.replace(/&ge;/g, '≥');
    str = str.replace(/&sub;/g, '⊂');
    str = str.replace(/&sup;/g, '⊃');
    str = str.replace(/&nsub;/g, '⊄');
    str = str.replace(/&sube;/g, '⊆');
    str = str.replace(/&supe;/g, '⊇');
    str = str.replace(/&oplus;/g, '⊕');
    str = str.replace(/&otimes;/g, '⊗');
    str = str.replace(/&perp;/g, '⊥');
    str = str.replace(/&sdot;/g, '⋅');
    return str;
}

//HTML 支持的希腊字母
function strGreeceDiscode(str){
    str = str.replace(/&Alpha;/g, 'Α');
    str = str.replace(/&Beta;/g, 'Β');
    str = str.replace(/&Gamma;/g, 'Γ');
    str = str.replace(/&Delta;/g, 'Δ');
    str = str.replace(/&Epsilon;/g, 'Ε');
    str = str.replace(/&Zeta;/g, 'Ζ');
    str = str.replace(/&Eta;/g, 'Η');
    str = str.replace(/&Theta;/g, 'Θ');
    str = str.replace(/&Iota;/g, 'Ι');
    str = str.replace(/&Kappa;/g, 'Κ');
    str = str.replace(/&Lambda;/g, 'Λ');
    str = str.replace(/&Mu;/g, 'Μ');
    str = str.replace(/&Nu;/g, 'Ν');
    str = str.replace(/&Xi;/g, 'Ν');
    str = str.replace(/&Omicron;/g, 'Ο');
    str = str.replace(/&Pi;/g, 'Π');
    str = str.replace(/&Rho;/g, 'Ρ');
    str = str.replace(/&Sigma;/g, 'Σ');
    str = str.replace(/&Tau;/g, 'Τ');
    str = str.replace(/&Upsilon;/g, 'Υ');
    str = str.replace(/&Phi;/g, 'Φ');
    str = str.replace(/&Chi;/g, 'Χ');
    str = str.replace(/&Psi;/g, 'Ψ');
    str = str.replace(/&Omega;/g, 'Ω');

    str = str.replace(/&alpha;/g, 'α');
    str = str.replace(/&beta;/g, 'β');
    str = str.replace(/&gamma;/g, 'γ');
    str = str.replace(/&delta;/g, 'δ');
    str = str.replace(/&epsilon;/g, 'ε');
    str = str.replace(/&zeta;/g, 'ζ');
    str = str.replace(/&eta;/g, 'η');
    str = str.replace(/&theta;/g, 'θ');
    str = str.replace(/&iota;/g, 'ι');
    str = str.replace(/&kappa;/g, 'κ');
    str = str.replace(/&lambda;/g, 'λ');
    str = str.replace(/&mu;/g, 'μ');
    str = str.replace(/&nu;/g, 'ν');
    str = str.replace(/&xi;/g, 'ξ');
    str = str.replace(/&omicron;/g, 'ο');
    str = str.replace(/&pi;/g, 'π');
    str = str.replace(/&rho;/g, 'ρ');
    str = str.replace(/&sigmaf;/g, 'ς');
    str = str.replace(/&sigma;/g, 'σ');
    str = str.replace(/&tau;/g, 'τ');
    str = str.replace(/&upsilon;/g, 'υ');
    str = str.replace(/&phi;/g, 'φ');
    str = str.replace(/&chi;/g, 'χ');
    str = str.replace(/&psi;/g, 'ψ');
    str = str.replace(/&omega;/g, 'ω');
    str = str.replace(/&thetasym;/g, 'ϑ');
    str = str.replace(/&upsih;/g, 'ϒ');
    str = str.replace(/&piv;/g, 'ϖ');
    str = str.replace(/&middot;/g, '·');
    return str;
}

// 

function strcharacterDiscode(str){
    // 加入常用解析
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&amp;/g, '&');
    // str = str.replace(/&lt;/g, '‹');
    // str = str.replace(/&gt;/g, '›');

    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');

    return str;
}

// HTML 支持的其他实体
function strOtherDiscode(str){
    str = str.replace(/&OElig;/g, 'Œ');
    str = str.replace(/&oelig;/g, 'œ');
    str = str.replace(/&Scaron;/g, 'Š');
    str = str.replace(/&scaron;/g, 'š');
    str = str.replace(/&Yuml;/g, 'Ÿ');
    str = str.replace(/&fnof;/g, 'ƒ');
    str = str.replace(/&circ;/g, 'ˆ');
    str = str.replace(/&tilde;/g, '˜');
    str = str.replace(/&ensp;/g, '');
    str = str.replace(/&emsp;/g, '');
    str = str.replace(/&thinsp;/g, '');
    str = str.replace(/&zwnj;/g, '');
    str = str.replace(/&zwj;/g, '');
    str = str.replace(/&lrm;/g, '');
    str = str.replace(/&rlm;/g, '');
    str = str.replace(/&ndash;/g, '–');
    str = str.replace(/&mdash;/g, '—');
    str = str.replace(/&lsquo;/g, '‘');
    str = str.replace(/&rsquo;/g, '’');
    str = str.replace(/&sbquo;/g, '‚');
    str = str.replace(/&ldquo;/g, '“');
    str = str.replace(/&rdquo;/g, '”');
    str = str.replace(/&bdquo;/g, '„');
    str = str.replace(/&dagger;/g, '†');
    str = str.replace(/&Dagger;/g, '‡');
    str = str.replace(/&bull;/g, '•');
    str = str.replace(/&hellip;/g, '…');
    str = str.replace(/&permil;/g, '‰');
    str = str.replace(/&prime;/g, '′');
    str = str.replace(/&Prime;/g, '″');
    str = str.replace(/&lsaquo;/g, '‹');
    str = str.replace(/&rsaquo;/g, '›');
    str = str.replace(/&oline;/g, '‾');
    str = str.replace(/&euro;/g, '€');
    str = str.replace(/&trade;/g, '™');

    str = str.replace(/&larr;/g, '←');
    str = str.replace(/&uarr;/g, '↑');
    str = str.replace(/&rarr;/g, '→');
    str = str.replace(/&darr;/g, '↓');
    str = str.replace(/&harr;/g, '↔');
    str = str.replace(/&crarr;/g, '↵');
    str = str.replace(/&lceil;/g, '⌈');
    str = str.replace(/&rceil;/g, '⌉');

    str = str.replace(/&lfloor;/g, '⌊');
    str = str.replace(/&rfloor;/g, '⌋');
    str = str.replace(/&loz;/g, '◊');
    str = str.replace(/&spades;/g, '♠');
    str = str.replace(/&clubs;/g, '♣');
    str = str.replace(/&hearts;/g, '♥');

    str = str.replace(/&diams;/g, '♦');

    return str;
}

function strMoreDiscode(str){
    str = str.replace(/\r\n/g,"");  
    str = str.replace(/\n/g,"");

    str = str.replace(/code/g,"wxxxcode-style");
    return str;
}

function strDiscode(str){
    str = strNumDiscode(str);
    str = strGreeceDiscode(str);
    str = strcharacterDiscode(str);
    str = strOtherDiscode(str);
    str = strMoreDiscode(str);
    return str;
}
function urlToHttpUrl(url,rep){
    
    var patt1 = new RegExp("^//");
    var result = patt1.test(url);
    if(result){
        url = rep+":"+url;
    }
    return  url;
}

module.exports = {
    strDiscode:strDiscode,
    urlToHttpUrl:urlToHttpUrl
}
});;define("lib/wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

/**
 * utils函数引入
 **/
 // XXX:
// import showdown from 'showdown.js';
// import HtmlToJson from 'html2json.js';

var showdown = require('showdown.js');
var HtmlToJson = require('html2json.js');

// Host = api.Host
/**
 * 配置及公有属性
 **/
/**
 * 主函数入口区
 **/
function wxParse(bindName = 'wxParseData', type='html', data='<div class="color:red;">数据不能为空</div>', target,imagePadding) {

  var that = target;
  var transData = {};//存放转化后的数据
  if (type == 'html') {
    transData = HtmlToJson.html2json(data, bindName);
    // (JSON.stringify(transData, ' ', ' '));
  } else if (type == 'md' || type == 'markdown') {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
    transData = HtmlToJson.html2json(html, bindName);
    // (JSON.stringify(transData, ' ', ' '));
  }
  transData.view = {};
  transData.view.imagePadding = 0;
  if(typeof(imagePadding) != 'undefined'){
    transData.view.imagePadding = imagePadding
  }
  var bindData = {};
  bindData[bindName] = transData;
  that.setData(bindData)
  that.wxParseImgLoad = wxParseImgLoad;
  that.wxParseImgTap = wxParseImgTap;
}
// 图片点击事件
function wxParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
    })
  }
}

/**
 * 图片视觉宽高计算函数区
 **/
function wxParseImgLoad(e) {
  var that = this;
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.idx;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom)
  }
}
// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var temData = that.data[bindName];
  if (temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height,that,bindName);
  temImages[idx].width = recal.imageWidth;
  temImages[idx].height = recal.imageheight;
  temData.images = temImages;
  var bindData = {};
  bindData[bindName] = temData;
  that.setData(bindData);
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight,that,bindName) {
  //获取图片的原始长宽
  var windowWidth = 0, windowHeight = 0;
  var autoWidth = 0, autoHeight = 0;
  var results = {};
  wx.getSystemInfo({
    success: function (res) {
      var padding = that.data[bindName].view.imagePadding;
      windowWidth = res.windowWidth-2*padding;
      windowHeight = res.windowHeight;
      //判断按照那种方式进行缩放
      ("windowWidth" + windowWidth);
      if (originalWidth > windowWidth) {//在图片width大于手机屏幕width时候
        autoWidth = windowWidth;
        ("autoWidth" + autoWidth);
        autoHeight = (autoWidth * originalHeight) / originalWidth;
        ("autoHeight" + autoHeight);
        results.imageWidth = autoWidth;
        results.imageheight = autoHeight;
      } else {//否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }
    }
  })
  return results;
}

function wxParseTemArray(temArrayName,bindNameReg,total,that){
  var array = [];
  var temData = that.data;
  var obj = null;
  for(var i = 0; i < total; i++){
    var simArr = temData[bindNameReg+i].nodes;
    array.push(simArr);
  }

  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"'+ temArrayName +'":""}');
  obj[temArrayName] = array;
  that.setData(obj);
}

/**
 * 配置emojis
 *
 */

function emojisInit(reg='',baseSrc="/wxParse/emojis/",emojis){
   HtmlToJson.emojisInit(reg,baseSrc,emojis);
}

module.exports = {
  wxParse: wxParse,
  wxParseTemArray:wxParseTemArray,
  emojisInit:emojisInit
}

});;define("pages/ucenter/company/company.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');



var app = getApp();

Page({
  data: {
    gen_amount:0,
    my_ratio:0,
    original_user_mobile:'',
  },

  onLoad: function (options) {
  },
  onReady: function () {

  },
  onShow: function () {
    this.get_data()
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  },
  get_data:function(){
    wx.showLoading({
      title: '加载中...',
    });
    let that = this;
    util.request(api.MyCompanyData).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          brandList: that.data.brandList.concat(res.data.data),
          totalPages: res.data.totalPages
        });
      }
      wx.hideLoading();
    });
  }
})

});;define("pages/ucenter/wallet/withdraw/withdraw_wx.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('../../../../utils/util.js');
var api = require('../../../../config/api.js');

api.withdrawalverifycode = api.SSL + '/api/vcode/withdrawal/'
api.withdrawal = api.SSL + '/api/user/balance/withdrawals/'

var app = getApp();

Page({
  data: {
    host: api.Host,
    balance:0,
    name:null,
    sendCodeDisabled: false,
    sendCodeDisabledTime: '',
    code:null,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // this.getCartList()
    this.balance()

  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
    // this.getCartList();
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  balance: function(){
      let that = this;
      util.request(api.Balance,{}).then(function (res) {
          if(res.errno==0){
              var int_, float_, balance
              balance = res.data.balance.split('.')
              int_ = balance[0]
              float_ = balance[1]
              float_ = float_.slice(0,2)
              that.setData({
                balance: (int_ + '.' + float_)
              });
          }else {
            util.showErrorToast('帐户异常');
          }
      });
  },
  bindinputamount: function(event){
      var amount = event.detail.value;
      var amount_ = amount.split('.')
      var int_ = amount_[0]
      var float_ = amount_[1] || '00'
      var balance = Number(this.data.balance)
      if(amount>balance){
          amount = this.data.balance
      }else if(float_.length>2){
          amount = int_ + '.' + float_.slice(0,2)
      }
      this.setData({
          amount: amount
        });
  },
  bindCodeInput: function(e){
      var code = e.detail.value;
      this.setData({
          code: code
        });
  },
  sendCode: function(e) {
    var that = this;
    that.setData({
        sendCodeDisabled: true
    });
    wx.showLoading({
        mask: true,
        success: function() {
            var time = 5;
            var id = setInterval(function(){
                that.setData({sendCodeDisabledTime: time});
                time -= 1;
                if (time < 0) {
                    clearInterval(id);
                    that.setData({
                        sendCodeDisabled: false,
                        sendCodeDisabledTime: ''
                    });
                }
            }, 1000);

            util.request(api.withdrawalverifycode).then(function(res){
                wx.hideLoading();
                if(res.errno==0){
                    util.showErrorToast('发送成功');
                }
            })
            // user.send_verify_code(that.data.mobile).then((res) => {
            //
            // }).catch((err) => {
            //     (err);
            // });
        }, fail: function() {
            wx.showToast({title: '获取验证码错误，请重试', icon:'none'});
            that.setData({sendCodeDisabled: false});
        }
    });
  },
  withdraw:function(){
      let that = this;
      var amount = that.data.amount
      if(!amount){
          util.showErrorToast('请输入提现金额');
      }
      var code = that.data.code
      if(!code){
          util.showErrorToast('请输入验证码');
      }
      util.request(api.withdrawal,
      {
          amount:amount,
          code:code,
          channel:'Wx'
      },'post').then(function(res){
          if(res.errno == 0){
              wx.showToast({
                  title: '成功',
                  icon: 'succes',
                  duration: 1000,
                  mask:true
              })
              setInterval(function(){
                  wx.navigateTo({
                    url: '../wallet'
                  })
              }, 1000);

          }else if(res.errno==20){
              util.showErrorToast('验证码错误');
          }else if(res.errno==10){
              util.showErrorToast('有历史提现记录仍在处理中');
          }
      })
  }

})

});;define("services/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){

const util = require('../utils/util.js');
const api = require('../config/api.js');


var nextPage = function(url, data, method='GET'){
    return new Promise(function(resolve, reject){
        util.request(url, data, method).then((res)=>{
             resolve(res)
        }).catch((err) => {
        });
    })
}


module.exports = {
  nextPage,
};

});;define("services/pay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
/**
 * 支付相关服务
 */
const util = require('../utils/util.js');
const api = require('../config/api.js');

api.recharge = api.SSL + '/api/user/balance/recharge/'

/**
 * 判断用户是否登录
 */
var charge = function(data){
    var ordernum = data.ordernum
    return new Promise(function (resolve, reject) {
      util.request(api.Payment.replace(/{}/, ordernum),
      {action:'charge',
       channel:data.channel}
      ).then((res) => {
          if(res.errno === 0){
              resolve(res);
          }else {
              reject(res)
          }
      });
    });
}







var recharge = function(data){
    var amount = data.amount
    return new Promise(function (resolve, reject) {
        util.request(api.recharge,{amount:amount, action:'recharge'}).then((res) => {
          resolve(res);
        });
    });
}


var trade_type_maps = {
    'charge'    :   charge,
    'recharge'  :   recharge
}

function payOrder(trade_type, data) {
    return trade_type_maps[trade_type](data)
}


module.exports = {
  payOrder,
};

});;define("services/user.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
const api = require('../config/api.js');
const util = require('../utils/util.js');
const cookie = require('../utils/cookie.js');

/**
 * 樱桃131登录
 */
function login(mobile, password, vcode=''){
    return new Promise(function (resolve, reject) {
        var data = {
            'mobile': mobile,
            'password': password,
            'vcode': vcode,
        };
        util.request((api.SSL + '/api/auth/'), data, 'POST').then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}


function get_reset_vcode(mobile){
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/vcode/password/'+ mobile + '/')).then((res) => {
            resolve(res);
        }).catch((err) => {

        });
    });

}
function reset_password(mobile, code, password){
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/user/password/'+ mobile + '/'),
        {
            'verification_code':code,
            'mobile': mobile,
            'password': password
        },
        'POST'
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 获取手机注册验证码
 * 手机注册步骤：1
 */
function get_register_vcode(mobile){
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/user/' + mobile + '/'), {}, 'POST').then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 验证手机注册验证码
 * 手机注册步骤：2
 */
function register_code_verify(mobile, vcode){
    return new Promise(function(resolve, reject){
        util.request(
            (api.SSL + '/api/vcode/user/'+ mobile + '/'),
            {
                'mobile':mobile,
                'verification_code':vcode
            },
            'POST'
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 手机号，手机验证码注册
 * 手机注册步骤：3
 */
function register_with_vcode(mobile, vcode, password){
    return new Promise(function (resolve, reject) {
        var data = {
            'mobile': mobile,
            'verification_code': vcode,
            'password':password
        };
        util.request((api.SSL + '/api/user/'), data, 'POST').then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

// 重置密码
function code_verify(mobile, vcode){
    return new Promise(function(resolve, reject){
        util.request(
            (api.SSL + '/api/vcode/password/'+ mobile + '/'),
            {
                'mobile':mobile,
                'verification_code':vcode
            },
            'POST'
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 樱桃131获取用户信息
 */
function get_userinfo() {
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/user/'), {}, 'GET', tip=false).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}


/**
 * 樱桃131获取手机验证码
 */
 // TODO:
function send_verify_code(mobile) {
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/vcode/user/'),
            {'mobile': mobile}, 'GET'
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/*
 * 微信登录
 */
function wx_auth(profile_openid){
    util.request(api.WxLogin, {profile_openid: profile_openid}, 'POST').then((res) => {
        if(res['code'] == 0 || res['code'] == '0'){
            __wxConfig__.start_pay(res['data']);

        } else {
            wx.showToast({
                title: res['desc'],
                duration: 1000
            });
        }
    }).catch(err => {
        wx.showToast({
            title: '请求错误',
            duration: 1000
        });
        console.log(err.toString())
    });
}

function wx_unbind(){
    return new Promise(function (resolve, reject) {
        util.request(api.unBindWeixin, {}, 'GET').then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    })
}

/**
 * 获取修改用户手机验证码
 * 修改用户手机步骤:1
 */
function get_vary_mobile_vcode(mobile){
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/user/varymobile/' + mobile + '/'), {}, 'POST').then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 修改用户手机验证
 * 修改用户手机步骤:2
 */
function vary_mobile_code_verify(mobile, vcode){
    return new Promise(function(resolve, reject){
        util.request(
            (api.SSL + '/api/vcode/varymobile/'+ mobile + '/'),
            {
                'mobile':mobile,
                'verification_code':vcode
            },
            'POST'
        ).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 手机号，手机验证码修改用户手机
 * 修改用户手机步骤:3
 */
function vary_mobile_with_vcode(mobile, vcode, password, method='POST'){
    return new Promise(function (resolve, reject) {
        var data = {
            'mobile': mobile,
            'verification_code': vcode,
            'password':password
        };
        util.request((api.SSL + '/api/user/varymobile/'), data, method).then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}

/**
 * 检查微信账号是否关联到樱桃用户，并以 wx_openid 登录
 */
function checkUser() {}

/**
 * 微信判断用户是否登录
 */
function CheckLogin() {}

// 退出登录
function logout(){
    return new Promise(function (resolve, reject) {
        util.request((api.SSL + '/api/auth/logout/'), {}, 'GET').then((res) => {
            resolve(res);
        }).catch((err) => {
        });
    });
}



module.exports = {
    send_verify_code,
    login,
    get_register_vcode,
    register_with_vcode,
    get_userinfo,
    code_verify,
    get_reset_vcode,
    reset_password,
    register_code_verify,
    logout,
    wx_auth,
    wx_unbind,
    get_vary_mobile_vcode,
    vary_mobile_code_verify,
    vary_mobile_with_vcode,
};

});;define("utils/cookie.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
function parse(cookies) {
    if(!cookies) {
        return
    }
    var keys = wx.getStorageSync('_ck_');
    if (keys === '') {
        keys = '{}';
        wx.setStorageSync('_ck_', keys);
    }
    keys = JSON.parse(keys);
    cookies = cookies.split(/\,\s+/g).join(' ');
    var cookies = cookies.split(',');
    cookies.forEach(function(cookie, i) {
        var data = {}, key = '';
        cookie.split(/\s*\;\s*/g).forEach(function(item, i) {
            item = item.split('=');
            if (i === 0) {
                key = item[0];
                keys[key] = '';
                data['value'] = item[1];
            } else {
                var prop = item[0];
                var value = item[1];
                prop = prop.replace(/-/g, '').replace(/^(\S)/g, (prop[0] || '').toLowerCase());
                switch (prop) {
                    case 'maxAge':
                        data['maxAge'] = parseInt(value);
                        break;
                    case 'expires':
                        data['expires'] = new Date(value);
                        break;
                    case 'httpOnly':
                        data['httpOnly'] = true;
                        break;
                    default:
                        data[prop] = value;
                        break;
                }
            }
        });
        wx.setStorageSync('_ck_' + key, JSON.stringify(data));
    });
    wx.setStorageSync('_ck_', JSON.stringify(keys));
}

function toString() {
    var keys = wx.getStorageSync('_ck_');
    if (keys !== '') {
        keys = JSON.parse(keys);
    }
    var data = [];
    for(var key in keys) {
        var item = JSON.parse(wx.getStorageSync('_ck_' + key));
        data.push(key + '=' + item['value']);
    }
    return data.join('; ');
}

function getCookie(key) {
    var key = '_ck_' + key;
    return JSON.parse(wx.getStorageSync(key));
}

function setCookie(key, value) {
    var key = '_ck_' + key;
    var data = {
        'value': value
    }
    wx.setStorageSync(key, JSON.stringify(data));
}

function Cookie() {
    if (arguments.length == 1) {
        return getCookie(arguments[0]);
    } else {
        setCookie(arguments[0], arguments[1]);
    }
}

module.exports = {
    parse,
    Cookie,
    toString,
};

});;define("utils/pingpp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pingpp=e()}}(function(){return function e(n,t,a){function r(l,c){if(!t[l]){if(!n[l]){var o="function"==typeof require&&require;if(!c&&o)return o(l,!0);if(i)return i(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var u=t[l]={exports:{}};n[l][0].call(u.exports,function(e){var t=n[l][1][e];return r(t||e)},u,u.exports,e,n,t,a)}return t[l].exports}for(var i="function"==typeof require&&require,l=0;l<a.length;l++)r(a[l]);return r}({1:[function(e,n,t){var a=e('./payment_elements.js');n.exports={userCallback:void 0,urlReturnCallback:void 0,urlReturnChannels:['alipay_pc_direct'],innerCallback:function(e,n){'function'==typeof this.userCallback&&(void 0===n&&(n=this.error()),this.userCallback(e,n),this.userCallback=void 0,a.clear())},error:function(e,n){return e=void 0===e?'':e,n=void 0===n?'':n,{msg:e,extra:n}},triggerUrlReturnCallback:function(e,n){'function'==typeof this.urlReturnCallback&&this.urlReturnCallback(e,n)},shouldReturnUrlByCallback:function(e){return'function'==typeof this.urlReturnCallback&&-1!==this.urlReturnChannels.indexOf(e)}}},{"./payment_elements.js":26}],2:[function(e,n,t){var a=e('../utils'),r={}.hasOwnProperty;n.exports={ALIPAY_PC_DIRECT_URL:'https://mapi.alipay.com/gateway.do',handleCharge:function(e){var n=e.channel,t=e.credential[n],i=this.ALIPAY_PC_DIRECT_URL;r.call(t,'channel_url')&&(i=t.channel_url),r.call(t,'_input_charset')||r.call(t,'service')&&'create_direct_pay_by_user'===t.service&&(t._input_charset='utf-8');var l=a.stringifyData(t,n,!0);a.redirectTo(i+'?'+l,n)}}},{"../utils":29}],3:[function(e,n,t){var a={}.hasOwnProperty,r=e('../callbacks');n.exports={handleCharge:function(e){var n=e.credential[e.channel];a.call(n,'transaction_no')?this.tradePay(n.transaction_no):r.innerCallback('fail',r.error('invalid_credential','missing_field_transaction_no'))},ready:function(e){window.AlipayJSBridge?e&&e():document.addEventListener('AlipayJSBridgeReady',e,!1)},tradePay:function(e){this.ready(function(){AlipayJSBridge.call('tradePay',{tradeNO:e},function(e){'9000'==e.resultCode?r.innerCallback('success'):'6001'==e.resultCode?r.innerCallback('cancel',r.error(e.result)):r.innerCallback('fail',r.error(e.result))})})}}},{"../callbacks":1}],4:[function(e,n,t){var a=e('../utils'),r=e('../mods'),i={}.hasOwnProperty;n.exports={ALIPAY_WAP_URL_OLD:'https://wappaygw.alipay.com/service/rest.htm',ALIPAY_WAP_URL:'https://mapi.alipay.com/gateway.do',handleCharge:function(e){var n=e.channel,t=e.credential[n],l=this.ALIPAY_WAP_URL;i.call(t,'req_data')?l=this.ALIPAY_WAP_URL_OLD:i.call(t,'channel_url')&&(l=t.channel_url),i.call(t,'_input_charset')||(i.call(t,'service')&&'alipay.wap.create.direct.pay.by.user'===t.service||i.call(t,'req_data'))&&(t._input_charset='utf-8');var c=l+'?'+a.stringifyData(t,n,!0),o=r.getExtraModule('ap');a.inWeixin()&&void 0!==o?o.pay(c):a.redirectTo(c,n)}}},{"../mods":25,"../utils":29}],5:[function(e,n,t){var a=e('../utils'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){var n=e.channel,t=e.credential[n];i.call(t,'url')?a.redirectTo(t.url+'?'+a.stringifyData(t,n),n):r.innerCallback('fail',r.error('invalid_credential','missing_field:url'))}}},{"../callbacks":1,"../utils":29}],6:[function(e,n,t){var a=e('../utils'),r={}.hasOwnProperty;n.exports={CMB_WALLET_URL:'https://netpay.cmbchina.com/netpayment/BaseHttp.dll?MB_EUserPay',handleCharge:function(e){var n=e.credential[e.channel],t=this.CMB_WALLET_URL;r.call(n,'ChannelUrl')&&(t=n.ChannelUrl,delete n.ChannelUrl),r.call(n,'channelVersion')&&delete n.channelVersion,a.formSubmit(t,'post',n)}}},{"../utils":29}],7:[function(e,n,t){var a=e('../../utils'),r=e('../../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){var n,t=e.credential[e.channel];if('string'==typeof t)n=t;else{if(!i.call(t,'url'))return void r.innerCallback('fail',r.error('invalid_credential','credential format is incorrect'));n=t.url}a.redirectTo(n,e.channel)}}},{"../../callbacks":1,"../../utils":29}],8:[function(e,n,t){var a=e('../utils');n.exports={CP_B2B_URL:'https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0',handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.CP_B2B_URL,'post',n)}}},{"../utils":29}],9:[function(e,n,t){var a=e('../../stash'),r={}.hasOwnProperty;!function(){var e={},t={};t.PADCHAR='=',t.ALPHA='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',t.makeDOMException=function(){try{return new DOMException(DOMException.INVALID_CHARACTER_ERR)}catch(n){var e=new Error('DOM Exception 5');return e.code=e.number=5,e.name=e.description='INVALID_CHARACTER_ERR',e.toString=function(){return'Error: '+e.name+': '+e.message},e}},t.getbyte64=function(e,n){var a=t.ALPHA.indexOf(e.charAt(n));if(-1===a)throw t.makeDOMException();return a},t.decode=function(e){e=''+e;var n,a,r,i=t.getbyte64,l=e.length;if(0===l)return e;if(l%4!=0)throw t.makeDOMException();n=0,e.charAt(l-1)===t.PADCHAR&&(n=1,e.charAt(l-2)===t.PADCHAR&&(n=2),l-=4);var c=[];for(a=0;a<l;a+=4)r=i(e,a)<<18|i(e,a+1)<<12|i(e,a+2)<<6|i(e,a+3),c.push(String.fromCharCode(r>>16,r>>8&255,255&r));switch(n){case 1:r=i(e,a)<<18|i(e,a+1)<<12|i(e,a+2)<<6,c.push(String.fromCharCode(r>>16,r>>8&255));break;case 2:r=i(e,a)<<18|i(e,a+1)<<12,c.push(String.fromCharCode(r>>16))}return c.join('')},t.getbyte=function(e,n){var a=e.charCodeAt(n);if(a>255)throw t.makeDOMException();return a},t.encode=function(e){if(1!==arguments.length)throw new SyntaxError('Not enough arguments');var n,a,r=t.PADCHAR,i=t.ALPHA,l=t.getbyte,c=[],o=(e=''+e).length-e.length%3;if(0===e.length)return e;for(n=0;n<o;n+=3)a=l(e,n)<<16|l(e,n+1)<<8|l(e,n+2),c.push(i.charAt(a>>18)),c.push(i.charAt(a>>12&63)),c.push(i.charAt(a>>6&63)),c.push(i.charAt(63&a));switch(e.length-o){case 1:a=l(e,n)<<16,c.push(i.charAt(a>>18)+i.charAt(a>>12&63)+r+r);break;case 2:a=l(e,n)<<16|l(e,n+1)<<8,c.push(i.charAt(a>>18)+i.charAt(a>>12&63)+i.charAt(a>>6&63)+r)}return c.join('')},e.url='pay.htm',e.pay=function(n){var i=encodeURIComponent(t.encode(n));r.call(a,'APURL')&&(e.url=a.APURL),location.href=e.url+'?goto='+i},e.decode=function(e){return t.decode(decodeURIComponent(e))},n.exports=e}()},{"../../stash":27}],10:[function(e,n,t){var a=e('./commons/redirect_base');n.exports={handleCharge:function(e){a.handleCharge(e)}}},{"./commons/redirect_base":7}],11:[function(e,n,t){arguments[4][10][0].apply(t,arguments)},{"./commons/redirect_base":7,dup:10}],12:[function(e,n,t){var a=e('./commons/redirect_base'),r=e('../callbacks'),i=e('../utils'),l={}.hasOwnProperty;n.exports={handleCharge:function(e){var n=e.extra;if(l.call(n,'pay_channel')){var t=n.pay_channel;'wx'!==t||i.inWeixin()?'alipay'!==t||i.inAlipay()?a.handleCharge(e):r.innerCallback('fail',r.error('Not in the Alipay browser')):r.innerCallback('fail',r.error('Not in the WeChat browser'))}else r.innerCallback('fail',r.error('invalid_charge','charge 格式不正确'))}}},{"../callbacks":1,"../utils":29,"./commons/redirect_base":7}],13:[function(e,n,t){var a=e('../utils'),r={}.hasOwnProperty;n.exports={JDPAY_WAP_URL_OLD:'https://m.jdpay.com/wepay/web/pay',JDPAY_H5_URL:'https://h5pay.jd.com/jdpay/saveOrder',JDPAY_PC_URL:'https://wepay.jd.com/jdpay/saveOrder',handleCharge:function(e){var n=e.credential[e.channel],t=this.JDPAY_H5_URL;r.call(n,'channelUrl')?(t=n.channelUrl,delete n.channelUrl):r.call(n,'merchantRemark')&&(t=this.JDPAY_WAP_URL_OLD),a.formSubmit(t,'post',n)}}},{"../utils":29}],14:[function(e,n,t){var a=e('../callbacks'),r=e('../utils'),i=e('../stash'),l={}.hasOwnProperty;n.exports={SRC_URL:'https://open.mobile.qq.com/sdk/qqapi.js?_bid=152',ID:'mqq_api',handleCharge:function(e){var n=e.credential[e.channel];l.call(n,'token_id')?(i.tokenId=n.token_id,r.loadUrlJs(this.ID,this.SRC_URL,this.callpay)):a.innerCallback('fail',a.error('invalid_credential','missing_token_id'))},callpay:function(){if('undefined'!=typeof mqq){if(0==mqq.QQVersion)return a.innerCallback('fail',a.error('Not in the QQ client')),void delete i.tokenId;mqq.tenpay.pay({tokenId:i.tokenId},function(e){0==e.resultCode?a.innerCallback('success'):a.innerCallback('fail',a.error(e.retmsg))})}else a.innerCallback('fail',a.error('network_err'));delete i.tokenId}}},{"../callbacks":1,"../stash":27,"../utils":29}],15:[function(e,n,t){var a=e('../utils');n.exports={UPACP_PC_URL:'https://gateway.95516.com/gateway/api/frontTransReq.do',handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.UPACP_PC_URL,'post',n)}}},{"../utils":29}],16:[function(e,n,t){var a=e('../utils');n.exports={UPACP_WAP_URL:'https://gateway.95516.com/gateway/api/frontTransReq.do',handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.UPACP_WAP_URL,'post',n)}}},{"../utils":29}],17:[function(e,n,t){var a=e('../stash'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){for(var n=e.credential[e.channel],t=['appId','timeStamp','nonceStr','package','signType','paySign'],l=0;l<t.length;l++)if(!i.call(n,t[l]))return void r.innerCallback('fail',r.error('invalid_credential','missing_field_'+t[l]));a.jsApiParameters=n,this.callpay()},wxLiteEnabled:function(){return'undefined'!=typeof wx&&wx.requestPayment},callpay:function(){if(this.wxLiteEnabled()){var e=a.jsApiParameters;delete e.appId,e.complete=function(e){'requestPayment:ok'===e.errMsg&&r.innerCallback('success'),'requestPayment:cancel'===e.errMsg&&r.innerCallback('cancel',r.error('用户取消支付')),'undefined'!==e.err_code&&'undefined'!==e.err_desc&&r.innerCallback('fail',r.error(e.err_desc,e))},wx.requestPayment(e)}else ('请在微信小程序中打开')},runTestMode:function(e){wx.showModal({title:'提示',content:'因 "微信小程序" 限制 域名的原因 暂不支持 模拟付款 请使用 livekey 获取 charge 进行支付'})}}},{"../callbacks":1,"../stash":27}],18:[function(e,n,t){var a=e('../callbacks'),r=e('../utils'),i=e('../stash'),l=e('../mods'),c={}.hasOwnProperty;n.exports={PINGPP_NOTIFY_URL_BASE:'https://notify.pingxx.com/notify',handleCharge:function(e){for(var n=e.credential[e.channel],t=['appId','timeStamp','nonceStr','package','signType','paySign'],r=0;r<t.length;r++)if(!c.call(n,t[r]))return void a.innerCallback('fail',a.error('invalid_credential','missing_field_'+t[r]));i.jsApiParameters=n,this.callpay()},callpay:function(){var e=this,n=l.getExtraModule('wx_jssdk');if(void 0!==n&&n.jssdkEnabled())n.callpay();else if('undefined'==typeof ServiceJSBridge){var t=function(){e.jsApiCall()};document.addEventListener?document.addEventListener('WeixinJSBridgeReady',t,!1):document.attachEvent&&(document.attachEvent('WeixinJSBridgeReady',t),document.attachEvent('onWeixinJSBridgeReady',t))}else this.jsApiCall()},jsApiCall:function(){c.call(i,'jsApiParameters')&&ServiceJSBridge.invoke('getBrandWCPayRequest',i.jsApiParameters,function(e){delete i.jsApiParameters,'get_brand_wcpay_request:ok'==e.err_msg?a.innerCallback('success'):'get_brand_wcpay_request:cancel'==e.err_msg?a.innerCallback('cancel'):a.innerCallback('fail',a.error('wx_result_fail',e.err_msg))})},runTestMode:function(e){if(confirm('模拟付款？')){var n='/charges/'+e.id;r.request(this.PINGPP_NOTIFY_URL_BASE+n+'?livemode=false','GET',null,function(e,n){if(n>=200&&n<400&&'success'==e)a.innerCallback('success');else{var t='http_code:'+n+';response:'+e;a.innerCallback('fail',a.error('testmode_notify_fail',t))}},function(){a.innerCallback('fail',a.error('network_err'))})}}}},{"../callbacks":1,"../mods":25,"../stash":27,"../utils":29}],19:[function(e,n,t){var a=e('../utils'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={handleCharge:function(e){var n=e.credential[e.channel];'string'==typeof n?a.redirectTo(n,e.channel):'object'==typeof n&&i.call(n,'url')?a.redirectTo(n.url,e.channel):r.innerCallback('fail',r.error('invalid_credential','credential 格式不正确'))}}},{"../callbacks":1,"../utils":29}],20:[function(e,n,t){var a=e('../utils'),r=e('../callbacks'),i={}.hasOwnProperty;n.exports={YEEPAY_WAP_URL:'https://ok.yeepay.com/paymobile/api/pay/request',YEEPAY_WAP_TEST_URL:'http://mobiletest.yeepay.com/paymobile/api/pay/request',handleCharge:function(e){for(var n=e.channel,t=e.credential[n],l=['merchantaccount','encryptkey','data'],c=0;c<l.length;c++)if(!i.call(t,l[c]))return void r.innerCallback('fail',r.error('invalid_credential','missing_field_'+l[c]));var o;o=i.call(t,'mode')&&'test'==t.mode?this.YEEPAY_WAP_TEST_URL:this.YEEPAY_WAP_URL,a.redirectTo(o+'?'+a.stringifyData(t,n,!0),e.channel)}}},{"../callbacks":1,"../utils":29}],21:[function(e,n,t){var a=e('./utils'),r=e('./stash'),i=e('./libs/md5'),l={seperator:'###',limit:1,report_url:'https://statistics.pingxx.com/one_stats',timeout:100},c=function(e,n){var t=new RegExp('(^|&)'+n+'=([^&]*)(&|$)','i'),a=e.substr(0).match(t);return null!==a?unescape(a[2]):null},o=function(){return navigator.userAgent},s=function(){return window.location.host};l.store=function(e){if('undefined'!=typeof localStorage&&null!==localStorage){var n=this,t={};t.app_id=e.app_id||r.app_id||'app_not_defined',t.ch_id=e.ch_id||'',t.channel=e.channel||'',t.type=e.type||'',t.user_agent=o(),t.host=s(),t.time=(new Date).getTime(),t.puid=r.puid;var a='app_id='+t.app_id+'&channel='+t.channel+'&ch_id='+t.ch_id+'&host='+t.host+'&time='+t.time+'&type='+t.type+'&user_agent='+t.user_agent+'&puid='+t.puid,i=a;null!==localStorage.getItem('PPP_ONE_STATS')&&0!==localStorage.getItem('PPP_ONE_STATS').length&&(i=localStorage.getItem('PPP_ONE_STATS')+n.seperator+a);try{localStorage.setItem('PPP_ONE_STATS',i)}catch(e){}}},l.send=function(){if('undefined'!=typeof localStorage&&null!==localStorage){var e=this,n=localStorage.getItem('PPP_ONE_STATS');if(!(null===n||n.split(e.seperator).length<e.limit))try{for(var t=[],r=n.split(e.seperator),l=i(r.join('&')),o=0;o<r.length;o++)t.push({app_id:c(r[o],'app_id'),channel:c(r[o],'channel'),ch_id:c(r[o],'ch_id'),host:c(r[o],'host'),time:c(r[o],'time'),type:c(r[o],'type'),user_agent:c(r[o],'user_agent'),puid:c(r[o],'puid')});a.request(e.report_url,'POST',t,function(e,n){200==n&&localStorage.removeItem('PPP_ONE_STATS')},void 0,{'X-Pingpp-Report-Token':l})}catch(e){}}},l.report=function(e){var n=this;n.store(e),setTimeout(function(){n.send()},n.timeout)},n.exports=l},{"./libs/md5":23,"./stash":27,"./utils":29}],22:[function(e,n,t){var a=e('./stash'),r=e('./utils'),i=e('./collection');n.exports={SRC_URL:'https://cookie.pingxx.com',init:function(){var e=this;r.documentReady(function(){try{e.initPuid()}catch(e){}})},initPuid:function(){if('undefined'!=typeof window&&'undefined'!=typeof localStorage&&null!==localStorage){var e=localStorage.getItem('pingpp_uid');if(null===e){e=r.randomString();try{localStorage.setItem('pingpp_uid',e)}catch(e){}}if(a.puid=e,!document.getElementById('p_analyse_iframe')){var n;try{n=document.createElement('iframe')}catch(e){n=document.createElement('<iframe name="ifr"></iframe>')}n.id='p_analyse_iframe',n.src=this.SRC_URL+'/?puid='+e,n.style.display='none',document.body.appendChild(n)}setTimeout(function(){i.send()},0)}}}},{"./collection":21,"./stash":27,"./utils":29}],23:[function(e,n,t){!function(){function e(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function t(e,n){return e<<n|e>>>32-n}function a(n,a,r,i,l,c){return e(t(e(e(a,n),e(i,c)),l),r)}function r(e,n,t,r,i,l,c){return a(n&t|~n&r,e,n,i,l,c)}function i(e,n,t,r,i,l,c){return a(n&r|t&~r,e,n,i,l,c)}function l(e,n,t,r,i,l,c){return a(n^t^r,e,n,i,l,c)}function c(e,n,t,r,i,l,c){return a(t^(n|~r),e,n,i,l,c)}function o(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var a,o,s,u,d,p=1732584193,f=-271733879,h=-1732584194,_=271733878;for(a=0;a<n.length;a+=16)o=p,s=f,u=h,d=_,f=c(f=c(f=c(f=c(f=l(f=l(f=l(f=l(f=i(f=i(f=i(f=i(f=r(f=r(f=r(f=r(f,h=r(h,_=r(_,p=r(p,f,h,_,n[a],7,-680876936),f,h,n[a+1],12,-389564586),p,f,n[a+2],17,606105819),_,p,n[a+3],22,-1044525330),h=r(h,_=r(_,p=r(p,f,h,_,n[a+4],7,-176418897),f,h,n[a+5],12,1200080426),p,f,n[a+6],17,-1473231341),_,p,n[a+7],22,-45705983),h=r(h,_=r(_,p=r(p,f,h,_,n[a+8],7,1770035416),f,h,n[a+9],12,-1958414417),p,f,n[a+10],17,-42063),_,p,n[a+11],22,-1990404162),h=r(h,_=r(_,p=r(p,f,h,_,n[a+12],7,1804603682),f,h,n[a+13],12,-40341101),p,f,n[a+14],17,-1502002290),_,p,n[a+15],22,1236535329),h=i(h,_=i(_,p=i(p,f,h,_,n[a+1],5,-165796510),f,h,n[a+6],9,-1069501632),p,f,n[a+11],14,643717713),_,p,n[a],20,-373897302),h=i(h,_=i(_,p=i(p,f,h,_,n[a+5],5,-701558691),f,h,n[a+10],9,38016083),p,f,n[a+15],14,-660478335),_,p,n[a+4],20,-405537848),h=i(h,_=i(_,p=i(p,f,h,_,n[a+9],5,568446438),f,h,n[a+14],9,-1019803690),p,f,n[a+3],14,-187363961),_,p,n[a+8],20,1163531501),h=i(h,_=i(_,p=i(p,f,h,_,n[a+13],5,-1444681467),f,h,n[a+2],9,-51403784),p,f,n[a+7],14,1735328473),_,p,n[a+12],20,-1926607734),h=l(h,_=l(_,p=l(p,f,h,_,n[a+5],4,-378558),f,h,n[a+8],11,-2022574463),p,f,n[a+11],16,1839030562),_,p,n[a+14],23,-35309556),h=l(h,_=l(_,p=l(p,f,h,_,n[a+1],4,-1530992060),f,h,n[a+4],11,1272893353),p,f,n[a+7],16,-155497632),_,p,n[a+10],23,-1094730640),h=l(h,_=l(_,p=l(p,f,h,_,n[a+13],4,681279174),f,h,n[a],11,-358537222),p,f,n[a+3],16,-722521979),_,p,n[a+6],23,76029189),h=l(h,_=l(_,p=l(p,f,h,_,n[a+9],4,-640364487),f,h,n[a+12],11,-421815835),p,f,n[a+15],16,530742520),_,p,n[a+2],23,-995338651),h=c(h,_=c(_,p=c(p,f,h,_,n[a],6,-198630844),f,h,n[a+7],10,1126891415),p,f,n[a+14],15,-1416354905),_,p,n[a+5],21,-57434055),h=c(h,_=c(_,p=c(p,f,h,_,n[a+12],6,1700485571),f,h,n[a+3],10,-1894986606),p,f,n[a+10],15,-1051523),_,p,n[a+1],21,-2054922799),h=c(h,_=c(_,p=c(p,f,h,_,n[a+8],6,1873313359),f,h,n[a+15],10,-30611744),p,f,n[a+6],15,-1560198380),_,p,n[a+13],21,1309151649),h=c(h,_=c(_,p=c(p,f,h,_,n[a+4],6,-145523070),f,h,n[a+11],10,-1120210379),p,f,n[a+2],15,718787259),_,p,n[a+9],21,-343485551),p=e(p,o),f=e(f,s),h=e(h,u),_=e(_,d);return[p,f,h,_]}function s(e){var n,t='';for(n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function u(e){var n,t=[];for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function d(e){return s(o(u(e),8*e.length))}function p(e,n){var t,a,r=u(e),i=[],l=[];for(i[15]=l[15]=void 0,r.length>16&&(r=o(r,8*e.length)),t=0;t<16;t+=1)i[t]=909522486^r[t],l[t]=1549556828^r[t];return a=o(i.concat(u(n)),512+8*n.length),s(o(l.concat(a),640))}function f(e){var n,t,a='';for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),a+="0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n);return a}function h(e){return unescape(encodeURIComponent(e))}function _(e){return d(h(e))}function y(e){return f(_(e))}function m(e,n){return p(h(e),h(n))}function g(e,n){return f(m(e,n))}n.exports=function(e,n,t){return n?t?m(n,e):g(n,e):t?_(e):y(e)}}()},{}],24:[function(e,n,t){var a=e('./version').v,r={}.hasOwnProperty,PingppSDK=function(){e('./init').init()};PingppSDK.prototype.version=a,n.exports=new PingppSDK;var i=e('./testmode'),l=e('./callbacks'),c=e('./mods'),o=e('./stash'),s=e('./collection'),u=e('./payment_elements');PingppSDK.prototype.createPayment=function(e,n,t,a){if('function'==typeof n&&(l.userCallback=n),u.init(e),r.call(u,'id'))if(r.call(u,'channel')){r.call(u,'app')&&('string'==typeof u.app?o.app_id=u.app:'object'==typeof u.app&&'string'==typeof u.app.id&&(o.app_id=u.app.id)),s.report({type:o.type||'pure_sdk_click',channel:u.channel,ch_id:u.id});var d=u.channel;if(r.call(u,'credential'))if(u.credential)if(r.call(u.credential,d))if(r.call(u,'livemode')){var p=c.getChannelModule(d);if(void 0===p)return console.error('channel module "'+d+'" is undefined'),void l.innerCallback('fail',l.error('invalid_channel','channel module "'+d+'" is undefined'));!1!==u.livemode?(void 0!==t&&(o.signature=t),'boolean'==typeof a&&(o.debug=a),p.handleCharge(u)):r.call(p,'runTestMode')?p.runTestMode(u):i.runTestMode(u)}else l.innerCallback('fail',l.error('invalid_charge','no_livemode_field'));else l.innerCallback('fail',l.error('invalid_credential','credential_is_incorrect'));else l.innerCallback('fail',l.error('invalid_credential','credential_is_undefined'));else l.innerCallback('fail',l.error('invalid_charge','no_credential'))}else l.innerCallback('fail',l.error('invalid_charge','no_channel'));else l.innerCallback('fail',l.error('invalid_charge','no_charge_id'))},PingppSDK.prototype.setAPURL=function(e){o.APURL=e},PingppSDK.prototype.setUrlReturnCallback=function(e,n){if('function'!=typeof e)throw'callback need to be a function';if(l.urlReturnCallback=e,void 0!==n){if(!Array.isArray(n))throw'channels need to be an array';l.urlReturnChannels=n}}},{"./callbacks":1,"./collection":21,"./init":22,"./mods":25,"./payment_elements":26,"./stash":27,"./testmode":28,"./version":30}],25:[function(e,n,t){var a={}.hasOwnProperty,r={};n.exports=r,r.channels={alipay_pc_direct:e('./channels/alipay_pc_direct'),alipay_qr:e('./channels/alipay_qr'),alipay_wap:e('./channels/alipay_wap'),bfb_wap:e('./channels/bfb_wap'),cmb_wallet:e('./channels/cmb_wallet'),cp_b2b:e('./channels/cp_b2b'),fqlpay_qr:e('./channels/fqlpay_qr'),fqlpay_wap:e('./channels/fqlpay_wap'),isv_wap:e('./channels/isv_wap'),jdpay_wap:e('./channels/jdpay_wap'),qpay_pub:e('./channels/qpay_pub'),upacp_pc:e('./channels/upacp_pc'),upacp_wap:e('./channels/upacp_wap'),wx_lite:e('./channels/wx_lite'),wx_pub:e('./channels/wx_pub'),wx_wap:e('./channels/wx_wap'),yeepay_wap:e('./channels/yeepay_wap')},r.extras={ap:e('./channels/extras/ap')},r.getChannelModule=function(e){if(a.call(r.channels,e))return r.channels[e]},r.getExtraModule=function(e){if(a.call(r.extras,e))return r.extras[e]}},{"./channels/alipay_pc_direct":2,"./channels/alipay_qr":3,"./channels/alipay_wap":4,"./channels/bfb_wap":5,"./channels/cmb_wallet":6,"./channels/cp_b2b":8,"./channels/extras/ap":9,"./channels/fqlpay_qr":10,"./channels/fqlpay_wap":11,"./channels/isv_wap":12,"./channels/jdpay_wap":13,"./channels/qpay_pub":14,"./channels/upacp_pc":15,"./channels/upacp_wap":16,"./channels/wx_lite":17,"./channels/wx_pub":18,"./channels/wx_wap":19,"./channels/yeepay_wap":20}],26:[function(e,n,t){var a=e('./callbacks'),r={}.hasOwnProperty;n.exports={id:null,or_id:null,channel:null,app:null,credential:{},extra:null,livemode:null,order_no:null,time_expire:null,init:function(e){var n;if('string'==typeof e)try{n=JSON.parse(e)}catch(e){return void a.innerCallback('fail',a.error('json_decode_fail',e))}else n=e;{if(void 0!==n){if(r.call(n,'object')&&'order'==n.object){n.or_id=n.id,n.order_no=n.merchant_order_no;var t=n.charge_essentials;if(n.channel=t.channel,n.credential=t.credential,n.extra=t.extra,r.call(n,'charge')&&null!=n.charge)n.id=n.charge;else if(r.call(t,'id')&&null!=t.id)n.id=t.id;else if(r.call(n,'charges'))for(var i=0;i<n.charges.data.length;i++)if(n.charges.data[i].channel===t.channel){n.id=n.charges.data[i].id;break}}else r.call(n,'object')&&'recharge'==n.object&&(n=n.charge);for(var l in this)r.call(n,l)&&(this[l]=n[l]);return this}a.innerCallback('fail',a.error('json_decode_fail'))}},clear:function(){for(var e in this)'function'!=typeof this[e]&&(this[e]=null)}}},{"./callbacks":1}],27:[function(e,n,t){n.exports={}},{}],28:[function(e,n,t){var a=e('./utils'),r={}.hasOwnProperty;n.exports={PINGPP_MOCK_URL:'http://sissi.pingxx.com/mock.php',runTestMode:function(e){var n={ch_id:e.id,scheme:'http',channel:e.channel};r.call(e,'order_no')?n.order_no=e.order_no:r.call(e,'orderNo')&&(n.order_no=e.orderNo),r.call(e,'time_expire')?n.time_expire=e.time_expire:r.call(e,'timeExpire')&&(n.time_expire=e.timeExpire),r.call(e,'extra')&&(n.extra=encodeURIComponent(JSON.stringify(e.extra))),a.redirectTo(this.PINGPP_MOCK_URL+'?'+a.stringifyData(n),e.channel)}}},{"./utils":29}],29:[function(e,n,t){var a=e('./callbacks'),r={}.hasOwnProperty,i=n.exports={stringifyData:function(e,n,t){void 0===t&&(t=!1);var a=[];for(var i in e)r.call(e,i)&&'function'!=typeof e[i]&&('bfb_wap'==n&&'url'==i||'yeepay_wap'==n&&'mode'==i||'channel_url'!=i&&a.push(i+'='+(t?encodeURIComponent(e[i]):e[i])));return a.join('&')},request:function(e,n,t,a,l,c){if('undefined'!=typeof XMLHttpRequest){var o=new XMLHttpRequest;if(void 0!==o.timeout&&(o.timeout=6e3),'GET'===(n=n.toUpperCase())&&'object'==typeof t&&t&&(e+='?'+i.stringifyData(t,'',!0)),o.open(n,e,!0),void 0!==c)for(var s in c)r.call(c,s)&&o.setRequestHeader(s,c[s]);'POST'===n?(o.setRequestHeader('Content-type','application/json; charset=utf-8'),o.send(JSON.stringify(t))):o.send(),void 0===a&&(a=function(){}),void 0===l&&(l=function(){}),o.onreadystatechange=function(){4==o.readyState&&a(o.responseText,o.status,o)},o.onerror=function(e){l(o,0,e)}}else ('Function XMLHttpRequest is undefined.')},formSubmit:function(e,n,t){if('undefined'!=typeof window){var a=document.createElement('form');a.setAttribute('method',n),a.setAttribute('action',e);for(var i in t)if(r.call(t,i)){var l=document.createElement('input');l.setAttribute('type','hidden'),l.setAttribute('name',i),l.setAttribute('value',t[i]),a.appendChild(l)}document.body.appendChild(a),a.submit()}else ('Not a browser, form submit url: '+e)},randomString:function(e){void 0===e&&(e=32);for(var n='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',t=n.length,a='',r=0;r<e;r++)a+=n.charAt(Math.floor(Math.random()*t));return a},redirectTo:function(e,n){a.shouldReturnUrlByCallback(n)?a.triggerUrlReturnCallback(null,e):'undefined'!=typeof window?window.location.href=e:('Not a browser, redirect url: '+e)},inWeixin:function(){return'undefined'!=typeof navigator&&-1!==navigator.userAgent.toLowerCase().indexOf('micromessenger')},inAlipay:function(){return'undefined'!=typeof navigator&&-1!==navigator.userAgent.toLowerCase().indexOf('alipayclient')},documentReady:function(e){'undefined'!=typeof document?'loading'!=document.readyState?e():document.addEventListener('DOMContentLoaded',e):e()},loadUrlJs:function(e,n,t){var a=document.getElementsByTagName('head')[0],r=null;null==document.getElementById(e)?((r=document.createElement('script')).setAttribute('type','text/javascript'),r.setAttribute('src',n),r.setAttribute('id',e),r.async=!0,null!=t&&(r.onload=r.onreadystatechange=function(){if(r.ready)return!1;r.readyState&&'loaded'!=r.readyState&&'complete'!=r.readyState||(r.ready=!0,t())}),a.appendChild(r)):null!=t&&t()}}},{"./callbacks":1}],30:[function(e,n,t){n.exports={v:'2.2.1'}},{}]},{},[24])(24)});
//# sourceMappingURL=pingpp.js.map

});;define("utils/promisify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
module.exports = api => {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
        });
    };
};

});;define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
const api = require('../config/api.js');
const cookie = require('cookie.js');
const promisify = require('promisify.js');

/**
 * request with cookie
 */
function request(url, data={}, method="GET", tip=true) {
    return new Promise(function (resolve, reject) {
        var headers = {'Content-Type': 'application/json'};
        var host;
        if(!__wxConfig__) {
            host = api.SSL;
            header['Cookie'] = cookie.toString();
        } else {
            host = api.SSL;
        }

        if(!url.startsWith('http') && !url.startsWith('https')) {
            url = host + url;
        }
        // console.log(url)
        wx.request({
            url: url,
            data: data,
            method: method,
            header: headers,
            success: function(res) {
                if(!__wxConfig__){
                    cookie.parse(res.header['Set-Cookie']);
                }
                if (res.statusCode == 200) {
                    resolve(res.data);
                } else if(tip && res.statusCode == 403) {
                    if(!__wxConfig__) {
                        // TODO:
                        wx_login().catch((err) => {});
                    } else {
                        wx.showToast({
                            'title': '需要登录后操作',
                            'duration': 1000,
                            'success': function(){
                                setTimeout(function(){
                                    wx.switchTab({
                                        url: '/pages/ucenter/index/index',
                                    });
                                }, 1000);
                            }
                        });
                    }
                } else if(tip && res.statusCode == 429) {
                    wx.showToast({
                        'title': '该操作太频繁',
                        'duration': 1000,
                    });
                } else {
                    reject(res.errMsg);
                }
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
}

/*
 * 樱桃131微信端授权验证
 */
function wx_auth() {
    return new Promise(function (resolve, reject) {
        var cookies = cookie.toString();
        wxLogin().then(res => {
            if( !res.code ) {
                reject(false);
            }
            var data = {'wx_code':res.code};
            request(api.SSL + '/api/login/',
                data, 'POST'
            ).then((res) => {
                if(res.code === 0) {
                    wx.setStorageSync('mobile', res.data);
                    resolve(res);
                } else if (res.code === 1101) {
                    resolve(res);
                } else {
                    ('Uncatch Error', err);
                    reject(false);
                }
            }).catch((err) => {
                reject(false);
            });
        });
    });
}

/*
 * 樱桃131微信端登录
 */
function wx_login(loginOnly=false) {
    return new Promise(function (resolve, reject) {
        wx_auth().then((res) => {
            let code = res['code'];
            if (code === 0) {
                resolve(res);
            } else if (code === 1101) {
                if (loginOnly !== true) {
                    wx.navigateTo({url: '/pages/auth/register/register'});
                }
                reject(false);
            } else {
                reject(false);
            }
        }).catch(err => {
            reject(false);
        });
    });
}

/**
 * 微信判断session_key是否失效
 */
var wxCheckSession = promisify(wx.checkSession)


/**
 * 微信 wx.login
 */
var wxLogin = promisify(wx.login)


function formatTime(date) {
    function _formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    return [year, month, day].map(_formatNumber).join('-') + ' ' + [hour, minute, second].map(_formatNumber).join(':')
}


function showErrorToast(msg) {
    wx.showToast({
        title: msg,
        image: '/static/images/icon_error.png'
    })
}


module.exports = {
    wx_auth,
    wx_login,
    wxCheckSession,
    wxLogin,
    request,
    formatTime,
    showErrorToast,
}

});;define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,WeixinJSCore,ServiceJSBridge,Reporter){
var util = require('./utils/util.js');
var user = require('./services/user.js');
var api = require('./config/api.js');


App({

    global: {
        user: {},
        timer: {},
        indexData: {},
    },

    onLaunch: function(options) {
        var that = this
        user.get_userinfo().then(res => {
            console.log(res, 123);
            if (res.avatar && !res.avatar.startsWith('http://')) {
                res.avatar = api.Host + res.avatar
            }
            if (res.code != 1000){
                that.global.user = {}
                that.global.user.phonenumber = res.mobile
                that.global.user.nickname = res.nickname
                that.global.user.avatar = res.avatar
                that.global.user.wx = res.weixin
                that.global.user.prev_gen1 = res.profile[0]['prev_gen1']
                that.global.user.profile_openid = res.profile[0]['openid']
                that.global.user.experience_pack = (
                    res.profile.length==0 ? 1 :
                        res.profile[0]['level'])
            }
        });
    },

    convertHtmlToText: function(inputText) {
        var returnText = "" + inputText;
        returnText = returnText.replace(/<\/div>/ig, '');
        returnText = returnText.replace(/<\/li>/ig, '');
        returnText = returnText.replace(/<li>/ig, '  *  ');
        returnText = returnText.replace(/<\/ul>/ig, '\r\n');
        //-- remove BR tags and replace them with line break
        returnText = returnText.replace(/<br\s*[\/]?>/gi, "\r\n");

        //-- remove P and A tags but preserve what's inside of them
        returnText=returnText.replace(/<p.*?>/gi, "");
        returnText=returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");

        //-- remove all inside SCRIPT and STYLE tags
        returnText=returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
        returnText=returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
        //-- remove all else
        returnText=returnText.replace(/<(?:.|\s)*?>/g, "");

        //-- get rid of more than 2 multiple line breaks:
        returnText=returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\r\n");

        //-- get rid of more than 2 spaces:
        returnText = returnText.replace(/ +(?= )/g,'');

        //-- get rid of html-encoded characters:
        returnText=returnText.replace(/ /gi," ");
        returnText=returnText.replace(/&/gi,"&");
        returnText=returnText.replace(/"/gi,'"');
        returnText=returnText.replace(/</gi,'<');
        returnText=returnText.replace(/>/gi,'>');

       return returnText;
    }


});

});require("app.js")