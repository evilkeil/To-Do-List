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
    /* color variables */
        --mainColor:#3c7794;
        --secondaryColor:#fce3f0;
        --textColor:#202a4b;
        --btnMain:#c2def7;
        --btnScondary:#83b3d9;
        --sidebar-foreground:#333;
        --sidebar-background:white;
        --active-color:#ff6fa9;
    
    /* height/width variables */
        --bar-height:8px;
        --bar-width:50px;
        --hamburger-gap:6px;
        --hamburger-margin:10px;
        --hamburger-height:calc(var(--bar-height) *3 + var(--hamburger-gap) * 2);
    
    /* time variables */

    --animation-timing:200ms ease-in-out;
    --project-timing:300ms ease-in;
}

body{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: var(--mainColor);
    color: var(--textColor);
    
}

/* sidebar styles */

.hamburger-menu{
    --x-width:calc(var(--hamburger-height) * 1.41421356237);
    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    width: max-content;
    position: absolute;
    top: var(--hamburger-margin);
    left: var(--hamburger-margin);
    z-index: 2;
    cursor: pointer;
}
.hamburger-menu::before,
.hamburger-menu::after,
.hamburger-menu input{
    content: "";
    width: var(--bar-width);
    height: var(--bar-height);
    background: var(--sidebar-foreground);
    border-radius: 9999px;
    transform-origin: left center;
    transition: opacity var(--animation-timing) , width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);
}

.hamburger-menu input{
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    pointer-events: none;
}

.hamburger-menu:has(input:checked)::before{
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height)/-2);
}
.hamburger-menu:has(input:checked)::after{
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height)/2);
}
.hamburger-menu input:checked{
    opacity: 0;
    width: 0;
    
}

.sidebar{
 transition: translate var(--animation-timing);
  
    padding:0.5rem 1rem;
    padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem );
    position: fixed;
    border: 1px solid black;
    min-height: 100vh;
    min-width: 25%;
    background-color: var(--sidebar-foreground);
    color:var(--btnMain);
    translate: -100%;
    
}
.hamburger-menu:has(input:checked){
    --sidebar-foreground:white;
    --sidebar-background:#333;
}

.hamburger-menu:has(input:checked) ~ .sidebar{
    translate: 0%;
}

.hamburger-menu:has(input:focus-visible)::before,
.hamburger-menu:has(input:focus-visible)::after,
.hamburger-menu input:focus-visible{
    border:1px solid var(--sidebar-background);
    box-shadow: 0 0 0 var(--sidebar-foreground);
}
/* grid styles and placement*/

body{
    display: grid;
    grid:
        "header header header header" 100px
        ".....  taskcontainer taskcontainer ...." auto/
        1fr minmax(300px,500px) minmax(300px,500px) 1fr
        
    ;
}
.header{
    /* border: 1px solid black; */
    grid-area: header;
    text-align: center;

    
}

.task-count{
    width: 200px;
}
.task-header-title{
    width: 500px;
}
.task-list-container{
    background-color: var(--secondaryColor);
    border: 1px solid black;
    grid-area: taskcontainer;
    display: grid;
    grid: 
        "taskheader taskheader taskheader taskheader " 100px
        "tasklist tasklist tasklist ...." auto
        ".... taskadd taskadd ...." 50px
        "delete delete delete delete" 50px
        ".... .... .... ...." 25px/
        1fr 1fr 1fr 1fr
    ;
     
}

.task-list-header{
    grid-area: taskheader;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: var(--btnScondary); */
   
    
}

.task-list{
    grid-area:tasklist;
    display:flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top:50px;
    gap: 15px;
  
}
.task{
    width: 100%;
    height: 3rem;
    font-size: larger;
   
    
}
.task-add{
    grid-area:taskadd;
    align-self: center;
    display: flex;
    justify-content: center;
}

.delete-btns{
    grid-area:delete;
    display: flex;
    justify-content: space-around;
}


/* sidebar styles */

.sidebar ul{
 list-style: none;

}

.project-list{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 75px;
    margin-bottom: 75px;
    font-size: 1.3rem;
}

.active{
    font-weight: bolder;
    color: var(--active-color);
}

.project-list li:hover{
    cursor: pointer;
}

.project{
position: relative;
}

.project:after{
   content: "";
   position: absolute; 
   left: 0;
   bottom: 0;
   width: 100%;
   height: 2px;
   background-color: var(--secondaryColor);

   transform: scale(0);
   transform-origin: right;
   transition: transform var(--project-timing);
}

.project:hover::after{
    transform: scale(1);
    transform-origin: left;
}


/* input feild styles */

form{
    display: flex;
}
.new-input{
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--sidebar-foreground);
    color: inherit;
    font-size: inherit;
    order: 2;
}

#add-project{
    border-bottom: 1px solid var(--btnScondary);
    order: 2;
}

.btn{
    background: 0;
    border: 0;
    padding: 0;
}

.btn:hover{
    cursor: pointer;
}

.add-project-btn {
    font-size: 2rem;
    margin-right: 5px;
}

.add-project-btn:hover{
    color: var(--btnMain);
}

#add-task-btn{
    font-size: 1.5rem;
    margin-right: 5px;
}

#add-task-btn:hover{
    color: var(--btnScondary);
}

.delete{
    border: 1px solid var(--textColor);
    background-color: var(--btnMain);
    border-radius: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;

}

.delete:hover{
    background-color: var(--btnScondary);
}

/* task list checkbox styles */

.task-list-container [type="checkbox"]{
    opacity: 0;
    position: absolute;
}

.task label{
    display: flex;
    align-items: center;
    position: relative;
}

.task{
    position: relative;
}

.task::after{
    content: "";
    position: absolute;
    left: 0;
    right:0;
    bottom: 0;
    height: 1px;
    background: #333;
    width: 100%;
    opacity: 0.1;
    
}
.custom-checkbox{
    --size-:0.75em;
    display: inline-block;
    width: var(--size-);
    height: var(--size-);
    cursor: pointer;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: var(--size-);
    transform: scale(1);
    transition: transform var(--animation-timing);
}

.task label:hover{
    cursor: pointer;
}
.task:hover .custom-checkbox,
.task-list-container [type="checkbox"]:focus + label .custom-checkbox {
    transform: scale(1.3);
    border:2px solid var(--mainColor)
    
}

.task-list-container [type="checkbox"]:checked + label .custom-checkbox{
    background-color: var(--btnMain);
    border-color: var(--mainColor);
}

.task-list-container [type="checkbox"]:checked + label{
    opacity: 0.5;

}

.task label::after{
    content: "";
    position: absolute;
    height: 1.5px;
    left: 0;
    right: 0;
    background: #333;
    width: 100%;
    transform: scale(0);
    transform-origin: right;
    transition: transform 300ms ease-in-out;
}

