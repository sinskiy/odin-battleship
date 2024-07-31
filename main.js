/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  color-scheme: light dark;
  --background: #101417;
  --surface: #1c2024;
  --surface-high: #282a2f;
  --text: #e2e2e9;
  --primary: #aac7ff;
  --on-primary: #0b305f;
  --secondary: #ddbce0;
  --border: #8b9198;
}

body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--background);
}

.boards {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.board {
  border: 0.25rem solid var(--border);
  border-radius: 1rem;

  padding: 1rem;
}

.column {
  display: flex;
}

.cell {
  position: relative;

  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--surface);
  border-radius: 0.5rem;
  margin: 1px;

  transition: background-color 100ms;
}
.computer .cell:hover {
  opacity: 0.7;
}

.player .ship {
  background-color: var(--primary);
}

.shot::after {
  content: "";
  display: block;

  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--text);
  border-radius: 9999px;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.shot.ship::after {
  background-color: red;
}
.computer .sunk {
  background-color: var(--secondary);
}

h2 {
  margin: 0;
}

dialog[open] {
  font: inherit;

  padding: 2rem;

  border: none;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

button {
  font: inherit;
  font-weight: 500;

  padding: 0.5rem 4rem;
  width: 100%;

  border: none;
  background-color: var(--primary);
  color: var(--on-primary);
  border-radius: 9999px;
}
button:disabled {
  opacity: 0.5;
}
button:focus-visible {
  outline: 1px solid var(--primary);
}
.secondary {
  width: fit-content;
  padding: 1rem;

  background-color: transparent;
  color: var(--text);
}

.ships-container {
  display: flex;
  gap: 2rem;
  padding: 1rem;
}

.ship-container {
  display: flex;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE;;;;;;;;;;;cAWY;;EAEZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,cAAc;EACd,gCAAgC;EAChC,qBAAqB;EACrB,WAAW;;EAEX,kCAAkC;AACpC;AACA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,cAAc;;EAEd,aAAa;EACb,cAAc;EACd,6BAA6B;EAC7B,qBAAqB;;EAErB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kCAAkC;AACpC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;;EAEb,aAAa;;EAEb,YAAY;EACZ,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,oBAAoB;EACpB,WAAW;;EAEX,YAAY;EACZ,gCAAgC;EAChC,wBAAwB;EACxB,qBAAqB;AACvB;AACA;EACE,YAAY;AACd;AACA;EACE,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,aAAa;;EAEb,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,cAAc;AAChB","sourcesContent":[":root {\n  color-scheme: light dark;\n  --background: #101417;\n  --surface: #1c2024;\n  --surface-high: #282a2f;\n  --text: #e2e2e9;\n  --primary: #aac7ff;\n  --on-primary: #0b305f;\n  --secondary: #ddbce0;\n  --border: #8b9198;\n}\n\nbody {\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    \"Open Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: var(--background);\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  gap: 4rem;\n}\n\n.board {\n  border: 0.25rem solid var(--border);\n  border-radius: 1rem;\n\n  padding: 1rem;\n}\n\n.column {\n  display: flex;\n}\n\n.cell {\n  position: relative;\n\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: var(--surface);\n  border-radius: 0.5rem;\n  margin: 1px;\n\n  transition: background-color 100ms;\n}\n.computer .cell:hover {\n  opacity: 0.7;\n}\n\n.player .ship {\n  background-color: var(--primary);\n}\n\n.shot::after {\n  content: \"\";\n  display: block;\n\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: var(--text);\n  border-radius: 9999px;\n\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%);\n}\n.shot.ship::after {\n  background-color: red;\n}\n.computer .sunk {\n  background-color: var(--secondary);\n}\n\nh2 {\n  margin: 0;\n}\n\ndialog[open] {\n  font: inherit;\n\n  padding: 2rem;\n\n  border: none;\n  border-radius: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nbutton {\n  font: inherit;\n  font-weight: 500;\n\n  padding: 0.5rem 4rem;\n  width: 100%;\n\n  border: none;\n  background-color: var(--primary);\n  color: var(--on-primary);\n  border-radius: 9999px;\n}\nbutton:disabled {\n  opacity: 0.5;\n}\nbutton:focus-visible {\n  outline: 1px solid var(--primary);\n}\n.secondary {\n  width: fit-content;\n  padding: 1rem;\n\n  background-color: transparent;\n  color: var(--text);\n}\n\n.ships-container {\n  display: flex;\n  gap: 2rem;\n  padding: 1rem;\n}\n\n.ship-container {\n  display: flex;\n}\n\n.name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 1rem 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGameDOM),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   setComputerTurn: () => (/* binding */ setComputerTurn)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameboardEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardEvents */ "./src/gameboardEvents.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ "./src/random.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _shipsDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipsDOM */ "./src/shipsDOM.js");






const root = document.querySelector("#root");

let player, computer;
let computerTurn = false;
const setComputerTurn = (newTurn) => {
  computerTurn = newTurn;
};
function createGameDOM(
  playerPassed = player,
  computerPassed = computer,
) {
  root.innerHTML = "";

  player = playerPassed;
  computer = computerPassed;

  const ships = (0,_shipsDOM__WEBPACK_IMPORTED_MODULE_4__.createShipsDOM)(player.board);

  const boards = document.createElement("div");
  boards.classList.add("boards");

  const board1 = boardToDOM(player);
  const board2 = boardToDOM(computer);
  boards.append(board1, board2);

  const randomizeButton = createRandomizeButton();
  const resetButton = createResetButton();
  const toggleAxisButton = createToggleAxisButton();

  root.append(ships, boards, randomizeButton, resetButton, toggleAxisButton);
}

function boardToDOM(newPlayer) {
  const boardContainer = document.createElement("div");

  const name = document.createElement("div");
  name.classList.add("name");

  const h2 = document.createElement("h2");
  h2.textContent =
    newPlayer.type === "player"
      ? (localStorage.getItem("name") ?? "player")
      : "computer";
  h2.contentEditable = true;
  h2.addEventListener("input", () =>
    localStorage.setItem("name", h2.textContent),
  );
  name.appendChild(h2);

  boardContainer.appendChild(name);

  const DOMBoard = document.createElement("div");
  DOMBoard.classList.add("board", newPlayer.type);

  const { ships, shots } = newPlayer.board;
  for (let i = 0; i < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; i++) {
    const column = ships[i];
    const boardColumn = document.createElement("div");
    boardColumn.classList.add("column");
    for (let j = 0; j < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; j++) {
      const wasShot = shots[i][j];

      const cell = column[j];
      const boardCell = document.createElement("div");
      boardCell.classList.add("cell");

      addRowVisualHelpers(cell, boardCell, wasShot);

      const shipsAmount = getTotal(player.board.placedShips);
      const neededShips = getTotal(_gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.SHIPS);
      if (shipsAmount === neededShips && newPlayer.type === "computer") {
        waitForClick(boardCell, shots, i, j);
      }

      boardColumn.appendChild(boardCell);
    }

    DOMBoard.appendChild(boardColumn);
  }
  boardContainer.appendChild(DOMBoard);

  return boardContainer;
}

function createRandomizeButton() {
  const button = document.createElement("button");
  button.classList.add("secondary");
  button.textContent = "randomize 🔀";
  button.addEventListener("click", () => {
    (0,_random__WEBPACK_IMPORTED_MODULE_2__.randomize)(player.board);
    createGameDOM();
  });
  button.disabled = player.board.shots.flat().filter((x) => x).length > 0;
  return button;
}

function createResetButton() {
  const button = document.createElement("button");
  button.classList.add("secondary");
  button.textContent = "reset ⟲";
  button.addEventListener("click", () => (0,_gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.restartGame)());
  return button;
}

function createToggleAxisButton() {
  const button = document.createElement("button");
  button.classList.add("secondary");
  button.textContent =
    root.dataset.horizontal === "false"
      ? "place horizontally"
      : "place vertically";

  root.dataset.horizontal ??= "true";

  button.addEventListener("click", () => {
    const next = root.dataset.horizontal !== "true";
    button.textContent = !next ? "place horizontally" : "place vertically";
    root.dataset.horizontal = next;
  });
  return button;
}

function waitForClick(boardCell, shots, i, j) {
  boardCell.addEventListener("click", () => {
    if (shots[i][j] === true || computerTurn) return;

    (0,_gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.handlePlayerTurn)(computer.board, i, j);
    (0,_gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.handleComputerTurn)(player.board);
  });
}

function addRowVisualHelpers(cell, boardCell, wasShot) {
  if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    boardCell.classList.add("ship");
    if (cell.isSunk()) boardCell.classList.add("sunk");
  }
  wasShot === true && boardCell.classList.add("shot");
}

function getTotal(array) {
  return array.reduce((sum, curr) => sum + curr, 0);
}


/***/ }),

