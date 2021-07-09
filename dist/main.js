/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web_template/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web_template/./src/scss/style.scss?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("\n\njQuery(function() {\n  jQuery('a[href^=\"#\"]').on('click', function(){\n    var speed = 300;\n    var href= jQuery(this).attr(\"href\");\n    var target = jQuery(href == \"#\" || href == \"\" ? 'html' : href);\n    var position = target.offset().top;\n    jQuery(\"html, body\").animate({scrollTop:position}, speed, \"swing\");\n    return false;\n  });\n\n  // ヘッダースクロール時固定\n  let _window = jQuery(window),\n  _header = jQuery(\".header\"),\n  heroBottom;\n\n  _window.on(\"scroll\", function () {\n    heroBottom = 94;\n    if (_window.scrollTop() > heroBottom) {\n      _header.addClass(\"-fixed\");\n    } else {\n      if (!(jQuery(\"#trigger\").hasClass(\"active\"))) {\n        _header.removeClass(\"-fixed\");\n      }\n    }\n  });\n\n  // タブレットの時はPC版縮小表示\n  let ua = navigator.userAgent;\n  if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){\n      jQuery('head').prepend('<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">');\n  } else {\n      jQuery('head').prepend('<meta name=\"viewport\" content=\"width=1440\">');\n  }\n\n  // spメニューOPEN\n  jQuery(\".header__trigger\").on('click', function() {\n    if ((jQuery(this)).hasClass(\"-opened\")) {\n      jQuery(\".header__hammenuWrapper\").fadeOut(300);\n    } else {\n      jQuery(\".header__hammenuWrapper\").fadeIn(300);\n      jQuery(\".header__hammenuWrapper\").css('display', 'flex');\n    }\n    if (!(jQuery(\"#header\").hasClass(\"-fixed\"))) {\n      jQuery(\".header\").addClass('-fixed');\n    } else {\n      if (_window.scrollTop() < 94) {\n        jQuery(\"header\").removeClass(\"-fixed\");\n      }\n    }\n    jQuery(this).toggleClass('-opened')\n    jQuery(\".header__trigger\").toggleClass('active');\n  });\n\n  // fadein\n  jQuery(function () {\n    jQuery(window).scroll(function () {\n      jQuery(\".fadein\").each(function () {\n        var elemPos = jQuery(this).offset().top;\n        var scroll = jQuery(window).scrollTop();\n        var windowHeight = jQuery(window).height();\n        if (scroll > elemPos - windowHeight + 100) {\n          jQuery(this).addClass(\"scrollin\");\n        }\n      });\n    });\n    jQuery(window).scroll();\n  });\n})\n\n//# sourceURL=webpack://web_template/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _assets_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/main.js */ \"./src/assets/js/main.js\");\n/* harmony import */ var _assets_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://web_template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;