.task-list-container [type="checkbox"]:checked + label::after{
    transform: scale(1);
    transform-origin: left;
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n:root{\n    /* color variables */\n        --mainColor:#3c7794;\n        --secondaryColor:#fce3f0;\n        --textColor:#202a4b;\n        --btnMain:#c2def7;\n        --btnScondary:#83b3d9;\n        --sidebar-foreground:#333;\n        --sidebar-background:white;\n        --active-color:#ff6fa9;\n    \n    /* height/width variables */\n        --bar-height:8px;\n        --bar-width:50px;\n        --hamburger-gap:6px;\n        --hamburger-margin:10px;\n        --hamburger-height:calc(var(--bar-height) *3 + var(--hamburger-gap) * 2);\n    \n    /* time variables */\n\n    --animation-timing:200ms ease-in-out;\n    --project-timing:300ms ease-in;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    background-color: var(--mainColor);\n    color: var(--textColor);\n    \n}\n\n/* sidebar styles */\n\n.hamburger-menu{\n    --x-width:calc(var(--hamburger-height) * 1.41421356237);\n    display: flex;\n    flex-direction: column;\n    gap: var(--hamburger-gap);\n    width: max-content;\n    position: absolute;\n    top: var(--hamburger-margin);\n    left: var(--hamburger-margin);\n    z-index: 2;\n    cursor: pointer;\n}\n.hamburger-menu::before,\n.hamburger-menu::after,\n.hamburger-menu input{\n    content: \"\";\n    width: var(--bar-width);\n    height: var(--bar-height);\n    background: var(--sidebar-foreground);\n    border-radius: 9999px;\n    transform-origin: left center;\n    transition: opacity var(--animation-timing) , width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);\n}\n\n.hamburger-menu input{\n    appearance: none;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    pointer-events: none;\n}\n\n.hamburger-menu:has(input:checked)::before{\n    rotate: 45deg;\n    width: var(--x-width);\n    translate: 0 calc(var(--bar-height)/-2);\n}\n.hamburger-menu:has(input:checked)::after{\n    rotate: -45deg;\n    width: var(--x-width);\n    translate: 0 calc(var(--bar-height)/2);\n}\n.hamburger-menu input:checked{\n    opacity: 0;\n    width: 0;\n    \n}\n\n.sidebar{\n transition: translate var(--animation-timing);\n  \n    padding:0.5rem 1rem;\n    padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem );\n    position: fixed;\n    border: 1px solid black;\n    min-height: 100vh;\n    min-width: 25%;\n    background-color: var(--sidebar-foreground);\n    color:var(--btnMain);\n    translate: -100%;\n    \n}\n.hamburger-menu:has(input:checked){\n    --sidebar-foreground:white;\n    --sidebar-background:#333;\n}\n\n.hamburger-menu:has(input:checked) ~ .sidebar{\n    translate: 0%;\n}\n\n.hamburger-menu:has(input:focus-visible)::before,\n.hamburger-menu:has(input:focus-visible)::after,\n.hamburger-menu input:focus-visible{\n    border:1px solid var(--sidebar-background);\n    box-shadow: 0 0 0 var(--sidebar-foreground);\n}\n/* grid styles and placement*/\n\nbody{\n    display: grid;\n    grid:\n        \"header header header header\" 100px\n        \".....  taskcontainer taskcontainer ....\" auto/\n        1fr minmax(300px,500px) minmax(300px,500px) 1fr\n        \n    ;\n}\n.header{\n    /* border: 1px solid black; */\n    grid-area: header;\n    text-align: center;\n\n    \n}\n\n.task-count{\n    width: 200px;\n}\n.task-header-title{\n    width: 500px;\n}\n.task-list-container{\n    background-color: var(--secondaryColor);\n    border: 1px solid black;\n    grid-area: taskcontainer;\n    display: grid;\n    grid: \n        \"taskheader taskheader taskheader taskheader \" 100px\n        \"tasklist tasklist tasklist ....\" auto\n        \".... taskadd taskadd ....\" 50px\n        \"delete delete delete delete\" 50px\n        \".... .... .... ....\" 25px/\n        1fr 1fr 1fr 1fr\n    ;\n     \n}\n\n.task-list-header{\n    grid-area: taskheader;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    /* background-color: var(--btnScondary); */\n   \n    \n}\n\n.task-list{\n    grid-area:tasklist;\n    display:flex;\n    flex-direction: column;\n    margin-left: 100px;\n    margin-top:50px;\n    gap: 15px;\n  \n}\n.task{\n    width: 100%;\n    height: 3rem;\n    font-size: larger;\n   \n    \n}\n.task-add{\n    grid-area:taskadd;\n    align-self: center;\n    display: flex;\n    justify-content: center;\n}\n\n.delete-btns{\n    grid-area:delete;\n    display: flex;\n    justify-content: space-around;\n}\n\n\n/* sidebar styles */\n\n.sidebar ul{\n list-style: none;\n\n}\n\n.project-list{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-top: 75px;\n    margin-bottom: 75px;\n    font-size: 1.3rem;\n}\n\n.active{\n    font-weight: bolder;\n    color: var(--active-color);\n}\n\n.project-list li:hover{\n    cursor: pointer;\n}\n\n.project{\nposition: relative;\n}\n\n.project:after{\n   content: \"\";\n   position: absolute; \n   left: 0;\n   bottom: 0;\n   width: 100%;\n   height: 2px;\n   background-color: var(--secondaryColor);\n\n   transform: scale(0);\n   transform-origin: right;\n   transition: transform var(--project-timing);\n}\n\n.project:hover::after{\n    transform: scale(1);\n    transform-origin: left;\n}\n\n\n/* input feild styles */\n\nform{\n    display: flex;\n}\n.new-input{\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid var(--sidebar-foreground);\n    color: inherit;\n    font-size: inherit;\n    order: 2;\n}\n\n#add-project{\n    border-bottom: 1px solid var(--btnScondary);\n    order: 2;\n}\n\n.btn{\n    background: 0;\n    border: 0;\n    padding: 0;\n}\n\n.btn:hover{\n    cursor: pointer;\n}\n\n.add-project-btn {\n    font-size: 2rem;\n    margin-right: 5px;\n}\n\n.add-project-btn:hover{\n    color: var(--btnMain);\n}\n\n#add-task-btn{\n    font-size: 1.5rem;\n    margin-right: 5px;\n}\n\n#add-task-btn:hover{\n    color: var(--btnScondary);\n}\n\n.delete{\n    border: 1px solid var(--textColor);\n    background-color: var(--btnMain);\n    border-radius: 15px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 200px;\n\n}\n\n.delete:hover{\n    background-color: var(--btnScondary);\n}\n\n/* task list checkbox styles */\n\n.task-list-container [type=\"checkbox\"]{\n    opacity: 0;\n    position: absolute;\n}\n\n.task label{\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.task{\n    position: relative;\n}\n\n.task::after{\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right:0;\n    bottom: 0;\n    height: 1px;\n    background: #333;\n    width: 100%;\n    opacity: 0.1;\n    \n}\n.custom-checkbox{\n    --size-:0.75em;\n    display: inline-block;\n    width: var(--size-);\n    height: var(--size-);\n    cursor: pointer;\n    border: 1px solid black;\n    border-radius: 50%;\n    margin-right: var(--size-);\n    transform: scale(1);\n    transition: transform var(--animation-timing);\n}\n\n.task label:hover{\n    cursor: pointer;\n}\n.task:hover .custom-checkbox,\n.task-list-container [type=\"checkbox\"]:focus + label .custom-checkbox {\n    transform: scale(1.3);\n    border:2px solid var(--mainColor)\n    \n}\n\n.task-list-container [type=\"checkbox\"]:checked + label .custom-checkbox{\n    background-color: var(--btnMain);\n    border-color: var(--mainColor);\n}\n\n.task-list-container [type=\"checkbox\"]:checked + label{\n    opacity: 0.5;\n\n}\n\n.task label::after{\n    content: \"\";\n    position: absolute;\n    height: 1.5px;\n    left: 0;\n    right: 0;\n    background: #333;\n    width: 100%;\n    transform: scale(0);\n    transform-origin: right;\n    transition: transform 300ms ease-in-out;\n}\n\n.task-list-container [type=\"checkbox\"]:checked + label::after{\n    transform: scale(1);\n    transform-origin: left;\n}"],"sourceRoot":""}]);
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
/* harmony export */   deleteTaskBtn: () => (/* binding */ deleteTaskBtn),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer),
/* harmony export */   projectDeleteBtn: () => (/* binding */ projectDeleteBtn),
/* harmony export */   projectForm: () => (/* binding */ projectForm),
/* harmony export */   projectInput: () => (/* binding */ projectInput),
/* harmony export */   taskContainer: () => (/* binding */ taskContainer),
/* harmony export */   taskForm: () => (/* binding */ taskForm),
/* harmony export */   taskInput: () => (/* binding */ taskInput),
/* harmony export */   taskList: () => (/* binding */ taskList),
/* harmony export */   taskRemaining: () => (/* binding */ taskRemaining),
/* harmony export */   taskTitle: () => (/* binding */ taskTitle),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });

//project list related elements 
const projectContainer = document.querySelector('[data-projectList]');  //the project container
const projectForm = document.querySelector('[data-addProjectForm]'); //the add project form
const projectInput =document.querySelector('[data-project-input]'); //add project form input
const projectDeleteBtn = document.querySelector('[ data-delete-project]');

//task related elements
const taskTitle = document.querySelector('[data-task-title]');
const taskRemaining = document.querySelector('[data-task-remaining]');
const taskList = document.querySelector('[data-task-list]');
const taskContainer = document.querySelector('[data-task-container]');

//task template

const template = document.getElementById('template');


//add task

const taskInput = document.querySelector('[data-add-task-input]');
const taskForm  = document.querySelector('[data-add-task-form]');


//delete task

const deleteTaskBtn = document.querySelector("[data-delete-tasks]");


/***/ }),

/***/ "./src/modules/cache/storageKeys.js":
/*!******************************************!*\
  !*** ./src/modules/cache/storageKeys.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROJECT_KEY: () => (/* binding */ PROJECT_KEY),
/* harmony export */   PROJECT_SELECTED_KEY: () => (/* binding */ PROJECT_SELECTED_KEY)
/* harmony export */ });
const PROJECT_KEY = "todo.projectlist";
const PROJECT_SELECTED_KEY = "todo.selectedProject";

