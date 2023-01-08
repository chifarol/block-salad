/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs/frontend.scss":
/*!********************************!*\
  !*** ./src/tabs/frontend.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/tabs/frontend.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend.scss */ "./src/tabs/frontend.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




const divsToUpdate = document.querySelectorAll(".block-salad-tabs-container");
divsToUpdate.forEach(div => {
  let currentIndex = 0;
  const attributes = JSON.parse(div.dataset.attributes);
  const blockOrder = attributes.blockOrder;
  console.log("attributes", attributes);
  const tabTitles = div.querySelectorAll(".block-salad-tab-title");
  const innerBlocks = div.querySelectorAll(".block-salad-tab-content-container .block-salad-tab-content");
  tabTitles.forEach((title, index) => {
    title.addEventListener("click", () => updateTabContent(index));
    title.style["cursor"] = `pointer`;
  });
  function tabTitleStyle(attributes, state, style) {
    style["padding"] = `${attributes.tabTitlePadding}px`;
    // style["cursor"]= `pointer`;

    switch (attributes.tabStyle) {
      case "Tabbed":
        if (state === "active") {
          style["backgroundColor"] = attributes.activeBGColor;
          style["color"] = attributes.activeColor;
          style["borderRadius"] = attributes.borderRadius;
          style["backgroundColor"] = attributes.activeBGColor;
          style["color"] = attributes.activeColor;
        } else {
          style["backgroundColor"] = attributes.inactiveBGColor;
          style["color"] = attributes.inactiveColor;
          return style;
        }
        break;
      case "Lined":
        if (state === "active") {
          const borderString = `${attributes.activeBorder.width} ${attributes.activeBorder.style} ${attributes.activeBorder.color || attributes.activeColor}`;
          style["borderRadius"] = attributes.borderRadius;
          style[`border${attributes.strokePosition}`] = borderString;
        } else {
          const borderString = `${attributes.inactiveBorder.width} ${attributes.inactiveBorder.style} ${attributes.inactiveBorder.color || attributes.inactiveColor}`;
          style[`border${attributes.strokePosition}`] = borderString;
        }
        break;
      default:
        break;
    }
  }
  const updateTabContent = currentIndex => {
    tabTitles.forEach((title, index) => {
      if (index == currentIndex) {
        tabTitleStyle(attributes, "active", title.style);
        console.dir(title.style);
      } else {
        tabTitleStyle(attributes, "inactive", title.style);
      }
    });
    let mainIndex = blockOrder.findIndex(index => index === currentIndex);
    innerBlocks.forEach((innerBlock, index) => {
      if (mainIndex !== index) {
        innerBlock.style.display = "none";
      } else {
        innerBlock.style.display = "block";
      }
    });
  };
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map