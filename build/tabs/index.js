/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "./src/tabs/edit.js":
/*!**************************!*\
  !*** ./src/tabs/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit),
/* harmony export */   "tabTitleStyle": () => (/* binding */ tabTitleStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/tabs/inspector.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/tabs/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function tabTitleStyle(attributes, state) {
  let activeStyle = {
    padding: `${attributes.tabTitlePadding}px`,
    minWidth: `${attributes.tabTitleWidth}px`
  };
  let inactiveStyle = {
    padding: `${attributes.tabTitlePadding}px`,
    width: `${attributes.tabTitleWidth}px`
  };
  switch (attributes.tabStyle) {
    case "Tabbed":
      if (state === "active") {
        activeStyle["backgroundColor"] = attributes.activeBGColor;
        activeStyle["color"] = attributes.activeColor;
        activeStyle["borderRadius"] = attributes.borderRadius;
        activeStyle["backgroundColor"] = attributes.activeBGColor;
        activeStyle["color"] = attributes.activeColor;
        return activeStyle;
      } else {
        inactiveStyle["backgroundColor"] = attributes.inactiveBGColor;
        inactiveStyle["color"] = attributes.inactiveColor;
        return inactiveStyle;
      }
      break;
    case "Lined":
      if (state === "active") {
        const borderString = `${attributes.activeBorder.width} ${attributes.activeBorder.style} ${attributes.activeBorder.color || attributes.activeColor}`;
        activeStyle["borderRadius"] = attributes.borderRadius;
        activeStyle[`border${attributes.strokePosition}`] = borderString;
        return activeStyle;
      } else {
        const borderString = `${attributes.inactiveBorder.width} ${attributes.inactiveBorder.style} ${attributes.inactiveBorder.color || attributes.inactiveColor}`;
        inactiveStyle[`border${attributes.strokePosition}`] = borderString;
        return inactiveStyle;
      }
      break;
    default:
      break;
  }
}
function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId,
    block,
    getBlock,
    getSelectedBlock,
    updateBlockAttributes,
    insertBlock,
    insertAfterBlock,
    removeBlock,
    moveBlockToPosition,
    selectBlock,
    replaceInnerBlocks,
    getBlockType,
    createBlock
  } = _ref;
  const tabTitles = attributes.tabTitles;
  const activeTab = attributes.activeTab;
  function getTabTitles() {
    console.log("block", block, "block.innerBlocks", block.innerBlocks[block.innerBlocks.length - 1]);
    updateBlockOrder();
  }
  function updateTabTitlesInput(newTitle, index) {
    const newTabTitles = tabTitles.map(title => title);
    newTabTitles[index] = newTitle;
    setAttributes({
      tabTitles: newTabTitles
    });
    console.log("new title", newTitle);
  }
  function onClickTabTitle(titleIndex) {
    setAttributes({
      activeTab: titleIndex
    });
    console.log("activeTab", activeTab);
  }
  function addTab() {
    const newTabTitles = tabTitles.map(title => title);
    newTabTitles[newTabTitles.length] = "";
    setAttributes({
      tabTitles: newTabTitles
    });
    replaceInnerBlocks(block.clientId, [...block.innerBlocks, createBlock("block-salad/tab-content", {
      display: "block",
      index: newTabTitles.length - 1
    })]);
    setAttributes({
      activeTab: newTabTitles.length - 1
    });
    updateBlockOrder();
  }
  function updateBlockOrder() {
    setAttributes({
      blockOrder: block.innerBlocks.map(block => block.attributes.index)
    });
    console.log("new blockOrder", block.innerBlocks.map(block => block.attributes.index));
  }
  function removeTab(targetIndex) {
    const newTabTitles = tabTitles.filter((title, index) => index !== targetIndex);
    setAttributes({
      tabTitles: newTabTitles
    });
    removeBlock(block.innerBlocks[targetIndex].clientId);
    block.innerBlocks.forEach((innerBlock, newIndex) => {
      if (newIndex > targetIndex) updateBlockAttributes(innerBlock.clientId, {
        index: newIndex - 1
      });
      console.log("innerBlock", innerBlock);
    });
    setAttributes({
      activeTab: newTabTitles.length - 1
    });
    updateBlockOrder();
  }
  function shiftRight(targetIndex) {
    let newTabTitles = tabTitles;
    newTabTitles = (0,array_move__WEBPACK_IMPORTED_MODULE_4__.arrayMoveImmutable)(newTabTitles, targetIndex, targetIndex + 1);
    setAttributes({
      tabTitles: newTabTitles
    });
    setAttributes({
      activeTab: targetIndex + 1
    });
    block.innerBlocks.forEach(innerBlock => {
      if (innerBlock.attributes.index === targetIndex) {
        updateBlockAttributes(innerBlock.clientId, {
          index: innerBlock.attributes.index += 1
        });
      } else if (innerBlock.attributes.index === targetIndex + 1) {
        updateBlockAttributes(innerBlock.clientId, {
          index: innerBlock.attributes.index -= 1
        });
      }
    });
    updateBlockOrder();
  }
  function shiftLeft(targetIndex) {
    let newTabTitles = tabTitles;
    newTabTitles = (0,array_move__WEBPACK_IMPORTED_MODULE_4__.arrayMoveImmutable)(newTabTitles, targetIndex, targetIndex - 1);
    setAttributes({
      tabTitles: newTabTitles
    });
    block.innerBlocks.forEach(innerBlock => {
      if (innerBlock.attributes.index === targetIndex) {
        updateBlockAttributes(innerBlock.clientId, {
          index: innerBlock.attributes.index -= 1
        });
        console.log("end not reach -1");
      } else if (innerBlock.attributes.index === targetIndex - 1) {
        updateBlockAttributes(innerBlock.clientId, {
          index: innerBlock.attributes.index += 1
        });
      }
    });
    setAttributes({
      activeTab: targetIndex - 1
    });
    updateBlockOrder();
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-salad-tabs-container",
    style: {
      gap: `${attributes.majorGap}px`,
      flexDirection: `${attributes.orientation === "Horizontal" ? "column" : "row"}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    onClick: getTabTitles
  }, "Get titles"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `block-salad-tab-titles-container`,
    style: {
      justifyContent: attributes.tabPosition,
      gap: `${attributes.minorGap}px`,
      flexDirection: `${attributes.orientation === "Horizontal" ? "row" : "column"}`
    }
  }, tabTitles.map((title, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-salad-tab-title",
    style: index === activeTab ? tabTitleStyle(attributes, "active") : tabTitleStyle(attributes, "inactive")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: title,
    placeholder: "Enter Title",
    onChange: value => updateTabTitlesInput(value, index),
    tagName: "p",
    onClick: () => onClickTabTitle(index)
  }), index === activeTab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " ", index !== 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-arrow-up-alt shift-tab-left block-salad-admin-icons ",
    onClick: () => shiftLeft(index),
    style: {
      cursor: "pointer"
    }
  }), tabTitles.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    onClick: () => removeTab(index),
    style: {
      color: "red",
      cursor: "pointer"
    },
    className: "dashicons dashicons-minus block-salad-admin-icons remove-tab"
  }), index !== tabTitles.length - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-arrow-up-alt shift-tab-right block-salad-admin-icons ",
    onClick: () => shiftRight(index),
    style: {
      cursor: "pointer"
    }
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    onClick: addTab,
    style: {
      cursor: "pointer"
    },
    className: "block-salad-admin-icons"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-salad-tab-content-container",
    style: {
      backgroundColor: attributes.tabStyle == "Tabbed" && attributes.activeBGColor,
      ...(attributes.tabStyle === "Tabbed" && {
        color: attributes.activeColor
      }),
      padding: `${attributes.tabContentPadding}px`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ["block-salad/tab-content"],
    template: [["block-salad/tab-content"]],
    renderAppender: false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }));
}

/***/ }),

/***/ "./src/tabs/index.js":
/*!***************************!*\
  !*** ./src/tabs/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/tabs/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/tabs/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/tabs/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_7__.name, {
  /**
   * @see ./edit.js
   */
  edit: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, ownProps) => {
    const {
      getBlock,
      getSelectedBlock
    } = select("core/block-editor") || select("core/editor");
    const {
      getBlockType
    } = select("core/blocks");
    return {
      block: getBlock(ownProps.clientId),
      selectedBlock: getSelectedBlock(),
      getBlock,
      getSelectedBlock,
      createBlock: _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock,
      getBlockType
    };
  }), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(dispatch => {
    const {
      updateBlockAttributes,
      insertBlock,
      removeBlock,
      moveBlockToPosition,
      selectBlock,
      insertBlocks,
      replaceInnerBlocks
    } = dispatch("core/block-editor") || dispatch("core/editor");
    return {
      updateBlockAttributes,
      insertBlock,
      removeBlock,
      moveBlockToPosition,
      selectBlock,
      insertBlocks,
      replaceInnerBlocks
    };
  })])(_edit__WEBPACK_IMPORTED_MODULE_5__["default"]),
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/tabs/inspector.js":
/*!*******************************!*\
  !*** ./src/tabs/inspector.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  function setTabPosition(value) {
    setAttributes({
      tabPosition: value
    });
    console.log("tabPosition", value);
  }
  const tabColors = [{
    value: attributes.activeColor,
    onChange: value => setAttributes({
      activeColor: value
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Text Color")
  }, {
    value: attributes.inactiveColor,
    onChange: value => setAttributes({
      inactiveColor: value
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inactive Text Color")
  }, {
    value: attributes.activeBGColor,
    onChange: value => setAttributes({
      activeBGColor: value
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Background Color")
  }, {
    value: attributes.inactiveBGColor,
    onChange: value => setAttributes({
      inactiveBGColor: value
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inactive Background Color")
  }];
  function setTabStyle(value) {
    setAttributes({
      tabStyle: value
    });
    console.log("tabStyle", value);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "General Settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    direction: "column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    options: ["Horizontal", "Vertical"].map(a => ({
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(a),
      label: a
    })),
    onChange: value => setAttributes({
      orientation: value
    }),
    value: attributes.orientation,
    label: "Orientation"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    options: ["Tabbed", "Lined"].map(a => ({
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(a),
      label: a
    })),
    onChange: setTabStyle,
    value: attributes.tabStyle,
    label: "Tab Style"
  }), attributes.tabStyle === "Lined" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    options: ["Left", "Top", "Right", "Bottom"].map(a => ({
      value: a,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(a)
    })),
    onChange: value => setAttributes({
      strokePosition: value
    }),
    value: attributes.strokePosition,
    label: "Stroke Position:"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    value: {
      color: attributes.activeBorder.color || attributes.activeColor,
      style: attributes.activeBorder.style,
      width: attributes.activeBorder.width
    },
    enableAlpha: true,
    label: "Active Liner",
    onChange: value => setAttributes({
      activeBorder: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    value: {
      color: attributes.inactiveBorder.color || attributes.inactiveColor,
      style: attributes.inactiveBorder.style,
      width: attributes.inactiveBorder.width
    },
    enableAlpha: true,
    label: "Inactive Liner",
    onChange: value => setAttributes({
      inactiveBorder: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    options: [{
      value: "flex-start",
      label: "Start"
    }, {
      value: "center",
      label: "Center"
    }, {
      value: "flex-end",
      label: "End"
    }],
    onChange: setTabPosition,
    value: attributes.tabPosition,
    label: "Justify: "
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    suffix: "px",
    onChange: value => setAttributes({
      tabTitleWidth: value
    }),
    value: attributes.tabTitleWidth,
    label: "Tab Title Width",
    labelPosition: "top"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    type: "number",
    label: "Tab Title Margin",
    onChange: value => setAttributes({
      minorGap: value
    }),
    labelPosition: "side",
    value: attributes.minorGap,
    suffix: "px"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    type: "number",
    label: "Tab Title Padding",
    onChange: value => setAttributes({
      tabTitlePadding: value
    }),
    labelPosition: "side",
    value: attributes.tabTitlePadding,
    suffix: "px"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Colors"),
    initialOpen: true,
    colorSettings: tabColors
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "More"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    direction: "column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    type: "number",
    label: "Tab Content Padding",
    onChange: value => setAttributes({
      tabContentPadding: value
    }),
    labelPosition: "side",
    value: attributes.tabContentPadding,
    suffix: "px"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
    type: "number",
    label: "Tab - Content Margin",
    onChange: value => {
      setAttributes({
        majorGap: value
      });
    },
    value: attributes.majorGap,
    labelPosition: "side",
    suffix: "px"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/tabs/save.js":
/*!**************************!*\
  !*** ./src/tabs/save.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/tabs/edit.js");

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save(_ref) {
  let {
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-salad-tabs-container",
    "data-attributes": JSON.stringify(attributes),
    style: {
      gap: `${attributes.majorGap}px`,
      flexDirection: `${attributes.orientation === "Horizontal" ? "column" : "row"}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-salad-tab-titles-container",
    style: {
      justifyContent: attributes.tabPosition,
      gap: `${attributes.minorGap}px`,
      flexDirection: `${attributes.orientation === "Horizontal" ? "row" : "column"}`
    }
  }, attributes.tabTitles.map((title, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: title,
    className: "block-salad-tab-title",
    "data-titleIndex": index,
    tagName: "p",
    style: index === attributes.activeTab ? (0,_edit__WEBPACK_IMPORTED_MODULE_2__.tabTitleStyle)(attributes, "active") : (0,_edit__WEBPACK_IMPORTED_MODULE_2__.tabTitleStyle)(attributes, "inactive")
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-salad-tab-content-container",
    style: {
      ...(attributes.tabStyle === 'Tabbed' && {
        color: attributes.activeColor,
        backgroundColor: attributes.activeBGColor
      }),
      padding: `${attributes.tabContentPadding}px`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/tabs/editor.scss":
/*!******************************!*\
  !*** ./src/tabs/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/tabs/style.scss":
/*!*****************************!*\
  !*** ./src/tabs/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayMoveImmutable": () => (/* binding */ arrayMoveImmutable),
/* harmony export */   "arrayMoveMutable": () => (/* binding */ arrayMoveMutable)
/* harmony export */ });
function arrayMoveMutable(array, fromIndex, toIndex) {
	const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

		const [item] = array.splice(fromIndex, 1);
		array.splice(endIndex, 0, item);
	}
}