/***/ "./src/createGame.js":
/*!***************************!*\
  !*** ./src/createGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGame)
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./src/random.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



function createGame() {
  const player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("player");
  const computer = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]("computer");
  (0,_random__WEBPACK_IMPORTED_MODULE_0__.randomize)(computer.board);
  return { player, computer };
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOARD_SIZE: () => (/* binding */ BOARD_SIZE),
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const BOARD_SIZE = 10;

class Gameboard {
  constructor() {
    // create 2d arrays where each item is unique
    this.ships = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
    this.shots = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE));
    this.placedShips = [0, 0, 0, 0, 0];
    this.sankShips = 0;
  }
  place(x, y, length, horizontal = true) {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    if (horizontal) {
      const xEnd = x + length;
      for (let i = x; i < xEnd; i++) {
        this.ships[i][y] = ship;
      }
    } else {
      const yEnd = y + length;
      for (let i = y; i < yEnd; i++) {
        this.ships[x][i] = ship;
      }
    }

    this.placedShips[length - 1]++;
  }
  receiveAttack(x, y) {
    this.shots[x][y] = true;

    const ship = this.ships[x][y];
    if (!ship) return;

    ship.hits++;

    if (ship.isSunk()) this.sankShips++;
  }
  allSunk() {
    const shipsAmount = this.placedShips.reduce((sum, curr) => sum + curr, 0);
    return shipsAmount === this.sankShips;
  }
}


