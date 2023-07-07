"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/Caprasimo/Caprasimo-Regular.ttf */ "./src/Caprasimo/Caprasimo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

/* General space styling */
@font-face {
    font-family: "Caprasimo" ;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
    --purple: #B799FF;
    --lighterPurple: #ACBCFF;
    --blue: #AEE2FF;
    --lighterBlue: #E6FFFD;
	--transparentPurple:#b899ffb5;
	--transparentDarkerBlue:  #acbdffba;
	--transparentBlue:#aee3ffbe ;
	--transparentLighterBlue: #e6fffdc7;
    font-family: "Caprasimo";
}

body {
	height: 100vh;
	background-color: var(--blue);
}

#main {
	height: 100%;
	display: grid;
	grid-template-rows: 1.5fr 7fr 1fr;
}

/* Header styling */
#header {
	background-color: var(--purple);
	display: grid;
	grid-auto-flow: column;
	place-items: center;
	gap: 20px;
}

#logo {
	display: grid;
	grid-auto-flow: column;
	place-items: center;
	gap: 20px;
}

#logo-name {
	color: var(--lighterBlue);
	font-size: 32px;
}

/* Footer styling */
#footer {
	background-color: var(--purple);
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	color: var(--lighterBlue);
}

/* Change svg color */
.project-icon,
#add-proj-icon,
#add-proj-cancel-icon,
.del-proj-icon,
.add-task-icon,
#logo-pic,
#github-icon,
.edit-icon,
.del-task-icon,
.edit-task-icon {
    filter: invert(100%) sepia(99%) saturate(295%) hue-rotate(104deg) brightness(107%) contrast(105%);
}

/* Projects space styling */
#content {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 5fr;
    font-size: 18px;
}

#projects-container {
    background-color: var(--lighterPurple);
    display: grid;
    color: var(--lighterBlue);
    padding:10px;
    gap: 10px;
    align-content: start;
}

#projects-list {
    display: grid;
    gap: 5px;
    align-content: start;
}

.styling-proj-container {
    display: grid;
    gap: 5px;
    padding: 10px;
    grid-auto-flow: column; 
    justify-content: space-between;
    border-radius: 3px;
}

.project {
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    justify-content: start;
    gap: 5px;
}

.proj-btn-container {
    display: grid;
    justify-content: end;
    grid-auto-flow: column;
    gap: 5px;
}

.active-container,
.add-project-btn:hover,
.project-container:hover, 
.add-task-btn:hover {
    background-color: var(--purple);
    font-weight: bold;
    border-radius: 3px;
}

.add-project-btn {
    display: grid;
    padding: 10px;
    grid-auto-flow: column; 
    justify-content: center;
    gap:10px;
}

#add-proj-input-container {
    background-color: var(--purple);
    padding: 10px;
    display: grid;
    gap: 10px;
}

#input-btn-container {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    justify-self: end;
}

#add-proj-submit {
    background-color: var(--lighterBlue);
    color: var(--purple);
    padding: 3px;
    border-radius: 3px;
}

input {
    border: none;
    border-radius: 3px;
    height: 20px;
    background-color: var(--lighterBlue);
    padding-left: 5px;
}
 textarea {
    background-color: var(--lighterBlue);
    border: none;
    border-radius: 3px;
    padding-left: 5px;
}

/* Active space styling */
#active-space {
    padding: 20px;
    display: grid;
    align-content: start;
    color: var(--purple);
}

#active-project-name {
    font-size: 36px;
    color: var(--lighterBlue);
    background-color: var(--purple);
    padding: 10px 20px 10px 30px;
    border-radius: 3px;
}

.add-task-btn {
    justify-self: center;
}

.active-project {
    display: grid;
    gap:5px;
}

#add-task-input-container {
    place-self: center;
    display: grid;
    place-content: center;
    gap: 5px;
    background-color: var(--purple);
    padding: 10px;
    padding-bottom: 25px;
    border-radius: 3px;
    width:450px;
    height: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1000;
}

#add-proj-cancel {
    justify-self: end;
}

#add-task-submit {
    background-color: var(--lighterBlue);
    color: var(--purple);
    padding: 10px;
    border-radius: 3px;
    justify-self: end;
}

#active-tasks {
    display: grid;
    gap: 5px;
}

.task-container:hover {
    background-color: var(--purple);
}

.task-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 2fr 0.5fr;
    gap: 10px;
    align-items: center;
    background-color: var(--lighterPurple);
    color: var(--lighterBlue);
    padding: 10px;
    border-radius: 3px;
}

.task-btn-container {
    justify-self: end;
    display: grid;
    grid-auto-flow: column;
    gap: 7px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n/* General space styling */\n@font-face {\n    font-family: \"Caprasimo\" ;\n    src: url(/src/Caprasimo/Caprasimo-Regular.ttf);\n}\n\n:root {\n    --purple: #B799FF;\n    --lighterPurple: #ACBCFF;\n    --blue: #AEE2FF;\n    --lighterBlue: #E6FFFD;\n\t--transparentPurple:#b899ffb5;\n\t--transparentDarkerBlue:  #acbdffba;\n\t--transparentBlue:#aee3ffbe ;\n\t--transparentLighterBlue: #e6fffdc7;\n    font-family: \"Caprasimo\";\n}\n\nbody {\n\theight: 100vh;\n\tbackground-color: var(--blue);\n}\n\n#main {\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1.5fr 7fr 1fr;\n}\n\n/* Header styling */\n#header {\n\tbackground-color: var(--purple);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n}\n\n#logo {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n}\n\n#logo-name {\n\tcolor: var(--lighterBlue);\n\tfont-size: 32px;\n}\n\n/* Footer styling */\n#footer {\n\tbackground-color: var(--purple);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n\tcolor: var(--lighterBlue);\n}\n\n/* Change svg color */\n.project-icon,\n#add-proj-icon,\n#add-proj-cancel-icon,\n.del-proj-icon,\n.add-task-icon,\n#logo-pic,\n#github-icon,\n.edit-icon,\n.del-task-icon,\n.edit-task-icon {\n    filter: invert(100%) sepia(99%) saturate(295%) hue-rotate(104deg) brightness(107%) contrast(105%);\n}\n\n/* Projects space styling */\n#content {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 5fr;\n    font-size: 18px;\n}\n\n#projects-container {\n    background-color: var(--lighterPurple);\n    display: grid;\n    color: var(--lighterBlue);\n    padding:10px;\n    gap: 10px;\n    align-content: start;\n}\n\n#projects-list {\n    display: grid;\n    gap: 5px;\n    align-content: start;\n}\n\n.styling-proj-container {\n    display: grid;\n    gap: 5px;\n    padding: 10px;\n    grid-auto-flow: column; \n    justify-content: space-between;\n    border-radius: 3px;\n}\n\n.project {\n    display: grid;\n    grid-auto-flow: column;\n    place-items: center;\n    justify-content: start;\n    gap: 5px;\n}\n\n.proj-btn-container {\n    display: grid;\n    justify-content: end;\n    grid-auto-flow: column;\n    gap: 5px;\n}\n\n.active-container,\n.add-project-btn:hover,\n.project-container:hover, \n.add-task-btn:hover {\n    background-color: var(--purple);\n    font-weight: bold;\n    border-radius: 3px;\n}\n\n.add-project-btn {\n    display: grid;\n    padding: 10px;\n    grid-auto-flow: column; \n    justify-content: center;\n    gap:10px;\n}\n\n#add-proj-input-container {\n    background-color: var(--purple);\n    padding: 10px;\n    display: grid;\n    gap: 10px;\n}\n\n#input-btn-container {\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    justify-self: end;\n}\n\n#add-proj-submit {\n    background-color: var(--lighterBlue);\n    color: var(--purple);\n    padding: 3px;\n    border-radius: 3px;\n}\n\ninput {\n    border: none;\n    border-radius: 3px;\n    height: 20px;\n    background-color: var(--lighterBlue);\n    padding-left: 5px;\n}\n textarea {\n    background-color: var(--lighterBlue);\n    border: none;\n    border-radius: 3px;\n    padding-left: 5px;\n}\n\n/* Active space styling */\n#active-space {\n    padding: 20px;\n    display: grid;\n    align-content: start;\n    color: var(--purple);\n}\n\n#active-project-name {\n    font-size: 36px;\n    color: var(--lighterBlue);\n    background-color: var(--purple);\n    padding: 10px 20px 10px 30px;\n    border-radius: 3px;\n}\n\n.add-task-btn {\n    justify-self: center;\n}\n\n.active-project {\n    display: grid;\n    gap:5px;\n}\n\n#add-task-input-container {\n    place-self: center;\n    display: grid;\n    place-content: center;\n    gap: 5px;\n    background-color: var(--purple);\n    padding: 10px;\n    padding-bottom: 25px;\n    border-radius: 3px;\n    width:450px;\n    height: fit-content;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    z-index: 1000;\n}\n\n#add-proj-cancel {\n    justify-self: end;\n}\n\n#add-task-submit {\n    background-color: var(--lighterBlue);\n    color: var(--purple);\n    padding: 10px;\n    border-radius: 3px;\n    justify-self: end;\n}\n\n#active-tasks {\n    display: grid;\n    gap: 5px;\n}\n\n.task-container:hover {\n    background-color: var(--purple);\n}\n\n.task-container {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 1fr 2fr 0.5fr;\n    gap: 10px;\n    align-items: center;\n    background-color: var(--lighterPurple);\n    color: var(--lighterBlue);\n    padding: 10px;\n    border-radius: 3px;\n}\n\n.task-btn-container {\n    justify-self: end;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 7px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _websiteUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteUI */ "./src/websiteUI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_websiteUI__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/projectLogic.js":
/*!*****************************!*\
  !*** ./src/projectLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");


class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getTasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDate());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
    });
  }

  getTasksThisWeek() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDate());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate), 1));
    });
  }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");
/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskLogic */ "./src/taskLogic.js");




class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(new _toDoList__WEBPACK_IMPORTED_MODULE_0__["default"](), JSON.parse(localStorage.getItem('todoList')));

    todoList.setProjects(
      todoList.getProjects()
        .map((project) => Object.assign(new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"](), project)),
    );

    todoList.getProjects()
      .forEach((project) => project.setTasks(
        project.getTasks().map((task) => Object.assign(new _taskLogic__WEBPACK_IMPORTED_MODULE_2__["default"](), task)),
      ));

    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
    Storage.saveTodoList(todoList);
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
    Storage.saveTodoList(todoList);
  }

  static setTaskDescription(projectName, taskName, newDescription) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDescription(newDescription);
    Storage.saveTodoList(todoList);
  }

  static updateTodayProject() {
    const todoList = Storage.getTodoList();
    todoList.updateTodayProject();
    Storage.saveTodoList(todoList);
  }

  static updateWeekProject() {
    const todoList = Storage.getTodoList();
    todoList.updateWeekProject();
    Storage.saveTodoList(todoList);
  }
}


