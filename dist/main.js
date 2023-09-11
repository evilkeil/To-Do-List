/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
}

:root{
        --mainColor:#3c7794;
        --secondaryColor:#fce3f0;
        --textColor:#202a4b;
        --btnMain:#c2def7;
        --btnScondary:#83b3d9;
    
    
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    height: 100vh; 
    background-color: var(--mainColor);
}

/* styles for the add project button  */

.add-project-container {
    border: 1px solid var(--textColor);
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: fixed;
    bottom: 3%;
    right: 3%;
    font-size: 5rem;
    background-color: var(--btnMain);
}

.hover-btn {
    background: none;
    border: none;
    font-size: inherit;
    cursor: pointer;
    color: var(--textColor);
}

.description {
    width: 5rem;
    height: 5rem;
    border-radius:50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--btnMain);
    color: var(--textColor);
    padding: 5px 10px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.add-project-container:hover{
    cursor: pointer;
}
.add-project-container:hover .description {
    opacity: 1;
    visibility: visible;
}

/* styles for the main container  */

#main-container{
    background-color: var(--secondaryColor);
    width: 80%;
    height: 100%;
    overflow: auto;
}

/* .projects {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 100px;
    gap: 5px;

} */

.cardList{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 100px;
    gap: 5px;
    padding: 0;
}


#main-container.center-grid {
    display: flex;
    align-items: center;
    justify-content: center;
   
}
#main-container.center-grid h1 {
    text-align: center;
   
}

.card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.card:hover{
    cursor: pointer;
    background-color: var(--btnScondary);
}
/* .delete-project{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
} */
.delete-project-btn{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    
}
.delete-project-btn:hover{
    fill:red;
    cursor: pointer;
}

.time {
    position: absolute;
    bottom: 0px;
    right: 5px;
    font-size: 1rem;
    color: var(--textColor);
    padding: 0;
    margin: 0;
  }

  .card-marker{
    height: 100%;
    width: 5%;
    background-color: rebeccapurple;
    position: absolute;
    left: 0;
    top: 0;
  }

/* modal related stlyes */
.close{
    display: flex;
    justify-content: flex-end
}
.close svg{
    width: 15px;
    height: 15px;
}

.close svg:hover{
    cursor: pointer;
    fill: red;
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;QACQ,mBAAmB;QACnB,wBAAwB;QACxB,mBAAmB;QACnB,iBAAiB;QACjB,qBAAqB;;;AAG7B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;AACtC;;AAEA,uCAAuC;;AAEvC;IACI,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,SAAS;IACT,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,gCAAgC;IAChC,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;IAClB,oCAAoC;IACpC,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA,mCAAmC;;AAEnC;IACI,uCAAuC;IACvC,UAAU;IACV,YAAY;IACZ,cAAc;AAClB;;AAEA;;;;;;GAMG;;AAEH;IACI,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,QAAQ;IACR,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;AACA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,oCAAoC;AACxC;AACA;;;;;;GAMG;AACH;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,QAAQ;;AAEZ;AACA;IACI,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,eAAe;IACf,uBAAuB;IACvB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,SAAS;IACT,+BAA+B;IAC/B,kBAAkB;IAClB,OAAO;IACP,MAAM;EACR;;AAEF,yBAAyB;AACzB;IACI,aAAa;IACb;AACJ;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,SAAS;AACb","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root{\n        --mainColor:#3c7794;\n        --secondaryColor:#fce3f0;\n        --textColor:#202a4b;\n        --btnMain:#c2def7;\n        --btnScondary:#83b3d9;\n    \n    \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n    height: 100vh; \n    background-color: var(--mainColor);\n}\n\n/* styles for the add project button  */\n\n.add-project-container {\n    border: 1px solid var(--textColor);\n    width: 5rem;\n    height: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 3%;\n    right: 3%;\n    font-size: 5rem;\n    background-color: var(--btnMain);\n}\n\n.hover-btn {\n    background: none;\n    border: none;\n    font-size: inherit;\n    cursor: pointer;\n    color: var(--textColor);\n}\n\n.description {\n    width: 5rem;\n    height: 5rem;\n    border-radius:50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--btnMain);\n    color: var(--textColor);\n    padding: 5px 10px;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease-in-out;\n    font-size: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n.add-project-container:hover{\n    cursor: pointer;\n}\n.add-project-container:hover .description {\n    opacity: 1;\n    visibility: visible;\n}\n\n/* styles for the main container  */\n\n#main-container{\n    background-color: var(--secondaryColor);\n    width: 80%;\n    height: 100%;\n    overflow: auto;\n}\n\n/* .projects {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-auto-rows: 100px;\n    gap: 5px;\n\n} */\n\n.cardList{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-auto-rows: 100px;\n    gap: 5px;\n    padding: 0;\n}\n\n\n#main-container.center-grid {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n   \n}\n#main-container.center-grid h1 {\n    text-align: center;\n   \n}\n\n.card {\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin: 10px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n.card:hover{\n    cursor: pointer;\n    background-color: var(--btnScondary);\n}\n/* .delete-project{\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n} */\n.delete-project-btn{\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    \n}\n.delete-project-btn:hover{\n    fill:red;\n    cursor: pointer;\n}\n\n.time {\n    position: absolute;\n    bottom: 0px;\n    right: 5px;\n    font-size: 1rem;\n    color: var(--textColor);\n    padding: 0;\n    margin: 0;\n  }\n\n  .card-marker{\n    height: 100%;\n    width: 5%;\n    background-color: rebeccapurple;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n/* modal related stlyes */\n.close{\n    display: flex;\n    justify-content: flex-end\n}\n.close svg{\n    width: 15px;\n    height: 15px;\n}\n\n.close svg:hover{\n    cursor: pointer;\n    fill: red;\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/assets/strings.js":
/*!*******************************!*\
  !*** ./src/assets/strings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyMessage: () => (/* binding */ emptyMessage)
/* harmony export */ });
const emptyMessage = "Your Project list is empty click the add button to add a project";


/***/ }),

/***/ "./src/modules/otherLogic/addProjForm.js":
/*!***********************************************!*\
  !*** ./src/modules/otherLogic/addProjForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNewProjectInfo)
/* harmony export */ });
/* harmony import */ var _projectObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectObj */ "./src/modules/otherLogic/projectObj.js");
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/countItems */ "./src/modules/storage/countItems.js");
/* harmony import */ var _storage_setStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/setStorage.js */ "./src/modules/storage/setStorage.js");
/* harmony import */ var _storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/getItemsFromStorage */ "./src/modules/storage/getItemsFromStorage.js");
/* harmony import */ var _render_renderNewProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render/renderNewProject.js */ "./src/modules/render/renderNewProject.js");
/* harmony import */ var _render_removeEmptymsg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/removeEmptymsg */ "./src/modules/render/removeEmptymsg.js");
//to handle submit event listener of the modal








const projectTitleInput = document.getElementById('title');
const markerInput = document.getElementById('color');
const form = document.getElementById('add-new-Project');
const modal = document.getElementById('modal');
const submitButton = document.getElementById('submitProj')

function createAndStoreProject(arr) {
  const title = projectTitleInput.value;
  const marker = markerInput.value;

  if (!title || !marker) {
    // You can display an error message or simply return without creating/storing the project
    return;
  }
  
  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];



  const storageLength = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_1__["default"])("project");
  const projectNumber = storageLength + 1;
  const UID = projectNumber;
  const projectInfo = (0,_projectObj__WEBPACK_IMPORTED_MODULE_0__["default"])(title, marker, date,UID);
  (0,_storage_setStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(`project${UID}`, projectInfo);
  (0,_render_renderNewProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(title,marker,date,UID);
  arr.push(projectInfo);

  return projectInfo;
}

function getNewProjectInfo(arr) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    createAndStoreProject(arr);
    (0,_render_removeEmptymsg__WEBPACK_IMPORTED_MODULE_5__["default"])();
    modal.close();
    form.reset();

  });
}

