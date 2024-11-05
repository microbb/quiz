/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
(0, jquery_1.default)(document).ready(function () {
    document.querySelector('.aQuiz').addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.type && target.type === 'radio') {
            if (target.nextElementSibling.innerHTML.toLowerCase().trim() === 'другое') {
                let input = target.parentElement.nextElementSibling;
                input.style.display = 'block';
                input.focus();
            }
            else {
                let input = target.closest('.aForm__box').querySelector('.aForm__other');
                if (input) {
                    input.value = '';
                    input.style.display = 'none';
                }
            }
        }
        if (target && target.type && target.type === 'checkbox') {
            if (target.nextElementSibling.innerHTML.toLowerCase().trim() === 'другое' && target.checked) {
                let input = target.parentElement.nextElementSibling;
                input.style.display = 'block';
                input.focus();
            }
            if (target.nextElementSibling.innerHTML.toLowerCase().trim() === 'другое' && !target.checked) {
                let input = target.parentElement.nextElementSibling;
                if (input) {
                    input.value = '';
                    input.style.display = 'none';
                }
            }
        }
        if (target && target.tagName && (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea')) {
            let box = target.closest('.aForm__box');
            if (box) {
                box.classList.remove('aForm__box--not-valid');
                box.querySelectorAll('.aForm__item').forEach(elem => elem.classList.remove('aForm__item--not-valid'));
            }
        }
    });
});


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = jQuery;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map