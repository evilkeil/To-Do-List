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
.task-closed{
    display: grid;
    place-items: center;
}
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
}

/* task list styles */
.task-open{
    display: grid;
    place-content: center;
    grid-template-columns: 80%;
}
#task-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    position: relative;
    margin-top: 50px;
    margin-left: 15%;
   
    border: 1px solid black;
    
}
#task-container h1{
    margin-left: 15%;
    margin-top: 50px;
}

.task-list{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    list-style: none;

}
.task-list .taskdone::before{
    
    content: '✓';
}
.task-list li{
    display: flex;
    align-items: center;
    justify-content: center;
}
.return{
 position: absolute;
 top: 25px;
 right: 50px;
 width: 3rem;
 height: 3rem;
 margin-top: 50px;
}
.return:hover{
    cursor: pointer;
    fill:red;
}

.add-task-btn{
    width: 100px;
    height: 50px;
    position: absolute;
    top:25px;
    right: 100px;
    border-radius: 30px;
    margin-top: 50px;
}

.add-task-btn:hover{
    cursor: pointer;
    background-color: var(--mainColor);
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;QACQ,mBAAmB;QACnB,wBAAwB;QACxB,mBAAmB;QACnB,iBAAiB;QACjB,qBAAqB;;;AAG7B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;AACtC;;AAEA,uCAAuC;;AAEvC;IACI,kCAAkC;IAClC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,SAAS;IACT,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,gCAAgC;IAChC,uBAAuB;IACvB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;IAClB,oCAAoC;IACpC,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA,mCAAmC;;AAEnC;IACI,uCAAuC;IACvC,UAAU;IACV,YAAY;IACZ,cAAc;AAClB;;AAEA;;;;;;GAMG;AACH;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,QAAQ;IACR,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;AACA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,oCAAoC;AACxC;AACA;;;;;;GAMG;AACH;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,QAAQ;;AAEZ;AACA;IACI,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,eAAe;IACf,uBAAuB;IACvB,UAAU;IACV,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,SAAS;IACT,+BAA+B;IAC/B,kBAAkB;IAClB,OAAO;IACP,MAAM;EACR;;AAEF,yBAAyB;AACzB;IACI,aAAa;IACb;AACJ;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,qBAAqB;IACrB,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;;IAEhB,uBAAuB;;AAE3B;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;IACX,gBAAgB;;AAEpB;AACA;;IAEI,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,WAAW;CACX,YAAY;CACZ,gBAAgB;AACjB;AACA;IACI,eAAe;IACf,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kCAAkC;AACtC","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root{\n        --mainColor:#3c7794;\n        --secondaryColor:#fce3f0;\n        --textColor:#202a4b;\n        --btnMain:#c2def7;\n        --btnScondary:#83b3d9;\n    \n    \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n    height: 100vh; \n    background-color: var(--mainColor);\n}\n\n/* styles for the add project button  */\n\n.add-project-container {\n    border: 1px solid var(--textColor);\n    width: 5rem;\n    height: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 3%;\n    right: 3%;\n    font-size: 5rem;\n    background-color: var(--btnMain);\n}\n\n.hover-btn {\n    background: none;\n    border: none;\n    font-size: inherit;\n    cursor: pointer;\n    color: var(--textColor);\n}\n\n.description {\n    width: 5rem;\n    height: 5rem;\n    border-radius:50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--btnMain);\n    color: var(--textColor);\n    padding: 5px 10px;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease-in-out;\n    font-size: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n.add-project-container:hover{\n    cursor: pointer;\n}\n.add-project-container:hover .description {\n    opacity: 1;\n    visibility: visible;\n}\n\n/* styles for the main container  */\n\n#main-container{\n    background-color: var(--secondaryColor);\n    width: 80%;\n    height: 100%;\n    overflow: auto;\n}\n\n/* .projects {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-auto-rows: 100px;\n    gap: 5px;\n\n} */\n.task-closed{\n    display: grid;\n    place-items: center;\n}\n.cardList{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-auto-rows: 100px;\n    gap: 5px;\n    padding: 0;\n}\n\n\n#main-container.center-grid {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n   \n}\n#main-container.center-grid h1 {\n    text-align: center;\n   \n}\n\n.card {\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin: 10px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n.card:hover{\n    cursor: pointer;\n    background-color: var(--btnScondary);\n}\n/* .delete-project{\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n} */\n.delete-project-btn{\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    \n}\n.delete-project-btn:hover{\n    fill:red;\n    cursor: pointer;\n}\n\n.time {\n    position: absolute;\n    bottom: 0px;\n    right: 5px;\n    font-size: 1rem;\n    color: var(--textColor);\n    padding: 0;\n    margin: 0;\n  }\n\n  .card-marker{\n    height: 100%;\n    width: 5%;\n    background-color: rebeccapurple;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n/* modal related stlyes */\n.close{\n    display: flex;\n    justify-content: flex-end\n}\n.close svg{\n    width: 15px;\n    height: 15px;\n}\n\n.close svg:hover{\n    cursor: pointer;\n    fill: red;\n}\n\n/* task list styles */\n.task-open{\n    display: grid;\n    place-content: center;\n    grid-template-columns: 80%;\n}\n#task-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    width: 75%;\n    position: relative;\n    margin-top: 50px;\n    margin-left: 15%;\n   \n    border: 1px solid black;\n    \n}\n#task-container h1{\n    margin-left: 15%;\n    margin-top: 50px;\n}\n\n.task-list{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    font-size: 1.5rem;\n    width: 100%;\n    list-style: none;\n\n}\n.task-list .taskdone::before{\n    \n    content: '✓';\n}\n.task-list li{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.return{\n position: absolute;\n top: 25px;\n right: 50px;\n width: 3rem;\n height: 3rem;\n margin-top: 50px;\n}\n.return:hover{\n    cursor: pointer;\n    fill:red;\n}\n\n.add-task-btn{\n    width: 100px;\n    height: 50px;\n    position: absolute;\n    top:25px;\n    right: 100px;\n    border-radius: 30px;\n    margin-top: 50px;\n}\n\n.add-task-btn:hover{\n    cursor: pointer;\n    background-color: var(--mainColor);\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/components/taskListRelatedComponents/taskDivComponent.js":
/*!******************************************************************************!*\
  !*** ./src/modules/components/taskListRelatedComponents/taskDivComponent.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskDivComponent)
/* harmony export */ });
/* harmony import */ var _storage_countItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storage/countItems */ "./src/modules/storage/countItems.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage/getStorage */ "./src/modules/storage/getStorage.js");