/***/ }),

/***/ "./src/modules/otherLogic/deleteProject.js":
/*!*************************************************!*\
  !*** ./src/modules/otherLogic/deleteProject.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoveProject)
/* harmony export */ });
/* harmony import */ var _storage_deleteStorageItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/deleteStorageItems */ "./src/modules/storage/deleteStorageItems.js");
//logic for deleting cards



const mainContainer = document.getElementById("main-container");

function RemoveProject(div, uid) {
    const target = `project${uid}`
    ;(0,_storage_deleteStorageItems__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
    if(div){
        mainContainer.removeChild(div);
    }
   
}



/***/ }),

/***/ "./src/modules/otherLogic/deleteProjectForm.js":
/*!*****************************************************!*\
  !*** ./src/modules/otherLogic/deleteProjectForm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProjectConfirm)
/* harmony export */ });
/* harmony import */ var _removeFromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeFromArray */ "./src/modules/otherLogic/removeFromArray.js");
/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteProject */ "./src/modules/otherLogic/deleteProject.js");


const modal = document.querySelector('.delete-modal');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const form = document.getElementById('delete');

function deleteProjectConfirm(arr,div){
   const uid = div.dataset.uid;
   const h2 = div.querySelector('.project-title');
   const title =h2.textContent;

    yes.addEventListener('click',function(e){
        e.preventDefault();
        (0,_deleteProject__WEBPACK_IMPORTED_MODULE_1__["default"])(div, uid);
        modal.close();
    })

    no.addEventListener('click',function(e){
        e.preventDefault();
        modal.close();
    })
}

// export default function deleteProjectConfirm(arr,e){
//     const yes = document.getElementById('yes');
//     const no = document.getElementById('no');

//     yes.addEventListener('click',function(event){
//         event.preventDefault();
//         const target = e.target;
//         const card = target.closest('.card');
//         const h2 = card.querySelector('.project-title');
//         const title =  h2.textContent;
//         const uniqueIdentifier = card.dataset.uid;
//         RemoveProject(card,uniqueIdentifier);
//         // removeFromArray(arr,title,uniqueIdentifier)
//         modal.close();

//     })

//     no.addEventListener('click',function(event){
//         event.preventDefault();
//         modal.close();
//     })
// }

/***/ }),

/***/ "./src/modules/otherLogic/projectObj.js":
/*!**********************************************!*\
  !*** ./src/modules/otherLogic/projectObj.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
//an object factory to generate an object for each project
function createProject(title,marker,date,UID){
    return{
        title,
        marker,
        date,
        UID
    }
}

/***/ }),

/***/ "./src/modules/otherLogic/removeFromArray.js":
/*!***************************************************!*\
  !*** ./src/modules/otherLogic/removeFromArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeFromArray)
/* harmony export */ });
function removeFromArray(arr,key,uid){
    arr.forEach(element => {
        if(element.title === key){
            if(element.dataset.uid === uid){
                const indexToRemove = arr.indexOf(element);
                arr.splice(indexToRemove, 1);
            }
            
        }
    });
}

/***/ }),

/***/ "./src/modules/otherLogic/resetForm.js":
/*!*********************************************!*\
  !*** ./src/modules/otherLogic/resetForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resetNewProjectForm)
/* harmony export */ });
//event listner to the reset btn to reset the project form if clicked

const resetButton = document.querySelector('button[type="reset"]');
const form = document.getElementById('add-new-Project');

function resetNewProjectForm(){
    resetButton.addEventListener('click',function(e){
        e.preventDefault();
        form.reset();
    })
}

/***/ }),

/***/ "./src/modules/render/closeModal.js":
/*!******************************************!*\
  !*** ./src/modules/render/closeModal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closeModal)
/* harmony export */ });
//module to handle the close btn .close

const close =document.querySelector('.close svg');
const modal = document.getElementById('modal');

function closeModal(){
    close.addEventListener(`click`,function(){
        modal.close();
    })
}

/***/ }),

/***/ "./src/modules/render/deleteProjectEvent.js":
/*!**************************************************!*\
  !*** ./src/modules/render/deleteProjectEvent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _otherLogic_deleteProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherLogic/deleteProjectForm */ "./src/modules/otherLogic/deleteProjectForm.js");
//functionality for the project delete btns



const container = document.getElementById('main-container');
const modal = document.querySelector('.delete-modal');

function deleteProject(arr){
    container.addEventListener('click',function(e){
        modal.showModal();
      const div= e.target.closest('.card');
      const index = Array.from(container.querySelectorAll('.card')).indexOf(div);
      console.log(index);
      
    //   deleteProjectConfirm(arr,div);
       
    })
}






// const deleteBtn = document.querySelectorAll('.delete-project' );
// const modal = document.querySelector('.delete-modal');
// const container = document.getElementById('main-container');

// // export default function deleteProject(){
// //     Array.from(deleteBtn).forEach(function(element) {
// //         element.addEventListener('click'),function(e){
// //             modal.showModal();
            
// //         }
// //     });
// // }

// export default function deleteProject(arr){
//     container.addEventListener('click', function (e) {
//         if (e.target.classList.contains('delete-project')) {
//             modal.showModal();
//             deleteProjectConfirm(arr);
//         }
//     });
// }

/***/ }),

/***/ "./src/modules/render/deleteProjectSVG.js":
/*!************************************************!*\
  !*** ./src/modules/render/deleteProjectSVG.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSvgComponent)
/* harmony export */ });
function createSvgComponent(){
    // const div = document.createElement('div');
    // div.classList.add('delete-project');

    // SVG Element
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('x', '0px');
    svgElement.setAttribute('y', '0px');
    svgElement.setAttribute('width', '100');
    svgElement.setAttribute('height', '100');
    svgElement.setAttribute('viewBox', '0 0 26 26');
    svgElement.classList.add('delete-project-btn');
    // SVG Path
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', 'M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z');

    // Append SVG Path to SVG Element
    svgElement.appendChild(pathElement);

    //append SVG to div
    // div.appendChild(svgElement);

    // return div;
    return svgElement;
}

/***/ }),

/***/ "./src/modules/render/pageOnload.js":
/*!******************************************!*\
  !*** ./src/modules/render/pageOnload.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnPageLoad)
/* harmony export */ });
/* harmony import */ var _renderEmptyMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderEmptyMessage.js */ "./src/modules/render/renderEmptyMessage.js");
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/countItems */ "./src/modules/storage/countItems.js");
/* harmony import */ var _renderStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderStorage */ "./src/modules/render/renderStorage.js");
/* harmony import */ var _renderProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjects.js */ "./src/modules/render/renderProjects.js");
//to check whther theres any projects created by the user in a prev session







function OnPageLoad(projectList,key){
    document.addEventListener('DOMContentLoaded',function(){
       const items = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_1__["default"])(key)
        if(items === 0){
            (0,_renderEmptyMessage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }else{
            (0,_renderProjects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectList)
        }
        
        
    })
}

/***/ }),

/***/ "./src/modules/render/removeEmptymsg.js":
/*!**********************************************!*\
  !*** ./src/modules/render/removeEmptymsg.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeEmptyMessage)
/* harmony export */ });
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/countItems */ "./src/modules/storage/countItems.js");


const container= document.getElementById('main-container');



function removeEmptyMessage(){
    if (container.classList.contains('center-grid')){

        const emptymsg = document.querySelector('.empty');
        
        container.classList.remove('center-grid');
        container.removeChild(emptymsg);
       }
}


/***/ }),

