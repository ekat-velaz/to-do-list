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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
/* @font-face {
    font-family: "Oswald" ;
    src: url(/src/Oswald/Oswald-VariableFont_wght.ttf);
} */

:root {
    --purple: #B799FF;
    --lighterPurple: #ACBCFF;
    --blue: #AEE2FF;
    --lighterBlue: #E6FFFD;
	--transparentPurple:#b899ffb5;
	--transparentDarkerBlue:  #acbdffba;
	--transparentBlue:#aee3ffbe ;
	--transparentLighterBlue: #e6fffdc7;
    /* font-family: "Oswald"; */
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
	/* padding: 30px; */
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
	/* padding: 10px; */
	color: var(--lighterBlue);
}

/* Change svg color */

/* .project-icon,
#add-proj-icon,
#add-proj-cancel-icon,
.del-proj-icon,
.add-task-icon {
    filter: invert(83%) sepia(21%) saturate(798%) hue-rotate(175deg) brightness(101%) contrast(102%);
} */

.project-icon,
#add-proj-icon,
#add-proj-cancel-icon,
.del-proj-icon,
.add-task-icon,
#logo-pic,
#github-icon {
    filter: invert(100%) sepia(99%) saturate(295%) hue-rotate(104deg) brightness(107%) contrast(105%);
}

/* Content styling */

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
    padding-top: 10px;
    padding-left: 20px;
}

#projects-list {
    display: grid;
}

.project-container {
    display: grid;
    /* grid-auto-flow: column; */
    justify-content: space-between;
    grid-template-areas: 
    "project buttons"
    "form form";
}

.project {
    grid-area: project;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    justify-content: start;
    gap: 5px;
}

.proj-btn-container {
    grid-area: buttons;
    display: grid;
    justify-content: end;
    grid-auto-flow: column;
}

#add-proj-input-container {
    grid-area: form;

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;;AAEV;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,cAAc;CACd,YAAY;CACZ,UAAU;CACV,aAAa;CACb,eAAe;CACf,gBAAgB;AACjB;;AAEA,0BAA0B;AAC1B;;;GAGG;;AAEH;IACI,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,sBAAsB;CACzB,6BAA6B;CAC7B,mCAAmC;CACnC,4BAA4B;CAC5B,mCAAmC;IAChC,2BAA2B;AAC/B;;AAEA;CACC,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,iCAAiC;AAClC;;AAEA,mBAAmB;AACnB;CACC,+BAA+B;CAC/B,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,yBAAyB;CACzB,eAAe;AAChB;;AAEA,mBAAmB;AACnB;CACC,+BAA+B;CAC/B,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;CACT,mBAAmB;CACnB,yBAAyB;AAC1B;;AAEA,qBAAqB;;AAErB;;;;;;GAMG;;AAEH;;;;;;;IAOI,iGAAiG;AACrG;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,eAAe;;AAEnB;;AAEA;IACI,sCAAsC;IACtC,aAAa;;IAEb,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,8BAA8B;IAC9B;;eAEW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;;AAEnB","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n/* General space styling */\n/* @font-face {\n    font-family: \"Oswald\" ;\n    src: url(/src/Oswald/Oswald-VariableFont_wght.ttf);\n} */\n\n:root {\n    --purple: #B799FF;\n    --lighterPurple: #ACBCFF;\n    --blue: #AEE2FF;\n    --lighterBlue: #E6FFFD;\n\t--transparentPurple:#b899ffb5;\n\t--transparentDarkerBlue:  #acbdffba;\n\t--transparentBlue:#aee3ffbe ;\n\t--transparentLighterBlue: #e6fffdc7;\n    /* font-family: \"Oswald\"; */\n}\n\nbody {\n\theight: 100vh;\n\tbackground-color: var(--blue);\n}\n\n#main {\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1.5fr 7fr 1fr;\n}\n\n/* Header styling */\n#header {\n\tbackground-color: var(--purple);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n\t/* padding: 30px; */\n}\n\n#logo {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tplace-items: center;\n\tgap: 20px;\n}\n\n#logo-name {\n\tcolor: var(--lighterBlue);\n\tfont-size: 32px;\n}\n\n/* Footer styling */\n#footer {\n\tbackground-color: var(--purple);\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 20px;\n\t/* padding: 10px; */\n\tcolor: var(--lighterBlue);\n}\n\n/* Change svg color */\n\n/* .project-icon,\n#add-proj-icon,\n#add-proj-cancel-icon,\n.del-proj-icon,\n.add-task-icon {\n    filter: invert(83%) sepia(21%) saturate(798%) hue-rotate(175deg) brightness(101%) contrast(102%);\n} */\n\n.project-icon,\n#add-proj-icon,\n#add-proj-cancel-icon,\n.del-proj-icon,\n.add-task-icon,\n#logo-pic,\n#github-icon {\n    filter: invert(100%) sepia(99%) saturate(295%) hue-rotate(104deg) brightness(107%) contrast(105%);\n}\n\n/* Content styling */\n\n#content {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 1fr 5fr;\n    font-size: 18px;\n   \n}\n\n#projects-container {\n    background-color: var(--lighterPurple);\n    display: grid;\n\n    color: var(--lighterBlue);\n    padding-top: 10px;\n    padding-left: 20px;\n}\n\n#projects-list {\n    display: grid;\n}\n\n.project-container {\n    display: grid;\n    /* grid-auto-flow: column; */\n    justify-content: space-between;\n    grid-template-areas: \n    \"project buttons\"\n    \"form form\";\n}\n\n.project {\n    grid-area: project;\n    display: grid;\n    grid-auto-flow: column;\n    place-items: center;\n    justify-content: start;\n    gap: 5px;\n}\n\n.proj-btn-container {\n    grid-area: buttons;\n    display: grid;\n    justify-content: end;\n    grid-auto-flow: column;\n}\n\n#add-proj-input-container {\n    grid-area: form;\n\n}"],"sourceRoot":""}]);
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
    };

    setName(name) {
        this.name = name;
    };

    getName() {
        return this.name;
    };

    addTask(newTask) {
        this.tasks.push(newTask);
    };

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    };

    setTasks(tasks) {
        this.tasks = tasks
    };    

    getTasks() {
        return this.tasks;
    };

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName);
      };
    
    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
      };

      getTasksToday() {
        return this.tasks.filter((task) => {
          const taskDate = new Date(task.getDate());
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
        });
      };
    
      getTasksThisWeek() {
        return this.tasks.filter((task) => {
          const taskDate = new Date(task.getDate());
          return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate), 1));
        });
      };
    
};

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
    };

    setName(name) {
        this.name = name;
    };

    getName() {
        return this.name;
    };

    setDate(dueDate) {
        this.dueDate = dueDate;
    };

    getDate() {
        return this.dueDate
    };

    setDescription(description) {
        this.description = description;
    };

    getDescription() {
        return this.description;
    };
};

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _projectLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectLogic */ "./src/projectLogic.js");
/* harmony import */ var _taskLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskLogic */ "./src/taskLogic.js");