/***/ }),

/***/ "./src/modules/eventListeners/addTasks.js":
/*!************************************************!*\
  !*** ./src/modules/eventListeners/addTasks.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _factoryFunctions_createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factoryFunctions/createTask */ "./src/modules/factoryFunctions/createTask.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/render */ "./src/modules/render/render.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");







function addTask(){
    
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const arr = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY);
        const selected =(0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY);
        const value = _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskInput.value;
    if (value === null || value === undefined) return;
        const task = (0,_factoryFunctions_createTask__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
        arr.forEach(element => {
            if (element.id === selected){
               element.tasks.push(task);
               
                
            }
        });
       (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY,arr);
       (0,_render_render__WEBPACK_IMPORTED_MODULE_3__["default"])(arr,selected);
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskForm.reset();
    })
}

/***/ }),

/***/ "./src/modules/eventListeners/addproject.js":
/*!**************************************************!*\
  !*** ./src/modules/eventListeners/addproject.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _factoryFunctions_createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factoryFunctions/createProject */ "./src/modules/factoryFunctions/createProject.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/render */ "./src/modules/render/render.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");







function addProject(arr,selected){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectInput.value === null ||_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectInput.value === "" ) return;
        const newProject = (0,_factoryFunctions_createProject__WEBPACK_IMPORTED_MODULE_2__["default"])(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectInput.value);
        arr = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY) || [];
        
        arr.push(newProject);
        (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY,arr);
        selected = newProject.id;
        (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY,selected);
        (0,_render_render__WEBPACK_IMPORTED_MODULE_3__["default"])(arr,selected);
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectForm.reset()
    
        
    
    })
}

/***/ }),

/***/ "./src/modules/eventListeners/attachEventListners.js":
/*!***********************************************************!*\
  !*** ./src/modules/eventListeners/attachEventListners.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attachEventListners)
/* harmony export */ });
/* harmony import */ var _addproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproject */ "./src/modules/eventListeners/addproject.js");
/* harmony import */ var _addTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTasks */ "./src/modules/eventListeners/addTasks.js");
/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteProject */ "./src/modules/eventListeners/deleteProject.js");
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteTask */ "./src/modules/eventListeners/deleteTask.js");
/* harmony import */ var _markTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markTasks */ "./src/modules/eventListeners/markTasks.js");
/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectProject */ "./src/modules/eventListeners/selectProject.js");







function attachEventListners(arr,selected){
    (0,_addproject__WEBPACK_IMPORTED_MODULE_0__["default"])(arr,selected);
    (0,_selectProject__WEBPACK_IMPORTED_MODULE_5__["default"])(arr,selected);
    (0,_addTasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_markTasks__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_deleteProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_deleteTask__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/modules/eventListeners/deleteProject.js":
/*!*****************************************************!*\
  !*** ./src/modules/eventListeners/deleteProject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/render */ "./src/modules/render/render.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");







function deleteProject() {
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectDeleteBtn.addEventListener('click', (e) => {
        // Get the current selected project from storage
        const selected = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY);

        // Get the project array from storage
        const array = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY);

        // Filter out the selected project from the array
        const newArray = array.filter(project => project.id !== selected);

        // Update the storage with the modified array
        (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY, newArray);

        // Clear the selected project
        (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY, null);

        // Render the updated project list
        
        (0,_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])(newArray, null);
    });
}

/***/ }),

/***/ "./src/modules/eventListeners/deleteTask.js":
/*!**************************************************!*\
  !*** ./src/modules/eventListeners/deleteTask.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteCompletedTasks)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/render */ "./src/modules/render/render.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");






function deleteCompletedTasks(){
   
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.deleteTaskBtn.addEventListener('click',(e)=>{
        const arr = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY);
        const selected = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY);
        arr.forEach(element => {
            if(element.id === selected){
               let tasklist = element.tasks;
               
                const updatedTaskList = tasklist.filter(task =>{
                    return !task.complete;
                })
                element.tasks = updatedTaskList;
                (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY,arr);
                (0,_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])(arr,selected);
            }
        });
        
        
    })

}

/***/ }),

/***/ "./src/modules/eventListeners/markTasks.js":
/*!*************************************************!*\
  !*** ./src/modules/eventListeners/markTasks.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ markTask)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/render */ "./src/modules/render/render.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");






function markTask(){
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskList.addEventListener('click',(e)=>{
        if(e.target.tagName.toLowerCase() === 'input'){
            const arr = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY);
            const selected = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY);

            const currentProject = arr.find(element => element.id === selected);
            const clickedTask = currentProject.tasks.find(task => task.id === e.target.id);
            if (clickedTask.complete === true){
                clickedTask.complete = false;
                (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY,arr);
                (0,_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])(arr,selected);
            }else{
                clickedTask.complete = true;
                (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY,arr);
                (0,_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])(arr,selected);
            }
        }
    })
}

/***/ }),

/***/ "./src/modules/eventListeners/selectProject.js":
/*!*****************************************************!*\
  !*** ./src/modules/eventListeners/selectProject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectProject)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/render */ "./src/modules/render/render.js");
/* harmony import */ var _render_renderProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderProjectList */ "./src/modules/render/renderProjectList.js");
/* harmony import */ var _storage_getStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/getStorage */ "./src/modules/storage/getStorage.js");
/* harmony import */ var _storage_setStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/setStorage */ "./src/modules/storage/setStorage.js");







function selectProject(arr,selected){
   _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectContainer.addEventListener('click',(e)=>{
    if(e.target.tagName.toLowerCase() === 'li'){
        selected = e.target.dataset.listid;
        arr = (0,_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY);
        (0,_render_renderProjectList__WEBPACK_IMPORTED_MODULE_3__["default"])(arr,selected);
        (0,_storage_setStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY,selected);
        (0,_render_render__WEBPACK_IMPORTED_MODULE_2__["default"])(arr,selected);
    }
   })
}

/***/ }),

/***/ "./src/modules/factoryFunctions/createProject.js":
/*!*******************************************************!*\
  !*** ./src/modules/factoryFunctions/createProject.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(name){
    return {
        name:name,
        id:Date.now().toString(),
        tasks:[
    ],
    }
}

/***/ }),

/***/ "./src/modules/factoryFunctions/createTask.js":
/*!****************************************************!*\
  !*** ./src/modules/factoryFunctions/createTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(name){
    return{
        name:name,
        id:Date.now().toString(),
        complete:false
    }
}

/***/ }),

/***/ "./src/modules/render/clearList.js":
/*!*****************************************!*\
  !*** ./src/modules/render/clearList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearList)
/* harmony export */ });
function clearList(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

/***/ }),

/***/ "./src/modules/render/render.js":
/*!**************************************!*\
  !*** ./src/modules/render/render.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _renderProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjectList */ "./src/modules/render/renderProjectList.js");
/* harmony import */ var _renderTaskContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskContainer */ "./src/modules/render/renderTaskContainer.js");



function render(arr,selected){
    (0,_renderProjectList__WEBPACK_IMPORTED_MODULE_0__["default"])(arr,selected);
    (0,_renderTaskContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(arr,selected);
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
/* harmony import */ var _clearList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearList */ "./src/modules/render/clearList.js");



function renderProjectList(array,selected){
    (0,_clearList__WEBPACK_IMPORTED_MODULE_1__["default"])(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectContainer);
    array.forEach(arr =>{
        const li = document.createElement('li');
        li.classList.add('project');
        li.innerText=arr.name;
        li.dataset.listid = arr.id;
        if(arr.id === selected){
            li.classList.add('active');
        }
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.projectContainer.appendChild(li);
        
    })

}

/***/ }),

/***/ "./src/modules/render/renderTaskContainer.js":
/*!***************************************************!*\
  !*** ./src/modules/render/renderTaskContainer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTaskContainer)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _renderTaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskList */ "./src/modules/render/renderTaskList.js");
/* harmony import */ var _renderTasksRemaining__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasksRemaining */ "./src/modules/render/renderTasksRemaining.js");




function renderTaskContainer(arr,selected){
   if (selected === null){
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskContainer.style.display = "none";
   }else{
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskContainer.style.display = "";
    const current = arr.find(function(item){
        return (item.id === selected)
     });
     _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskTitle.innerText = current.name;
     (0,_renderTasksRemaining__WEBPACK_IMPORTED_MODULE_2__["default"])(current);
     (0,_renderTaskList__WEBPACK_IMPORTED_MODULE_1__["default"])(current);
   }
    
   
  
    
    
}

/***/ }),