/***/ "./src/modules/render/renderEmptyMessage.js":
/*!**************************************************!*\
  !*** ./src/modules/render/renderEmptyMessage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderEmptymessage)
/* harmony export */ });
/* harmony import */ var _assets_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/strings.js */ "./src/assets/strings.js");
//render empty message in the case of having no projects



function renderEmptymessage(){
    const mainContainer = document.getElementById('main-container');

    const h1 = document.createElement('h1');
    h1.textContent = _assets_strings_js__WEBPACK_IMPORTED_MODULE_0__.emptyMessage;
    h1.classList.add('empty');
    mainContainer.classList.add('center-grid');
    mainContainer.appendChild(h1);
}

/***/ }),

/***/ "./src/modules/render/renderNewProject.js":
/*!************************************************!*\
  !*** ./src/modules/render/renderNewProject.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderNewProject)
/* harmony export */ });
/* harmony import */ var _deleteProjectSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteProjectSVG */ "./src/modules/render/deleteProjectSVG.js");
//render the latest created project
 


function renderNewProject(name,mark,date,UID){
    const mainContainer = document.getElementById('main-container');
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-UID', UID);
        //marker
        const marker = document.createElement('div');
        marker.classList.add('card-marker');
        marker.style.cssText = `background-color: ${mark};`
        card.appendChild(marker);

        //title
        const title = document.createElement('h2');
        title.textContent=`${name}`;
        title.classList.add('project-title');
        card.appendChild(title);
        
         //svg
         card.appendChild((0,_deleteProjectSVG__WEBPACK_IMPORTED_MODULE_0__["default"])());

        //time
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `${date}`;
        card.appendChild(time);

        mainContainer.appendChild(card)
   
    
}

/***/ }),

/***/ "./src/modules/render/renderProjects.js":
/*!**********************************************!*\
  !*** ./src/modules/render/renderProjects.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _deleteProjectSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteProjectSVG */ "./src/modules/render/deleteProjectSVG.js");




function renderProjects(arr){
    const mainContainer = document.getElementById('main-container');
    arr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-UID', `${element.UID}`);

        //marker
        const marker = document.createElement('div');
        marker.classList.add('card-marker');
        marker.style.cssText = `background-color: ${element.marker};`
        card.appendChild(marker);

        //svg
        card.appendChild((0,_deleteProjectSVG__WEBPACK_IMPORTED_MODULE_0__["default"])());

        //title
        const title = document.createElement('h2');
        title.textContent=`${element.title}`;
        title.classList.add('project-title');
        card.appendChild(title);

        //time
        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = `${element.date}`;
        card.appendChild(time);


        mainContainer.appendChild(card)
    });

    
}

/***/ }),

/***/ "./src/modules/render/renderStorage.js":
/*!*********************************************!*\
  !*** ./src/modules/render/renderStorage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderStorage)
/* harmony export */ });
/* harmony import */ var _renderEmptyMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderEmptyMessage.js */ "./src/modules/render/renderEmptyMessage.js");
//render items in the storage



function renderStorage(arr){
    if(arr.length === 0){
      (0,_renderEmptyMessage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();}
}


/***/ }),

/***/ "./src/modules/render/showAddProjModal.js":
/*!************************************************!*\
  !*** ./src/modules/render/showAddProjModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowProjectAddModal)
/* harmony export */ });
/* harmony import */ var _otherLogic_addProjForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../otherLogic/addProjForm.js */ "./src/modules/otherLogic/addProjForm.js");
/* harmony import */ var _render_closeModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/closeModal.js */ "./src/modules/render/closeModal.js");
/* harmony import */ var _otherLogic_resetForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../otherLogic/resetForm.js */ "./src/modules/otherLogic/resetForm.js");
//event listner to the add project btn




const openbtn = document.getElementById('add-Project');
const modal = document.getElementById('modal');


function ShowProjectAddModal(arr,keyPrefix){
    openbtn.addEventListener('click',function(e){
        modal.showModal();
        (0,_otherLogic_resetForm_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_otherLogic_addProjForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr,keyPrefix);
    })
    ;(0,_render_closeModal_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

/***/ }),

/***/ "./src/modules/storage/countItems.js":
/*!*******************************************!*\
  !*** ./src/modules/storage/countItems.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countItemsWithKeyName)
/* harmony export */ });
//check the number of items in the local storage
function countItemsWithKeyName(keyPrefix) {
    let count = 0;

    // Iterate through all local storage keys
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the desired keyPrefix
        if (key.startsWith(keyPrefix)) {
            count++;
        }
    }

    return count;
}




/***/ }),

/***/ "./src/modules/storage/deleteStorageItems.js":
/*!***************************************************!*\
  !*** ./src/modules/storage/deleteStorageItems.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteStorageItem)
/* harmony export */ });
//delete a item from the local storage

function deleteStorageItem(key){
    localStorage.removeItem(key)
}

/***/ }),

/***/ "./src/modules/storage/getItemsFromStorage.js":
/*!****************************************************!*\
  !*** ./src/modules/storage/getItemsFromStorage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getItemsFromStorage)
/* harmony export */ });
/* harmony import */ var _getStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStorage */ "./src/modules/storage/getStorage.js");
//add whatever project object created fro the storage



function getItemsFromStorage(arr,keyPrefix){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
       
      
        // Check if the key starts with whatever prefix
        if (key.startsWith(keyPrefix)) {
          let value = (0,_getStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
          arr.push(value);
        }
      }
}

/***/ }),

/***/ "./src/modules/storage/getStorage.js":
/*!*******************************************!*\
  !*** ./src/modules/storage/getStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetStorageItems)
/* harmony export */ });
//get items from a storage and parse it

function GetStorageItems(key){
   return JSON.parse(localStorage.getItem(key,))
}

/***/ }),

/***/ "./src/modules/storage/setStorage.js":
/*!*******************************************!*\
  !*** ./src/modules/storage/setStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStorageItem)
/* harmony export */ });
//save objects in the storage as strings
function setStorageItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to store item in localStorage:", error);
    }
  }

/***/ }),

/***/ "./src/modules/test/cache/domElements.js":
/*!***********************************************!*\
  !*** ./src/modules/test/cache/domElements.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardList: () => (/* binding */ CardList)
/* harmony export */ });
const CardList = document.querySelector('.cardList');

/***/ }),

/***/ "./src/modules/test/components/cardComponent.js":
/*!******************************************************!*\
  !*** ./src/modules/test/components/cardComponent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardComponent)
/* harmony export */ });
/* harmony import */ var _cardMarkerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardMarkerComponent */ "./src/modules/test/components/cardMarkerComponent.js");
/* harmony import */ var _deleteBtnComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteBtnComponent */ "./src/modules/test/components/deleteBtnComponent.js");
/* harmony import */ var _cardTitleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardTitleComponent */ "./src/modules/test/components/cardTitleComponent.js");
/* harmony import */ var _cardDateComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardDateComponent */ "./src/modules/test/components/cardDateComponent.js");





function cardComponent(UID,date,mark,name){
    const card = document.createElement('li');
    card.classList.add('card');
    card.setAttribute('data-UID', UID);

    card.appendChild((0,_cardMarkerComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(mark))
    card.appendChild((0,_deleteBtnComponent__WEBPACK_IMPORTED_MODULE_1__["default"])("delete-project-btn"));
    card.appendChild((0,_cardTitleComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(name))
    card.appendChild((0,_cardDateComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(date))
    return card;
}

/***/ }),

/***/ "./src/modules/test/components/cardDateComponent.js":
/*!**********************************************************!*\
  !*** ./src/modules/test/components/cardDateComponent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardDateComponent)
/* harmony export */ });
function cardDateComponent(date){
    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = `${date}`;
}

/***/ }),