class ToDoList {
    constructor() {
        this.projects = []
    };

    setProjects(projects) {
        this.projects = projects;
    };

    getProjects() {
        return this.projects;
    };

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    };

    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName)
    };

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
          return
        this.projects.push(newProject)
    };
    
    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.getName() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    };

    updateTodayProject() {
        this.getProject('Today').tasks = [];
    
        this.projects.forEach((project) => {
          if (project.getName() === 'Today' || project.getName() === 'This week') {
            return
          } else { 
          const todayTasks = project.getTasksToday();
            todayTasks.forEach((task) => {
                const taskName = `${task.getName()} (From: ${project.getName()})`;
                this.getProject('Today').addTask(new _taskLogic__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.getDate()), task.getDescription());
            });
          };
        });
    };
    
      updateWeekProject() {
        this.getProject('This week').setTasks([]);
    
        this.projects.forEach((project) => {
          if (project.getName() === 'Today' || project.getName() === 'This week') {
            return;
          };
            const weekTasks = project.getTasksThisWeek();
            weekTasks.forEach((task) => {
            const taskName = `${task.getName()} (From: ${project.getName()})`;
            this.getProject('This week').addTask(new _taskLogic__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.getDate()), task.getDescription());
            });
        });
    
        this.getProject('This week').setTasks(
            this.getProject('This week')
              .getTasks()
              .sort((taskA, taskB) =>
                (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskA.getDateFormatted())),
                  (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskB.getDateFormatted()))
                )
              )
        );
      };
};

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
/* harmony import */ var _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/inbox-multiple.svg */ "./src/images/inbox-multiple.svg");
/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/calendar-today.svg */ "./src/images/calendar-today.svg");
/* harmony import */ var _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/calendar-week.svg */ "./src/images/calendar-week.svg");
/* harmony import */ var _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/folder-outline.svg */ "./src/images/folder-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/check-outline.svg */ "./src/images/check-outline.svg");
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");
/* harmony import */ var _images_pencil_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/pencil.svg */ "./src/images/pencil.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.css */ "./src/style.css");















const toDoList = new _toDoList__WEBPACK_IMPORTED_MODULE_0__["default"];


const projectsList = document.getElementById('projects-list');
const activeSpace = document.getElementById('active-space');
const activeProject = document.querySelector('.active-project');
const activeProjectName = document.getElementById('active-project-name')
const activeTasks = document.getElementById('active-tasks');

function showProjects() {
    createHeader();
    createFooter();
    createDefaultProjects();
    
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.appendChild(addProjectUI());
};

function createHeader() {
    const headerContainer = document.getElementById('header');

    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');

    const logoName = document.createElement('div');
    logoName.setAttribute('id', 'logo-name');
    logoName.textContent = 'ToDo-List';

    const logoPic = new Image(50, 50);
    logoPic.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_10__;
    logoPic.setAttribute('id', 'logo-pic');

    logo.appendChild(logoPic);
    logo.appendChild(logoName);
    
    headerContainer.appendChild(logo);

    return headerContainer;
};

function createFooter() {
    const footerContainer = document.getElementById('footer');

    const copyright = document.createElement('div');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;
    copyright.setAttribute('id', 'copyright');

    const githubLink = document.createElement('a');
    githubLink.setAttribute('id', 'github-link');
    githubLink.href = "https://github.com/ekat-velaz";

    const githubIcon = new Image(50,50);
    githubIcon.setAttribute('id', 'github-icon');
    githubIcon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_11__;

    githubLink.appendChild(githubIcon);
    footerContainer.appendChild(copyright);
    footerContainer.appendChild(githubLink);

    return footerContainer;
};

function addProjectToDOM(projectName, container) {
    container.appendChild(projectName);
};

function createDefaultProjects() {
        const inbox = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('Inbox');
        toDoList.addProject(inbox);
        createProjectUI(inbox.getName(), _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_3__, projectsList);
    
        const today = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('Today');
        toDoList.addProject(today);
        createProjectUI(today.getName(), _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_4__, projectsList);
    
        const thisWeek = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]('This week');
        toDoList.addProject(thisWeek);
        createProjectUI(thisWeek.getName(), _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_5__, projectsList);
};

function createNewProject(projectName) {
    const newProject = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"](`${projectName}`);
    toDoList.addProject(newProject);
    toDoList.updateTodayProject();
    toDoList.updateWeekProject();
    createProjectUI(newProject.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_6__, projectsList);
};

function createProjectUI(projectName, imageSrc, container) {
    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('project-container');
    newProjectContainer.setAttribute('id', `${projectName}`);

    const newProject = document.createElement('button');
    newProject.classList.add('project');
    newProject.addEventListener('click', (e) => {
        const chosenProject = toDoList.getProject(`${e.target.parentNode.parentNode.id}`);
        console.log(chosenProject);
        toDoList.updateTodayProject();
        toDoList.updateWeekProject();
        clearActive();
        createActiveProjectUI(chosenProject.getName());
        
        renderTasks(chosenProject.getTasks());
        setActiveProject(newProject);
    });

    const projectIcon = new Image(30, 30);
    projectIcon.classList.add('project-icon');
    projectIcon.src = imageSrc;

    const projectText = document.createElement('div');
    projectText.classList.add('project-text');
    projectText.textContent = `${projectName}`;

    const projBtnContainer = document.createElement('div');
    projBtnContainer.classList.add('proj-btn-container');

    newProject.appendChild(projectIcon);
    newProject.appendChild(projectText);
    newProjectContainer.appendChild(newProject);
    newProjectContainer.appendChild(projBtnContainer);

    if ((projectName !== 'Inbox') && (projectName !== 'Today') && (projectName !== 'This week')) {
        projBtnContainer.appendChild(createDeleteBtn());
        projBtnContainer.appendChild(createEditBtn());
    };

    if (projectName === 'Inbox') {
        newProject.classList.add('active');
    };

    addProjectToDOM(newProjectContainer, projectsList);
};

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
    addProjIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_8__;

    const addProjText = document.createElement('div');
    addProjText.setAttribute('id', 'add-proj-text');
    addProjText.textContent = 'Add new project!';

    addProjectBtn.appendChild(addProjIcon);
    addProjectBtn.appendChild(addProjText);

    addProjectBtn.addEventListener('click', () => {
        container.textContent = '';
        container.appendChild(createInput(container));
    });
  
    return addProjectBtn;
};