/***/ }),

/***/ "./src/taskLogic.js":
/*!**************************!*\
  !*** ./src/taskLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, dueDate, description) {
    this.name = name;
    this.dueDate = dueDate;
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}


/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskLogic */ "./src/taskLogic.js");



class ToDoList {
  constructor() {
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name)) { return; }
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find(
      (project) => project.getName() === projectName,
    );
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }

  updateTodayProject() {
    this.getProject('Today').tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === 'Today' || project.getName() === 'This week') {
        return;
      }
      const todayTasks = project.getTasksToday();
      todayTasks.forEach((task) => {
        const taskName = `${task.getName()} (From: ${project.getName()})`;
        this.getProject('Today').addTask(new _taskLogic__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, task.getDate(), task.getDescription()));
      });
    });
  }

  updateWeekProject() {
    this.getProject('This week').setTasks([]);

    this.projects.forEach((project) => {
      if (project.getName() === 'Today' || project.getName() === 'This week') {
        return;
      }
      const weekTasks = project.getTasksThisWeek();
      weekTasks.forEach((task) => {
        const taskName = `${task.getName()} (From: ${project.getName()})`;
        this.getProject('This week').addTask(new _taskLogic__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, task.getDate(), task.getDescription()));
      });
    });

    this.getProject('This week').setTasks(
      this.getProject('This week')
        .getTasks()
        .sort((taskA, taskB) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(
          (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(taskA)),
          (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(taskB)),
        )),
    );
  }
}


/***/ }),

/***/ "./src/websiteUI.js":
/*!**************************!*\
  !*** ./src/websiteUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showProjects),
/* harmony export */   toDoList: () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");
/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskLogic */ "./src/taskLogic.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/inbox-multiple.svg */ "./src/images/inbox-multiple.svg");
/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/calendar-today.svg */ "./src/images/calendar-today.svg");
/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/calendar-week.svg */ "./src/images/calendar-week.svg");
/* harmony import */ var _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/folder-outline.svg */ "./src/images/folder-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/check-outline.svg */ "./src/images/check-outline.svg");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");
/* harmony import */ var _images_pencil_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/pencil.svg */ "./src/images/pencil.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
















const toDoList = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList();

const projectsList = document.getElementById('projects-list');
const activeSpace = document.getElementById('active-space');
const activeProject = document.querySelector('.active-project');
const activeProjectName = document.getElementById('active-project-name');
const activeTasks = document.getElementById('active-tasks');

function showProjects() {
  createHeader();
  createFooter();
  createDefaultProjects();
  loadProjects();

  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.appendChild(addProjectUI());
}

function loadProjects() {
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProjects().forEach((project) => {
    if (
      project.name !== 'Inbox'
        && project.name !== 'Today'
        && project.name !== 'This week'
    ) {
      createProjectUI(project.name);
    }
  });
}

function loadTasks(projectName) {
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
    .getProject(projectName)
    .getTasks().forEach(
      (task) => createTaskUI(task.getName(), task.getDate(), task.getDescription()),
    );
}

function createHeader() {
  const headerContainer = document.getElementById('header');

  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo');

  const logoName = document.createElement('div');
  logoName.setAttribute('id', 'logo-name');
  logoName.textContent = 'ToDo-List';

  const logoPic = new Image(50, 50);
  logoPic.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_11__;
  logoPic.setAttribute('id', 'logo-pic');

  logo.appendChild(logoPic);
  logo.appendChild(logoName);

  headerContainer.appendChild(logo);

  return headerContainer;
}

function createFooter() {
  const footerContainer = document.getElementById('footer');

  const copyright = document.createElement('div');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;
  copyright.setAttribute('id', 'copyright');

  const githubLink = document.createElement('a');
  githubLink.setAttribute('id', 'github-link');
  githubLink.href = 'https://github.com/ekat-velaz';

  const githubIcon = new Image(50, 50);
  githubIcon.setAttribute('id', 'github-icon');
  githubIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_12__;

  githubLink.appendChild(githubIcon);
  footerContainer.appendChild(copyright);
  footerContainer.appendChild(githubLink);

  return footerContainer;
}

function addProjectToDOM(projectName, container) {
  container.appendChild(projectName);
}

function createDefaultProjects() {
  const inbox = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('Inbox');
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(inbox);
  createProjectUI(inbox.getName());

  const today = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('Today');
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(today);
  createProjectUI(today.getName());

  const thisWeek = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('This week');
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(thisWeek);
  createProjectUI(thisWeek.getName());
}

function createNewProject(projectName) {
  const newProject = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"](`${projectName}`);
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(newProject);
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodayProject();
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateWeekProject();
  createProjectUI(newProject.getName());
}

