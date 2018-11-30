/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail */ "./mail.js");
 window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a; window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    window.location.replace("/#👻")
    Object(_mail__WEBPACK_IMPORTED_MODULE_1__["default"])();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.container-hero').css('display', 'none');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.container-hero').fadeIn(3000);

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.split(' ').find(w => w.toLowerCase() === 'mobile'));
    };

    if (!isMobileDevice()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('mobile')
    }

    //Responsive Nav 
    let nToggle = '#nav-toggle', nav = '#nav', no = 'nav-open';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(nToggle).click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(nToggle).hasClass('is-active') ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(nToggle).removeClass('is-active') : jquery__WEBPACK_IMPORTED_MODULE_0___default()(nToggle).addClass('is-active')
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(nav).hasClass(no)) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(nav).animate({ height: 0 }, 300);
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(nav).removeClass(no).removeAttr('style');
            }, 320);
        }
        else {
            let navH = jquery__WEBPACK_IMPORTED_MODULE_0___default()(nav).css('height', 'auto').height();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(nav).height(0).animate({ height: navH }, 300);
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(nav).addClass(no).removeAttr('style');
            }, 320);
        }
    });

    // Defaults
    let _buffer = null,
        _watch = [],
        $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),
        Plugin = function () { }
        ;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.expr[":"].hasClassStartingWith = function (el, i, selector) {
        let re = new RegExp("\\b" + selector[3]);
        return re.test(el.className);
    };

    Plugin.prototype = {
        globals: {
            pluginName: "fadeThis",
            bufferTime: 300,
        },
        defaults: {
            baseName: "slide-",
            speed: 500,
            speed1: 300,
            easing: "swing",
            offset: 0,
            reverse: true,
            distance: 30,
            scrolledIn: null,
            scrolledOut: null
        },
        init: function (elem, options) {
            this.addElements(elem, options);

            this._setEvent();
            this._checkVisibleElements();
        },
        addElements: function (elem, options) {
            let element = elem === document.body ? window : elem,
                $element = element === window ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("body") : jquery__WEBPACK_IMPORTED_MODULE_0___default()(element),
                base = this,
                classBaseName = (options && options.baseName) ? options.baseName : this.defaults.baseName
                ;

            if (!$element.is(":hasClassStartingWith('" + classBaseName + "')")) {

                $element.find(":hasClassStartingWith('" + classBaseName + "')").each(function () {
                    base._addElement(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), options);
                });
            } else {
                base._addElement($element, options);
            }

            return $element;
        },
        _addElement: function ($elem, options) {
            let metadata = $elem.data("plugin-options"),
                localOptions = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.defaults, options, metadata),
                item = {
                    element: $elem,
                    options: localOptions,
                    invp: false
                }
                ;

            _watch.push(item);

            this._prepareElement(item);

            return $elem;
        },
        _prepareElement: function (item) {
            let cssOptionsIn = {
                opacity: 0,
                visibility: "visible",
                position: "relative"
            },
                direction = null
                ;

            if (item.element.hasClass(item.options.baseName + "right")) {
                direction = "left";
            } else if (item.element.hasClass(item.options.baseName + "left")) {
                direction = "right";
            } else if (item.element.hasClass(item.options.baseName + "top")) {
                direction = "bottom";
            } else if (item.element.hasClass(item.options.baseName + "bottom")) {
                direction = "top";
            } else {
                return false;
            }

            cssOptionsIn[direction] = item.options.distance;

            item.element.css(cssOptionsIn);
        },
        _setEvent: function () {
            let base = this;

            $window.on("scroll", function (e) {
                if (!_buffer) {
                    _buffer = setTimeout(function () {
                        base._checkVisibleElements(e);
                        _buffer = null;
                    }, base.globals.bufferTime);
                }
            });
        },
        _checkVisibleElements: function (e) {
            let base = this;

            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(_watch, function (key, item) {
                if (base._isVisible(item)) {
                    if (!item.invp) {
                        item.invp = true;
                        base._triggerFading(item);
                        if (item.options.scrolledIn) {
                            item.options.scrolledIn.call(item.element, e);
                        }
                        item.element.trigger("fadethisscrolledin", e);
                    }
                } else if (item.invp) {
                    item.invp = false;
                    if (item.options.reverse) {
                        base._triggerFading(item, false);
                    }
                    if (item.options.scrolledOut) {
                        item.options.scrolledOut.call(item.element, e);
                    }
                    item.element.trigger("fadethisscrolledout", e);
                }
            });
        },
        _isVisible: function (item) {
            let docViewTop = $window.scrollTop() + item.options.offset,
                docViewBottom = docViewTop + $window.height() - 2 * item.options.offset,
                elemTop = item.element.offset().top,
                elemBottom = elemTop + item.element.height()
                ;

            return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        },
        _triggerFading: function (item, appear) {
            appear = typeof appear !== "undefined" ? appear : true;

            let stateAnimIn = {
                opacity: 1
            },
                stateAnimOut = {
                    opacity: 0,
                },
                direction = null
                ;

            if (item.element.hasClass(item.options.baseName + "right")) {
                direction = "left";
            } else if (item.element.hasClass(item.options.baseName + "left")) {
                direction = "right";
            } else {
                return false;
            }

            stateAnimIn[direction] = 0;
            stateAnimOut[direction] = item.options.distance;


            if (appear) {
                item.element.stop(true).animate(stateAnimIn, item.options.speed1, item.options.easing);
            } else {
                item.element.stop(true).animate(stateAnimOut, item.options.speed, item.options.easing);
            }
        }
    };

    Plugin.defaults = Plugin.prototype.defaults;
    Plugin.globals = Plugin.prototype.globals;

    window.Plugin = new Plugin();

    // Preventing against multiple instantiations for the same DOM element
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[Plugin.globals.pluginName] = function (options) {
        this.each(function () {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(window, "plugin_" + Plugin.globals.pluginName)) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(window, "plugin_" + Plugin.globals.pluginName, "set");
                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this, "plugin_" + Plugin.globals.pluginName, window.Plugin.init(this, options));
            } else if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this, "plugin_" + Plugin.globals.pluginName)) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this, "plugin_" + Plugin.globals.pluginName, window.Plugin.addElements(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).fadeThis();


    let within = 0;
    let wasWithin = null;

    let tops = [
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="about"]').position().top,
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="work"]').position().top,
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="contact"]').position().top,
    ];

    function followMenu() {
        let top = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
        for (let i = 0; i < tops.length; i++) {
            if (top < tops[i] && top > 0) {
                within = i - 1;
                break;
            } else if (top > tops[i] && i == tops.length - 1) {
                within = tops.length - 1;
            }
        }
        if (within !== wasWithin) {
            $menuItems.removeClass('active').eq(within).addClass('active');
            wasWithin = within;
        }
    }

    function setTops() {
        tops = [
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="about"]').position().top,
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="work"]').position().top,
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="contact"]').position().top,
        ];
    }

    let $menuItems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-item');

    $menuItems.click(function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nav-toggle').removeClass('is-active')
        const n = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nav')
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).hasClass('nav-open')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).animate({ height: 0 })
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).removeClass('nav-open')
        }
        let $section = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-section="' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-control') + '"]');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').animate({
            scrollTop: $section.find('[data-here]').position().top - window.innerHeight * 0.15
        }, '500', 'swing', function () { });
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(followMenu);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(setTops);

    followMenu();
})