function createInput(container) {
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('id', 'add-proj-input-container');

    const addProjectInput = document.createElement('input');
    addProjectInput.setAttribute('id', 'add-proj-input');

    const addProjInputSubmit = document.createElement('btn');
    addProjInputSubmit.setAttribute('type', 'submit');
    addProjInputSubmit.setAttribute('id', 'add-proj-submit');
    addProjInputSubmit.textContent = 'Submit';
    addProjInputSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        if (checkInput(addProjectInput.value, toDoList) === false) {
        createNewProject(addProjectInput.value);
        container.textContent = '';
        container.appendChild(createAddProjBtn(container));
        };
    });

    const addProjCancel = document.createElement('button');
    addProjCancel.setAttribute('id', 'add-proj-cancel');
    addProjCancel.addEventListener('click', () => {
        container.textContent = '';
        container.appendChild(createAddProjBtn(container));
    });

    const addProjCancelIcon = new Image (20, 20);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createDeleteBtn() {
    const deleteProjectIcon = new Image(20, 25);
    deleteProjectIcon.classList.add('del-proj-icon');
    deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_7__;

    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-del-btn');
    projectDeleteBtn.appendChild(deleteProjectIcon);

    deleteProjectIcon.addEventListener('click', (e) => {
        const chosenContainer = e.target.closest('.project-container');
        chosenContainer.remove();
        toDoList.deleteProject(chosenContainer.id);
        clearActive();
    });

    return projectDeleteBtn;
};

function createEditBtn() {
    const projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('edit-proj-btn');

    const editProjIcon = new Image(20, 25);
    editProjIcon.classList.add('edit-icon');
    editProjIcon.src = _images_pencil_svg__WEBPACK_IMPORTED_MODULE_12__;

    projectEditBtn.appendChild(editProjIcon);

    editProjIcon.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';
        // e.target.parentNode.parentNode.appendChild(createEditInput(e.target.parentNode.parentNode));    
        e.target.closest('.project-container').appendChild(createEditInput(e.target.closest('.project-container')));
    });

    return projectEditBtn;
};

function createEditInput(container) {
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('id', 'add-proj-input-container');

    const addProjectInput = document.createElement('input');
    addProjectInput.setAttribute('id', 'add-proj-input');

    const addProjInputSubmit = document.createElement('btn');
    addProjInputSubmit.setAttribute('type', 'submit');
    addProjInputSubmit.setAttribute('id', 'add-proj-submit');
    addProjInputSubmit.textContent = 'Submit';
    addProjInputSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        let chosenProject = toDoList.getProject(container.id);
        chosenProject.setName(addProjectInput.value);
        createProjectUI(chosenProject.getName(), _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_6__);
        clearActive();
        createActiveProjectUI(chosenProject.getName());
        renderTasks(chosenProject.getTasks());
        container.remove();
        console.log(toDoList);
    });

    const addProjCancel = document.createElement('button');
    addProjCancel.setAttribute('id', 'add-proj-cancel');
   

    const addProjCancelIcon = new Image (20, 20);
    addProjCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addProjCancelIcon.addEventListener('click', (e) => {
    e.target.closest('.project-container').querySelector('.edit-icon').style.visibility = 'visible';
        addProjectForm.remove();
    });

    addProjCancel.appendChild(addProjCancelIcon);

    addProjectForm.appendChild(addProjectInput);
    addProjectForm.appendChild(addProjInputSubmit);
    addProjectForm.appendChild(addProjCancel);

    return addProjectForm;
};

function createAddTaskBtn() {
    const addTaskIcon = new Image(20, 25);
    addTaskIcon.classList.add('add-task-icon');
    addTaskIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_8__;

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.appendChild(addTaskIcon);

    addTaskIcon.addEventListener('click', (e) => {
        const projectContainer = e.target.parentNode.parentNode;
        if (document.querySelector("#add-task-input-container")) {
            document.querySelector("#add-task-input-container").remove();
        };
        projectContainer.appendChild(createTaskForm(projectContainer));
        
    });

    return addTaskBtn;
};


function createTaskForm(container) {
    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-input-container');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('id', 'task-title-input');
    taskTitleInput.required = true;

    const taskDateInput = document.createElement('input');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('id', 'task-date-input');

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.setAttribute('rows', '4');
    taskDescriptionInput.setAttribute('cols', '50');
    taskDescriptionInput.setAttribute('id', 'task-description-input');

    const addTaskSubmit = document.createElement('button');
    addTaskSubmit.setAttribute('type', 'submit');
    addTaskSubmit.setAttribute('id', 'add-proj-submit');
    addTaskSubmit.textContent = 'Add task!';
    addTaskSubmit.addEventListener('click', (event) => {
        //event.preventDefault();
        const project = toDoList.getProject(container.id);
        if (checkInput(taskTitleInput.value, project) === false) {
            const newTask = new _taskLogic__WEBPACK_IMPORTED_MODULE_2__["default"](taskTitleInput.value, taskDateInput.value, taskDescriptionInput.value); 
            project.addTask(newTask);
            toDoList.updateTodayProject();
            toDoList.updateWeekProject();
            createTaskUI(newTask.getName(), newTask.getDate(), newTask.getDescription(), activeTasks);
            addTaskForm.remove();
        };
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        // addTaskCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addTaskCancel.appendChild(addTaskCancelIcon);

    addTaskForm.appendChild(taskTitleInput);
    addTaskForm.appendChild(taskDateInput);
    addTaskForm.appendChild(taskDescriptionInput);
    addTaskForm.appendChild(addTaskSubmit);
    addTaskForm.appendChild(addTaskCancel);

    return addTaskForm;
};

function createTaskUI(taskTitle, taskDate, taskDescription, container) {

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
    };

    newTaskContainer.appendChild(newTaskTitle);
    newTaskContainer.appendChild(newTaskDate);
    newTaskContainer.appendChild(newTaskDescription);
    if (activeProject.id !== 'Today' && activeProject.id !== 'This week') {
    newTaskContainer.appendChild(createTaskDeleteBtn());
    newTaskContainer.appendChild(createTaskEditBtn());
    };
    container.appendChild(newTaskContainer);
};

function renderTasks(project) {
    if (project === undefined) {
        return;
    };
    project.forEach((task) => {
        createTaskUI(task.getName(), task.getDate(), task.getDescription(), activeTasks);
    });
};

function setActiveProject(project) {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        if (project !== this) {
            project.classList.remove('active');
        }
    });
    project.classList.add('active');
};

