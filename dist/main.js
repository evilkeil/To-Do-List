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

/***/ "./src/modules/cache/domElements.js":
/*!******************************************!*\
  !*** ./src/modules/cache/domElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardList: () => (/* binding */ CardList),
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   closeSVG: () => (/* binding */ closeSVG),
/* harmony export */   deleteModal: () => (/* binding */ deleteModal),
/* harmony export */   mainContainer: () => (/* binding */ mainContainer),
/* harmony export */   markerInput: () => (/* binding */ markerInput),
/* harmony export */   modalAddProject: () => (/* binding */ modalAddProject),
/* harmony export */   no: () => (/* binding */ no),
/* harmony export */   openbtn: () => (/* binding */ openbtn),
/* harmony export */   projectTitleInput: () => (/* binding */ projectTitleInput),
/* harmony export */   resetButton: () => (/* binding */ resetButton),
/* harmony export */   submitButton: () => (/* binding */ submitButton),
/* harmony export */   yes: () => (/* binding */ yes)
/* harmony export */ });
//main elements

const mainContainer = document.getElementById('main-container');// the main container
const CardList = document.getElementById('cardUL'); //the ul containing the cards
 

//capture elements related to the add project modals imput fields

const openbtn = document.getElementById('add-Project'); //the button to open the add project modal
const modalAddProject = document.getElementById('modal'); //the add project modal
const resetButton = document.querySelector('button[type="reset"]');  //the button to reset the add project modal
const addProjectForm = document.getElementById('add-new-Project'); //the addproject modal form
const projectTitleInput = document.getElementById('title');
const markerInput = document.getElementById('color');
const submitButton = document.getElementById('submitProj');
const closeSVG =document.querySelector('.close svg');//the close btn in the add project modal


//delete projects related elements

const deleteModal = document.querySelector('.delete-modal');
const yes = document.getElementById('yes');
const no = document.getElementById('no');


/***/ }),

/***/ "./src/modules/cache/strings.js":
/*!**************************************!*\
  !*** ./src/modules/cache/strings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyMessageString: () => (/* binding */ emptyMessageString)
/* harmony export */ });
const emptyMessageString = "Your Project list is empty click the add button to add a project";


/***/ }),

/***/ "./src/modules/components/cardComponent.js":
/*!*************************************************!*\
  !*** ./src/modules/components/cardComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardComponent)
/* harmony export */ });
/* harmony import */ var _cardMarkerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardMarkerComponent */ "./src/modules/components/cardMarkerComponent.js");
/* harmony import */ var _deleteBtnComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteBtnComponent */ "./src/modules/components/deleteBtnComponent.js");
/* harmony import */ var _cardTitleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardTitleComponent */ "./src/modules/components/cardTitleComponent.js");
/* harmony import */ var _cardDateComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardDateComponent */ "./src/modules/components/cardDateComponent.js");





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

/***/ "./src/modules/components/cardDateComponent.js":
/*!*****************************************************!*\
  !*** ./src/modules/components/cardDateComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardDateComponent)
/* harmony export */ });
function cardDateComponent(date){
    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = `${date}`;
    return time;
}

/***/ }),

/***/ "./src/modules/components/cardMarkerComponent.js":
/*!*******************************************************!*\
  !*** ./src/modules/components/cardMarkerComponent.js ***!
  \*******************************************************/
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

/***/ "./src/modules/components/cardTitleComponent.js":
/*!******************************************************!*\
  !*** ./src/modules/components/cardTitleComponent.js ***!
  \******************************************************/
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

/***/ "./src/modules/components/deleteBtnComponent.js":
/*!******************************************************!*\
  !*** ./src/modules/components/deleteBtnComponent.js ***!
  \******************************************************/
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

/***/ "./src/modules/deleteBtnLogic/deleteFromArray.js":
/*!*******************************************************!*\
  !*** ./src/modules/deleteBtnLogic/deleteFromArray.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteFromArray)
/* harmony export */ });
/* harmony import */ var _render_renderProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderProjectList */ "./src/modules/render/renderProjectList.js");
// import renderProjectList from "../rendertest/renderProjectList";



function deleteFromArray(arr,index){
    arr.splice(index,1);
    (0,_render_renderProjectList__WEBPACK_IMPORTED_MODULE_0__["default"])(arr)
}

/***/ }),

/***/ "./src/modules/deleteBtnLogic/deleteModalInputs.js":
/*!*********************************************************!*\
  !*** ./src/modules/deleteBtnLogic/deleteModalInputs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteModalInputs)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _deleteFromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteFromArray */ "./src/modules/deleteBtnLogic/deleteFromArray.js");
/* harmony import */ var _storage_deleteStorageItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/deleteStorageItems */ "./src/modules/storage/deleteStorageItems.js");




function deleteModalInputs(arr,index,uid){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.yes.addEventListener('click',(e)=>{
        (0,_deleteFromArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,index);
        (0,_storage_deleteStorageItems__WEBPACK_IMPORTED_MODULE_2__["default"])(`project${uid}`);
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.deleteModal.close();
    })

    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.no.addEventListener('click',(e)=>{
        e.preventDefault();
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.deleteModal.close();
    })
}