/***/ }),

/***/ "./src/gameboardEvents.js":
/*!********************************!*\
  !*** ./src/gameboardEvents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHIPS: () => (/* binding */ SHIPS),
/* harmony export */   endGame: () => (/* binding */ endGame),
/* harmony export */   handleComputerTurn: () => (/* binding */ handleComputerTurn),
/* harmony export */   handlePlayerTurn: () => (/* binding */ handlePlayerTurn),
/* harmony export */   restartGame: () => (/* binding */ restartGame)
/* harmony export */ });
/* harmony import */ var _createGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGame */ "./src/createGame.js");
/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ "./src/createDOM.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ "./src/random.js");




function handlePlayerTurn(board, i, j) {
  board.receiveAttack(i, j);
  if (board.allSunk()) {
    endGame("computer");
  }
  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

function handleComputerTurn(board) {
  const [randomX, randomY] = (0,_random__WEBPACK_IMPORTED_MODULE_2__.randomCord)();

  if (board.shots[randomX][randomY] === true) {
    handleComputerTurn(board);
    return;
  }

  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.setComputerTurn)(true);
  document.querySelector(".board.computer").style.opacity = "0.5";
  document.querySelector(".board.player").style.opacity = "1";
  setTimeout(() => {
    board.receiveAttack(randomX, randomY);

    if (board.allSunk()) {
      endGame("player");
    }

    (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();

    (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.setComputerTurn)(false);
    document.querySelector(".board.computer").style.opacity = "1";
    document.querySelector(".board.player").style.opacity = "0.5";
  }, 300);
}

function endGame(loser) {
  createEndDialog(loser);
}

function createEndDialog(loser) {
  const dialog = document.createElement("dialog");

  const h2 = document.createElement("h2");
  h2.textContent = `${loser} lost. play again?`;

  const button = document.createElement("button");
  button.textContent = "play again ⟲";
  button.addEventListener("click", () => {
    restartGame();
    dialog.close();
  });

  dialog.append(h2, button);

  document.body.appendChild(dialog);
  dialog.showModal();
  dialog.addEventListener("cancel", (e) => e.preventDefault());
}

function restartGame() {
  const { player, computer } = (0,_createGame__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_createDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(player, computer);
}

const SHIPS = [0, 1, 2, 1, 1];


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
  constructor(type) {
    this.type = type;
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}


/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeSatisfies: () => (/* binding */ placeSatisfies),
/* harmony export */   randomCord: () => (/* binding */ randomCord),
/* harmony export */   randomize: () => (/* binding */ randomize)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameboardEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardEvents */ "./src/gameboardEvents.js");



function randomize(board) {
  board.ships = Array.from({ length: _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE }, () => Array(_gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE));
  board.placedShips = [0, 0, 0, 0, 0];
  for (let i = 1; i < _gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.SHIPS.length; i++) {
    let shipAmount = _gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.SHIPS[i];
    while (shipAmount > 0) {
      placeRandomly(board, i + 1);
      shipAmount--;
    }
  }
}

function placeRandomly(board, length) {
  const [randomX, randomY] = randomCord();
  const horizontal = random(2) === 1;
  if (!placeSatisfies(board, randomX, randomY, length, horizontal)) {
    placeRandomly(board, length);
    return;
  }
  board.place(randomX, randomY, length, horizontal);
}

function placeSatisfies(board, x, y, length, horizontal) {
  const outOfReach = horizontal
    ? x + length > _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE
    : y + length > _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE;
  if (outOfReach) {
    return false;
  }
  if (horizontal) {
    for (let i = x - 1; i < x + length + 1; i++) {
      const currRow = board.ships[i];
      if (!currRow) continue;

      const prev = y - 1 >= 0 ? currRow[y - 1] : false;
      const curr = y >= 0 && y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE ? currRow[y] : false;
      const next = y + 1 < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE ? currRow[y + 1] : false;
      if (prev || curr || next) return false;
    }
  } else {
    for (let i = y - 1; i < y + length + 1; i++) {
      const prev = x - 1 >= 0 ? board.ships[x - 1][i] : false;
      const curr = board.ships[x][i];
      const next = x + 1 < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE ? board.ships[x + 1][i] : false;
      if (prev || curr || next) return false;
    }
  }
  return true;
}

function randomCord() {
  return [random(_gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE), random(_gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE)];
}

function random(number) {
  return Math.floor(Math.random() * number);
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    // if (length < 1 || length > 4 ) throw new Error("Size must be between 1 and 4")

    this.length = length;
    this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    return this.hits >= this.length;
  }
}


/***/ }),

/***/ "./src/shipsDOM.js":
/*!*************************!*\
  !*** ./src/shipsDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShipsDOM: () => (/* binding */ createShipsDOM)
/* harmony export */ });
/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOM */ "./src/createDOM.js");
/* harmony import */ var _gameboardEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardEvents */ "./src/gameboardEvents.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ "./src/random.js");