/***/ "./src/modules/render/renderTaskList.js":
/*!**********************************************!*\
  !*** ./src/modules/render/renderTaskList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTaskList)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");
/* harmony import */ var _clearList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearList */ "./src/modules/render/clearList.js");



function renderTaskList(obj){
    (0,_clearList__WEBPACK_IMPORTED_MODULE_1__["default"])(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskList);
    const tasks = obj.tasks;
    tasks.forEach(task => {
       const taskElement = document.importNode(_cache_domElements__WEBPACK_IMPORTED_MODULE_0__.template.content,true);
        const input = taskElement.querySelector('input');
        input.id=task.id;
        input.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.setAttribute('for',`${task.id}`);
        label.htmlFor = task.id;
        label.append(task.name);
       
        
        _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskList.appendChild(taskElement);
        
    });
}

// <div class="task">
// <input type="checkbox" name="" id="task-2">
// <label for="task-2">
//     <span class="custom-checkbox"></span>
//     study React
// </label>
// </div>

/***/ }),

/***/ "./src/modules/render/renderTasksRemaining.js":
/*!****************************************************!*\
  !*** ./src/modules/render/renderTasksRemaining.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTasksRemaining)
/* harmony export */ });
/* harmony import */ var _cache_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cache/domElements */ "./src/modules/cache/domElements.js");


function renderTasksRemaining(obj){
    const tasks = obj.tasks;
    const tasksIncomplete = tasks.filter(function(task){
        return task.complete === false;
    })
    const taskCount = tasksIncomplete.length;
    const grammar = taskCount === 1 ? "task" : "tasks";
    
    _cache_domElements__WEBPACK_IMPORTED_MODULE_0__.taskRemaining.innerText = `${taskCount} ${grammar} remaining`
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
/* harmony import */ var _modules_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cache/storageKeys */ "./src/modules/cache/storageKeys.js");
/* harmony import */ var _modules_eventListeners_attachEventListners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eventListeners/attachEventListners */ "./src/modules/eventListeners/attachEventListners.js");
/* harmony import */ var _modules_render_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render/render */ "./src/modules/render/render.js");
/* harmony import */ var _modules_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage/getStorage */ "./src/modules/storage/getStorage.js");