function createProjectUI(projectName) {
  const newProjectContainer = document.createElement('div');
  newProjectContainer.classList.add('project-container');
  newProjectContainer.setAttribute('id', `${projectName}`);

  const stylingProjContainer = document.createElement('div');
  stylingProjContainer.classList.add('styling-proj-container');

  const newProject = document.createElement('button');
  newProject.classList.add('project');
  newProject.addEventListener('click', (e) => {
    const chosenProject = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(`${e.target.closest('.project-container').id}`);
    toDoList.updateTodayProject();
    toDoList.updateWeekProject();
    clearActive();
    createActiveProjectUI(chosenProject.getName());
    renderTasks(chosenProject.getTasks());
    setActiveProject(newProject, stylingProjContainer);
  });

  const projectIcon = new Image(30, 30);
  projectIcon.classList.add('project-icon');

  const projectText = document.createElement('div');
  projectText.classList.add('project-text');
  projectText.textContent = `${projectName}`;

  const projBtnContainer = document.createElement('div');
  projBtnContainer.classList.add('proj-btn-container');

  newProject.appendChild(projectIcon);
  newProject.appendChild(projectText);
  stylingProjContainer.appendChild(newProject);
  stylingProjContainer.appendChild(projBtnContainer);

  newProjectContainer.appendChild(stylingProjContainer);

  if (projectName === 'Inbox') {
    projectIcon.src = _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_4__;
    setActiveProject(newProject, stylingProjContainer);
    createActiveProjectUI(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject('Inbox').getName());
    loadTasks('Inbox');
  } else if (projectName === 'Today') {
    projectIcon.src = _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_5__;
  } else if (projectName === 'This week') {
    projectIcon.src = _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_6__;
  } else {
    projectIcon.src = _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_7__;
    projBtnContainer.appendChild(createDeleteBtn());
    projBtnContainer.appendChild(createEditBtn());
  }

  addProjectToDOM(newProjectContainer, projectsList);
}

const addProjectUI = () => {
  const addProjectContainer = document.createElement('div');
  addProjectContainer.setAttribute('id', 'add-proj-container');
  addProjectContainer.appendChild(createAddProjBtn(addProjectContainer));

  return addProjectContainer;
};

function createAddProjBtn(container) {
  const addProjectBtn = document.createElement('btn');
  addProjectBtn.classList.add('add-project-btn');

  const addProjIcon = new Image(20, 20);
  addProjIcon.setAttribute('id', 'add-proj-icon');
  addProjIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_9__;

  const addProjText = document.createElement('div');
  addProjText.setAttribute('id', 'add-proj-text');
  addProjText.textContent = 'Add project';

  addProjectBtn.appendChild(addProjIcon);
  addProjectBtn.appendChild(addProjText);

  addProjectBtn.addEventListener('click', () => {
    container.textContent = '';
    container.appendChild(createInput(container));
  });

  return addProjectBtn;
}

function createInput(container) {
  const addProjectForm = document.createElement('form');
  addProjectForm.setAttribute('id', 'add-proj-input-container');

  const addProjectInput = document.createElement('input');
  addProjectInput.setAttribute('id', 'add-proj-input');

  const inputBtnContainer = document.createElement('div');
  inputBtnContainer.setAttribute('id', 'input-btn-container');

  const addProjInputSubmit = document.createElement('btn');
  addProjInputSubmit.setAttribute('type', 'submit');
  addProjInputSubmit.setAttribute('id', 'add-proj-submit');
  addProjInputSubmit.textContent = 'Add';
  addProjInputSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkInput(addProjectInput.value, toDoList) === false) {
      createNewProject(addProjectInput.value);
      container.textContent = '';
      container.appendChild(createAddProjBtn(container));
    }
  });

  const addProjCancel = document.createElement('button');
  addProjCancel.setAttribute('id', 'add-proj-cancel');
  addProjCancel.addEventListener('click', () => {
    container.textContent = '';
    container.appendChild(createAddProjBtn(container));
  });

  const addProjCancelIcon = new Image(23, 23);
  addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
  addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_10__;
  addProjCancel.appendChild(addProjCancelIcon);

  inputBtnContainer.appendChild(addProjInputSubmit);
  inputBtnContainer.appendChild(addProjCancel);

  addProjectForm.appendChild(addProjectInput);
  addProjectForm.appendChild(inputBtnContainer);

  return addProjectForm;
}

function createDeleteBtn() {
  const deleteProjectIcon = new Image(20, 25);
  deleteProjectIcon.classList.add('del-proj-icon');
  deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_8__;

  const projectDeleteBtn = document.createElement('button');
  projectDeleteBtn.classList.add('project-del-btn');
  projectDeleteBtn.appendChild(deleteProjectIcon);

  deleteProjectIcon.addEventListener('click', (e) => {
    const chosenContainer = e.target.closest('.project-container');
    chosenContainer.remove();
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(chosenContainer.id);
    clearActive();
  });

  return projectDeleteBtn;
}

function createEditBtn() {
  const projectEditBtn = document.createElement('button');
  projectEditBtn.classList.add('edit-proj-btn');

  const editProjIcon = new Image(20, 25);
  editProjIcon.classList.add('edit-icon');
  editProjIcon.src = _images_pencil_svg__WEBPACK_IMPORTED_MODULE_13__;

  projectEditBtn.appendChild(editProjIcon);

  editProjIcon.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
    e.target.closest('.project-container').appendChild(createEditInput(e.target.closest('.project-container')));
  });

  return projectEditBtn;
}

function createEditInput(container) {
  const addProjectForm = document.createElement('form');
  addProjectForm.setAttribute('id', 'add-proj-input-container');

  const addProjectInput = document.createElement('input');
  addProjectInput.setAttribute('id', 'add-proj-input');

  const inputBtnContainer = document.createElement('div');
  inputBtnContainer.setAttribute('id', 'input-btn-container');

  const addProjInputSubmit = document.createElement('btn');
  addProjInputSubmit.setAttribute('type', 'submit');
  addProjInputSubmit.setAttribute('id', 'add-proj-submit');
  addProjInputSubmit.textContent = 'Change name';
  addProjInputSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenProject = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(container.id);
    chosenProject.setName(addProjectInput.value);
    createProjectUI(chosenProject.getName());
    clearActive();
    createActiveProjectUI(chosenProject.getName());
    renderTasks(chosenProject.getTasks());
    container.remove();
    console.log(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList());
  });

  const addProjCancel = document.createElement('button');
  addProjCancel.setAttribute('id', 'add-proj-cancel');

  const addProjCancelIcon = new Image(20, 20);
  addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
  addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_10__;
  addProjCancelIcon.addEventListener('click', (e) => {
    e.target.closest('.project-container').querySelector('.edit-icon').style.visibility = 'visible';
    addProjectForm.remove();
  });

  addProjCancel.appendChild(addProjCancelIcon);

  inputBtnContainer.appendChild(addProjInputSubmit);
  inputBtnContainer.appendChild(addProjCancel);

  addProjectForm.appendChild(addProjectInput);
  addProjectForm.appendChild(inputBtnContainer);

  return addProjectForm;
}

function createAddTaskBtn() {
  const addTaskIcon = new Image(50, 50);
  addTaskIcon.classList.add('add-task-icon');
  addTaskIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_9__;

  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('add-task-btn');
  addTaskBtn.appendChild(addTaskIcon);

  addTaskIcon.addEventListener('click', (e) => {
    const projectContainer = e.target.parentNode.parentNode;
    if (document.querySelector('#add-task-input-container')) {
      document.querySelector('#add-task-input-container').remove();
    }
    projectContainer.appendChild(createTaskForm(projectContainer));
  });

  return addTaskBtn;
}

function createTaskForm(container) {
  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'add-task-input-container');

  const taskTitleInput = document.createElement('input');
  taskTitleInput.setAttribute('id', 'task-title-input');
  taskTitleInput.required = true;
  taskTitleInput.placeholder = 'Task title';

  const taskDateInput = document.createElement('input');
  taskDateInput.setAttribute('type', 'date');
  taskDateInput.setAttribute('id', 'task-date-input');

  const taskDescriptionInput = document.createElement('textarea');
  taskDescriptionInput.setAttribute('rows', '4');
  taskDescriptionInput.setAttribute('cols', '50');
  taskDescriptionInput.setAttribute('id', 'task-description-input');
  taskDescriptionInput.placeholder = 'Any notes?';

  const addTaskSubmit = document.createElement('button');
  addTaskSubmit.setAttribute('type', 'submit');
  addTaskSubmit.setAttribute('id', 'add-task-submit');
  addTaskSubmit.textContent = 'Add task!';
  addTaskSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const project = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(container.id);
    console.log(project);
    if (checkInput(taskTitleInput.value, project) === false) {
      const newTask = new _taskLogic__WEBPACK_IMPORTED_MODULE_2__["default"](
        taskTitleInput.value,
        taskDateInput.value,
        taskDescriptionInput.value,
      );
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(project.getName(), newTask);
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodayProject();
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateWeekProject();
      createTaskUI(newTask.getName(), newTask.getDate(), newTask.getDescription());
      addTaskForm.remove();
    }
  });

  const addTaskCancel = document.createElement('button');
  addTaskCancel.setAttribute('id', 'add-proj-cancel');
  addTaskCancel.addEventListener('click', () => {
    addTaskCancel.parentNode.remove();
  });

  const addTaskCancelIcon = new Image(20, 20);
  addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
  addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_10__;
  addTaskCancel.appendChild(addTaskCancelIcon);

  addTaskForm.appendChild(addTaskCancel);
  addTaskForm.appendChild(taskTitleInput);
  addTaskForm.appendChild(taskDateInput);
  addTaskForm.appendChild(taskDescriptionInput);
  addTaskForm.appendChild(addTaskSubmit);

  return addTaskForm;
}