/***/ }),

/***/ "./src/modules/formControl/addProjectFormReset.js":
/*!********************************************************!*\
  !*** ./src/modules/formControl/addProjectFormReset.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resetAddProjectForm)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");


function resetAddProjectForm(){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.resetButton.addEventListener('click',(e)=>{
        e.preventDefault();
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.reset();
    })
}

/***/ }),

/***/ "./src/modules/formControl/formInputControl.js":
/*!*****************************************************!*\
  !*** ./src/modules/formControl/formInputControl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _otherLogic_projectObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otherLogic/projectObj */ "./src/modules/otherLogic/projectObj.js");
/* harmony import */ var _render_renderProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderProjectList */ "./src/modules/render/renderProjectList.js");
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/countItems */ "./src/modules/storage/countItems.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");


// import renderProjectList from "../rendertest/renderProjectList";




function createNewProject(arr){
    const title = _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectTitleInput.value; //to be stored
    const marker = _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.markerInput.value; //to be stored
    
    if (!title || !marker) {
        // if user didnt include a titel or a marker
        return;
      }

      const currentDate = new Date();
      const date = currentDate.toISOString().split('T')[0];  //to be stored
      const storageLength = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_3__["default"])("project");
      const UID = storageLength + 1;;
      const projectInfo = (0,_otherLogic_projectObj__WEBPACK_IMPORTED_MODULE_1__["default"])(title, marker, date,UID);
      (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(`project${UID}`, projectInfo); //add to storage for later sessions;
      arr.push(projectInfo); //push it into the projects list array
      (0,_render_renderProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])(arr); //render it

}

/***/ }),

/***/ "./src/modules/formControl/submitNewProject.js":
/*!*****************************************************!*\
  !*** ./src/modules/formControl/submitNewProject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ submitNewProject)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _formInputControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInputControl */ "./src/modules/formControl/formInputControl.js");
/* harmony import */ var _render_removeEmptymsg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/removeEmptymsg */ "./src/modules/render/removeEmptymsg.js");


// import removeEmptyMessage from "../rendertest/removeEmptymsg";


function submitNewProject(arr){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        (0,_formInputControl__WEBPACK_IMPORTED_MODULE_1__["default"])(arr);
        (0,_render_removeEmptymsg__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.modalAddProject.close();
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.reset();
        

    })
}

/***/ }),

/***/ "./src/modules/otherLogic/projectObj.js":
/*!**********************************************!*\
  !*** ./src/modules/otherLogic/projectObj.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectObj)
/* harmony export */ });
//an object factory to generate an object for each project
function createProjectObj(title,marker,date,UID){
    return{
        title,
        marker,
        date,
        UID
    }
}

/***/ }),

/***/ "./src/modules/render/addProjectBtnEventListener.js":
/*!**********************************************************!*\
  !*** ./src/modules/render/addProjectBtnEventListener.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectBtn)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _formControl_addProjectFormReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formControl/addProjectFormReset */ "./src/modules/formControl/addProjectFormReset.js");
/* harmony import */ var _formControl_submitNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formControl/submitNewProject */ "./src/modules/formControl/submitNewProject.js");
/* harmony import */ var _closeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closeModal */ "./src/modules/render/closeModal.js");





function addProjectBtn(arr){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.openbtn.addEventListener('click',(e)=>{
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.modalAddProject.showModal();
        (0,_closeModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_formControl_addProjectFormReset__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_formControl_submitNewProject__WEBPACK_IMPORTED_MODULE_2__["default"])(arr)
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
/* harmony export */   "default": () => (/* binding */ closeAddProjectModal)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
//module to handle the close btn .close




function closeAddProjectModal(){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.closeSVG.addEventListener(`click`,function(){
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.modalAddProject.close();
    })
}

/***/ }),

/***/ "./src/modules/render/deleteProjectEventListerner.js":
/*!***********************************************************!*\
  !*** ./src/modules/render/deleteProjectEventListerner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProjectBtn)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _deleteBtnLogic_deleteModalInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deleteBtnLogic/deleteModalInputs */ "./src/modules/deleteBtnLogic/deleteModalInputs.js");



function deleteProjectBtn(arr){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList.addEventListener('click',(e)=>{
        const target = e.target;
        const svgPath = document.querySelector('delete-project-btn path')
       if (target.classList.contains('delete-project-btn')|| svgPath ){
            const closestLi = target.closest('li');
            const index = Array.from(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList.children).indexOf(closestLi);
            const uid = closestLi.getAttribute('data-uid')
            _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.deleteModal.showModal();
            (0,_deleteBtnLogic_deleteModalInputs__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,index,uid);
            
       }
    })
}

/***/ }),