let projectList = (0,_modules_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_modules_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_KEY) || [];
let selectedProject = (0,_modules_storage_getStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(_modules_cache_storageKeys__WEBPACK_IMPORTED_MODULE_1__.PROJECT_SELECTED_KEY);



(0,_modules_eventListeners_attachEventListners__WEBPACK_IMPORTED_MODULE_2__["default"])(projectList,selectedProject);
(0,_modules_render_render__WEBPACK_IMPORTED_MODULE_3__["default"])(projectList,selectedProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLFNBQVMsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGVBQWUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGVBQWUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxhQUFhLE1BQU0sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxL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QUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNvRDtBQUNEO0FBQ2xDO0FBQ2M7Ozs7Ozs7QUFPM0Qsa0JBQWtCLHVFQUFlLENBQUMsbUVBQVc7QUFDN0Msc0JBQXNCLHVFQUFlLENBQUMsNEVBQW9COzs7O0FBSTFELHVGQUFtQjtBQUNuQixrRUFBTSw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2FjaGUvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NhY2hlL3N0b3JhZ2VLZXlzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9hZGRUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYWRkcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvYXR0YWNoRXZlbnRMaXN0bmVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvZGVsZXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvZGVsZXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lcnMvbWFya1Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVycy9zZWxlY3RQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3J5RnVuY3Rpb25zL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2ZhY3RvcnlGdW5jdGlvbnMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL2NsZWFyTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL3JlbmRlclByb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvcmVuZGVyVGFza0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyL3JlbmRlclRhc2tMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIvcmVuZGVyVGFza3NSZW1haW5pbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UvZ2V0U3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS9zZXRTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuICAgIC8qIGNvbG9yIHZhcmlhYmxlcyAqL1xuICAgICAgICAtLW1haW5Db2xvcjojM2M3Nzk0O1xuICAgICAgICAtLXNlY29uZGFyeUNvbG9yOiNmY2UzZjA7XG4gICAgICAgIC0tdGV4dENvbG9yOiMyMDJhNGI7XG4gICAgICAgIC0tYnRuTWFpbjojYzJkZWY3O1xuICAgICAgICAtLWJ0blNjb25kYXJ5OiM4M2IzZDk7XG4gICAgICAgIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiMzMzM7XG4gICAgICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOndoaXRlO1xuICAgICAgICAtLWFjdGl2ZS1jb2xvcjojZmY2ZmE5O1xuICAgIFxuICAgIC8qIGhlaWdodC93aWR0aCB2YXJpYWJsZXMgKi9cbiAgICAgICAgLS1iYXItaGVpZ2h0OjhweDtcbiAgICAgICAgLS1iYXItd2lkdGg6NTBweDtcbiAgICAgICAgLS1oYW1idXJnZXItZ2FwOjZweDtcbiAgICAgICAgLS1oYW1idXJnZXItbWFyZ2luOjEwcHg7XG4gICAgICAgIC0taGFtYnVyZ2VyLWhlaWdodDpjYWxjKHZhcigtLWJhci1oZWlnaHQpICozICsgdmFyKC0taGFtYnVyZ2VyLWdhcCkgKiAyKTtcbiAgICBcbiAgICAvKiB0aW1lIHZhcmlhYmxlcyAqL1xuXG4gICAgLS1hbmltYXRpb24tdGltaW5nOjIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIC0tcHJvamVjdC10aW1pbmc6MzAwbXMgZWFzZS1pbjtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgXG59XG5cbi8qIHNpZGViYXIgc3R5bGVzICovXG5cbi5oYW1idXJnZXItbWVudXtcbiAgICAtLXgtd2lkdGg6Y2FsYyh2YXIoLS1oYW1idXJnZXItaGVpZ2h0KSAqIDEuNDE0MjEzNTYyMzcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLWhhbWJ1cmdlci1nYXApO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiB2YXIoLS1oYW1idXJnZXItbWFyZ2luKTtcbiAgICBsZWZ0OiB2YXIoLS1oYW1idXJnZXItbWFyZ2luKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oYW1idXJnZXItbWVudTo6YmVmb3JlLFxuLmhhbWJ1cmdlci1tZW51OjphZnRlcixcbi5oYW1idXJnZXItbWVudSBpbnB1dHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiB2YXIoLS1iYXItd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tYmFyLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS1hbmltYXRpb24tdGltaW5nKSAsIHdpZHRoIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLCByb3RhdGUgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyksIHRyYW5zbGF0ZSB2YXIoLS1hbmltYXRpb24tdGltaW5nKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51IGlucHV0e1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3Jle1xuICAgIHJvdGF0ZTogNDVkZWc7XG4gICAgd2lkdGg6IHZhcigtLXgtd2lkdGgpO1xuICAgIHRyYW5zbGF0ZTogMCBjYWxjKHZhcigtLWJhci1oZWlnaHQpLy0yKTtcbn1cbi5oYW1idXJnZXItbWVudTpoYXMoaW5wdXQ6Y2hlY2tlZCk6OmFmdGVye1xuICAgIHJvdGF0ZTogLTQ1ZGVnO1xuICAgIHdpZHRoOiB2YXIoLS14LXdpZHRoKTtcbiAgICB0cmFuc2xhdGU6IDAgY2FsYyh2YXIoLS1iYXItaGVpZ2h0KS8yKTtcbn1cbi5oYW1idXJnZXItbWVudSBpbnB1dDpjaGVja2Vke1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgXG59XG5cbi5zaWRlYmFye1xuIHRyYW5zaXRpb246IHRyYW5zbGF0ZSB2YXIoLS1hbmltYXRpb24tdGltaW5nKTtcbiAgXG4gICAgcGFkZGluZzowLjVyZW0gMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1oYW1idXJnZXItaGVpZ2h0KSArIHZhcigtLWhhbWJ1cmdlci1tYXJnaW4pICsgMXJlbSApO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDI1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAgIGNvbG9yOnZhcigtLWJ0bk1haW4pO1xuICAgIHRyYW5zbGF0ZTogLTEwMCU7XG4gICAgXG59XG4uaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmNoZWNrZWQpe1xuICAgIC0tc2lkZWJhci1mb3JlZ3JvdW5kOndoaXRlO1xuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiMzMzM7XG59XG5cbi5oYW1idXJnZXItbWVudTpoYXMoaW5wdXQ6Y2hlY2tlZCkgfiAuc2lkZWJhcntcbiAgICB0cmFuc2xhdGU6IDAlO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmZvY3VzLXZpc2libGUpOjpiZWZvcmUsXG4uaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmZvY3VzLXZpc2libGUpOjphZnRlcixcbi5oYW1idXJnZXItbWVudSBpbnB1dDpmb2N1cy12aXNpYmxle1xuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xufVxuLyogZ3JpZCBzdHlsZXMgYW5kIHBsYWNlbWVudCovXG5cbmJvZHl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkOlxuICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclwiIDEwMHB4XG4gICAgICAgIFwiLi4uLi4gIHRhc2tjb250YWluZXIgdGFza2NvbnRhaW5lciAuLi4uXCIgYXV0by9cbiAgICAgICAgMWZyIG1pbm1heCgzMDBweCw1MDBweCkgbWlubWF4KDMwMHB4LDUwMHB4KSAxZnJcbiAgICAgICAgXG4gICAgO1xufVxuLmhlYWRlcntcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBcbn1cblxuLnRhc2stY291bnR7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuLnRhc2staGVhZGVyLXRpdGxle1xuICAgIHdpZHRoOiA1MDBweDtcbn1cbi50YXNrLWxpc3QtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBncmlkLWFyZWE6IHRhc2tjb250YWluZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkOiBcbiAgICAgICAgXCJ0YXNraGVhZGVyIHRhc2toZWFkZXIgdGFza2hlYWRlciB0YXNraGVhZGVyIFwiIDEwMHB4XG4gICAgICAgIFwidGFza2xpc3QgdGFza2xpc3QgdGFza2xpc3QgLi4uLlwiIGF1dG9cbiAgICAgICAgXCIuLi4uIHRhc2thZGQgdGFza2FkZCAuLi4uXCIgNTBweFxuICAgICAgICBcImRlbGV0ZSBkZWxldGUgZGVsZXRlIGRlbGV0ZVwiIDUwcHhcbiAgICAgICAgXCIuLi4uIC4uLi4gLi4uLiAuLi4uXCIgMjVweC9cbiAgICAgICAgMWZyIDFmciAxZnIgMWZyXG4gICAgO1xuICAgICBcbn1cblxuLnRhc2stbGlzdC1oZWFkZXJ7XG4gICAgZ3JpZC1hcmVhOiB0YXNraGVhZGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5TY29uZGFyeSk7ICovXG4gICBcbiAgICBcbn1cblxuLnRhc2stbGlzdHtcbiAgICBncmlkLWFyZWE6dGFza2xpc3Q7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICBnYXA6IDE1cHg7XG4gIFxufVxuLnRhc2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgXG4gICAgXG59XG4udGFzay1hZGR7XG4gICAgZ3JpZC1hcmVhOnRhc2thZGQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kZWxldGUtYnRuc3tcbiAgICBncmlkLWFyZWE6ZGVsZXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cblxuLyogc2lkZWJhciBzdHlsZXMgKi9cblxuLnNpZGViYXIgdWx7XG4gbGlzdC1zdHlsZTogbm9uZTtcblxufVxuXG4ucHJvamVjdC1saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uYWN0aXZle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWxpc3QgbGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3Q6YWZ0ZXJ7XG4gICBjb250ZW50OiBcIlwiO1xuICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgIGxlZnQ6IDA7XG4gICBib3R0b206IDA7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogMnB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xuXG4gICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tcHJvamVjdC10aW1pbmcpO1xufVxuXG4ucHJvamVjdDpob3Zlcjo6YWZ0ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG5cbi8qIGlucHV0IGZlaWxkIHN0eWxlcyAqL1xuXG5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubmV3LWlucHV0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgb3JkZXI6IDI7XG59XG5cbiNhZGQtcHJvamVjdHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnRuU2NvbmRhcnkpO1xuICAgIG9yZGVyOiAyO1xufVxuXG4uYnRue1xuICAgIGJhY2tncm91bmQ6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5idG46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG46aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWJ0bk1haW4pO1xufVxuXG4jYWRkLXRhc2stYnRue1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4jYWRkLXRhc2stYnRuOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1idG5TY29uZGFyeSk7XG59XG5cbi5kZWxldGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcblxufVxuXG4uZGVsZXRlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blNjb25kYXJ5KTtcbn1cblxuLyogdGFzayBsaXN0IGNoZWNrYm94IHN0eWxlcyAqL1xuXG4udGFzay1saXN0LWNvbnRhaW5lciBbdHlwZT1cImNoZWNrYm94XCJde1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udGFzayBsYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFza3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIFxufVxuLmN1c3RvbS1jaGVja2JveHtcbiAgICAtLXNpemUtOjAuNzVlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IHZhcigtLXNpemUtKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUtKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS0pO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpO1xufVxuXG4udGFzayBsYWJlbDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxuLnRhc2stbGlzdC1jb250YWluZXIgW3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW1haW5Db2xvcilcbiAgICBcbn1cblxuLnRhc2stbGlzdC1jb250YWluZXIgW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVse1xuICAgIG9wYWNpdHk6IDAuNTtcblxufVxuXG4udGFzayBsYWJlbDo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxLjVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtRQUNoQixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsc0JBQXNCOztJQUUxQiwyQkFBMkI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHdFQUF3RTs7SUFFNUUsbUJBQW1COztJQUVuQixvQ0FBb0M7SUFDcEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHVCQUF1Qjs7QUFFM0I7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTs7O0lBR0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsOElBQThJO0FBQ2xKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7O0FBRVo7O0FBRUE7Q0FDQyw2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WTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxxQkFBcUI7SUFDckI7O0FBRUo7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixPQUFPO0lBQ1AsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLyogY29sb3IgdmFyaWFibGVzICovXFxuICAgICAgICAtLW1haW5Db2xvcjojM2M3Nzk0O1xcbiAgICAgICAgLS1zZWNvbmRhcnlDb2xvcjojZmNlM2YwO1xcbiAgICAgICAgLS10ZXh0Q29sb3I6IzIwMmE0YjtcXG4gICAgICAgIC0tYnRuTWFpbjojYzJkZWY3O1xcbiAgICAgICAgLS1idG5TY29uZGFyeTojODNiM2Q5O1xcbiAgICAgICAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IzMzMztcXG4gICAgICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOndoaXRlO1xcbiAgICAgICAgLS1hY3RpdmUtY29sb3I6I2ZmNmZhOTtcXG4gICAgXFxuICAgIC8qIGhlaWdodC93aWR0aCB2YXJpYWJsZXMgKi9cXG4gICAgICAgIC0tYmFyLWhlaWdodDo4cHg7XFxuICAgICAgICAtLWJhci13aWR0aDo1MHB4O1xcbiAgICAgICAgLS1oYW1idXJnZXItZ2FwOjZweDtcXG4gICAgICAgIC0taGFtYnVyZ2VyLW1hcmdpbjoxMHB4O1xcbiAgICAgICAgLS1oYW1idXJnZXItaGVpZ2h0OmNhbGModmFyKC0tYmFyLWhlaWdodCkgKjMgKyB2YXIoLS1oYW1idXJnZXItZ2FwKSAqIDIpO1xcbiAgICBcXG4gICAgLyogdGltZSB2YXJpYWJsZXMgKi9cXG5cXG4gICAgLS1hbmltYXRpb24tdGltaW5nOjIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAtLXByb2plY3QtdGltaW5nOjMwMG1zIGVhc2UtaW47XFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIFxcbn1cXG5cXG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xcblxcbi5oYW1idXJnZXItbWVudXtcXG4gICAgLS14LXdpZHRoOmNhbGModmFyKC0taGFtYnVyZ2VyLWhlaWdodCkgKiAxLjQxNDIxMzU2MjM3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1oYW1idXJnZXItZ2FwKTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogdmFyKC0taGFtYnVyZ2VyLW1hcmdpbik7XFxuICAgIGxlZnQ6IHZhcigtLWhhbWJ1cmdlci1tYXJnaW4pO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oYW1idXJnZXItbWVudTo6YmVmb3JlLFxcbi5oYW1idXJnZXItbWVudTo6YWZ0ZXIsXFxuLmhhbWJ1cmdlci1tZW51IGlucHV0e1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IHZhcigtLWJhci13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tYmFyLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tYW5pbWF0aW9uLXRpbWluZykgLCB3aWR0aCB2YXIoLS1hbmltYXRpb24tdGltaW5nKSwgcm90YXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpLCB0cmFuc2xhdGUgdmFyKC0tYW5pbWF0aW9uLXRpbWluZyk7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSBpbnB1dHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKTo6YmVmb3Jle1xcbiAgICByb3RhdGU6IDQ1ZGVnO1xcbiAgICB3aWR0aDogdmFyKC0teC13aWR0aCk7XFxuICAgIHRyYW5zbGF0ZTogMCBjYWxjKHZhcigtLWJhci1oZWlnaHQpLy0yKTtcXG59XFxuLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKTo6YWZ0ZXJ7XFxuICAgIHJvdGF0ZTogLTQ1ZGVnO1xcbiAgICB3aWR0aDogdmFyKC0teC13aWR0aCk7XFxuICAgIHRyYW5zbGF0ZTogMCBjYWxjKHZhcigtLWJhci1oZWlnaHQpLzIpO1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUgaW5wdXQ6Y2hlY2tlZHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhcntcXG4gdHJhbnNpdGlvbjogdHJhbnNsYXRlIHZhcigtLWFuaW1hdGlvbi10aW1pbmcpO1xcbiAgXFxuICAgIHBhZGRpbmc6MC41cmVtIDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWhhbWJ1cmdlci1oZWlnaHQpICsgdmFyKC0taGFtYnVyZ2VyLW1hcmdpbikgKyAxcmVtICk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKTtcXG4gICAgY29sb3I6dmFyKC0tYnRuTWFpbik7XFxuICAgIHRyYW5zbGF0ZTogLTEwMCU7XFxuICAgIFxcbn1cXG4uaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmNoZWNrZWQpe1xcbiAgICAtLXNpZGViYXItZm9yZWdyb3VuZDp3aGl0ZTtcXG4gICAgLS1zaWRlYmFyLWJhY2tncm91bmQ6IzMzMztcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpjaGVja2VkKSB+IC5zaWRlYmFye1xcbiAgICB0cmFuc2xhdGU6IDAlO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnU6aGFzKGlucHV0OmZvY3VzLXZpc2libGUpOjpiZWZvcmUsXFxuLmhhbWJ1cmdlci1tZW51OmhhcyhpbnB1dDpmb2N1cy12aXNpYmxlKTo6YWZ0ZXIsXFxuLmhhbWJ1cmdlci1tZW51IGlucHV0OmZvY3VzLXZpc2libGV7XFxuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKTtcXG59XFxuLyogZ3JpZCBzdHlsZXMgYW5kIHBsYWNlbWVudCovXFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIDEwMHB4XFxuICAgICAgICBcXFwiLi4uLi4gIHRhc2tjb250YWluZXIgdGFza2NvbnRhaW5lciAuLi4uXFxcIiBhdXRvL1xcbiAgICAgICAgMWZyIG1pbm1heCgzMDBweCw1MDBweCkgbWlubWF4KDMwMHB4LDUwMHB4KSAxZnJcXG4gICAgICAgIFxcbiAgICA7XFxufVxcbi5oZWFkZXJ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBcXG59XFxuXFxuLnRhc2stY291bnR7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuLnRhc2staGVhZGVyLXRpdGxle1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcbi50YXNrLWxpc3QtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBncmlkLWFyZWE6IHRhc2tjb250YWluZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IFxcbiAgICAgICAgXFxcInRhc2toZWFkZXIgdGFza2hlYWRlciB0YXNraGVhZGVyIHRhc2toZWFkZXIgXFxcIiAxMDBweFxcbiAgICAgICAgXFxcInRhc2tsaXN0IHRhc2tsaXN0IHRhc2tsaXN0IC4uLi5cXFwiIGF1dG9cXG4gICAgICAgIFxcXCIuLi4uIHRhc2thZGQgdGFza2FkZCAuLi4uXFxcIiA1MHB4XFxuICAgICAgICBcXFwiZGVsZXRlIGRlbGV0ZSBkZWxldGUgZGVsZXRlXFxcIiA1MHB4XFxuICAgICAgICBcXFwiLi4uLiAuLi4uIC4uLi4gLi4uLlxcXCIgMjVweC9cXG4gICAgICAgIDFmciAxZnIgMWZyIDFmclxcbiAgICA7XFxuICAgICBcXG59XFxuXFxuLnRhc2stbGlzdC1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogdGFza2hlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blNjb25kYXJ5KTsgKi9cXG4gICBcXG4gICAgXFxufVxcblxcbi50YXNrLWxpc3R7XFxuICAgIGdyaWQtYXJlYTp0YXNrbGlzdDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6NTBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgXFxufVxcbi50YXNre1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICBcXG4gICAgXFxufVxcbi50YXNrLWFkZHtcXG4gICAgZ3JpZC1hcmVhOnRhc2thZGQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtYnRuc3tcXG4gICAgZ3JpZC1hcmVhOmRlbGV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcblxcbi8qIHNpZGViYXIgc3R5bGVzICovXFxuXFxuLnNpZGViYXIgdWx7XFxuIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxufVxcblxcbi5wcm9qZWN0LWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogNzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5hY3RpdmV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGxpOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0e1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3Q6YWZ0ZXJ7XFxuICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICBsZWZ0OiAwO1xcbiAgIGJvdHRvbTogMDtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDJweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuXFxuICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tcHJvamVjdC10aW1pbmcpO1xcbn1cXG5cXG4ucHJvamVjdDpob3Zlcjo6YWZ0ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcblxcbi8qIGlucHV0IGZlaWxkIHN0eWxlcyAqL1xcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uZXctaW5wdXR7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0e1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnRuU2NvbmRhcnkpO1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuLmJ0bntcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tYnRuTWFpbik7XFxufVxcblxcbiNhZGQtdGFzay1idG57XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLWJ0blNjb25kYXJ5KTtcXG59XFxuXFxuLmRlbGV0ZXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dENvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuTWFpbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxufVxcblxcbi5kZWxldGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blNjb25kYXJ5KTtcXG59XFxuXFxuLyogdGFzayBsaXN0IGNoZWNrYm94IHN0eWxlcyAqL1xcblxcbi50YXNrLWxpc3QtY29udGFpbmVyIFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50YXNrIGxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNre1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgXFxufVxcbi5jdXN0b20tY2hlY2tib3h7XFxuICAgIC0tc2l6ZS06MC43NWVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZS0pO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS0pO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tYW5pbWF0aW9uLXRpbWluZyk7XFxufVxcblxcbi50YXNrIGxhYmVsOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuLnRhc2stbGlzdC1jb250YWluZXIgW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW1haW5Db2xvcilcXG4gICAgXFxufVxcblxcbi50YXNrLWxpc3QtY29udGFpbmVyIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5NYWluKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbn1cXG5cXG4udGFzay1saXN0LWNvbnRhaW5lciBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWx7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG5cXG59XFxuXFxuLnRhc2sgbGFiZWw6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEuNXB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWxpc3QtY29udGFpbmVyIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbi8vcHJvamVjdCBsaXN0IHJlbGF0ZWQgZWxlbWVudHMgXG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RMaXN0XScpOyAgLy90aGUgcHJvamVjdCBjb250YWluZXJcbmV4cG9ydCBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZFByb2plY3RGb3JtXScpOyAvL3RoZSBhZGQgcHJvamVjdCBmb3JtXG5leHBvcnQgY29uc3QgcHJvamVjdElucHV0ID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LWlucHV0XScpOyAvL2FkZCBwcm9qZWN0IGZvcm0gaW5wdXRcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignWyBkYXRhLWRlbGV0ZS1wcm9qZWN0XScpO1xuXG4vL3Rhc2sgcmVsYXRlZCBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2stdGl0bGVdJyk7XG5leHBvcnQgY29uc3QgdGFza1JlbWFpbmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2stcmVtYWluaW5nXScpO1xuZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFzay1saXN0XScpO1xuZXhwb3J0IGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrLWNvbnRhaW5lcl0nKTtcblxuLy90YXNrIHRlbXBsYXRlXG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZScpO1xuXG5cbi8vYWRkIHRhc2tcblxuZXhwb3J0IGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLWlucHV0XScpO1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC10YXNrLWZvcm1dJyk7XG5cblxuLy9kZWxldGUgdGFza1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZWxldGUtdGFza3NdXCIpO1xuIiwiZXhwb3J0IGNvbnN0IFBST0pFQ1RfS0VZID0gXCJ0b2RvLnByb2plY3RsaXN0XCI7XG5leHBvcnQgY29uc3QgUFJPSkVDVF9TRUxFQ1RFRF9LRVkgPSBcInRvZG8uc2VsZWN0ZWRQcm9qZWN0XCI7IiwiaW1wb3J0IHsgdGFza0Zvcm0sIHRhc2tJbnB1dCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IHsgUFJPSkVDVF9LRVksIFBST0pFQ1RfU0VMRUNURURfS0VZIH0gZnJvbSBcIi4uL2NhY2hlL3N0b3JhZ2VLZXlzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi4vZmFjdG9yeUZ1bmN0aW9ucy9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuLi9yZW5kZXIvcmVuZGVyXCI7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuLi9zdG9yYWdlL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBzZXRTdG9yYWdlSXRlbSBmcm9tIFwiLi4vc3RvcmFnZS9zZXRTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGFyciA9IEdldFN0b3JhZ2VJdGVtcyhQUk9KRUNUX0tFWSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID1HZXRTdG9yYWdlSXRlbXMoUFJPSkVDVF9TRUxFQ1RFRF9LRVkpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh2YWx1ZSk7XG4gICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQgPT09IHNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgIGVsZW1lbnQudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICBzZXRTdG9yYWdlSXRlbShQUk9KRUNUX0tFWSxhcnIpO1xuICAgICAgIHJlbmRlcihhcnIsc2VsZWN0ZWQpO1xuICAgICAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgcHJvamVjdEZvcm0sIHByb2plY3RJbnB1dCB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IHsgUFJPSkVDVF9LRVksIFBST0pFQ1RfU0VMRUNURURfS0VZIH0gZnJvbSBcIi4uL2NhY2hlL3N0b3JhZ2VLZXlzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi4vZmFjdG9yeUZ1bmN0aW9ucy9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuLi9yZW5kZXIvcmVuZGVyXCI7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuLi9zdG9yYWdlL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBzZXRTdG9yYWdlSXRlbSBmcm9tIFwiLi4vc3RvcmFnZS9zZXRTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QoYXJyLHNlbGVjdGVkKXtcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKHByb2plY3RJbnB1dC52YWx1ZSA9PT0gbnVsbCB8fHByb2plY3RJbnB1dC52YWx1ZSA9PT0gXCJcIiApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgYXJyID0gR2V0U3RvcmFnZUl0ZW1zKFBST0pFQ1RfS0VZKSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIGFyci5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBzZXRTdG9yYWdlSXRlbShQUk9KRUNUX0tFWSxhcnIpO1xuICAgICAgICBzZWxlY3RlZCA9IG5ld1Byb2plY3QuaWQ7XG4gICAgICAgIHNldFN0b3JhZ2VJdGVtKFBST0pFQ1RfU0VMRUNURURfS0VZLHNlbGVjdGVkKTtcbiAgICAgICAgcmVuZGVyKGFycixzZWxlY3RlZCk7XG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KClcbiAgICBcbiAgICAgICAgXG4gICAgXG4gICAgfSlcbn0iLCJpbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRwcm9qZWN0XCI7XG5pbXBvcnQgYWRkVGFzayBmcm9tIFwiLi9hZGRUYXNrc1wiO1xuaW1wb3J0IGRlbGV0ZVByb2plY3QgZnJvbSBcIi4vZGVsZXRlUHJvamVjdFwiO1xuaW1wb3J0IGRlbGV0ZUNvbXBsZXRlZFRhc2tzIGZyb20gXCIuL2RlbGV0ZVRhc2tcIjtcbmltcG9ydCBtYXJrVGFzayBmcm9tIFwiLi9tYXJrVGFza3NcIjtcbmltcG9ydCBzZWxlY3RQcm9qZWN0IGZyb20gXCIuL3NlbGVjdFByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0YWNoRXZlbnRMaXN0bmVycyhhcnIsc2VsZWN0ZWQpe1xuICAgIGFkZFByb2plY3QoYXJyLHNlbGVjdGVkKTtcbiAgICBzZWxlY3RQcm9qZWN0KGFycixzZWxlY3RlZCk7XG4gICAgYWRkVGFzaygpO1xuICAgIG1hcmtUYXNrKCk7XG4gICAgZGVsZXRlUHJvamVjdCgpO1xuICAgIGRlbGV0ZUNvbXBsZXRlZFRhc2tzKCk7XG59IiwiaW1wb3J0IHsgcHJvamVjdERlbGV0ZUJ0biB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IHsgUFJPSkVDVF9LRVksIFBST0pFQ1RfU0VMRUNURURfS0VZIH0gZnJvbSBcIi4uL2NhY2hlL3N0b3JhZ2VLZXlzXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuLi9yZW5kZXIvcmVuZGVyXCI7XG5cbmltcG9ydCBHZXRTdG9yYWdlSXRlbXMgZnJvbSBcIi4uL3N0b3JhZ2UvZ2V0U3RvcmFnZVwiO1xuaW1wb3J0IHNldFN0b3JhZ2VJdGVtIGZyb20gXCIuLi9zdG9yYWdlL3NldFN0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3QgZnJvbSBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gR2V0U3RvcmFnZUl0ZW1zKFBST0pFQ1RfU0VMRUNURURfS0VZKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHByb2plY3QgYXJyYXkgZnJvbSBzdG9yYWdlXG4gICAgICAgIGNvbnN0IGFycmF5ID0gR2V0U3RvcmFnZUl0ZW1zKFBST0pFQ1RfS0VZKTtcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IHRoZSBzZWxlY3RlZCBwcm9qZWN0IGZyb20gdGhlIGFycmF5XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gYXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RvcmFnZSB3aXRoIHRoZSBtb2RpZmllZCBhcnJheVxuICAgICAgICBzZXRTdG9yYWdlSXRlbShQUk9KRUNUX0tFWSwgbmV3QXJyYXkpO1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG4gICAgICAgIHNldFN0b3JhZ2VJdGVtKFBST0pFQ1RfU0VMRUNURURfS0VZLCBudWxsKTtcblxuICAgICAgICAvLyBSZW5kZXIgdGhlIHVwZGF0ZWQgcHJvamVjdCBsaXN0XG4gICAgICAgIFxuICAgICAgICByZW5kZXIobmV3QXJyYXksIG51bGwpO1xuICAgIH0pO1xufSIsImltcG9ydCB7IGRlbGV0ZVRhc2tCdG4gfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCB7IFBST0pFQ1RfS0VZLCBQUk9KRUNUX1NFTEVDVEVEX0tFWSB9IGZyb20gXCIuLi9jYWNoZS9zdG9yYWdlS2V5c1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vcmVuZGVyL3JlbmRlclwiO1xuaW1wb3J0IEdldFN0b3JhZ2VJdGVtcyBmcm9tIFwiLi4vc3RvcmFnZS9nZXRTdG9yYWdlXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2Uvc2V0U3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVDb21wbGV0ZWRUYXNrcygpe1xuICAgXG4gICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGNvbnN0IGFyciA9IEdldFN0b3JhZ2VJdGVtcyhQUk9KRUNUX0tFWSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gR2V0U3RvcmFnZUl0ZW1zKFBST0pFQ1RfU0VMRUNURURfS0VZKTtcbiAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBzZWxlY3RlZCl7XG4gICAgICAgICAgICAgICBsZXQgdGFza2xpc3QgPSBlbGVtZW50LnRhc2tzO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tMaXN0ID0gdGFza2xpc3QuZmlsdGVyKHRhc2sgPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFzay5jb21wbGV0ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFza3MgPSB1cGRhdGVkVGFza0xpc3Q7XG4gICAgICAgICAgICAgICAgc2V0U3RvcmFnZUl0ZW0oUFJPSkVDVF9LRVksYXJyKTtcbiAgICAgICAgICAgICAgICByZW5kZXIoYXJyLHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KVxuXG59IiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCB7IFBST0pFQ1RfS0VZLCBQUk9KRUNUX1NFTEVDVEVEX0tFWSB9IGZyb20gXCIuLi9jYWNoZS9zdG9yYWdlS2V5c1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi4vcmVuZGVyL3JlbmRlclwiO1xuaW1wb3J0IEdldFN0b3JhZ2VJdGVtcyBmcm9tIFwiLi4vc3RvcmFnZS9nZXRTdG9yYWdlXCI7XG5pbXBvcnQgc2V0U3RvcmFnZUl0ZW0gZnJvbSBcIi4uL3N0b3JhZ2Uvc2V0U3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXJrVGFzaygpe1xuICAgIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKXtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IEdldFN0b3JhZ2VJdGVtcyhQUk9KRUNUX0tFWSk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IEdldFN0b3JhZ2VJdGVtcyhQUk9KRUNUX1NFTEVDVEVEX0tFWSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXJyLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBzZWxlY3RlZCk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkVGFzayA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZCk7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZFRhc2suY29tcGxldGUgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIGNsaWNrZWRUYXNrLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2V0U3RvcmFnZUl0ZW0oUFJPSkVDVF9LRVksYXJyKTtcbiAgICAgICAgICAgICAgICByZW5kZXIoYXJyLHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNsaWNrZWRUYXNrLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRTdG9yYWdlSXRlbShQUk9KRUNUX0tFWSxhcnIpO1xuICAgICAgICAgICAgICAgIHJlbmRlcihhcnIsc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBwcm9qZWN0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2NhY2hlL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgeyBQUk9KRUNUX0tFWSwgUFJPSkVDVF9TRUxFQ1RFRF9LRVkgfSBmcm9tIFwiLi4vY2FjaGUvc3RvcmFnZUtleXNcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4uL3JlbmRlci9yZW5kZXJcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0TGlzdCBmcm9tIFwiLi4vcmVuZGVyL3JlbmRlclByb2plY3RMaXN0XCI7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gXCIuLi9zdG9yYWdlL2dldFN0b3JhZ2VcIjtcbmltcG9ydCBzZXRTdG9yYWdlSXRlbSBmcm9tIFwiLi4vc3RvcmFnZS9zZXRTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdFByb2plY3QoYXJyLHNlbGVjdGVkKXtcbiAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJyl7XG4gICAgICAgIHNlbGVjdGVkID0gZS50YXJnZXQuZGF0YXNldC5saXN0aWQ7XG4gICAgICAgIGFyciA9IEdldFN0b3JhZ2VJdGVtcyhQUk9KRUNUX0tFWSk7XG4gICAgICAgIHJlbmRlclByb2plY3RMaXN0KGFycixzZWxlY3RlZCk7XG4gICAgICAgIHNldFN0b3JhZ2VJdGVtKFBST0pFQ1RfU0VMRUNURURfS0VZLHNlbGVjdGVkKTtcbiAgICAgICAgcmVuZGVyKGFycixzZWxlY3RlZCk7XG4gICAgfVxuICAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpe1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgaWQ6RGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICB0YXNrczpbXG4gICAgXSxcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lKXtcbiAgICByZXR1cm57XG4gICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgaWQ6RGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICBjb21wbGV0ZTpmYWxzZVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckxpc3QoZWxlbWVudCl7XG4gICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKXtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4vcmVuZGVyUHJvamVjdExpc3RcIjtcbmltcG9ydCByZW5kZXJUYXNrQ29udGFpbmVyIGZyb20gXCIuL3JlbmRlclRhc2tDb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKGFycixzZWxlY3RlZCl7XG4gICAgcmVuZGVyUHJvamVjdExpc3QoYXJyLHNlbGVjdGVkKTtcbiAgICByZW5kZXJUYXNrQ29udGFpbmVyKGFycixzZWxlY3RlZCk7XG59IiwiaW1wb3J0IHsgcHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNsZWFyTGlzdCBmcm9tIFwiLi9jbGVhckxpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QoYXJyYXksc2VsZWN0ZWQpe1xuICAgIGNsZWFyTGlzdChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBhcnJheS5mb3JFYWNoKGFyciA9PntcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGxpLmlubmVyVGV4dD1hcnIubmFtZTtcbiAgICAgICAgbGkuZGF0YXNldC5saXN0aWQgPSBhcnIuaWQ7XG4gICAgICAgIGlmKGFyci5pZCA9PT0gc2VsZWN0ZWQpe1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIFxuICAgIH0pXG5cbn0iLCJpbXBvcnQgeyB0YXNrQ29udGFpbmVyLCB0YXNrTGlzdCwgdGFza1RpdGxlIH0gZnJvbSBcIi4uL2NhY2hlL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgcmVuZGVyVGFza0xpc3QgZnJvbSBcIi4vcmVuZGVyVGFza0xpc3RcIjtcbmltcG9ydCByZW5kZXJUYXNrc1JlbWFpbmluZyBmcm9tIFwiLi9yZW5kZXJUYXNrc1JlbWFpbmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrQ29udGFpbmVyKGFycixzZWxlY3RlZCl7XG4gICBpZiAoc2VsZWN0ZWQgPT09IG51bGwpe1xuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgIH1lbHNle1xuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBhcnIuZmluZChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgcmV0dXJuIChpdGVtLmlkID09PSBzZWxlY3RlZClcbiAgICAgfSk7XG4gICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSBjdXJyZW50Lm5hbWU7XG4gICAgIHJlbmRlclRhc2tzUmVtYWluaW5nKGN1cnJlbnQpO1xuICAgICByZW5kZXJUYXNrTGlzdChjdXJyZW50KTtcbiAgIH1cbiAgICBcbiAgIFxuICBcbiAgICBcbiAgICBcbn0iLCJpbXBvcnQgeyB0YXNrTGlzdCwgdGVtcGxhdGUgfSBmcm9tIFwiLi4vY2FjaGUvZG9tRWxlbWVudHNcIjtcbmltcG9ydCBjbGVhckxpc3QgZnJvbSBcIi4vY2xlYXJMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRhc2tMaXN0KG9iail7XG4gICAgY2xlYXJMaXN0KHRhc2tMaXN0KTtcbiAgICBjb25zdCB0YXNrcyA9IG9iai50YXNrcztcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LHRydWUpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmlkPXRhc2suaWQ7XG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgJHt0YXNrLmlkfWApO1xuICAgICAgICBsYWJlbC5odG1sRm9yID0gdGFzay5pZDtcbiAgICAgICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG4vLyA8ZGl2IGNsYXNzPVwidGFza1wiPlxuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cInRhc2stMlwiPlxuLy8gPGxhYmVsIGZvcj1cInRhc2stMlwiPlxuLy8gICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNoZWNrYm94XCI+PC9zcGFuPlxuLy8gICAgIHN0dWR5IFJlYWN0XG4vLyA8L2xhYmVsPlxuLy8gPC9kaXY+IiwiaW1wb3J0IHsgdGFza1JlbWFpbmluZyB9IGZyb20gXCIuLi9jYWNoZS9kb21FbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrc1JlbWFpbmluZyhvYmope1xuICAgIGNvbnN0IHRhc2tzID0gb2JqLnRhc2tzO1xuICAgIGNvbnN0IHRhc2tzSW5jb21wbGV0ZSA9IHRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgcmV0dXJuIHRhc2suY29tcGxldGUgPT09IGZhbHNlO1xuICAgIH0pXG4gICAgY29uc3QgdGFza0NvdW50ID0gdGFza3NJbmNvbXBsZXRlLmxlbmd0aDtcbiAgICBjb25zdCBncmFtbWFyID0gdGFza0NvdW50ID09PSAxID8gXCJ0YXNrXCIgOiBcInRhc2tzXCI7XG4gICAgXG4gICAgdGFza1JlbWFpbmluZy5pbm5lclRleHQgPSBgJHt0YXNrQ291bnR9ICR7Z3JhbW1hcn0gcmVtYWluaW5nYFxufSIsIi8vZ2V0IGl0ZW1zIGZyb20gYSBzdG9yYWdlIGFuZCBwYXJzZSBpdFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRTdG9yYWdlSXRlbXMoa2V5KXtcbiAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG59IiwiLy9zYXZlIG9iamVjdHMgaW4gdGhlIHN0b3JhZ2UgYXMgc3RyaW5nc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U3RvcmFnZUl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc3RvcmUgaXRlbSBpbiBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQUk9KRUNUX0tFWSwgUFJPSkVDVF9TRUxFQ1RFRF9LRVkgfSBmcm9tICcuL21vZHVsZXMvY2FjaGUvc3RvcmFnZUtleXMnO1xuaW1wb3J0IGF0dGFjaEV2ZW50TGlzdG5lcnMgZnJvbSAnLi9tb2R1bGVzL2V2ZW50TGlzdGVuZXJzL2F0dGFjaEV2ZW50TGlzdG5lcnMnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL21vZHVsZXMvcmVuZGVyL3JlbmRlcic7XG5pbXBvcnQgR2V0U3RvcmFnZUl0ZW1zIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlL2dldFN0b3JhZ2UnO1xuXG5cblxuXG5cblxubGV0IHByb2plY3RMaXN0ID0gR2V0U3RvcmFnZUl0ZW1zKFBST0pFQ1RfS0VZKSB8fCBbXTtcbmxldCBzZWxlY3RlZFByb2plY3QgPSBHZXRTdG9yYWdlSXRlbXMoUFJPSkVDVF9TRUxFQ1RFRF9LRVkpO1xuXG5cblxuYXR0YWNoRXZlbnRMaXN0bmVycyhwcm9qZWN0TGlzdCxzZWxlY3RlZFByb2plY3QpO1xucmVuZGVyKHByb2plY3RMaXN0LHNlbGVjdGVkUHJvamVjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9