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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* Colors */\\r\\n  --color-grey-50: #fafafa;\\r\\n  --color-grey-500: #9e9e9e;\\r\\n  --color-grey-800: #424242;\\r\\n  --color-grey-900: #212121;\\r\\n  --color-bluegrey-900: #263238;\\r\\n  --color-background: var(--color-grey-900);\\r\\n  --color-foreground: var(--color-grey-50);\\r\\n\\r\\n  /* Spacing */\\r\\n  --spacing-half: 4px;\\r\\n  --spacing-1: 8px;\\r\\n  --spacing-2: 16px;\\r\\n  --spacing-3: 24px;\\r\\n  --spacing-4: 32px;\\r\\n\\r\\n  /* Font Size */\\r\\n  --fs-small: 0.8em;\\r\\n  --fs-medium: 1em;\\r\\n}\\r\\n\\r\\n.m-t-4 {\\r\\n  margin-top: var(--spacing-4);\\r\\n}\\r\\n\\r\\n.d-n-i {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  min-height: 100%;\\r\\n  margin: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  font-family: Verdana, sans-serif;\\r\\n  color: var(--color-foreground);\\r\\n  background: var(--color-background);\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3 {\\r\\n  font-family: Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.text--small {\\r\\n  font-size: var(--fs-small);\\r\\n}\\r\\n\\r\\n.form-field {\\r\\n  margin: var(--spacing-1) 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.form-field label {\\r\\n  font-size: var(--fs-small);\\r\\n}\\r\\n\\r\\n#content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n#canvas {\\r\\n  border: 1px solid var(--color-grey-800);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#settings {\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n#settings #settings-form {\\r\\n  display: flex;\\r\\n  align-items: flex-start;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n#settings .settings-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#settings .settings-section h3 {\\r\\n  font-size: var(--fs-medium);\\r\\n  margin-bottom: var(--spacing-1);\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n  padding: var(--spacing-3);\\r\\n}\\r\\n\\r\\n#footer a {\\r\\n  color: var(--color-grey-500);\\r\\n  padding: var(--spacing-1);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cellular-automata/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cellular-automata/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cellular-automata/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cellular-automata/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cellular-automata/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cellular-automata/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cellular-automata/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cellular-automata/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cellular-automata/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cellular-automata/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _automata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./automata */ \"./src/automata.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    const settingsForm = document.getElementById(\"settings-form\");\r\n\r\n    const changeField = (obj, field, value) => {\r\n      if (obj[field] === value) {\r\n        return false;\r\n      }\r\n\r\n      obj[field] = value;\r\n      return true;\r\n    };\r\n\r\n    const changeForm = (form, element, value, select, set) => {\r\n      if (!select) {\r\n        select = (element) => {\r\n          element.value;\r\n        };\r\n      }\r\n\r\n      if (!set) {\r\n        set = (element, value) => {\r\n          element.value = value;\r\n        };\r\n      }\r\n\r\n      const elementValue = select(form.elements[element]);\r\n      if (elementValue === value) {\r\n        return false;\r\n      }\r\n\r\n      set(form.elements[element], value);\r\n    };\r\n\r\n    this.config = {\r\n      automata: {\r\n        setInputCells: (value) => {\r\n          if (changeField(this.config.automata, \"inputCells\", value)) {\r\n            changeForm(\r\n              settingsForm,\r\n              \"rule-id\",\r\n              _automata__WEBPACK_IMPORTED_MODULE_0__.Automata.getRulesCount(this.config.automata),\r\n              (element) => element.getAttribute(\"max\"),\r\n              (element, value) => element.setAttribute(\"max\", value)\r\n            );\r\n          }\r\n\r\n          changeForm(settingsForm, \"input-cells\", value);\r\n        },\r\n\r\n        setBase: (value) => {\r\n          if (changeField(this.config.automata, \"base\", value)) {\r\n            changeForm(\r\n              settingsForm,\r\n              \"rule-id\",\r\n              _automata__WEBPACK_IMPORTED_MODULE_0__.Automata.getRulesCount(this.config.automata),\r\n              (element) => element.getAttribute(\"max\"),\r\n              (element, value) => element.setAttribute(\"max\", value)\r\n            );\r\n            this.config.setRandomRule(true);\r\n          }\r\n\r\n          changeForm(settingsForm, \"base\", value);\r\n        },\r\n\r\n        setRuleId: (value) => {\r\n          changeField(this.config.automata, \"ruleId\", value);\r\n          changeForm(settingsForm, \"rule-id\", value);\r\n        },\r\n      },\r\n\r\n      display: {\r\n        setSize: (value) => {\r\n          changeField(this.config.display, \"size\", value);\r\n          changeForm(settingsForm, \"size\", value);\r\n        },\r\n        setZoom: (value) => {\r\n          changeField(this.config.display, \"zoom\", value);\r\n          changeForm(settingsForm, \"zoom\", value);\r\n        },\r\n        colors: _display__WEBPACK_IMPORTED_MODULE_1__.Display.getRandomColors(),\r\n      },\r\n\r\n      setRandomRule: (value) => {\r\n        changeField(this.config, \"randomRule\", value);\r\n        changeForm(\r\n          settingsForm,\r\n          \"random-rule\",\r\n          value,\r\n          (element) => element.checked,\r\n          (element, value) => (element.checked = value)\r\n        );\r\n        changeForm(\r\n          settingsForm,\r\n          \"rule-id\",\r\n          value,\r\n          (element) => element.disabled,\r\n          (element, value) => (element.disabled = value)\r\n        );\r\n      },\r\n\r\n      setInputStyle: (value) => {\r\n        changeField(this.config, \"inputStyle\", value);\r\n        changeForm(settingsForm, \"input-style\", value);\r\n      },\r\n\r\n      setEnableScroll: (value) => {\r\n        changeField(this.config, \"enableScroll\", value);\r\n        changeForm(\r\n          settingsForm,\r\n          \"enable-scroll\",\r\n          value,\r\n          (element) => element.checked,\r\n          (element, value) => (element.checked = value)\r\n        );\r\n      },\r\n    };\r\n\r\n    // Init select\r\n    const inputStyleSelect = settingsForm.elements[\"input-style\"];\r\n    Object.entries(_automata__WEBPACK_IMPORTED_MODULE_0__.InputStyle).forEach(([_, value]) => {\r\n      const option = document.createElement(\"option\");\r\n      option.value = value;\r\n      option.innerHTML = value;\r\n      inputStyleSelect.appendChild(option);\r\n    });\r\n\r\n    // Default config\r\n    this.config.automata.setBase(3);\r\n    this.config.automata.setInputCells(3);\r\n    this.config.display.setSize(360);\r\n    this.config.display.setZoom(2);\r\n    this.config.setRandomRule(true);\r\n    this.config.setInputStyle(_automata__WEBPACK_IMPORTED_MODULE_0__.InputStyle.shuffleEven);\r\n    this.config.setEnableScroll(false);\r\n\r\n    settingsForm.addEventListener(\"change\", () => {\r\n      this.config.automata.setBase(settingsForm.elements[\"base\"].value);\r\n      this.config.automata.setInputCells(\r\n        settingsForm.elements[\"input-cells\"].value\r\n      );\r\n      this.config.automata.setRuleId(settingsForm.elements[\"rule-id\"].value);\r\n\r\n      this.config.display.setSize(settingsForm.elements[\"size\"].value);\r\n      this.config.display.setZoom(settingsForm.elements[\"zoom\"].value);\r\n\r\n      this.config.setRandomRule(settingsForm.elements[\"random-rule\"].checked);\r\n      this.config.setInputStyle(settingsForm.elements[\"input-style\"].value);\r\n      this.config.setEnableScroll(\r\n        settingsForm.elements[\"enable-scroll\"].checked\r\n      );\r\n    });\r\n\r\n    this.generate();\r\n  }\r\n\r\n  generate() {\r\n    if (this.scrollAnimation) {\r\n      cancelAnimationFrame(this.scrollAnimation);\r\n    }\r\n\r\n    if (this.config.randomRule) {\r\n      this.config.automata.setRuleId(\r\n        _automata__WEBPACK_IMPORTED_MODULE_0__.Automata.getRandomRule(this.config.automata)\r\n      );\r\n    }\r\n\r\n    this.config.display.colors = _display__WEBPACK_IMPORTED_MODULE_1__.Display.getRandomColors();\r\n    const automata = new _automata__WEBPACK_IMPORTED_MODULE_0__.Automata(this.config.automata);\r\n    const display = new _display__WEBPACK_IMPORTED_MODULE_1__.Display(this.config.display);\r\n    if (this.config.enableScroll) {\r\n      this.scrollGenerate(automata, display);\r\n    } else {\r\n      this.instantGenerate(automata, display);\r\n    }\r\n  }\r\n\r\n  instantGenerate(automata, display) {\r\n    let row = automata.getInputRow(\r\n      this.config.inputStyle,\r\n      this.config.display.size\r\n    );\r\n    display.drawRow(0, row);\r\n    for (let i = 1; i < this.config.display.size; i++) {\r\n      row = automata.invoke(row);\r\n      display.drawRow(i, row);\r\n    }\r\n  }\r\n\r\n  scrollGenerate(automata, display) {\r\n    let row = automata.getInputRow(\r\n      this.config.inputStyle,\r\n      this.config.display.size\r\n    );\r\n    display.drawRow(0, row);\r\n\r\n    let rowIndex = 0;\r\n    const scroll = () => {\r\n      if (rowIndex < this.config.display.size - 1) {\r\n        rowIndex++;\r\n      } else {\r\n        display.shiftUp(1);\r\n      }\r\n      row = automata.invoke(row);\r\n      display.drawRow(rowIndex, row);\r\n\r\n      this.scrollAnimation = requestAnimationFrame(scroll);\r\n    };\r\n\r\n    scroll();\r\n  }\r\n\r\n  handleToggleSettings() {\r\n    const settingsSection = document.getElementById(\"settings\");\r\n    settingsSection.classList.toggle(\"d-n-i\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cellular-automata/./src/app.js?");