/***/ "./src/modules/test/components/cardMarkerComponent.js":
/*!************************************************************!*\
  !*** ./src/modules/test/components/cardMarkerComponent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardMarkerComponent)
/* harmony export */ });
function cardMarkerComponent(mark){
    const marker = document.createElement('div');
    marker.classList.add('card-marker');
    marker.style.cssText = `background-color: ${mark};`
    return marker;
}

/***/ }),

/***/ "./src/modules/test/components/cardTitleComponent.js":
/*!***********************************************************!*\
  !*** ./src/modules/test/components/cardTitleComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardTitleComponent)
/* harmony export */ });
function cardTitleComponent(name){
    const title = document.createElement('h2');
    title.textContent=`${name}`;
    title.classList.add('project-title');
    return title;
}


/***/ }),

/***/ "./src/modules/test/components/deleteBtnComponent.js":
/*!***********************************************************!*\
  !*** ./src/modules/test/components/deleteBtnComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteBtnSVG)
/* harmony export */ });
function deleteBtnSVG(className){
     // SVG Element
     const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
     svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
     svgElement.setAttribute('x', '0px');
     svgElement.setAttribute('y', '0px');
     svgElement.setAttribute('width', '100');
     svgElement.setAttribute('height', '100');
     svgElement.setAttribute('viewBox', '0 0 26 26');
     svgElement.classList.add(className);

     // SVG Path
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', 'M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z');

    // Append SVG Path to SVG Element
    svgElement.appendChild(pathElement);

    return svgElement;

}

/***/ }),

/***/ "./src/modules/test/rendertest/pageload.js":
/*!*************************************************!*\
  !*** ./src/modules/test/rendertest/pageload.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onPageLoad)
/* harmony export */ });
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storage/countItems */ "./src/modules/storage/countItems.js");
/* harmony import */ var _storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage/getItemsFromStorage */ "./src/modules/storage/getItemsFromStorage.js");


function onPageLoad(arr){
    document.addEventListener('DOMContentLoaded',function(){
        const items = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_0__["default"])("project")
         if(items === 0){
             renderEmptymessage();
         }else{ 
            (0,_storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,"project")
             
         }
         
         
     })
}

/***/ }),

/***/ "./src/modules/test/rendertest/renderProjectList.js":
/*!**********************************************************!*\
  !*** ./src/modules/test/rendertest/renderProjectList.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectList)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/test/cache/domElements.js");
/* harmony import */ var _components_cardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cardComponent */ "./src/modules/test/components/cardComponent.js");




function renderProjectList(arr){
    console.log(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList)
    arr.forEach(element => {
        const UID = element.UID;
        const date = element.date;
        const mark = element.marker;
        const name =element.title;
        const cardExists = document.querySelector(`[data-UID="${UID}"]`);
        if(!cardExists){
            _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList.appendChild((0,_components_cardComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(UID,date,mark,name));
        }
        
    });
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _modules_storage_getStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage/getStorage.js */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _modules_storage_setStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage/setStorage.js */ "./src/modules/storage/setStorage.js");
/* harmony import */ var _modules_storage_deleteStorageItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage/deleteStorageItems.js */ "./src/modules/storage/deleteStorageItems.js");
/* harmony import */ var _modules_storage_countItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage/countItems.js */ "./src/modules/storage/countItems.js");
/* harmony import */ var _modules_otherLogic_projectObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/otherLogic/projectObj */ "./src/modules/otherLogic/projectObj.js");
/* harmony import */ var _modules_render_pageOnload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/render/pageOnload */ "./src/modules/render/pageOnload.js");
/* harmony import */ var _modules_storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/storage/getItemsFromStorage */ "./src/modules/storage/getItemsFromStorage.js");
/* harmony import */ var _modules_render_showAddProjModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/render/showAddProjModal */ "./src/modules/render/showAddProjModal.js");
/* harmony import */ var _modules_render_deleteProjectEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/render/deleteProjectEvent */ "./src/modules/render/deleteProjectEvent.js");
/* harmony import */ var _modules_test_rendertest_pageload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/test/rendertest/pageload */ "./src/modules/test/rendertest/pageload.js");
/* harmony import */ var _modules_test_rendertest_renderProjectList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/test/rendertest/renderProjectList */ "./src/modules/test/rendertest/renderProjectList.js");












//newer





    let projectList =[];
 
    (0,_modules_test_rendertest_pageload__WEBPACK_IMPORTED_MODULE_10__["default"])(projectList);

    console.log(projectList);

    (0,_modules_test_rendertest_renderProjectList__WEBPACK_IMPORTED_MODULE_11__["default"])(projectList);







// OnPageLoad(k,"project");

// ShowProjectAddModal(k,"project")
// deleteProject(k);

