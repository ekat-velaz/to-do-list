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

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button,
input[type="submit"],
input[type="reset"] {
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
  font-family: "Caprasimo";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
  --purple: #b799ff;
  --lighterPurple: #acbcff;
  --blue: #aee2ff;
  --lighterBlue: #e6fffd;
  --red: rgb(213, 120, 120);
  --transparentPurple: #b899ffb5;
  --transparentDarkerBlue: #acbdffba;
  --transparentBlue: #aee3ffbe;
  --transparentLighterBlue: #e6fffdc7;
  font-family: "Caprasimo";
}

body {
  /* height: 100vh; */
  width: 100vw;
  background-color: var(--blue);
}

#main {
  height: 100%;
  width: 100%;
  display: grid;

  /* grid-template-rows: 1.5fr 7fr 1fr; */
}

/* Header styling */
#header {
  width: 100%;
  background-color: var(--purple);
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  gap: 20px;
  padding: 10px 0;
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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--purple);
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: var(--lighterBlue);
  padding: 5px 0;
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
  filter: invert(100%) sepia(99%) saturate(295%) hue-rotate(104deg)
    brightness(107%) contrast(105%);
}

/* Projects space styling */
#content {
  min-height: 100vh;
  max-height: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 5fr;
  font-size: 18px;
  margin-bottom: 50px;
}

#projects-container {
  background-color: var(--lighterPurple);
  display: grid;
  color: var(--lighterBlue);
  padding: 10px;
  gap: 10px;
  align-content: start;
  /* min-width: fit-content; */
  /* width: max(30vw, 200px); */
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
  gap: 10px;
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
  height: fit-content;
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
  gap: 5px;
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
  width: max(30vw, 250px);
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

  height: fit-content;
}

.task-description {
  height: fit-content;
}

.task-btn-container {
  justify-self: end;
  display: grid;
  grid-auto-flow: column;
  gap: 7px;
}

.error {
  padding: 5px;
  background-color: var(--red);
  color: var(--lighterBlue);
  justify-self: center;
}

#add-task-input-container > .error {
  width: fit-content;
}

input:invalid {
  border: var(--red) solid 2px;
}

form {
  border: var(--lighterBlue) solid 1px;
}

@media (max-width: 600px) {
  #content {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-template-rows: 1fr 5fr;
  }

  #projects-container {
    /* max-height: fit-content; */
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n/* General space styling */\n@font-face {\n  font-family: \"Caprasimo\";\n  src: url(/src/Caprasimo/Caprasimo-Regular.ttf);\n}\n\n:root {\n  --purple: #b799ff;\n  --lighterPurple: #acbcff;\n  --blue: #aee2ff;\n  --lighterBlue: #e6fffd;\n  --red: rgb(213, 120, 120);\n  --transparentPurple: #b899ffb5;\n  --transparentDarkerBlue: #acbdffba;\n  --transparentBlue: #aee3ffbe;\n  --transparentLighterBlue: #e6fffdc7;\n  font-family: \"Caprasimo\";\n}\n\nbody {\n  /* height: 100vh; */\n  width: 100vw;\n  background-color: var(--blue);\n}\n\n#main {\n  height: 100%;\n  width: 100%;\n  display: grid;\n\n  /* grid-template-rows: 1.5fr 7fr 1fr; */\n}\n\n/* Header styling */\n#header {\n  width: 100%;\n  background-color: var(--purple);\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n  padding: 10px 0;\n}\n\n#logo {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  gap: 20px;\n}\n\n#logo-name {\n  color: var(--lighterBlue);\n  font-size: 32px;\n}\n\n/* Footer styling */\n#footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: var(--purple);\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: var(--lighterBlue);\n  padding: 5px 0;\n}\n\n/* Change svg color */\n.project-icon,\n#add-proj-icon,\n#add-proj-cancel-icon,\n.del-proj-icon,\n.add-task-icon,\n#logo-pic,\n#github-icon,\n.edit-icon,\n.del-task-icon,\n.edit-task-icon {\n  filter: invert(100%) sepia(99%) saturate(295%) hue-rotate(104deg)\n    brightness(107%) contrast(105%);\n}\n\n/* Projects space styling */\n#content {\n  min-height: 100vh;\n  max-height: max-content;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr 5fr;\n  font-size: 18px;\n  margin-bottom: 50px;\n}\n\n#projects-container {\n  background-color: var(--lighterPurple);\n  display: grid;\n  color: var(--lighterBlue);\n  padding: 10px;\n  gap: 10px;\n  align-content: start;\n  /* min-width: fit-content; */\n  /* width: max(30vw, 200px); */\n}\n\n#projects-list {\n  display: grid;\n  gap: 5px;\n  align-content: start;\n}\n\n.styling-proj-container {\n  display: grid;\n  gap: 5px;\n  padding: 10px;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  border-radius: 3px;\n}\n\n.project {\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n  justify-content: start;\n  gap: 5px;\n}\n\n.proj-btn-container {\n  display: grid;\n  justify-content: end;\n  grid-auto-flow: column;\n  gap: 5px;\n}\n\n.active-container,\n.add-project-btn:hover,\n.project-container:hover,\n.add-task-btn:hover {\n  background-color: var(--purple);\n  font-weight: bold;\n  border-radius: 3px;\n}\n\n.add-project-btn {\n  display: grid;\n  padding: 10px;\n  grid-auto-flow: column;\n  justify-content: center;\n  gap: 10px;\n}\n\n#add-proj-input-container {\n  background-color: var(--purple);\n  padding: 10px;\n  display: grid;\n  gap: 10px;\n}\n\n#input-btn-container {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n  justify-self: end;\n}\n\n#add-proj-submit {\n  background-color: var(--lighterBlue);\n  color: var(--purple);\n  padding: 3px;\n  border-radius: 3px;\n}\n\ninput {\n  border: none;\n  border-radius: 3px;\n  height: 20px;\n  background-color: var(--lighterBlue);\n  padding-left: 5px;\n}\ntextarea {\n  background-color: var(--lighterBlue);\n  border: none;\n  border-radius: 3px;\n  padding-left: 5px;\n}\n\n/* Active space styling */\n#active-space {\n  padding: 20px;\n  display: grid;\n  align-content: start;\n  color: var(--purple);\n  height: fit-content;\n}\n\n#active-project-name {\n  font-size: 36px;\n  color: var(--lighterBlue);\n  background-color: var(--purple);\n  padding: 10px 20px 10px 30px;\n  border-radius: 3px;\n}\n\n.add-task-btn {\n  justify-self: center;\n}\n\n.active-project {\n  display: grid;\n  gap: 5px;\n}\n\n#add-task-input-container {\n  place-self: center;\n  display: grid;\n  place-content: center;\n  gap: 5px;\n  background-color: var(--purple);\n  padding: 10px;\n  padding-bottom: 25px;\n  border-radius: 3px;\n  width: max(30vw, 250px);\n  height: fit-content;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  z-index: 1000;\n}\n\n#add-proj-cancel {\n  justify-self: end;\n}\n\n#add-task-submit {\n  background-color: var(--lighterBlue);\n  color: var(--purple);\n  padding: 10px;\n  border-radius: 3px;\n  justify-self: end;\n}\n\n#active-tasks {\n  display: grid;\n  gap: 5px;\n}\n\n.task-container:hover {\n  background-color: var(--purple);\n}\n\n.task-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr 1fr 2fr 0.5fr;\n  gap: 10px;\n  align-items: center;\n  background-color: var(--lighterPurple);\n  color: var(--lighterBlue);\n  padding: 10px;\n  border-radius: 3px;\n\n  height: fit-content;\n}\n\n.task-description {\n  height: fit-content;\n}\n\n.task-btn-container {\n  justify-self: end;\n  display: grid;\n  grid-auto-flow: column;\n  gap: 7px;\n}\n\n.error {\n  padding: 5px;\n  background-color: var(--red);\n  color: var(--lighterBlue);\n  justify-self: center;\n}\n\n#add-task-input-container > .error {\n  width: fit-content;\n}\n\ninput:invalid {\n  border: var(--red) solid 2px;\n}\n\nform {\n  border: var(--lighterBlue) solid 1px;\n}\n\n@media (max-width: 600px) {\n  #content {\n    grid-template-columns: 1fr;\n    grid-auto-flow: row;\n    grid-template-rows: 1fr 5fr;\n  }\n\n  #projects-container {\n    /* max-height: fit-content; */\n  }\n}\n"],"sourceRoot":""}]);
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
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(
      new _toDoList__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem("todoList"))
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
    );

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new _taskLogic__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
        )
      );

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
    todoList
      .getProject(projectName)
      .getTask(taskName)
      .setDescription(newDescription);
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