function taskDivComponent(title){
    const items = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_0__["default"])(title);
   if(items !== 0){
   const project =  (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(title);
        console.log(project);
   }
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
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");




function deleteModalInputs(arr,index,uid,n){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.yes.addEventListener('click',(e)=>{
        (0,_deleteFromArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,index);
        (0,_storage_deleteStorageItems__WEBPACK_IMPORTED_MODULE_2__["default"])(`project${uid}`);
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.deleteModal.close();
        // n--;
        // setStorageItem("number", n);

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




function createNewProject(arr,n){
    const title = _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectTitleInput.value; //to be stored
    const marker = _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.markerInput.value; //to be stored
    
    if (!title || !marker) {
        // if user didnt include a titel or a marker
        return;
      }

      const currentDate = new Date();
      const date = currentDate.toISOString().split('T')[0];  //to be stored
      const storageLength = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_3__["default"])("project");
      // const UID = storageLength + 1;; // temp 
      
      const projectInfo = (0,_otherLogic_projectObj__WEBPACK_IMPORTED_MODULE_1__["default"])(title, marker, date,n);
      (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(`project${n}`, projectInfo); //add to storage for later sessions;
     
      arr.push(projectInfo); //push it into the projects list array
      (0,_render_renderProjectList__WEBPACK_IMPORTED_MODULE_2__["default"])(arr); //render it
      n++;
      (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])("number", n);
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
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");


// import removeEmptyMessage from "../rendertest/removeEmptymsg";




function submitNewProject(arr,n){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        (0,_formInputControl__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,n);
        (0,_render_removeEmptymsg__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.modalAddProject.close();
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.reset();
        
        console.log(n);
        
        n++;
        
        

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
// import { openbtn,modalAddProject } from "../cache/domElements";





function addProjectBtn(arr,n){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.openbtn.addEventListener('click',(e)=>{
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.modalAddProject.showModal();
        (0,_closeModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_formControl_addProjectFormReset__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_formControl_submitNewProject__WEBPACK_IMPORTED_MODULE_2__["default"])(arr,n);
    })
}

/***/ }),

/***/ "./src/modules/render/cardEventListener.js":
/*!*************************************************!*\
  !*** ./src/modules/render/cardEventListener.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardEventListener)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _deleteProjectEventListerner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteProjectEventListerner */ "./src/modules/render/deleteProjectEventListerner.js");
/* harmony import */ var _openTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openTasks */ "./src/modules/render/openTasks.js");




function cardEventListener(arr,n){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList.addEventListener('click',(e)=>{
        const target = e.target;
        const closestLi = target.closest('li');
        const uid = closestLi.getAttribute('data-uid')
        ;(0,_deleteProjectEventListerner__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,n,target);
        (0,_openTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(target,uid);
        // if(target.classList.contains('card')){
        //     console.log("there is a card")
        // }
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



function deleteProjectBtn(arr,n,target){
   
        
        const svgPath = document.querySelector('delete-project-btn path')
       if (target.classList.contains('delete-project-btn')|| svgPath ){
            const closestLi = target.closest('li');
            const index = Array.from(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.CardList.children).indexOf(closestLi);
            const uid = closestLi.getAttribute('data-uid')
            _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.deleteModal.showModal();
            (0,_deleteBtnLogic_deleteModalInputs__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,index,uid,n);
            
       }
    
}

// export default function deleteProjectBtn(arr,n){
//     CardList.addEventListener('click',(e)=>{
//         const target = e.target;
//         const svgPath = document.querySelector('delete-project-btn path')
//        if (target.classList.contains('delete-project-btn')|| svgPath ){
//             const closestLi = target.closest('li');
//             const index = Array.from(CardList.children).indexOf(closestLi);
//             const uid = closestLi.getAttribute('data-uid')
//             deleteModal.showModal();
//             deleteModalInputs(arr,index,uid,n);
            
//        }
//     })
// }

/***/ }),

/***/ "./src/modules/render/openTasks.js":
/*!*****************************************!*\
  !*** ./src/modules/render/openTasks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ opneTaskList)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _components_taskListRelatedComponents_taskDivComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/taskListRelatedComponents/taskDivComponent */ "./src/modules/components/taskListRelatedComponents/taskDivComponent.js");



function opneTaskList(target,uid){
    if (target.classList.contains('card')){
        console.log(uid);
        const isDeleteBtn = target.querySelector('.delete-project-btn');
        if (!isDeleteBtn) {
        //    mainContainer.removeChild(CardList);
        // taskDivComponent(title);
        console.log(uid);
          }
    }
    
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
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _addProjectBtnEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addProjectBtnEventListener */ "./src/modules/render/addProjectBtnEventListener.js");
/* harmony import */ var _cardEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cardEventListener */ "./src/modules/render/cardEventListener.js");

// import getItemsFromStorage from "../../storage/getItemsFromStorage";








function onPageLoad(arr,n){
    document.addEventListener('DOMContentLoaded',function(){
        const items = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_0__["default"])("project");
        const hasN = (0,_storage_countItems__WEBPACK_IMPORTED_MODULE_0__["default"])("number");
        if (hasN === 0){
         n = 0;
         (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])("number",0)
        }else{
         n = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_5__["default"])("number");
        }
        
         if(items === 0){
            (0,_renderMessage__WEBPACK_IMPORTED_MODULE_3__["default"])();
            (0,_addProjectBtnEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])(arr,n);
            (0,_cardEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(arr,n);
            
         }else{ 
            (0,_storage_getItemsFromStorage__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,"project")
            ;(0,_addProjectBtnEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])(arr,n);
            (0,_cardEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(arr,n);
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
   return JSON.parse(localStorage.getItem(key))
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
/* harmony import */ var _modules_storage_countItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage/countItems */ "./src/modules/storage/countItems.js");


//newer

// import onPageLoad from './modules/test/rendertest/pageload';

// import addProjectBtn from './modules/render/addProjectBtnEventListener';

// import deleteProjectBtn from './modules/test/rendertest/deleteProjectEventListerner';



     let projectList =[];
     let u;

     // localStorage.setItem("studies", JSON.stringify("programming"));
    (0,_modules_render_pageload_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectList,u);

    // addProjectBtn(projectList,u)

    // deleteProjectBtn(projectList,u)





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxlQUFlLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxrREFBa0QsNkJBQTZCLEdBQUcsVUFBVSw4QkFBOEIsbUNBQW1DLDhCQUE4Qiw0QkFBNEIsZ0NBQWdDLGVBQWUsVUFBVSxnQkFBZ0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDJCQUEyQixxQkFBcUIseUNBQXlDLEdBQUcsd0VBQXdFLHlDQUF5QyxrQkFBa0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixzQkFBc0IsaUJBQWlCLGdCQUFnQixzQkFBc0IsdUNBQXVDLEdBQUcsZ0JBQWdCLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQiw4QkFBOEIsR0FBRyxrQkFBa0Isa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1Qyx1Q0FBdUMsOEJBQThCLHdCQUF3QixpQkFBaUIseUJBQXlCLDJDQUEyQyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLEdBQUcsK0JBQStCLHNCQUFzQixHQUFHLDZDQUE2QyxpQkFBaUIsMEJBQTBCLEdBQUcsNERBQTRELDhDQUE4QyxpQkFBaUIsbUJBQW1CLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0IsMkNBQTJDLDRCQUE0QixlQUFlLE1BQU0saUJBQWlCLG9CQUFvQiwwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQiwyQ0FBMkMsNEJBQTRCLGVBQWUsaUJBQWlCLEdBQUcsbUNBQW1DLG9CQUFvQiwwQkFBMEIsOEJBQThCLFFBQVEsa0NBQWtDLHlCQUF5QixRQUFRLFdBQVcsNkJBQTZCLG9CQUFvQixtQkFBbUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIseUJBQXlCLEdBQUcsY0FBYyxzQkFBc0IsMkNBQTJDLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIseUJBQXlCLGFBQWEsZUFBZSxJQUFJLHdCQUF3QixrQkFBa0IsbUJBQW1CLHlCQUF5QixhQUFhLGVBQWUsU0FBUyw0QkFBNEIsZUFBZSxzQkFBc0IsR0FBRyxXQUFXLHlCQUF5QixrQkFBa0IsaUJBQWlCLHNCQUFzQiw4QkFBOEIsaUJBQWlCLGdCQUFnQixLQUFLLG1CQUFtQixtQkFBbUIsZ0JBQWdCLHNDQUFzQyx5QkFBeUIsY0FBYyxhQUFhLEtBQUssdUNBQXVDLG9CQUFvQixrQ0FBa0MsYUFBYSxrQkFBa0IsbUJBQW1CLEdBQUcscUJBQXFCLHNCQUFzQixnQkFBZ0IsR0FBRyx1Q0FBdUMsb0JBQW9CLDRCQUE0QixpQ0FBaUMsR0FBRyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsOEJBQThCLGlCQUFpQix5QkFBeUIsdUJBQXVCLHVCQUF1QixtQ0FBbUMsU0FBUyxxQkFBcUIsdUJBQXVCLHVCQUF1QixHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QixvQ0FBb0MsMEJBQTBCLHdCQUF3QixrQkFBa0IsdUJBQXVCLEtBQUssK0JBQStCLHlCQUF5QixHQUFHLGdCQUFnQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLFVBQVUsc0JBQXNCLGFBQWEsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsR0FBRyxnQkFBZ0Isc0JBQXNCLGVBQWUsR0FBRyxrQkFBa0IsbUJBQW1CLG1CQUFtQix5QkFBeUIsZUFBZSxtQkFBbUIsMEJBQTBCLHVCQUF1QixHQUFHLHdCQUF3QixzQkFBc0IseUNBQXlDLEdBQUcsbUJBQW1CO0FBQ3ZvTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3JRMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRU8sZ0VBQWdFO0FBQ2hFLG9EQUFvRDtBQUMzRDs7QUFFQTs7QUFFTyx3REFBd0Q7QUFDeEQsMERBQTBEO0FBQzFELHFFQUFxRTtBQUNyRSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EscURBQXFEOzs7QUFHNUQ7O0FBRU87QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUQ7QUFDUjtBQUNNO0FBQ0Y7O0FBRXJDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixnRUFBbUI7QUFDeEMscUJBQXFCLCtEQUFZO0FBQ2pDLHFCQUFxQiwrREFBa0I7QUFDdkMscUJBQXFCLDhEQUFpQjtBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCNkQ7QUFDTjs7QUFFeEM7QUFDZixrQkFBa0IsK0RBQXFCO0FBQ3ZDO0FBQ0Esb0JBQW9CLCtEQUFlO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDNEQ7OztBQUc3QztBQUNmO0FBQ0EsSUFBSSxxRUFBaUI7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwRDtBQUNWO0FBQ2M7QUFDWDtBQUNwQztBQUNmLElBQUksbURBQUc7QUFDUCxRQUFRLDREQUFlO0FBQ3ZCLFFBQVEsdUVBQWlCLFdBQVcsSUFBSTtBQUN4QyxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTCxJQUFJLGtEQUFFO0FBQ047QUFDQSxRQUFRLDJEQUFXO0FBQ25CLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDbEJrRTs7QUFFbkQ7QUFDZixJQUFJLDJEQUFXO0FBQ2Y7QUFDQSxRQUFRLDhEQUFjO0FBQ3RCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BzRTtBQUNkO0FBQ3hEO0FBQzREO0FBQ0Y7QUFDUDs7QUFFcEM7QUFDZixrQkFBa0IsaUVBQWlCLFFBQVE7QUFDM0MsbUJBQW1CLDJEQUFXLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDtBQUM3RCw0QkFBNEIsK0RBQXFCO0FBQ2pELHlDQUF5QztBQUN6QztBQUNBLDBCQUEwQixrRUFBZ0I7QUFDMUMsTUFBTSwrREFBYyxXQUFXLEVBQUUsaUJBQWlCO0FBQ2xEO0FBQ0EsNkJBQTZCO0FBQzdCLE1BQU0scUVBQWlCLE9BQU87QUFDOUI7QUFDQSxNQUFNLCtEQUFjO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qm1GO0FBQ2pDO0FBQ2xEO0FBQzBEO0FBQ1A7OztBQUdwQztBQUNmLElBQUksOERBQWM7QUFDbEI7QUFDQSxRQUFRLDZEQUFnQjtBQUN4QixRQUFRLGtFQUFrQjtBQUMxQixRQUFRLCtEQUFlO0FBQ3ZCLFFBQVEsOERBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSxZQUFZLDBCQUEwQjtBQUN5QjtBQUNNO0FBQ047QUFDZjs7QUFFakM7QUFDZixJQUFJLHVEQUFPO0FBQ1gsUUFBUSwrREFBZTtBQUN2QixRQUFRLHVEQUFvQjtBQUM1QixRQUFRLDRFQUFtQjtBQUMzQixRQUFRLHlFQUFnQjtBQUN4QixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYitDO0FBQ2M7QUFDdEI7O0FBRXhCO0FBQ2YsSUFBSSx3REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQWdCO0FBQ3hCLFFBQVEsc0RBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVnRTs7O0FBR2pEO0FBQ2YsSUFBSSx3REFBUTtBQUNaLFFBQVEsK0RBQWU7QUFDdkIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDVDREO0FBQ1E7O0FBRXJEO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3REFBUTtBQUM3QztBQUNBLFlBQVksMkRBQVc7QUFDdkIsWUFBWSw2RUFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0IrRDtBQUN5Qjs7QUFFekU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDBEO0FBQzFEO0FBQ2lFO0FBQ2I7QUFDVDtBQUNRO0FBQ0M7QUFDSztBQUNMOztBQUVyQztBQUNmO0FBQ0Esc0JBQXNCLCtEQUFxQjtBQUMzQyxxQkFBcUIsK0RBQXFCO0FBQzFDO0FBQ0E7QUFDQSxTQUFTLCtEQUFjO0FBQ3ZCLFNBQVM7QUFDVCxhQUFhLCtEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVk7QUFDeEIsWUFBWSx1RUFBYTtBQUN6QixZQUFZLDhEQUFpQjtBQUM3QjtBQUNBLFVBQVU7QUFDVixZQUFZLHdFQUFtQjtBQUMvQixZQUFZLHdFQUFhO0FBQ3pCLFlBQVksOERBQWlCO0FBQzdCO0FBQ0EsU0FBUyw4REFBaUI7QUFDMUI7QUFDQSxNQUFNO0FBQ047O0FBRUE7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QzhEOzs7OztBQUsvQztBQUNmLFFBQVEsNkRBQWE7O0FBRXJCO0FBQ0E7QUFDQSxRQUFRLDZEQUFhO0FBQ3JCLFFBQVEsNkRBQWE7QUFDckI7QUFDQSxJQUFJLDZEQUFhLGFBQWEsd0RBQVE7QUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDZEO0FBQ1A7O0FBRXZDO0FBQ2YsSUFBSSw2REFBYSxhQUFhLHdEQUFRO0FBQ3RDO0FBQ0EscUJBQXFCLDhEQUFrQjtBQUN2QztBQUNBLElBQUksNkRBQWE7QUFDakIsSUFBSSw2REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZnRDtBQUNROzs7OztBQUt6QztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxJQUFJO0FBQ3BFO0FBQ0EsWUFBWSx3REFBUSxhQUFhLHFFQUFhO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ2U7QUFDZjs7QUFFQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDMkM7OztBQUczQjtBQUNoQixvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7O0FBRTVCOztBQUVBO0FBQ3NEO0FBQ3REO0FBQzBFO0FBQzFFO0FBQzRFO0FBQ1g7O0FBRWpFO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVFQUFVOztBQUVkOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jYWNoZS9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2FjaGUvc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NhcmREYXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NhcmRNYXJrZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2FyZFRpdGxlQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2RlbGV0ZUJ0bkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy90YXNrTGlzdFJlbGF0ZWRDb21wb25lbnRzL3Rhc2tEaXZDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlbGV0ZUJ0bkxvZ2ljL2RlbGV0ZUZyb21BcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRlQnRuTG9naWMvZGVsZXRlTW9kYWxJbnB1dHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1Db250cm9sL2FkZFByb2plY3RGb3JtUmVzZXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1Db250cm9sL2Zvcm1JbnB1dENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1Db250cm9sL3N1Ym1pdE5ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL290aGVyTG9naWMvcHJvamVjdE9iai5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL2FkZFByb2plY3RCdG5FdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvY2FyZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9jbG9zZU1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvZGVsZXRlUHJvamVjdEV2ZW50TGlzdGVybmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvb3BlblRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW1vdmVFbXB0eW1zZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL3JlbmRlck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlci9yZW5kZXJQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9jb3VudEl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlL2RlbGV0ZVN0b3JhZ2VJdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlL2dldFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2Uvc2V0U3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICAgICAgLS1tYWluQ29sb3I6IzNjNzc5NDtcbiAgICAgICAgLS1zZWNvbmRhcnlDb2xvcjojZmNlM2YwO1xuICAgICAgICAtLXRleHRDb2xvcjojMjAyYTRiO1xuICAgICAgICAtLWJ0bk1haW46I2MyZGVmNztcbiAgICAgICAgLS1idG5TY29uZGFyeTojODNiM2Q5O1xuICAgIFxuICAgIFxufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgaGVpZ2h0OiAxMDB2aDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbn1cblxuLyogc3R5bGVzIGZvciB0aGUgYWRkIHByb2plY3QgYnV0dG9uICAqL1xuXG4uYWRkLXByb2plY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0Q29sb3IpO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDMlO1xuICAgIHJpZ2h0OiAzJTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuTWFpbik7XG59XG5cbi5ob3Zlci1idG4ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuTWFpbik7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVyIC5kZXNjcmlwdGlvbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBzdHlsZXMgZm9yIHRoZSBtYWluIGNvbnRhaW5lciAgKi9cblxuI21haW4tY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyogLnByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XG4gICAgZ2FwOiA1cHg7XG5cbn0gKi9cbi50YXNrLWNsb3NlZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZExpc3R7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuI21haW4tY29udGFpbmVyLmNlbnRlci1ncmlkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbn1cbiNtYWluLWNvbnRhaW5lci5jZW50ZXItZ3JpZCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgXG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5TY29uZGFyeSk7XG59XG4vKiAuZGVsZXRlLXByb2plY3R7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG59ICovXG4uZGVsZXRlLXByb2plY3QtYnRue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIFxufVxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlcntcbiAgICBmaWxsOnJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY2FyZC1tYXJrZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuXG4vKiBtb2RhbCByZWxhdGVkIHN0bHllcyAqL1xuLmNsb3Nle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxufVxuLmNsb3NlIHN2Z3tcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5jbG9zZSBzdmc6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbGw6IHJlZDtcbn1cblxuLyogdGFzayBsaXN0IHN0eWxlcyAqL1xuLnRhc2stb3BlbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJTtcbn1cbiN0YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIFxufVxuI3Rhc2stY29udGFpbmVyIGgxe1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRhc2stbGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG59XG4udGFzay1saXN0IC50YXNrZG9uZTo6YmVmb3Jle1xuICAgIFxuICAgIGNvbnRlbnQ6ICfinJMnO1xufVxuLnRhc2stbGlzdCBsaXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucmV0dXJue1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiB0b3A6IDI1cHg7XG4gcmlnaHQ6IDUwcHg7XG4gd2lkdGg6IDNyZW07XG4gaGVpZ2h0OiAzcmVtO1xuIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ucmV0dXJuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWxsOnJlZDtcbn1cblxuLmFkZC10YXNrLWJ0bntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MjVweDtcbiAgICByaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYWRkLXRhc2stYnRuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0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QixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbiAgICAgICAgLS1tYWluQ29sb3I6IzNjNzc5NDtcXG4gICAgICAgIC0tc2Vjb25kYXJ5Q29sb3I6I2ZjZTNmMDtcXG4gICAgICAgIC0tdGV4dENvbG9yOiMyMDJhNGI7XFxuICAgICAgICAtLWJ0bk1haW46I2MyZGVmNztcXG4gICAgICAgIC0tYnRuU2NvbmRhcnk6IzgzYjNkOTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHRoZSBhZGQgcHJvamVjdCBidXR0b24gICovXFxuXFxuLmFkZC1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRDb2xvcik7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAzJTtcXG4gICAgcmlnaHQ6IDMlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bk1haW4pO1xcbn1cXG5cXG4uaG92ZXItYnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWRkLXByb2plY3QtY29udGFpbmVyOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtcHJvamVjdC1jb250YWluZXI6aG92ZXIgLmRlc2NyaXB0aW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogc3R5bGVzIGZvciB0aGUgbWFpbiBjb250YWluZXIgICovXFxuXFxuI21haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIC5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBnYXA6IDVweDtcXG5cXG59ICovXFxuLnRhc2stY2xvc2Vke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZExpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuI21haW4tY29udGFpbmVyLmNlbnRlci1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxufVxcbiNtYWluLWNvbnRhaW5lci5jZW50ZXItZ3JpZCBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuU2NvbmRhcnkpO1xcbn1cXG4vKiAuZGVsZXRlLXByb2plY3R7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG59ICovXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bntcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBcXG59XFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlcntcXG4gICAgZmlsbDpyZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICByaWdodDogNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuY2FyZC1tYXJrZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4vKiBtb2RhbCByZWxhdGVkIHN0bHllcyAqL1xcbi5jbG9zZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcbn1cXG4uY2xvc2Ugc3Zne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uY2xvc2Ugc3ZnOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6IHJlZDtcXG59XFxuXFxuLyogdGFzayBsaXN0IHN0eWxlcyAqL1xcbi50YXNrLW9wZW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCU7XFxufVxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgXFxufVxcbiN0YXNrLWNvbnRhaW5lciBoMXtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnRhc2stbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG59XFxuLnRhc2stbGlzdCAudGFza2RvbmU6OmJlZm9yZXtcXG4gICAgXFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbn1cXG4udGFzay1saXN0IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJldHVybntcXG4gcG9zaXRpb246IGFic29sdXRlO1xcbiB0b3A6IDI1cHg7XFxuIHJpZ2h0OiA1MHB4O1xcbiB3aWR0aDogM3JlbTtcXG4gaGVpZ2h0OiAzcmVtO1xcbiBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4ucmV0dXJuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbGw6cmVkO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MjVweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL21haW4gZWxlbWVudHNcblxuZXhwb3J0IGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTsvLyB0aGUgbWFpbiBjb250YWluZXJcbmV4cG9ydCBjb25zdCBDYXJkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkVUwnKTsgLy90aGUgdWwgY29udGFpbmluZyB0aGUgY2FyZHNcbiBcblxuLy9jYXB0dXJlIGVsZW1lbnRzIHJlbGF0ZWQgdG8gdGhlIGFkZCBwcm9qZWN0IG1vZGFscyBpbXB1dCBmaWVsZHNcblxuZXhwb3J0IGNvbnN0IG9wZW5idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLVByb2plY3QnKTsgLy90aGUgYnV0dG9uIHRvIG9wZW4gdGhlIGFkZCBwcm9qZWN0IG1vZGFsXG5leHBvcnQgY29uc3QgbW9kYWxBZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7IC8vdGhlIGFkZCBwcm9qZWN0IG1vZGFsXG5leHBvcnQgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInJlc2V0XCJdJyk7ICAvL3RoZSBidXR0b24gdG8gcmVzZXQgdGhlIGFkZCBwcm9qZWN0IG1vZGFsXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy1Qcm9qZWN0Jyk7IC8vdGhlIGFkZHByb2plY3QgbW9kYWwgZm9ybVxuZXhwb3J0IGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5leHBvcnQgY29uc3QgbWFya2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3InKTtcbmV4cG9ydCBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0UHJvaicpO1xuZXhwb3J0IGNvbnN0IGNsb3NlU1ZHID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2Ugc3ZnJyk7Ly90aGUgY2xvc2UgYnRuIGluIHRoZSBhZGQgcHJvamVjdCBtb2RhbFxuXG5cbi8vZGVsZXRlIHByb2plY3RzIHJlbGF0ZWQgZWxlbWVudHNcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1tb2RhbCcpO1xuZXhwb3J0IGNvbnN0IHllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZXMnKTtcbmV4cG9ydCBjb25zdCBubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdubycpO1xuIiwiZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZVN0cmluZyA9IFwiWW91ciBQcm9qZWN0IGxpc3QgaXMgZW1wdHkgY2xpY2sgdGhlIGFkZCBidXR0b24gdG8gYWRkIGEgcHJvamVjdFwiO1xuIiwiaW1wb3J0IGNhcmRNYXJrZXJDb21wb25lbnQgZnJvbSBcIi4vY2FyZE1hcmtlckNvbXBvbmVudFwiO1xuaW1wb3J0IGRlbGV0ZUJ0blNWRyBmcm9tIFwiLi9kZWxldGVCdG5Db21wb25lbnRcIjtcbmltcG9ydCBjYXJkVGl0bGVDb21wb25lbnQgZnJvbSBcIi4vY2FyZFRpdGxlQ29tcG9uZW50XCI7XG5pbXBvcnQgY2FyZERhdGVDb21wb25lbnQgZnJvbSBcIi4vY2FyZERhdGVDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZENvbXBvbmVudChVSUQsZGF0ZSxtYXJrLG5hbWUpe1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLVVJRCcsIFVJRCk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRNYXJrZXJDb21wb25lbnQobWFyaykpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdG5TVkcoXCJkZWxldGUtcHJvamVjdC1idG5cIikpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlQ29tcG9uZW50KG5hbWUpKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERhdGVDb21wb25lbnQoZGF0ZSkpXG4gICAgcmV0dXJuIGNhcmQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZERhdGVDb21wb25lbnQoZGF0ZSl7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcbiAgICB0aW1lLnRleHRDb250ZW50ID0gYCR7ZGF0ZX1gO1xuICAgIHJldHVybiB0aW1lO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRNYXJrZXJDb21wb25lbnQobWFyayl7XG4gICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFya2VyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtbWFya2VyJyk7XG4gICAgbWFya2VyLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1jb2xvcjogJHttYXJrfTtgXG4gICAgcmV0dXJuIG1hcmtlcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJkVGl0bGVDb21wb25lbnQobmFtZSl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50PWAke25hbWV9YDtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgcmV0dXJuIHRpdGxlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQnRuU1ZHKGNsYXNzTmFtZSl7XG4gICAgIC8vIFNWRyBFbGVtZW50XG4gICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gnLCAnMHB4Jyk7XG4gICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd5JywgJzBweCcpO1xuICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJyk7XG4gICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJyk7XG4gICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNiAyNicpO1xuICAgICBzdmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICAgICAvLyBTVkcgUGF0aFxuICAgIGNvbnN0IHBhdGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgcGF0aEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkJywgJ00gMjEuNzM0Mzc1IDE5LjY0MDYyNSBMIDE5LjYzNjcxOSAyMS43MzQzNzUgQyAxOS4yNTM5MDYgMjIuMTIxMDk0IDE4LjYyODkwNiAyMi4xMjEwOTQgMTguMjQyMTg4IDIxLjczNDM3NSBMIDEzIDE2LjQ5NjA5NCBMIDcuNzYxNzE5IDIxLjczNDM3NSBDIDcuMzc1IDIyLjEyMTA5NCA2Ljc0NjA5NCAyMi4xMjEwOTQgNi4zNjMyODEgMjEuNzM0Mzc1IEwgNC4yNjU2MjUgMTkuNjQwNjI1IEMgMy44Nzg5MDYgMTkuMjUzOTA2IDMuODc4OTA2IDE4LjYyODkwNiA0LjI2NTYyNSAxOC4yNDIxODggTCA5LjUwMzkwNiAxMyBMIDQuMjY1NjI1IDcuNzYxNzE5IEMgMy44ODI4MTMgNy4zNzEwOTQgMy44ODI4MTMgNi43NDIxODggNC4yNjU2MjUgNi4zNjMyODEgTCA2LjM2MzI4MSA0LjI2NTYyNSBDIDYuNzQ2MDk0IDMuODc4OTA2IDcuMzc1IDMuODc4OTA2IDcuNzYxNzE5IDQuMjY1NjI1IEwgMTMgOS41MDc4MTMgTCAxOC4yNDIxODggNC4yNjU2MjUgQyAxOC42Mjg5MDYgMy44Nzg5MDYgMTkuMjU3ODEzIDMuODc4OTA2IDE5LjYzNjcxOSA0LjI2NTYyNSBMIDIxLjczNDM3NSA2LjM1OTM3NSBDIDIyLjEyMTA5NCA2Ljc0NjA5NCAyMi4xMjEwOTQgNy4zNzUgMjEuNzM4MjgxIDcuNzYxNzE5IEwgMTYuNDk2MDk0IDEzIEwgMjEuNzM0Mzc1IDE4LjI0MjE4OCBDIDIyLjEyMTA5NCAxOC42Mjg5MDYgMjIuMTIxMDk0IDE5LjI1MzkwNiAyMS43MzQzNzUgMTkuNjQwNjI1IFonKTtcblxuICAgIC8vIEFwcGVuZCBTVkcgUGF0aCB0byBTVkcgRWxlbWVudFxuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocGF0aEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XG5cbn0iLCJpbXBvcnQgY291bnRJdGVtc1dpdGhLZXlOYW1lIGZyb20gXCIuLi8uLi9zdG9yYWdlL2NvdW50SXRlbXNcIjtcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4uLy4uL3N0b3JhZ2UvZ2V0U3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRGl2Q29tcG9uZW50KHRpdGxlKXtcbiAgICBjb25zdCBpdGVtcyA9IGNvdW50SXRlbXNXaXRoS2V5TmFtZSh0aXRsZSk7XG4gICBpZihpdGVtcyAhPT0gMCl7XG4gICBjb25zdCBwcm9qZWN0ID0gIEdldFN0b3JhZ2VJdGVtcyh0aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgfVxufSIsIi8vIGltcG9ydCByZW5kZXJQcm9qZWN0TGlzdCBmcm9tIFwiLi4vcmVuZGVydGVzdC9yZW5kZXJQcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHJlbmRlclByb2plY3RMaXN0IGZyb20gXCIuLi9yZW5kZXIvcmVuZGVyUHJvamVjdExpc3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVGcm9tQXJyYXkoYXJyLGluZGV4KXtcbiAgICBhcnIuc3BsaWNlKGluZGV4LDEpO1xuICAgIHJlbmRlclByb2plY3RMaXN0KGFycilcbn0iLCJpbXBvcnQgeyB5ZXMsbm8sZGVsZXRlTW9kYWwgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCBkZWxldGVGcm9tQXJyYXkgZnJvbSBcIi4vZGVsZXRlRnJvbUFycmF5XCI7XG5pbXBvcnQgZGVsZXRlU3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2UvZGVsZXRlU3RvcmFnZUl0ZW1zXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2Uvc2V0U3RvcmFnZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlTW9kYWxJbnB1dHMoYXJyLGluZGV4LHVpZCxuKXtcbiAgICB5ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBkZWxldGVGcm9tQXJyYXkoYXJyLGluZGV4KTtcbiAgICAgICAgZGVsZXRlU3RvcmFnZUl0ZW0oYHByb2plY3Qke3VpZH1gKTtcbiAgICAgICAgZGVsZXRlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgLy8gbi0tO1xuICAgICAgICAvLyBzZXRTdG9yYWdlSXRlbShcIm51bWJlclwiLCBuKTtcblxuICAgIH0pXG5cbiAgICBuby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGVsZXRlTW9kYWwuY2xvc2UoKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHJlc2V0QnV0dG9uLGFkZFByb2plY3RGb3JtIH0gZnJvbSBcIi4uL2NhY2hlL2RvbUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2V0QWRkUHJvamVjdEZvcm0oKXtcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICB9KVxufSIsImltcG9ydCB7IHByb2plY3RUaXRsZUlucHV0LG1hcmtlcklucHV0LCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RPYmogZnJvbSBcIi4uL290aGVyTG9naWMvcHJvamVjdE9ialwiO1xuLy8gaW1wb3J0IHJlbmRlclByb2plY3RMaXN0IGZyb20gXCIuLi9yZW5kZXJ0ZXN0L3JlbmRlclByb2plY3RMaXN0XCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4uL3JlbmRlci9yZW5kZXJQcm9qZWN0TGlzdFwiO1xuaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tIFwiLi4vc3RvcmFnZS9jb3VudEl0ZW1zXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2Uvc2V0U3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KGFycixuKXtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlOyAvL3RvIGJlIHN0b3JlZFxuICAgIGNvbnN0IG1hcmtlciA9IG1hcmtlcklucHV0LnZhbHVlOyAvL3RvIGJlIHN0b3JlZFxuICAgIFxuICAgIGlmICghdGl0bGUgfHwgIW1hcmtlcikge1xuICAgICAgICAvLyBpZiB1c2VyIGRpZG50IGluY2x1ZGUgYSB0aXRlbCBvciBhIG1hcmtlclxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBjdXJyZW50RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07ICAvL3RvIGJlIHN0b3JlZFxuICAgICAgY29uc3Qgc3RvcmFnZUxlbmd0aCA9IGNvdW50SXRlbXNXaXRoS2V5TmFtZShcInByb2plY3RcIik7XG4gICAgICAvLyBjb25zdCBVSUQgPSBzdG9yYWdlTGVuZ3RoICsgMTs7IC8vIHRlbXAgXG4gICAgICBcbiAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gY3JlYXRlUHJvamVjdE9iaih0aXRsZSwgbWFya2VyLCBkYXRlLG4pO1xuICAgICAgc2V0U3RvcmFnZUl0ZW0oYHByb2plY3Qke259YCwgcHJvamVjdEluZm8pOyAvL2FkZCB0byBzdG9yYWdlIGZvciBsYXRlciBzZXNzaW9ucztcbiAgICAgXG4gICAgICBhcnIucHVzaChwcm9qZWN0SW5mbyk7IC8vcHVzaCBpdCBpbnRvIHRoZSBwcm9qZWN0cyBsaXN0IGFycmF5XG4gICAgICByZW5kZXJQcm9qZWN0TGlzdChhcnIpOyAvL3JlbmRlciBpdFxuICAgICAgbisrO1xuICAgICAgc2V0U3RvcmFnZUl0ZW0oXCJudW1iZXJcIiwgbik7XG59IiwiaW1wb3J0IHsgc3VibWl0QnV0dG9uLGFkZFByb2plY3RGb3JtLG1vZGFsQWRkUHJvamVjdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNyZWF0ZU5ld1Byb2plY3QgZnJvbSBcIi4vZm9ybUlucHV0Q29udHJvbFwiO1xuLy8gaW1wb3J0IHJlbW92ZUVtcHR5TWVzc2FnZSBmcm9tIFwiLi4vcmVuZGVydGVzdC9yZW1vdmVFbXB0eW1zZ1wiO1xuaW1wb3J0IHJlbW92ZUVtcHR5TWVzc2FnZSBmcm9tIFwiLi4vcmVuZGVyL3JlbW92ZUVtcHR5bXNnXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2Uvc2V0U3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Ym1pdE5ld1Byb2plY3QoYXJyLG4pe1xuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdChhcnIsbik7XG4gICAgICAgIHJlbW92ZUVtcHR5TWVzc2FnZSgpO1xuICAgICAgICBtb2RhbEFkZFByb2plY3QuY2xvc2UoKTtcbiAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKG4pO1xuICAgICAgICBcbiAgICAgICAgbisrO1xuICAgICAgICBcbiAgICAgICAgXG5cbiAgICB9KVxufSIsIi8vYW4gb2JqZWN0IGZhY3RvcnkgdG8gZ2VuZXJhdGUgYW4gb2JqZWN0IGZvciBlYWNoIHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPYmoodGl0bGUsbWFya2VyLGRhdGUsVUlEKXtcbiAgICByZXR1cm57XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBtYXJrZXIsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIFVJRFxuICAgIH1cbn0iLCIvLyBpbXBvcnQgeyBvcGVuYnRuLG1vZGFsQWRkUHJvamVjdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IHsgb3BlbmJ0bixtb2RhbEFkZFByb2plY3QgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCByZXNldEFkZFByb2plY3RGb3JtIGZyb20gXCIuLi9mb3JtQ29udHJvbC9hZGRQcm9qZWN0Rm9ybVJlc2V0XCI7XG5pbXBvcnQgc3VibWl0TmV3UHJvamVjdCBmcm9tIFwiLi4vZm9ybUNvbnRyb2wvc3VibWl0TmV3UHJvamVjdFwiO1xuaW1wb3J0IGNsb3NlQWRkUHJvamVjdE1vZGFsIGZyb20gXCIuL2Nsb3NlTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdEJ0bihhcnIsbil7XG4gICAgb3BlbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIG1vZGFsQWRkUHJvamVjdC5zaG93TW9kYWwoKTtcbiAgICAgICAgY2xvc2VBZGRQcm9qZWN0TW9kYWwoKTtcbiAgICAgICAgcmVzZXRBZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBzdWJtaXROZXdQcm9qZWN0KGFycixuKTtcbiAgICB9KVxufSIsImltcG9ydCB7IENhcmRMaXN0fSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCBkZWxldGVQcm9qZWN0QnRuIGZyb20gXCIuL2RlbGV0ZVByb2plY3RFdmVudExpc3Rlcm5lclwiO1xuaW1wb3J0IG9wbmVUYXNrTGlzdCBmcm9tIFwiLi9vcGVuVGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FyZEV2ZW50TGlzdGVuZXIoYXJyLG4pe1xuICAgIENhcmRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGNsb3Nlc3RMaSA9IHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICBjb25zdCB1aWQgPSBjbG9zZXN0TGkuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4oYXJyLG4sdGFyZ2V0KTtcbiAgICAgICAgb3BuZVRhc2tMaXN0KHRhcmdldCx1aWQpO1xuICAgICAgICAvLyBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGVyZSBpcyBhIGNhcmRcIilcbiAgICAgICAgLy8gfVxuICAgIH0pXG4gICAgICAgIFxuICAgXG59IiwiLy9tb2R1bGUgdG8gaGFuZGxlIHRoZSBjbG9zZSBidG4gLmNsb3NlXG5cbmltcG9ydCB7IGNsb3NlU1ZHLG1vZGFsQWRkUHJvamVjdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3NlQWRkUHJvamVjdE1vZGFsKCl7XG4gICAgY2xvc2VTVkcuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsQWRkUHJvamVjdC5jbG9zZSgpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgQ2FyZExpc3QgLGRlbGV0ZU1vZGFsfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCBkZWxldGVNb2RhbElucHV0cyBmcm9tIFwiLi4vZGVsZXRlQnRuTG9naWMvZGVsZXRlTW9kYWxJbnB1dHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ0bihhcnIsbix0YXJnZXQpe1xuICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdmdQYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGVsZXRlLXByb2plY3QtYnRuIHBhdGgnKVxuICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdC1idG4nKXx8IHN2Z1BhdGggKXtcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RMaSA9IHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKENhcmRMaXN0LmNoaWxkcmVuKS5pbmRleE9mKGNsb3Nlc3RMaSk7XG4gICAgICAgICAgICBjb25zdCB1aWQgPSBjbG9zZXN0TGkuZ2V0QXR0cmlidXRlKCdkYXRhLXVpZCcpXG4gICAgICAgICAgICBkZWxldGVNb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGRlbGV0ZU1vZGFsSW5wdXRzKGFycixpbmRleCx1aWQsbik7XG4gICAgICAgICAgICBcbiAgICAgICB9XG4gICAgXG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RCdG4oYXJyLG4pe1xuLy8gICAgIENhcmRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9Pntcbi8vICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4vLyAgICAgICAgIGNvbnN0IHN2Z1BhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkZWxldGUtcHJvamVjdC1idG4gcGF0aCcpXG4vLyAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpfHwgc3ZnUGF0aCApe1xuLy8gICAgICAgICAgICAgY29uc3QgY2xvc2VzdExpID0gdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20oQ2FyZExpc3QuY2hpbGRyZW4pLmluZGV4T2YoY2xvc2VzdExpKTtcbi8vICAgICAgICAgICAgIGNvbnN0IHVpZCA9IGNsb3Nlc3RMaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdWlkJylcbi8vICAgICAgICAgICAgIGRlbGV0ZU1vZGFsLnNob3dNb2RhbCgpO1xuLy8gICAgICAgICAgICAgZGVsZXRlTW9kYWxJbnB1dHMoYXJyLGluZGV4LHVpZCxuKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgIH1cbi8vICAgICB9KVxuLy8gfSIsImltcG9ydCB7IENhcmRMaXN0LCBtYWluQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NhY2hlL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgdGFza0RpdkNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy90YXNrTGlzdFJlbGF0ZWRDb21wb25lbnRzL3Rhc2tEaXZDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BuZVRhc2tMaXN0KHRhcmdldCx1aWQpe1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpe1xuICAgICAgICBjb25zb2xlLmxvZyh1aWQpO1xuICAgICAgICBjb25zdCBpc0RlbGV0ZUJ0biA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3QtYnRuJyk7XG4gICAgICAgIGlmICghaXNEZWxldGVCdG4pIHtcbiAgICAgICAgLy8gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChDYXJkTGlzdCk7XG4gICAgICAgIC8vIHRhc2tEaXZDb21wb25lbnQodGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh1aWQpO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IGNvdW50SXRlbXNXaXRoS2V5TmFtZSBmcm9tIFwiLi4vc3RvcmFnZS9jb3VudEl0ZW1zXCI7XG4vLyBpbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZSBmcm9tIFwiLi4vLi4vc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlXCI7XG5pbXBvcnQgZ2V0SXRlbXNGcm9tU3RvcmFnZSBmcm9tIFwiLi4vc3RvcmFnZS9nZXRJdGVtc0Zyb21TdG9yYWdlXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4vcmVuZGVyUHJvamVjdExpc3RcIjtcbmltcG9ydCBlbXB0eU1lc3NhZ2UgZnJvbSBcIi4vcmVuZGVyTWVzc2FnZVwiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuLi9zdG9yYWdlL3NldFN0b3JhZ2VcIjtcbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4uL3N0b3JhZ2UvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IGFkZFByb2plY3RCdG4gZnJvbSBcIi4vYWRkUHJvamVjdEJ0bkV2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCBjYXJkRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9jYXJkRXZlbnRMaXN0ZW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblBhZ2VMb2FkKGFycixuKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJyxmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpdGVtcyA9IGNvdW50SXRlbXNXaXRoS2V5TmFtZShcInByb2plY3RcIik7XG4gICAgICAgIGNvbnN0IGhhc04gPSBjb3VudEl0ZW1zV2l0aEtleU5hbWUoXCJudW1iZXJcIik7XG4gICAgICAgIGlmIChoYXNOID09PSAwKXtcbiAgICAgICAgIG4gPSAwO1xuICAgICAgICAgc2V0U3RvcmFnZUl0ZW0oXCJudW1iZXJcIiwwKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgIG4gPSBHZXRTdG9yYWdlSXRlbXMoXCJudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICBpZihpdGVtcyA9PT0gMCl7XG4gICAgICAgICAgICBlbXB0eU1lc3NhZ2UoKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4oYXJyLG4pO1xuICAgICAgICAgICAgY2FyZEV2ZW50TGlzdGVuZXIoYXJyLG4pO1xuICAgICAgICAgICAgXG4gICAgICAgICB9ZWxzZXsgXG4gICAgICAgICAgICBnZXRJdGVtc0Zyb21TdG9yYWdlKGFycixcInByb2plY3RcIilcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4oYXJyLG4pO1xuICAgICAgICAgICAgY2FyZEV2ZW50TGlzdGVuZXIoYXJyLG4pO1xuICAgICAgICAgfVxuICAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoYXJyKTtcbiAgICAgICAgIFxuICAgICB9KVxuICAgICBcblxuICAgXG5cblxufSIsImltcG9ydCB7IG1haW5Db250YWluZXIsQ2FyZExpc3QgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlNZXNzYWdlKCl7XG4gICAgaWYgKG1haW5Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZW50ZXItZ3JpZCcpKXtcblxuICAgICAgICBjb25zdCBlbXB0eW1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpO1xuICAgICAgICBcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjZW50ZXItZ3JpZCcpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKGVtcHR5bXNnKTtcbiAgICAgICB9XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChDYXJkTGlzdCk7XG59XG4iLCJpbXBvcnQgeyBtYWluQ29udGFpbmVyLENhcmRMaXN0fSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCB7IGVtcHR5TWVzc2FnZVN0cmluZyB9IGZyb20gXCIuLi9jYWNoZS9zdHJpbmdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5TWVzc2FnZSgpe1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoQ2FyZExpc3QpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IGVtcHR5TWVzc2FnZVN0cmluZztcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2VudGVyLWdyaWQnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcbn0iLCJpbXBvcnQgeyBDYXJkTGlzdCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNhcmRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZENvbXBvbmVudFwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChhcnIpe1xuICAgIFxuICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBVSUQgPSBlbGVtZW50LlVJRDtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGVsZW1lbnQuZGF0ZTtcbiAgICAgICAgY29uc3QgbWFyayA9IGVsZW1lbnQubWFya2VyO1xuICAgICAgICBjb25zdCBuYW1lID1lbGVtZW50LnRpdGxlO1xuICAgICAgICBjb25zdCBjYXJkRXhpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtVUlEPVwiJHtVSUR9XCJdYCk7XG4gICAgICAgIGlmKCFjYXJkRXhpc3RzKXtcbiAgICAgICAgICAgIENhcmRMaXN0LmFwcGVuZENoaWxkKGNhcmRDb21wb25lbnQoVUlELGRhdGUsbWFyayxuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG59IiwiLy9jaGVjayB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudEl0ZW1zV2l0aEtleU5hbWUoa2V5UHJlZml4KSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgbG9jYWwgc3RvcmFnZSBrZXlzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUga2V5IHN0YXJ0cyB3aXRoIHRoZSBkZXNpcmVkIGtleVByZWZpeFxuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoa2V5UHJlZml4KSkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudDtcbn1cblxuXG4iLCIvL2RlbGV0ZSBhIGl0ZW0gZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVTdG9yYWdlSXRlbShrZXkpe1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbn0iLCIvL2FkZCB3aGF0ZXZlciBwcm9qZWN0IG9iamVjdCBjcmVhdGVkIGZybyB0aGUgc3RvcmFnZVxuaW1wb3J0IEdldFN0b3JhZ2VJdGVtcyBmcm9tIFwiLi9nZXRTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIGdldEl0ZW1zRnJvbVN0b3JhZ2UoYXJyLGtleVByZWZpeCl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgXG4gICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGtleSBzdGFydHMgd2l0aCB3aGF0ZXZlciBwcmVmaXhcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGtleVByZWZpeCkpIHtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBHZXRTdG9yYWdlSXRlbXMoa2V5KVxuICAgICAgICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxufSIsIi8vZ2V0IGl0ZW1zIGZyb20gYSBzdG9yYWdlIGFuZCBwYXJzZSBpdFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRTdG9yYWdlSXRlbXMoa2V5KXtcbiAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG59IiwiLy9zYXZlIG9iamVjdHMgaW4gdGhlIHN0b3JhZ2UgYXMgc3RyaW5nc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RvcmFnZUl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc3RvcmUgaXRlbSBpbiBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5cbi8vbmV3ZXJcblxuLy8gaW1wb3J0IG9uUGFnZUxvYWQgZnJvbSAnLi9tb2R1bGVzL3Rlc3QvcmVuZGVydGVzdC9wYWdlbG9hZCc7XG5pbXBvcnQgb25QYWdlTG9hZCBmcm9tICcuL21vZHVsZXMvcmVuZGVyL3BhZ2Vsb2FkLmpzJztcbi8vIGltcG9ydCBhZGRQcm9qZWN0QnRuIGZyb20gJy4vbW9kdWxlcy9yZW5kZXIvYWRkUHJvamVjdEJ0bkV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IGFkZFByb2plY3RCdG4gZnJvbSAnLi9tb2R1bGVzL3JlbmRlci9hZGRQcm9qZWN0QnRuRXZlbnRMaXN0ZW5lci5qcydcbi8vIGltcG9ydCBkZWxldGVQcm9qZWN0QnRuIGZyb20gJy4vbW9kdWxlcy90ZXN0L3JlbmRlcnRlc3QvZGVsZXRlUHJvamVjdEV2ZW50TGlzdGVybmVyJztcbmltcG9ydCBkZWxldGVQcm9qZWN0QnRuIGZyb20gJy4vbW9kdWxlcy9yZW5kZXIvZGVsZXRlUHJvamVjdEV2ZW50TGlzdGVybmVyJztcbmltcG9ydCBjb3VudEl0ZW1zV2l0aEtleU5hbWUgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UvY291bnRJdGVtcyc7XG5cbiAgICAgbGV0IHByb2plY3RMaXN0ID1bXTtcbiAgICAgbGV0IHU7XG5cbiAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHVkaWVzXCIsIEpTT04uc3RyaW5naWZ5KFwicHJvZ3JhbW1pbmdcIikpO1xuICAgIG9uUGFnZUxvYWQocHJvamVjdExpc3QsdSk7XG5cbiAgICAvLyBhZGRQcm9qZWN0QnRuKHByb2plY3RMaXN0LHUpXG5cbiAgICAvLyBkZWxldGVQcm9qZWN0QnRuKHByb2plY3RMaXN0LHUpXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==