/***/ }),

/***/ "./mail.js":
/*!*****************!*\
  !*** ./mail.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sendMail = () => {
    const form = document.querySelector('form');
    const mailResponse = document.querySelector('#mail-response');

    form.onsubmit = e => {
        e.preventDefault();

        const data = {};
        const formElements = Array.from(form);
        formElements.map(input => (data[input.name] = input.value));

        // console.log(JSON.stringify(data));

        let xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(data));

        xhr.onloadend = async response => {
            if (response.target.status === 200) {
                await form.reset();
                mailResponse.innerHTML = '<i class="fas fa-check"></i>&nbsp;&nbsp;Thanks for the message!';
                mailResponse.className = "form-control mail-response show";

                //remove class after 3 seconds
                setTimeout(function () {
                    mailResponse.className = mailResponse.className.replace("show", "");
                    mailResponse.innerHTML = '';
                }, 3000);
            } else {
                mailResponse.innerHTML = 'Something went wrong';
                console.error(JSON.parse(response.target.response).message);
            }
        };
    };
};
/* harmony default export */ __webpack_exports__["default"] = (sendMail);


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXVCLGlCQUFpQiw2Q0FBQyxDQUFDLFlBQVksNkNBQUM7QUFDekI7O0FBRTlCLDZDQUFDO0FBQ0Q7QUFDQSxJQUFJLHFEQUFRO0FBQ1osSUFBSSw2Q0FBQztBQUNMLElBQUksNkNBQUM7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw2Q0FBQztBQUNUOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZDQUFDO0FBQ0wsUUFBUSw2Q0FBQyxrQ0FBa0MsNkNBQUMscUNBQXFDLDZDQUFDO0FBQ2xGLFlBQVks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VDtBQUNBLFNBQVMsK0JBQStCLEVBQUU7QUFDMUMsS0FBSzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0wsSUFBSSw2Q0FBQzs7QUFFTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxUkQ7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCwrREFBK0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE1BQU07QUFDbEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7OztBQ3JDeEIsd0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7IHdpbmRvdy5qUXVlcnkgPSAkOyB3aW5kb3cuJCA9ICQ7XG5pbXBvcnQgc2VuZE1haWwgZnJvbSAnLi9tYWlsJztcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvI/CfkbtcIilcbiAgICBzZW5kTWFpbCgpO1xuICAgICQoJy5jb250YWluZXItaGVybycpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgJCgnLmNvbnRhaW5lci1oZXJvJykuZmFkZUluKDMwMDApO1xuXG4gICAgZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuc3BsaXQoJyAnKS5maW5kKHcgPT4gdy50b0xvd2VyQ2FzZSgpID09PSAnbW9iaWxlJykpO1xuICAgIH07XG5cbiAgICBpZiAoIWlzTW9iaWxlRGV2aWNlKCkpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGUnKVxuICAgIH1cblxuICAgIC8vUmVzcG9uc2l2ZSBOYXYgXG4gICAgbGV0IG5Ub2dnbGUgPSAnI25hdi10b2dnbGUnLCBuYXYgPSAnI25hdicsIG5vID0gJ25hdi1vcGVuJztcbiAgICAkKG5Ub2dnbGUpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChuVG9nZ2xlKS5oYXNDbGFzcygnaXMtYWN0aXZlJykgPyAkKG5Ub2dnbGUpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKSA6ICQoblRvZ2dsZSkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgIGlmICgkKG5hdikuaGFzQ2xhc3Mobm8pKSB7XG4gICAgICAgICAgICAkKG5hdikuYW5pbWF0ZSh7IGhlaWdodDogMCB9LCAzMDApO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChuYXYpLnJlbW92ZUNsYXNzKG5vKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgfSwgMzIwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYXZIID0gJChuYXYpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICQobmF2KS5oZWlnaHQoMCkuYW5pbWF0ZSh7IGhlaWdodDogbmF2SCB9LCAzMDApO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChuYXYpLmFkZENsYXNzKG5vKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgfSwgMzIwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVmYXVsdHNcbiAgICBsZXQgX2J1ZmZlciA9IG51bGwsXG4gICAgICAgIF93YXRjaCA9IFtdLFxuICAgICAgICAkd2luZG93ID0gJCh3aW5kb3cpLFxuICAgICAgICBQbHVnaW4gPSBmdW5jdGlvbiAoKSB7IH1cbiAgICAgICAgO1xuXG4gICAgJC5leHByW1wiOlwiXS5oYXNDbGFzc1N0YXJ0aW5nV2l0aCA9IGZ1bmN0aW9uIChlbCwgaSwgc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBzZWxlY3RvclszXSk7XG4gICAgICAgIHJldHVybiByZS50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUgPSB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHBsdWdpbk5hbWU6IFwiZmFkZVRoaXNcIixcbiAgICAgICAgICAgIGJ1ZmZlclRpbWU6IDMwMCxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGJhc2VOYW1lOiBcInNsaWRlLVwiLFxuICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgIHNwZWVkMTogMzAwLFxuICAgICAgICAgICAgZWFzaW5nOiBcInN3aW5nXCIsXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICByZXZlcnNlOiB0cnVlLFxuICAgICAgICAgICAgZGlzdGFuY2U6IDMwLFxuICAgICAgICAgICAgc2Nyb2xsZWRJbjogbnVsbCxcbiAgICAgICAgICAgIHNjcm9sbGVkT3V0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKGVsZW0sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLl9zZXRFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tWaXNpYmxlRWxlbWVudHMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRWxlbWVudHM6IGZ1bmN0aW9uIChlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW0gPT09IGRvY3VtZW50LmJvZHkgPyB3aW5kb3cgOiBlbGVtLFxuICAgICAgICAgICAgICAgICRlbGVtZW50ID0gZWxlbWVudCA9PT0gd2luZG93ID8gJChcImJvZHlcIikgOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNsYXNzQmFzZU5hbWUgPSAob3B0aW9ucyAmJiBvcHRpb25zLmJhc2VOYW1lKSA/IG9wdGlvbnMuYmFzZU5hbWUgOiB0aGlzLmRlZmF1bHRzLmJhc2VOYW1lXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBpZiAoISRlbGVtZW50LmlzKFwiOmhhc0NsYXNzU3RhcnRpbmdXaXRoKCdcIiArIGNsYXNzQmFzZU5hbWUgKyBcIicpXCIpKSB7XG5cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5maW5kKFwiOmhhc0NsYXNzU3RhcnRpbmdXaXRoKCdcIiArIGNsYXNzQmFzZU5hbWUgKyBcIicpXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBiYXNlLl9hZGRFbGVtZW50KCQodGhpcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXNlLl9hZGRFbGVtZW50KCRlbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBfYWRkRWxlbWVudDogZnVuY3Rpb24gKCRlbGVtLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgbWV0YWRhdGEgPSAkZWxlbS5kYXRhKFwicGx1Z2luLW9wdGlvbnNcIiksXG4gICAgICAgICAgICAgICAgbG9jYWxPcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMsIG1ldGFkYXRhKSxcbiAgICAgICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAkZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBpbnZwOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIF93YXRjaC5wdXNoKGl0ZW0pO1xuXG4gICAgICAgICAgICB0aGlzLl9wcmVwYXJlRWxlbWVudChpdGVtKTtcblxuICAgICAgICAgICAgcmV0dXJuICRlbGVtO1xuICAgICAgICB9LFxuICAgICAgICBfcHJlcGFyZUVsZW1lbnQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgY3NzT3B0aW9uc0luID0ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5lbGVtZW50Lmhhc0NsYXNzKGl0ZW0ub3B0aW9ucy5iYXNlTmFtZSArIFwicmlnaHRcIikpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lbGVtZW50Lmhhc0NsYXNzKGl0ZW0ub3B0aW9ucy5iYXNlTmFtZSArIFwibGVmdFwiKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lbGVtZW50Lmhhc0NsYXNzKGl0ZW0ub3B0aW9ucy5iYXNlTmFtZSArIFwidG9wXCIpKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5lbGVtZW50Lmhhc0NsYXNzKGl0ZW0ub3B0aW9ucy5iYXNlTmFtZSArIFwiYm90dG9tXCIpKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjc3NPcHRpb25zSW5bZGlyZWN0aW9uXSA9IGl0ZW0ub3B0aW9ucy5kaXN0YW5jZTtcblxuICAgICAgICAgICAgaXRlbS5lbGVtZW50LmNzcyhjc3NPcHRpb25zSW4pO1xuICAgICAgICB9LFxuICAgICAgICBfc2V0RXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBiYXNlID0gdGhpcztcblxuICAgICAgICAgICAgJHdpbmRvdy5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghX2J1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBfYnVmZmVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLl9jaGVja1Zpc2libGVFbGVtZW50cyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9idWZmZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LCBiYXNlLmdsb2JhbHMuYnVmZmVyVGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIF9jaGVja1Zpc2libGVFbGVtZW50czogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBiYXNlID0gdGhpcztcblxuICAgICAgICAgICAgJC5lYWNoKF93YXRjaCwgZnVuY3Rpb24gKGtleSwgaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChiYXNlLl9pc1Zpc2libGUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmludnApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW52cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLl90cmlnZ2VyRmFkaW5nKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucy5zY3JvbGxlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcHRpb25zLnNjcm9sbGVkSW4uY2FsbChpdGVtLmVsZW1lbnQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5lbGVtZW50LnRyaWdnZXIoXCJmYWRldGhpc3Njcm9sbGVkaW5cIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaW52cCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmludnAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLl90cmlnZ2VyRmFkaW5nKGl0ZW0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5vcHRpb25zLnNjcm9sbGVkT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMuc2Nyb2xsZWRPdXQuY2FsbChpdGVtLmVsZW1lbnQsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZWxlbWVudC50cmlnZ2VyKFwiZmFkZXRoaXNzY3JvbGxlZG91dFwiLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgX2lzVmlzaWJsZTogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBkb2NWaWV3VG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKSArIGl0ZW0ub3B0aW9ucy5vZmZzZXQsXG4gICAgICAgICAgICAgICAgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyAkd2luZG93LmhlaWdodCgpIC0gMiAqIGl0ZW0ub3B0aW9ucy5vZmZzZXQsXG4gICAgICAgICAgICAgICAgZWxlbVRvcCA9IGl0ZW0uZWxlbWVudC5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICAgICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBpdGVtLmVsZW1lbnQuaGVpZ2h0KClcbiAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIHJldHVybiAoKGVsZW1Cb3R0b20gPj0gZG9jVmlld1RvcCkgJiYgKGVsZW1Ub3AgPD0gZG9jVmlld0JvdHRvbSkgJiYgKGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gZG9jVmlld1RvcCkpO1xuICAgICAgICB9LFxuICAgICAgICBfdHJpZ2dlckZhZGluZzogZnVuY3Rpb24gKGl0ZW0sIGFwcGVhcikge1xuICAgICAgICAgICAgYXBwZWFyID0gdHlwZW9mIGFwcGVhciAhPT0gXCJ1bmRlZmluZWRcIiA/IGFwcGVhciA6IHRydWU7XG5cbiAgICAgICAgICAgIGxldCBzdGF0ZUFuaW1JbiA9IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXRlQW5pbU91dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmVsZW1lbnQuaGFzQ2xhc3MoaXRlbS5vcHRpb25zLmJhc2VOYW1lICsgXCJyaWdodFwiKSkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmVsZW1lbnQuaGFzQ2xhc3MoaXRlbS5vcHRpb25zLmJhc2VOYW1lICsgXCJsZWZ0XCIpKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlQW5pbUluW2RpcmVjdGlvbl0gPSAwO1xuICAgICAgICAgICAgc3RhdGVBbmltT3V0W2RpcmVjdGlvbl0gPSBpdGVtLm9wdGlvbnMuZGlzdGFuY2U7XG5cblxuICAgICAgICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICAgICAgICAgIGl0ZW0uZWxlbWVudC5zdG9wKHRydWUpLmFuaW1hdGUoc3RhdGVBbmltSW4sIGl0ZW0ub3B0aW9ucy5zcGVlZDEsIGl0ZW0ub3B0aW9ucy5lYXNpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmVsZW1lbnQuc3RvcCh0cnVlKS5hbmltYXRlKHN0YXRlQW5pbU91dCwgaXRlbS5vcHRpb25zLnNwZWVkLCBpdGVtLm9wdGlvbnMuZWFzaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4uZGVmYXVsdHMgPSBQbHVnaW4ucHJvdG90eXBlLmRlZmF1bHRzO1xuICAgIFBsdWdpbi5nbG9iYWxzID0gUGx1Z2luLnByb3RvdHlwZS5nbG9iYWxzO1xuXG4gICAgd2luZG93LlBsdWdpbiA9IG5ldyBQbHVnaW4oKTtcblxuICAgIC8vIFByZXZlbnRpbmcgYWdhaW5zdCBtdWx0aXBsZSBpbnN0YW50aWF0aW9ucyBmb3IgdGhlIHNhbWUgRE9NIGVsZW1lbnRcbiAgICAkLmZuW1BsdWdpbi5nbG9iYWxzLnBsdWdpbk5hbWVdID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHdpbmRvdywgXCJwbHVnaW5fXCIgKyBQbHVnaW4uZ2xvYmFscy5wbHVnaW5OYW1lKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh3aW5kb3csIFwicGx1Z2luX1wiICsgUGx1Z2luLmdsb2JhbHMucGx1Z2luTmFtZSwgXCJzZXRcIik7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgUGx1Z2luLmdsb2JhbHMucGx1Z2luTmFtZSwgd2luZG93LlBsdWdpbi5pbml0KHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoISQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIFBsdWdpbi5nbG9iYWxzLnBsdWdpbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsIFwicGx1Z2luX1wiICsgUGx1Z2luLmdsb2JhbHMucGx1Z2luTmFtZSwgd2luZG93LlBsdWdpbi5hZGRFbGVtZW50cyh0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoYWluIGpRdWVyeSBmdW5jdGlvbnNcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgICQod2luZG93KS5mYWRlVGhpcygpO1xuXG5cbiAgICBsZXQgd2l0aGluID0gMDtcbiAgICBsZXQgd2FzV2l0aGluID0gbnVsbDtcblxuICAgIGxldCB0b3BzID0gW1xuICAgICAgICAkKCdbZGF0YS1zZWN0aW9uPVwiYWJvdXRcIl0nKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgJCgnW2RhdGEtc2VjdGlvbj1cIndvcmtcIl0nKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgJCgnW2RhdGEtc2VjdGlvbj1cImNvbnRhY3RcIl0nKS5wb3NpdGlvbigpLnRvcCxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gZm9sbG93TWVudSgpIHtcbiAgICAgICAgbGV0IHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9wIDwgdG9wc1tpXSAmJiB0b3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgd2l0aGluID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvcCA+IHRvcHNbaV0gJiYgaSA9PSB0b3BzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB3aXRoaW4gPSB0b3BzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpdGhpbiAhPT0gd2FzV2l0aGluKSB7XG4gICAgICAgICAgICAkbWVudUl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5lcSh3aXRoaW4pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHdhc1dpdGhpbiA9IHdpdGhpbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRvcHMoKSB7XG4gICAgICAgIHRvcHMgPSBbXG4gICAgICAgICAgICAkKCdbZGF0YS1zZWN0aW9uPVwiYWJvdXRcIl0nKS5wb3NpdGlvbigpLnRvcCxcbiAgICAgICAgICAgICQoJ1tkYXRhLXNlY3Rpb249XCJ3b3JrXCJdJykucG9zaXRpb24oKS50b3AsXG4gICAgICAgICAgICAkKCdbZGF0YS1zZWN0aW9uPVwiY29udGFjdFwiXScpLnBvc2l0aW9uKCkudG9wLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGxldCAkbWVudUl0ZW1zID0gJCgnLm5hdi1pdGVtJyk7XG5cbiAgICAkbWVudUl0ZW1zLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJyNuYXYtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgIGNvbnN0IG4gPSAkKCcjbmF2JylcbiAgICAgICAgaWYgKCQobikuaGFzQ2xhc3MoJ25hdi1vcGVuJykpIHtcbiAgICAgICAgICAgICQobikuYW5pbWF0ZSh7IGhlaWdodDogMCB9KVxuICAgICAgICAgICAgJChuKS5yZW1vdmVDbGFzcygnbmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICAgIGxldCAkc2VjdGlvbiA9ICQoJ1tkYXRhLXNlY3Rpb249XCInICsgJCh0aGlzKS5hdHRyKCdkYXRhLWNvbnRyb2wnKSArICdcIl0nKTtcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICRzZWN0aW9uLmZpbmQoJ1tkYXRhLWhlcmVdJykucG9zaXRpb24oKS50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjE1XG4gICAgICAgIH0sICc1MDAnLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7IH0pO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmb2xsb3dNZW51KTtcbiAgICAkKHdpbmRvdykucmVzaXplKHNldFRvcHMpO1xuXG4gICAgZm9sbG93TWVudSgpO1xufSlcbiIsImNvbnN0IHNlbmRNYWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY29uc3QgbWFpbFJlc3BvbnNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haWwtcmVzcG9uc2UnKTtcblxuICAgIGZvcm0ub25zdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtKTtcbiAgICAgICAgZm9ybUVsZW1lbnRzLm1hcChpbnB1dCA9PiAoZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlKSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oZm9ybS5tZXRob2QsIGZvcm0uYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgeGhyLm9ubG9hZGVuZCA9IGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS50YXJnZXQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgbWFpbFJlc3BvbnNlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT4mbmJzcDsmbmJzcDtUaGFua3MgZm9yIHRoZSBtZXNzYWdlISc7XG4gICAgICAgICAgICAgICAgbWFpbFJlc3BvbnNlLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sIG1haWwtcmVzcG9uc2Ugc2hvd1wiO1xuXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgY2xhc3MgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haWxSZXNwb25zZS5jbGFzc05hbWUgPSBtYWlsUmVzcG9uc2UuY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBtYWlsUmVzcG9uc2UuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haWxSZXNwb25zZS5pbm5lckhUTUwgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5wYXJzZShyZXNwb25zZS50YXJnZXQucmVzcG9uc2UpLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgc2VuZE1haWw7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9