let waiting = false;
function createShipsDOM(board) {
  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("player", "ships-container");

  for (let i = 1; i < board.placedShips.length; i++) {
    let shipAmount = _gameboardEvents__WEBPACK_IMPORTED_MODULE_1__.SHIPS[i] - board.placedShips[i];

    while (shipAmount > 0) {
      const shipContainer = document.createElement("div");
      shipContainer.classList.add("ship-container");
      shipContainer.addEventListener("click", () => {
        if (waiting) return;

        shipContainer.style.opacity = "0.8";
        waitForBoardClick(board, shipContainer.children.length);
      });
      for (let j = 0; j <= i; j++) {
        const ship = document.createElement("div");
        ship.classList.add("ship", "cell");
        shipContainer.appendChild(ship);
      }
      shipAmount--;
      shipsContainer.appendChild(shipContainer);
    }
  }

  return shipsContainer;
}

function waitForBoardClick(board, length) {
  waiting = true;

  const boardContainer = document.querySelector(".board.player");
  boardContainer.addEventListener(
    "click",
    (event) => {
      const parent = event.target.parentElement;
      const y = Array.from(parent.children).indexOf(event.target);

      const grandParent = parent.parentElement;
      const x = Array.from(grandParent.children).indexOf(parent);

      const horizontal = _createDOM__WEBPACK_IMPORTED_MODULE_0__.root.dataset.horizontal === "true";

      if (!(0,_random__WEBPACK_IMPORTED_MODULE_2__.placeSatisfies)(board, x, y, length, horizontal)) {
        waitForBoardClick(board, length);
        return;
      }
      board.place(x, y, length, horizontal);
      (0,_createDOM__WEBPACK_IMPORTED_MODULE_0__["default"])();

      waiting = false;
    },
    { once: true },
  );
}


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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ "./src/createDOM.js");
/* harmony import */ var _createGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGame */ "./src/createGame.js");