function arrayMoveImmutable(array, fromIndex, toIndex) {
	array = [...array];
	arrayMoveMutable(array, fromIndex, toIndex);
	return array;
}


/***/ }),

/***/ "./src/tabs/block.json":
/*!*****************************!*\
  !*** ./src/tabs/block.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"block-salad/tabs","version":"0.1.0","title":"tabs","keywords":["Block Salad","tabs"],"category":"blocksalad","icon":"table-row-after","description":"Example block scaffolded with Create Block tool.","attributes":{"tabTitles":{"type":"array","default":[""]},"activeTab":{"type":"number","default":0},"orientation":{"type":"string","default":"Horizontal"},"tabTitleWidth":{"type":"number","default":100},"tabStyle":{"type":"string","default":"Tabbed"},"blockOrder":{"type":"array","default":[0]},"activeColor":{"type":"string","default":"#000000"},"inactiveColor":{"type":"string","default":"#7e7e7e"},"activeBGColor":{"type":"string","default":"#fafafa"},"inactiveBGColor":{"type":"string","default":"#eeeeee"},"tabTitlePadding":{"type":"number","default":16},"tabContentPadding":{"type":"number","default":16},"majorGap":{"type":"string","default":"0"},"minorGap":{"type":"string","default":"0"},"activeBorder":{"type":"object","default":{"style":"solid","width":"4px"}},"inactiveBorder":{"type":"object","default":{"style":"solid","width":"1px"}},"borderRadius":{"type":"string","default":"0"},"strokePosition":{"type":"string","default":"Top"},"tabPosition":{"type":"string","default":"flex-start"}},"providesContext":{"block-salad/activeTab":"activeTab"},"supports":{"html":false},"textdomain":"block-salad","editorScript":"file:./index.js","viewScript":"file:./frontend.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"tabs/index": 0,
/******/ 			"tabs/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkblock_salad"] = globalThis["webpackChunkblock_salad"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tabs/style-index"], () => (__webpack_require__("./src/tabs/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map