const projectsList = document.getElementById("projects-list");
const activeSpace = document.getElementById("active-space");
const activeProject = document.querySelector(".active-project");
const activeProjectName = document.getElementById("active-project-name");
const activeTasks = document.getElementById("active-tasks");

function showProjects() {
  createHeader();
  createFooter();
  createDefaultProjects();
  loadProjects();

  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.appendChild(addProjectUI());
}

function loadProjects() {
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
    .getProjects()
    .forEach((project) => {
      if (
        project.name !== "Inbox" &&
        project.name !== "Today" &&
        project.name !== "This week"
      ) {
        createProjectUI(project.name);
      }
    });
}

function loadTasks(projectName) {
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
    .getProject(projectName)
    .getTasks()
    .forEach((task) =>
      createTaskUI(task.getName(), task.getDate(), task.getDescription())
    );
}

function createHeader() {
  const headerContainer = document.getElementById("header");

  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");

  const logoName = document.createElement("div");
  logoName.setAttribute("id", "logo-name");
  logoName.textContent = "ToDo-List";

  const logoPic = new Image(50, 50);
  logoPic.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_11__;
  logoPic.setAttribute("id", "logo-pic");

  logo.appendChild(logoPic);
  logo.appendChild(logoName);

  headerContainer.appendChild(logo);

  return headerContainer;
}