const { player, computer } = (0,_createGame__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_createDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(player, computer);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21CO0FBQ0Y7O0FBRXRDLFFBQVEsbUJBQW1CLEVBQUUsdURBQVU7QUFDdkMsc0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZURPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lYm9hcmRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGlwc0RPTS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrO1xuICAtLWJhY2tncm91bmQ6ICMxMDE0MTc7XG4gIC0tc3VyZmFjZTogIzFjMjAyNDtcbiAgLS1zdXJmYWNlLWhpZ2g6ICMyODJhMmY7XG4gIC0tdGV4dDogI2UyZTJlOTtcbiAgLS1wcmltYXJ5OiAjYWFjN2ZmO1xuICAtLW9uLXByaW1hcnk6ICMwYjMwNWY7XG4gIC0tc2Vjb25kYXJ5OiAjZGRiY2UwO1xuICAtLWJvcmRlcjogIzhiOTE5ODtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OlxuICAgIHN5c3RlbS11aSxcbiAgICAtYXBwbGUtc3lzdGVtLFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsXG4gICAgUm9ib3RvLFxuICAgIE94eWdlbixcbiAgICBVYnVudHUsXG4gICAgQ2FudGFyZWxsLFxuICAgIFwiT3BlbiBTYW5zXCIsXG4gICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5ib2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xufVxuXG4uYm9hcmQge1xuICBib3JkZXI6IDAuMjVyZW0gc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcblxuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbjogMXB4O1xuXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXM7XG59XG4uY29tcHV0ZXIgLmNlbGw6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5wbGF5ZXIgLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNob3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgd2lkdGg6IDAuNXJlbTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbn1cbi5zaG90LnNoaXA6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmNvbXB1dGVyIC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuaDIge1xuICBtYXJnaW46IDA7XG59XG5cbmRpYWxvZ1tvcGVuXSB7XG4gIGZvbnQ6IGluaGVyaXQ7XG5cbiAgcGFkZGluZzogMnJlbTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG5idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tb24tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuLnNlY29uZGFyeSB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMXJlbTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4uc2hpcHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbjogMXJlbSAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Y0FXWTs7RUFFWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjs7RUFFbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsV0FBVzs7RUFFWCxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjOztFQUVkLGFBQWE7RUFDYixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHFCQUFxQjs7RUFFckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsYUFBYTs7RUFFYixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLG9CQUFvQjtFQUNwQixXQUFXOztFQUVYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhOztFQUViLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcXG4gIC0tYmFja2dyb3VuZDogIzEwMTQxNztcXG4gIC0tc3VyZmFjZTogIzFjMjAyNDtcXG4gIC0tc3VyZmFjZS1oaWdoOiAjMjgyYTJmO1xcbiAgLS10ZXh0OiAjZTJlMmU5O1xcbiAgLS1wcmltYXJ5OiAjYWFjN2ZmO1xcbiAgLS1vbi1wcmltYXJ5OiAjMGIzMDVmO1xcbiAgLS1zZWNvbmRhcnk6ICNkZGJjZTA7XFxuICAtLWJvcmRlcjogIzhiOTE5ODtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgc3lzdGVtLXVpLFxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90byxcXG4gICAgT3h5Z2VuLFxcbiAgICBVYnVudHUsXFxuICAgIENhbnRhcmVsbCxcXG4gICAgXFxcIk9wZW4gU2Fuc1xcXCIsXFxuICAgIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuXFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNHJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGJvcmRlcjogMC4yNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW46IDFweDtcXG5cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXM7XFxufVxcbi5jb21wdXRlciAuY2VsbDpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5wbGF5ZXIgLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5zaG90OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGhlaWdodDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbn1cXG4uc2hvdC5zaGlwOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5jb21wdXRlciAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICBmb250OiBpbmhlcml0O1xcblxcbiAgcGFkZGluZzogMnJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcblxcbiAgcGFkZGluZzogMC41cmVtIDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxufVxcbi5zZWNvbmRhcnkge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJPQVJEX1NJWkUgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7XG4gIGhhbmRsZVBsYXllclR1cm4sXG4gIGhhbmRsZUNvbXB1dGVyVHVybixcbiAgcmVzdGFydEdhbWUsXG4gIFNISVBTLFxufSBmcm9tIFwiLi9nYW1lYm9hcmRFdmVudHNcIjtcbmltcG9ydCB7IHJhbmRvbWl6ZSB9IGZyb20gXCIuL3JhbmRvbVwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgY3JlYXRlU2hpcHNET00gfSBmcm9tIFwiLi9zaGlwc0RPTVwiO1xuXG5leHBvcnQgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcblxubGV0IHBsYXllciwgY29tcHV0ZXI7XG5sZXQgY29tcHV0ZXJUdXJuID0gZmFsc2U7XG5leHBvcnQgY29uc3Qgc2V0Q29tcHV0ZXJUdXJuID0gKG5ld1R1cm4pID0+IHtcbiAgY29tcHV0ZXJUdXJuID0gbmV3VHVybjtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lRE9NKFxuICBwbGF5ZXJQYXNzZWQgPSBwbGF5ZXIsXG4gIGNvbXB1dGVyUGFzc2VkID0gY29tcHV0ZXIsXG4pIHtcbiAgcm9vdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHBsYXllciA9IHBsYXllclBhc3NlZDtcbiAgY29tcHV0ZXIgPSBjb21wdXRlclBhc3NlZDtcblxuICBjb25zdCBzaGlwcyA9IGNyZWF0ZVNoaXBzRE9NKHBsYXllci5ib2FyZCk7XG5cbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoXCJib2FyZHNcIik7XG5cbiAgY29uc3QgYm9hcmQxID0gYm9hcmRUb0RPTShwbGF5ZXIpO1xuICBjb25zdCBib2FyZDIgPSBib2FyZFRvRE9NKGNvbXB1dGVyKTtcbiAgYm9hcmRzLmFwcGVuZChib2FyZDEsIGJvYXJkMik7XG5cbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gY3JlYXRlUmFuZG9taXplQnV0dG9uKCk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gY3JlYXRlUmVzZXRCdXR0b24oKTtcbiAgY29uc3QgdG9nZ2xlQXhpc0J1dHRvbiA9IGNyZWF0ZVRvZ2dsZUF4aXNCdXR0b24oKTtcblxuICByb290LmFwcGVuZChzaGlwcywgYm9hcmRzLCByYW5kb21pemVCdXR0b24sIHJlc2V0QnV0dG9uLCB0b2dnbGVBeGlzQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYm9hcmRUb0RPTShuZXdQbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9XG4gICAgbmV3UGxheWVyLnR5cGUgPT09IFwicGxheWVyXCJcbiAgICAgID8gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSA/PyBcInBsYXllclwiKVxuICAgICAgOiBcImNvbXB1dGVyXCI7XG4gIGgyLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIGgyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBoMi50ZXh0Q29udGVudCksXG4gICk7XG4gIG5hbWUuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gIGNvbnN0IERPTUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgRE9NQm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIsIG5ld1BsYXllci50eXBlKTtcblxuICBjb25zdCB7IHNoaXBzLCBzaG90cyB9ID0gbmV3UGxheWVyLmJvYXJkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgIGNvbnN0IGNvbHVtbiA9IHNoaXBzW2ldO1xuICAgIGNvbnN0IGJvYXJkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRfU0laRTsgaisrKSB7XG4gICAgICBjb25zdCB3YXNTaG90ID0gc2hvdHNbaV1bal07XG5cbiAgICAgIGNvbnN0IGNlbGwgPSBjb2x1bW5bal07XG4gICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuXG4gICAgICBhZGRSb3dWaXN1YWxIZWxwZXJzKGNlbGwsIGJvYXJkQ2VsbCwgd2FzU2hvdCk7XG5cbiAgICAgIGNvbnN0IHNoaXBzQW1vdW50ID0gZ2V0VG90YWwocGxheWVyLmJvYXJkLnBsYWNlZFNoaXBzKTtcbiAgICAgIGNvbnN0IG5lZWRlZFNoaXBzID0gZ2V0VG90YWwoU0hJUFMpO1xuICAgICAgaWYgKHNoaXBzQW1vdW50ID09PSBuZWVkZWRTaGlwcyAmJiBuZXdQbGF5ZXIudHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIHdhaXRGb3JDbGljayhib2FyZENlbGwsIHNob3RzLCBpLCBqKTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRDb2x1bW4uYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbiAgICB9XG5cbiAgICBET01Cb2FyZC5hcHBlbmRDaGlsZChib2FyZENvbHVtbik7XG4gIH1cbiAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NQm9hcmQpO1xuXG4gIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9taXplQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlY29uZGFyeVwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJyYW5kb21pemUg8J+UgFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByYW5kb21pemUocGxheWVyLmJvYXJkKTtcbiAgICBjcmVhdGVHYW1lRE9NKCk7XG4gIH0pO1xuICBidXR0b24uZGlzYWJsZWQgPSBwbGF5ZXIuYm9hcmQuc2hvdHMuZmxhdCgpLmZpbHRlcigoeCkgPT4geCkubGVuZ3RoID4gMDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzZXRCdXR0b24oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kYXJ5XCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInJlc2V0IOKfslwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlc3RhcnRHYW1lKCkpO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGVBeGlzQnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlY29uZGFyeVwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID1cbiAgICByb290LmRhdGFzZXQuaG9yaXpvbnRhbCA9PT0gXCJmYWxzZVwiXG4gICAgICA/IFwicGxhY2UgaG9yaXpvbnRhbGx5XCJcbiAgICAgIDogXCJwbGFjZSB2ZXJ0aWNhbGx5XCI7XG5cbiAgcm9vdC5kYXRhc2V0Lmhvcml6b250YWwgPz89IFwidHJ1ZVwiO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSByb290LmRhdGFzZXQuaG9yaXpvbnRhbCAhPT0gXCJ0cnVlXCI7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gIW5leHQgPyBcInBsYWNlIGhvcml6b250YWxseVwiIDogXCJwbGFjZSB2ZXJ0aWNhbGx5XCI7XG4gICAgcm9vdC5kYXRhc2V0Lmhvcml6b250YWwgPSBuZXh0O1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gd2FpdEZvckNsaWNrKGJvYXJkQ2VsbCwgc2hvdHMsIGksIGopIHtcbiAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHNob3RzW2ldW2pdID09PSB0cnVlIHx8IGNvbXB1dGVyVHVybikgcmV0dXJuO1xuXG4gICAgaGFuZGxlUGxheWVyVHVybihjb21wdXRlci5ib2FyZCwgaSwgaik7XG4gICAgaGFuZGxlQ29tcHV0ZXJUdXJuKHBsYXllci5ib2FyZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRSb3dWaXN1YWxIZWxwZXJzKGNlbGwsIGJvYXJkQ2VsbCwgd2FzU2hvdCkge1xuICBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgaWYgKGNlbGwuaXNTdW5rKCkpIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgfVxuICB3YXNTaG90ID09PSB0cnVlICYmIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hvdFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWwoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoc3VtLCBjdXJyKSA9PiBzdW0gKyBjdXJyLCAwKTtcbn1cbiIsImltcG9ydCB7IHJhbmRvbWl6ZSB9IGZyb20gXCIuL3JhbmRvbVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlR2FtZSgpIHtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihcInBsYXllclwiKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKFwiY29tcHV0ZXJcIik7XG4gIHJhbmRvbWl6ZShjb21wdXRlci5ib2FyZCk7XG4gIHJldHVybiB7IHBsYXllciwgY29tcHV0ZXIgfTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gY3JlYXRlIDJkIGFycmF5cyB3aGVyZSBlYWNoIGl0ZW0gaXMgdW5pcXVlXG4gICAgdGhpcy5zaGlwcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IEJPQVJEX1NJWkUgfSwgKCkgPT4gQXJyYXkoQk9BUkRfU0laRSkpO1xuICAgIHRoaXMuc2hvdHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBCT0FSRF9TSVpFIH0sICgpID0+IEFycmF5KEJPQVJEX1NJWkUpKTtcbiAgICB0aGlzLnBsYWNlZFNoaXBzID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgIHRoaXMuc2Fua1NoaXBzID0gMDtcbiAgfVxuICBwbGFjZSh4LCB5LCBsZW5ndGgsIGhvcml6b250YWwgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgIGNvbnN0IHhFbmQgPSB4ICsgbGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4RW5kOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwc1tpXVt5XSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHlFbmQgPSB5ICsgbGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5RW5kOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwc1t4XVtpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wbGFjZWRTaGlwc1tsZW5ndGggLSAxXSsrO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIHRoaXMuc2hvdHNbeF1beV0gPSB0cnVlO1xuXG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbeF1beV07XG4gICAgaWYgKCFzaGlwKSByZXR1cm47XG5cbiAgICBzaGlwLmhpdHMrKztcblxuICAgIGlmIChzaGlwLmlzU3VuaygpKSB0aGlzLnNhbmtTaGlwcysrO1xuICB9XG4gIGFsbFN1bmsoKSB7XG4gICAgY29uc3Qgc2hpcHNBbW91bnQgPSB0aGlzLnBsYWNlZFNoaXBzLnJlZHVjZSgoc3VtLCBjdXJyKSA9PiBzdW0gKyBjdXJyLCAwKTtcbiAgICByZXR1cm4gc2hpcHNBbW91bnQgPT09IHRoaXMuc2Fua1NoaXBzO1xuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlR2FtZSBmcm9tIFwiLi9jcmVhdGVHYW1lXCI7XG5pbXBvcnQgY3JlYXRlR2FtZURPTSwgeyBzZXRDb21wdXRlclR1cm4gfSBmcm9tIFwiLi9jcmVhdGVET01cIjtcbmltcG9ydCB7IHJhbmRvbUNvcmQgfSBmcm9tIFwiLi9yYW5kb21cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBsYXllclR1cm4oYm9hcmQsIGksIGopIHtcbiAgYm9hcmQucmVjZWl2ZUF0dGFjayhpLCBqKTtcbiAgaWYgKGJvYXJkLmFsbFN1bmsoKSkge1xuICAgIGVuZEdhbWUoXCJjb21wdXRlclwiKTtcbiAgfVxuICBjcmVhdGVHYW1lRE9NKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb21wdXRlclR1cm4oYm9hcmQpIHtcbiAgY29uc3QgW3JhbmRvbVgsIHJhbmRvbVldID0gcmFuZG9tQ29yZCgpO1xuXG4gIGlmIChib2FyZC5zaG90c1tyYW5kb21YXVtyYW5kb21ZXSA9PT0gdHJ1ZSkge1xuICAgIGhhbmRsZUNvbXB1dGVyVHVybihib2FyZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0Q29tcHV0ZXJUdXJuKHRydWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLmNvbXB1dGVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLnBsYXllclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tWCwgcmFuZG9tWSk7XG5cbiAgICBpZiAoYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKFwicGxheWVyXCIpO1xuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVET00oKTtcblxuICAgIHNldENvbXB1dGVyVHVybihmYWxzZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5jb21wdXRlclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5wbGF5ZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gIH0sIDMwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRHYW1lKGxvc2VyKSB7XG4gIGNyZWF0ZUVuZERpYWxvZyhsb3Nlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVuZERpYWxvZyhsb3Nlcikge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IGAke2xvc2VyfSBsb3N0LiBwbGF5IGFnYWluP2A7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJwbGF5IGFnYWluIOKfslwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXN0YXJ0R2FtZSgpO1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICB9KTtcblxuICBkaWFsb2cuYXBwZW5kKGgyLCBidXR0b24pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNhbmNlbFwiLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xuICBjb25zdCB7IHBsYXllciwgY29tcHV0ZXIgfSA9IGNyZWF0ZUdhbWUoKTtcbiAgY3JlYXRlR2FtZURPTShwbGF5ZXIsIGNvbXB1dGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNISVBTID0gWzAsIDEsIDIsIDEsIDFdO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU0hJUFMgfSBmcm9tIFwiLi9nYW1lYm9hcmRFdmVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbWl6ZShib2FyZCkge1xuICBib2FyZC5zaGlwcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IEJPQVJEX1NJWkUgfSwgKCkgPT4gQXJyYXkoQk9BUkRfU0laRSkpO1xuICBib2FyZC5wbGFjZWRTaGlwcyA9IFswLCAwLCAwLCAwLCAwXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBTSElQUy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzaGlwQW1vdW50ID0gU0hJUFNbaV07XG4gICAgd2hpbGUgKHNoaXBBbW91bnQgPiAwKSB7XG4gICAgICBwbGFjZVJhbmRvbWx5KGJvYXJkLCBpICsgMSk7XG4gICAgICBzaGlwQW1vdW50LS07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlUmFuZG9tbHkoYm9hcmQsIGxlbmd0aCkge1xuICBjb25zdCBbcmFuZG9tWCwgcmFuZG9tWV0gPSByYW5kb21Db3JkKCk7XG4gIGNvbnN0IGhvcml6b250YWwgPSByYW5kb20oMikgPT09IDE7XG4gIGlmICghcGxhY2VTYXRpc2ZpZXMoYm9hcmQsIHJhbmRvbVgsIHJhbmRvbVksIGxlbmd0aCwgaG9yaXpvbnRhbCkpIHtcbiAgICBwbGFjZVJhbmRvbWx5KGJvYXJkLCBsZW5ndGgpO1xuICAgIHJldHVybjtcbiAgfVxuICBib2FyZC5wbGFjZShyYW5kb21YLCByYW5kb21ZLCBsZW5ndGgsIGhvcml6b250YWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTYXRpc2ZpZXMoYm9hcmQsIHgsIHksIGxlbmd0aCwgaG9yaXpvbnRhbCkge1xuICBjb25zdCBvdXRPZlJlYWNoID0gaG9yaXpvbnRhbFxuICAgID8geCArIGxlbmd0aCA+IEJPQVJEX1NJWkVcbiAgICA6IHkgKyBsZW5ndGggPiBCT0FSRF9TSVpFO1xuICBpZiAob3V0T2ZSZWFjaCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaG9yaXpvbnRhbCkge1xuICAgIGZvciAobGV0IGkgPSB4IC0gMTsgaSA8IHggKyBsZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJSb3cgPSBib2FyZC5zaGlwc1tpXTtcbiAgICAgIGlmICghY3VyclJvdykgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHByZXYgPSB5IC0gMSA+PSAwID8gY3VyclJvd1t5IC0gMV0gOiBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnIgPSB5ID49IDAgJiYgeSA8IEJPQVJEX1NJWkUgPyBjdXJyUm93W3ldIDogZmFsc2U7XG4gICAgICBjb25zdCBuZXh0ID0geSArIDEgPCBCT0FSRF9TSVpFID8gY3VyclJvd1t5ICsgMV0gOiBmYWxzZTtcbiAgICAgIGlmIChwcmV2IHx8IGN1cnIgfHwgbmV4dCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0geSAtIDE7IGkgPCB5ICsgbGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICBjb25zdCBwcmV2ID0geCAtIDEgPj0gMCA/IGJvYXJkLnNoaXBzW3ggLSAxXVtpXSA6IGZhbHNlO1xuICAgICAgY29uc3QgY3VyciA9IGJvYXJkLnNoaXBzW3hdW2ldO1xuICAgICAgY29uc3QgbmV4dCA9IHggKyAxIDwgQk9BUkRfU0laRSA/IGJvYXJkLnNoaXBzW3ggKyAxXVtpXSA6IGZhbHNlO1xuICAgICAgaWYgKHByZXYgfHwgY3VyciB8fCBuZXh0KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tQ29yZCgpIHtcbiAgcmV0dXJuIFtyYW5kb20oQk9BUkRfU0laRSksIHJhbmRvbShCT0FSRF9TSVpFKV07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbShudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgLy8gaWYgKGxlbmd0aCA8IDEgfHwgbGVuZ3RoID4gNCApIHRocm93IG5ldyBFcnJvcihcIlNpemUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDRcIilcblxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cysrO1xuICB9XG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlR2FtZURPTSwgeyByb290IH0gZnJvbSBcIi4vY3JlYXRlRE9NXCI7XG5pbXBvcnQgeyBTSElQUyB9IGZyb20gXCIuL2dhbWVib2FyZEV2ZW50c1wiO1xuaW1wb3J0IHsgcGxhY2VTYXRpc2ZpZXMgfSBmcm9tIFwiLi9yYW5kb21cIjtcblxubGV0IHdhaXRpbmcgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwc0RPTShib2FyZCkge1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJcIiwgXCJzaGlwcy1jb250YWluZXJcIik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBib2FyZC5wbGFjZWRTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzaGlwQW1vdW50ID0gU0hJUFNbaV0gLSBib2FyZC5wbGFjZWRTaGlwc1tpXTtcblxuICAgIHdoaWxlIChzaGlwQW1vdW50ID4gMCkge1xuICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNvbnRhaW5lclwiKTtcbiAgICAgIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHdhaXRpbmcpIHJldHVybjtcblxuICAgICAgICBzaGlwQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjAuOFwiO1xuICAgICAgICB3YWl0Rm9yQm9hcmRDbGljayhib2FyZCwgc2hpcENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBpOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXBcIiwgXCJjZWxsXCIpO1xuICAgICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApO1xuICAgICAgfVxuICAgICAgc2hpcEFtb3VudC0tO1xuICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNoaXBzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQm9hcmRDbGljayhib2FyZCwgbGVuZ3RoKSB7XG4gIHdhaXRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC5wbGF5ZXJcIik7XG4gIGJvYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCB5ID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgY29uc3QgZ3JhbmRQYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHggPSBBcnJheS5mcm9tKGdyYW5kUGFyZW50LmNoaWxkcmVuKS5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGNvbnN0IGhvcml6b250YWwgPSByb290LmRhdGFzZXQuaG9yaXpvbnRhbCA9PT0gXCJ0cnVlXCI7XG5cbiAgICAgIGlmICghcGxhY2VTYXRpc2ZpZXMoYm9hcmQsIHgsIHksIGxlbmd0aCwgaG9yaXpvbnRhbCkpIHtcbiAgICAgICAgd2FpdEZvckJvYXJkQ2xpY2soYm9hcmQsIGxlbmd0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnBsYWNlKHgsIHksIGxlbmd0aCwgaG9yaXpvbnRhbCk7XG4gICAgICBjcmVhdGVHYW1lRE9NKCk7XG5cbiAgICAgIHdhaXRpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9LFxuICApO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjcmVhdGVHYW1lRE9NIGZyb20gXCIuL2NyZWF0ZURPTVwiO1xuaW1wb3J0IGNyZWF0ZUdhbWUgZnJvbSBcIi4vY3JlYXRlR2FtZVwiO1xuXG5jb25zdCB7IHBsYXllciwgY29tcHV0ZXIgfSA9IGNyZWF0ZUdhbWUoKTtcbmNyZWF0ZUdhbWVET00ocGxheWVyLCBjb21wdXRlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=