function createTaskUI(taskTitle, taskDate, taskDescription) {
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('task-container');
  newTaskContainer.setAttribute('id', `${taskTitle}`);

  const newTaskTitle = document.createElement('div');
  newTaskTitle.classList.add('task-title');
  newTaskTitle.textContent = `${taskTitle}`;

  const newTaskDate = document.createElement('div');
  newTaskDate.classList.add('task-date');
  newTaskDate.textContent = `${taskDate}`;

  const newTaskDescription = document.createElement('div');
  newTaskDescription.classList.add('task-description');
  if (taskDescription === undefined) {
    newTaskDescription.textContent = '';
  } else {
    newTaskDescription.textContent = `${taskDescription}`;
  }

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('task-btn-container');

  newTaskContainer.appendChild(newTaskTitle);
  newTaskContainer.appendChild(newTaskDate);
  newTaskContainer.appendChild(newTaskDescription);
  newTaskContainer.appendChild(btnContainer);

  if (activeProject.id !== 'Today' && activeProject.id !== 'This week') {
    btnContainer.appendChild(createTaskDeleteBtn());
    btnContainer.appendChild(createTaskEditBtn());
  }
  activeTasks.appendChild(newTaskContainer);
}

function renderTasks(project) {
  if (project === undefined) {
    return;
  }
  project.forEach((task) => {
    createTaskUI(task.getName(), task.getDate(), task.getDescription(), activeTasks);
  });
}

function setActiveProject(project, container) {
  const projects = document.querySelectorAll('.project');
  projects.forEach((project) => {
    if (project !== this) {
      project.classList.remove('active');
    }
  });
  project.classList.add('active');

  const containers = document.querySelectorAll('.styling-proj-container');
  containers.forEach((container) => {
    if (container !== this) {
      container.classList.remove('active-container');
    }
  });
  container.classList.add('active-container');
}

function clearActive() {
  if (activeProject.querySelector('.add-task-btn')) {
    activeProject.querySelector('.add-task-btn').remove();
  }
  if (activeProject.querySelector('#add-task-input-container')) {
    activeProject.querySelector('#add-task-input-container').remove();
  }
  activeTasks.textContent = '';
  activeProjectName.textContent = '';
}

function createTaskDeleteBtn() {
  const deleteTaskIcon = new Image(20, 25);
  deleteTaskIcon.classList.add('del-task-icon');
  deleteTaskIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_8__;

  const taskDeleteBtn = document.createElement('button');
  taskDeleteBtn.classList.add('task-del-btn');
  taskDeleteBtn.appendChild(deleteTaskIcon);

  deleteTaskIcon.addEventListener('click', (e) => {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(e.target.closest('div.active-project').id, e.target.closest('div.active-project').querySelector('.task-title').textContent);
    e.target.closest('.task-container').remove();
  });

  return taskDeleteBtn;
}

function createTaskEditBtn() {
  const editTaskIcon = new Image(20, 25);
  editTaskIcon.classList.add('edit-task-icon');
  editTaskIcon.src = _images_pencil_svg__WEBPACK_IMPORTED_MODULE_13__;

  const taskEditBtn = document.createElement('button');
  taskEditBtn.classList.add('edit-task-btn');
  taskEditBtn.appendChild(editTaskIcon);

  editTaskIcon.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
    e.target.closest('.task-container').appendChild(createTaskEditForm(e.target.closest('.active-project'), e.target.closest('.task-container')));
  });

  return taskEditBtn;
}

function createTaskEditForm(container, taskContainer) {
  const oldTitle = taskContainer.querySelector('.task-title').textContent;
  const oldDate = taskContainer.querySelector('.task-date').textContent;
  const oldDescr = taskContainer.querySelector('.task-description').textContent;

  const chosenProject = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(container.id);

  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'add-task-input-container');

  const taskTitleInput = document.createElement('input');
  taskTitleInput.setAttribute('id', 'task-title-input');
  taskTitleInput.value = oldTitle;
  taskTitleInput.placeholder = 'Task title';

  const taskDateInput = document.createElement('input');
  taskDateInput.setAttribute('type', 'date');
  taskDateInput.setAttribute('id', 'task-date-input');
  taskDateInput.value = oldDate;

  const taskDescriptionInput = document.createElement('textarea');
  taskDescriptionInput.setAttribute('rows', '4');
  taskDescriptionInput.setAttribute('cols', '50');
  taskDescriptionInput.setAttribute('id', 'task-description-input');
  taskDescriptionInput.value = oldDescr;
  taskDescriptionInput.placeholder = 'Any notes?';

  const addTaskSubmit = document.createElement('button');
  addTaskSubmit.setAttribute('type', 'submit');
  addTaskSubmit.setAttribute('id', 'add-task-submit');
  addTaskSubmit.textContent = 'Edit task!';
  addTaskSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].renameTask(chosenProject.getName(), oldTitle, taskTitleInput.value);
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setTaskDate(chosenProject.getName(), taskTitleInput.value, taskDateInput.value);
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setTaskDescription(
      chosenProject.getName(),
      taskTitleInput.value,
      taskDescriptionInput.value,
    );
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodayProject();
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateWeekProject();
    const chosenTask = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
      .getProject(chosenProject.getName()).getTask(taskTitleInput.value);
    createTaskUI(
      chosenTask.getName(),
      chosenTask.getDate(),
      chosenTask.getDescription(),
      activeTasks,
    );
    event.target.closest('.task-container').remove();
  });

  const addTaskCancel = document.createElement('button');
  addTaskCancel.setAttribute('id', 'add-proj-cancel');
  addTaskCancel.addEventListener('click', () => {
    addTaskCancel.closest('.task-container').querySelector('.edit-task-icon').style.visibility = 'visible';
    addTaskCancel.parentNode.remove();
  });

  const addTaskCancelIcon = new Image(20, 20);
  addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
  addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_10__;
  addTaskCancel.appendChild(addTaskCancelIcon);

  addTaskForm.appendChild(addTaskCancel);
  addTaskForm.appendChild(taskTitleInput);
  addTaskForm.appendChild(taskDateInput);
  addTaskForm.appendChild(taskDescriptionInput);
  addTaskForm.appendChild(addTaskSubmit);

  return addTaskForm;
}

function checkInput(objectName, parentName) {
  if (parentName.contains(objectName)) {
    alert('The name should not be the same as the previous ones');
    return true;
  }
  return false;
}

function createActiveProjectUI(projectName) {
  activeProject.setAttribute('id', `${projectName}`);
  activeProjectName.textContent = `${projectName}`;
  if (activeProject.id !== 'Today' && activeProject.id !== 'This week') {
    activeProject.appendChild(createAddTaskBtn());
  }

  addProjectToDOM(activeProject, activeSpace);
}


/***/ }),

/***/ "./src/Caprasimo/Caprasimo-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/Caprasimo/Caprasimo-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fb14e3bf85c52709856.ttf";

/***/ }),

/***/ "./src/images/calendar-today.svg":
/*!***************************************!*\
  !*** ./src/images/calendar-today.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "233385e32206cd372d69.svg";

/***/ }),

/***/ "./src/images/calendar-week.svg":
/*!**************************************!*\
  !*** ./src/images/calendar-week.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "518ff47ec29e1552eabd.svg";

/***/ }),