function clearActive() {
    if (activeProject.querySelector('.add-task-btn')) {
    activeProject.querySelector('.add-task-btn').remove();
    };
    if (activeProject.querySelector('#add-task-input-container')) {
        activeProject.querySelector('#add-task-input-container').remove();
    }
    activeTasks.textContent = '';
    activeProjectName.textContent = '';
};

function createTaskDeleteBtn() {
    const deleteTaskIcon = new Image(20, 25);
    deleteTaskIcon.classList.add('del-task-icon');
    deleteTaskIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_7__;

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-del-btn');
    taskDeleteBtn.appendChild(deleteTaskIcon);

    deleteTaskIcon.addEventListener('click', (e) => {
        const chosenProject = toDoList.getProject(e.target.closest('div.active-project').id);
        chosenProject.deleteTask(e.target.closest('div.active-project').querySelector(".task-title").textContent);
        e.target.parentNode.parentNode.remove();
    });

    return taskDeleteBtn;
};

function createTaskEditBtn() {
    const projectEditBtn = document.createElement('button');
    projectEditBtn.classList.add('edit-proj-btn');
    projectEditBtn.textContent = 'Edit';
    projectEditBtn.addEventListener('click', (e) => {
        e.target.style.visibility = 'hidden';
        e.target.parentNode.appendChild(createTaskEditForm(e.target.closest('.active-project')));    
    });

    return projectEditBtn;
};

function createTaskEditForm(container) {
    console.log(container.id);
    const oldTitle = document.querySelector('.task-title').textContent;
    const oldDate = document.querySelector('.task-date').textContent;
    const oldDescr = document.querySelector('.task-description').textContent;

    const chosenProject = toDoList.getProject(container.id);
    const chosenTask = chosenProject.getTask(oldTitle);
    console.log(chosenProject);
    console.log(chosenTask);

    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('id', 'add-task-input-container');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('id', 'task-title-input');
    taskTitleInput.value = oldTitle;

    const taskDateInput = document.createElement('input');
    taskDateInput.setAttribute('type', 'date');
    taskDateInput.setAttribute('id', 'task-date-input');
    taskDateInput.value = oldDate;

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.setAttribute('rows', '4');
    taskDescriptionInput.setAttribute('cols', '50');
    taskDescriptionInput.setAttribute('id', 'task-description-input');
    taskDescriptionInput.value = oldDescr;

    const addTaskSubmit = document.createElement('button');
    addTaskSubmit.setAttribute('type', 'submit');
    addTaskSubmit.setAttribute('id', 'add-proj-submit');
    addTaskSubmit.textContent = 'Edit task!';
    addTaskSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        chosenTask.setName(taskTitleInput.value);
        chosenTask.setDate(taskDateInput.value);
        chosenTask.setDescription(taskDescriptionInput.value);
        toDoList.updateTodayProject();
        toDoList.updateWeekProject();
        createTaskUI(chosenTask.getName(), chosenTask.getDate(), chosenTask.getDescription(), activeTasks);
        event.target.closest('.task-container').remove();
        
    });

    const addTaskCancel = document.createElement('button');
    addTaskCancel.setAttribute('id', 'add-proj-cancel');
    addTaskCancel.addEventListener('click', () => {
        addTaskCancel.parentNode.parentNode.querySelector('.edit-proj-btn').style.visibility = 'visible';
        addTaskCancel.parentNode.remove();
    });

    const addTaskCancelIcon = new Image (20, 20);
    addTaskCancelIcon.setAttribute('id', 'add-proj-cancel-icon');
    addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_9__;
    addTaskCancel.appendChild(addTaskCancelIcon);

    addTaskForm.appendChild(taskTitleInput);
    addTaskForm.appendChild(taskDateInput);
    addTaskForm.appendChild(taskDescriptionInput);
    addTaskForm.appendChild(addTaskSubmit);
    addTaskForm.appendChild(addTaskCancel);

    return addTaskForm;
};

function checkInput(objectName, parentName) {
    if (parentName.contains(objectName)) {
        alert('The name should not be the same as the previous ones');
        return true;
    } else {
        return false;
    };
};