/***/ "./src/modules/render/pageload.js":
/*!****************************************!*\
  !*** ./src/modules/render/pageload.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onPageLoad)
/* harmony export */ });
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/countItems */ "./src/modules/storage/countItems.js");
/* harmony import */ var _storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/getItemsFromStorage */ "./src/modules/storage/getItemsFromStorage.js");
/* harmony import */ var _renderProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjectList */ "./src/modules/render/renderProjectList.js");
/* harmony import */ var _renderMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderMessage */ "./src/modules/render/renderMessage.js");

// import getItemsFromStorage from "../../storage/getItemsFromStorage";




function onPageLoad(arr){
    document.addEventListener('DOMContentLoaded',function(){
        const items = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_0__["default"])("project")
         if(items === 0){
            (0,_renderMessage__WEBPACK_IMPORTED_MODULE_3__["default"])();
         }else{ 
            (0,_storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,"project")
             
         }
         (0,_renderProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])(arr);
         
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
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");





function removeEmptyMessage(){
    if (_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.classList.contains('center-grid')){

        const emptymsg = document.querySelector('.empty');
        
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.classList.remove('center-grid');
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(emptymsg);
       }
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList);
}


/***/ }),

/***/ "./src/modules/render/renderMessage.js":
/*!*********************************************!*\
  !*** ./src/modules/render/renderMessage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ emptyMessage)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/strings */ "./src/modules/cache/strings.js");



function emptyMessage(){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.removeChild(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList);
    const h1 = document.createElement('h1');
    h1.textContent = _cache_strings__WEBPACK_IMPORTED_MODULE_1__.emptyMessageString;
    h1.classList.add('empty');
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.classList.add('center-grid');
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(h1);
}

/***/ }),

/***/ "./src/modules/render/renderProjectList.js":
/*!*************************************************!*\
  !*** ./src/modules/render/renderProjectList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectList)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _components_cardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cardComponent */ "./src/modules/components/cardComponent.js");






function renderProjectList(arr){
    
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
/* harmony import */ var _modules_render_pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render/pageload.js */ "./src/modules/render/pageload.js");
/* harmony import */ var _modules_render_addProjectBtnEventListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render/addProjectBtnEventListener.js */ "./src/modules/render/addProjectBtnEventListener.js");
/* harmony import */ var _modules_render_deleteProjectEventListerner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render/deleteProjectEventListerner */ "./src/modules/render/deleteProjectEventListerner.js");


//newer

// import onPageLoad from './modules/test/rendertest/pageload';

// import addProjectBtn from './modules/render/addProjectBtnEventListener';