/***/ "./src/images/check-outline.svg":
/*!**************************************!*\
  !*** ./src/images/check-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a5ec5a1d098fe54bc43.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/images/folder-outline.svg":
/*!***************************************!*\
  !*** ./src/images/folder-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "637824bc8f2833004ccc.svg";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "550985caaa8859d4b95f.svg";

/***/ }),

/***/ "./src/images/inbox-multiple.svg":
/*!***************************************!*\
  !*** ./src/images/inbox-multiple.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a08d7d967ef5b3b143a.svg";

/***/ }),

/***/ "./src/images/pencil.svg":
/*!*******************************!*\
  !*** ./src/images/pencil.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YjRjMjdlZDdjMDc2Y2NhNTE5Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsZ0tBQXVEO0FBQ25HLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixPQUFPLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksZUFBZSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFFBQVEsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxX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QUFDQTtBQUNBLHFCQUFxQixnREFBUTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0RBQU87O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWCxJQUFJLGdEQUFPO0FBQ1gsSUFBSSxnREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYLElBQUksZ0RBQU87QUFDWCx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBVTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRCxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxbUJlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RMb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3dlYnNpdGVVSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9DYXByYXNpbW8vQ2FwcmFzaW1vLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdIHtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMDtcblx0Zm9udDogaW5oZXJpdDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdXRsaW5lOiBpbmhlcml0O1xufVxuXG4vKiBHZW5lcmFsIHNwYWNlIHN0eWxpbmcgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhcHJhc2ltb1wiIDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tcHVycGxlOiAjQjc5OUZGO1xuICAgIC0tbGlnaHRlclB1cnBsZTogI0FDQkNGRjtcbiAgICAtLWJsdWU6ICNBRUUyRkY7XG4gICAgLS1saWdodGVyQmx1ZTogI0U2RkZGRDtcblx0LS10cmFuc3BhcmVudFB1cnBsZTojYjg5OWZmYjU7XG5cdC0tdHJhbnNwYXJlbnREYXJrZXJCbHVlOiAgI2FjYmRmZmJhO1xuXHQtLXRyYW5zcGFyZW50Qmx1ZTojYWVlM2ZmYmUgO1xuXHQtLXRyYW5zcGFyZW50TGlnaHRlckJsdWU6ICNlNmZmZmRjNztcbiAgICBmb250LWZhbWlseTogXCJDYXByYXNpbW9cIjtcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4jbWFpbiB7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciA3ZnIgMWZyO1xufVxuXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xuI2hlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMjBweDtcbn1cblxuI2xvZ28ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIwcHg7XG59XG5cbiNsb2dvLW5hbWUge1xuXHRjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuXHRmb250LXNpemU6IDMycHg7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG4jZm9vdGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMjBweDtcblx0Y29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcbn1cblxuLyogQ2hhbmdlIHN2ZyBjb2xvciAqL1xuLnByb2plY3QtaWNvbixcbiNhZGQtcHJvai1pY29uLFxuI2FkZC1wcm9qLWNhbmNlbC1pY29uLFxuLmRlbC1wcm9qLWljb24sXG4uYWRkLXRhc2staWNvbixcbiNsb2dvLXBpYyxcbiNnaXRodWItaWNvbixcbi5lZGl0LWljb24sXG4uZGVsLXRhc2staWNvbixcbi5lZGl0LXRhc2staWNvbiB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOTklKSBzYXR1cmF0ZSgyOTUlKSBodWUtcm90YXRlKDEwNGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKTtcbn1cblxuLyogUHJvamVjdHMgc3BhY2Ugc3R5bGluZyAqL1xuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyUHVycGxlKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cblxuI3Byb2plY3RzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG59XG5cbi5zdHlsaW5nLXByb2otY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5wcm9qLWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuLmFjdGl2ZS1jb250YWluZXIsXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyLFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyLCBcbi5hZGQtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOjEwcHg7XG59XG5cbiNhZGQtcHJvai1pbnB1dC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuI2lucHV0LWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbiNhZGQtcHJvai1zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuIHRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLyogQWN0aXZlIHNwYWNlIHN0eWxpbmcgKi9cbiNhY3RpdmUtc3BhY2Uge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuI2FjdGl2ZS1wcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYWN0aXZlLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOjVweDtcbn1cblxuI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lciB7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6NDUwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4jYWRkLXByb2otY2FuY2VsIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuI2FkZC10YXNrLXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jYWN0aXZlLXRhc2tzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNXB4O1xufVxuXG4udGFzay1jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnIgMC41ZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlclB1cnBsZSk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRhc2stYnRuLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdhcDogN3B4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVOztBQUVWOzs7Q0FHQzs7QUFF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QjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsUUFBUTtJQUNSLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0ICovXFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5idXR0b24sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi8qIEdlbmVyYWwgc3BhY2Ugc3R5bGluZyAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNhcHJhc2ltb1xcXCIgO1xcbiAgICBzcmM6IHVybCgvc3JjL0NhcHJhc2ltby9DYXByYXNpbW8tUmVndWxhci50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHVycGxlOiAjQjc5OUZGO1xcbiAgICAtLWxpZ2h0ZXJQdXJwbGU6ICNBQ0JDRkY7XFxuICAgIC0tYmx1ZTogI0FFRTJGRjtcXG4gICAgLS1saWdodGVyQmx1ZTogI0U2RkZGRDtcXG5cXHQtLXRyYW5zcGFyZW50UHVycGxlOiNiODk5ZmZiNTtcXG5cXHQtLXRyYW5zcGFyZW50RGFya2VyQmx1ZTogICNhY2JkZmZiYTtcXG5cXHQtLXRyYW5zcGFyZW50Qmx1ZTojYWVlM2ZmYmUgO1xcblxcdC0tdHJhbnNwYXJlbnRMaWdodGVyQmx1ZTogI2U2ZmZmZGM3O1xcbiAgICBmb250LWZhbWlseTogXFxcIkNhcHJhc2ltb1xcXCI7XFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNtYWluIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDdmciAxZnI7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuI2hlYWRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbiNsb2dvIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbiNsb2dvLW5hbWUge1xcblxcdGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcbiNmb290ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxufVxcblxcbi8qIENoYW5nZSBzdmcgY29sb3IgKi9cXG4ucHJvamVjdC1pY29uLFxcbiNhZGQtcHJvai1pY29uLFxcbiNhZGQtcHJvai1jYW5jZWwtaWNvbixcXG4uZGVsLXByb2otaWNvbixcXG4uYWRkLXRhc2staWNvbixcXG4jbG9nby1waWMsXFxuI2dpdGh1Yi1pY29uLFxcbi5lZGl0LWljb24sXFxuLmRlbC10YXNrLWljb24sXFxuLmVkaXQtdGFzay1pY29uIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOTklKSBzYXR1cmF0ZSgyOTUlKSBodWUtcm90YXRlKDEwNGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLyogUHJvamVjdHMgc3BhY2Ugc3R5bGluZyAqL1xcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyUHVycGxlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLnN0eWxpbmctcHJvai1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvai1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uYWN0aXZlLWNvbnRhaW5lcixcXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciwgXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4jYWRkLXByb2otaW5wdXQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jaW5wdXQtYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiNhZGQtcHJvai1zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG4gdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogQWN0aXZlIHNwYWNlIHN0eWxpbmcgKi9cXG4jYWN0aXZlLXNwYWNlIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDo1cHg7XFxufVxcblxcbiNhZGQtdGFzay1pbnB1dC1jb250YWluZXIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOjQ1MHB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4jYWRkLXByb2otY2FuY2VsIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiNhZGQtdGFzay1zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jYWN0aXZlLXRhc2tzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnIgMC41ZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlclB1cnBsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1YkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDEwIGRheXMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3ViRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IEZyaSBBdWcgMjIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJEYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tICcuL3dlYnNpdGVVSSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuc2hvd1Byb2plY3RzKCk7XG4iLCJpbXBvcnQge1xuICB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMsXG59IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gIH1cblxuICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tOYW1lKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLm5hbWUgIT09IHRhc2tOYW1lKTtcbiAgfVxuXG4gIGdldFRhc2tzVG9kYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKTtcbiAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFza3NUaGlzV2VlaygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlKCkpO1xuICAgICAgcmV0dXJuIGlzVGhpc1dlZWsoc3ViRGF5cyh0b0RhdGUodGFza0RhdGUpLCAxKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvRG9MaXN0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdExvZ2ljJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFza0xvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBzYXZlVG9kb0xpc3QoZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24obmV3IFRvRG9MaXN0KCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpKTtcblxuICAgIHRvZG9MaXN0LnNldFByb2plY3RzKFxuICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKVxuICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKSxcbiAgICApO1xuXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdHMoKVxuICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpLFxuICAgICAgKSk7XG5cbiAgICByZXR1cm4gdG9kb0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrKHByb2plY3ROYW1lLCB0YXNrKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuYWRkVGFzayh0YXNrKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgcmVuYW1lVGFzayhwcm9qZWN0TmFtZSwgdGFza05hbWUsIG5ld1Rhc2tOYW1lKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0TmFtZShuZXdUYXNrTmFtZSk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIHNldFRhc2tEYXRlKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgbmV3RHVlRGF0ZSkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLnNldERhdGUobmV3RHVlRGF0ZSk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIHNldFRhc2tEZXNjcmlwdGlvbihwcm9qZWN0TmFtZSwgdGFza05hbWUsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2RheVByb2plY3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVdlZWtQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LnVwZGF0ZVdlZWtQcm9qZWN0KCk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCB0b0RhdGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2tMb2dpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgY29udGFpbnMocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0Lm5hbWUpKSB7IHJldHVybjsgfVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lLFxuICAgICk7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpO1xuICB9XG5cbiAgdXBkYXRlVG9kYXlQcm9qZWN0KCkge1xuICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS50YXNrcyA9IFtdO1xuXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09ICdUb2RheScgfHwgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUaGlzIHdlZWsnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzVG9kYXkoKTtcbiAgICAgIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoRnJvbTogJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUb2RheScpLmFkZFRhc2sobmV3IFRhc2sodGFza05hbWUsIHRhc2suZ2V0RGF0ZSgpLCB0YXNrLmdldERlc2NyaXB0aW9uKCkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlV2Vla1Byb2plY3QoKSB7XG4gICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIHdlZWsnKS5zZXRUYXNrcyhbXSk7XG5cbiAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RoaXMgd2VlaycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2Vla1Rhc2tzID0gcHJvamVjdC5nZXRUYXNrc1RoaXNXZWVrKCk7XG4gICAgICB3ZWVrVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoRnJvbTogJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIHdlZWsnKS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrLmdldERhdGUoKSwgdGFzay5nZXREZXNjcmlwdGlvbigpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyB3ZWVrJykuc2V0VGFza3MoXG4gICAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgd2VlaycpXG4gICAgICAgIC5nZXRUYXNrcygpXG4gICAgICAgIC5zb3J0KCh0YXNrQSwgdGFza0IpID0+IGNvbXBhcmVBc2MoXG4gICAgICAgICAgdG9EYXRlKG5ldyBEYXRlKHRhc2tBKSksXG4gICAgICAgICAgdG9EYXRlKG5ldyBEYXRlKHRhc2tCKSksXG4gICAgICAgICkpLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBUb0RvTGlzdCBmcm9tICcuL3RvRG9MaXN0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdExvZ2ljJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFza0xvZ2ljJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgaW5ib3hJY29uIGZyb20gJy4vaW1hZ2VzL2luYm94LW11bHRpcGxlLnN2Zyc7XG5pbXBvcnQgdG9kYXlJY29uIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgd2Vla0ljb24gZnJvbSAnLi9pbWFnZXMvY2FsZW5kYXItd2Vlay5zdmcnO1xuaW1wb3J0IGZvbGRlckljb24gZnJvbSAnLi9pbWFnZXMvZm9sZGVyLW91dGxpbmUuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgYWRkSWNvbiBmcm9tICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tICcuL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IHRvZG9Mb2dvIGZyb20gJy4vaW1hZ2VzL2NoZWNrLW91dGxpbmUuc3ZnJztcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL3BlbmNpbC5zdmcnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcbmNvbnN0IGFjdGl2ZVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZS1zcGFjZScpO1xuY29uc3QgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcHJvamVjdCcpO1xuY29uc3QgYWN0aXZlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlLXByb2plY3QtbmFtZScpO1xuY29uc3QgYWN0aXZlVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlLXRhc2tzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xuICBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKTtcbiAgbG9hZFByb2plY3RzKCk7XG5cbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RVSSgpKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKFxuICAgICAgcHJvamVjdC5uYW1lICE9PSAnSW5ib3gnXG4gICAgICAgICYmIHByb2plY3QubmFtZSAhPT0gJ1RvZGF5J1xuICAgICAgICAmJiBwcm9qZWN0Lm5hbWUgIT09ICdUaGlzIHdlZWsnXG4gICAgKSB7XG4gICAgICBjcmVhdGVQcm9qZWN0VUkocHJvamVjdC5uYW1lKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFza3MocHJvamVjdE5hbWUpIHtcbiAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgLmdldFRhc2tzKCkuZm9yRWFjaChcbiAgICAgICh0YXNrKSA9PiBjcmVhdGVUYXNrVUkodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCB0YXNrLmdldERlc2NyaXB0aW9uKCkpLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcblxuICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2dvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28tbmFtZScpO1xuICBsb2dvTmFtZS50ZXh0Q29udGVudCA9ICdUb0RvLUxpc3QnO1xuXG4gIGNvbnN0IGxvZ29QaWMgPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgbG9nb1BpYy5zcmMgPSB0b2RvTG9nbztcbiAgbG9nb1BpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28tcGljJyk7XG5cbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvUGljKTtcbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvTmFtZSk7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBla2F0LXZlbGF6YDtcbiAgY29weXJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29weXJpZ2h0Jyk7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1saW5rJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vZWthdC12ZWxheic7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IG5ldyBJbWFnZSg1MCwgNTApO1xuICBnaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWljb24nKTtcbiAgZ2l0aHViSWNvbi5zcmMgPSBnaXRodWJMb2dvO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRE9NKHByb2plY3ROYW1lLCBjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3RzKCkge1xuICBjb25zdCBpbmJveCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpO1xuICBTdG9yYWdlLmFkZFByb2plY3QoaW5ib3gpO1xuICBjcmVhdGVQcm9qZWN0VUkoaW5ib3guZ2V0TmFtZSgpKTtcblxuICBjb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScpO1xuICBTdG9yYWdlLmFkZFByb2plY3QodG9kYXkpO1xuICBjcmVhdGVQcm9qZWN0VUkodG9kYXkuZ2V0TmFtZSgpKTtcblxuICBjb25zdCB0aGlzV2VlayA9IG5ldyBQcm9qZWN0KCdUaGlzIHdlZWsnKTtcbiAgU3RvcmFnZS5hZGRQcm9qZWN0KHRoaXNXZWVrKTtcbiAgY3JlYXRlUHJvamVjdFVJKHRoaXNXZWVrLmdldE5hbWUoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3ROYW1lfWApO1xuICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIFN0b3JhZ2UudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gIFN0b3JhZ2UudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgY3JlYXRlUHJvamVjdFVJKG5ld1Byb2plY3QuZ2V0TmFtZSgpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFVJKHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtwcm9qZWN0TmFtZX1gKTtcblxuICBjb25zdCBzdHlsaW5nUHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdHlsaW5nUHJvakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdHlsaW5nLXByb2otY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgY2hvc2VuUHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KGAke2UudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWNvbnRhaW5lcicpLmlkfWApO1xuICAgIHRvRG9MaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgIHRvRG9MaXN0LnVwZGF0ZVdlZWtQcm9qZWN0KCk7XG4gICAgY2xlYXJBY3RpdmUoKTtcbiAgICBjcmVhdGVBY3RpdmVQcm9qZWN0VUkoY2hvc2VuUHJvamVjdC5nZXROYW1lKCkpO1xuICAgIHJlbmRlclRhc2tzKGNob3NlblByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgc2V0QWN0aXZlUHJvamVjdChuZXdQcm9qZWN0LCBzdHlsaW5nUHJvakNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKDMwLCAzMCk7XG4gIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpO1xuXG4gIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGV4dCcpO1xuICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lfWA7XG5cbiAgY29uc3QgcHJvakJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2otYnRuLWNvbnRhaW5lcicpO1xuXG4gIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgc3R5bGluZ1Byb2pDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIHN0eWxpbmdQcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pCdG5Db250YWluZXIpO1xuXG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc3R5bGluZ1Byb2pDb250YWluZXIpO1xuXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJ0luYm94Jykge1xuICAgIHByb2plY3RJY29uLnNyYyA9IGluYm94SWNvbjtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KG5ld1Byb2plY3QsIHN0eWxpbmdQcm9qQ29udGFpbmVyKTtcbiAgICBjcmVhdGVBY3RpdmVQcm9qZWN0VUkoU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmdldFByb2plY3QoJ0luYm94JykuZ2V0TmFtZSgpKTtcbiAgICBsb2FkVGFza3MoJ0luYm94Jyk7XG4gIH0gZWxzZSBpZiAocHJvamVjdE5hbWUgPT09ICdUb2RheScpIHtcbiAgICBwcm9qZWN0SWNvbi5zcmMgPSB0b2RheUljb247XG4gIH0gZWxzZSBpZiAocHJvamVjdE5hbWUgPT09ICdUaGlzIHdlZWsnKSB7XG4gICAgcHJvamVjdEljb24uc3JjID0gd2Vla0ljb247XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEljb24uc3JjID0gZm9sZGVySWNvbjtcbiAgICBwcm9qQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUJ0bigpKTtcbiAgICBwcm9qQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRCdG4oKSk7XG4gIH1cblxuICBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdENvbnRhaW5lciwgcHJvamVjdHNMaXN0KTtcbn1cblxuY29uc3QgYWRkUHJvamVjdFVJID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jb250YWluZXInKTtcbiAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGFkZFByb2plY3RDb250YWluZXIpKTtcblxuICByZXR1cm4gYWRkUHJvamVjdENvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFByb2pCdG4oY29udGFpbmVyKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcblxuICBjb25zdCBhZGRQcm9qSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICBhZGRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWljb24nKTtcbiAgYWRkUHJvakljb24uc3JjID0gYWRkSWNvbjtcblxuICBjb25zdCBhZGRQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRQcm9qVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLXRleHQnKTtcbiAgYWRkUHJvalRleHQudGV4dENvbnRlbnQgPSAnQWRkIHByb2plY3QnO1xuXG4gIGFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYWRkUHJvakljb24pO1xuICBhZGRQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGFkZFByb2pUZXh0KTtcblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dChjb250YWluZXIpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGNvbnRhaW5lcikge1xuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dC1jb250YWluZXInKTtcblxuICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dCcpO1xuXG4gIGNvbnN0IGlucHV0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0QnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXQtYnRuLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGFkZFByb2pJbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgYWRkUHJvaklucHV0U3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCc7XG4gIGFkZFByb2pJbnB1dFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNoZWNrSW5wdXQoYWRkUHJvamVjdElucHV0LnZhbHVlLCB0b0RvTGlzdCkgPT09IGZhbHNlKSB7XG4gICAgICBjcmVhdGVOZXdQcm9qZWN0KGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYWRkUHJvakNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qQ2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsJyk7XG4gIGFkZFByb2pDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2pCdG4oY29udGFpbmVyKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFByb2pDYW5jZWxJY29uID0gbmV3IEltYWdlKDIzLCAyMyk7XG4gIGFkZFByb2pDYW5jZWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsLWljb24nKTtcbiAgYWRkUHJvakNhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgaW5wdXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvaklucHV0U3VibWl0KTtcbiAgaW5wdXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRCdG5Db250YWluZXIpO1xuXG4gIHJldHVybiBhZGRQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgyMCwgMjUpO1xuICBkZWxldGVQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdkZWwtcHJvai1pY29uJyk7XG4gIGRlbGV0ZVByb2plY3RJY29uLnNyYyA9IGRlbGV0ZUljb247XG5cbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsLWJ0bicpO1xuICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RJY29uKTtcblxuICBkZWxldGVQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgY2hvc2VuQ29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY2hvc2VuQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChjaG9zZW5Db250YWluZXIuaWQpO1xuICAgIGNsZWFyQWN0aXZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0RGVsZXRlQnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGl0QnRuKCkge1xuICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2otYnRuJyk7XG5cbiAgY29uc3QgZWRpdFByb2pJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gIGVkaXRQcm9qSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgZWRpdFByb2pJY29uLnNyYyA9IGVkaXRJY29uO1xuXG4gIHByb2plY3RFZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRQcm9qSWNvbik7XG5cbiAgZWRpdFByb2pJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdElucHV0KGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWNvbnRhaW5lcicpKSk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0RWRpdEJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KGNvbnRhaW5lcikge1xuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dC1jb250YWluZXInKTtcblxuICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dCcpO1xuXG4gIGNvbnN0IGlucHV0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0QnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXQtYnRuLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGFkZFByb2pJbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgYWRkUHJvaklucHV0U3VibWl0LnRleHRDb250ZW50ID0gJ0NoYW5nZSBuYW1lJztcbiAgYWRkUHJvaklucHV0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaG9zZW5Qcm9qZWN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmdldFByb2plY3QoY29udGFpbmVyLmlkKTtcbiAgICBjaG9zZW5Qcm9qZWN0LnNldE5hbWUoYWRkUHJvamVjdElucHV0LnZhbHVlKTtcbiAgICBjcmVhdGVQcm9qZWN0VUkoY2hvc2VuUHJvamVjdC5nZXROYW1lKCkpO1xuICAgIGNsZWFyQWN0aXZlKCk7XG4gICAgY3JlYXRlQWN0aXZlUHJvamVjdFVJKGNob3NlblByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICByZW5kZXJUYXNrcyhjaG9zZW5Qcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhTdG9yYWdlLmdldFRvZG9MaXN0KCkpO1xuICB9KTtcblxuICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2pDYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwnKTtcblxuICBjb25zdCBhZGRQcm9qQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICBhZGRQcm9qQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbC1pY29uJyk7XG4gIGFkZFByb2pDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gIGFkZFByb2pDYW5jZWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1pY29uJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgaW5wdXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvaklucHV0U3VibWl0KTtcbiAgaW5wdXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRCdG5Db250YWluZXIpO1xuXG4gIHJldHVybiBhZGRQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFza0J0bigpIHtcbiAgY29uc3QgYWRkVGFza0ljb24gPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgYWRkVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2staWNvbicpO1xuICBhZGRUYXNrSWNvbi5zcmMgPSBhZGRJY29uO1xuXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgYWRkVGFza0J0bi5hcHBlbmRDaGlsZChhZGRUYXNrSWNvbik7XG5cbiAgYWRkVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1pbnB1dC1jb250YWluZXInKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKHByb2plY3RDb250YWluZXIpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFkZFRhc2tCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGNvbnRhaW5lcikge1xuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1pbnB1dC1jb250YWluZXInKTtcblxuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay10aXRsZS1pbnB1dCcpO1xuICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUnO1xuXG4gIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUtaW5wdXQnKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICc1MCcpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnQW55IG5vdGVzPyc7XG5cbiAgY29uc3QgYWRkVGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgYWRkVGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLXN1Ym1pdCcpO1xuICBhZGRUYXNrU3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCB0YXNrISc7XG4gIGFkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChjb250YWluZXIuaWQpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGlmIChjaGVja0lucHV0KHRhc2tUaXRsZUlucHV0LnZhbHVlLCBwcm9qZWN0KSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2tEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgKTtcbiAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0LmdldE5hbWUoKSwgbmV3VGFzayk7XG4gICAgICBTdG9yYWdlLnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgICAgU3RvcmFnZS51cGRhdGVXZWVrUHJvamVjdCgpO1xuICAgICAgY3JlYXRlVGFza1VJKG5ld1Rhc2suZ2V0TmFtZSgpLCBuZXdUYXNrLmdldERhdGUoKSwgbmV3VGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgIGFkZFRhc2tGb3JtLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYWRkVGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrQ2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsJyk7XG4gIGFkZFRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkVGFza0NhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBhZGRUYXNrQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICBhZGRUYXNrQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbC1pY29uJyk7XG4gIGFkZFRhc2tDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gIGFkZFRhc2tDYW5jZWwuYXBwZW5kQ2hpbGQoYWRkVGFza0NhbmNlbEljb24pO1xuXG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tDYW5jZWwpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlSW5wdXQpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tTdWJtaXQpO1xuXG4gIHJldHVybiBhZGRUYXNrRm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza1VJKHRhc2tUaXRsZSwgdGFza0RhdGUsIHRhc2tEZXNjcmlwdGlvbikge1xuICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgbmV3VGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza1RpdGxlfWApO1xuXG4gIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICBuZXdUYXNrVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0YXNrVGl0bGV9YDtcblxuICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgbmV3VGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrRGF0ZX1gO1xuXG4gIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICBpZiAodGFza0Rlc2NyaXB0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrRGVzY3JpcHRpb259YDtcbiAgfVxuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1idG4tY29udGFpbmVyJyk7XG5cbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGUpO1xuICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGVzY3JpcHRpb24pO1xuICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgaWYgKGFjdGl2ZVByb2plY3QuaWQgIT09ICdUb2RheScgJiYgYWN0aXZlUHJvamVjdC5pZCAhPT0gJ1RoaXMgd2VlaycpIHtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RlbGV0ZUJ0bigpKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0VkaXRCdG4oKSk7XG4gIH1cbiAgYWN0aXZlVGFza3MuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9qZWN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjcmVhdGVUYXNrVUkodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCB0YXNrLmdldERlc2NyaXB0aW9uKCksIGFjdGl2ZVRhc2tzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCwgY29udGFpbmVyKSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0ICE9PSB0aGlzKSB7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHlsaW5nLXByb2otY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gdGhpcykge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1jb250YWluZXInKTtcbiAgICB9XG4gIH0pO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWNvbnRhaW5lcicpO1xufVxuXG5mdW5jdGlvbiBjbGVhckFjdGl2ZSgpIHtcbiAgaWYgKGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpKSB7XG4gICAgYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJykucmVtb3ZlKCk7XG4gIH1cbiAgaWYgKGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpKSB7XG4gICAgYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2staW5wdXQtY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIH1cbiAgYWN0aXZlVGFza3MudGV4dENvbnRlbnQgPSAnJztcbiAgYWN0aXZlUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0RlbGV0ZUJ0bigpIHtcbiAgY29uc3QgZGVsZXRlVGFza0ljb24gPSBuZXcgSW1hZ2UoMjAsIDI1KTtcbiAgZGVsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnZGVsLXRhc2staWNvbicpO1xuICBkZWxldGVUYXNrSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuXG4gIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbC1idG4nKTtcbiAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVUYXNrSWNvbik7XG5cbiAgZGVsZXRlVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhlLnRhcmdldC5jbG9zZXN0KCdkaXYuYWN0aXZlLXByb2plY3QnKS5pZCwgZS50YXJnZXQuY2xvc2VzdCgnZGl2LmFjdGl2ZS1wcm9qZWN0JykucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS50ZXh0Q29udGVudCk7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrRGVsZXRlQnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWRpdEJ0bigpIHtcbiAgY29uc3QgZWRpdFRhc2tJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gIGVkaXRUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2staWNvbicpO1xuICBlZGl0VGFza0ljb24uc3JjID0gZWRpdEljb247XG5cbiAgY29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLWJ0bicpO1xuICB0YXNrRWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0VGFza0ljb24pO1xuXG4gIGVkaXRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tFZGl0Rm9ybShlLnRhcmdldC5jbG9zZXN0KCcuYWN0aXZlLXByb2plY3QnKSwgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhc2tFZGl0QnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWRpdEZvcm0oY29udGFpbmVyLCB0YXNrQ29udGFpbmVyKSB7XG4gIGNvbnN0IG9sZFRpdGxlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLnRleHRDb250ZW50O1xuICBjb25zdCBvbGREYXRlID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1kYXRlJykudGV4dENvbnRlbnQ7XG4gIGNvbnN0IG9sZERlc2NyID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGNob3NlblByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChjb250YWluZXIuaWQpO1xuXG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlLWlucHV0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gb2xkVGl0bGU7XG4gIHRhc2tUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUnO1xuXG4gIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUtaW5wdXQnKTtcbiAgdGFza0RhdGVJbnB1dC52YWx1ZSA9IG9sZERhdGU7XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnNTAnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gb2xkRGVzY3I7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0FueSBub3Rlcz8nO1xuXG4gIGNvbnN0IGFkZFRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGFkZFRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1zdWJtaXQnKTtcbiAgYWRkVGFza1N1Ym1pdC50ZXh0Q29udGVudCA9ICdFZGl0IHRhc2shJztcbiAgYWRkVGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgU3RvcmFnZS5yZW5hbWVUYXNrKGNob3NlblByb2plY3QuZ2V0TmFtZSgpLCBvbGRUaXRsZSwgdGFza1RpdGxlSW5wdXQudmFsdWUpO1xuICAgIFN0b3JhZ2Uuc2V0VGFza0RhdGUoY2hvc2VuUHJvamVjdC5nZXROYW1lKCksIHRhc2tUaXRsZUlucHV0LnZhbHVlLCB0YXNrRGF0ZUlucHV0LnZhbHVlKTtcbiAgICBTdG9yYWdlLnNldFRhc2tEZXNjcmlwdGlvbihcbiAgICAgIGNob3NlblByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICApO1xuICAgIFN0b3JhZ2UudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gICAgU3RvcmFnZS51cGRhdGVXZWVrUHJvamVjdCgpO1xuICAgIGNvbnN0IGNob3NlblRhc2sgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIC5nZXRQcm9qZWN0KGNob3NlblByb2plY3QuZ2V0TmFtZSgpKS5nZXRUYXNrKHRhc2tUaXRsZUlucHV0LnZhbHVlKTtcbiAgICBjcmVhdGVUYXNrVUkoXG4gICAgICBjaG9zZW5UYXNrLmdldE5hbWUoKSxcbiAgICAgIGNob3NlblRhc2suZ2V0RGF0ZSgpLFxuICAgICAgY2hvc2VuVGFzay5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgYWN0aXZlVGFza3MsXG4gICAgKTtcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza0NhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICBhZGRUYXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2tDYW5jZWwuY2xvc2VzdCgnLnRhc2stY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1pY29uJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBhZGRUYXNrQ2FuY2VsLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFRhc2tDYW5jZWxJY29uID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gIGFkZFRhc2tDYW5jZWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY2FuY2VsLWljb24nKTtcbiAgYWRkVGFza0NhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgYWRkVGFza0NhbmNlbC5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsSWNvbik7XG5cbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0NhbmNlbCk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1N1Ym1pdCk7XG5cbiAgcmV0dXJuIGFkZFRhc2tGb3JtO1xufVxuXG5mdW5jdGlvbiBjaGVja0lucHV0KG9iamVjdE5hbWUsIHBhcmVudE5hbWUpIHtcbiAgaWYgKHBhcmVudE5hbWUuY29udGFpbnMob2JqZWN0TmFtZSkpIHtcbiAgICBhbGVydCgnVGhlIG5hbWUgc2hvdWxkIG5vdCBiZSB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgb25lcycpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aXZlUHJvamVjdFVJKHByb2plY3ROYW1lKSB7XG4gIGFjdGl2ZVByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3ROYW1lfWApO1xuICBhY3RpdmVQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lfWA7XG4gIGlmIChhY3RpdmVQcm9qZWN0LmlkICE9PSAnVG9kYXknICYmIGFjdGl2ZVByb2plY3QuaWQgIT09ICdUaGlzIHdlZWsnKSB7XG4gICAgYWN0aXZlUHJvamVjdC5hcHBlbmRDaGlsZChjcmVhdGVBZGRUYXNrQnRuKCkpO1xuICB9XG5cbiAgYWRkUHJvamVjdFRvRE9NKGFjdGl2ZVByb2plY3QsIGFjdGl2ZVNwYWNlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9