function createFooter() {
  const footerContainer = document.getElementById("footer");

  const copyright = document.createElement("div");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} ekat-velaz`;
  copyright.setAttribute("id", "copyright");

  const githubLink = document.createElement("a");
  githubLink.setAttribute("id", "github-link");
  githubLink.href = "https://github.com/ekat-velaz";

  const githubIcon = new Image(50, 50);
  githubIcon.setAttribute("id", "github-icon");
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
  const inbox = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]("Inbox");
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(inbox);
  createProjectUI(inbox.getName());

  const today = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]("Today");
  _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(today);
  createProjectUI(today.getName());

  const thisWeek = new _projectLogic__WEBPACK_IMPORTED_MODULE_1__["default"]("This week");
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
  const newProjectContainer = document.createElement("div");
  newProjectContainer.classList.add("project-container");
  newProjectContainer.setAttribute("id", `${projectName}`);

  const stylingProjContainer = document.createElement("div");
  stylingProjContainer.classList.add("styling-proj-container");

  const newProject = document.createElement("button");
  newProject.classList.add("project");
  newProject.addEventListener("click", (e) => {
    const chosenProject = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(
      `${e.target.closest(".project-container").id}`
    );
    toDoList.updateTodayProject();
    toDoList.updateWeekProject();
    clearActive();
    createActiveProjectUI(chosenProject.getName());
    renderTasks(chosenProject.getTasks());
    setActiveProject(newProject, stylingProjContainer);
  });

  const projectIcon = new Image(30, 30);
  projectIcon.classList.add("project-icon");

  const projectText = document.createElement("div");
  projectText.classList.add("project-text");
  projectText.textContent = `${projectName}`;

  const projBtnContainer = document.createElement("div");
  projBtnContainer.classList.add("proj-btn-container");

  newProject.appendChild(projectIcon);
  newProject.appendChild(projectText);
  stylingProjContainer.appendChild(newProject);
  stylingProjContainer.appendChild(projBtnContainer);

  newProjectContainer.appendChild(stylingProjContainer);

  if (projectName === "Inbox") {
    projectIcon.src = _images_inbox_multiple_svg__WEBPACK_IMPORTED_MODULE_4__;
    setActiveProject(newProject, stylingProjContainer);
    createActiveProjectUI(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject("Inbox").getName());
    loadTasks("Inbox");
  } else if (projectName === "Today") {
    projectIcon.src = _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_5__;
  } else if (projectName === "This week") {
    projectIcon.src = _images_calendar_week_svg__WEBPACK_IMPORTED_MODULE_6__;
  } else {
    projectIcon.src = _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_7__;
    projBtnContainer.appendChild(createDeleteBtn());
    projBtnContainer.appendChild(createEditBtn());
  }

  addProjectToDOM(newProjectContainer, projectsList);
}

const addProjectUI = () => {
  const addProjectContainer = document.createElement("div");
  addProjectContainer.setAttribute("id", "add-proj-container");
  addProjectContainer.appendChild(createAddProjBtn(addProjectContainer));

  return addProjectContainer;
};

function createAddProjBtn(container) {
  const addProjectBtn = document.createElement("btn");
  addProjectBtn.classList.add("add-project-btn");

  const addProjIcon = new Image(20, 20);
  addProjIcon.setAttribute("id", "add-proj-icon");
  addProjIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_9__;

  const addProjText = document.createElement("div");
  addProjText.setAttribute("id", "add-proj-text");
  addProjText.textContent = "Add project";

  addProjectBtn.appendChild(addProjIcon);
  addProjectBtn.appendChild(addProjText);

  addProjectBtn.addEventListener("click", () => {
    container.textContent = "";
    container.appendChild(createInput(container));
  });

  return addProjectBtn;
}

function createInput(container) {
  const addProjectForm = document.createElement("form");
  addProjectForm.setAttribute("id", "add-proj-input-container");

  const addProjectInput = document.createElement("input");
  addProjectInput.setAttribute("id", "add-proj-input");
  addProjectInput.required = true;

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");

  const inputBtnContainer = document.createElement("div");
  inputBtnContainer.setAttribute("id", "input-btn-container");

  const addProjInputSubmit = document.createElement("btn");
  addProjInputSubmit.setAttribute("type", "submit");
  addProjInputSubmit.setAttribute("id", "add-proj-submit");
  addProjInputSubmit.textContent = "Add";
  addProjInputSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      checkInput(
        addProjectInput,
        errorSpan,
        addProjectForm,
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
      ) === false
    ) {
      createNewProject(addProjectInput.value);
      container.textContent = "";
      container.appendChild(createAddProjBtn(container));
    }
  });

  const addProjCancel = document.createElement("button");
  addProjCancel.setAttribute("id", "add-proj-cancel");
  addProjCancel.addEventListener("click", () => {
    container.textContent = "";
    container.appendChild(createAddProjBtn(container));
  });

  const addProjCancelIcon = new Image(23, 23);
  addProjCancelIcon.setAttribute("id", "add-proj-cancel-icon");
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
  deleteProjectIcon.classList.add("del-proj-icon");
  deleteProjectIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_8__;

  const projectDeleteBtn = document.createElement("button");
  projectDeleteBtn.classList.add("project-del-btn");
  projectDeleteBtn.appendChild(deleteProjectIcon);

  deleteProjectIcon.addEventListener("click", (e) => {
    const chosenContainer = e.target.closest(".project-container");
    chosenContainer.remove();
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(chosenContainer.id);
    clearActive();
  });

  return projectDeleteBtn;
}

function createEditBtn() {
  const projectEditBtn = document.createElement("button");
  projectEditBtn.classList.add("edit-proj-btn");

  const editProjIcon = new Image(20, 25);
  editProjIcon.classList.add("edit-icon");
  editProjIcon.src = _images_pencil_svg__WEBPACK_IMPORTED_MODULE_13__;

  projectEditBtn.appendChild(editProjIcon);

  editProjIcon.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    e.target
      .closest(".project-container")
      .appendChild(createEditInput(e.target.closest(".project-container")));
  });

  return projectEditBtn;
}

function createEditInput(container) {
  const addProjectForm = document.createElement("form");
  addProjectForm.setAttribute("id", "add-proj-input-container");

  const addProjectInput = document.createElement("input");
  addProjectInput.setAttribute("id", "add-proj-input");
  addProjectInput.required = true;

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");

  const inputBtnContainer = document.createElement("div");
  inputBtnContainer.setAttribute("id", "input-btn-container");

  const addProjInputSubmit = document.createElement("btn");
  addProjInputSubmit.setAttribute("type", "submit");
  addProjInputSubmit.setAttribute("id", "add-proj-submit");
  addProjInputSubmit.textContent = "Change name";
  addProjInputSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      checkInput(
        addProjectInput,
        errorSpan,
        addProjectForm,
        _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
      ) === false
    ) {
      const chosenProject = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(container.id);
      chosenProject.setName(addProjectInput.value);
      createProjectUI(chosenProject.getName());
      clearActive();
      createActiveProjectUI(chosenProject.getName());
      renderTasks(chosenProject.getTasks());
      container.remove();
    }
  });

  const addProjCancel = document.createElement("button");
  addProjCancel.setAttribute("id", "add-proj-cancel");

  const addProjCancelIcon = new Image(20, 20);
  addProjCancelIcon.setAttribute("id", "add-proj-cancel-icon");
  addProjCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_10__;
  addProjCancelIcon.addEventListener("click", (e) => {
    e.target
      .closest(".project-container")
      .querySelector(".edit-icon").style.visibility = "visible";
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
  addTaskIcon.classList.add("add-task-icon");
  addTaskIcon.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_9__;

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("add-task-btn");
  addTaskBtn.appendChild(addTaskIcon);

  addTaskIcon.addEventListener("click", (e) => {
    const projectContainer = e.target.parentNode.parentNode;
    if (document.querySelector("#add-task-input-container")) {
      document.querySelector("#add-task-input-container").remove();
    }
    projectContainer.appendChild(createTaskForm(projectContainer));
  });

  return addTaskBtn;
}

function createTaskForm(container) {
  const addTaskForm = document.createElement("form");
  addTaskForm.setAttribute("id", "add-task-input-container");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("id", "task-title-input");
  taskTitleInput.required = true;
  taskTitleInput.placeholder = "Task title";

  const taskDateInput = document.createElement("input");
  taskDateInput.setAttribute("type", "date");
  taskDateInput.setAttribute("id", "task-date-input");

  const taskDescriptionInput = document.createElement("textarea");
  taskDescriptionInput.setAttribute("rows", "4");
  taskDescriptionInput.setAttribute("cols", "50");
  taskDescriptionInput.setAttribute("id", "task-description-input");
  taskDescriptionInput.placeholder = "Any notes?";

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");

  const addTaskSubmit = document.createElement("button");
  addTaskSubmit.setAttribute("type", "submit");
  addTaskSubmit.setAttribute("id", "add-task-submit");
  addTaskSubmit.textContent = "Add task!";
  addTaskSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const project = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(container.id);
    console.log(project);
    if (checkInput(taskTitleInput, errorSpan, addTaskForm, project) === false) {
      const newTask = new _taskLogic__WEBPACK_IMPORTED_MODULE_2__["default"](
        taskTitleInput.value,
        taskDateInput.value,
        taskDescriptionInput.value
      );
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(project.getName(), newTask);
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodayProject();
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateWeekProject();
      createTaskUI(
        newTask.getName(),
        newTask.getDate(),
        newTask.getDescription()
      );
      addTaskForm.remove();
    }
  });

  const addTaskCancel = document.createElement("button");
  addTaskCancel.setAttribute("id", "add-proj-cancel");
  addTaskCancel.addEventListener("click", () => {
    addTaskCancel.parentNode.remove();
  });

  const addTaskCancelIcon = new Image(20, 20);
  addTaskCancelIcon.setAttribute("id", "add-proj-cancel-icon");
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
  const newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("task-container");
  newTaskContainer.setAttribute("id", `${taskTitle}`);

  const newTaskTitle = document.createElement("div");
  newTaskTitle.classList.add("task-title");
  newTaskTitle.textContent = `${taskTitle}`;

  const newTaskDate = document.createElement("div");
  newTaskDate.classList.add("task-date");
  newTaskDate.textContent = `${taskDate}`;

  const newTaskDescription = document.createElement("div");
  newTaskDescription.classList.add("task-description");
  if (taskDescription === undefined) {
    newTaskDescription.textContent = "";
  } else {
    newTaskDescription.textContent = `${taskDescription}`;
  }

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-btn-container");

  newTaskContainer.appendChild(newTaskTitle);
  newTaskContainer.appendChild(newTaskDate);
  newTaskContainer.appendChild(newTaskDescription);
  newTaskContainer.appendChild(btnContainer);

  if (activeProject.id !== "Today" && activeProject.id !== "This week") {
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
    createTaskUI(
      task.getName(),
      task.getDate(),
      task.getDescription(),
      activeTasks
    );
  });
}

function setActiveProject(project, container) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (project !== this) {
      project.classList.remove("active");
    }
  });
  project.classList.add("active");

  const containers = document.querySelectorAll(".styling-proj-container");
  containers.forEach((container) => {
    if (container !== this) {
      container.classList.remove("active-container");
    }
  });
  container.classList.add("active-container");
}

function clearActive() {
  if (activeProject.querySelector(".add-task-btn")) {
    activeProject.querySelector(".add-task-btn").remove();
  }
  if (activeProject.querySelector("#add-task-input-container")) {
    activeProject.querySelector("#add-task-input-container").remove();
  }
  activeTasks.textContent = "";
  activeProjectName.textContent = "";
}

function createTaskDeleteBtn() {
  const deleteTaskIcon = new Image(20, 25);
  deleteTaskIcon.classList.add("del-task-icon");
  deleteTaskIcon.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_8__;

  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.classList.add("task-del-btn");
  taskDeleteBtn.appendChild(deleteTaskIcon);

  deleteTaskIcon.addEventListener("click", (e) => {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(
      e.target.closest("div.active-project").id,
      e.target.closest("div.active-project").querySelector(".task-title")
        .textContent
    );
    e.target.closest(".task-container").remove();
  });

  return taskDeleteBtn;
}

function createTaskEditBtn() {
  const editTaskIcon = new Image(20, 25);
  editTaskIcon.classList.add("edit-task-icon");
  editTaskIcon.src = _images_pencil_svg__WEBPACK_IMPORTED_MODULE_13__;

  const taskEditBtn = document.createElement("button");
  taskEditBtn.classList.add("edit-task-btn");
  taskEditBtn.appendChild(editTaskIcon);

  editTaskIcon.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    e.target
      .closest(".task-container")
      .appendChild(
        createTaskEditForm(
          e.target.closest(".active-project"),
          e.target.closest(".task-container")
        )
      );
  });

  return taskEditBtn;
}

function createTaskEditForm(container, taskContainer) {
  const oldTitle = taskContainer.querySelector(".task-title").textContent;
  const oldDate = taskContainer.querySelector(".task-date").textContent;
  const oldDescr = taskContainer.querySelector(".task-description").textContent;

  const chosenProject = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList().getProject(container.id);

  const addTaskForm = document.createElement("form");
  addTaskForm.setAttribute("id", "add-task-input-container");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("id", "task-title-input");
  taskTitleInput.value = oldTitle;
  taskTitleInput.placeholder = "Task title";
  taskTitleInput.required = true;

  const taskDateInput = document.createElement("input");
  taskDateInput.setAttribute("type", "date");
  taskDateInput.setAttribute("id", "task-date-input");
  taskDateInput.value = oldDate;

  const taskDescriptionInput = document.createElement("textarea");
  taskDescriptionInput.setAttribute("rows", "4");
  taskDescriptionInput.setAttribute("cols", "50");
  taskDescriptionInput.setAttribute("id", "task-description-input");
  taskDescriptionInput.value = oldDescr;
  taskDescriptionInput.placeholder = "Any notes?";

  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error");

  const addTaskSubmit = document.createElement("button");
  addTaskSubmit.setAttribute("type", "submit");
  addTaskSubmit.setAttribute("id", "add-task-submit");
  addTaskSubmit.textContent = "Edit task!";
  addTaskSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      checkInput(taskTitleInput, errorSpan, addTaskForm, chosenProject) ===
      false
    ) {
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].renameTask(
        chosenProject.getName(),
        oldTitle,
        taskTitleInput.value
      );
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setTaskDate(
        chosenProject.getName(),
        taskTitleInput.value,
        taskDateInput.value
      );
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].setTaskDescription(
        chosenProject.getName(),
        taskTitleInput.value,
        taskDescriptionInput.value
      );
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodayProject();
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].updateWeekProject();
      const chosenTask = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getTodoList()
        .getProject(chosenProject.getName())
        .getTask(taskTitleInput.value);
      createTaskUI(
        chosenTask.getName(),
        chosenTask.getDate(),
        chosenTask.getDescription(),
        activeTasks
      );
      event.target.closest(".task-container").remove();
    }
  });

  const addTaskCancel = document.createElement("button");
  addTaskCancel.setAttribute("id", "add-proj-cancel");
  addTaskCancel.addEventListener("click", () => {
    addTaskCancel
      .closest(".task-container")
      .querySelector(".edit-task-icon").style.visibility = "visible";
    addTaskCancel.parentNode.remove();
  });

  const addTaskCancelIcon = new Image(20, 20);
  addTaskCancelIcon.setAttribute("id", "add-proj-cancel-icon");
  addTaskCancelIcon.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_10__;
  addTaskCancel.appendChild(addTaskCancelIcon);

  addTaskForm.appendChild(addTaskCancel);
  addTaskForm.appendChild(taskTitleInput);
  addTaskForm.appendChild(taskDateInput);
  addTaskForm.appendChild(taskDescriptionInput);
  addTaskForm.appendChild(addTaskSubmit);

  return addTaskForm;
}

function createActiveProjectUI(projectName) {
  activeProject.setAttribute("id", `${projectName}`);
  activeProjectName.textContent = `${projectName}`;
  if (activeProject.id !== "Today" && activeProject.id !== "This week") {
    activeProject.appendChild(createAddTaskBtn());
  }

  addProjectToDOM(activeProject, activeSpace);
}

function checkInput(input, errorContainer, formContainer, parent) {
  if (parent.contains(input.value)) {
    formContainer.appendChild(errorContainer);
    errorContainer.textContent =
      "The name should not be the same as the previous ones";
    return true;
  }
  if (input.validity.valueMissing) {
    formContainer.appendChild(errorContainer);
    errorContainer.textContent = "This field cannot be blank";
    return true;
  }
  return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43Y2VjMTFjMjhkODM5YzBjZDZjYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsZ0tBQXVEO0FBQ25HLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsT0FBTyxNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxlQUFlLEtBQUssT0FBTyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sUUFBUSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEs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LGdEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFPO0FBQ2IsTUFBTSxnREFBTztBQUNiLHlCQUF5QixnREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQVU7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1ckJlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RMb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3dlYnNpdGVVSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9DYXByYXNpbW8vQ2FwcmFzaW1vLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCAqL1xuXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbn1cblxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2FwcmFzaW1vXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG46cm9vdCB7XG4gIC0tcHVycGxlOiAjYjc5OWZmO1xuICAtLWxpZ2h0ZXJQdXJwbGU6ICNhY2JjZmY7XG4gIC0tYmx1ZTogI2FlZTJmZjtcbiAgLS1saWdodGVyQmx1ZTogI2U2ZmZmZDtcbiAgLS1yZWQ6IHJnYigyMTMsIDEyMCwgMTIwKTtcbiAgLS10cmFuc3BhcmVudFB1cnBsZTogI2I4OTlmZmI1O1xuICAtLXRyYW5zcGFyZW50RGFya2VyQmx1ZTogI2FjYmRmZmJhO1xuICAtLXRyYW5zcGFyZW50Qmx1ZTogI2FlZTNmZmJlO1xuICAtLXRyYW5zcGFyZW50TGlnaHRlckJsdWU6ICNlNmZmZmRjNztcbiAgZm9udC1mYW1pbHk6IFwiQ2FwcmFzaW1vXCI7XG59XG5cbmJvZHkge1xuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4jbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciA3ZnIgMWZyOyAqL1xufVxuXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xuI2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuI2xvZ28ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbiNsb2dvLW5hbWUge1xuICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi8qIEZvb3RlciBzdHlsaW5nICovXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLyogQ2hhbmdlIHN2ZyBjb2xvciAqL1xuLnByb2plY3QtaWNvbixcbiNhZGQtcHJvai1pY29uLFxuI2FkZC1wcm9qLWNhbmNlbC1pY29uLFxuLmRlbC1wcm9qLWljb24sXG4uYWRkLXRhc2staWNvbixcbiNsb2dvLXBpYyxcbiNnaXRodWItaWNvbixcbi5lZGl0LWljb24sXG4uZGVsLXRhc2staWNvbixcbi5lZGl0LXRhc2staWNvbiB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMjk1JSkgaHVlLXJvdGF0ZSgxMDRkZWcpXG4gICAgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDUlKTtcbn1cblxuLyogUHJvamVjdHMgc3BhY2Ugc3R5bGluZyAqL1xuI2NvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4jcHJvamVjdHMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlclB1cnBsZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gIC8qIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7ICovXG4gIC8qIHdpZHRoOiBtYXgoMzB2dywgMjAwcHgpOyAqL1xufVxuXG4jcHJvamVjdHMtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbn1cblxuLnN0eWxpbmctcHJvai1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5wcm9qZWN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgZ2FwOiA1cHg7XG59XG5cbi5wcm9qLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5hY3RpdmUtY29udGFpbmVyLFxuLmFkZC1wcm9qZWN0LWJ0bjpob3Zlcixcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3Zlcixcbi5hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI2FkZC1wcm9qLWlucHV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbn1cblxuI2lucHV0LWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jYWRkLXByb2otc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbnRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8qIEFjdGl2ZSBzcGFjZSBzdHlsaW5nICovXG4jYWN0aXZlLXNwYWNlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jYWN0aXZlLXByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xufVxuXG4jYWRkLXRhc2staW5wdXQtY29udGFpbmVyIHtcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogbWF4KDMwdncsIDI1MHB4KTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogMTAwMDtcbn1cblxuI2FkZC1wcm9qLWNhbmNlbCB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jYWRkLXRhc2stc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuI2FjdGl2ZS10YXNrcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xufVxuXG4udGFzay1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyIDAuNWZyO1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXJQdXJwbGUpO1xuICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4udGFzay1idG4tY29udGFpbmVyIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuXG4uZXJyb3Ige1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG4gIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jYWRkLXRhc2staW5wdXQtY29udGFpbmVyID4gLmVycm9yIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5pbnB1dDppbnZhbGlkIHtcbiAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweDtcbn1cblxuZm9ybSB7XG4gIGJvcmRlcjogdmFyKC0tbGlnaHRlckJsdWUpIHNvbGlkIDFweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNjb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcbiAgfVxuXG4gICNwcm9qZWN0cy1jb250YWluZXIge1xuICAgIC8qIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50OyAqL1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFFVjs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FB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QzFCLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCAqL1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuLyogR2VuZXJhbCBzcGFjZSBzdHlsaW5nICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNhcHJhc2ltb1xcXCI7XFxuICBzcmM6IHVybCgvc3JjL0NhcHJhc2ltby9DYXByYXNpbW8tUmVndWxhci50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXB1cnBsZTogI2I3OTlmZjtcXG4gIC0tbGlnaHRlclB1cnBsZTogI2FjYmNmZjtcXG4gIC0tYmx1ZTogI2FlZTJmZjtcXG4gIC0tbGlnaHRlckJsdWU6ICNlNmZmZmQ7XFxuICAtLXJlZDogcmdiKDIxMywgMTIwLCAxMjApO1xcbiAgLS10cmFuc3BhcmVudFB1cnBsZTogI2I4OTlmZmI1O1xcbiAgLS10cmFuc3BhcmVudERhcmtlckJsdWU6ICNhY2JkZmZiYTtcXG4gIC0tdHJhbnNwYXJlbnRCbHVlOiAjYWVlM2ZmYmU7XFxuICAtLXRyYW5zcGFyZW50TGlnaHRlckJsdWU6ICNlNmZmZmRjNztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FwcmFzaW1vXFxcIjtcXG59XFxuXFxuYm9keSB7XFxuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNtYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgN2ZyIDFmcjsgKi9cXG59XFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG4jaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbG9nby1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuI2Zvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi8qIENoYW5nZSBzdmcgY29sb3IgKi9cXG4ucHJvamVjdC1pY29uLFxcbiNhZGQtcHJvai1pY29uLFxcbiNhZGQtcHJvai1jYW5jZWwtaWNvbixcXG4uZGVsLXByb2otaWNvbixcXG4uYWRkLXRhc2staWNvbixcXG4jbG9nby1waWMsXFxuI2dpdGh1Yi1pY29uLFxcbi5lZGl0LWljb24sXFxuLmRlbC10YXNrLWljb24sXFxuLmVkaXQtdGFzay1pY29uIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMjk1JSkgaHVlLXJvdGF0ZSgxMDRkZWcpXFxuICAgIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi8qIFByb2plY3RzIHNwYWNlIHN0eWxpbmcgKi9cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXJQdXJwbGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAvKiBtaW4td2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbiAgLyogd2lkdGg6IG1heCgzMHZ3LCAyMDBweCk7ICovXFxufVxcblxcbiNwcm9qZWN0cy1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uc3R5bGluZy1wcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvai1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFjdGl2ZS1jb250YWluZXIsXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIsXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNhZGQtcHJvai1pbnB1dC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jaW5wdXQtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jYWRkLXByb2otc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxudGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi8qIEFjdGl2ZSBzcGFjZSBzdHlsaW5nICovXFxuI2FjdGl2ZS1zcGFjZSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNhZGQtdGFzay1pbnB1dC1jb250YWluZXIge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHdpZHRoOiBtYXgoMzB2dywgMjUwcHgpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbiNhZGQtcHJvai1jYW5jZWwge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiNhZGQtdGFzay1zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlckJsdWUpO1xcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiNhY3RpdmUtdGFza3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmciAwLjVmcjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyUHVycGxlKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVyQmx1ZSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcblxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiA3cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXJCbHVlKTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRhc2staW5wdXQtY29udGFpbmVyID4gLmVycm9yIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXI6IHZhcigtLXJlZCkgc29saWQgMnB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGJvcmRlcjogdmFyKC0tbGlnaHRlckJsdWUpIHNvbGlkIDFweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxuICB9XFxuXFxuICAjcHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgLyogbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7ICovXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaG93UHJvamVjdHMgZnJvbSAnLi93ZWJzaXRlVUknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnNob3dQcm9qZWN0cygpO1xuIiwiaW1wb3J0IHtcbiAgdG9EYXRlLCBpc1RvZGF5LCBpc1RoaXNXZWVrLCBzdWJEYXlzLFxufSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB9XG5cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH1cblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgY29udGFpbnModGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrTmFtZSkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSB0YXNrTmFtZSk7XG4gIH1cblxuICBnZXRUYXNrc1RvZGF5KCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGUoKSk7XG4gICAgICByZXR1cm4gaXNUb2RheSh0b0RhdGUodGFza0RhdGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhc2tzVGhpc1dlZWsoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKTtcbiAgICAgIHJldHVybiBpc1RoaXNXZWVrKHN1YkRheXModG9EYXRlKHRhc2tEYXRlKSwgMSkpO1xuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IFRvRG9MaXN0IGZyb20gXCIuL3RvRG9MaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0TG9naWNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tMb2dpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgc3RhdGljIHNhdmVUb2RvTGlzdChkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgbmV3IFRvRG9MaXN0KCksXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpXG4gICAgKTtcblxuICAgIHRvZG9MaXN0LnNldFByb2plY3RzKFxuICAgICAgdG9kb0xpc3RcbiAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcbiAgICApO1xuXG4gICAgdG9kb0xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHRvZG9MaXN0O1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmFkZFRhc2sodGFzayk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSk7XG4gICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICB9XG5cbiAgc3RhdGljIHJlbmFtZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lLCBuZXdUYXNrTmFtZSkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLnNldE5hbWUobmV3VGFza05hbWUpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRUYXNrRGF0ZShwcm9qZWN0TmFtZSwgdGFza05hbWUsIG5ld0R1ZURhdGUpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXREYXRlKG5ld0R1ZURhdGUpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRUYXNrRGVzY3JpcHRpb24ocHJvamVjdE5hbWUsIHRhc2tOYW1lLCBuZXdEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0XG4gICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgICAgLnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9kYXlQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgIHRvZG9MaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVXZWVrUHJvamVjdCgpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICB0b2RvTGlzdC51cGRhdGVXZWVrUHJvamVjdCgpO1xuICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgdG9EYXRlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrTG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmV3UHJvamVjdC5uYW1lKSkgeyByZXR1cm47IH1cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSxcbiAgICApO1xuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKTtcbiAgfVxuXG4gIHVwZGF0ZVRvZGF5UHJvamVjdCgpIHtcbiAgICB0aGlzLmdldFByb2plY3QoJ1RvZGF5JykudGFza3MgPSBbXTtcblxuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSAnVG9kYXknIHx8IHByb2plY3QuZ2V0TmFtZSgpID09PSAnVGhpcyB3ZWVrJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b2RheVRhc2tzID0gcHJvamVjdC5nZXRUYXNrc1RvZGF5KCk7XG4gICAgICB0b2RheVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKEZyb206ICR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tOYW1lLCB0YXNrLmdldERhdGUoKSwgdGFzay5nZXREZXNjcmlwdGlvbigpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVdlZWtQcm9qZWN0KCkge1xuICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyB3ZWVrJykuc2V0VGFza3MoW10pO1xuXG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09ICdUb2RheScgfHwgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUaGlzIHdlZWsnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdlZWtUYXNrcyA9IHByb2plY3QuZ2V0VGFza3NUaGlzV2VlaygpO1xuICAgICAgd2Vla1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKEZyb206ICR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyB3ZWVrJykuYWRkVGFzayhuZXcgVGFzayh0YXNrTmFtZSwgdGFzay5nZXREYXRlKCksIHRhc2suZ2V0RGVzY3JpcHRpb24oKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgd2VlaycpLnNldFRhc2tzKFxuICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIHdlZWsnKVxuICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAuc29ydCgodGFza0EsIHRhc2tCKSA9PiBjb21wYXJlQXNjKFxuICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQSkpLFxuICAgICAgICAgIHRvRGF0ZShuZXcgRGF0ZSh0YXNrQikpLFxuICAgICAgICApKSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgVG9Eb0xpc3QgZnJvbSBcIi4vdG9Eb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RMb2dpY1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza0xvZ2ljXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgaW5ib3hJY29uIGZyb20gXCIuL2ltYWdlcy9pbmJveC1tdWx0aXBsZS5zdmdcIjtcbmltcG9ydCB0b2RheUljb24gZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXRvZGF5LnN2Z1wiO1xuaW1wb3J0IHdlZWtJY29uIGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci13ZWVrLnN2Z1wiO1xuaW1wb3J0IGZvbGRlckljb24gZnJvbSBcIi4vaW1hZ2VzL2ZvbGRlci1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgY2FuY2VsSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgdG9kb0xvZ28gZnJvbSBcIi4vaW1hZ2VzL2NoZWNrLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgdG9Eb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdFwiKTtcbmNvbnN0IGFjdGl2ZVNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtc3BhY2VcIik7XG5jb25zdCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcHJvamVjdFwiKTtcbmNvbnN0IGFjdGl2ZVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmUtcHJvamVjdC1uYW1lXCIpO1xuY29uc3QgYWN0aXZlVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2ZS10YXNrc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG4gIGNyZWF0ZURlZmF1bHRQcm9qZWN0cygpO1xuICBsb2FkUHJvamVjdHMoKTtcblxuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VUkoKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgLmdldFByb2plY3RzKClcbiAgICAuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwcm9qZWN0Lm5hbWUgIT09IFwiSW5ib3hcIiAmJlxuICAgICAgICBwcm9qZWN0Lm5hbWUgIT09IFwiVG9kYXlcIiAmJlxuICAgICAgICBwcm9qZWN0Lm5hbWUgIT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICkge1xuICAgICAgICBjcmVhdGVQcm9qZWN0VUkocHJvamVjdC5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKHByb2plY3ROYW1lKSB7XG4gIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIC5nZXRUYXNrcygpXG4gICAgLmZvckVhY2goKHRhc2spID0+XG4gICAgICBjcmVhdGVUYXNrVUkodGFzay5nZXROYW1lKCksIHRhc2suZ2V0RGF0ZSgpLCB0YXNrLmdldERlc2NyaXB0aW9uKCkpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ29cIik7XG5cbiAgY29uc3QgbG9nb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28tbmFtZVwiKTtcbiAgbG9nb05hbWUudGV4dENvbnRlbnQgPSBcIlRvRG8tTGlzdFwiO1xuXG4gIGNvbnN0IGxvZ29QaWMgPSBuZXcgSW1hZ2UoNTAsIDUwKTtcbiAgbG9nb1BpYy5zcmMgPSB0b2RvTG9nbztcbiAgbG9nb1BpYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28tcGljXCIpO1xuXG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1BpYyk7XG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb05hbWUpO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGVrYXQtdmVsYXpgO1xuICBjb3B5cmlnaHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb3B5cmlnaHRcIik7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2l0aHViLWxpbmtcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2VrYXQtdmVsYXpcIjtcblxuICBjb25zdCBnaXRodWJJY29uID0gbmV3IEltYWdlKDUwLCA1MCk7XG4gIGdpdGh1Ykljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnaXRodWItaWNvblwiKTtcbiAgZ2l0aHViSWNvbi5zcmMgPSBnaXRodWJMb2dvO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvRE9NKHByb2plY3ROYW1lLCBjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3RzKCkge1xuICBjb25zdCBpbmJveCA9IG5ldyBQcm9qZWN0KFwiSW5ib3hcIik7XG4gIFN0b3JhZ2UuYWRkUHJvamVjdChpbmJveCk7XG4gIGNyZWF0ZVByb2plY3RVSShpbmJveC5nZXROYW1lKCkpO1xuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IFByb2plY3QoXCJUb2RheVwiKTtcbiAgU3RvcmFnZS5hZGRQcm9qZWN0KHRvZGF5KTtcbiAgY3JlYXRlUHJvamVjdFVJKHRvZGF5LmdldE5hbWUoKSk7XG5cbiAgY29uc3QgdGhpc1dlZWsgPSBuZXcgUHJvamVjdChcIlRoaXMgd2Vla1wiKTtcbiAgU3RvcmFnZS5hZGRQcm9qZWN0KHRoaXNXZWVrKTtcbiAgY3JlYXRlUHJvamVjdFVJKHRoaXNXZWVrLmdldE5hbWUoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3ROYW1lfWApO1xuICBTdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIFN0b3JhZ2UudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gIFN0b3JhZ2UudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgY3JlYXRlUHJvamVjdFVJKG5ld1Byb2plY3QuZ2V0TmFtZSgpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFVJKHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcm9qZWN0TmFtZX1gKTtcblxuICBjb25zdCBzdHlsaW5nUHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0eWxpbmdQcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdHlsaW5nLXByb2otY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGNob3NlblByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChcbiAgICAgIGAke2UudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuaWR9YFxuICAgICk7XG4gICAgdG9Eb0xpc3QudXBkYXRlVG9kYXlQcm9qZWN0KCk7XG4gICAgdG9Eb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICBjbGVhckFjdGl2ZSgpO1xuICAgIGNyZWF0ZUFjdGl2ZVByb2plY3RVSShjaG9zZW5Qcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgcmVuZGVyVGFza3MoY2hvc2VuUHJvamVjdC5nZXRUYXNrcygpKTtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KG5ld1Byb2plY3QsIHN0eWxpbmdQcm9qQ29udGFpbmVyKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoMzAsIDMwKTtcbiAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaWNvblwiKTtcblxuICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIik7XG4gIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWV9YDtcblxuICBjb25zdCBwcm9qQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvakJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvai1idG4tY29udGFpbmVyXCIpO1xuXG4gIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgc3R5bGluZ1Byb2pDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIHN0eWxpbmdQcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pCdG5Db250YWluZXIpO1xuXG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc3R5bGluZ1Byb2pDb250YWluZXIpO1xuXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJJbmJveFwiKSB7XG4gICAgcHJvamVjdEljb24uc3JjID0gaW5ib3hJY29uO1xuICAgIHNldEFjdGl2ZVByb2plY3QobmV3UHJvamVjdCwgc3R5bGluZ1Byb2pDb250YWluZXIpO1xuICAgIGNyZWF0ZUFjdGl2ZVByb2plY3RVSShTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChcIkluYm94XCIpLmdldE5hbWUoKSk7XG4gICAgbG9hZFRhc2tzKFwiSW5ib3hcIik7XG4gIH0gZWxzZSBpZiAocHJvamVjdE5hbWUgPT09IFwiVG9kYXlcIikge1xuICAgIHByb2plY3RJY29uLnNyYyA9IHRvZGF5SWNvbjtcbiAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJUaGlzIHdlZWtcIikge1xuICAgIHByb2plY3RJY29uLnNyYyA9IHdlZWtJY29uO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RJY29uLnNyYyA9IGZvbGRlckljb247XG4gICAgcHJvakJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVCdG4oKSk7XG4gICAgcHJvakJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFZGl0QnRuKCkpO1xuICB9XG5cbiAgYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3RDb250YWluZXIsIHByb2plY3RzTGlzdCk7XG59XG5cbmNvbnN0IGFkZFByb2plY3RVSSA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1jb250YWluZXJcIik7XG4gIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihhZGRQcm9qZWN0Q29udGFpbmVyKSk7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RDb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qQnRuKGNvbnRhaW5lcikge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG4gIGNvbnN0IGFkZFByb2pJY29uID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gIGFkZFByb2pJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2otaWNvblwiKTtcbiAgYWRkUHJvakljb24uc3JjID0gYWRkSWNvbjtcblxuICBjb25zdCBhZGRQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFByb2pUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2otdGV4dFwiKTtcbiAgYWRkUHJvalRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBwcm9qZWN0XCI7XG5cbiAgYWRkUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChhZGRQcm9qSWNvbik7XG4gIGFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYWRkUHJvalRleHQpO1xuXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dChjb250YWluZXIpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGNvbnRhaW5lcikge1xuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qLWlucHV0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFkZFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qLWlucHV0XCIpO1xuICBhZGRQcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGVycm9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBlcnJvclNwYW4uY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuXG4gIGNvbnN0IGlucHV0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5wdXRCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dC1idG4tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGFkZFByb2pJbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidG5cIik7XG4gIGFkZFByb2pJbnB1dFN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1zdWJtaXRcIik7XG4gIGFkZFByb2pJbnB1dFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGFkZFByb2pJbnB1dFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoXG4gICAgICBjaGVja0lucHV0KFxuICAgICAgICBhZGRQcm9qZWN0SW5wdXQsXG4gICAgICAgIGVycm9yU3BhbixcbiAgICAgICAgYWRkUHJvamVjdEZvcm0sXG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgKSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoYWRkUHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihjb250YWluZXIpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFByb2pDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qQ2FuY2VsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2otY2FuY2VsXCIpO1xuICBhZGRQcm9qQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvakJ0bihjb250YWluZXIpKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkUHJvakNhbmNlbEljb24gPSBuZXcgSW1hZ2UoMjMsIDIzKTtcbiAgYWRkUHJvakNhbmNlbEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1jYW5jZWwtaWNvblwiKTtcbiAgYWRkUHJvakNhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgYWRkUHJvakNhbmNlbC5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsSWNvbik7XG5cbiAgaW5wdXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvaklucHV0U3VibWl0KTtcbiAgaW5wdXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvakNhbmNlbCk7XG5cbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRCdG5Db250YWluZXIpO1xuXG4gIHJldHVybiBhZGRQcm9qZWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgyMCwgMjUpO1xuICBkZWxldGVQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLXByb2otaWNvblwiKTtcbiAgZGVsZXRlUHJvamVjdEljb24uc3JjID0gZGVsZXRlSWNvbjtcblxuICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZWwtYnRuXCIpO1xuICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RJY29uKTtcblxuICBkZWxldGVQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBjaG9zZW5Db250YWluZXIgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIGNob3NlbkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QoY2hvc2VuQ29udGFpbmVyLmlkKTtcbiAgICBjbGVhckFjdGl2ZSgpO1xuICB9KTtcblxuICByZXR1cm4gcHJvamVjdERlbGV0ZUJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdEJ0bigpIHtcbiAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9qLWJ0blwiKTtcblxuICBjb25zdCBlZGl0UHJvakljb24gPSBuZXcgSW1hZ2UoMjAsIDI1KTtcbiAgZWRpdFByb2pJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWljb25cIik7XG4gIGVkaXRQcm9qSWNvbi5zcmMgPSBlZGl0SWNvbjtcblxuICBwcm9qZWN0RWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0UHJvakljb24pO1xuXG4gIGVkaXRQcm9qSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBlLnRhcmdldFxuICAgICAgLmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmRDaGlsZChjcmVhdGVFZGl0SW5wdXQoZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKSkpO1xuICB9KTtcblxuICByZXR1cm4gcHJvamVjdEVkaXRCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dChjb250YWluZXIpIHtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1pbnB1dC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1pbnB1dFwiKTtcbiAgYWRkUHJvamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBjb25zdCBlcnJvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZXJyb3JTcGFuLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcblxuICBjb25zdCBpbnB1dEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0QnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXQtYnRuLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhZGRQcm9qSW5wdXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnRuXCIpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYWRkUHJvaklucHV0U3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2otc3VibWl0XCIpO1xuICBhZGRQcm9qSW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSBcIkNoYW5nZSBuYW1lXCI7XG4gIGFkZFByb2pJbnB1dFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoXG4gICAgICBjaGVja0lucHV0KFxuICAgICAgICBhZGRQcm9qZWN0SW5wdXQsXG4gICAgICAgIGVycm9yU3BhbixcbiAgICAgICAgYWRkUHJvamVjdEZvcm0sXG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgKSA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGNvbnN0IGNob3NlblByb2plY3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCkuZ2V0UHJvamVjdChjb250YWluZXIuaWQpO1xuICAgICAgY2hvc2VuUHJvamVjdC5zZXROYW1lKGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICBjcmVhdGVQcm9qZWN0VUkoY2hvc2VuUHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgY2xlYXJBY3RpdmUoKTtcbiAgICAgIGNyZWF0ZUFjdGl2ZVByb2plY3RVSShjaG9zZW5Qcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICByZW5kZXJUYXNrcyhjaG9zZW5Qcm9qZWN0LmdldFRhc2tzKCkpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYWRkUHJvakNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2pDYW5jZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1jYW5jZWxcIik7XG5cbiAgY29uc3QgYWRkUHJvakNhbmNlbEljb24gPSBuZXcgSW1hZ2UoMjAsIDIwKTtcbiAgYWRkUHJvakNhbmNlbEljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvai1jYW5jZWwtaWNvblwiKTtcbiAgYWRkUHJvakNhbmNlbEljb24uc3JjID0gY2FuY2VsSWNvbjtcbiAgYWRkUHJvakNhbmNlbEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS50YXJnZXRcbiAgICAgIC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5lZGl0LWljb25cIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZSgpO1xuICB9KTtcblxuICBhZGRQcm9qQ2FuY2VsLmFwcGVuZENoaWxkKGFkZFByb2pDYW5jZWxJY29uKTtcblxuICBpbnB1dEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qSW5wdXRTdWJtaXQpO1xuICBpbnB1dEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qQ2FuY2VsKTtcblxuICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpO1xuICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dEJ0bkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnRuKCkge1xuICBjb25zdCBhZGRUYXNrSWNvbiA9IG5ldyBJbWFnZSg1MCwgNTApO1xuICBhZGRUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2staWNvblwiKTtcbiAgYWRkVGFza0ljb24uc3JjID0gYWRkSWNvbjtcblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICBhZGRUYXNrQnRuLmFwcGVuZENoaWxkKGFkZFRhc2tJY29uKTtcblxuICBhZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lclwiKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1pbnB1dC1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgfVxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zvcm0ocHJvamVjdENvbnRhaW5lcikpO1xuICB9KTtcblxuICByZXR1cm4gYWRkVGFza0J0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oY29udGFpbmVyKSB7XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2staW5wdXQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGUtaW5wdXRcIik7XG4gIHRhc2tUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgdGl0bGVcIjtcblxuICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0YXNrRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kYXRlLWlucHV0XCIpO1xuXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJBbnkgbm90ZXM/XCI7XG5cbiAgY29uc3QgZXJyb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVycm9yU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG5cbiAgY29uc3QgYWRkVGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYWRkVGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLXN1Ym1pdFwiKTtcbiAgYWRkVGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2shXCI7XG4gIGFkZFRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KGNvbnRhaW5lci5pZCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgaWYgKGNoZWNrSW5wdXQodGFza1RpdGxlSW5wdXQsIGVycm9yU3BhbiwgYWRkVGFza0Zvcm0sIHByb2plY3QpID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza0RhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICAgICk7XG4gICAgICBTdG9yYWdlLmFkZFRhc2socHJvamVjdC5nZXROYW1lKCksIG5ld1Rhc2spO1xuICAgICAgU3RvcmFnZS51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgICAgIFN0b3JhZ2UudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgIGNyZWF0ZVRhc2tVSShcbiAgICAgICAgbmV3VGFzay5nZXROYW1lKCksXG4gICAgICAgIG5ld1Rhc2suZ2V0RGF0ZSgpLFxuICAgICAgICBuZXdUYXNrLmdldERlc2NyaXB0aW9uKClcbiAgICAgICk7XG4gICAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQ2FuY2VsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2otY2FuY2VsXCIpO1xuICBhZGRUYXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkVGFza0NhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBhZGRUYXNrQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICBhZGRUYXNrQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qLWNhbmNlbC1pY29uXCIpO1xuICBhZGRUYXNrQ2FuY2VsSWNvbi5zcmMgPSBjYW5jZWxJY29uO1xuICBhZGRUYXNrQ2FuY2VsLmFwcGVuZENoaWxkKGFkZFRhc2tDYW5jZWxJY29uKTtcblxuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrU3VibWl0KTtcblxuICByZXR1cm4gYWRkVGFza0Zvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tVSSh0YXNrVGl0bGUsIHRhc2tEYXRlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Rhc2tUaXRsZX1gKTtcblxuICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gIG5ld1Rhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAke3Rhc2tUaXRsZX1gO1xuXG4gIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3VGFza0RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcbiAgbmV3VGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrRGF0ZX1gO1xuXG4gIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Rhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgaWYgKHRhc2tEZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3VGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0YXNrRGVzY3JpcHRpb259YDtcbiAgfVxuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1idG4tY29udGFpbmVyXCIpO1xuXG4gIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlKTtcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZSk7XG4gIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gIGlmIChhY3RpdmVQcm9qZWN0LmlkICE9PSBcIlRvZGF5XCIgJiYgYWN0aXZlUHJvamVjdC5pZCAhPT0gXCJUaGlzIHdlZWtcIikge1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRGVsZXRlQnRuKCkpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRWRpdEJ0bigpKTtcbiAgfVxuICBhY3RpdmVUYXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICBpZiAocHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNyZWF0ZVRhc2tVSShcbiAgICAgIHRhc2suZ2V0TmFtZSgpLFxuICAgICAgdGFzay5nZXREYXRlKCksXG4gICAgICB0YXNrLmdldERlc2NyaXB0aW9uKCksXG4gICAgICBhY3RpdmVUYXNrc1xuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QsIGNvbnRhaW5lcikge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0ICE9PSB0aGlzKSB7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0eWxpbmctcHJvai1jb250YWluZXJcIik7XG4gIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gdGhpcykge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY29udGFpbmVyXCIpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWNvbnRhaW5lclwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBY3RpdmUoKSB7XG4gIGlmIChhY3RpdmVQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpKSB7XG4gICAgYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKS5yZW1vdmUoKTtcbiAgfVxuICBpZiAoYWN0aXZlUHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWlucHV0LWNvbnRhaW5lclwiKSkge1xuICAgIGFjdGl2ZVByb2plY3QucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1pbnB1dC1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gIH1cbiAgYWN0aXZlVGFza3MudGV4dENvbnRlbnQgPSBcIlwiO1xuICBhY3RpdmVQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZWxldGVCdG4oKSB7XG4gIGNvbnN0IGRlbGV0ZVRhc2tJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gIGRlbGV0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWwtdGFzay1pY29uXCIpO1xuICBkZWxldGVUYXNrSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuXG4gIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbC1idG5cIik7XG4gIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0ljb24pO1xuXG4gIGRlbGV0ZVRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXYuYWN0aXZlLXByb2plY3RcIikuaWQsXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KFwiZGl2LmFjdGl2ZS1wcm9qZWN0XCIpLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKVxuICAgICAgICAudGV4dENvbnRlbnRcbiAgICApO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrRGVsZXRlQnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWRpdEJ0bigpIHtcbiAgY29uc3QgZWRpdFRhc2tJY29uID0gbmV3IEltYWdlKDIwLCAyNSk7XG4gIGVkaXRUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWljb25cIik7XG4gIGVkaXRUYXNrSWNvbi5zcmMgPSBlZGl0SWNvbjtcblxuICBjb25zdCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stYnRuXCIpO1xuICB0YXNrRWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0VGFza0ljb24pO1xuXG4gIGVkaXRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBlLnRhcmdldFxuICAgICAgLmNsb3Nlc3QoXCIudGFzay1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlVGFza0VkaXRGb3JtKFxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIuYWN0aXZlLXByb2plY3RcIiksXG4gICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNvbnRhaW5lclwiKVxuICAgICAgICApXG4gICAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGFza0VkaXRCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFZGl0Rm9ybShjb250YWluZXIsIHRhc2tDb250YWluZXIpIHtcbiAgY29uc3Qgb2xkVGl0bGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgY29uc3Qgb2xkRGF0ZSA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrLWRhdGVcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IG9sZERlc2NyID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgY2hvc2VuUHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KGNvbnRhaW5lci5pZCk7XG5cbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1pbnB1dC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay10aXRsZS1pbnB1dFwiKTtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSBvbGRUaXRsZTtcbiAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgdGl0bGVcIjtcbiAgdGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHRhc2tEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRhdGUtaW5wdXRcIik7XG4gIHRhc2tEYXRlSW5wdXQudmFsdWUgPSBvbGREYXRlO1xuXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gb2xkRGVzY3I7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJBbnkgbm90ZXM/XCI7XG5cbiAgY29uc3QgZXJyb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGVycm9yU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG5cbiAgY29uc3QgYWRkVGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYWRkVGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLXN1Ym1pdFwiKTtcbiAgYWRkVGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiRWRpdCB0YXNrIVwiO1xuICBhZGRUYXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChcbiAgICAgIGNoZWNrSW5wdXQodGFza1RpdGxlSW5wdXQsIGVycm9yU3BhbiwgYWRkVGFza0Zvcm0sIGNob3NlblByb2plY3QpID09PVxuICAgICAgZmFsc2VcbiAgICApIHtcbiAgICAgIFN0b3JhZ2UucmVuYW1lVGFzayhcbiAgICAgICAgY2hvc2VuUHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgIG9sZFRpdGxlLFxuICAgICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZVxuICAgICAgKTtcbiAgICAgIFN0b3JhZ2Uuc2V0VGFza0RhdGUoXG4gICAgICAgIGNob3NlblByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza0RhdGVJbnB1dC52YWx1ZVxuICAgICAgKTtcbiAgICAgIFN0b3JhZ2Uuc2V0VGFza0Rlc2NyaXB0aW9uKFxuICAgICAgICBjaG9zZW5Qcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgICApO1xuICAgICAgU3RvcmFnZS51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgICAgIFN0b3JhZ2UudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgIGNvbnN0IGNob3NlblRhc2sgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgICAgLmdldFByb2plY3QoY2hvc2VuUHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgIC5nZXRUYXNrKHRhc2tUaXRsZUlucHV0LnZhbHVlKTtcbiAgICAgIGNyZWF0ZVRhc2tVSShcbiAgICAgICAgY2hvc2VuVGFzay5nZXROYW1lKCksXG4gICAgICAgIGNob3NlblRhc2suZ2V0RGF0ZSgpLFxuICAgICAgICBjaG9zZW5UYXNrLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgIGFjdGl2ZVRhc2tzXG4gICAgICApO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBhZGRUYXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0NhbmNlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qLWNhbmNlbFwiKTtcbiAgYWRkVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFRhc2tDYW5jZWxcbiAgICAgIC5jbG9zZXN0KFwiLnRhc2stY29udGFpbmVyXCIpXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2staWNvblwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgYWRkVGFza0NhbmNlbC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBhZGRUYXNrQ2FuY2VsSWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICBhZGRUYXNrQ2FuY2VsSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1wcm9qLWNhbmNlbC1pY29uXCIpO1xuICBhZGRUYXNrQ2FuY2VsSWNvbi5zcmMgPSBjYW5jZWxJY29uO1xuICBhZGRUYXNrQ2FuY2VsLmFwcGVuZENoaWxkKGFkZFRhc2tDYW5jZWxJY29uKTtcblxuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZUlucHV0KTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrU3VibWl0KTtcblxuICByZXR1cm4gYWRkVGFza0Zvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGl2ZVByb2plY3RVSShwcm9qZWN0TmFtZSkge1xuICBhY3RpdmVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Byb2plY3ROYW1lfWApO1xuICBhY3RpdmVQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lfWA7XG4gIGlmIChhY3RpdmVQcm9qZWN0LmlkICE9PSBcIlRvZGF5XCIgJiYgYWN0aXZlUHJvamVjdC5pZCAhPT0gXCJUaGlzIHdlZWtcIikge1xuICAgIGFjdGl2ZVByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVGFza0J0bigpKTtcbiAgfVxuXG4gIGFkZFByb2plY3RUb0RPTShhY3RpdmVQcm9qZWN0LCBhY3RpdmVTcGFjZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXQoaW5wdXQsIGVycm9yQ29udGFpbmVyLCBmb3JtQ29udGFpbmVyLCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudC5jb250YWlucyhpbnB1dC52YWx1ZSkpIHtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yQ29udGFpbmVyKTtcbiAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9XG4gICAgICBcIlRoZSBuYW1lIHNob3VsZCBub3QgYmUgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIG9uZXNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvckNvbnRhaW5lcik7XG4gICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgZmllbGQgY2Fubm90IGJlIGJsYW5rXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=