/***/ }),

/***/ "./src/automata.js":
/*!*************************!*\
  !*** ./src/automata.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Automata\": () => (/* binding */ Automata),\n/* harmony export */   \"InputStyle\": () => (/* binding */ InputStyle)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\nconst InputStyle = {\r\n  centerDot: \"center-dot\",\r\n  even: \"even\",\r\n  shuffleEven: \"shuffle-even\",\r\n  random: \"random\",\r\n};\r\n\r\nclass Automata {\r\n  constructor(conf) {\r\n    if (conf.base < 2 || 8 < conf.base) {\r\n      throw \"Invalid Input\";\r\n    }\r\n    const rulesCount = Math.pow(conf.base, conf.inputCells);\r\n    if (Math.pow(conf.base, rulesCount) < conf.ruleId) {\r\n      throw \"Invalid Input\";\r\n    }\r\n    const rulesArray = new Array(rulesCount);\r\n    let convert = conf.ruleId;\r\n    for (let i = 0; i < rulesCount; i++) {\r\n      rulesArray[i] = convert % conf.base;\r\n      convert = parseInt(convert / conf.base);\r\n    }\r\n\r\n    this.base = conf.base;\r\n    this.inputCells = conf.inputCells;\r\n    this.rules = rulesArray;\r\n  }\r\n\r\n  invoke(input) {\r\n    const size = input.length;\r\n    const output = new Array(size);\r\n    for (let i = 0; i < size; i++) {\r\n      let ruleId = 0;\r\n      for (let j = 0; j < this.inputCells; j++) {\r\n        let inputIndex = i + j - parseInt(this.inputCells / 2);\r\n        if (inputIndex < 0) {\r\n          inputIndex = size + inputIndex;\r\n        }\r\n        if (size <= inputIndex) {\r\n          inputIndex = inputIndex - size;\r\n        }\r\n        ruleId = ruleId * this.base + input[inputIndex];\r\n      }\r\n      output[i] = this.rules[ruleId];\r\n    }\r\n    return output;\r\n  }\r\n\r\n  getInputRow(inputType, size) {\r\n    size = parseInt(size);\r\n\r\n    const centerDot = () => {\r\n      const result = new Array(size).fill(0);\r\n      result[parseInt(size / 2)] = 1;\r\n      return result;\r\n    };\r\n\r\n    const even = () => {\r\n      let result = [];\r\n      let baseLeft = this.base;\r\n      let sizeLeft = size;\r\n      while (0 < baseLeft) {\r\n        const tmpSize = parseInt(sizeLeft / baseLeft);\r\n        baseLeft--;\r\n        result = result.concat(new Array(tmpSize).fill(baseLeft));\r\n        sizeLeft -= tmpSize;\r\n      }\r\n      return result;\r\n    };\r\n\r\n    const shuffleEven = () => {\r\n      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)(even());\r\n    };\r\n\r\n    const random = () => {\r\n      const result = new Array(size).fill(0);\r\n      for (let i = 0; i < size; i++) {\r\n        result[i] = Math.floor(Math.random() * this.base);\r\n      }\r\n      return result;\r\n    };\r\n\r\n    switch (inputType) {\r\n      case InputStyle.centerDot:\r\n        return centerDot();\r\n      case InputStyle.even:\r\n        return even();\r\n      case InputStyle.shuffleEven:\r\n        return shuffleEven();\r\n      default:\r\n        return random();\r\n    }\r\n  }\r\n\r\n  static getRandomRule(conf) {\r\n    return Math.floor(Math.random() * Automata.getRulesCount(conf));\r\n  }\r\n\r\n  static getRulesCount(conf) {\r\n    return Math.pow(conf.base, Math.pow(conf.base, conf.inputCells));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cellular-automata/./src/automata.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nclass Display {\r\n  constructor(conf) {\r\n    this.size = conf.size;\r\n    this.zoom = conf.zoom;\r\n    this.colors = conf.colors;\r\n\r\n    this.canvas = document.getElementById(\"canvas\");\r\n    this.canvas.height = this.size * this.zoom;\r\n    this.canvas.width = this.size * this.zoom;\r\n    this.context = this.canvas.getContext(\"2d\");\r\n  }\r\n\r\n  drawRow(rowIndex, row) {\r\n    const y = rowIndex * this.zoom;\r\n    for (let i = 0; i < row.length; i++) {\r\n      const x = i * this.zoom;\r\n      this.context.fillStyle = this.colors[row[i]];\r\n      this.context.fillRect(x, y, this.zoom, this.zoom);\r\n    }\r\n  }\r\n\r\n  shiftUp(rowsCount) {\r\n    const imageData = this.context.getImageData(\r\n      0,\r\n      rowsCount * this.zoom,\r\n      this.canvas.height,\r\n      this.canvas.width\r\n    );\r\n    this.context.putImageData(imageData, 0, 0);\r\n  }\r\n\r\n  static getRandomColors() {\r\n    const colors = [\r\n      \"#FAFAFA\", // black\r\n      \"#212121\", // white\r\n      \"#F44336\", // red\r\n      \"#4CAF50\", // green\r\n      \"#2196F3\", // blue\r\n      \"#FFEB3B\", // yellow\r\n      \"#9C27B0\", // purple\r\n      \"#00BCD4\", // cyan\r\n    ];\r\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffle)(colors);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cellular-automata/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n// eslint-disable-next-line no-unused-vars\r\n\r\n\r\nconst app = new _app__WEBPACK_IMPORTED_MODULE_0__.App();\r\nwindow.app = app;\r\n\n\n//# sourceURL=webpack://cellular-automata/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle)\n/* harmony export */ });\nfunction shuffle(array) {\r\n  let m = array.length;\r\n  let t;\r\n  let i;\r\n\r\n  // While there remain elements to shuffle…\r\n  while (m) {\r\n    // Pick a remaining element…\r\n    i = Math.floor(Math.random() * m--);\r\n\r\n    // And swap it with the current element.\r\n    t = array[m];\r\n    array[m] = array[i];\r\n    array[i] = t;\r\n  }\r\n\r\n  return array;\r\n}\r\n\n\n//# sourceURL=webpack://cellular-automata/./src/utils.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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