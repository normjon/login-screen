/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _AuthSimple = __webpack_require__(6);
	
	var _config = __webpack_require__(14);
	
	var pImg = __webpack_require__(15);
	var overlayHeight = 390;
	var env_location = env;
	
	(0, _AuthSimple.setLoginOptions)(_config.loginOptions[env_location]);
	
	$(window, document, undefined).ready(function () {
	  (function () {
	    var pearsonImage = new Image();
	    pearsonImage.src = pImg;
	    overlayHeight = $('#login-form').height() + 128;
	    $('#img-header').append(pearsonImage);
	    $('#reset-password-link').attr("href", _config.loginOptions[env_location].resetPasswordLink);
	    var fail = $_GET('fail');
	    if (fail == 'true') {
	      $("#flagfail").html("Failed Login");
	    } else {
	      $("#flagfail").html("");
	    }
	  })();
	
	  $('#login-button').click(function () {
	    console.log('login-button');
	    var loginUrl = window.location.href;
	    var originalUrl = $_GET('goto') ? $_GET('goto') : '/';
	    var data = {};
	    data.username = $('#login-user').val();
	    data.password = $('#login-password').val();
	    (0, _AuthSimple.doLogin)(data, function (err, res) {
	      console.log('callback');
	      if (err) {
	        if (loginUrl.includes("?")) {
	          window.location.href = loginUrl + '&fail=true';
	        } else {
	          window.location.href = loginUrl + '?fail=true';
	        }
	      } else {
	        window.location.href = decodeURIComponent(originalUrl);
	        console.log(decodeURIComponent(originalUrl));
	      }
	    });
	  });
	
	  $('#login-password').keyup(function (event) {
	    if (event.keyCode == 13) {
	      $('#overlay').css("height", overlayHeight);
	      $('#login-button').click();
	    }
	  });
	
	  $('input').blur(function () {
	    var $this = $(this);
	    if ($this.val()) $this.addClass('used');else $this.removeClass('used');
	  });
	
	  var $ripples = $('.ripples');
	
	  $ripples.on('click.Ripples', function (e) {
	
	    var $this = $(this);
	    var $offset = $this.parent().offset();
	    var $circle = $this.find('.ripplesCircle');
	
	    var x = e.pageX - $offset.left;
	    var y = e.pageY - $offset.top;
	
	    $circle.css({
	      top: y + 'px',
	      left: x + 'px'
	    });
	
	    $this.addClass('is-active');
	    $('#overlay').css("height", overlayHeight);
	  });
	
	  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
	    $(this).removeClass('is-active');
	  });
	});
	
	function $_GET(param) {
	  var vars = {};
	  window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
	  function (m, key, value) {
	    // callback
	    vars[key] = value !== undefined ? value : '';
	  });
	
	  if (param) {
	    return vars[param] ? vars[param] : null;
	  }
	  return vars;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./login.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./login.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "* { box-sizing:border-box; }\n\nbody {\n    font-family: Helvetica;\n    background: #eee;\n    -webkit-font-smoothing: antialiased;\n}\n\nh1, h3 { font-weight: 300; }\n\nh1 { color: #636363; }\n\nh3 { color: #4a89dc; }\n\n#container {\n  width:450px;\n  margin: 4em auto;\n  padding: 3em 2em 2em 2em;\n}\n\n#img-header {\n\n}\n\n#reset-password-link {\n  font-size: small;\n}\n\n.form {\n    width: 390px;\n    margin: 4em auto;\n    padding: 3em 2em 2em 2em;\n    background: #fafafa;\n    border: 1px solid #ebebeb;\n    box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\n    z-index: 2;\n}\n\n#overlay {\n  width: 390px;\n  height: 1px;\n  background: #fafafa;\n  border: 1px solid #ebebeb;\n  position: absolute;\n  margin: 4em auto;\n  z-index: 1;\n  opacity: .5;\n}\n\n.group {\n    position: relative;\n    margin-bottom: 45px;\n}\n\ninput {\n    font-size: 18px;\n    padding: 10px 10px 10px 5px;\n    -webkit-appearance: none;\n    display: block;\n    background: #fafafa;\n    color: #636363;\n    width: 100%;\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid #757575;\n}\n\ninput:focus { outline: none; }\n\n\n/* Label */\n\nlabel {\n    color: #999;\n    font-size: 18px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: all 0.2s ease;\n}\n\n\n/* active */\n\ninput:focus ~ label, input.used ~ label {\n    top: -20px;\n    transform: scale(.75); left: -2px;\n    /* font-size: 14px; */\n    color: #4a89dc;\n}\n\n\n/* Underline */\n\n.bar {\n    position: relative;\n    display: block;\n    width: 100%;\n}\n\n.bar:before, .bar:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 1px;\n    position: absolute;\n    background: #4a89dc;\n    transition: all 0.2s ease;\n}\n\n.bar:before { left: 50%; }\n\n.bar:after { right: 50%; }\n\n\n/* active */\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }\n\n\n/* Highlight */\n\n.highlight {\n    position: absolute;\n    height: 60%;\n    width: 100px;\n    top: 25%;\n    left: 0;\n    pointer-events: none;\n    opacity: 0.5;\n}\n\n\n/* active */\n\ninput:focus ~ .highlight {\n    animation: inputHighlighter 0.3s ease;\n}\n\n\n/* Animations */\n\n@keyframes inputHighlighter {\n    from { background: #4a89dc; }\n    to \t{ width: 0; background: transparent; }\n}\n\n\n/* Button */\n\n.button {\n    position: relative;\n    display: inline-block;\n    padding: 12px 24px;\n    margin: .3em 0 1em 0;\n    width: 100%;\n    vertical-align: middle;\n    color: #fff;\n    font-size: 16px;\n    line-height: 20px;\n    -webkit-font-smoothing: antialiased;\n    text-align: center;\n    letter-spacing: 1px;\n    background: transparent;\n    border: 0;\n    border-bottom: 2px solid #3160B6;\n    cursor: pointer;\n    transition: all 0.15s ease;\n}\n.button:focus { outline: 0; }\n\n\n/* Button modifiers */\n\n.buttonBlue {\n    background: #4a89dc;\n    text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);\n}\n\n.buttonBlue:hover { background: #357bd8; }\n\n\n/* Ripples container */\n\n.ripples {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: transparent;\n}\n\n\n/* Ripples circle */\n\n.ripplesCircle {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.25);\n}\n\n.ripples.is-active .ripplesCircle {\n    animation: ripples .4s ease-in;\n}\n\n\n/* Ripples animation */\n\n@keyframes ripples {\n    0% { opacity: 0; }\n\n    25% { opacity: 1; }\n\n    100% {\n        width: 200%;\n        padding-bottom: 200%;\n        opacity: 0;\n    }\n}\n\nfooter { text-align: center; }\n\nfooter p {\n    color: #888;\n    font-size: 13px;\n    letter-spacing: .4px;\n}\n\nfooter a {\n    color: #4a89dc;\n    text-decoration: none;\n    transition: all .2s ease;\n}\n\nfooter a:hover {\n    color: #666;\n    text-decoration: underline;\n}\n\nfooter img {\n    width: 80px;\n    transition: all .2s ease;\n}\n\nfooter img:hover { opacity: .83; }\n\nfooter img:focus , footer a:focus { outline: none; }\n\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCookieInfo = exports.testCORS = exports.doLogin = exports.setLoginOptions = undefined;
	
	var _superagent = __webpack_require__(7);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var agent = _superagent2.default.agent();
	var clientCallback;
	var cookieOptions;
	var authEndpoint;
	
	var setLoginOptions = exports.setLoginOptions = function setLoginOptions(options) {
	  cookieOptions = {};
	  cookieOptions = options.cookieOptions;
	  authEndpoint = options.authEndpoint;
	  console.log(JSON.stringify(options));
	};
	
	var doLogin = exports.doLogin = function doLogin(data, callback) {
	  console.log('doLogin');
	  clientCallback = callback;
	
	  var headers = {
	    'X-OpenAM-Username': data.username,
	    'X-OpenAM-Password': data.password,
	    'Content-Type': 'application/json'
	  },
	      endpoint = authEndpoint + '/json/pearson/authenticate';
	
	  agent.post(endpoint).set(headers).send({}).end(postLogin);
	};
	
	var testCORS = exports.testCORS = function testCORS(callback) {
	  console.log('test CORS');
	  clientCallback = callback;
	  var headers = {
	    'Content-Type': 'application/json'
	  },
	      endpoint = authEndpoint + '/json/serverinfo/*';
	
	  _superagent2.default.get(endpoint).set(headers).end(callback);
	};
	
	var getCookieInfo = exports.getCookieInfo = function getCookieInfo() {
	  _superagent2.default.get('https://identity-internal-test.pearson.com/auth/json/serverinfo/*').send({}).end(function (res, err) {
	    console.log(res);
	    console.log(err);
	  });
	};
	
	function postLogin(err, res) {
	  console.log('postLogin');
	  console.log(res);
	  if (err) {
	    console.log(err);
	    //clientCallback(err, res);
	  }
	  var tokenId = res.body.tokenId;
	  if (tokenId) {
	    var cookieString = 'PearsonSSOSession=' + tokenId + '; path=' + cookieOptions.path + '; Domain=' + cookieOptions.domain + '; Max-Age=' + cookieOptions.maxAge;
	    if (cookieOptions.secure) {
	      // Setting secure on cookie only works if you are using https.  Otherwise cookie will not set on http.
	      cookieString = cookieString + ';Secure';
	    }
	    document.cookie = cookieString;
	    clientCallback(err, res);
	  } else {
	    console.log(res);
	    clientCallback({ "message": "failed login" }, res);
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = this;
	}
	
	var Emitter = __webpack_require__(8);
	var RequestBase = __webpack_require__(9);
	var isObject = __webpack_require__(10);
	var ResponseBase = __webpack_require__(11);
	var Agent = __webpack_require__(13);
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Expose `request`.
	 */
	
	var request = exports = module.exports = function(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new exports.Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new exports.Request('GET', method);
	  }
	
	  return new exports.Request(method, url);
	}
	
	exports.Request = Request;
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  throw Error("Browser-only version of superagent could not find XHR");
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    pushEncodedKeyValuePair(pairs, key, obj[key]);
	  }
	  return pairs.join('&');
	}
	
	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */
	
	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (val != null) {
	    if (Array.isArray(val)) {
	      val.forEach(function(v) {
	        pushEncodedKeyValuePair(pairs, key, v);
	      });
	    } else if (isObject(val)) {
	      for(var subkey in val) {
	        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	      }
	    } else {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(val));
	    }
	  } else if (val === null) {
	    pairs.push(encodeURIComponent(key));
	  }
	}
	
	/**
	 * Expose serialization method.
	 */
	
	request.serializeObject = serialize;
	
	/**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] =
	        decodeURIComponent(pair.slice(pos + 1));
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'text/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	request.serialize = {
	  'application/x-www-form-urlencoded': serialize,
	  'application/json': JSON.stringify,
	};
	
	/**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse,
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    if (index === -1) { // could be empty line, just skip it
	      continue;
	    }
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */
	
	function isJSON(mime) {
	  // should match /json or +json
	  // but not /json-seq
	  return /[\/+]json($|[^-\w])/.test(mime);
	}
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req) {
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  var status = this.xhr.status;
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	  this._setStatusProperties(status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	
	  if (null === this.text && req._responseType) {
	    this.body = this.xhr.response;
	  } else {
	    this.body = this.req.method != 'HEAD'
	      ? this._parseBody(this.text ? this.text : this.xhr.response)
	      : null;
	  }
	}
	
	ResponseBase(Response.prototype);
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype._parseBody = function(str) {
	  var parse = request.parse[this.type];
	  if (this.req._parser) {
	    return this.req._parser(this, str);
	  }
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      if (self.xhr) {
	        // ie9 doesn't have 'response' property
	        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
	        // issue #876: return the http status code if the response parsing fails
	        err.status = self.xhr.status ? self.xhr.status : null;
	        err.statusCode = err.status; // backwards-compat only
	      } else {
	        err.rawResponse = null;
	        err.status = null;
	      }
	
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    var new_err;
	    try {
	      if (!self._isResponseOK(res)) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	      }
	    } catch(custom_err) {
	      new_err = custom_err; // ok() callback can throw
	    }
	
	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      new_err.original = err;
	      new_err.response = res;
	      new_err.status = res.status;
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}
	
	/**
	 * Mixin `Emitter` and `RequestBase`.
	 */
	
	Emitter(Request.prototype);
	RequestBase(Request.prototype);
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} [pass] optional in case of using 'bearer' as type
	 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass, options){
	  if (1 === arguments.length) pass = '';
	  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
	    options = pass;
	    pass = '';
	  }
	  if (!options) {
	    options = {
	      type: 'function' === typeof btoa ? 'basic' : 'auto',
	    };
	  }
	
	  var encoder = function(string) {
	    if ('function' === typeof btoa) {
	      return btoa(string);
	    }
	    throw new Error('Cannot use basic auth, btoa is not a function');
	  };
	
	  return this._auth(user, pass, options, encoder);
	};
	
	/**
	 * Add query-string `val`.
	 *
	 * Examples:
	 *
	 *   request.get('/shoes')
	 *     .query('size=10')
	 *     .query({ color: 'blue' })
	 *
	 * @param {Object|String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `options` (or filename).
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String|Object} options
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, options){
	  if (file) {
	    if (this._data) {
	      throw Error("superagent can't mix .send() and .attach()");
	    }
	
	    this._getFormData().append(field, file, options || file.name);
	  }
	  return this;
	};
	
	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  if (this._shouldRetry(err, res)) {
	    return this._retry();
	  }
	
	  var fn = this._callback;
	  this.clearTimeout();
	
	  if (err) {
	    if (this._maxRetries) err.retries = this._retries - 1;
	    this.emit('error', err);
	  }
	
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;
	
	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;
	
	  this.callback(err);
	};
	
	// This only warns, because the request is still likely to work
	Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
	  console.warn("This is not supported in browser version of superagent");
	  return this;
	};
	
	// This throws, because it can't send/receive data as expected
	Request.prototype.pipe = Request.prototype.write = function(){
	  throw Error("Streaming is not supported in browser version of superagent");
	};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	Request.prototype._isHost = function _isHost(obj) {
	  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
	  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
	}
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  if (this._endCalled) {
	    console.warn("Warning: .end() was called twice. This is not supported in superagent");
	  }
	  this._endCalled = true;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // querystring
	  this._finalizeQueryString();
	
	  return this._end();
	};
	
	Request.prototype._end = function() {
	  var self = this;
	  var xhr = (this.xhr = request.getXHR());
	  var data = this._formData || this._data;
	
	  this._setTimeouts();
	
	  // state change
	  xhr.onreadystatechange = function(){
	    var readyState = xhr.readyState;
	    if (readyState >= 2 && self._responseTimeoutTimer) {
	      clearTimeout(self._responseTimeoutTimer);
	    }
	    if (4 != readyState) {
	      return;
	    }
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (!status) {
	      if (self.timedout || self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(direction, e) {
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = direction;
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    try {
	      xhr.onprogress = handleProgress.bind(null, 'download');
	      if (xhr.upload) {
	        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
	      }
	    } catch(e) {
	      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	      // Reported here:
	      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	    }
	  }
	
	  // initiate request
	  try {
	    if (this.username && this.password) {
	      xhr.open(this.method, this.url, true, this.username, this.password);
	    } else {
	      xhr.open(this.method, this.url, true);
	    }
	  } catch (err) {
	    // see #1149
	    return this.callback(err);
	  }
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) {
	      serialize = request.serialize['application/json'];
	    }
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	
	    if (this.header.hasOwnProperty(field))
	      xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }
	
	  // send stuff
	  this.emit('request', this);
	
	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};
	
	request.agent = function() {
	  return new Agent();
	};
	
	["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
	  Agent.prototype[method.toLowerCase()] = function(url, fn) {
	    var req = new request.Request(method, url);
	    this._setDefaults(req);
	    if (fn) {
	      req.end(fn);
	    }
	    return req;
	  };
	});
	
	Agent.prototype.del = Agent.prototype['delete'];
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn) {
	  var req = request('GET', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn) {
	  var req = request('HEAD', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.options = function(url, data, fn) {
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	function del(url, data, fn) {
	  var req = request('DELETE', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	}
	
	request['del'] = del;
	request['delete'] = del;
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn) {
	  var req = request('PATCH', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn) {
	  var req = request('POST', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn) {
	  var req = request('PUT', url);
	  if ('function' == typeof data) (fn = data), (data = null);
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(10);
	
	/**
	 * Expose `RequestBase`.
	 */
	
	module.exports = RequestBase;
	
	/**
	 * Initialize a new `RequestBase`.
	 *
	 * @api public
	 */
	
	function RequestBase(obj) {
	  if (obj) return mixin(obj);
	}
	
	/**
	 * Mixin the prototype properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in RequestBase.prototype) {
	    obj[key] = RequestBase.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.clearTimeout = function _clearTimeout(){
	  clearTimeout(this._timer);
	  clearTimeout(this._responseTimeoutTimer);
	  delete this._timer;
	  delete this._responseTimeoutTimer;
	  return this;
	};
	
	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */
	
	RequestBase.prototype.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Set format of binary response body.
	 * In browser valid formats are 'blob' and 'arraybuffer',
	 * which return Blob and ArrayBuffer, respectively.
	 *
	 * In Node all values result in Buffer.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};
	
	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */
	
	RequestBase.prototype.serialize = function serialize(fn){
	  this._serializer = fn;
	  return this;
	};
	
	/**
	 * Set timeouts.
	 *
	 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
	 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
	 *
	 * Value of 0 or false means no timeout.
	 *
	 * @param {Number|Object} ms or {response, deadline}
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.timeout = function timeout(options){
	  if (!options || 'object' !== typeof options) {
	    this._timeout = options;
	    this._responseTimeout = 0;
	    return this;
	  }
	
	  for(var option in options) {
	    switch(option) {
	      case 'deadline':
	        this._timeout = options.deadline;
	        break;
	      case 'response':
	        this._responseTimeout = options.response;
	        break;
	      default:
	        console.warn("Unknown timeout option", option);
	    }
	  }
	  return this;
	};
	
	/**
	 * Set number of retry attempts on error.
	 *
	 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
	 *
	 * @param {Number} count
	 * @param {Function} [fn]
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.retry = function retry(count, fn){
	  // Default to 1 if no count passed or true
	  if (arguments.length === 0 || count === true) count = 1;
	  if (count <= 0) count = 0;
	  this._maxRetries = count;
	  this._retries = 0;
	  this._retryCallback = fn;
	  return this;
	};
	
	var ERROR_CODES = [
	  'ECONNRESET',
	  'ETIMEDOUT',
	  'EADDRINFO',
	  'ESOCKETTIMEDOUT'
	];
	
	/**
	 * Determine if a request should be retried.
	 * (Borrowed from segmentio/superagent-retry)
	 *
	 * @param {Error} err
	 * @param {Response} [res]
	 * @returns {Boolean}
	 */
	RequestBase.prototype._shouldRetry = function(err, res) {
	  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
	    return false;
	  }
	  if (this._retryCallback) {
	    try {
	      var override = this._retryCallback(err, res);
	      if (override === true) return true;
	      if (override === false) return false;
	      // undefined falls back to defaults
	    } catch(e) {
	      console.error(e);
	    }
	  }
	  if (res && res.status && res.status >= 500 && res.status != 501) return true;
	  if (err) {
	    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
	    // Superagent timeout
	    if (err.timeout && err.code == 'ECONNABORTED') return true;
	    if (err.crossDomain) return true;
	  }
	  return false;
	};
	
	/**
	 * Retry request
	 *
	 * @return {Request} for chaining
	 * @api private
	 */
	
	RequestBase.prototype._retry = function() {
	
	  this.clearTimeout();
	
	  // node
	  if (this.req) {
	    this.req = null;
	    this.req = this.request();
	  }
	
	  this._aborted = false;
	  this.timedout = false;
	
	  return this._end();
	};
	
	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} [reject]
	 * @return {Request}
	 */
	
	RequestBase.prototype.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    if (this._endCalled) {
	      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
	    }
	    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
	      self.end(function(err, res) {
	        if (err) innerReject(err);
	        else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	};
	
	RequestBase.prototype.catch = function(cb) {
	  return this.then(undefined, cb);
	};
	
	/**
	 * Allow for extension
	 */
	
	RequestBase.prototype.use = function use(fn) {
	  fn(this);
	  return this;
	};
	
	RequestBase.prototype.ok = function(cb) {
	  if ('function' !== typeof cb) throw Error("Callback required");
	  this._okCallback = cb;
	  return this;
	};
	
	RequestBase.prototype._isResponseOK = function(res) {
	  if (!res) {
	    return false;
	  }
	
	  if (this._okCallback) {
	    return this._okCallback(res);
	  }
	
	  return res.status >= 200 && res.status < 300;
	};
	
	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	RequestBase.prototype.get = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */
	
	RequestBase.prototype.getHeader = RequestBase.prototype.get;
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	RequestBase.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Write the field `name` and `val`, or multiple fields with one object
	 * for "multipart/form-data" request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 *
	 * request.post('/upload')
	 *   .field({ foo: 'bar', baz: 'qux' })
	 *   .end(callback);
	 * ```
	 *
	 * @param {String|Object} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	RequestBase.prototype.field = function(name, val) {
	  // name should be either a string or an object.
	  if (null === name || undefined === name) {
	    throw new Error('.field(name, val) name can not be empty');
	  }
	
	  if (this._data) {
	    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
	  }
	
	  if (isObject(name)) {
	    for (var key in name) {
	      this.field(key, name[key]);
	    }
	    return this;
	  }
	
	  if (Array.isArray(val)) {
	    for (var i in val) {
	      this.field(name, val[i]);
	    }
	    return this;
	  }
	
	  // val should be defined now
	  if (null === val || undefined === val) {
	    throw new Error('.field(name, val) val can not be empty');
	  }
	  if ('boolean' === typeof val) {
	    val = '' + val;
	  }
	  this._getFormData().append(name, val);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	RequestBase.prototype.abort = function(){
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
	  switch (options.type) {
	    case 'basic':
	      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
	      break;
	
	    case 'auto':
	      this.username = user;
	      this.password = pass;
	      break;
	
	    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
	      this.set('Authorization', 'Bearer ' + user);
	      break;
	  }
	  return this;
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	RequestBase.prototype.withCredentials = function(on) {
	  // This is browser-only functionality. Node side is no-op.
	  if (on == undefined) on = true;
	  this._withCredentials = on;
	  return this;
	};
	
	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.redirects = function(n){
	  this._maxRedirects = n;
	  return this;
	};
	
	/**
	 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
	 * Default 200MB.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 */
	RequestBase.prototype.maxResponseSize = function(n){
	  if ('number' !== typeof n) {
	    throw TypeError("Invalid argument");
	  }
	  this._maxResponseSize = n;
	  return this;
	};
	
	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */
	
	RequestBase.prototype.toJSON = function() {
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header,
	  };
	};
	
	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.send = function(data){
	  var isObj = isObject(data);
	  var type = this._header['content-type'];
	
	  if (this._formData) {
	    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
	  }
	
	  if (isObj && !this._data) {
	    if (Array.isArray(data)) {
	      this._data = [];
	    } else if (!this._isHost(data)) {
	      this._data = {};
	    }
	  } else if (data && this._data && this._isHost(this._data)) {
	    throw Error("Can't merge these send calls");
	  }
	
	  // merge
	  if (isObj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!isObj || this._isHost(data)) {
	    return this;
	  }
	
	  // default to json
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Sort `querystring` by the sort function
	 *
	 *
	 * Examples:
	 *
	 *       // default order
	 *       request.get('/user')
	 *         .query('name=Nick')
	 *         .query('search=Manny')
	 *         .sortQuery()
	 *         .end(callback)
	 *
	 *       // customized sort function
	 *       request.get('/user')
	 *         .query('name=Nick')
	 *         .query('search=Manny')
	 *         .sortQuery(function(a, b){
	 *           return a.length - b.length;
	 *         })
	 *         .end(callback)
	 *
	 *
	 * @param {Function} sort
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.sortQuery = function(sort) {
	  // _sort default to true but otherwise can be a function or boolean
	  this._sort = typeof sort === 'undefined' ? true : sort;
	  return this;
	};
	
	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */
	RequestBase.prototype._finalizeQueryString = function(){
	  var query = this._query.join('&');
	  if (query) {
	    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
	  }
	  this._query.length = 0; // Makes the call idempotent
	
	  if (this._sort) {
	    var index = this.url.indexOf('?');
	    if (index >= 0) {
	      var queryArr = this.url.substring(index + 1).split('&');
	      if ('function' === typeof this._sort) {
	        queryArr.sort(this._sort);
	      } else {
	        queryArr.sort();
	      }
	      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
	    }
	  }
	};
	
	// For backwards compat only
	RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	RequestBase.prototype._timeoutError = function(reason, timeout, errno){
	  if (this._aborted) {
	    return;
	  }
	  var err = new Error(reason + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  err.code = 'ECONNABORTED';
	  err.errno = errno;
	  this.timedout = true;
	  this.abort();
	  this.callback(err);
	};
	
	RequestBase.prototype._setTimeouts = function() {
	  var self = this;
	
	  // deadline
	  if (this._timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
	    }, this._timeout);
	  }
	  // response timeout
	  if (this._responseTimeout && !this._responseTimeoutTimer) {
	    this._responseTimeoutTimer = setTimeout(function(){
	      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
	    }, this._responseTimeout);
	  }
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return null !== obj && 'object' === typeof obj;
	}
	
	module.exports = isObject;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var utils = __webpack_require__(12);
	
	/**
	 * Expose `ResponseBase`.
	 */
	
	module.exports = ResponseBase;
	
	/**
	 * Initialize a new `ResponseBase`.
	 *
	 * @api public
	 */
	
	function ResponseBase(obj) {
	  if (obj) return mixin(obj);
	}
	
	/**
	 * Mixin the prototype properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in ResponseBase.prototype) {
	    obj[key] = ResponseBase.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	ResponseBase.prototype.get = function(field) {
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	ResponseBase.prototype._setHeaderProperties = function(header){
	    // TODO: moar!
	    // TODO: make this a util
	
	    // content-type
	    var ct = header['content-type'] || '';
	    this.type = utils.type(ct);
	
	    // params
	    var params = utils.params(ct);
	    for (var key in params) this[key] = params[key];
	
	    this.links = {};
	
	    // links
	    try {
	        if (header.link) {
	            this.links = utils.parseLinks(header.link);
	        }
	    } catch (err) {
	        // ignore
	    }
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	ResponseBase.prototype._setStatusProperties = function(status){
	    var type = status / 100 | 0;
	
	    // status / class
	    this.status = this.statusCode = status;
	    this.statusType = type;
	
	    // basics
	    this.info = 1 == type;
	    this.ok = 2 == type;
	    this.redirect = 3 == type;
	    this.clientError = 4 == type;
	    this.serverError = 5 == type;
	    this.error = (4 == type || 5 == type)
	        ? this.toError()
	        : false;
	
	    // sugar
	    this.accepted = 202 == status;
	    this.noContent = 204 == status;
	    this.badRequest = 400 == status;
	    this.unauthorized = 401 == status;
	    this.notAcceptable = 406 == status;
	    this.forbidden = 403 == status;
	    this.notFound = 404 == status;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	exports.type = function(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	exports.params = function(str){
	  return str.split(/ *; */).reduce(function(obj, str){
	    var parts = str.split(/ *= */);
	    var key = parts.shift();
	    var val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Parse Link header fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	exports.parseLinks = function(str){
	  return str.split(/ *, */).reduce(function(obj, str){
	    var parts = str.split(/ *; */);
	    var url = parts[0].slice(1, -1);
	    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
	    obj[rel] = url;
	    return obj;
	  }, {});
	};
	
	/**
	 * Strip content related fields from `header`.
	 *
	 * @param {Object} header
	 * @return {Object} header
	 * @api private
	 */
	
	exports.cleanHeader = function(header, changesOrigin){
	  delete header['content-type'];
	  delete header['content-length'];
	  delete header['transfer-encoding'];
	  delete header['host'];
	  // secuirty
	  if (changesOrigin) {
	    delete header['authorization'];
	    delete header['cookie'];
	  }
	  return header;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	function Agent() {
	  this._defaults = [];
	}
	
	["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
	 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
	  /** Default setting for all requests from this agent */
	  Agent.prototype[fn] = function(/*varargs*/) {
	    this._defaults.push({fn:fn, arguments:arguments});
	    return this;
	  }
	});
	
	Agent.prototype._setDefaults = function(req) {
	    this._defaults.forEach(function(def) {
	      req[def.fn].apply(req, def.arguments);
	    });
	};
	
	module.exports = Agent;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var loginOptions = {};
	
	loginOptions['PROD'] = {
	  "cookieOptions": {
	    //"domain":".pearson.com",
	    "domain": ".pearsoncms.net",
	    "path": "/",
	    "maxAge": 86400,
	    "secure": true
	  },
	  //"authEndpoint":"https://identity-internal.pearson.com/auth",
	  "authEndpoint": "/auth",
	  "resetPasswordLink": "https://pearson.service-now.com/pearson_password_reset_page.do"
	};
	
	loginOptions['TEST'] = {
	  "cookieOptions": {
	    "domain": ".pearsoncms.net",
	    "path": "/",
	    "maxAge": 86400,
	    "secure": true
	  },
	  "authEndpoint": "/auth",
	  "resetPasswordLink": "https://pearson.service-now.com/pearson_password_reset_page.do"
	};
	
	exports.loginOptions = loginOptions;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0M3B4IiBoZWlnaHQ9IjUxcHgiIHZpZXdCb3g9IjAgMCAxNDMgNTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImJhY2tncm91bmQ6ICNGQUZBRkE7Ij4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjMgKDI5ODAyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QZWFyc29uIExvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQUxMIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTQuMDAwMDAwLCAtMTA4Ny4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IlBlYXJzb25Mb2dvX0hvcml6b250YWxfQmxrX1JHQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU5LjAwMDAwMCwgMTA5Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03OC45NjgzNzQzLDI2Ljg3MDUxODcgQzc4LjY1Mjc4MTEsMjcuMzE2OTIwNiA3Ny42MjI3ODI1LDI4LjY0OTgwMzcgNzYuMzQxNDM2NCwyOC42NDk4MDM3IEM3NC42MDg2Nzk0LDI4LjY0OTgwMzcgNzQuMjQ0OTk1OCwyNy40MDkyNjY0IDc0LjI0NDk5NTgsMjYuMzY4OTM5MyBDNzQuMjQ0OTk1OCwyNC42NTc4NTk4IDc1LjUyOTM0NzUsMjMuODY2NTk4MSA3OC45NjgzNzQzLDIzLjAwMDQyNTIgTDc4Ljk2ODM3NDMsMjYuODcwNTE4NyBMNzguOTY4Mzc0MywyNi44NzA1MTg3IFogTTgzLjI0OTczNDUsMjguOTY2MzA4NCBDODMuMTk5NzY1NSwyOC44MzM1Mzc0IDgzLjA2NDUxMTMsMjguNzU4MDUxNCA4Mi45MzE1MTEzLDI4Ljc5MDA0NjcgTDgyLjg4OTQzMjIsMjguODAwOTY3MyBDODIuNDk0Mzc3MSwyOC44ODgzMzE4IDgyLjE5MDQzMDgsMjguODYzODA4NCA4MS45Nzc0MDU0LDI4LjcxNzI0MyBDODEuNjc1NTI1NCwyOC41MDg0MTEyIDgxLjUyODQzNjQsMjguMDM4MjUyMyA4MS41Mjg0MzY0LDI3LjI3OTk0MzkgTDgxLjUyODQzNjQsMjAuNDIwNjgyMiBDODEuNTI4NDM2NCwxNy43NDE1MDQ3IDc5Ljk2MTkyOTQsMTYuMzgzMTQwMiA3Ni44NzE5MzM2LDE2LjM4MzE0MDIgQzc0LjEwNDI5MzgsMTYuMzgzMTQwMiA3MS45MzYyODExLDE3LjcxOTA4ODggNzEuOTM2MjgxMSwxOS40MjQ2MTIxIEM3MS45MzYyODExLDIwLjMwMTUxNCA3Mi40NjAwMTU1LDIwLjkzNTI4OTcgNzMuMjMzNzgyNSwyMS4wMzA1MDkzIEM3My43MzkyOTUyLDIxLjA5MjU4NDEgNzQuMjIxMzI2MywyMC44NTkyMjkgNzQuNTcxNjcyMywyMC40ODIzNzM4IEM3NS4yNTIwNzYzLDE5Ljc0OTkyOTkgNzUuMTYzNzg1MywxOC44NzkzNTA1IDc0LjMzODkyMjMsMTcuOTQ0MjA1NiBDNzQuODI2Nzc2OCwxNy40MjM0NjczIDc1LjY5MDkwMTEsMTcuMTE1MzkyNSA3Ni42NzY1NjY0LDE3LjExNTM5MjUgQzc4LjI4Mjg5ODMsMTcuMTE1MzkyNSA3OC45NjgzNzQzLDE4LjA4NjkzOTMgNzguOTY4Mzc0MywyMC4zNjM5NzIgTDc4Ljk2ODM3NDMsMjIuMDk3Mjc1NyBDNzguNTkxNzI4OCwyMi4yMTYwNjA3IDc4LjIzOTMxNjQsMjIuMzI4NTIzNCA3Ny41OTQ3OTI0LDIyLjQ4Mjc1MjMgQzc2LjI5NDI4NTMsMjIuNzk0MDg0MSA3NC41MTAwNTY1LDIzLjIwODQ5MDcgNzMuMTY0Mjc2OCwyMy45NjY5OTA3IEM3Mi4wNTMzMTM2LDI0LjU4NzkyOTkgNzEuNDg5OTQyMSwyNS41Njg0ODEzIDcxLjQ4OTk0MjEsMjYuODgxNjMwOCBDNzEuNDg5OTQyMSwyOC4zMTA2OTE2IDcyLjQwOTY3MDksMjkuOTc5NjIxNSA3NS4wMDIwNDM4LDI5Ljk3OTYyMTUgQzc2LjQ1MzU4NDcsMjkuOTc5NjIxNSA3Ny43NTQ0Njc1LDI5LjI3NzA2NTQgNzkuMDg5MzUxNywyNy43NzA5ODYgQzc5LjIwNDMxNzgsMjkuMzM2NDU3OSA3OS43ODYwOTg5LDI5LjkyMjkxMTIgODEuMTk3MjUxNCwyOS45MjI5MTEyIEM4MS44NzU1ODksMjkuOTIyOTExMiA4Mi40MTg0ODQ1LDI5Ljc2MTU5MzUgODMuMDYzNzU5OSwyOS40NDMxNzI5IEM4My4yMzg2NTExLDI5LjM1Njk1NzkgODMuMzIxODcwMSwyOS4xNTAwNDIxIDgzLjI0OTczNDUsMjguOTY2MzA4NCBMODMuMjQ5NzM0NSwyOC45NjYzMDg0IFoiIGlkPSJGaWxsLTEiIGZpbGw9IiMyQzJDMjgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTIuMDQ4MzY3LDE3LjAyOTk0MzkgQzExMC40NjExOTYsMTcuMDI5OTQzOSAxMDguNjM5NzczLDE3LjcyNTk4NiAxMDguNjM5NzczLDIzLjE1MzEyMTUgQzEwOC42Mzk3NzMsMjcuMjkyMzk3MiAxMDkuODM2NzczLDI5LjMwNDI3MSAxMTIuMjk5MzM5LDI5LjMwNDI3MSBDMTE0LjY1NjMzMiwyOS4zMDQyNzEgMTE1LjcwNzM3LDI3LjQwNzE1ODkgMTE1LjcwNzM3LDIzLjE1MzEyMTUgQzExNS43MDczNywxOS4wMzI2MjE1IDExNC41MTA1NTgsMTcuMDI5OTQzOSAxMTIuMDQ4MzY3LDE3LjAyOTk0MzkgTDExMi4wNDgzNjcsMTcuMDI5OTQzOSBaIE0xMTIuMTg3Mzc5LDMwLjAzNjkwNjUgQzEwOC41MTQ2NjIsMzAuMDM2OTA2NSAxMDUuNzQ0OTU2LDI3LjEwMTk1NzkgMTA1Ljc0NDk1NiwyMy4yMDk4MzE4IEMxMDUuNzQ0OTU2LDE5LjM5ODM2NDUgMTA4LjYzNTI2NCwxNi4yOTc2OTE2IDExMi4xODczNzksMTYuMjk3NjkxNiBDMTE1Ljc4NDU3OCwxNi4yOTc2OTE2IDExOC42MDIzNzQsMTkuMjgzNjAyOCAxMTguNjAyMzc0LDIzLjA5NjAyOCBDMTE4LjYwMjM3NCwyNy4zODMwMTg3IDExNS4yNzI2NzgsMzAuMDM2OTA2NSAxMTIuMTg3Mzc5LDMwLjAzNjkwNjUgTDExMi4xODczNzksMzAuMDM2OTA2NSBaIiBpZD0iRmlsbC0yIiBmaWxsPSIjMkMyQzI4Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDguNjc4Mzc1NywyNy4yNzk5NDM5IEw0OC42NzgzNzU3LDIyLjMxNzc5NDQgTDUwLjU1MTQ1OSwyMi4zMTc3OTQ0IEM1My4zNDY1MjU0LDIyLjMxNzc5NDQgNTUuNDcyODM0NywyMS43MTQ0ODEzIDU2Ljg3MTc3NjgsMjAuNTI0MzMxOCBDNTguMzMzNjQ5NywxOS4yODAzNDU4IDU4LjY0MDQxMzgsMTcuNzA0MTQ0OSA1OC42NDA0MTM4LDE2LjYwMTE2ODIgQzU4LjY0MDQxMzgsMTIuMDYzOTYyNiA1NC4zNDc5NzAzLDExLjExMTc2NjQgNTAuNzQ2ODI2MywxMS4xMTE3NjY0IEw1MC43NjE0Nzg4LDExLjExMTM4MzIgTDQzLjQ1NzM3NDMsMTEuMTExMzgzMiBDNDMuMjkyMDYzNiwxMS4xMTEzODMyIDQzLjE1NzU2MDcsMTEuMjQ4NTYwNyA0My4xNTc1NjA3LDExLjQxNzE1ODkgTDQzLjE1NzU2MDcsMTEuNDM3NDY3MyBMNDMuMTU3MzcyOSwxMS40MzA5NTMzIEM0My4xNTczNzI5LDExLjU4NjcxNSA0My4yNTA1NDgsMTEuNzI1NDI1MiA0My4zOTM4Nzk5LDExLjc3OTA3MDEgQzQ0LjA0NDQxNTMsMTIuMDIyOTYyNiA0NS44MTE1NDk0LDExLjY3OTYzNTUgNDUuODExNTQ5NCwxMy42MTI1NzQ4IEw0NS44MTE3MzczLDI3LjI3NzI2MTcgQzQ1LjgxMTczNzMsMjguMjcxMjI0MyA0NS4zNzk0ODczLDI4Ljk3MjQzOTMgNDMuNDAzODM2MiwyOS4xNjI2ODY5IEM0My4yNDczNTQ1LDI5LjE3ODAxNCA0My4xMjkwMDcxLDI5LjMwODg2OTIgNDMuMTI5MDA3MSwyOS40NjY5Mjk5IEw0My4xMjkwMDcxLDI5LjUxMzg2OTIgQzQzLjEyOTAwNzEsMjkuNjgyNDY3MyA0My4yNjM1MDk5LDI5LjgxOTY0NDkgNDMuNDI4ODIwNiwyOS44MTk2NDQ5IEw1MS4yMzIyMzg3LDI5LjgxOTY0NDkgQzUxLjM5NzM2MTYsMjkuODE5NjQ0OSA1MS41MzIwNTIzLDI5LjY4MjQ2NzMgNTEuNTMyMDUyMywyOS41MTM4NjkyIEw1MS41MzIwNTIzLDI5LjQ3MjEwMjggQzUxLjUzMjA1MjMsMjkuMzE0MDQyMSA1MS40MDkxOTYzLDI5LjE4MDMxMzEgNTEuMjUyNzE0NywyOS4xNjc4NTk4IEM0OS4xMDY0OTI5LDI4Ljk5Mjc0NzcgNDguNjc1NTU3OSwyOC4zMTQ1MjM0IDQ4LjY3NTU1NzksMjcuMjc3MjYxNyBMNDguNjc1NTU3OSwyMi4zMjY0MTU5IE01NS40MTA4NDMyLDE2LjU0NDA3NDggQzU1LjQxMDg0MzIsMTkuNzAxMDc0OCA1NC42NDc5NzE4LDIxLjQ0MDMxNzggNTAuNzQ2ODI2MywyMS40NDAzMTc4IEw0OC42NzgzNzU3LDIxLjQ0MDMxNzggTDQ4LjY3ODM3NTcsMTEuOTAxMTEyMSBMNTAuODMwNzk2NiwxMS45MDExMTIxIEM1NC44NjY2MzI4LDExLjkwMTExMjEgNTUuNDEwODQzMiwxNC4yNDgwNzQ4IDU1LjQxMDg0MzIsMTYuNTQ0MDc0OCIgaWQ9IkZpbGwtMyIgZmlsbD0iIzJDMkMyOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTYxLjI2OTc5MzgsMjEuNDUwMDg4OCBDNjEuNTU0MzkxMiwxOC42MDU3NjE3IDYyLjY0MjgxMjEsMTcuMDQ2NjEyMSA2NC4zNTIwODc2LDE3LjA0NjYxMjEgQzY1LjIwNzc1ODUsMTcuMDQ2NjEyMSA2NS44NDE3NjI3LDE3LjI4ODAxNCA2Ni4yOTAxNjgxLDE3Ljc4NDk5NTMgQzY2LjkwNjMyNjMsMTguNDY3NjI2MiA2Ny4xNjY2OTA3LDE5LjcwMDUgNjcuMDY0MzEwNywyMS40NTAwODg4IEw2MS4yNjk3OTM4LDIxLjQ1MDA4ODggTDYxLjI2OTc5MzgsMjEuNDUwMDg4OCBaIE02NC41NDY4OTEyLDE2LjI5MDk4NiBDNjEuMTUwMTMxNCwxNi4yOTA5ODYgNTguMzg2ODEyMSwxOS40Mjc2Nzc2IDU4LjM4NjgxMjEsMjMuMjgzMjEwMyBDNTguMzg2ODEyMSwyNy4xODYyNTcgNjAuOTc3NjgyMiwzMC4wMTkyODA0IDY0LjU0Njg5MTIsMzAuMDE5MjgwNCBDNjcuNTQ2MzQxOCwzMC4wMTkyODA0IDY5LjAwNTU4NDcsMjguMTkxNzE1IDY5Ljg0MjI4MjUsMjYuODE2ODczOCBDNjkuOTI0NzUsMjYuNjgxODAzNyA2OS44ODg2ODIyLDI2LjUwMjQ3NjYgNjkuNzYwMzc4NSwyNi40MDg3ODk3IEw2OS43MjA5Mjk0LDI2LjM4MDI0MyBDNjkuNTkxNDk4NiwyNi4yODYxNzI5IDY5LjQxMTM0NzUsMjYuMzEyNDIwNiA2OS4zMTE1OTc1LDI2LjQ0MDc4NSBDNjguMjA4NTI0LDI3Ljg1MDg3ODUgNjcuMjQzNTIyNiwyOC42NjcyMzgzIDY1LjU3NjUxNDEsMjguNjY3MjM4MyBDNjMuNDY4MDUwOCwyOC42NjcyMzgzIDYxLjIxNTUwNDIsMjcuMTg1NjgyMiA2MS4yMTU1MDQyLDIzLjAyNzYzMDggTDYxLjIxNTUwNDIsMjIuOTk2Nzg1IEM2MS4yMTE5MzUsMjIuODEzMDUxNCA2MS4yMTYyNTU2LDIyLjU2MTMwMzcgNjEuMjIyODMwNSwyMi4zMjY0MTU5IEw2OS44NDkwNDUyLDIyLjMyNjQxNTkgQzY5Ljg3MjcxNDcsMjIuMzI2NDE1OSA2OS44OTIwNjM2LDIyLjMwNzY0MDIgNjkuODkzNzU0MiwyMi4yODM4ODMyIEw2OS44OTg2Mzg0LDIyLjIxMzE4NjkgQzcwLjAyMDM2NzIsMjAuNTA3NDcyIDY5LjU0NzM1MzEsMTguOTc1OTExMiA2OC41NjY5NDc3LDE3Ljg5OTk0ODYgQzY3LjYwNzM5NDEsMTYuODQ3MzU5OCA2Ni4yMTcwOTMyLDE2LjI5MDk4NiA2NC41NDY4OTEyLDE2LjI5MDk4NiBMNjQuNTQ2ODkxMiwxNi4yOTA5ODYgWiIgaWQ9IkZpbGwtNCIgZmlsbD0iIzJDMkMyOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwMC4zMDE1MzcsMjEuNjAzOTM0NiBDMTAwLjMwMDc4NSwyMS42MDM1NTE0IDEwMC4yOTk4NDYsMjEuNjAzNTUxNCAxMDAuMjk4OTA3LDIxLjYwMzM1OTggQzk3LjkzOTg0NzUsMjAuOTI4NTg0MSA5Ny4wMjA2ODIyLDIwLjI0NTM3ODUgOTcuMDIwNjgyMiwxOS4xNjcxMTY4IEM5Ny4wMjA2ODIyLDE3LjkzODI2NjQgOTcuOTc3MDQyNCwxNy4wNDY2MTIxIDk5LjI5NDQ1NjIsMTcuMDQ2NjEyMSBDMTAwLjg0NDQzMiwxNy4wNDY2MTIxIDEwMS41MDgxMTcsMTcuODAyMDQ2NyAxMDMuMTQ0MTMsMjAuNTkxNzcxIEwxMDMuMTY1OTIxLDIwLjYyODkzOTMgQzEwMy4xNzM4MTEsMjAuNjQyOTI1MiAxMDMuMTg4NjUxLDIwLjY1MTczODMgMTAzLjIwNDQzMSwyMC42NTE3MzgzIEwxMDMuNDI4OTE1LDIwLjY1MTczODMgQzEwMy41OTQwMzgsMjAuNjUxNzM4MyAxMDMuNzI4NzI5LDIwLjUxNDM2OTIgMTAzLjcyODcyOSwyMC4zNDU5NjI2IEwxMDMuNzI4NzI5LDE2LjMzNjk2NzMgQzEwMy43Mjg3MjksMTYuMzExNDg2IDEwMy43MDg0NDEsMTYuMjkwOTg2IDEwMy42ODM2NDQsMTYuMjkwOTg2IEwxMDMuMzg3NTg4LDE2LjI5MDk4NiBDMTAzLjI5NzQxOCwxNi4yOTA5ODYgMTAzLjIxMjg4NCwxNi4zMzE3OTQ0IDEwMy4xNTU5NjUsMTYuNDAyODczOCBMMTAyLjYzMzczMywxNy4wNTEwMTg3IEMxMDEuOTc0MzY5LDE2LjY4MDI5NDQgMTAwLjkwMDk3NiwxNi4yOTA5ODYgOTkuODIzNjM4NCwxNi4yOTA5ODYgQzk3LjExNDQyMDksMTYuMjkwOTg2IDk1LjIyMTk4ODcsMTcuOTk4ODA4NCA5NS4yMjE5ODg3LDIwLjQ0NDI0NzcgQzk1LjIyMTk4ODcsMjIuNzM5Mjg5NyA5Ni43MTQxMDU5LDIzLjU5OTUyMzQgOTkuMjkwNjk5MiwyNC4zMDkxNjgyIEMxMDEuNzk0MjE4LDI1LjAwODA4NDEgMTAyLjY4MTQ0OCwyNS43MzUxNjM2IDEwMi42ODE0NDgsMjcuMDg2NjMwOCBDMTAyLjY4MTQ0OCwyOC41ODgxMTIxIDEwMS4yNTQzMjgsMjkuMjYzNjU0MiAxMDAuMjQxMDQ4LDI5LjI2MzY1NDIgQzk4LjM1NjMxNzgsMjkuMjYzNjU0MiA5Ny41NTkyNTcxLDI4LjU0OTAyOCA5NS43NTMwNDk0LDI1LjIzOTE0MDIgTDk1LjczMTYzNDIsMjUuMTk5NjcyOSBDOTUuNzIzNzQ0NCwyNS4xODUxMTIxIDk1LjcwODcxNjEsMjUuMTc1OTE1OSA5NS42OTIzNzI5LDI1LjE3NTkxNTkgTDk1LjQ2NjM4NTYsMjUuMTc1OTE1OSBDOTUuMzAxMDc0OSwyNS4xNzU5MTU5IDk1LjE2NjU3MiwyNS4zMTMwOTM1IDk1LjE2NjU3MiwyNS40ODE2OTE2IEw5NS4xNjY1NzIsMjkuOTczMjk5MSBDOTUuMTY2NTcyLDI5Ljk5ODU4ODggOTUuMTg2NjcyMywzMC4wMTkyODA0IDk1LjIxMTQ2ODksMzAuMDE5MjgwNCBMOTUuNTE4MDQ1MiwzMC4wMTkyODA0IEM5NS41OTcxMzE0LDMwLjAxOTI4MDQgOTUuNjc0MzM5LDI5Ljk4NjMyNzEgOTUuNzMwMTMxNCwyOS45Mjk4MDg0IEw5Ni41NTU5MzM2LDI5LjA4NzIwMDkgQzk3LjUyMjYyNTcsMjkuNjk5MTM1NSA5OC45Njc5Njc1LDMwLjAxOTI4MDQgOTkuOTA3MDQ1MiwzMC4wMTkyODA0IEMxMDEuMzE2MzE5LDMwLjAxOTI4MDQgMTAyLjQ3NDk5NywyOS41NjQwNjU0IDEwMy4yNTc5NjksMjguNzAyNDkwNyBDMTAzLjk1NjAzMSwyNy45MzQ3OTQ0IDEwNC4zNDA1NjYsMjYuODQ2NzYxNyAxMDQuMzQwNTY2LDI1LjYzODc5NDQgQzEwNC4zNDA1NjYsMjMuNTQ3MDI4IDEwMy4yNDU3NTgsMjIuNDUzMjQ3NyAxMDAuMzAxNTM3LDIxLjYwMzkzNDYiIGlkPSJGaWxsLTUiIGZpbGw9IiMyQzJDMjgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04Ni4wMjY1NzkxLDI4LjIwNzA0MjEgQzg2LjAyNjU3OTEsMjguODk5NjM1NSA4NS44NTM5NDIxLDI5LjEyNjI4NSA4NC43NzM0MTEsMjkuMTk1ODMxOCBDODQuNjE2NTUzNywyOS4yMDU5ODYgODQuNDkzNTA5OSwyOS4zMzk1MjM0IDg0LjQ5MzUwOTksMjkuNTAwNDU3OSBDODQuNDkzNTA5OSwyOS42Njg2NzI5IDg0LjYyNzYzNywyOS44MDU2NTg5IDg0Ljc5Mjc1OTksMjkuODA1NjU4OSBMOTAuMTMxMTY5NSwyOS44MDU2NTg5IEM5MC4yOTM0NzQ2LDI5LjgwNTY1ODkgOTAuNDI1NzIzMiwyOS42NzA3ODA0IDkwLjQyNTcyMzIsMjkuNTA1NDM5MyBDOTAuNDI1NzIzMiwyOS4zNDIyMDU2IDkwLjMwMDk4ODcsMjkuMjA4Mjg1IDkwLjE0MTY4OTMsMjkuMjAwMjM4MyBDODguOTA1OTkxNSwyOS4xMzk2OTYzIDg4LjU4NjI2NTUsMjguOTM1NjU0MiA4OC41ODYyNjU1LDI4LjIwNjg1MDUgTDg4LjU4NjI2NTUsMjAuMjIzMzQ1OCBDODkuNDY0NjY2NywxOC43MzMxNjgyIDkwLjA5NjYwNDUsMTcuOTUzMjEwMyA5MS4xNjI0ODMxLDE3LjcxNzM2NDUgQzkxLjExMDgyMzQsMTcuOTA1Njk2MyA5MS4wNzcwMDk5LDE4LjEzMTU3OTQgOTEuMDc3MDA5OSwxOC4zMTQ3MzgzIEM5MS4wNzcwMDk5LDE5LjI4NDU2MDcgOTEuNzQxNDQ2MywxOS45NjE2MzU1IDkyLjY5MjM1ODgsMTkuOTYxNjM1NSBDOTMuNjI2NTUyMywxOS45NjE2MzU1IDk0LjI3OTE1NCwxOS4yODQ1NjA3IDk0LjI3OTE1NCwxOC4zMTQ3MzgzIEM5NC4yNzkxNTQsMTcuMzk3MjE5NiA5My43MTc0NzMyLDE2LjMyNjA0NjcgOTIuMTM0MjQ3MiwxNi4zMjYwNDY3IEM5MC44MzYxODIyLDE2LjMyNjA0NjcgODkuNTk1NjAwMywxNy4wODQ5Mjk5IDg4LjUzMDY2MSwxOC45MDA4MDg0IEw4OC41MzA2NjEsMTYuODQ3MTY4MiBDODguNTMwNjYxLDE2LjYzNzk1MzMgODguMzYxNDA1NCwxNi40Njk3MzgzIDg4LjE1NjI2OTgsMTYuNDc1MTAyOCBMODQuNzkyNTcyLDE2LjU2NjY4MjIgQzg0LjYyOTcwMzQsMTYuNTcxNDcyIDg0LjUwMjE1MTEsMTYuNzA1MDA5MyA4NC41MDIxNTExLDE2Ljg3MTExNjggTDg0LjUwMjE1MTEsMTYuOTE1NTY1NCBDODQuNTAyMTUxMSwxNy4wNjU5NjI2IDg0LjYwOTYwMzEsMTcuMTk1MDkzNSA4NC43NTE2MjAxLDE3LjIxNTQwMTkgQzg1Ljg3MjkxNTMsMTcuMzc3Njc3NiA4Ni4wMjc1MTg0LDE3LjkyMTc4OTcgODYuMDI2NzY2OSwxOC40ODUyNTIzIEw4Ni4wMjY1NzkxLDI4LjIwNzA0MjEiIGlkPSJGaWxsLTYiIGZpbGw9IiMyQzJDMjgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjIuOTQ2MTAyLDE2LjQ2NjA5ODEgQzEyMy4wMjM4NzMsMTYuNDY2MDk4MSAxMjMuMDk3NTExLDE2LjQ5NjU2MDcgMTIzLjE1MzY3OSwxNi41NTE5Mjk5IEMxMjMuMjEyMjksMTYuNjA5NTk4MSAxMjMuMjQ0Nzg4LDE2LjY4NzE5MTYgMTIzLjI0NTM1MiwxNi43Njk5NTc5IEwxMjMuMjU3Mzc0LDE5LjA0NzM3MzggQzEyMy4yNTczNzQsMTkuMDQ3MzczOCAxMjQuMzUyNzQ2LDE2LjM3NjI0MyAxMjcuOTA4NjE3LDE2LjM3NjI0MyBMMTI3LjkzOTgwMSwxNi4zNzYyNDMgQzEzMC4xNTYyOCwxNi4zNzYyNDMgMTMxLjQyNzQ4MiwxNy44MTc3NTcgMTMxLjQyNzQ4MiwyMC4zMzA2MzU1IEwxMzEuNDI3NDgyLDI4LjE5MzgyMjQgQzEzMS40Mjc0ODIsMjguODg2Nzk5MSAxMzEuNjAwMTE5LDI5LjExMzQ0ODYgMTMyLjY4MDI3NCwyOS4xODI2MTIxIEMxMzIuODM3MzE5LDI5LjE5MjU3NDggMTMyLjk2MDU1MSwyOS4zMjYxMTIxIDEzMi45NjA1NTEsMjkuNDg3MjM4MyBDMTMyLjk2MDU1MSwyOS42NTUyNjE3IDEzMi44MjYyMzYsMjkuNzkyMjQ3NyAxMzIuNjYxMzAxLDI5Ljc5MjI0NzcgTDEyNy44NjU1OTksMjkuNzkyMjQ3NyBDMTI3LjcwMDI4OCwyOS43OTIyNDc3IDEyNy41NjU3ODUsMjkuNjU0ODc4NSAxMjcuNTY1Nzg1LDI5LjQ4NjQ3MiBDMTI3LjU2NTc4NSwyOS4zMjMyMzgzIDEyNy42ODYwMTEsMjkuMTg5ODkyNSAxMjcuODM5Mjk5LDI5LjE3NjQ4MTMgQzEyOC43MTAzNzQsMjkuMTAwNjEyMSAxMjguODQ5NTczLDI4Ljg3NjA3MDEgMTI4Ljg0OTU3MywyOC4xOTM4MjI0IEwxMjguODQ5NTczLDIxLjA5NzM3MzggQzEyOC44NDk1NzMsMTguNzU0MjQzIDEyOC4xOTY0MDgsMTcuODQxNzA1NiAxMjYuNTIwMDA3LDE3Ljg0MTcwNTYgQzEyNS4zODc0NDEsMTcuODQxNzA1NiAxMjQuNDU5NDQ2LDE4Ljg1MDQyMDYgMTIzLjg4MDY3MSwxOS42OTY0NzY2IEMxMjMuODgwNjcxLDE5LjY5NjQ3NjYgMTIzLjU4NTE3OCwyMC4wNzQ2NzI5IDEyMy4yNjQ1MTMsMjAuNzg1NjU4OSBMMTIzLjMwMDAxNywyOC4xOTM0MzkzIEMxMjMuMzAwMDE3LDI4Ljg3NDUzNzQgMTIzLjQzNTQ1OSwyOS4wOTg4ODc5IDEyNC4yODE5MjUsMjkuMTc1NTIzNCBDMTI0LjQzNDY1LDI5LjE4OTMxNzggMTI0LjU1NDUsMjkuMzIyNjYzNiAxMjQuNTU0NSwyOS40NzkxOTE2IEMxMjQuNTU0NSwyOS42NTQ4Nzg1IDEyNC40MTk5OTcsMjkuNzkyMjQ3NyAxMjQuMjU1MDYyLDI5Ljc5MjI0NzcgTDExOS40ODg4NTMsMjkuNzkyMjQ3NyBDMTE5LjMyMzkxOCwyOS43OTIyNDc3IDExOS4xODk2MDMsMjkuNjU1MjYxNyAxMTkuMTg5NjAzLDI5LjQ4NzA0NjcgQzExOS4xODk2MDMsMjkuMzI2MTEyMSAxMTkuMzEyNjQ3LDI5LjE5MjU3NDggMTE5LjQ2OTUwNCwyOS4xODI0MjA2IEMxMjAuNTUwMDM1LDI5LjExMjg3MzggMTIwLjcyMjY3MiwyOC44ODYyMjQzIDEyMC43MjI2NzIsMjguMTkzODIyNCBMMTIwLjcyMjY3MiwxOC40ODcxNjgyIEMxMjAuNzIyNjcyLDE3LjkyMDY0MDIgMTIwLjU2NzMxOCwxNy4zNzM2NTQyIDExOS40NDAxOTksMTcuMjEwNjEyMSBDMTE5LjI5NzYxOSwxNy4xODk5MjA2IDExOS4xODk2MDMsMTcuMDYwNDA2NSAxMTkuMTg5NjAzLDE2LjkwOTI0MyBMMTE5LjE4OTYwMywxNi44NjQ0MTEyIEMxMTkuMTg5NjAzLDE2LjY5NzcyOSAxMTkuMzE4MDk1LDE2LjU2MzQyNTIgMTE5LjQ4MTUyNywxNi41NTg2MzU1IEwxMjIuOTQ2MTAyLDE2LjQ2NjA5ODEiIGlkPSJGaWxsLTciIGZpbGw9IiMyQzJDMjgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC42NzI3NzEyLDIuODAxMDI4MDQgQzM3LjEyNTc4NTMsNy43MTI1OTgxMyAzOS4wOTMzNTg4LDE4LjcyNzAzNzQgMzMuMjEyMDUzNywyOS44NzAwMzI3IEMyOC4wNDMwODc2LDM5LjY2NTU4NDEgMTYuNzU2NDk3Miw0My44NDkxMTY4IDguMzQ2Njg5MjcsMzguODYyMDYwNyBDLTAuMDY0OTk3MTc1MSwzMy44NzQyMzgzIC0xLjcwNjQ1NzYzLDE5Ljk2MDEwMjggMS45MDgyMTE4NiwxMS45NTI4NDExIEM3LjE1NjgyNzY4LDAuMzI2MDg0MTEyIDE5LjMzMzI3ODIsLTIuNjI3MjU3MDEgMjguNjcyNzcxMiwyLjgwMTAyODA0IiBpZD0iRmlsbC04IiBmaWxsPSIjMDA3RTk4Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNzkwODE2NCwzMS44MjMyODA0IEMxNy41MzM0NTc2LDMxLjYxODY2MzYgMTcuMjQ0MTYzOCwzMS40NzgyMjkgMTYuOTUyOTkxNSwzMS40MTg2NDQ5IEMxNi44NTM4MDUxLDMxLjM5OTEwMjggMTYuNzUxOTg4NywzMS4zODc5OTA3IDE2LjY1MTQ4NzMsMzEuMzg3OTkwNyBDMTYuMTAxNjQxMiwzMS4zODc5OTA3IDE1LjU2MjY5MDcsMzEuNjk2NjQwMiAxNS4yMTAwOTA0LDMyLjIxNTA3OTQgQzE0LjkxNTUzNjcsMzIuNjQ1NTc5NCAxNC43OTUxMjI5LDMzLjE1OTk5NTMgMTQuODczMjY5OCwzMy42NTk0NjczIEMxNC45MjI2NzUxLDMzLjk3NzEyMTUgMTUuMDM5NzA3NiwzNC4yNTMzOTI1IDE1LjIxMjE1NjgsMzQuNDU5MzUwNSBDMTUuNDA1ODMzMywzNC42OTIxMzA4IDE1LjcwMjI2NTUsMzQuODY5OTI1MiAxNi4wNjk1MTg0LDM0Ljk3NjY0MDIgQzE2LjI4MTk4MDIsMzUuMDM2Nzk5MSAxNi41MDAwNzc3LDM1LjA2ODYwMjggMTYuNzE3NjExNiwzNS4wNjg2MDI4IEwxNi43MTgxNzUxLDM1LjA2ODYwMjggQzE3LjE5MjUwNDIsMzUuMDY4NjAyOCAxNy42MTkzMDY1LDM0LjkyMzU3MDEgMTcuOTUwODY3MiwzNC42NDkwMjM0IEMxOC4zMzY1Mjk3LDM0LjMyODg3ODUgMTguNTQ2NTQ5NCwzMy44NzE5MzkzIDE4LjU0MTg1MzEsMzMuMzYzMjcxIEMxOC41Mzc1MzI1LDMyLjc2OTcyOSAxOC4yNTY2OTIxLDMyLjE5MzIzODMgMTcuNzkwODE2NCwzMS44MjMyODA0IE0yOC40NzY2NTI1LDExLjI1MTgxNzggQzMwLjEzMTI2MjcsMTMuMDUzNTE4NyAzMC42NDY1NDM4LDE1Ljc4NzY4MjIgMzAuMzU4NzUyOCwxOC4wMjk4NDU4IEMzMC4wMzAwMDk5LDIwLjU4Njc4OTcgMjguNTEwNjU0LDIyLjk1MjcxOTYgMjUuOTgzMDkwNCwyNC41MjE0NDg2IEMyMy45Nzg1MDk5LDI1Ljc2NTQzNDYgMjEuMzQ1MzcyOSwyNi4yNjE4NDExIDE4Ljc1NDMxNSwyNi4yODU0MDY1IEMxOC43MzM2NTExLDI2LjcwNDQxMTIgMTguNjUxNTU5MywyOC4xNDc2NDk1IDE4LjYxMDIzMTYsMjguMzc2MDIzNCBDMTguNTQ5MzY3MiwyOC43MTI2NDQ5IDE4LjQzMzgzNzYsMjguODk0MjcxIDE4LjI5MjM4NDIsMjkuMDgyNzk0NCBDMTguMDE0MTczNywyOS40NTI1NjA3IDE3LjUzMTM5MTIsMjkuNjkxNDcyIDE3LjA1MTk5MDEsMjkuODMwNzU3IEMxNi42NzA4MzYyLDI5Ljk0MTMwMzcgMTYuMjk0MDAyOCwyOS45ODg4MTc4IDE2LjAyNjY4NzksMjkuOTg4ODE3OCBDMTUuOTgxNDE1MywyOS45ODg4MTc4IDE1LjkzNzI2OTgsMjkuOTg2MzI3MSAxNS44OTQwNjM2LDI5Ljk4MDc3MSBDMTUuNjEyMjgzOSwyOS45NDgyMDA5IDE1LjI5OTUwODUsMjkuODEzMTMwOCAxNS4xMDYwMTk4LDI5LjU5Mjk5NTMgQzE0LjkxMjkwNjgsMjkuMzcyODU5OCAxNC44MDMzODg0LDI5LjA5NDQ4MTMgMTQuNzc3ODQwNCwyOC43NzkxMjYyIEwxNC43NTYyMzczLDI4LjQ5NDIzMzYgQzE0LjcwMTM4NDIsMjguMjQ4ODA4NCAxNC40MDExOTQ5LDE1LjgyNDQ2NzMgMTQuNDU5NDI5NCwxNi4wNDU1NjA3IEMxNC41MDI4MjM0LDE0LjU1NjkxNTkgMTYuODU5NDQwNywxNC4yOTcxMjE1IDE4LjEzODE1NjgsMTQuNTU5OTgxMyBDMTkuNDE5NTAyOCwxNC44MjM0MTU5IDE5LjA5NTA4MDUsMTYuNDExMzAzNyAxOS4wNjA1MTU1LDE4LjM2MzAxODcgQzE5LjA2MDUxNTUsMTguMzYzMDE4NyAxOC45OTk2NTExLDIwLjkyOTczMzYgMTguODgxNDkxNSwyMy42NDE4NjQ1IEMyMC41MTI2MjAxLDIzLjU3NjcyNDMgMjEuODA4NjE4NiwyMy4xMDI1NDIxIDIzLjAyMTU4NjIsMjIuNDg3OTI1MiBDMjUuNDcxMTkwNywyMS4yNDk0OTUzIDI2Ljc2Nzc1MjgsMTkuMzQ5ODkyNSAyNi43Njc3NTI4LDE2LjU1MTkyOTkgQzI2Ljc2Nzc1MjgsMTMuNzUzOTY3MyAyNC4wOTY4NTczLDEwLjYyMDUzMjcgMTkuMTcwMDMzOSwxMC42MjA1MzI3IEMxNC4yNDMzOTgzLDEwLjYyMDUzMjcgMTIuMTI4NTQ4LDExLjg4Nzg5MjUgOS43NDMwMDE0MSwxMy45MDA5MTU5IEM5LjIwNTE3Nzk3LDE0LjM1NDU5ODEgOC43OTA5NjE4NiwxNC44MTE5MjA2IDguMzk5MTAwMjgsMTUuMTEyOTA2NSBDOC4wMDc0MjY1NSwxNS40MTQwODQxIDYuOTY3MDk2MDUsMTUuNDYwMDY1NCA2LjY4ODEzNDE4LDE0Ljc1NTU5MzUgQzYuMzUyMDY0OTcsMTMuOTA2MjgwNCA2Ljk4MDA1NzkxLDEyLjk1OTQ0ODYgNy4zNDkwMDE0MSwxMi41MDEzNTk4IEM3LjkyODM0MDQsMTEuNzgyMTM1NSA5LjM1NzUyNjg0LDEwLjMzMzUzMjcgMTAuOTQxMzE2NCw5LjQ5MTg4MzE4IEMxMi43NTU0MTM4LDguNTI2MDg0MTEgMTQuOTc0ODk4Myw3LjQ4NTk0ODYgMTguMDY0NzA2Miw3LjQwNjQzOTI1IEMyMC44NjAxNDgzLDcuMzM0NDAxODcgMjUuMjczNzU3MSw3LjU2NTI2NjM2IDI4LjQ1Mjk4MzEsMTEuMjI3Njc3NiIgaWQ9IkZpbGwtOSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map