function createActiveProjectUI(projectName) {
    activeProject.setAttribute('id', `${projectName}`);
    activeProjectName.textContent = `${projectName}`;
    if (activeProject.id !== 'Today' && activeProject.id !== 'This week') {
        activeProject.appendChild(createAddTaskBtn());
    };

    addProjectToDOM(activeProject, activeSpace );
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFVO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwREFBVTs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQVE7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsdURBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQU87O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw0QkFBNEIsOENBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVTs7QUFFckQ7QUFDQTtBQUNBLGtDQUFrQyxVQUFVOztBQUU1QztBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQVU7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBVTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRCx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2lCZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3dlYnNpdGVVSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUmVzZXQgKi9cblxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0b3V0bGluZTogaW5oZXJpdDtcbn1cblxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXG4vKiBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiA7XG4gICAgc3JjOiB1cmwoL3NyYy9Pc3dhbGQvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XG59ICovXG5cbjpyb290IHtcbiAgICAtLXB1cnBsZTogI0I3OTlGRjtcbiAgICAtLWxpZ2h0ZXJQdXJwbGU6ICNBQ0JDRkY7XG4gICAgLS1ibHVlOiAjQUVFMkZGO1xuICAgIC0tbGlnaHRlckJsdWU6ICNFNkZGRkQ7XG5cdC0tdHJhbnNwYXJlbnRQdXJwbGU6I2I4OTlmZmI1O1xuXHQtLXRyYW5zcGFyZW50RGFya2VyQmx1ZTogICNhY2JkZmZiYTtcblx0LS10cmFuc3BhcmVudEJsdWU6I2FlZTNmZmJlIDtcblx0LS10cmFuc3BhcmVudExpZ2h0ZXJCbHVlOiAjZTZmZmZkYzc7XG4gICAgLyogZm9udC1mYW1pbHk6IFwiT3N3YWxkXCI7ICovXG59XG5cbmJvZHkge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuI21haW4ge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgN2ZyIDFmcjtcbn1cblxuLyogSGVhZGVyIHN0eWxpbmcgKi9cbiNoZWFkZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIwcHg7XG5cdC8qIHBhZGRpbmc6IDMwcHg7ICovXG59XG5cbiNsb2dvIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyMHB4O1xufVxuXG4jbG9nby1uYW1lIHtcblx0Y29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcblx0Zm9udC1zaXplOiAzMnB4O1xufVxuXG4vKiBGb290ZXIgc3R5bGluZyAqL1xuI2Zvb3RlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIwcHg7XG5cdC8qIHBhZGRpbmc6IDEwcHg7ICovXG5cdGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XG59XG5cbi8qIENoYW5nZSBzdmcgY29sb3IgKi9cblxuLyogLnByb2plY3QtaWNvbixcbiNhZGQtcHJvai1pY29uLFxuI2FkZC1wcm9qLWNhbmNlbC1pY29uLFxuLmRlbC1wcm9qLWljb24sXG4uYWRkLXRhc2staWNvbiB7XG4gICAgZmlsdGVyOiBpbnZlcnQoODMlKSBzZXBpYSgyMSUpIHNhdHVyYXRlKDc5OCUpIGh1ZS1yb3RhdGUoMTc1ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMiUpO1xufSAqL1xuXG4ucHJvamVjdC1pY29uLFxuI2FkZC1wcm9qLWljb24sXG4jYWRkLXByb2otY2FuY2VsLWljb24sXG4uZGVsLXByb2otaWNvbixcbi5hZGQtdGFzay1pY29uLFxuI2xvZ28tcGljLFxuI2dpdGh1Yi1pY29uIHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDI5NSUpIGh1ZS1yb3RhdGUoMTA0ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpO1xufVxuXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgXG59XG5cbiNwcm9qZWN0cy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXJQdXJwbGUpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuI3Byb2plY3RzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcInByb2plY3QgYnV0dG9uc1wiXG4gICAgXCJmb3JtIGZvcm1cIjtcbn1cblxuLnByb2plY3Qge1xuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogNXB4O1xufVxuXG4ucHJvai1idG4tY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4jYWRkLXByb2otaW5wdXQtY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IGZvcm07XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBLDBCQUEwQjtBQUMxQjs7O0dBR0c7O0FBRUg7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixzQkFBc0I7Q0FDekIsNkJBQTZCO0NBQzdCLG1DQUFtQztDQUNuQyw0QkFBNEI7Q0FDNUIsbUNBQW1DO0lBQ2hDLDJCQUEyQjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlDQUFpQztBQUNsQzs7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQywrQkFBK0I7Q0FDL0IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLCtCQUErQjtDQUMvQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUEscUJBQXFCOztBQUVyQjs7Ozs7O0dBTUc7O0FBRUg7Ozs7Ozs7SUFPSSxpR0FBaUc7QUFDckc7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7O0lBRWIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUI7O2VBRVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgKi9cXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiwgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXFxuLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiA7XFxuICAgIHNyYzogdXJsKC9zcmMvT3N3YWxkL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn0gKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tcHVycGxlOiAjQjc5OUZGO1xcbiAgICAtLWxpZ2h0ZXJQdXJwbGU6ICNBQ0JDRkY7XFxuICAgIC0tYmx1ZTogI0FFRTJGRjtcXG4gICAgLS1saWdodGVyQmx1ZTogI0U2RkZGRDtcXG5cXHQtLXRyYW5zcGFyZW50UHVycGxlOiNiODk5ZmZiNTtcXG5cXHQtLXRyYW5zcGFyZW50RGFya2VyQmx1ZTogICNhY2JkZmZiYTtcXG5cXHQtLXRyYW5zcGFyZW50Qmx1ZTojYWVlM2ZmYmUgO1xcblxcdC0tdHJhbnNwYXJlbnRMaWdodGVyQmx1ZTogI2U2ZmZmZGM3O1xcbiAgICAvKiBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7ICovXFxufVxcblxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNtYWluIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDdmciAxZnI7XFxufVxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuI2hlYWRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0LyogcGFkZGluZzogMzBweDsgKi9cXG59XFxuXFxuI2xvZ28ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRwbGFjZS1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuI2xvZ28tbmFtZSB7XFxuXFx0Y29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcXG5cXHRmb250LXNpemU6IDMycHg7XFxufVxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuI2Zvb3RlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0LyogcGFkZGluZzogMTBweDsgKi9cXG5cXHRjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xcbn1cXG5cXG4vKiBDaGFuZ2Ugc3ZnIGNvbG9yICovXFxuXFxuLyogLnByb2plY3QtaWNvbixcXG4jYWRkLXByb2otaWNvbixcXG4jYWRkLXByb2otY2FuY2VsLWljb24sXFxuLmRlbC1wcm9qLWljb24sXFxuLmFkZC10YXNrLWljb24ge1xcbiAgICBmaWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNzk4JSkgaHVlLXJvdGF0ZSgxNzVkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTAyJSk7XFxufSAqL1xcblxcbi5wcm9qZWN0LWljb24sXFxuI2FkZC1wcm9qLWljb24sXFxuI2FkZC1wcm9qLWNhbmNlbC1pY29uLFxcbi5kZWwtcHJvai1pY29uLFxcbi5hZGQtdGFzay1pY29uLFxcbiNsb2dvLXBpYyxcXG4jZ2l0aHViLWljb24ge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDI5NSUpIGh1ZS1yb3RhdGUoMTA0ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgIFxcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlclB1cnBsZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcInByb2plY3QgYnV0dG9uc1xcXCJcXG4gICAgXFxcImZvcm0gZm9ybVxcXCI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2otYnRuLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbiNhZGQtcHJvai1pbnB1dC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGZvcm07XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1YkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDEwIGRheXMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gc3ViRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IEZyaSBBdWcgMjIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJEYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi93ZWJzaXRlVUlcIjtcbmltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vd2Vic2l0ZVVJXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5zaG93UHJvamVjdHMoKTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSwgaXNUaGlzV2Vlaywgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9O1xuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfTtcblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfTtcblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfTtcblxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICB9O1xuXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfTsgICAgXG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfTtcblxuICAgIGNvbnRhaW5zKHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gICAgICB9O1xuICAgIFxuICAgIGRlbGV0ZVRhc2sodGFza05hbWUpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLm5hbWUgIT09IHRhc2tOYW1lKTtcbiAgICAgIH07XG5cbiAgICAgIGdldFRhc2tzVG9kYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlKCkpO1xuICAgICAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgXG4gICAgICBnZXRUYXNrc1RoaXNXZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKTtcbiAgICAgICAgICByZXR1cm4gaXNUaGlzV2VlayhzdWJEYXlzKHRvRGF0ZSh0YXNrRGF0ZSksIDEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIFxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH07XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG5cbiAgICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9O1xuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZVxuICAgIH07XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9O1xufTsiLCJpbXBvcnQgeyBjb21wYXJlQXNjLCB0b0RhdGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3RMb2dpYyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2tMb2dpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgfTtcblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9O1xuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH07XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5zKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSlcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmV3UHJvamVjdC5uYW1lKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gICAgfTtcbiAgICBcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpXG4gICAgfTtcblxuICAgIHVwZGF0ZVRvZGF5UHJvamVjdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUb2RheScpLnRhc2tzID0gW107XG4gICAgXG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RoaXMgd2VlaycpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzVG9kYXkoKTtcbiAgICAgICAgICAgIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gYCR7dGFzay5nZXROYW1lKCl9IChGcm9tOiAke3Byb2plY3QuZ2V0TmFtZSgpfSlgO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrLmdldERhdGUoKSksIHRhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgICAgdXBkYXRlV2Vla1Byb2plY3QoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyB3ZWVrJykuc2V0VGFza3MoW10pO1xuICAgIFxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09ICdUb2RheScgfHwgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUaGlzIHdlZWsnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtUYXNrcyA9IHByb2plY3QuZ2V0VGFza3NUaGlzV2VlaygpO1xuICAgICAgICAgICAgd2Vla1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gYCR7dGFzay5nZXROYW1lKCl9IChGcm9tOiAke3Byb2plY3QuZ2V0TmFtZSgpfSlgO1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIHdlZWsnKS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrLmdldERhdGUoKSksIHRhc2suZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyB3ZWVrJykuc2V0VGFza3MoXG4gICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgd2VlaycpXG4gICAgICAgICAgICAgIC5nZXRUYXNrcygpXG4gICAgICAgICAgICAgIC5zb3J0KCh0YXNrQSwgdGFza0IpID0+XG4gICAgICAgICAgICAgICAgY29tcGFyZUFzYyhcbiAgICAgICAgICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQS5nZXREYXRlRm9ybWF0dGVkKCkpKSxcbiAgICAgICAgICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQi5nZXREYXRlRm9ybWF0dGVkKCkpKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfTtcbn07IiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0TG9naWNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tMb2dpY1wiO1xuaW1wb3J0IGluYm94SWNvbiBmcm9tIFwiLi9pbWFnZXMvaW5ib3gtbXVsdGlwbGUuc3ZnXCI7XG5pbXBvcnQgdG9kYXlJY29uIGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcIjtcbmltcG9ydCB3ZWVrSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2FsZW5kYXItd2Vlay5zdmdcIjtcbmltcG9ydCBmb2xkZXJJY29uIGZyb20gXCIuL2ltYWdlcy9mb2xkZXItb3V0bGluZS5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2ltYWdlcy9wbHVzLnN2Z1wiO1xuaW1wb3J0IGNhbmNlbEljb24gZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IHRvZG9Mb2dvIGZyb20gXCIuL2ltYWdlcy9jaGVjay1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9pbWFnZXMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gbmV3IFRvRG9MaXN0O1xuXG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XG5jb25zdCBhY3RpdmVTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmUtc3BhY2UnKTtcbmNvbnN0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QnKTtcbmNvbnN0IGFjdGl2ZVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZS1wcm9qZWN0LW5hbWUnKVxuY29uc3QgYWN0aXZlVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlLXRhc2tzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbiAgICBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VUkoKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG5cbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby1uYW1lJyk7XG4gICAgbG9nb05hbWUudGV4dENvbnRlbnQgPSAnVG9Eby1MaXN0JztcblxuICAgIGNvbnN0IGxvZ29QaWMgPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgICBsb2dvUGljLnNyYyA9IHRvZG9Mb2dvO1xuICAgIGxvZ29QaWMuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvLXBpYycpO1xuXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvUGljKTtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29OYW1lKTtcbiAgICBcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGVrYXQtdmVsYXpgO1xuICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHlyaWdodCcpO1xuXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWxpbmsnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9la2F0LXZlbGF6XCI7XG5cbiAgICBjb25zdCBnaXRodWJJY29uID0gbmV3IEltYWdlKDUwLDUwKTtcbiAgICBnaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWljb24nKTtcbiAgICBnaXRodWJJY29uLnNyYyA9IGdpdGh1YkxvZ287XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXJDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdE5hbWUsIGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoJ0luYm94Jyk7XG4gICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3QoaW5ib3gpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkoaW5ib3guZ2V0TmFtZSgpLCBpbmJveEljb24sIHByb2plY3RzTGlzdCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XG4gICAgICAgIHRvRG9MaXN0LmFkZFByb2plY3QodG9kYXkpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkodG9kYXkuZ2V0TmFtZSgpLCB0b2RheUljb24sIHByb2plY3RzTGlzdCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHRoaXNXZWVrID0gbmV3IFByb2plY3QoJ1RoaXMgd2VlaycpO1xuICAgICAgICB0b0RvTGlzdC5hZGRQcm9qZWN0KHRoaXNXZWVrKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdFVJKHRoaXNXZWVrLmdldE5hbWUoKSwgd2Vla0ljb24sIHByb2plY3RzTGlzdCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3ROYW1lfWApO1xuICAgIHRvRG9MaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgdG9Eb0xpc3QudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gICAgdG9Eb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICBjcmVhdGVQcm9qZWN0VUkobmV3UHJvamVjdC5nZXROYW1lKCksIGZvbGRlckljb24sIHByb2plY3RzTGlzdCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VUkocHJvamVjdE5hbWUsIGltYWdlU3JjLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3ROYW1lfWApO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjaG9zZW5Qcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChgJHtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNob3NlblByb2plY3QpO1xuICAgICAgICB0b0RvTGlzdC51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgICAgICAgdG9Eb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgY2xlYXJBY3RpdmUoKTtcbiAgICAgICAgY3JlYXRlQWN0aXZlUHJvamVjdFVJKGNob3NlblByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgXG4gICAgICAgIHJlbmRlclRhc2tzKGNob3NlblByb2plY3QuZ2V0VGFza3MoKSk7XG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgzMCwgMzApO1xuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpO1xuICAgIHByb2plY3RJY29uLnNyYyA9IGltYWdlU3JjO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRleHQnKTtcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lfWA7XG5cbiAgICBjb25zdCBwcm9qQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvakJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qLWJ0bi1jb250YWluZXInKTtcblxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qQnRuQ29udGFpbmVyKTtcblxuICAgIGlmICgocHJvamVjdE5hbWUgIT09ICdJbmJveCcpICYmIChwcm9qZWN0TmFtZSAhPT0gJ1RvZGF5JykgJiYgKHByb2plY3ROYW1lICE9PSAnVGhpcyB3ZWVrJykpIHtcbiAgICAgICAgcHJvakJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVCdG4oKSk7XG4gICAgICAgIHByb2pCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEJ0bigpKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnSW5ib3gnKSB7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3RUb0RPTShuZXdQcm9qZWN0Q29udGFpbmVyLCBwcm9qZWN0c0xpc3QpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otY29udGFpbmVyJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGFkZFByb2plY3RDb250YWluZXIpKTtcblxuICAgIHJldHVybiBhZGRQcm9qZWN0Q29udGFpbmVyO1xufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuXG4gICAgY29uc3QgYWRkUHJvakljb24gPSBuZXcgSW1hZ2UoMjAsIDIwKTtcbiAgICBhZGRQcm9qSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWljb24nKTtcbiAgICBhZGRQcm9qSWNvbi5zcmMgPSBhZGRJY29uO1xuXG4gICAgY29uc3QgYWRkUHJvalRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLXRleHQnKTtcbiAgICBhZGRQcm9qVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHByb2plY3QhJztcblxuICAgIGFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYWRkUHJvakljb24pO1xuICAgIGFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYWRkUHJvalRleHQpO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dChjb250YWluZXIpKTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGFkZFByb2plY3RCdG47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dCcpO1xuXG4gICAgY29uc3QgYWRkUHJvaklucHV0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBhZGRQcm9qSW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGNoZWNrSW5wdXQoYWRkUHJvamVjdElucHV0LnZhbHVlLCB0b0RvTGlzdCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoYWRkUHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkUHJvakNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2pDYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwnKTtcbiAgICBhZGRQcm9qQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2pCdG4oY29udGFpbmVyKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSAoMjAsIDIwKTtcbiAgICBhZGRQcm9qQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbC1pY29uJyk7XG4gICAgYWRkUHJvakNhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgICBhZGRQcm9qQ2FuY2VsLmFwcGVuZENoaWxkKGFkZFByb2pDYW5jZWxJY29uKTtcblxuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RJbnB1dCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvaklucHV0U3VibWl0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsKTtcblxuICAgIHJldHVybiBhZGRQcm9qZWN0Rm9ybTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bigpIHtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgyMCwgMjUpO1xuICAgIGRlbGV0ZVByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbC1wcm9qLWljb24nKTtcbiAgICBkZWxldGVQcm9qZWN0SWNvbi5zcmMgPSBkZWxldGVJY29uO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWwtYnRuJyk7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvbik7XG5cbiAgICBkZWxldGVQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNob3NlbkNvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjaG9zZW5Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHRvRG9MaXN0LmRlbGV0ZVByb2plY3QoY2hvc2VuQ29udGFpbmVyLmlkKTtcbiAgICAgICAgY2xlYXJBY3RpdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0RGVsZXRlQnRuO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRWRpdEJ0bigpIHtcbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvai1idG4nKTtcblxuICAgIGNvbnN0IGVkaXRQcm9qSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjUpO1xuICAgIGVkaXRQcm9qSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICBlZGl0UHJvakljb24uc3JjID0gZWRpdEljb247XG5cbiAgICBwcm9qZWN0RWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0UHJvakljb24pO1xuXG4gICAgZWRpdFByb2pJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAvLyBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdElucHV0KGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSkpOyAgICBcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdElucHV0KGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWNvbnRhaW5lcicpKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVkaXRCdG47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoY29udGFpbmVyKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1pbnB1dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYWRkUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otaW5wdXQnKTtcblxuICAgIGNvbnN0IGFkZFByb2pJbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2otc3VibWl0Jyk7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgYWRkUHJvaklucHV0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjaG9zZW5Qcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChjb250YWluZXIuaWQpO1xuICAgICAgICBjaG9zZW5Qcm9qZWN0LnNldE5hbWUoYWRkUHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdFVJKGNob3NlblByb2plY3QuZ2V0TmFtZSgpLCBmb2xkZXJJY29uKTtcbiAgICAgICAgY2xlYXJBY3RpdmUoKTtcbiAgICAgICAgY3JlYXRlQWN0aXZlUHJvamVjdFVJKGNob3NlblByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgcmVuZGVyVGFza3MoY2hvc2VuUHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvakNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgXG5cbiAgICBjb25zdCBhZGRQcm9qQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSAoMjAsIDIwKTtcbiAgICBhZGRQcm9qQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbC1pY29uJyk7XG4gICAgYWRkUHJvakNhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgICBhZGRQcm9qQ2FuY2VsSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLmVkaXQtaWNvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2pJbnB1dFN1Ym1pdCk7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdEZvcm07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IGFkZFRhc2tJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gICAgYWRkVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2staWNvbicpO1xuICAgIGFkZFRhc2tJY29uLnNyYyA9IGFkZEljb247XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tJY29uKTtcblxuICAgIGFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2staW5wdXQtY29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRm9ybShwcm9qZWN0Q29udGFpbmVyKSk7XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFkZFRhc2tCdG47XG59O1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2staW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlLWlucHV0Jyk7XG4gICAgdGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUtaW5wdXQnKTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICc1MCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuXG4gICAgY29uc3QgYWRkVGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGFkZFRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1zdWJtaXQnKTtcbiAgICBhZGRUYXNrU3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCB0YXNrISc7XG4gICAgYWRkVGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0b0RvTGlzdC5nZXRQcm9qZWN0KGNvbnRhaW5lci5pZCk7XG4gICAgICAgIGlmIChjaGVja0lucHV0KHRhc2tUaXRsZUlucHV0LnZhbHVlLCBwcm9qZWN0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGVJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSwgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUpOyBcbiAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIHRvRG9MaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgICAgICAgICAgdG9Eb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tVSShuZXdUYXNrLmdldE5hbWUoKSwgbmV3VGFzay5nZXREYXRlKCksIG5ld1Rhc2suZ2V0RGVzY3JpcHRpb24oKSwgYWN0aXZlVGFza3MpO1xuICAgICAgICAgICAgYWRkVGFza0Zvcm0ucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0NhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgIGFkZFRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGFkZFRhc2tDYW5jZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2otYnRuJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgYWRkVGFza0NhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkVGFza0NhbmNlbEljb24gPSBuZXcgSW1hZ2UgKDIwLCAyMCk7XG4gICAgYWRkVGFza0NhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwtaWNvbicpO1xuICAgIGFkZFRhc2tDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gICAgYWRkVGFza0NhbmNlbC5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsSWNvbik7XG5cbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tTdWJtaXQpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tDYW5jZWwpO1xuXG4gICAgcmV0dXJuIGFkZFRhc2tGb3JtO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVGFza1VJKHRhc2tUaXRsZSwgdGFza0RhdGUsIHRhc2tEZXNjcmlwdGlvbiwgY29udGFpbmVyKSB7XG5cbiAgICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tUaXRsZX1gKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgbmV3VGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGFza1RpdGxlfWA7XG5cbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIG5ld1Rhc2tEYXRlLnRleHRDb250ZW50ID0gYCR7dGFza0RhdGV9YDtcblxuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgaWYgKHRhc2tEZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFza0Rlc2NyaXB0aW9ufWA7XG4gICAgfTtcblxuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QuaWQgIT09ICdUb2RheScgJiYgYWN0aXZlUHJvamVjdC5pZCAhPT0gJ1RoaXMgd2VlaycpIHtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tEZWxldGVCdG4oKSk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRWRpdEJ0bigpKTtcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHByb2plY3QpIHtcbiAgICBpZiAocHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHByb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrVUkodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCB0YXNrLmdldERlc2NyaXB0aW9uKCksIGFjdGl2ZVRhc2tzKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyQWN0aXZlKCkge1xuICAgIGlmIChhY3RpdmVQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKSkge1xuICAgIGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpLnJlbW92ZSgpO1xuICAgIH07XG4gICAgaWYgKGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBhY3RpdmVUYXNrcy50ZXh0Q29udGVudCA9ICcnO1xuICAgIGFjdGl2ZVByb2plY3ROYW1lLnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGVsZXRlQnRuKCkge1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gICAgZGVsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnZGVsLXRhc2staWNvbicpO1xuICAgIGRlbGV0ZVRhc2tJY29uLnNyYyA9IGRlbGV0ZUljb247XG5cbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbC1idG4nKTtcbiAgICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tJY29uKTtcblxuICAgIGRlbGV0ZVRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hvc2VuUHJvamVjdCA9IHRvRG9MaXN0LmdldFByb2plY3QoZS50YXJnZXQuY2xvc2VzdCgnZGl2LmFjdGl2ZS1wcm9qZWN0JykuaWQpO1xuICAgICAgICBjaG9zZW5Qcm9qZWN0LmRlbGV0ZVRhc2soZS50YXJnZXQuY2xvc2VzdCgnZGl2LmFjdGl2ZS1wcm9qZWN0JykucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpLnRleHRDb250ZW50KTtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhc2tEZWxldGVCdG47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWRpdEJ0bigpIHtcbiAgICBjb25zdCBwcm9qZWN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvai1idG4nKTtcbiAgICBwcm9qZWN0RWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBwcm9qZWN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRWRpdEZvcm0oZS50YXJnZXQuY2xvc2VzdCgnLmFjdGl2ZS1wcm9qZWN0JykpKTsgICAgXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVkaXRCdG47XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWRpdEZvcm0oY29udGFpbmVyKSB7XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyLmlkKTtcbiAgICBjb25zdCBvbGRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgY29uc3Qgb2xkRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRhdGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBvbGREZXNjciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCBjaG9zZW5Qcm9qZWN0ID0gdG9Eb0xpc3QuZ2V0UHJvamVjdChjb250YWluZXIuaWQpO1xuICAgIGNvbnN0IGNob3NlblRhc2sgPSBjaG9zZW5Qcm9qZWN0LmdldFRhc2sob2xkVGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKGNob3NlblByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKGNob3NlblRhc2spO1xuXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1pbnB1dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSA9IG9sZFRpdGxlO1xuXG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0RhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRhdGUtaW5wdXQnKTtcbiAgICB0YXNrRGF0ZUlucHV0LnZhbHVlID0gb2xkRGF0ZTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICc1MCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gb2xkRGVzY3I7XG5cbiAgICBjb25zdCBhZGRUYXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYWRkVGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLXN1Ym1pdCcpO1xuICAgIGFkZFRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSAnRWRpdCB0YXNrISc7XG4gICAgYWRkVGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjaG9zZW5UYXNrLnNldE5hbWUodGFza1RpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICBjaG9zZW5UYXNrLnNldERhdGUodGFza0RhdGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNob3NlblRhc2suc2V0RGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUpO1xuICAgICAgICB0b0RvTGlzdC51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgICAgICAgdG9Eb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgY3JlYXRlVGFza1VJKGNob3NlblRhc2suZ2V0TmFtZSgpLCBjaG9zZW5UYXNrLmdldERhdGUoKSwgY2hvc2VuVGFzay5nZXREZXNjcmlwdGlvbigpLCBhY3RpdmVUYXNrcyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0NhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qLWNhbmNlbCcpO1xuICAgIGFkZFRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tDYW5jZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2otYnRuJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgYWRkVGFza0NhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkVGFza0NhbmNlbEljb24gPSBuZXcgSW1hZ2UgKDIwLCAyMCk7XG4gICAgYWRkVGFza0NhbmNlbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvai1jYW5jZWwtaWNvbicpO1xuICAgIGFkZFRhc2tDYW5jZWxJY29uLnNyYyA9IGNhbmNlbEljb247XG4gICAgYWRkVGFza0NhbmNlbC5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsSWNvbik7XG5cbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGVJbnB1dCk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tTdWJtaXQpO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tDYW5jZWwpO1xuXG4gICAgcmV0dXJuIGFkZFRhc2tGb3JtO1xufTtcblxuZnVuY3Rpb24gY2hlY2tJbnB1dChvYmplY3ROYW1lLCBwYXJlbnROYW1lKSB7XG4gICAgaWYgKHBhcmVudE5hbWUuY29udGFpbnMob2JqZWN0TmFtZSkpIHtcbiAgICAgICAgYWxlcnQoJ1RoZSBuYW1lIHNob3VsZCBub3QgYmUgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIG9uZXMnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59O1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlQWN0aXZlUHJvamVjdFVJKHByb2plY3ROYW1lKSB7XG4gICAgYWN0aXZlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgYWN0aXZlUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgIGlmIChhY3RpdmVQcm9qZWN0LmlkICE9PSAnVG9kYXknICYmIGFjdGl2ZVByb2plY3QuaWQgIT09ICdUaGlzIHdlZWsnKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVGFza0J0bigpKTtcbiAgICB9O1xuXG4gICAgYWRkUHJvamVjdFRvRE9NKGFjdGl2ZVByb2plY3QsIGFjdGl2ZVNwYWNlICk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9