// import deleteProjectBtn from './modules/test/rendertest/deleteProjectEventListerner';



     let projectList =[];
 
    (0,_modules_render_pageload_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectList);

    (0,_modules_render_addProjectBtnEventListener_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectList)

    ;(0,_modules_render_deleteProjectEventListerner__WEBPACK_IMPORTED_MODULE_3__["default"])(projectList)





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUM0RTs7O0FBRzVFO0FBQ0E7QUFDQSxJQUFJLHVFQUFVOztBQUVkLElBQUkseUZBQWE7O0FBRWpCLElBQUksd0ZBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jYWNoZS9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2FjaGUvc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NhcmREYXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NhcmRNYXJrZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2FyZFRpdGxlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2RlbGV0ZUJ0bkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRlQnRuTG9naWMvZGVsZXRlRnJvbUFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGVCdG5Mb2dpYy9kZWxldGVNb2RhbElucHV0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybUNvbnRyb2wvYWRkUHJvamVjdEZvcm1SZXNldC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybUNvbnRyb2wvZm9ybUlucHV0Q29udHJvbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZm9ybUNvbnRyb2wvc3VibWl0TmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvb3RoZXJMb2dpYy9wcm9qZWN0T2JqLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvYWRkUHJvamVjdEJ0bkV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9jbG9zZU1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvZGVsZXRlUHJvamVjdEV2ZW50TGlzdGVybmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW1vdmVFbXB0eW1zZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL3JlbmRlck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW5kZXJQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9jb3VudEl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlL2RlbGV0ZVN0b3JhZ2VJdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2Uvc2V0U3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICAgICAgLS1tYWluQ29sb3I6IzNjNzc5NDtcbiAgICAgICAgLS1zZWNvbmRhcnlDb2xvcjojZmNlM2YwO1xuICAgICAgICAtLXRleHRDb2xvcjojMjAyYTRiO1xuICAgICAgICAtLWJ0bk1haW46I2MyZGVmNztcbiAgICAgICAgLS1idG5TY29uZGFyeTojODNiM2Q5O1xuICAgIFxuICAgIFxufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgaGVpZ2h0OiAxMDB2aDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbn1cblxuLyogc3R5bGVzIGZvciB0aGUgYWRkIHByb2plY3QgYnV0dG9uICAqL1xuXG4uYWRkLXByb2plY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDMlO1xuICAgIHJpZ2h0OiAzJTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuTWFpbik7XG59XG5cbi5ob3Zlci1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuTWFpbik7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBzdHlsZXMgZm9yIHRoZSBtYWluIGNvbnRhaW5lciAgKi9cblxuI21haW4tY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XG4gICAgZ2FwOiA1cHg7XG5cbn0gKi9cblxuLmNhcmRMaXN0e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcbiAgICBnYXA6IDVweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5cbiNtYWluLWNvbnRhaW5lci5jZW50ZXItZ3JpZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgXG59XG4jbWFpbi1jb250YWluZXIuY2VudGVyLWdyaWQgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuU2NvbmRhcnkpO1xufVxuLyogLmRlbGV0ZS1wcm9qZWN0e1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufSAqL1xuLmRlbGV0ZS1wcm9qZWN0LWJ0bntcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBcbn1cbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXJ7XG4gICAgZmlsbDpyZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmNhcmQtbWFya2Vye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gIH1cblxuLyogbW9kYWwgcmVsYXRlZCBzdGx5ZXMgKi9cbi5jbG9zZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmRcbn1cbi5jbG9zZSBzdmd7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xufVxuXG4uY2xvc2Ugc3ZnOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtRQUNRLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixxQkFBcUI7OztBQUc3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUEsdUNBQXVDOztBQUV2QztJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBLG1DQUFtQzs7QUFFbkM7SUFDSSx1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTs7QUFFWjtBQUNBO0lBQ0ksUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07RUFDUjs7QUFFRix5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2I7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgICAgIC0tbWFpbkNvbG9yOiMzYzc3OTQ7XFxuICAgICAgICAtLXNlY29uZGFyeUNvbG9yOiNmY2UzZjA7XFxuICAgICAgICAtLXRleHRDb2xvcjojMjAyYTRiO1xcbiAgICAgICAgLS1idG5NYWluOiNjMmRlZjc7XFxuICAgICAgICAtLWJ0blNjb25kYXJ5OiM4M2IzZDk7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB0aGUgYWRkIHByb2plY3QgYnV0dG9uICAqL1xcblxcbi5hZGQtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMyU7XFxuICAgIHJpZ2h0OiAzJTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcXG59XFxuXFxuLmhvdmVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuTWFpbik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgdGhlIG1haW4gY29udGFpbmVyICAqL1xcblxcbiNtYWluLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiAucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxufSAqL1xcblxcbi5jYXJkTGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG4jbWFpbi1jb250YWluZXIuY2VudGVyLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG59XFxuI21haW4tY29udGFpbmVyLmNlbnRlci1ncmlkIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FyZDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5TY29uZGFyeSk7XFxufVxcbi8qIC5kZWxldGUtcHJvamVjdHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn0gKi9cXG4uZGVsZXRlLXByb2plY3QtYnRue1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIFxcbn1cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBmaWxsOnJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGltZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5jYXJkLW1hcmtlcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgfVxcblxcbi8qIG1vZGFsIHJlbGF0ZWQgc3RseWVzICovXFxuLmNsb3Nle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXFxufVxcbi5jbG9zZSBzdmd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5jbG9zZSBzdmc6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsbDogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9tYWluIGVsZW1lbnRzXG5cbmV4cG9ydCBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7Ly8gdGhlIG1haW4gY29udGFpbmVyXG5leHBvcnQgY29uc3QgQ2FyZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZFVMJyk7IC8vdGhlIHVsIGNvbnRhaW5pbmcgdGhlIGNhcmRzXG4gXG5cbi8vY2FwdHVyZSBlbGVtZW50cyByZWxhdGVkIHRvIHRoZSBhZGQgcHJvamVjdCBtb2RhbHMgaW1wdXQgZmllbGRzXG5cbmV4cG9ydCBjb25zdCBvcGVuYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1Qcm9qZWN0Jyk7IC8vdGhlIGJ1dHRvbiB0byBvcGVuIHRoZSBhZGQgcHJvamVjdCBtb2RhbFxuZXhwb3J0IGNvbnN0IG1vZGFsQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpOyAvL3RoZSBhZGQgcHJvamVjdCBtb2RhbFxuZXhwb3J0IGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJyZXNldFwiXScpOyAgLy90aGUgYnV0dG9uIHRvIHJlc2V0IHRoZSBhZGQgcHJvamVjdCBtb2RhbFxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctUHJvamVjdCcpOyAvL3RoZSBhZGRwcm9qZWN0IG1vZGFsIGZvcm1cbmV4cG9ydCBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuZXhwb3J0IGNvbnN0IG1hcmtlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yJyk7XG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFByb2onKTtcbmV4cG9ydCBjb25zdCBjbG9zZVNWRyA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlIHN2ZycpOy8vdGhlIGNsb3NlIGJ0biBpbiB0aGUgYWRkIHByb2plY3QgbW9kYWxcblxuXG4vL2RlbGV0ZSBwcm9qZWN0cyByZWxhdGVkIGVsZW1lbnRzXG5cbmV4cG9ydCBjb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtbW9kYWwnKTtcbmV4cG9ydCBjb25zdCB5ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVzJyk7XG5leHBvcnQgY29uc3Qgbm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm8nKTtcbiIsImV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2VTdHJpbmcgPSBcIllvdXIgUHJvamVjdCBsaXN0IGlzIGVtcHR5IGNsaWNrIHRoZSBhZGQgYnV0dG9uIHRvIGFkZCBhIHByb2plY3RcIjtcbiIsImltcG9ydCBjYXJkTWFya2VyQ29tcG9uZW50IGZyb20gXCIuL2NhcmRNYXJrZXJDb21wb25lbnRcIjtcbmltcG9ydCBkZWxldGVCdG5TVkcgZnJvbSBcIi4vZGVsZXRlQnRuQ29tcG9uZW50XCI7XG5pbXBvcnQgY2FyZFRpdGxlQ29tcG9uZW50IGZyb20gXCIuL2NhcmRUaXRsZUNvbXBvbmVudFwiO1xuaW1wb3J0IGNhcmREYXRlQ29tcG9uZW50IGZyb20gXCIuL2NhcmREYXRlQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRDb21wb25lbnQoVUlELGRhdGUsbWFyayxuYW1lKXtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1VSUQnLCBVSUQpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkTWFya2VyQ29tcG9uZW50KG1hcmspKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuU1ZHKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZUNvbXBvbmVudChuYW1lKSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREYXRlQ29tcG9uZW50KGRhdGUpKVxuICAgIHJldHVybiBjYXJkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmREYXRlQ29tcG9uZW50KGRhdGUpe1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IGAke2RhdGV9YDtcbiAgICByZXR1cm4gdGltZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJkTWFya2VyQ29tcG9uZW50KG1hcmspe1xuICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKCdjYXJkLW1hcmtlcicpO1xuICAgIG1hcmtlci5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtY29sb3I6ICR7bWFya307YFxuICAgIHJldHVybiBtYXJrZXI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZFRpdGxlQ29tcG9uZW50KG5hbWUpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudD1gJHtuYW1lfWA7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgIHJldHVybiB0aXRsZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUJ0blNWRyhjbGFzc05hbWUpe1xuICAgICAvLyBTVkcgRWxlbWVudFxuICAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd4JywgJzBweCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgneScsICcwcHgnKTtcbiAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjYgMjYnKTtcbiAgICAgc3ZnRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICAgLy8gU1ZHIFBhdGhcbiAgICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIHBhdGhFbGVtZW50LnNldEF0dHJpYnV0ZSgnZCcsICdNIDIxLjczNDM3NSAxOS42NDA2MjUgTCAxOS42MzY3MTkgMjEuNzM0Mzc1IEMgMTkuMjUzOTA2IDIyLjEyMTA5NCAxOC42Mjg5MDYgMjIuMTIxMDk0IDE4LjI0MjE4OCAyMS43MzQzNzUgTCAxMyAxNi40OTYwOTQgTCA3Ljc2MTcxOSAyMS43MzQzNzUgQyA3LjM3NSAyMi4xMjEwOTQgNi43NDYwOTQgMjIuMTIxMDk0IDYuMzYzMjgxIDIxLjczNDM3NSBMIDQuMjY1NjI1IDE5LjY0MDYyNSBDIDMuODc4OTA2IDE5LjI1MzkwNiAzLjg3ODkwNiAxOC42Mjg5MDYgNC4yNjU2MjUgMTguMjQyMTg4IEwgOS41MDM5MDYgMTMgTCA0LjI2NTYyNSA3Ljc2MTcxOSBDIDMuODgyODEzIDcuMzcxMDk0IDMuODgyODEzIDYuNzQyMTg4IDQuMjY1NjI1IDYuMzYzMjgxIEwgNi4zNjMyODEgNC4yNjU2MjUgQyA2Ljc0NjA5NCAzLjg3ODkwNiA3LjM3NSAzLjg3ODkwNiA3Ljc2MTcxOSA0LjI2NTYyNSBMIDEzIDkuNTA3ODEzIEwgMTguMjQyMTg4IDQuMjY1NjI1IEMgMTguNjI4OTA2IDMuODc4OTA2IDE5LjI1NzgxMyAzLjg3ODkwNiAxOS42MzY3MTkgNC4yNjU2MjUgTCAyMS43MzQzNzUgNi4zNTkzNzUgQyAyMi4xMjEwOTQgNi43NDYwOTQgMjIuMTIxMDk0IDcuMzc1IDIxLjczODI4MSA3Ljc2MTcxOSBMIDE2LjQ5NjA5NCAxMyBMIDIxLjczNDM3NSAxOC4yNDIxODggQyAyMi4xMjEwOTQgMTguNjI4OTA2IDIyLjEyMTA5NCAxOS4yNTM5MDYgMjEuNzM0Mzc1IDE5LjY0MDYyNSBaJyk7XG5cbiAgICAvLyBBcHBlbmQgU1ZHIFBhdGggdG8gU1ZHIEVsZW1lbnRcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KTtcblxuICAgIHJldHVybiBzdmdFbGVtZW50O1xuXG59IiwiLy8gaW1wb3J0IHJlbmRlclByb2plY3RMaXN0IGZyb20gXCIuLi9yZW5kZXJ0ZXN0L3JlbmRlclByb2plY3RMaXN0XCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4uL3JlbmRlci9yZW5kZXJQcm9qZWN0TGlzdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUZyb21BcnJheShhcnIsaW5kZXgpe1xuICAgIGFyci5zcGxpY2UoaW5kZXgsMSk7XG4gICAgcmVuZGVyUHJvamVjdExpc3QoYXJyKVxufSIsImltcG9ydCB7IHllcyxubyxkZWxldGVNb2RhbCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGRlbGV0ZUZyb21BcnJheSBmcm9tIFwiLi9kZWxldGVGcm9tQXJyYXlcIjtcbmltcG9ydCBkZWxldGVTdG9yYWdlSXRlbSBmcm9tIFwiLi4vc3RvcmFnZS9kZWxldGVTdG9yYWdlSXRlbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlTW9kYWxJbnB1dHMoYXJyLGluZGV4LHVpZCl7XG4gICAgeWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZGVsZXRlRnJvbUFycmF5KGFycixpbmRleCk7XG4gICAgICAgIGRlbGV0ZVN0b3JhZ2VJdGVtKGBwcm9qZWN0JHt1aWR9YCk7XG4gICAgICAgIGRlbGV0ZU1vZGFsLmNsb3NlKCk7XG4gICAgfSlcblxuICAgIG5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGVNb2RhbC5jbG9zZSgpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcmVzZXRCdXR0b24sYWRkUHJvamVjdEZvcm0gfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzZXRBZGRQcm9qZWN0Rm9ybSgpe1xuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcHJvamVjdFRpdGxlSW5wdXQsbWFya2VySW5wdXQsIH0gZnJvbSBcIi4uL2NhY2hlL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdE9iaiBmcm9tIFwiLi4vb3RoZXJMb2dpYy9wcm9qZWN0T2JqXCI7XG4vLyBpbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4uL3JlbmRlcnRlc3QvcmVuZGVyUHJvamVjdExpc3RcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0TGlzdCBmcm9tIFwiLi4vcmVuZGVyL3JlbmRlclByb2plY3RMaXN0XCI7XG5pbXBvcnQgY291bnRJdGVtc1dpdGhLZXlOYW1lIGZyb20gXCIuLi9zdG9yYWdlL2NvdW50SXRlbXNcIjtcbmltcG9ydCBzZXRTdG9yYWdlSXRlbSBmcm9tIFwiLi4vc3RvcmFnZS9zZXRTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoYXJyKXtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlOyAvL3RvIGJlIHN0b3JlZFxuICAgIGNvbnN0IG1hcmtlciA9IG1hcmtlcklucHV0LnZhbHVlOyAvL3RvIGJlIHN0b3JlZFxuICAgIFxuICAgIGlmICghdGl0bGUgfHwgIW1hcmtlcikge1xuICAgICAgICAvLyBpZiB1c2VyIGRpZG50IGluY2x1ZGUgYSB0aXRlbCBvciBhIG1hcmtlclxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07ICAvL3RvIGJlIHN0b3JlZFxuICAgICAgY29uc3Qgc3RvcmFnZUxlbmd0aCA9IGNvdW50SXRlbXNXaXRoS2V5TmFtZShcInByb2plY3RcIik7XG4gICAgICBjb25zdCBVSUQgPSBzdG9yYWdlTGVuZ3RoICsgMTs7XG4gICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGNyZWF0ZVByb2plY3RPYmoodGl0bGUsIG1hcmtlciwgZGF0ZSxVSUQpO1xuICAgICAgc2V0U3RvcmFnZUl0ZW0oYHByb2plY3Qke1VJRH1gLCBwcm9qZWN0SW5mbyk7IC8vYWRkIHRvIHN0b3JhZ2UgZm9yIGxhdGVyIHNlc3Npb25zO1xuICAgICAgYXJyLnB1c2gocHJvamVjdEluZm8pOyAvL3B1c2ggaXQgaW50byB0aGUgcHJvamVjdHMgbGlzdCBhcnJheVxuICAgICAgcmVuZGVyUHJvamVjdExpc3QoYXJyKTsgLy9yZW5kZXIgaXRcblxufSIsImltcG9ydCB7IHN1Ym1pdEJ1dHRvbixhZGRQcm9qZWN0Rm9ybSxtb2RhbEFkZFByb2plY3QgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCBjcmVhdGVOZXdQcm9qZWN0IGZyb20gXCIuL2Zvcm1JbnB1dENvbnRyb2xcIjtcbi8vIGltcG9ydCByZW1vdmVFbXB0eU1lc3NhZ2UgZnJvbSBcIi4uL3JlbmRlcnRlc3QvcmVtb3ZlRW1wdHltc2dcIjtcbmltcG9ydCByZW1vdmVFbXB0eU1lc3NhZ2UgZnJvbSBcIi4uL3JlbmRlci9yZW1vdmVFbXB0eW1zZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJtaXROZXdQcm9qZWN0KGFycil7XG4gICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KGFycik7XG4gICAgICAgIHJlbW92ZUVtcHR5TWVzc2FnZSgpO1xuICAgICAgICBtb2RhbEFkZFByb2plY3QuY2xvc2UoKTtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgXG5cbiAgICB9KVxufSIsIi8vYW4gb2JqZWN0IGZhY3RvcnkgdG8gZ2VuZXJhdGUgYW4gb2JqZWN0IGZvciBlYWNoIHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPYmoodGl0bGUsbWFya2VyLGRhdGUsVUlEKXtcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBtYXJrZXIsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIFVJRFxuICAgIH1cbn0iLCJpbXBvcnQgeyBvcGVuYnRuLG1vZGFsQWRkUHJvamVjdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IHJlc2V0QWRkUHJvamVjdEZvcm0gZnJvbSBcIi4uL2Zvcm1Db250cm9sL2FkZFByb2plY3RGb3JtUmVzZXRcIjtcbmltcG9ydCBzdWJtaXROZXdQcm9qZWN0IGZyb20gXCIuLi9mb3JtQ29udHJvbC9zdWJtaXROZXdQcm9qZWN0XCI7XG5pbXBvcnQgY2xvc2VBZGRQcm9qZWN0TW9kYWwgZnJvbSBcIi4vY2xvc2VNb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0QnRuKGFycil7XG4gICAgb3BlbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIG1vZGFsQWRkUHJvamVjdC5zaG93TW9kYWwoKTtcbiAgICAgICAgY2xvc2VBZGRQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgcmVzZXRBZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBzdWJtaXROZXdQcm9qZWN0KGFycilcbiAgICB9KVxufSIsIi8vbW9kdWxlIHRvIGhhbmRsZSB0aGUgY2xvc2UgYnRuIC5jbG9zZVxuXG5pbXBvcnQgeyBjbG9zZVNWRyxtb2RhbEFkZFByb2plY3QgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZUFkZFByb2plY3RNb2RhbCgpe1xuICAgIGNsb3NlU1ZHLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCxmdW5jdGlvbigpe1xuICAgICAgICBtb2RhbEFkZFByb2plY3QuY2xvc2UoKTtcbiAgICB9KVxufSIsImltcG9ydCB7IENhcmRMaXN0ICxkZWxldGVNb2RhbH0gZnJvbSBcIi4uL2NhY2hlL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgZGVsZXRlTW9kYWxJbnB1dHMgZnJvbSBcIi4uL2RlbGV0ZUJ0bkxvZ2ljL2RlbGV0ZU1vZGFsSW5wdXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RCdG4oYXJyKXtcbiAgICBDYXJkTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBzdmdQYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGVsZXRlLXByb2plY3QtYnRuIHBhdGgnKVxuICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdC1idG4nKXx8IHN2Z1BhdGggKXtcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RMaSA9IHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKENhcmRMaXN0LmNoaWxkcmVuKS5pbmRleE9mKGNsb3Nlc3RMaSk7XG4gICAgICAgICAgICBjb25zdCB1aWQgPSBjbG9zZXN0TGkuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpXG4gICAgICAgICAgICBkZWxldGVNb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRlbGV0ZU1vZGFsSW5wdXRzKGFycixpbmRleCx1aWQpO1xuICAgICAgICAgICAgXG4gICAgICAgfVxuICAgIH0pXG59IiwiaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tIFwiLi4vc3RvcmFnZS9jb3VudEl0ZW1zXCI7XG4vLyBpbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZSBmcm9tIFwiLi4vLi4vc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlXCI7XG5pbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZSBmcm9tIFwiLi4vc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4vcmVuZGVyUHJvamVjdExpc3RcIjtcbmltcG9ydCBlbXB0eU1lc3NhZ2UgZnJvbSBcIi4vcmVuZGVyTWVzc2FnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblBhZ2VMb2FkKGFycil7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBjb3VudEl0ZW1zV2l0aEtleU5hbWUoXCJwcm9qZWN0XCIpXG4gICAgICAgICBpZihpdGVtcyA9PT0gMCl7XG4gICAgICAgICAgICBlbXB0eU1lc3NhZ2UoKTtcbiAgICAgICAgIH1lbHNleyBcbiAgICAgICAgICAgIGdldEl0ZW1zRnJvbVN0b3JhZ2UoYXJyLFwicHJvamVjdFwiKVxuICAgICAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoYXJyKTtcbiAgICAgICAgIFxuICAgICB9KVxufSIsImltcG9ydCB7IG1haW5Db250YWluZXIsQ2FyZExpc3QgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlNZXNzYWdlKCl7XG4gICAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZW50ZXItZ3JpZCcpKXtcblxuICAgICAgICBjb25zdCBlbXB0eW1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpO1xuICAgICAgICBcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjZW50ZXItZ3JpZCcpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGVtcHR5bXNnKTtcbiAgICAgICB9XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChDYXJkTGlzdCk7XG59XG4iLCJpbXBvcnQgeyBtYWluQ29udGFpbmVyLENhcmRMaXN0fSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCB7IGVtcHR5TWVzc2FnZVN0cmluZyB9IGZyb20gXCIuLi9jYWNoZS9zdHJpbmdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5TWVzc2FnZSgpe1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoQ2FyZExpc3QpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IGVtcHR5TWVzc2FnZVN0cmluZztcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyLWdyaWQnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbn0iLCJpbXBvcnQgeyBDYXJkTGlzdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNhcmRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZENvbXBvbmVudFwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChhcnIpe1xuICAgIFxuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBVSUQgPSBlbGVtZW50LlVJRDtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGVsZW1lbnQuZGF0ZTtcbiAgICAgICAgY29uc3QgbWFyayA9IGVsZW1lbnQubWFya2VyO1xuICAgICAgICBjb25zdCBuYW1lID1lbGVtZW50LnRpdGxlO1xuICAgICAgICBjb25zdCBjYXJkRXhpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtVUlEPVwiJHtVSUR9XCJdYCk7XG4gICAgICAgIGlmKCFjYXJkRXhpc3RzKXtcbiAgICAgICAgICAgIENhcmRMaXN0LmFwcGVuZENoaWxkKGNhcmRDb21wb25lbnQoVUlELGRhdGUsbWFyayxuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG59IiwiLy9jaGVjayB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudEl0ZW1zV2l0aEtleU5hbWUoa2V5UHJlZml4KSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgbG9jYWwgc3RvcmFnZSBrZXlzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUga2V5IHN0YXJ0cyB3aXRoIHRoZSBkZXNpcmVkIGtleVByZWZpeFxuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoa2V5UHJlZml4KSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbn1cblxuXG4iLCIvL2RlbGV0ZSBhIGl0ZW0gZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVTdG9yYWdlSXRlbShrZXkpe1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbn0iLCIvL2FkZCB3aGF0ZXZlciBwcm9qZWN0IG9iamVjdCBjcmVhdGVkIGZybyB0aGUgc3RvcmFnZVxuaW1wb3J0IEdldFN0b3JhZ2VJdGVtcyBmcm9tIFwiLi9nZXRTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIGdldEl0ZW1zRnJvbVN0b3JhZ2UoYXJyLGtleVByZWZpeCl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgXG4gICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGtleSBzdGFydHMgd2l0aCB3aGF0ZXZlciBwcmVmaXhcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGtleVByZWZpeCkpIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBHZXRTdG9yYWdlSXRlbXMoa2V5KVxuICAgICAgICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8vZ2V0IGl0ZW1zIGZyb20gYSBzdG9yYWdlIGFuZCBwYXJzZSBpdFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRTdG9yYWdlSXRlbXMoa2V5KXtcbiAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSwpKVxufSIsIi8vc2F2ZSBvYmplY3RzIGluIHRoZSBzdG9yYWdlIGFzIHN0cmluZ3NcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0b3JhZ2VJdGVtKGtleSwgdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHN0b3JlIGl0ZW0gaW4gbG9jYWxTdG9yYWdlOlwiLCBlcnJvcik7XG4gICAgfVxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZS5jc3MnO1xuXG4vL25ld2VyXG5cbi8vIGltcG9ydCBvblBhZ2VMb2FkIGZyb20gJy4vbW9kdWxlcy90ZXN0L3JlbmRlcnRlc3QvcGFnZWxvYWQnO1xuaW1wb3J0IG9uUGFnZUxvYWQgZnJvbSAnLi9tb2R1bGVzL3JlbmRlci9wYWdlbG9hZC5qcyc7XG4vLyBpbXBvcnQgYWRkUHJvamVjdEJ0biBmcm9tICcuL21vZHVsZXMvcmVuZGVyL2FkZFByb2plY3RCdG5FdmVudExpc3RlbmVyJztcbmltcG9ydCBhZGRQcm9qZWN0QnRuIGZyb20gJy4vbW9kdWxlcy9yZW5kZXIvYWRkUHJvamVjdEJ0bkV2ZW50TGlzdGVuZXIuanMnXG4vLyBpbXBvcnQgZGVsZXRlUHJvamVjdEJ0biBmcm9tICcuL21vZHVsZXMvdGVzdC9yZW5kZXJ0ZXN0L2RlbGV0ZVByb2plY3RFdmVudExpc3Rlcm5lcic7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEJ0biBmcm9tICcuL21vZHVsZXMvcmVuZGVyL2RlbGV0ZVByb2plY3RFdmVudExpc3Rlcm5lcic7XG5cblxuICAgICBsZXQgcHJvamVjdExpc3QgPVtdO1xuIFxuICAgIG9uUGFnZUxvYWQocHJvamVjdExpc3QpO1xuXG4gICAgYWRkUHJvamVjdEJ0bihwcm9qZWN0TGlzdClcblxuICAgIGRlbGV0ZVByb2plY3RCdG4ocHJvamVjdExpc3QpXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==