// console.log(k);
 



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsWUFBWSx3RUFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZ0Q7QUFDUTs7O0FBR3pDO0FBQ2YsZ0JBQWdCLHdEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsSUFBSTtBQUNwRTtBQUNBLFlBQVksd0RBQVEsYUFBYSxxRUFBYTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2tDO0FBQ0Q7QUFDVztBQUNiO0FBQ0M7QUFDUDtBQUNtQjtBQUNKO0FBQ0o7QUFDSTs7QUFFcEU7O0FBRTREO0FBQ2dCOzs7QUFHNUU7QUFDQTtBQUNBLElBQUksOEVBQVU7O0FBRWQ7O0FBRUEsSUFBSSx1RkFBaUI7Ozs7Ozs7O0FBUXJCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHJpbmdzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9vdGhlckxvZ2ljL2FkZFByb2pGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9vdGhlckxvZ2ljL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL290aGVyTG9naWMvZGVsZXRlUHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL290aGVyTG9naWMvcHJvamVjdE9iai5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvb3RoZXJMb2dpYy9yZW1vdmVGcm9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL290aGVyTG9naWMvcmVzZXRGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvY2xvc2VNb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL2RlbGV0ZVByb2plY3RFdmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL2RlbGV0ZVByb2plY3RTVkcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9wYWdlT25sb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvcmVtb3ZlRW1wdHltc2cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW5kZXJFbXB0eU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW5kZXJOZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW5kZXJTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvc2hvd0FkZFByb2pNb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9jb3VudEl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlL2RlbGV0ZVN0b3JhZ2VJdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2Uvc2V0U3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGVzdC9jYWNoZS9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGVzdC9jb21wb25lbnRzL2NhcmRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rlc3QvY29tcG9uZW50cy9jYXJkRGF0ZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGVzdC9jb21wb25lbnRzL2NhcmRNYXJrZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rlc3QvY29tcG9uZW50cy9jYXJkVGl0bGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rlc3QvY29tcG9uZW50cy9kZWxldGVCdG5Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rlc3QvcmVuZGVydGVzdC9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGVzdC9yZW5kZXJ0ZXN0L3JlbmRlclByb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuICAgICAgICAtLW1haW5Db2xvcjojM2M3Nzk0O1xuICAgICAgICAtLXNlY29uZGFyeUNvbG9yOiNmY2UzZjA7XG4gICAgICAgIC0tdGV4dENvbG9yOiMyMDJhNGI7XG4gICAgICAgIC0tYnRuTWFpbjojYzJkZWY3O1xuICAgICAgICAtLWJ0blNjb25kYXJ5OiM4M2IzZDk7XG4gICAgXG4gICAgXG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBoZWlnaHQ6IDEwMHZoOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xufVxuXG4vKiBzdHlsZXMgZm9yIHRoZSBhZGQgcHJvamVjdCBidXR0b24gICovXG5cbi5hZGQtcHJvamVjdC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMyU7XG4gICAgcmlnaHQ6IDMlO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcbn1cblxuLmhvdmVyLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtcHJvamVjdC1jb250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9uIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIHN0eWxlcyBmb3IgdGhlIG1haW4gY29udGFpbmVyICAqL1xuXG4jbWFpbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiAucHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcbiAgICBnYXA6IDVweDtcblxufSAqL1xuXG4uY2FyZExpc3R7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuI21haW4tY29udGFpbmVyLmNlbnRlci1ncmlkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbn1cbiNtYWluLWNvbnRhaW5lci5jZW50ZXItZ3JpZCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgXG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5TY29uZGFyeSk7XG59XG4vKiAuZGVsZXRlLXByb2plY3R7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG59ICovXG4uZGVsZXRlLXByb2plY3QtYnRue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIFxufVxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlcntcbiAgICBmaWxsOnJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY2FyZC1tYXJrZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuXG4vKiBtb2RhbCByZWxhdGVkIHN0bHllcyAqL1xuLmNsb3Nle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxufVxuLmNsb3NlIHN2Z3tcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5jbG9zZSBzdmc6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbGw6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO1FBQ1EsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLHFCQUFxQjs7O0FBRzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQSx1Q0FBdUM7O0FBRXZDO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUEsbUNBQW1DOztBQUVuQztJQUNJLHVDQUF1QztJQUN2QyxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7QUFDQTs7Ozs7O0dBTUc7QUFDSDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFROztBQUVaO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtFQUNSOztBQUVGLHlCQUF5QjtBQUN6QjtJQUNJLGFBQWE7SUFDYjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbiAgICAgICAgLS1tYWluQ29sb3I6IzNjNzc5NDtcXG4gICAgICAgIC0tc2Vjb25kYXJ5Q29sb3I6I2ZjZTNmMDtcXG4gICAgICAgIC0tdGV4dENvbG9yOiMyMDJhNGI7XFxuICAgICAgICAtLWJ0bk1haW46I2MyZGVmNztcXG4gICAgICAgIC0tYnRuU2NvbmRhcnk6IzgzYjNkOTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHRoZSBhZGQgcHJvamVjdCBidXR0b24gICovXFxuXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAzJTtcXG4gICAgcmlnaHQ6IDMlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bk1haW4pO1xcbn1cXG5cXG4uaG92ZXItYnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtcHJvamVjdC1jb250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB0aGUgbWFpbiBjb250YWluZXIgICovXFxuXFxuI21haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIC5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBnYXA6IDVweDtcXG5cXG59ICovXFxuXFxuLmNhcmRMaXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbiNtYWluLWNvbnRhaW5lci5jZW50ZXItZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbn1cXG4jbWFpbi1jb250YWluZXIuY2VudGVyLWdyaWQgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgXFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blNjb25kYXJ5KTtcXG59XFxuLyogLmRlbGV0ZS1wcm9qZWN0e1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufSAqL1xcbi5kZWxldGUtcHJvamVjdC1idG57XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgXFxufVxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXJ7XFxuICAgIGZpbGw6cmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLmNhcmQtbWFya2Vye1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuLyogbW9kYWwgcmVsYXRlZCBzdGx5ZXMgKi9cXG4uY2xvc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcXG59XFxuLmNsb3NlIHN2Z3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmNsb3NlIHN2Zzpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWxsOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgZW1wdHlNZXNzYWdlID0gXCJZb3VyIFByb2plY3QgbGlzdCBpcyBlbXB0eSBjbGljayB0aGUgYWRkIGJ1dHRvbiB0byBhZGQgYSBwcm9qZWN0XCI7XG4iLCIvL3RvIGhhbmRsZSBzdWJtaXQgZXZlbnQgbGlzdGVuZXIgb2YgdGhlIG1vZGFsXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3RPYmonO1xuaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tICcuLi9zdG9yYWdlL2NvdW50SXRlbXMnO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gJy4uL3N0b3JhZ2Uvc2V0U3RvcmFnZS5qcyc7XG5pbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZSBmcm9tICcuLi9zdG9yYWdlL2dldEl0ZW1zRnJvbVN0b3JhZ2UnO1xuaW1wb3J0IHJlbmRlck5ld1Byb2plY3QgZnJvbSAnLi4vcmVuZGVyL3JlbmRlck5ld1Byb2plY3QuanMnO1xuaW1wb3J0IHJlbW92ZUVtcHR5TWVzc2FnZSBmcm9tICcuLi9yZW5kZXIvcmVtb3ZlRW1wdHltc2cnO1xuXG5cbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBtYXJrZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcicpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LVByb2plY3QnKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0UHJvaicpXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFN0b3JlUHJvamVjdChhcnIpIHtcbiAgY29uc3QgdGl0bGUgPSBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgbWFya2VyID0gbWFya2VySW5wdXQudmFsdWU7XG5cbiAgaWYgKCF0aXRsZSB8fCAhbWFya2VyKSB7XG4gICAgLy8gWW91IGNhbiBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2Ugb3Igc2ltcGx5IHJldHVybiB3aXRob3V0IGNyZWF0aW5nL3N0b3JpbmcgdGhlIHByb2plY3RcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGF0ZSA9IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblxuXG5cbiAgY29uc3Qgc3RvcmFnZUxlbmd0aCA9IGNvdW50SXRlbXNXaXRoS2V5TmFtZShcInByb2plY3RcIik7XG4gIGNvbnN0IHByb2plY3ROdW1iZXIgPSBzdG9yYWdlTGVuZ3RoICsgMTtcbiAgY29uc3QgVUlEID0gcHJvamVjdE51bWJlcjtcbiAgY29uc3QgcHJvamVjdEluZm8gPSBjcmVhdGVQcm9qZWN0KHRpdGxlLCBtYXJrZXIsIGRhdGUsVUlEKTtcbiAgc2V0U3RvcmFnZUl0ZW0oYHByb2plY3Qke1VJRH1gLCBwcm9qZWN0SW5mbyk7XG4gIHJlbmRlck5ld1Byb2plY3QodGl0bGUsbWFya2VyLGRhdGUsVUlEKTtcbiAgYXJyLnB1c2gocHJvamVjdEluZm8pO1xuXG4gIHJldHVybiBwcm9qZWN0SW5mbztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TmV3UHJvamVjdEluZm8oYXJyKSB7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZUFuZFN0b3JlUHJvamVjdChhcnIpO1xuICAgIHJlbW92ZUVtcHR5TWVzc2FnZSgpO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgZm9ybS5yZXNldCgpO1xuXG4gIH0pO1xufSIsIi8vbG9naWMgZm9yIGRlbGV0aW5nIGNhcmRzXG5pbXBvcnQgZGVsZXRlU3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2UvZGVsZXRlU3RvcmFnZUl0ZW1zXCI7XG5cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbW92ZVByb2plY3QoZGl2LCB1aWQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBgcHJvamVjdCR7dWlkfWBcbiAgICBkZWxldGVTdG9yYWdlSXRlbSh0YXJnZXQpO1xuICAgIGlmKGRpdil7XG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9XG4gICBcbn1cblxuIiwiaW1wb3J0IHJlbW92ZUZyb21BcnJheSBmcm9tIFwiLi9yZW1vdmVGcm9tQXJyYXlcIjtcbmltcG9ydCBSZW1vdmVQcm9qZWN0IGZyb20gXCIuL2RlbGV0ZVByb2plY3RcIjtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1tb2RhbCcpO1xuY29uc3QgeWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llcycpO1xuY29uc3Qgbm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8nKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDb25maXJtKGFycixkaXYpe1xuICAgY29uc3QgdWlkID0gZGl2LmRhdGFzZXQudWlkO1xuICAgY29uc3QgaDIgPSBkaXYucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgIGNvbnN0IHRpdGxlID1oMi50ZXh0Q29udGVudDtcblxuICAgIHllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgUmVtb3ZlUHJvamVjdChkaXYsIHVpZCk7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfSlcblxuICAgIG5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH0pXG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RDb25maXJtKGFycixlKXtcbi8vICAgICBjb25zdCB5ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzJyk7XG4vLyAgICAgY29uc3Qgbm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8nKTtcblxuLy8gICAgIHllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbi8vICAgICAgICAgY29uc3QgY2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZCcpO1xuLy8gICAgICAgICBjb25zdCBoMiA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbi8vICAgICAgICAgY29uc3QgdGl0bGUgPSAgaDIudGV4dENvbnRlbnQ7XG4vLyAgICAgICAgIGNvbnN0IHVuaXF1ZUlkZW50aWZpZXIgPSBjYXJkLmRhdGFzZXQudWlkO1xuLy8gICAgICAgICBSZW1vdmVQcm9qZWN0KGNhcmQsdW5pcXVlSWRlbnRpZmllcik7XG4vLyAgICAgICAgIC8vIHJlbW92ZUZyb21BcnJheShhcnIsdGl0bGUsdW5pcXVlSWRlbnRpZmllcilcbi8vICAgICAgICAgbW9kYWwuY2xvc2UoKTtcblxuLy8gICAgIH0pXG5cbi8vICAgICBuby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBtb2RhbC5jbG9zZSgpO1xuLy8gICAgIH0pXG4vLyB9IiwiLy9hbiBvYmplY3QgZmFjdG9yeSB0byBnZW5lcmF0ZSBhbiBvYmplY3QgZm9yIGVhY2ggcHJvamVjdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSxtYXJrZXIsZGF0ZSxVSUQpe1xuICAgIHJldHVybntcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1hcmtlcixcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgVUlEXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUZyb21BcnJheShhcnIsa2V5LHVpZCl7XG4gICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmKGVsZW1lbnQudGl0bGUgPT09IGtleSl7XG4gICAgICAgICAgICBpZihlbGVtZW50LmRhdGFzZXQudWlkID09PSB1aWQpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBhcnIuaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCIvL2V2ZW50IGxpc3RuZXIgdG8gdGhlIHJlc2V0IGJ0biB0byByZXNldCB0aGUgcHJvamVjdCBmb3JtIGlmIGNsaWNrZWRcblxuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInJlc2V0XCJdJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctUHJvamVjdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNldE5ld1Byb2plY3RGb3JtKCl7XG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KVxufSIsIi8vbW9kdWxlIHRvIGhhbmRsZSB0aGUgY2xvc2UgYnRuIC5jbG9zZVxuXG5jb25zdCBjbG9zZSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlIHN2ZycpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpe1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCxmdW5jdGlvbigpe1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH0pXG59IiwiLy9mdW5jdGlvbmFsaXR5IGZvciB0aGUgcHJvamVjdCBkZWxldGUgYnRuc1xuaW1wb3J0IGRlbGV0ZVByb2plY3RDb25maXJtIGZyb20gXCIuLi9vdGhlckxvZ2ljL2RlbGV0ZVByb2plY3RGb3JtXCI7XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtbW9kYWwnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChhcnIpe1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgY29uc3QgZGl2PSBlLnRhcmdldC5jbG9zZXN0KCcuY2FyZCcpO1xuICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpKS5pbmRleE9mKGRpdik7XG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICBcbiAgICAvLyAgIGRlbGV0ZVByb2plY3RDb25maXJtKGFycixkaXYpO1xuICAgICAgIFxuICAgIH0pXG59XG5cblxuXG5cblxuXG4vLyBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QnICk7XG4vLyBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtbW9kYWwnKTtcbi8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCl7XG4vLyAvLyAgICAgQXJyYXkuZnJvbShkZWxldGVCdG4pLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuLy8gLy8gICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyksZnVuY3Rpb24oZSl7XG4vLyAvLyAgICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIFxuLy8gLy8gICAgICAgICB9XG4vLyAvLyAgICAgfSk7XG4vLyAvLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoYXJyKXtcbi8vICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdCcpKSB7XG4vLyAgICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbi8vICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RDb25maXJtKGFycik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdmdDb21wb25lbnQoKXtcbiAgICAvLyBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBkaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKTtcblxuICAgIC8vIFNWRyBFbGVtZW50XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gnLCAnMHB4Jyk7XG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3knLCAnMHB4Jyk7XG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCcpO1xuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJyk7XG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI2IDI2Jyk7XG4gICAgc3ZnRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKTtcbiAgICAvLyBTVkcgUGF0aFxuICAgIGNvbnN0IHBhdGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgcGF0aEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkJywgJ00gMjEuNzM0Mzc1IDE5LjY0MDYyNSBMIDE5LjYzNjcxOSAyMS43MzQzNzUgQyAxOS4yNTM5MDYgMjIuMTIxMDk0IDE4LjYyODkwNiAyMi4xMjEwOTQgMTguMjQyMTg4IDIxLjczNDM3NSBMIDEzIDE2LjQ5NjA5NCBMIDcuNzYxNzE5IDIxLjczNDM3NSBDIDcuMzc1IDIyLjEyMTA5NCA2Ljc0NjA5NCAyMi4xMjEwOTQgNi4zNjMyODEgMjEuNzM0Mzc1IEwgNC4yNjU2MjUgMTkuNjQwNjI1IEMgMy44Nzg5MDYgMTkuMjUzOTA2IDMuODc4OTA2IDE4LjYyODkwNiA0LjI2NTYyNSAxOC4yNDIxODggTCA5LjUwMzkwNiAxMyBMIDQuMjY1NjI1IDcuNzYxNzE5IEMgMy44ODI4MTMgNy4zNzEwOTQgMy44ODI4MTMgNi43NDIxODggNC4yNjU2MjUgNi4zNjMyODEgTCA2LjM2MzI4MSA0LjI2NTYyNSBDIDYuNzQ2MDk0IDMuODc4OTA2IDcuMzc1IDMuODc4OTA2IDcuNzYxNzE5IDQuMjY1NjI1IEwgMTMgOS41MDc4MTMgTCAxOC4yNDIxODggNC4yNjU2MjUgQyAxOC42Mjg5MDYgMy44Nzg5MDYgMTkuMjU3ODEzIDMuODc4OTA2IDE5LjYzNjcxOSA0LjI2NTYyNSBMIDIxLjczNDM3NSA2LjM1OTM3NSBDIDIyLjEyMTA5NCA2Ljc0NjA5NCAyMi4xMjEwOTQgNy4zNzUgMjEuNzM4MjgxIDcuNzYxNzE5IEwgMTYuNDk2MDk0IDEzIEwgMjEuNzM0Mzc1IDE4LjI0MjE4OCBDIDIyLjEyMTA5NCAxOC42Mjg5MDYgMjIuMTIxMDk0IDE5LjI1MzkwNiAyMS43MzQzNzUgMTkuNjQwNjI1IFonKTtcblxuICAgIC8vIEFwcGVuZCBTVkcgUGF0aCB0byBTVkcgRWxlbWVudFxuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocGF0aEVsZW1lbnQpO1xuXG4gICAgLy9hcHBlbmQgU1ZHIHRvIGRpdlxuICAgIC8vIGRpdi5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgIC8vIHJldHVybiBkaXY7XG4gICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XG59IiwiLy90byBjaGVjayB3aHRoZXIgdGhlcmVzIGFueSBwcm9qZWN0cyBjcmVhdGVkIGJ5IHRoZSB1c2VyIGluIGEgcHJldiBzZXNzaW9uXG5pbXBvcnQgcmVuZGVyRW1wdHltZXNzYWdlIGZyb20gXCIuL3JlbmRlckVtcHR5TWVzc2FnZS5qc1wiO1xuaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tIFwiLi4vc3RvcmFnZS9jb3VudEl0ZW1zXCI7XG5pbXBvcnQgcmVuZGVyU3RvcmFnZSBmcm9tIFwiLi9yZW5kZXJTdG9yYWdlXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcmVuZGVyUHJvamVjdHMuanNcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uUGFnZUxvYWQocHJvamVjdExpc3Qsa2V5KXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJyxmdW5jdGlvbigpe1xuICAgICAgIGNvbnN0IGl0ZW1zID0gY291bnRJdGVtc1dpdGhLZXlOYW1lKGtleSlcbiAgICAgICAgaWYoaXRlbXMgPT09IDApe1xuICAgICAgICAgICAgcmVuZGVyRW1wdHltZXNzYWdlKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdExpc3QpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG59IiwiaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tIFwiLi4vc3RvcmFnZS9jb3VudEl0ZW1zXCI7XG5cbmNvbnN0IGNvbnRhaW5lcj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVFbXB0eU1lc3NhZ2UoKXtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2VudGVyLWdyaWQnKSl7XG5cbiAgICAgICAgY29uc3QgZW1wdHltc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHknKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjZW50ZXItZ3JpZCcpO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZW1wdHltc2cpO1xuICAgICAgIH1cbn1cbiIsIi8vcmVuZGVyIGVtcHR5IG1lc3NhZ2UgaW4gdGhlIGNhc2Ugb2YgaGF2aW5nIG5vIHByb2plY3RzXG5cbmltcG9ydCB7ZW1wdHlNZXNzYWdlfSBmcm9tICcuLi8uLi9hc3NldHMvc3RyaW5ncy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckVtcHR5bWVzc2FnZSgpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IGVtcHR5TWVzc2FnZTtcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyLWdyaWQnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbn0iLCIvL3JlbmRlciB0aGUgbGF0ZXN0IGNyZWF0ZWQgcHJvamVjdFxuIGltcG9ydCBjcmVhdGVTdmdDb21wb25lbnQgZnJvbSBcIi4vZGVsZXRlUHJvamVjdFNWR1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck5ld1Byb2plY3QobmFtZSxtYXJrLGRhdGUsVUlEKXtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLVVJRCcsIFVJRCk7XG4gICAgICAgIC8vbWFya2VyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYXJrZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1tYXJrZXInKTtcbiAgICAgICAgbWFya2VyLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1jb2xvcjogJHttYXJrfTtgXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobWFya2VyKTtcblxuICAgICAgICAvL3RpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQ9YCR7bmFtZX1gO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgIC8vc3ZnXG4gICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZVN2Z0NvbXBvbmVudCgpKTtcblxuICAgICAgICAvL3RpbWVcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBgJHtkYXRlfWA7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGltZSk7XG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgXG4gICAgXG59IiwiaW1wb3J0IGNyZWF0ZVN2Z0NvbXBvbmVudCBmcm9tIFwiLi9kZWxldGVQcm9qZWN0U1ZHXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhhcnIpe1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtVUlEJywgYCR7ZWxlbWVudC5VSUR9YCk7XG5cbiAgICAgICAgLy9tYXJrZXJcbiAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKCdjYXJkLW1hcmtlcicpO1xuICAgICAgICBtYXJrZXIuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2VsZW1lbnQubWFya2VyfTtgXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobWFya2VyKTtcblxuICAgICAgICAvL3N2Z1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZVN2Z0NvbXBvbmVudCgpKTtcblxuICAgICAgICAvL3RpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQ9YCR7ZWxlbWVudC50aXRsZX1gO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIC8vdGltZVxuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuZGF0ZX1gO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpbWUpO1xuXG5cbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIH0pO1xuXG4gICAgXG59IiwiLy9yZW5kZXIgaXRlbXMgaW4gdGhlIHN0b3JhZ2VcblxuaW1wb3J0IHJlbmRlckVtcHR5bWVzc2FnZSBmcm9tIFwiLi9yZW5kZXJFbXB0eU1lc3NhZ2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIHJlbmRlclN0b3JhZ2UoYXJyKXtcbiAgICBpZihhcnIubGVuZ3RoID09PSAwKXtcbiAgICAgIHJlbmRlckVtcHR5bWVzc2FnZSgpO31cbn1cbiIsIi8vZXZlbnQgbGlzdG5lciB0byB0aGUgYWRkIHByb2plY3QgYnRuXG5pbXBvcnQgZ2V0TmV3UHJvamVjdEluZm8gZnJvbSAnLi4vb3RoZXJMb2dpYy9hZGRQcm9qRm9ybS5qcyc7XG5pbXBvcnQgY2xvc2VNb2RhbCBmcm9tICcuLi9yZW5kZXIvY2xvc2VNb2RhbC5qcydcbmltcG9ydCByZXNldE5ld1Byb2plY3RGb3JtIGZyb20gJy4uL290aGVyTG9naWMvcmVzZXRGb3JtLmpzJztcblxuY29uc3Qgb3BlbmJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtUHJvamVjdCcpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93UHJvamVjdEFkZE1vZGFsKGFycixrZXlQcmVmaXgpe1xuICAgIG9wZW5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgcmVzZXROZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBnZXROZXdQcm9qZWN0SW5mbyhhcnIsa2V5UHJlZml4KTtcbiAgICB9KVxuICAgIGNsb3NlTW9kYWwoKVxufSIsIi8vY2hlY2sgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRJdGVtc1dpdGhLZXlOYW1lKGtleVByZWZpeCkge1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggYWxsIGxvY2FsIHN0b3JhZ2Uga2V5c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGtleSBzdGFydHMgd2l0aCB0aGUgZGVzaXJlZCBrZXlQcmVmaXhcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGtleVByZWZpeCkpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQ7XG59XG5cblxuIiwiLy9kZWxldGUgYSBpdGVtIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlU3RvcmFnZUl0ZW0oa2V5KXtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG59IiwiLy9hZGQgd2hhdGV2ZXIgcHJvamVjdCBvYmplY3QgY3JlYXRlZCBmcm8gdGhlIHN0b3JhZ2VcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4vZ2V0U3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBnZXRJdGVtc0Zyb21TdG9yYWdlKGFycixrZXlQcmVmaXgpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgIFxuICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBrZXkgc3RhcnRzIHdpdGggd2hhdGV2ZXIgcHJlZml4XG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChrZXlQcmVmaXgpKSB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gR2V0U3RvcmFnZUl0ZW1zKGtleSlcbiAgICAgICAgICBhcnIucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbn0iLCIvL2dldCBpdGVtcyBmcm9tIGEgc3RvcmFnZSBhbmQgcGFyc2UgaXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0U3RvcmFnZUl0ZW1zKGtleSl7XG4gICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXksKSlcbn0iLCIvL3NhdmUgb2JqZWN0cyBpbiB0aGUgc3RvcmFnZSBhcyBzdHJpbmdzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdG9yYWdlSXRlbShrZXksIHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzdG9yZSBpdGVtIGluIGxvY2FsU3RvcmFnZTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfSIsImV4cG9ydCBjb25zdCBDYXJkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkTGlzdCcpOyIsImltcG9ydCBjYXJkTWFya2VyQ29tcG9uZW50IGZyb20gXCIuL2NhcmRNYXJrZXJDb21wb25lbnRcIjtcbmltcG9ydCBkZWxldGVCdG5TVkcgZnJvbSBcIi4vZGVsZXRlQnRuQ29tcG9uZW50XCI7XG5pbXBvcnQgY2FyZFRpdGxlQ29tcG9uZW50IGZyb20gXCIuL2NhcmRUaXRsZUNvbXBvbmVudFwiO1xuaW1wb3J0IGNhcmREYXRlQ29tcG9uZW50IGZyb20gXCIuL2NhcmREYXRlQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRDb21wb25lbnQoVUlELGRhdGUsbWFyayxuYW1lKXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1VSUQnLCBVSUQpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkTWFya2VyQ29tcG9uZW50KG1hcmspKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuU1ZHKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZUNvbXBvbmVudChuYW1lKSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREYXRlQ29tcG9uZW50KGRhdGUpKVxuICAgIHJldHVybiBjYXJkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmREYXRlQ29tcG9uZW50KGRhdGUpe1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IGAke2RhdGV9YDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJkTWFya2VyQ29tcG9uZW50KG1hcmspe1xuICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKCdjYXJkLW1hcmtlcicpO1xuICAgIG1hcmtlci5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtY29sb3I6ICR7bWFya307YFxuICAgIHJldHVybiBtYXJrZXI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZFRpdGxlQ29tcG9uZW50KG5hbWUpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudD1gJHtuYW1lfWA7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgIHJldHVybiB0aXRsZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUJ0blNWRyhjbGFzc05hbWUpe1xuICAgICAvLyBTVkcgRWxlbWVudFxuICAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd4JywgJzBweCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgneScsICcwcHgnKTtcbiAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjYgMjYnKTtcbiAgICAgc3ZnRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICAgLy8gU1ZHIFBhdGhcbiAgICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHBhdGhFbGVtZW50LnNldEF0dHJpYnV0ZSgnZCcsICdNIDIxLjczNDM3NSAxOS42NDA2MjUgTCAxOS42MzY3MTkgMjEuNzM0Mzc1IEMgMTkuMjUzOTA2IDIyLjEyMTA5NCAxOC42Mjg5MDYgMjIuMTIxMDk0IDE4LjI0MjE4OCAyMS43MzQzNzUgTCAxMyAxNi40OTYwOTQgTCA3Ljc2MTcxOSAyMS43MzQzNzUgQyA3LjM3NSAyMi4xMjEwOTQgNi43NDYwOTQgMjIuMTIxMDk0IDYuMzYzMjgxIDIxLjczNDM3NSBMIDQuMjY1NjI1IDE5LjY0MDYyNSBDIDMuODc4OTA2IDE5LjI1MzkwNiAzLjg3ODkwNiAxOC42Mjg5MDYgNC4yNjU2MjUgMTguMjQyMTg4IEwgOS41MDM5MDYgMTMgTCA0LjI2NTYyNSA3Ljc2MTcxOSBDIDMuODgyODEzIDcuMzcxMDk0IDMuODgyODEzIDYuNzQyMTg4IDQuMjY1NjI1IDYuMzYzMjgxIEwgNi4zNjMyODEgNC4yNjU2MjUgQyA2Ljc0NjA5NCAzLjg3ODkwNiA3LjM3NSAzLjg3ODkwNiA3Ljc2MTcxOSA0LjI2NTYyNSBMIDEzIDkuNTA3ODEzIEwgMTguMjQyMTg4IDQuMjY1NjI1IEMgMTguNjI4OTA2IDMuODc4OTA2IDE5LjI1NzgxMyAzLjg3ODkwNiAxOS42MzY3MTkgNC4yNjU2MjUgTCAyMS43MzQzNzUgNi4zNTkzNzUgQyAyMi4xMjEwOTQgNi43NDYwOTQgMjIuMTIxMDk0IDcuMzc1IDIxLjczODI4MSA3Ljc2MTcxOSBMIDE2LjQ5NjA5NCAxMyBMIDIxLjczNDM3NSAxOC4yNDIxODggQyAyMi4xMjEwOTQgMTguNjI4OTA2IDIyLjEyMTA5NCAxOS4yNTM5MDYgMjEuNzM0Mzc1IDE5LjY0MDYyNSBaJyk7XG5cbiAgICAvLyBBcHBlbmQgU1ZHIFBhdGggdG8gU1ZHIEVsZW1lbnRcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KTtcblxuICAgIHJldHVybiBzdmdFbGVtZW50O1xuXG59IiwiaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tIFwiLi4vLi4vc3RvcmFnZS9jb3VudEl0ZW1zXCI7XG5pbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZVxuIGZyb20gXCIuLi8uLi9zdG9yYWdlL2dldEl0ZW1zRnJvbVN0b3JhZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uUGFnZUxvYWQoYXJyKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJyxmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpdGVtcyA9IGNvdW50SXRlbXNXaXRoS2V5TmFtZShcInByb2plY3RcIilcbiAgICAgICAgIGlmKGl0ZW1zID09PSAwKXtcbiAgICAgICAgICAgICByZW5kZXJFbXB0eW1lc3NhZ2UoKTtcbiAgICAgICAgIH1lbHNleyBcbiAgICAgICAgICAgIGdldEl0ZW1zRnJvbVN0b3JhZ2UoYXJyLFwicHJvamVjdFwiKVxuICAgICAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgfSlcbn0iLCJpbXBvcnQgeyBDYXJkTGlzdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNhcmRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZENvbXBvbmVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KGFycil7XG4gICAgY29uc29sZS5sb2coQ2FyZExpc3QpXG4gICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IFVJRCA9IGVsZW1lbnQuVUlEO1xuICAgICAgICBjb25zdCBkYXRlID0gZWxlbWVudC5kYXRlO1xuICAgICAgICBjb25zdCBtYXJrID0gZWxlbWVudC5tYXJrZXI7XG4gICAgICAgIGNvbnN0IG5hbWUgPWVsZW1lbnQudGl0bGU7XG4gICAgICAgIGNvbnN0IGNhcmRFeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1VSUQ9XCIke1VJRH1cIl1gKTtcbiAgICAgICAgaWYoIWNhcmRFeGlzdHMpe1xuICAgICAgICAgICAgQ2FyZExpc3QuYXBwZW5kQ2hpbGQoY2FyZENvbXBvbmVudChVSUQsZGF0ZSxtYXJrLG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS9nZXRTdG9yYWdlLmpzXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlL3NldFN0b3JhZ2UuanNcIjtcbmltcG9ydCBEZWxldGVTdG9yYWdlSXRlbSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2UvZGVsZXRlU3RvcmFnZUl0ZW1zLmpzXCI7XG5pbXBvcnQgY2hlY2tTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS9jb3VudEl0ZW1zLmpzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL21vZHVsZXMvb3RoZXJMb2dpYy9wcm9qZWN0T2JqJztcbmltcG9ydCBPblBhZ2VMb2FkIGZyb20gJy4vbW9kdWxlcy9yZW5kZXIvcGFnZU9ubG9hZCc7XG5pbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlJztcbmltcG9ydCBTaG93UHJvamVjdEFkZE1vZGFsIGZyb20gJy4vbW9kdWxlcy9yZW5kZXIvc2hvd0FkZFByb2pNb2RhbCc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcmVuZGVyL2RlbGV0ZVByb2plY3RFdmVudCc7XG5pbXBvcnQgY291bnRJdGVtc1dpdGhLZXlOYW1lIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlL2NvdW50SXRlbXMuanMnO1xuXG4vL25ld2VyXG5cbmltcG9ydCBvblBhZ2VMb2FkIGZyb20gJy4vbW9kdWxlcy90ZXN0L3JlbmRlcnRlc3QvcGFnZWxvYWQnO1xuaW1wb3J0IHJlbmRlclByb2plY3RMaXN0IGZyb20gJy4vbW9kdWxlcy90ZXN0L3JlbmRlcnRlc3QvcmVuZGVyUHJvamVjdExpc3QnO1xuXG5cbiAgICBsZXQgcHJvamVjdExpc3QgPVtdO1xuIFxuICAgIG9uUGFnZUxvYWQocHJvamVjdExpc3QpO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG4gICAgcmVuZGVyUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuXG5cblxuXG5cblxuXG4vLyBPblBhZ2VMb2FkKGssXCJwcm9qZWN0XCIpO1xuXG4vLyBTaG93UHJvamVjdEFkZE1vZGFsKGssXCJwcm9qZWN0XCIpXG4vLyBkZWxldGVQcm9qZWN0KGspO1xuXG4vLyBjb25zb2xlLmxvZyhrKTtcbiBcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=