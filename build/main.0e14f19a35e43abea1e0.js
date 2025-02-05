/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/index.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/index.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero-mobile.jpg */ "./src/assets/images/hero-mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero-tablet.jpg */ "./src/assets/images/hero-tablet.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero-desktop.jpg */ "./src/assets/images/hero-desktop.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/footer-mobile-3.jpg */ "./src/assets/images/footer-mobile-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/footer-tablet-2.jpg */ "./src/assets/images/footer-tablet-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/footer-desktop-1.jpg */ "./src/assets/images/footer-desktop-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes blow {
  0% {
    width: 1px;
    height: 1px;
    opacity: 0.5;
  }
  100% {
    width: 50px;
    height: 50px;
    opacity: 0;
  }
}
@keyframes call {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-60deg);
  }
  30% {
    transform: rotate(15deg);
  }
  45% {
    transform: rotate(-45deg);
  }
  60% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes kenburns {
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
    scale: 1;
  }
  60% {
    opacity: 0;
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 55%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
/**
 * Modern CSS Reset Tweaks
 * ================================================== */
html {
  -webkit-text-size-adjust: 100%;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  text-size-adjust: 100%;
  position: relative;
  width: 100%;
  min-height: 100vh;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeSpeed;
}

/* Box sizing normalization */
*,
::after,
::before {
  box-sizing: border-box;
}

/* Elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/**
 * CSS Reset Tweaks
 *
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0-modified | 20110126
 * License: none (public domain)
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
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* make sure to set some focus styles for accessibility */
:focus {
  outline: 0;
}

/* HTML5 display-role reset for older browsers */
main,
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

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

/**
 * Input Reset
 */
input:required,
input {
  box-shadow: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type=search] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

input:focus {
  outline: none;
}

/**
 * Correct \`inline-block\` display not defined in IE 6/7/8/9 and Firefox 3.
 */
audio,
canvas,
video {
  display: inline-block;
  max-width: 100%;
}

/**
 * Prevent modern browsers from displaying \`audio\` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 */
[hidden] {
  display: none;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */
a:active,
a:hover {
  outline: none;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  height: auto;
}

/* Make pictures easier to work with */
picture {
  display: inline-block;
}

/**
 * Address Firefox 3+ setting \`line-height\` on \`input\` using \`!important\` in
 * the UA stylesheet.
 */
button,
input {
  line-height: normal;
}

/**
 * Address inconsistent \`text-transform\` inheritance for \`button\` and \`select\`.
 * All other form control elements do not inherit \`text-transform\` values.
 * Correct \`button\` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct \`select\` style inheritance in Firefox 4+ and Opera.
 */
button,
select {
  text-transform: none;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
  border: 0;
  background: transparent;
}

/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}

[disabled] {
  pointer-events: none;
}

/**
 * 1. Address box sizing set to content-box in IE 8/9.
 */
input[type=checkbox],
input[type=radio] {
  padding: 0;
}

/**
 * 1. Address \`appearance\` set to \`searchfield\` in Safari 5 and Chrome.
 * 2. Address \`box-sizing\` set to \`border-box\` in Safari 5 and Chrome
 *    (include \`-moz\` to future-proof).
 */
input[type=search] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Remove inner padding and border in Firefox 3+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

button {
  border: 0;
  background: transparent;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

/**
 * Based on normalize.css v8.0.1
 * github.com/necolas/normalize.css
 */
hr {
  box-sizing: content-box;
  overflow: visible;
  background: #000;
  border: 0;
  height: 1px;
  line-height: 0;
  margin: 0;
  padding: 0;
  page-break-after: always;
  width: 100%;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 */
pre {
  font-family: monospace, monospace;
  font-size: 100%;
}

/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  text-decoration: none;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 75%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -5px;
}

sup {
  top: -5px;
}

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  margin: 0;
  padding: 0;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
  outline: 0;
}

legend {
  color: inherit;
  white-space: normal;
  display: block;
  border: 0;
  max-width: 100%;
  width: 100%;
}

fieldset {
  min-width: 0;
}

body:not(:-moz-handler-blocked) fieldset {
  display: block;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Misc
 * ========================================================================== */
template {
  display: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Cinzel", serif;
}

textarea {
  resize: none;
}

.h1,
.h2,
.h3 {
  font-weight: 700;
}

.h1 {
  font-size: 40px;
  line-height: 105%;
  color: #ffffff;
}
@media screen and (min-width: 744px) {
  .h1 {
    font-size: 60px;
  }
}
@media screen and (min-width: 1260px) {
  .h1 {
    font-size: 77px;
  }
}

.h2 {
  font-size: 30px;
  color: #161616;
  line-height: 115%;
}
@media screen and (min-width: 744px) {
  .h2 {
    font-size: 46px;
    line-height: 105%;
  }
}
@media screen and (min-width: 1260px) {
  .h2 {
    font-size: 46px;
    line-height: 115%;
  }
}

.h3 {
  font-size: 24px;
}
@media screen and (min-width: 1260px) {
  .h3 {
    line-height: 110%;
  }
}

.h4 {
  font-size: 16px;
  font-weight: 700;
}

.p {
  color: #161616;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 48px;
  min-width: 160px;
  min-height: 56px;
  color: #ffffff;
  background-color: #d12d35;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  overflow: hidden;
  z-index: 1;
}
.button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: -1;
  background-color: #ae1c23;
  transition: all 0.3s ease;
}
.button:hover::after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.button:active {
  top: 2px;
}

.no-scroll {
  overflow: hidden;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  min-width: 320px;
}
@media screen and (min-width: 744px) {
  .container {
    max-width: 744px;
    padding: 70px 72px;
  }
}
@media screen and (min-width: 1260px) {
  .container {
    max-width: 1260px;
    padding: 70px 120px;
  }
}

/* Change Autocomplete styles in Chrome */
input:-webkit-autofill,
textarea:-webkit-autofill {
  border: 1px solid #f8f8fa;
  -webkit-text-fill-color: #161616;
  box-shadow: 0 0 0 1000px #f8f8fa inset;
  transition: all ease-in-out 0.3s;
}

input:-webkit-autofill:hover,
textarea:-webkit-autofill:hover {
  border: 1px solid #d5d7de;
  box-shadow: 0 0 0 1000px #f8f8fa inset;
}

input:-webkit-autofill:focus,
textarea:-webkit-autofill:focus {
  border: 1px solid #161616;
  box-shadow: 0 0 0 1000px #f8f8fa inset;
}

.desktop {
  display: none;
}
@media screen and (min-width: 1260px) {
  .desktop {
    display: block;
  }
}

.no-tablet {
  display: block;
}
@media screen and (min-width: 744px) {
  .no-tablet {
    display: none;
  }
}
@media screen and (min-width: 1260px) {
  .no-tablet {
    display: block;
  }
}

.section--animation {
  opacity: 0;
  animation-duration: 0.65s;
  animation-fill-mode: both;
}
.section--active .section--animation {
  animation-name: fadeInUp;
}

.hero {
  position: relative;
  min-height: 100vh;
  padding: 25px 20px;
  margin-bottom: 50px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
@media screen and (min-width: 744px) {
  .hero {
    margin-bottom: 70px;
    padding: 48px 72px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }
}
@media screen and (min-width: 1260px) {
  .hero {
    padding: 48px 118px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }
}

.header {
  position: relative;
  z-index: 100;
}
.header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__content {
  margin-top: 19vh;
  text-align: center;
}
@media screen and (min-width: 744px) {
  .header__content {
    margin-top: 15vh;
  }
}
@media screen and (min-width: 1260px) {
  .header__content {
    margin-top: 9vh;
  }
}
.header__icons {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  width: 64px;
  height: 46px;
}
@media screen and (min-width: 744px) {
  .logo {
    width: 87px;
    height: 65px;
  }
}

.icons__icon {
  width: 24px;
  height: 24px;
}
@media screen and (min-width: 744px) {
  .icons__icon {
    width: 32px;
    height: 32px;
  }
}
@media screen and (min-width: 744px) {
  .icons {
    gap: 55px;
  }
}
@media screen and (min-width: 1260px) {
  .icons {
    gap: 60px;
  }
  .icons .icon-phone {
    display: none;
  }
}

.icon-menu {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
}
.icon-menu__line {
  display: block;
  height: 2px;
  width: 18px;
  background-color: #ffffff;
  border-radius: 6px;
  opacity: 1;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}
.icon-menu__line:nth-child(2), .icon-menu__line:nth-child(3) {
  position: absolute;
}
@media screen and (min-width: 744px) {
  .icon-menu__line {
    width: 25px;
  }
}
.icon-menu:hover .icon-menu__line:nth-child(1) {
  width: 12px;
}
.icon-menu:hover .icon-menu__line:nth-child(4) {
  width: 9px;
}
.icon-menu.open span:nth-child(1) {
  top: 14px;
  width: 0%;
  left: 50%;
}
.icon-menu.open span:nth-child(2) {
  transform: rotate(45deg);
}
.icon-menu.open span:nth-child(3) {
  transform: rotate(-45deg);
}
.icon-menu.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}
.icon-menu.open:hover .icon-menu__line:nth-child(1) {
  width: 0;
}
.icon-menu.open:hover .icon-menu__line:nth-child(4) {
  width: 0;
}

.icon-contacts {
  position: relative;
}
@media screen and (min-width: 1260px) {
  .icon-contacts {
    display: flex;
    flex-direction: row-reverse;
  }
}
.icon-contacts:first-child .icon-contacts__info {
  max-height: 1px;
}
.icon-contacts:first-child:hover .icon-contacts__info {
  max-height: 150px;
}
.icon-contacts__info {
  position: absolute;
  right: 48px;
  top: -40px;
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 160%;
  transition: 0.3s ease-in-out all;
  overflow: hidden;
}
.icon-contacts__info-link, .icon-contacts__info-title {
  display: block;
  margin-bottom: 3px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}
.icon-contacts__info-link {
  margin-bottom: 6px;
  transition: opacity 0.3s ease-in-out;
}
.icon-contacts__info-link:hover {
  opacity: 0.6;
}

.trigger-call {
  position: relative;
  transform-origin: 75% 25%;
  animation: call 1s cubic-bezier(0.36, 0.07, 0.57, 0.99);
  animation-delay: 0.5s;
}
.trigger-call::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  z-index: 10;
  background: #ffffff;
  transform: translate(-50%, -50%);
  animation: blow 0.4s ease-in-out;
  animation-delay: 0.5s;
}
.trigger-call:hover {
  animation: none;
}
.trigger-call:hover::after {
  animation: none;
}

.image-video {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  inset: 0;
  opacity: 0;
  scale: 1.2;
  animation: kenburns 30s linear infinite;
}
@media screen and (min-width: 744px) {
  .image-video {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  }
}
@media screen and (min-width: 1260px) {
  .image-video {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  }
}
.image-video + .header .header__content {
  text-shadow: 0 0 10px #161616;
}

.menu {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 200;
  opacity: 1;
}
.menu.hidden {
  opacity: 0;
  visibility: hidden;
}
.menu.hidden .menu__wrapper {
  transform: translateY(100%);
}
.menu__wrapper {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: #d12d35;
  transform: translateY(0);
  transition: transform 0.5s ease;
  transition-delay: 0.2s;
}
.menu__header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #d12d35;
}
@media screen and (min-width: 744px) {
  .menu__header {
    padding: 48px 72px;
  }
}
@media screen and (min-width: 1260px) {
  .menu__header {
    padding: 48px 118px;
  }
}
.menu__content {
  padding: 15px 20px;
  overflow-y: auto;
}
@media screen and (min-width: 744px) {
  .menu__content {
    padding: 15px 72px;
  }
}
@media screen and (min-width: 1260px) {
  .menu__content {
    padding: 48px 118px;
  }
}
.menu__link {
  position: relative;
  display: inline-block;
  margin-bottom: 32px;
  font-size: 22px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, #eb343d, #ffffff 50%, #ffffff 50%);
  background-size: 200% 100%;
  background-position: -100%;
  transition: all 0.3s ease-in-out;
}
.menu__link::before {
  content: "";
  background: #ffffff;
  display: block;
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 1px;
  transition: all 0.3s ease-in-out;
}
.menu__link:hover {
  background-position: 0;
}
.menu__link:hover::before {
  width: 100%;
}
.menu__contacts {
  display: flex;
  flex-direction: column;
}
.menu__contacts-contact {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 170%;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
}
.menu__contacts-contact--last {
  padding-top: 2px;
  font-size: 15px;
}
.menu__contacts-contact:hover .menu__contacts-number::before {
  width: 100%;
}
.menu__contacts-number {
  position: relative;
  display: inline-block;
  width: fit-content;
}
.menu__contacts-number::before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  display: block;
  width: 0%;
  height: 1px;
  background: #ffffff;
  transition: all 0.3s ease-in-out;
}
.menu__contacts-number:hover::before {
  width: 100%;
}

.schedule {
  position: relative;
  z-index: 200;
  margin-top: 50px;
  box-shadow: 0 50px 0 #ffffff;
}
@media screen and (min-width: 744px) {
  .schedule {
    margin-top: 70px;
    box-shadow: 0 70px 0 #ffffff;
  }
}
.schedule__header {
  margin-bottom: 28px;
}
.schedule__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.schedule__item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.schedule__subtitle {
  color: #d12d35;
  font-size: 12px;
  font-weight: 700;
  line-height: 140%;
}
.schedule__text:last-child {
  padding-top: 10px;
  line-height: 150%;
}
.schedule__text:last-child .schedule__main-text {
  display: block;
  margin-bottom: 4px;
}
.schedule__main-text {
  display: inline-block;
  min-width: 42%;
  font-weight: 700;
}
.schedule__item-title {
  margin-bottom: 8px;
}
@media screen and (min-width: 744px) {
  .schedule .container {
    display: flex;
  }
  .schedule__header {
    flex: 1;
  }
  .schedule__title, .schedule__subtitle {
    width: 200px;
  }
  .schedule__content {
    flex: 1;
  }
}
@media screen and (min-width: 1260px) {
  .schedule__header {
    flex: 0.75;
  }
  .schedule__title, .schedule__subtitle {
    width: auto;
  }
  .schedule__item {
    gap: 13px;
  }
  .schedule__text:last-child {
    padding-top: 8px;
  }
  .schedule__content {
    gap: 25px;
  }
}

.current {
  min-height: 100vh;
  line-height: 155%;
}
.current__header {
  margin-bottom: 50px;
  text-align: center;
}
.current__title {
  margin-bottom: 8px;
}
.current__item:not(:last-child) {
  margin-bottom: 50px;
}
.current__item-photos--2 {
  gap: 20px;
}
@media screen and (min-width: 320px) {
  .current__item-photos--2 {
    max-height: 130px;
  }
}
.current__item-photos--3 {
  gap: 8px;
}
@media screen and (min-width: 320px) {
  .current__item-photos--3 {
    max-height: 170px;
  }
}
.current__item-photos {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
@media screen and (min-width: 744px) {
  .current__item-photos {
    max-height: max-content;
  }
}
.current__item-image img {
  transition: all 0.3s ease;
}
.current__item-image:hover img {
  transform: scale(1.2);
  object-fit: cover;
  filter: grayscale(100%);
}
.current__item-title {
  margin-bottom: 2px;
  color: #d12d35;
  font-weight: 700;
}
.current__actions {
  text-align: center;
}
.current__actions-button {
  width: 100%;
}
@media screen and (min-width: 744px) {
  .current__subtitle {
    width: 300px;
    margin: 0 auto;
  }
  .current__actions-button {
    width: fit-content;
    min-width: 392px;
  }
  .current__item-photos--2 .image--square {
    height: 186px;
    width: 186px;
  }
  .current__item-photos--2 .image--long {
    flex: 1;
  }
  .current__item-photos--3 {
    gap: 20px;
  }
  .current__item-photos--3 .image:nth-child(3) {
    display: none;
  }
  .current__item:not(:last-child) {
    margin-bottom: 46px;
  }
}
@media screen and (min-width: 1260px) {
  .current__item-photos--2 {
    gap: 28px;
  }
  .current__item-photos--2 .image--square {
    height: 320px;
    width: 320px;
  }
  .current__item-photos--3 .image:nth-child(3) {
    display: block;
  }
  .current__actions-button {
    min-width: 325px;
  }
}

.image {
  position: relative;
  width: 100%;
  overflow: hidden;
}
@media screen and (min-width: 320px) {
  .image--long {
    flex: 1;
  }
}
@media screen and (min-width: 320px) {
  .image--long .image__image {
    width: inherit;
    height: 100%;
    object-fit: cover;
  }
}
.image--square img {
  width: inherit;
  height: inherit;
}
@media screen and (min-width: 320px) {
  .image--square {
    width: 130px;
  }
}
.image__image {
  object-fit: cover;
}
.image__hover {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d12d35;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.5;
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;
}
.image:hover .image__hover {
  transform: translateX(0%);
}
.image__hover--bottom {
  transform: translateY(100%);
}
.image:hover .image__hover--bottom {
  transform: translateY(0%);
}
.image__hover--top {
  transform: translateY(-100%);
}
.image:hover .image__hover--top {
  transform: translateY(0%);
}
.image__hover--right {
  transform: translateX(100%);
}
.image:hover .image__hover--right {
  transform: translateX(0%);
}

.more {
  overflow: hidden;
}
.more__header {
  text-align: center;
  margin-bottom: 38px;
  line-height: 110%;
}
.more__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.more__item:not(:last-child) {
  margin-bottom: 50px;
}
.more__item-photo {
  position: relative;
  overflow: hidden;
  margin-bottom: 26px;
  transition: all 0.3s ease;
}
.more__item-photo:hover {
  transform: scale(1.1);
}
.more__item-photo::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: #d12d35;
  opacity: 0.5;
  transform: skewX(-25deg);
}
.more__item-photo:hover::before {
  animation: shine 0.75s;
}
.more__item-content {
  text-align: center;
}
.more__item-title {
  margin-bottom: 8px;
  color: #d12d35;
}
.more__item-text {
  line-height: 160%;
}
@media screen and (min-width: 744px) {
  .more__header {
    margin-bottom: 48px;
  }
  .more__item {
    max-width: 392px;
    margin: 0 auto;
    flex: 1;
  }
  .more__item-photo {
    margin-bottom: 32px;
  }
  .more__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .more__item:not(:last-child) {
    margin-bottom: 25px;
  }
}
@media screen and (min-width: 1260px) {
  .more__content {
    flex-direction: row;
  }
  .more__title {
    margin: 0 auto;
    width: 450px;
    line-height: 105%;
  }
  .more__item-photo {
    margin-bottom: 35px;
  }
  .more__item-text {
    line-height: 165%;
  }
  .more__item:not(:last-child) {
    margin-bottom: 50px;
  }
}

.contacts__header {
  margin-bottom: 48px;
}
.contacts__title {
  text-align: center;
}
.contacts__info-item {
  margin-bottom: 50px;
}
.contacts__info-title {
  margin-bottom: 22px;
}
.contacts .adress__link {
  display: block;
  margin-bottom: 16px;
  text-decoration: none;
  color: #161616;
  font-size: 15px;
  font-weight: 700;
  transition: color ease-in-out 0.3s;
}
.contacts .adress__link:hover {
  color: #d12d35;
}
.contacts .adress__title {
  display: block;
  font-weight: 400;
  margin-bottom: 10px;
}
.contacts__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contacts__input {
  padding: 12px 11px;
  border: 1px solid transparent;
  background: #f8f8fa;
  color: #161616;
  transition: all ease-in-out 0.3s;
}
.contacts__input:hover {
  border: 1px solid #d5d7de;
}
.contacts__input:focus {
  border: 1px solid #161616;
}
.contacts__button {
  margin: 20px 0;
}
@media screen and (min-width: 744px) {
  .contacts__header {
    margin-bottom: 52px;
  }
  .contacts__content {
    display: flex;
    justify-content: space-between;
    gap: 23px;
  }
  .contacts__info {
    flex: 1;
  }
  .contacts__form {
    flex: 1;
  }
  .contacts__info-item {
    margin-bottom: 55px;
  }
}
@media screen and (min-width: 1260px) {
  .contacts__header {
    margin-bottom: 45px;
  }
  .contacts__content {
    gap: 65px;
  }
  .contacts__info {
    display: flex;
    gap: 75px;
  }
  .contacts .container {
    padding-top: 20px;
  }
  .contacts__form {
    flex: 0.75;
  }
}

.footer {
  min-height: 200px;
  margin-top: 30px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-attachment: fixed;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 100%;
}
@media screen and (min-width: 744px) {
  .footer {
    min-height: 360px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  }
}
@media screen and (min-width: 1260px) {
  .footer {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/scss/base/_animations.scss","webpack://./src/assets/scss/index.scss","webpack://./node_modules/scss-reset/_reset.scss","webpack://./src/assets/scss/base/_general.scss","webpack://./src/assets/scss/helpers/_variables.scss","webpack://./src/assets/scss/helpers/_mixins.scss","webpack://./src/assets/scss/components/_hero.scss","webpack://./src/assets/scss/components/_menu.scss","webpack://./src/assets/scss/components/_schedule.scss","webpack://./src/assets/scss/components/_current.scss","webpack://./src/assets/scss/components/_more.scss","webpack://./src/assets/scss/components/_contacts.scss","webpack://./src/assets/scss/components/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes shine {\n  100% {\n    left: 125%;\n  }\n}\n\n@keyframes blow {\n  0% {\n    width: 1px;\n    height: 1px;\n    opacity: 0.5;\n  }\n\n  100% {\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n  }\n}\n\n@keyframes call {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  15% {\n    transform: rotate(-60deg);\n  }\n\n  30% {\n    transform: rotate(15deg);\n  }\n\n  45% {\n    transform: rotate(-45deg);\n  }\n\n  60% {\n    transform: rotate(0deg);\n  }\n\n  75% {\n    transform: rotate(-45deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes kenburns {\n  25% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.8;\n    scale: 1;\n  }\n\n  60% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 55%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n","@keyframes shine {\n  100% {\n    left: 125%;\n  }\n}\n@keyframes blow {\n  0% {\n    width: 1px;\n    height: 1px;\n    opacity: 0.5;\n  }\n  100% {\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n  }\n}\n@keyframes call {\n  0% {\n    transform: rotate(0deg);\n  }\n  15% {\n    transform: rotate(-60deg);\n  }\n  30% {\n    transform: rotate(15deg);\n  }\n  45% {\n    transform: rotate(-45deg);\n  }\n  60% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-45deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes kenburns {\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n    scale: 1;\n  }\n  60% {\n    opacity: 0;\n  }\n}\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 55%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n}\n/**\n * Modern CSS Reset Tweaks\n * ================================================== */\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nbody {\n  text-size-adjust: 100%;\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeSpeed;\n}\n\n/* Box sizing normalization */\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n/* Elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/**\n * CSS Reset Tweaks\n *\n * http://meyerweb.com/eric/tools/css/reset/\n * v2.0-modified | 20110126\n * License: none (public domain)\n */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  font-size: 100%;\n  font: inherit;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\nmain,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\n/**\n * Input Reset\n */\ninput:required,\ninput {\n  box-shadow: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\ninput:focus {\n  outline: none;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: none;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  height: auto;\n}\n\n/* Make pictures easier to work with */\npicture {\n  display: inline-block;\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n[disabled] {\n  pointer-events: none;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\nbutton {\n  border: 0;\n  background: transparent;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  text-indent: 0;\n}\n\n/**\n * Based on normalize.css v8.0.1\n * github.com/necolas/normalize.css\n */\nhr {\n  box-sizing: content-box;\n  overflow: visible;\n  background: #000;\n  border: 0;\n  height: 1px;\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n  page-break-after: always;\n  width: 100%;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  font-size: 100%;\n}\n\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  text-decoration: none;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 75%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -5px;\n}\n\nsup {\n  top: -5px;\n}\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n  outline: 0;\n}\n\nlegend {\n  color: inherit;\n  white-space: normal;\n  display: block;\n  border: 0;\n  max-width: 100%;\n  width: 100%;\n}\n\nfieldset {\n  min-width: 0;\n}\n\nbody:not(:-moz-handler-blocked) fieldset {\n  display: block;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/*\n * Misc\n * ========================================================================== */\ntemplate {\n  display: none;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Cinzel\", serif;\n}\n\ntextarea {\n  resize: none;\n}\n\n.h1,\n.h2,\n.h3 {\n  font-weight: 700;\n}\n\n.h1 {\n  font-size: 40px;\n  line-height: 105%;\n  color: #ffffff;\n}\n@media screen and (min-width: 744px) {\n  .h1 {\n    font-size: 60px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .h1 {\n    font-size: 77px;\n  }\n}\n\n.h2 {\n  font-size: 30px;\n  color: #161616;\n  line-height: 115%;\n}\n@media screen and (min-width: 744px) {\n  .h2 {\n    font-size: 46px;\n    line-height: 105%;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .h2 {\n    font-size: 46px;\n    line-height: 115%;\n  }\n}\n\n.h3 {\n  font-size: 24px;\n}\n@media screen and (min-width: 1260px) {\n  .h3 {\n    line-height: 110%;\n  }\n}\n\n.h4 {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.p {\n  color: #161616;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.button {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px 48px;\n  min-width: 160px;\n  min-height: 56px;\n  color: #ffffff;\n  background-color: #d12d35;\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  z-index: 1;\n}\n.button::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  z-index: -1;\n  background-color: #ae1c23;\n  transition: all 0.3s ease;\n}\n.button:hover::after {\n  top: auto;\n  bottom: 0;\n  height: 100%;\n}\n.button:active {\n  top: 2px;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 50px 20px;\n  min-width: 320px;\n}\n@media screen and (min-width: 744px) {\n  .container {\n    max-width: 744px;\n    padding: 70px 72px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .container {\n    max-width: 1260px;\n    padding: 70px 120px;\n  }\n}\n\n/* Change Autocomplete styles in Chrome */\ninput:-webkit-autofill,\ntextarea:-webkit-autofill {\n  border: 1px solid #f8f8fa;\n  -webkit-text-fill-color: #161616;\n  box-shadow: 0 0 0 1000px #f8f8fa inset;\n  transition: all ease-in-out 0.3s;\n}\n\ninput:-webkit-autofill:hover,\ntextarea:-webkit-autofill:hover {\n  border: 1px solid #d5d7de;\n  box-shadow: 0 0 0 1000px #f8f8fa inset;\n}\n\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill:focus {\n  border: 1px solid #161616;\n  box-shadow: 0 0 0 1000px #f8f8fa inset;\n}\n\n.desktop {\n  display: none;\n}\n@media screen and (min-width: 1260px) {\n  .desktop {\n    display: block;\n  }\n}\n\n.no-tablet {\n  display: block;\n}\n@media screen and (min-width: 744px) {\n  .no-tablet {\n    display: none;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .no-tablet {\n    display: block;\n  }\n}\n\n.section--animation {\n  opacity: 0;\n  animation-duration: 0.65s;\n  animation-fill-mode: both;\n}\n.section--active .section--animation {\n  animation-name: fadeInUp;\n}\n\n.hero {\n  position: relative;\n  min-height: 100vh;\n  padding: 25px 20px;\n  margin-bottom: 50px;\n  background-image: url(\"../images/hero-mobile.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n@media screen and (min-width: 744px) {\n  .hero {\n    margin-bottom: 70px;\n    padding: 48px 72px;\n    background-image: url(\"../images/hero-tablet.jpg\");\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: cover;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .hero {\n    padding: 48px 118px;\n    background-image: url(\"../images/hero-desktop.jpg\");\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: cover;\n  }\n}\n\n.header {\n  position: relative;\n  z-index: 100;\n}\n.header__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__content {\n  margin-top: 19vh;\n  text-align: center;\n}\n@media screen and (min-width: 744px) {\n  .header__content {\n    margin-top: 15vh;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .header__content {\n    margin-top: 9vh;\n  }\n}\n.header__icons {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.logo {\n  width: 64px;\n  height: 46px;\n}\n@media screen and (min-width: 744px) {\n  .logo {\n    width: 87px;\n    height: 65px;\n  }\n}\n\n.icons__icon {\n  width: 24px;\n  height: 24px;\n}\n@media screen and (min-width: 744px) {\n  .icons__icon {\n    width: 32px;\n    height: 32px;\n  }\n}\n@media screen and (min-width: 744px) {\n  .icons {\n    gap: 55px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .icons {\n    gap: 60px;\n  }\n  .icons .icon-phone {\n    display: none;\n  }\n}\n\n.icon-menu {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  position: relative;\n  transform: rotate(0deg);\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n.icon-menu__line {\n  display: block;\n  height: 2px;\n  width: 18px;\n  background-color: #ffffff;\n  border-radius: 6px;\n  opacity: 1;\n  transform: rotate(0deg);\n  transition: 0.25s ease-in-out;\n}\n.icon-menu__line:nth-child(2), .icon-menu__line:nth-child(3) {\n  position: absolute;\n}\n@media screen and (min-width: 744px) {\n  .icon-menu__line {\n    width: 25px;\n  }\n}\n.icon-menu:hover .icon-menu__line:nth-child(1) {\n  width: 12px;\n}\n.icon-menu:hover .icon-menu__line:nth-child(4) {\n  width: 9px;\n}\n.icon-menu.open span:nth-child(1) {\n  top: 14px;\n  width: 0%;\n  left: 50%;\n}\n.icon-menu.open span:nth-child(2) {\n  transform: rotate(45deg);\n}\n.icon-menu.open span:nth-child(3) {\n  transform: rotate(-45deg);\n}\n.icon-menu.open span:nth-child(4) {\n  top: 10px;\n  width: 0%;\n  left: 50%;\n}\n.icon-menu.open:hover .icon-menu__line:nth-child(1) {\n  width: 0;\n}\n.icon-menu.open:hover .icon-menu__line:nth-child(4) {\n  width: 0;\n}\n\n.icon-contacts {\n  position: relative;\n}\n@media screen and (min-width: 1260px) {\n  .icon-contacts {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n}\n.icon-contacts:first-child .icon-contacts__info {\n  max-height: 1px;\n}\n.icon-contacts:first-child:hover .icon-contacts__info {\n  max-height: 150px;\n}\n.icon-contacts__info {\n  position: absolute;\n  right: 48px;\n  top: -40px;\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  line-height: 160%;\n  transition: 0.3s ease-in-out all;\n  overflow: hidden;\n}\n.icon-contacts__info-link, .icon-contacts__info-title {\n  display: block;\n  margin-bottom: 3px;\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.icon-contacts__info-link {\n  margin-bottom: 6px;\n  transition: opacity 0.3s ease-in-out;\n}\n.icon-contacts__info-link:hover {\n  opacity: 0.6;\n}\n\n.trigger-call {\n  position: relative;\n  transform-origin: 75% 25%;\n  animation: call 1s cubic-bezier(0.36, 0.07, 0.57, 0.99);\n  animation-delay: 0.5s;\n}\n.trigger-call::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n  z-index: 10;\n  background: #ffffff;\n  transform: translate(-50%, -50%);\n  animation: blow 0.4s ease-in-out;\n  animation-delay: 0.5s;\n}\n.trigger-call:hover {\n  animation: none;\n}\n.trigger-call:hover::after {\n  animation: none;\n}\n\n.image-video {\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  background-image: url(\"../images/hero-mobile.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  inset: 0;\n  opacity: 0;\n  scale: 1.2;\n  animation: kenburns 30s linear infinite;\n}\n@media screen and (min-width: 744px) {\n  .image-video {\n    background-image: url(\"../images/hero-tablet.jpg\");\n  }\n}\n@media screen and (min-width: 1260px) {\n  .image-video {\n    background-image: url(\"../images/hero-desktop.jpg\");\n  }\n}\n.image-video + .header .header__content {\n  text-shadow: 0 0 10px #161616;\n}\n\n.menu {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.75);\n  transition: opacity 0.5s ease, visibility 0.5s ease;\n  z-index: 200;\n  opacity: 1;\n}\n.menu.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n.menu.hidden .menu__wrapper {\n  transform: translateY(100%);\n}\n.menu__wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: flex-end;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: #d12d35;\n  transform: translateY(0);\n  transition: transform 0.5s ease;\n  transition-delay: 0.2s;\n}\n.menu__header {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px 20px;\n  color: #ffffff;\n  text-transform: uppercase;\n  background-color: #d12d35;\n}\n@media screen and (min-width: 744px) {\n  .menu__header {\n    padding: 48px 72px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .menu__header {\n    padding: 48px 118px;\n  }\n}\n.menu__content {\n  padding: 15px 20px;\n  overflow-y: auto;\n}\n@media screen and (min-width: 744px) {\n  .menu__content {\n    padding: 15px 72px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .menu__content {\n    padding: 48px 118px;\n  }\n}\n.menu__link {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 32px;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 100%;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  background-image: linear-gradient(to right, #eb343d, #ffffff 50%, #ffffff 50%);\n  background-size: 200% 100%;\n  background-position: -100%;\n  transition: all 0.3s ease-in-out;\n}\n.menu__link::before {\n  content: \"\";\n  background: #ffffff;\n  display: block;\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  transition: all 0.3s ease-in-out;\n}\n.menu__link:hover {\n  background-position: 0;\n}\n.menu__link:hover::before {\n  width: 100%;\n}\n.menu__contacts {\n  display: flex;\n  flex-direction: column;\n}\n.menu__contacts-contact {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  margin-bottom: 8px;\n  font-weight: 700;\n  line-height: 170%;\n  color: #ffffff;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.menu__contacts-contact--last {\n  padding-top: 2px;\n  font-size: 15px;\n}\n.menu__contacts-contact:hover .menu__contacts-number::before {\n  width: 100%;\n}\n.menu__contacts-number {\n  position: relative;\n  display: inline-block;\n  width: fit-content;\n}\n.menu__contacts-number::before {\n  content: \"\";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  display: block;\n  width: 0%;\n  height: 1px;\n  background: #ffffff;\n  transition: all 0.3s ease-in-out;\n}\n.menu__contacts-number:hover::before {\n  width: 100%;\n}\n\n.schedule {\n  position: relative;\n  z-index: 200;\n  margin-top: 50px;\n  box-shadow: 0 50px 0 #ffffff;\n}\n@media screen and (min-width: 744px) {\n  .schedule {\n    margin-top: 70px;\n    box-shadow: 0 70px 0 #ffffff;\n  }\n}\n.schedule__header {\n  margin-bottom: 28px;\n}\n.schedule__content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.schedule__item {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.schedule__subtitle {\n  color: #d12d35;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 140%;\n}\n.schedule__text:last-child {\n  padding-top: 10px;\n  line-height: 150%;\n}\n.schedule__text:last-child .schedule__main-text {\n  display: block;\n  margin-bottom: 4px;\n}\n.schedule__main-text {\n  display: inline-block;\n  min-width: 42%;\n  font-weight: 700;\n}\n.schedule__item-title {\n  margin-bottom: 8px;\n}\n@media screen and (min-width: 744px) {\n  .schedule .container {\n    display: flex;\n  }\n  .schedule__header {\n    flex: 1;\n  }\n  .schedule__title, .schedule__subtitle {\n    width: 200px;\n  }\n  .schedule__content {\n    flex: 1;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .schedule__header {\n    flex: 0.75;\n  }\n  .schedule__title, .schedule__subtitle {\n    width: auto;\n  }\n  .schedule__item {\n    gap: 13px;\n  }\n  .schedule__text:last-child {\n    padding-top: 8px;\n  }\n  .schedule__content {\n    gap: 25px;\n  }\n}\n\n.current {\n  min-height: 100vh;\n  line-height: 155%;\n}\n.current__header {\n  margin-bottom: 50px;\n  text-align: center;\n}\n.current__title {\n  margin-bottom: 8px;\n}\n.current__item:not(:last-child) {\n  margin-bottom: 50px;\n}\n.current__item-photos--2 {\n  gap: 20px;\n}\n@media screen and (min-width: 320px) {\n  .current__item-photos--2 {\n    max-height: 130px;\n  }\n}\n.current__item-photos--3 {\n  gap: 8px;\n}\n@media screen and (min-width: 320px) {\n  .current__item-photos--3 {\n    max-height: 170px;\n  }\n}\n.current__item-photos {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n@media screen and (min-width: 744px) {\n  .current__item-photos {\n    max-height: max-content;\n  }\n}\n.current__item-image img {\n  transition: all 0.3s ease;\n}\n.current__item-image:hover img {\n  transform: scale(1.2);\n  object-fit: cover;\n  filter: grayscale(100%);\n}\n.current__item-title {\n  margin-bottom: 2px;\n  color: #d12d35;\n  font-weight: 700;\n}\n.current__actions {\n  text-align: center;\n}\n.current__actions-button {\n  width: 100%;\n}\n@media screen and (min-width: 744px) {\n  .current__subtitle {\n    width: 300px;\n    margin: 0 auto;\n  }\n  .current__actions-button {\n    width: fit-content;\n    min-width: 392px;\n  }\n  .current__item-photos--2 .image--square {\n    height: 186px;\n    width: 186px;\n  }\n  .current__item-photos--2 .image--long {\n    flex: 1;\n  }\n  .current__item-photos--3 {\n    gap: 20px;\n  }\n  .current__item-photos--3 .image:nth-child(3) {\n    display: none;\n  }\n  .current__item:not(:last-child) {\n    margin-bottom: 46px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .current__item-photos--2 {\n    gap: 28px;\n  }\n  .current__item-photos--2 .image--square {\n    height: 320px;\n    width: 320px;\n  }\n  .current__item-photos--3 .image:nth-child(3) {\n    display: block;\n  }\n  .current__actions-button {\n    min-width: 325px;\n  }\n}\n\n.image {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (min-width: 320px) {\n  .image--long {\n    flex: 1;\n  }\n}\n@media screen and (min-width: 320px) {\n  .image--long .image__image {\n    width: inherit;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n.image--square img {\n  width: inherit;\n  height: inherit;\n}\n@media screen and (min-width: 320px) {\n  .image--square {\n    width: 130px;\n  }\n}\n.image__image {\n  object-fit: cover;\n}\n.image__hover {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #d12d35;\n  color: #ffffff;\n  font-size: 32px;\n  font-weight: 700;\n  text-transform: uppercase;\n  opacity: 0.5;\n  transform: translateX(-100%);\n  transition: all 0.5s ease-in-out;\n}\n.image:hover .image__hover {\n  transform: translateX(0%);\n}\n.image__hover--bottom {\n  transform: translateY(100%);\n}\n.image:hover .image__hover--bottom {\n  transform: translateY(0%);\n}\n.image__hover--top {\n  transform: translateY(-100%);\n}\n.image:hover .image__hover--top {\n  transform: translateY(0%);\n}\n.image__hover--right {\n  transform: translateX(100%);\n}\n.image:hover .image__hover--right {\n  transform: translateX(0%);\n}\n\n.more {\n  overflow: hidden;\n}\n.more__header {\n  text-align: center;\n  margin-bottom: 38px;\n  line-height: 110%;\n}\n.more__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.more__item:not(:last-child) {\n  margin-bottom: 50px;\n}\n.more__item-photo {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 26px;\n  transition: all 0.3s ease;\n}\n.more__item-photo:hover {\n  transform: scale(1.1);\n}\n.more__item-photo::before {\n  position: absolute;\n  top: 0;\n  left: -75%;\n  z-index: 2;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n  background: #d12d35;\n  opacity: 0.5;\n  transform: skewX(-25deg);\n}\n.more__item-photo:hover::before {\n  animation: shine 0.75s;\n}\n.more__item-content {\n  text-align: center;\n}\n.more__item-title {\n  margin-bottom: 8px;\n  color: #d12d35;\n}\n.more__item-text {\n  line-height: 160%;\n}\n@media screen and (min-width: 744px) {\n  .more__header {\n    margin-bottom: 48px;\n  }\n  .more__item {\n    max-width: 392px;\n    margin: 0 auto;\n    flex: 1;\n  }\n  .more__item-photo {\n    margin-bottom: 32px;\n  }\n  .more__content {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n  }\n  .more__item:not(:last-child) {\n    margin-bottom: 25px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .more__content {\n    flex-direction: row;\n  }\n  .more__title {\n    margin: 0 auto;\n    width: 450px;\n    line-height: 105%;\n  }\n  .more__item-photo {\n    margin-bottom: 35px;\n  }\n  .more__item-text {\n    line-height: 165%;\n  }\n  .more__item:not(:last-child) {\n    margin-bottom: 50px;\n  }\n}\n\n.contacts__header {\n  margin-bottom: 48px;\n}\n.contacts__title {\n  text-align: center;\n}\n.contacts__info-item {\n  margin-bottom: 50px;\n}\n.contacts__info-title {\n  margin-bottom: 22px;\n}\n.contacts .adress__link {\n  display: block;\n  margin-bottom: 16px;\n  text-decoration: none;\n  color: #161616;\n  font-size: 15px;\n  font-weight: 700;\n  transition: color ease-in-out 0.3s;\n}\n.contacts .adress__link:hover {\n  color: #d12d35;\n}\n.contacts .adress__title {\n  display: block;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n.contacts__form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.contacts__input {\n  padding: 12px 11px;\n  border: 1px solid transparent;\n  background: #f8f8fa;\n  color: #161616;\n  transition: all ease-in-out 0.3s;\n}\n.contacts__input:hover {\n  border: 1px solid #d5d7de;\n}\n.contacts__input:focus {\n  border: 1px solid #161616;\n}\n.contacts__button {\n  margin: 20px 0;\n}\n@media screen and (min-width: 744px) {\n  .contacts__header {\n    margin-bottom: 52px;\n  }\n  .contacts__content {\n    display: flex;\n    justify-content: space-between;\n    gap: 23px;\n  }\n  .contacts__info {\n    flex: 1;\n  }\n  .contacts__form {\n    flex: 1;\n  }\n  .contacts__info-item {\n    margin-bottom: 55px;\n  }\n}\n@media screen and (min-width: 1260px) {\n  .contacts__header {\n    margin-bottom: 45px;\n  }\n  .contacts__content {\n    gap: 65px;\n  }\n  .contacts__info {\n    display: flex;\n    gap: 75px;\n  }\n  .contacts .container {\n    padding-top: 20px;\n  }\n  .contacts__form {\n    flex: 0.75;\n  }\n}\n\n.footer {\n  min-height: 200px;\n  margin-top: 30px;\n  background-image: url(\"../images/footer-mobile-3.jpg\");\n  background-attachment: fixed;\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n@media screen and (min-width: 744px) {\n  .footer {\n    min-height: 360px;\n    background-image: url(\"../images/footer-tablet-2.jpg\");\n  }\n}\n@media screen and (min-width: 1260px) {\n  .footer {\n    background-image: url(\"../images/footer-desktop-1.jpg\");\n  }\n}","/**\n * Modern CSS Reset Tweaks\n * ================================================== */\nhtml {\n  -webkit-text-size-adjust: 100%;\n\n  &:focus-within {\n    scroll-behavior: smooth;\n  }\n}\n\nbody {\n  text-size-adjust: 100%;\n  position: relative;\n\n  width: 100%;\n  min-height: 100vh;\n\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeSpeed;\n}\n\n\n/* Box sizing normalization */\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n\n/* Elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n\n/**\n * CSS Reset Tweaks\n *\n * http://meyerweb.com/eric/tools/css/reset/\n * v2.0-modified | 20110126\n * License: none (public domain)\n */\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  font-size: 100%;\n  font: inherit;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\nmain,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n\n  &:before,\n  &:after {\n    content: '';\n    content: none;\n  }\n}\n\n/**\n * Input Reset\n */\ninput:required,\ninput {\n  box-shadow: none;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\ninput {\n  &:focus {\n    outline: none;\n  }\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: none;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  height: auto;\n}\n\n/* Make pictures easier to work with */\npicture {\n  display: inline-block;\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n[disabled] {\n  pointer-events: none;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  padding: 0;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\nbutton {\n  border: 0;\n  background: transparent;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  text-indent: 0;\n}\n\n\n/**\n * Based on normalize.css v8.0.1\n * github.com/necolas/normalize.css\n */\nhr {\n  box-sizing: content-box;\n  overflow: visible;\n  background: #000;\n  border: 0;\n  height: 1px;\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n  page-break-after: always;\n  width: 100%;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  font-size: 100%;\n}\n\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  text-decoration: none;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 75%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -5px;\n}\n\nsup {\n  top: -5px;\n}\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n  outline: 0;\n}\n\n\nlegend {\n  color: inherit;\n  white-space: normal;\n\n  display: block;\n  border: 0;\n  max-width: 100%;\n  width: 100%;\n}\n\nfieldset {\n  min-width: 0;\n}\n\nbody:not(:-moz-handler-blocked) fieldset {\n  display: block;\n}\n\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/*\n * Misc\n * ========================================================================== */\n\ntemplate {\n  display: none;\n}\n","@use \"scss-reset/reset\";\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Cinzel\", serif;\n}\n\ntextarea {\n  resize: none;\n}\n\n.h1,\n.h2,\n.h3 {\n  font-weight: 700;\n}\n\n.h1 {\n  font-size: 40px;\n  line-height: 105%;\n  color: $white;\n\n  @include tablet {\n    font-size: 60px;\n  }\n\n  @include desktop {\n    font-size: 77px;\n  }\n}\n\n.h2 {\n  font-size: 30px;\n  color: $dark;\n  line-height: 115%;\n\n  @include tablet {\n    font-size: 46px;\n    line-height: 105%;\n  }\n\n  @include desktop {\n    font-size: 46px;\n    line-height: 115%;\n  }\n}\n\n.h3 {\n  font-size: 24px;\n\n  @include desktop {\n    line-height: 110%;\n  }\n}\n\n.h4 {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.p {\n  color: $dark;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.button {\n  @include btn;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 50px 20px;\n  min-width: 320px;\n\n  @include tablet {\n    max-width: 744px;\n    padding: 70px 72px;\n  }\n\n  @include desktop {\n    max-width: 1260px;\n    padding: 70px 120px;\n  }\n}\n\n/* Change Autocomplete styles in Chrome */\ninput:-webkit-autofill,\ntextarea:-webkit-autofill {\n  border: 1px solid $bg;\n  -webkit-text-fill-color: $dark;\n  box-shadow: 0 0 0 1000px $bg inset;\n  transition: all ease-in-out 0.3s;\n}\n\ninput:-webkit-autofill:hover,\ntextarea:-webkit-autofill:hover {\n  border: 1px solid $border;\n  box-shadow: 0 0 0 1000px $bg inset;\n}\n\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill:focus {\n  border: 1px solid $dark;\n  box-shadow: 0 0 0 1000px $bg inset;\n}\n\n.desktop {\n  display: none;\n\n  @include desktop {\n    display: block;\n  }\n}\n\n.no-tablet {\n  display: block;\n\n  @include tablet {\n    display: none;\n  }\n\n  @include desktop {\n    display: block;\n  }\n}\n\n.section--animation {\n  opacity: 0;\n  animation-duration: 0.65s;\n  animation-fill-mode: both;\n\n  .section--active & {\n    animation-name: fadeInUp;\n  }\n}\n","$main-accent: #d12d35;\n$main-accent-dark: #ae1c23;\n$main-accent-light: #eb343d;\n\n$dark: #161616;\n$white: #ffffff;\n\n$text: #7e7e83;\n$bg: #f8f8fa;\n$border: #d5d7de;\n\n$mobile-width: 320px;\n$tablet-width: 744px;\n$desktop-width: 1260px;\n","@mixin container {\n  width: 100%;\n  min-width: 320px;\n  max-width: 1020px;\n\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n@mixin btn {\n  position: relative;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 14px 48px;\n  min-width: 160px;\n  min-height: 56px;\n\n  color: $white;\n  background-color: $main-accent;\n  font-weight: 700;\n  text-decoration: none;\n\n  transition: all 0.3s ease;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  z-index: 1;\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 0;\n\n    z-index: -1;\n    background-color: $main-accent-dark;\n    transition: all 0.3s ease;\n  }\n\n  &:hover::after {\n    top: auto;\n    bottom: 0;\n    height: 100%;\n  }\n\n  &:active {\n    top: 2px;\n  }\n}\n\n@mixin mobile {\n  @media screen and (min-width: $mobile-width) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media screen and (min-width: $tablet-width) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media screen and (min-width: $desktop-width) {\n    @content;\n  }\n}\n",".hero {\n  position: relative;\n  min-height: 100vh;\n  padding: 25px 20px;\n  margin-bottom: 50px;\n\n  background-image: url(\"../images/hero-mobile.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  overflow: hidden;\n\n  @include tablet {\n    margin-bottom: 70px;\n    padding: 48px 72px;\n    background-image: url(\"../images/hero-tablet.jpg\");\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: cover;\n  }\n\n  @include desktop {\n    padding: 48px 118px;\n    background-image: url(\"../images/hero-desktop.jpg\");\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: cover;\n  }\n}\n\n.header {\n  position: relative;\n  z-index: 100;\n\n  &__top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  &__content {\n    margin-top: 19vh;\n    text-align: center;\n\n    @include tablet {\n      margin-top: 15vh;\n    }\n\n    @include desktop {\n      margin-top: 9vh;\n    }\n  }\n\n  &__icons {\n    display: flex;\n    align-items: center;\n    gap: 24px;\n  }\n}\n\n.logo {\n  width: 64px;\n  height: 46px;\n\n  @include tablet {\n    width: 87px;\n    height: 65px;\n  }\n}\n\n.icons {\n  &__icon {\n    width: 24px;\n    height: 24px;\n\n    @include tablet {\n      width: 32px;\n      height: 32px;\n    }\n  }\n\n  @include tablet {\n    gap: 55px;\n  }\n\n  @include desktop {\n    gap: 60px;\n\n    .icon-phone {\n      display: none;\n    }\n  }\n}\n\n.icon-menu {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  position: relative;\n\n  transform: rotate(0deg);\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n\n  background: transparent;\n  border: none;\n  outline: none;\n\n  &__line {\n    display: block;\n    height: 2px;\n    width: 18px;\n\n    background-color: $white;\n    border-radius: 6px;\n    opacity: 1;\n    transform: rotate(0deg);\n    transition: 0.25s ease-in-out;\n\n    &:nth-child(2),\n    &:nth-child(3) {\n      position: absolute;\n    }\n\n    @include tablet {\n      width: 25px;\n    }\n  }\n\n  &:hover {\n    .icon-menu__line:nth-child(1) {\n      width: 12px;\n    }\n\n    .icon-menu__line:nth-child(4) {\n      width: 9px;\n    }\n  }\n\n  &.open span:nth-child(1) {\n    top: 14px;\n    width: 0%;\n    left: 50%;\n  }\n\n  &.open span:nth-child(2) {\n    transform: rotate(45deg);\n  }\n\n  &.open span:nth-child(3) {\n    transform: rotate(-45deg);\n  }\n\n  &.open span:nth-child(4) {\n    top: 10px;\n    width: 0%;\n    left: 50%;\n  }\n\n  &.open:hover {\n    .icon-menu__line:nth-child(1) {\n      width: 0;\n    }\n\n    .icon-menu__line:nth-child(4) {\n      width: 0;\n    }\n  }\n}\n\n.icon-contacts {\n  position: relative;\n\n  @include desktop {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n\n  &:first-child &__info {\n    max-height: 1px;\n  }\n\n  &:first-child:hover &__info {\n    max-height: 150px;\n  }\n\n  &__info {\n    position: absolute;\n    right: 48px;\n    top: -40px;\n\n    display: flex;\n    flex-direction: column;\n\n    text-align: right;\n    line-height: 160%;\n\n    transition: 0.3s ease-in-out all;\n    overflow: hidden;\n\n    &-link,\n    &-title {\n      display: block;\n      margin-bottom: 3px;\n      color: $white;\n      font-size: 17px;\n      font-weight: 700;\n      text-decoration: none;\n      white-space: nowrap;\n    }\n\n    &-link {\n      margin-bottom: 6px;\n      transition: opacity 0.3s ease-in-out;\n\n      &:hover {\n        opacity: 0.6;\n      }\n    }\n  }\n}\n\n.trigger-call {\n  position: relative;\n  transform-origin: 75% 25%;\n  animation: call 1s cubic-bezier(0.36, 0.07, 0.57, 0.99);\n  animation-delay: 0.5s;\n\n  &::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 50%;\n    z-index: 10;\n    background: $white;\n    transform: translate(-50%, -50%);\n    animation: blow 0.4s ease-in-out;\n    animation-delay: 0.5s;\n  }\n\n  &:hover {\n    animation: none;\n  }\n\n  &:hover::after {\n    animation: none;\n  }\n}\n\n.image-video {\n  position: absolute;\n\n  height: 100vh;\n  width: 100vw;\n\n  background-image: url(\"../images/hero-mobile.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n\n  inset: 0;\n  opacity: 0;\n  scale: 1.2;\n  animation: kenburns 30s linear infinite;\n\n  @include tablet {\n    background-image: url(\"../images/hero-tablet.jpg\");\n  }\n\n  @include desktop {\n    background-image: url(\"../images/hero-desktop.jpg\");\n  }\n\n  & + .header .header__content {\n    text-shadow: 0 0 10px $dark;\n  }\n}\n",".menu {\n  position: fixed;\n  inset: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 100%;\n  width: 100%;\n\n  background: rgba(0, 0, 0, 0.75);\n  transition:\n    opacity 0.5s ease,\n    visibility 0.5s ease;\n  z-index: 200;\n  opacity: 1;\n\n  &.hidden {\n    opacity: 0;\n    visibility: hidden;\n\n    .menu__wrapper {\n      transform: translateY(100%);\n    }\n  }\n\n  &__wrapper {\n    position: relative;\n\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: flex-end;\n\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n\n    background-color: $main-accent;\n    transform: translateY(0);\n    transition: transform 0.5s ease;\n    transition-delay: 0.2s;\n  }\n\n  &__header {\n    position: relative;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 25px 20px;\n\n    color: $white;\n    text-transform: uppercase;\n    background-color: $main-accent;\n\n    @include tablet {\n      padding: 48px 72px;\n    }\n\n    @include desktop {\n      padding: 48px 118px;\n    }\n  }\n\n  &__content {\n    padding: 15px 20px;\n    overflow-y: auto;\n\n    @include tablet {\n      padding: 15px 72px;\n    }\n\n    @include desktop {\n      padding: 48px 118px;\n    }\n  }\n\n  &__link {\n    position: relative;\n\n    display: inline-block;\n    margin-bottom: 32px;\n\n    font-size: 22px;\n    font-weight: 700;\n    line-height: 100%;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    text-decoration: none;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n\n    background-image: linear-gradient(to right, $main-accent-light, $white 50%, $white 50%);\n    background-size: 200% 100%;\n    background-position: -100%;\n\n    transition: all 0.3s ease-in-out;\n\n    &::before {\n      content: \"\";\n      background: $white;\n      display: block;\n      position: absolute;\n      bottom: -8px;\n      left: 0;\n      width: 0;\n      height: 1px;\n      transition: all 0.3s ease-in-out;\n    }\n\n    &:hover {\n      background-position: 0;\n    }\n\n    &:hover::before {\n      width: 100%;\n    }\n  }\n\n  &__contacts {\n    display: flex;\n    flex-direction: column;\n\n    &-contact {\n      display: flex;\n      flex-direction: column;\n      width: fit-content;\n      margin-bottom: 8px;\n\n      font-weight: 700;\n      line-height: 170%;\n      color: $white;\n      text-decoration: none;\n      text-transform: uppercase;\n    }\n\n    &-contact--last {\n      padding-top: 2px;\n      font-size: 15px;\n    }\n\n    &-contact:hover .menu__contacts-number::before {\n      width: 100%;\n    }\n\n    &-number {\n      position: relative;\n      display: inline-block;\n      width: fit-content;\n    }\n\n    &-number::before {\n      content: \"\";\n      position: absolute;\n      bottom: -4px;\n      left: 0;\n      display: block;\n      width: 0%;\n      height: 1px;\n      background: $white;\n      transition: all 0.3s ease-in-out;\n    }\n\n    &-number:hover::before {\n      width: 100%;\n    }\n  }\n}\n",".schedule {\n  position: relative;\n  z-index: 200;\n  margin-top: 50px;\n  box-shadow: 0 50px 0 $white;\n\n  @include tablet {\n    margin-top: 70px;\n    box-shadow: 0 70px 0 $white;\n  }\n\n  &__header {\n    margin-bottom: 28px;\n  }\n\n  &__content {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n  }\n\n  &__item {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  &__subtitle {\n    color: $main-accent;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 140%;\n  }\n\n  &__text:last-child {\n    padding-top: 10px;\n    line-height: 150%;\n\n    .schedule__main-text {\n      display: block;\n      margin-bottom: 4px;\n    }\n  }\n\n  &__main-text {\n    display: inline-block;\n    min-width: 42%;\n    font-weight: 700;\n  }\n\n  &__item-title {\n    margin-bottom: 8px;\n  }\n\n  @include tablet {\n    .container {\n      display: flex;\n    }\n\n    &__header {\n      flex: 1;\n    }\n\n    &__title,\n    &__subtitle {\n      width: 200px;\n    }\n\n    &__content {\n      flex: 1;\n    }\n  }\n\n  @include desktop {\n    &__header {\n      flex: 0.75;\n    }\n\n    &__title,\n    &__subtitle {\n      width: auto;\n    }\n\n    &__item {\n      gap: 13px;\n    }\n\n    &__text:last-child {\n      padding-top: 8px;\n    }\n\n    &__content {\n      gap: 25px;\n    }\n  }\n}\n",".current {\n  min-height: 100vh;\n  line-height: 155%;\n\n  &__header {\n    margin-bottom: 50px;\n    text-align: center;\n  }\n\n  &__title {\n    margin-bottom: 8px;\n  }\n\n  &__item:not(:last-child) {\n    margin-bottom: 50px;\n  }\n\n  &__item-photos--2 {\n    gap: 20px;\n\n    @include mobile {\n      max-height: 130px;\n    }\n  }\n\n  &__item-photos--3 {\n    gap: 8px;\n\n    @include mobile {\n      max-height: 170px;\n    }\n  }\n\n  &__item-photos {\n    display: flex;\n    justify-content: space-between;\n\n    margin-bottom: 25px;\n\n    @include tablet {\n      max-height: max-content;\n    }\n  }\n\n  &__item-image {\n    img {\n      transition: all 0.3s ease;\n    }\n\n    &:hover {\n      img {\n        transform: scale(1.2);\n        object-fit: cover;\n        filter: grayscale(100%);\n      }\n    }\n  }\n\n  &__item-title {\n    margin-bottom: 2px;\n\n    color: $main-accent;\n    font-weight: 700;\n  }\n\n  &__actions {\n    text-align: center;\n\n    &-button {\n      width: 100%;\n    }\n  }\n\n  @include tablet {\n    &__subtitle {\n      width: 300px;\n      margin: 0 auto;\n    }\n\n    &__actions-button {\n      width: fit-content;\n      min-width: 392px;\n    }\n\n    &__item-photos--2 {\n      .image--square {\n        height: 186px;\n        width: 186px;\n      }\n\n      .image--long {\n        flex: 1;\n      }\n    }\n\n    &__item-photos--3 {\n      gap: 20px;\n\n      .image:nth-child(3) {\n        display: none;\n      }\n    }\n\n    &__item:not(:last-child) {\n      margin-bottom: 46px;\n    }\n  }\n\n  @include desktop {\n    &__item-photos--2 {\n      gap: 28px;\n\n      .image--square {\n        height: 320px;\n        width: 320px;\n      }\n    }\n\n    &__item-photos--3 {\n      .image:nth-child(3) {\n        display: block;\n      }\n    }\n\n    &__actions-button {\n      min-width: 325px;\n    }\n  }\n}\n\n.image {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n\n  &--long {\n    @include mobile {\n      flex: 1;\n    }\n  }\n\n  &--long .image__image {\n    @include mobile {\n      width: inherit;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  &--square {\n    img {\n      width: inherit;\n      height: inherit;\n    }\n\n    @include mobile {\n      width: 130px;\n    }\n  }\n\n  &__image {\n    object-fit: cover;\n  }\n\n  &__hover {\n    position: absolute;\n    inset: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: $main-accent;\n    color: $white;\n    font-size: 32px;\n    font-weight: 700;\n    text-transform: uppercase;\n    opacity: 0.5;\n\n    transform: translateX(-100%);\n    transition: all 0.5s ease-in-out;\n  }\n\n  &:hover &__hover {\n    transform: translateX(0%);\n  }\n\n  &__hover--bottom {\n    transform: translateY(100%);\n  }\n\n  &:hover &__hover--bottom {\n    transform: translateY(0%);\n  }\n\n  &__hover--top {\n    transform: translateY(-100%);\n  }\n\n  &:hover &__hover--top {\n    transform: translateY(0%);\n  }\n\n  &__hover--right {\n    transform: translateX(100%);\n  }\n\n  &:hover &__hover--right {\n    transform: translateX(0%);\n  }\n}\n",".more {\n  overflow: hidden;\n\n  &__header {\n    text-align: center;\n    margin-bottom: 38px;\n    line-height: 110%;\n  }\n\n  &__item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  &__item:not(:last-child) {\n    margin-bottom: 50px;\n  }\n\n  &__item-photo {\n    position: relative;\n    overflow: hidden;\n    margin-bottom: 26px;\n    transition: all 0.3s ease;\n\n    &:hover {\n      transform: scale(1.1);\n    }\n\n    &::before {\n      position: absolute;\n      top: 0;\n      left: -75%;\n      z-index: 2;\n      display: block;\n      content: \"\";\n      width: 50%;\n      height: 100%;\n      background: #d12d35;\n      opacity: 0.5;\n      transform: skewX(-25deg);\n    }\n\n    &:hover::before {\n      animation: shine 0.75s;\n    }\n  }\n\n  &__item-content {\n    text-align: center;\n  }\n\n  &__item-title {\n    margin-bottom: 8px;\n    color: $main-accent;\n  }\n\n  &__item-text {\n    line-height: 160%;\n  }\n\n  @include tablet {\n    &__header {\n      margin-bottom: 48px;\n    }\n\n    &__item {\n      max-width: 392px;\n      margin: 0 auto;\n      flex: 1;\n    }\n\n    &__item-photo {\n      margin-bottom: 32px;\n    }\n\n    &__content {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n    }\n\n    &__item:not(:last-child) {\n      margin-bottom: 25px;\n    }\n  }\n\n  @include desktop {\n    &__content {\n      flex-direction: row;\n    }\n\n    &__title {\n      margin: 0 auto;\n      width: 450px;\n      line-height: 105%;\n    }\n\n    &__item-photo {\n      margin-bottom: 35px;\n    }\n\n    &__item-text {\n      line-height: 165%;\n    }\n\n    &__item:not(:last-child) {\n      margin-bottom: 50px;\n    }\n  }\n}\n",".contacts {\n  &__header {\n    margin-bottom: 48px;\n  }\n\n  &__title {\n    text-align: center;\n  }\n\n  &__info-item {\n    margin-bottom: 50px;\n  }\n\n  &__info-title {\n    margin-bottom: 22px;\n  }\n\n  .adress__link {\n    display: block;\n    margin-bottom: 16px;\n    text-decoration: none;\n    color: $dark;\n    font-size: 15px;\n    font-weight: 700;\n    transition: color ease-in-out 0.3s;\n\n    &:hover {\n      color: $main-accent;\n    }\n  }\n\n  .adress__title {\n    display: block;\n    font-weight: 400;\n    margin-bottom: 10px;\n  }\n\n  &__form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  &__input {\n    padding: 12px 11px;\n    border: 1px solid transparent;\n    background: $bg;\n    color: $dark;\n    transition: all ease-in-out 0.3s;\n\n    &:hover {\n      border: 1px solid $border;\n    }\n\n    &:focus {\n      border: 1px solid $dark;\n    }\n  }\n\n  &__button {\n    margin: 20px 0;\n  }\n\n  @include tablet {\n    &__header {\n      margin-bottom: 52px;\n    }\n\n    &__content {\n      display: flex;\n      justify-content: space-between;\n      gap: 23px;\n    }\n\n    &__info {\n      flex: 1;\n    }\n\n    &__form {\n      flex: 1;\n    }\n\n    &__info-item {\n      margin-bottom: 55px;\n    }\n  }\n\n  @include desktop {\n    &__header {\n      margin-bottom: 45px;\n    }\n\n    &__content {\n      gap: 65px;\n    }\n\n    &__info {\n      display: flex;\n      gap: 75px;\n    }\n\n    .container {\n      padding-top: 20px;\n    }\n\n    &__form {\n      flex: 0.75;\n    }\n  }\n}\n",".footer {\n  min-height: 200px;\n  margin-top: 30px;\n  background-image: url(\"../images/footer-mobile-3.jpg\");\n  background-attachment: fixed;\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n\n  @include tablet {\n    min-height: 360px;\n    background-image: url(\"../images/footer-tablet-2.jpg\");\n  }\n\n  @include desktop {\n    background-image: url(\"../images/footer-desktop-1.jpg\");\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/images/footer-desktop-1.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/footer-desktop-1.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42c177706df49e5e4d7c.jpg";

/***/ }),

/***/ "./src/assets/images/footer-mobile-3.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/footer-mobile-3.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50c11a25dc55c983d800.jpg";

/***/ }),

/***/ "./src/assets/images/footer-tablet-2.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/footer-tablet-2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5005c5eae037c0e17a56.jpg";

/***/ }),

/***/ "./src/assets/images/hero-desktop.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/hero-desktop.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d2fa4dc4228759194d8.jpg";

/***/ }),

/***/ "./src/assets/images/hero-mobile.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/hero-mobile.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1112b158d04eb094abc2.jpg";

/***/ }),

/***/ "./src/assets/images/hero-tablet.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/hero-tablet.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1059140ce817da963568.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/index.scss */ "./src/assets/scss/index.scss");

function toggleClass(className, event) {
    var element = event.currentTarget;
    if (element.classList.contains(className)) {
        element.classList.remove(className);
        return;
    }
    element.classList.add(className);
}
var MenuIDs;
(function (MenuIDs) {
    MenuIDs["open"] = "open-menu";
    MenuIDs["close"] = "close-menu";
    MenuIDs["menu"] = "menu";
})(MenuIDs || (MenuIDs = {}));
var MenuClasses;
(function (MenuClasses) {
    MenuClasses["removeBodyScroll"] = "no-scroll";
    MenuClasses["hideMenu"] = "hidden";
    MenuClasses["openMenuBlock"] = "open";
})(MenuClasses || (MenuClasses = {}));
var Menu = /** @class */ (function () {
    function Menu(openButton, closeButton, blockToShow) {
        this.openButton = openButton;
        this.closeButton = closeButton;
        this.blockToShow = blockToShow;
        this.addToggleIcon(openButton);
        document.body.addEventListener("click", this.toggleMenu.bind(this));
        this.addOnMenuLinkClick();
    }
    Menu.prototype.addToggleIcon = function (element) {
        element.addEventListener("click", toggleClass.bind(null, MenuClasses.openMenuBlock));
    };
    Menu.prototype.toggleMenu = function (event) {
        var _this = this;
        var clicked = event.target;
        var button = clicked.id ? clicked : clicked.parentNode;
        if (button.id === MenuIDs.open) {
            this.blockToShow.classList.remove(MenuClasses.hideMenu);
            document.body.classList.add(MenuClasses.removeBodyScroll);
            setTimeout(function () {
                _this.openButton.classList.remove(MenuClasses.openMenuBlock);
            }, 500);
        }
        if (button.id === MenuIDs.close) {
            this.blockToShow.classList.add(MenuClasses.hideMenu);
            document.body.classList.remove(MenuClasses.removeBodyScroll);
        }
    };
    Menu.prototype.addOnMenuLinkClick = function () {
        if (this.blockToShow) {
            this.blockToShow.addEventListener("click", this.scrollTo.bind(this));
        }
    };
    Menu.prototype.scrollTo = function (e) {
        var element = e.target;
        var href = element.href;
        if (href) {
            var id = href.split("#")[1];
            if (id) {
                this.blockToShow.classList.add(MenuClasses.hideMenu);
                document.body.classList.remove(MenuClasses.removeBodyScroll);
            }
        }
    };
    return Menu;
}());
var openMenuButton = document.querySelector("#".concat(MenuIDs.open));
var closeMenuButton = document.querySelector("#".concat(MenuIDs.close));
var menu = document.querySelector("#".concat(MenuIDs.menu));
if (openMenuButton && closeMenuButton && menu) {
    new Menu(openMenuButton, closeMenuButton, menu);
}
var callAnimation = function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (icon) {
            if (icon.isIntersecting) {
                icon.target.classList.add("trigger-call");
            }
            else {
                icon.target.classList.remove("trigger-call");
            }
        });
    });
    var icons = Array.from(window.document.querySelectorAll('[data-icon="phone"]'));
    if (icons.length > 0) {
        icons.forEach(function (icon) { return observer.observe(icon); });
    }
};
var heroAnimation = function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (block) {
            if (block.isIntersecting) {
                block.target.classList.add("image-video");
            }
            else {
                block.target.classList.remove("image-video");
            }
        });
    });
    var hero = window.document.querySelector('[data-block="hero"]');
    if (hero) {
        observer.observe(hero);
    }
};
var intersectionHandler = function (entry) {
    var next = entry.target;
    if (next) {
        next.classList.add("section--active");
    }
};
var contentAnimation = function () {
    var sections = Array.from(document.querySelectorAll('[data-block="section"]'));
    var config = {
        rootMargin: "0px",
        threshold: 0.02,
    };
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                intersectionHandler(entry);
            }
        });
    }, config);
    if (sections.length) {
        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
};
window.addEventListener("load", callAnimation);
window.addEventListener("load", heroAnimation);
window.addEventListener("load", contentAnimation);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZTE0ZjE5YTM1ZTQzYWJlYTFlMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLHFJQUE0QztBQUN4Riw0Q0FBNEMscUlBQTRDO0FBQ3hGLDRDQUE0Qyx1SUFBNkM7QUFDekYsNENBQTRDLDZJQUFnRDtBQUM1Riw0Q0FBNEMsNklBQWdEO0FBQzVGLDRDQUE0QywrSUFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0EsQ0FBQyxPQUFPLHN0QkFBc3RCLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFlBQVksT0FBTyxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsT0FBTyxXQUFXLEtBQUsscUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsT0FBTyxZQUFZLGdCQUFnQixVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssTUFBTSxXQUFXLE9BQU8sU0FBUyxXQUFXLE9BQU8sU0FBUyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sT0FBTyxLQUFLLE1BQU0sVUFBVSxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sWUFBWSxLQUFLLFdBQVcsT0FBTyxRQUFRLEtBQUssTUFBTSxXQUFXLE9BQU8sVUFBVSxLQUFLLE1BQU0sV0FBVyxPQUFPLFNBQVMsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLEtBQUssTUFBTSxVQUFVLE9BQU8sU0FBUyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFFBQVEsS0FBSyxNQUFNLFdBQVcsT0FBTyxPQUFPLEtBQUssTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxLQUFLLEtBQUssV0FBVyxXQUFXLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLFFBQVEsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxRQUFRLEtBQUssU0FBUyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssUUFBUSxXQUFXLE9BQU8sT0FBTyxLQUFLLFFBQVEsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLE9BQU8sS0FBSyxNQUFNLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxTQUFTLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxZQUFZLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFlBQVksVUFBVSxXQUFXLFFBQVEsT0FBTyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxhQUFhLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxRQUFRLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sMkNB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UUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsVUFBQyxPQUFPO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3BCLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN6QixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFWCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDL0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMvQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXQvLi9zcmMvYXNzZXRzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9tZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21ldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWV0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWV0Ly4vc3JjL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3M/MmEyNCIsIndlYnBhY2s6Ly9tZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21ldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21ldC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21ldC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWV0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWV0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21ldC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWV0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVyby1tb2JpbGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlcm8tdGFibGV0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oZXJvLWRlc2t0b3AuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Zvb3Rlci1tb2JpbGUtMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZm9vdGVyLXRhYmxldC0yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mb290ZXItZGVza3RvcC0xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIHNoaW5lIHtcbiAgMTAwJSB7XG4gICAgbGVmdDogMTI1JTtcbiAgfVxufVxuQGtleWZyYW1lcyBibG93IHtcbiAgMCUge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNhbGwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICB9XG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBrZW5idXJucyB7XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBzY2FsZTogMTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDU1JSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIH1cbn1cbi8qKlxuICogTW9kZXJuIENTUyBSZXNldCBUd2Vha3NcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5odG1sIHtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbn1cblxuLyogQm94IHNpemluZyBub3JtYWxpemF0aW9uICovXG4qLFxuOjphZnRlcixcbjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbn1cblxuLyoqXG4gKiBDU1MgUmVzZXQgVHdlYWtzXG4gKlxuICogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAqIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxuICogTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiAqL1xuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5tYWluLFxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLyoqXG4gKiBJbnB1dCBSZXNldFxuICovXG5pbnB1dDpyZXF1aXJlZCxcbmlucHV0IHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggd2hpdGUgaW5zZXQ7XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IFxcYGlubGluZS1ibG9ja1xcYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cbiAqL1xuYXVkaW8sXG5jYW52YXMsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBcXGBhdWRpb1xcYCB3aXRob3V0IGNvbnRyb2xzLlxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKipcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cbiAqL1xuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBwaWN0dXJlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5waWN0dXJlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKipcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIFxcYGxpbmUtaGVpZ2h0XFxgIG9uIFxcYGlucHV0XFxgIHVzaW5nIFxcYCFpbXBvcnRhbnRcXGAgaW5cbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxuICovXG5idXR0b24sXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qKlxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgXFxgdGV4dC10cmFuc2Zvcm1cXGAgaW5oZXJpdGFuY2UgZm9yIFxcYGJ1dHRvblxcYCBhbmQgXFxgc2VsZWN0XFxgLlxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBcXGB0ZXh0LXRyYW5zZm9ybVxcYCB2YWx1ZXMuXG4gKiBDb3JyZWN0IFxcYGJ1dHRvblxcYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxuICogQ29ycmVjdCBcXGBzZWxlY3RcXGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuICovXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cbiAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogMS4gQWRkcmVzcyBcXGBhcHBlYXJhbmNlXFxgIHNldCB0byBcXGBzZWFyY2hmaWVsZFxcYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxuICogMi4gQWRkcmVzcyBcXGBib3gtc2l6aW5nXFxgIHNldCB0byBcXGBib3JkZXItYm94XFxgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcbiAqICAgIChpbmNsdWRlIFxcYC1tb3pcXGAgdG8gZnV0dXJlLXByb29mKS5cbiAqL1xuaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vKipcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXG4gKiBvbiBPUyBYLlxuICovXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4gKi9cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG4vKipcbiAqIEJhc2VkIG9uIG5vcm1hbGl6ZS5jc3MgdjguMC4xXG4gKiBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzc1xuICovXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTVweDtcbn1cblxuc3VwIHtcbiAgdG9wOiAtNXB4O1xufVxuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQge1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcblt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5maWVsZHNldCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuYm9keTpub3QoOi1tb3otaGFuZGxlci1ibG9ja2VkKSBmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuW3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG4gKiBNaXNjXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJDaW56ZWxcIiwgc2VyaWY7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uaDEsXG4uaDIsXG4uaDMge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDUlO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XG4gIC5oMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmgxIHtcbiAgICBmb250LXNpemU6IDc3cHg7XG4gIH1cbn1cblxuLmgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzE2MTYxNjtcbiAgbGluZS1oZWlnaHQ6IDExNSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAuaDIge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBsaW5lLWhlaWdodDogMTA1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XG4gIC5oMiB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xuICB9XG59XG5cbi5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xuICAuaDMge1xuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xuICB9XG59XG5cbi5oNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnAge1xuICBjb2xvcjogIzE2MTYxNjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDQ4cHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEyZDM1O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cbi5idXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWUxYzIzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuLm5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzQ0cHg7XG4gICAgcGFkZGluZzogNzBweCA3MnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjYwcHg7XG4gICAgcGFkZGluZzogNzBweCAxMjBweDtcbiAgfVxufVxuXG4vKiBDaGFuZ2UgQXV0b2NvbXBsZXRlIHN0eWxlcyBpbiBDaHJvbWUgKi9cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4ZjhmYTtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMxNjE2MTY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMDBweCAjZjhmOGZhIGluc2V0O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkN2RlO1xuICBib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggI2Y4ZjhmYSBpbnNldDtcbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTYxNjE2O1xuICBib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggI2Y4ZjhmYSBpbnNldDtcbn1cblxuLmRlc2t0b3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XG4gIC5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ubm8tdGFibGV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAubm8tdGFibGV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLm5vLXRhYmxldCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnNlY3Rpb24tLWFuaW1hdGlvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42NXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG4uc2VjdGlvbi0tYWN0aXZlIC5zZWN0aW9uLS1hbmltYXRpb24ge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG59XG5cbi5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjVweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAuaGVybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICBwYWRkaW5nOiA0OHB4IDcycHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmhlcm8ge1xuICAgIHBhZGRpbmc6IDQ4cHggMTE4cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5oZWFkZXJfX3RvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxOXZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAuaGVhZGVyX19jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmhlYWRlcl9fY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogOXZoO1xuICB9XG59XG4uaGVhZGVyX19pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA0NnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiA4N3B4O1xuICAgIGhlaWdodDogNjVweDtcbiAgfVxufVxuXG4uaWNvbnNfX2ljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcbiAgLmljb25zX19pY29uIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XG4gIC5pY29ucyB7XG4gICAgZ2FwOiA1NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmljb25zIHtcbiAgICBnYXA6IDYwcHg7XG4gIH1cbiAgLmljb25zIC5pY29uLXBob25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmljb24tbWVudV9fbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoMiksIC5pY29uLW1lbnVfX2xpbmU6bnRoLWNoaWxkKDMpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcbiAgLmljb24tbWVudV9fbGluZSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbi5pY29uLW1lbnU6aG92ZXIgLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTJweDtcbn1cbi5pY29uLW1lbnU6aG92ZXIgLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoNCkge1xuICB3aWR0aDogOXB4O1xufVxuLmljb24tbWVudS5vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAxNHB4O1xuICB3aWR0aDogMCU7XG4gIGxlZnQ6IDUwJTtcbn1cbi5pY29uLW1lbnUub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5pY29uLW1lbnUub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uaWNvbi1tZW51Lm9wZW4gc3BhbjpudGgtY2hpbGQoNCkge1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAwJTtcbiAgbGVmdDogNTAlO1xufVxuLmljb24tbWVudS5vcGVuOmhvdmVyIC5pY29uLW1lbnVfX2xpbmU6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDA7XG59XG4uaWNvbi1tZW51Lm9wZW46aG92ZXIgLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoNCkge1xuICB3aWR0aDogMDtcbn1cblxuLmljb24tY29udGFjdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmljb24tY29udGFjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG59XG4uaWNvbi1jb250YWN0czpmaXJzdC1jaGlsZCAuaWNvbi1jb250YWN0c19faW5mbyB7XG4gIG1heC1oZWlnaHQ6IDFweDtcbn1cbi5pY29uLWNvbnRhY3RzOmZpcnN0LWNoaWxkOmhvdmVyIC5pY29uLWNvbnRhY3RzX19pbmZvIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG59XG4uaWNvbi1jb250YWN0c19faW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQ4cHg7XG4gIHRvcDogLTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMTYwJTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dCBhbGw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaWNvbi1jb250YWN0c19faW5mby1saW5rLCAuaWNvbi1jb250YWN0c19faW5mby10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pY29uLWNvbnRhY3RzX19pbmZvLWxpbmsge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5pY29uLWNvbnRhY3RzX19pbmZvLWxpbms6aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi50cmlnZ2VyLWNhbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDc1JSAyNSU7XG4gIGFuaW1hdGlvbjogY2FsbCAxcyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC41NywgMC45OSk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cbi50cmlnZ2VyLWNhbGw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogYmxvdyAwLjRzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG4udHJpZ2dlci1jYWxsOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuLnRyaWdnZXItY2FsbDpob3Zlcjo6YWZ0ZXIge1xuICBhbmltYXRpb246IG5vbmU7XG59XG5cbi5pbWFnZS12aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgaW5zZXQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHNjYWxlOiAxLjI7XG4gIGFuaW1hdGlvbjoga2VuYnVybnMgMzBzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XG4gIC5pbWFnZS12aWRlbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmltYWdlLXZpZGVvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIH1cbn1cbi5pbWFnZS12aWRlbyArIC5oZWFkZXIgLmhlYWRlcl9fY29udGVudCB7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMTYxNjE2O1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2U7XG4gIHotaW5kZXg6IDIwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5tZW51LmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5tZW51LmhpZGRlbiAubWVudV9fd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cbi5tZW51X193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEyZDM1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4ubWVudV9faGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTJkMzU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAubWVudV9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0OHB4IDcycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xuICAubWVudV9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0OHB4IDExOHB4O1xuICB9XG59XG4ubWVudV9fY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XG4gIC5tZW51X19jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNXB4IDcycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xuICAubWVudV9fY29udGVudCB7XG4gICAgcGFkZGluZzogNDhweCAxMThweDtcbiAgfVxufVxuLm1lbnVfX2xpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWIzNDNkLCAjZmZmZmZmIDUwJSwgI2ZmZmZmZiA1MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm1lbnVfX2xpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tZW51X19saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbn1cbi5tZW51X19saW5rOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZW51X19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWVudV9fY29udGFjdHMtY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTcwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tZW51X19jb250YWN0cy1jb250YWN0LS1sYXN0IHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1lbnVfX2NvbnRhY3RzLWNvbnRhY3Q6aG92ZXIgLm1lbnVfX2NvbnRhY3RzLW51bWJlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVudV9fY29udGFjdHMtbnVtYmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5tZW51X19jb250YWN0cy1udW1iZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNHB4O1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ubWVudV9fY29udGFjdHMtbnVtYmVyOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNjaGVkdWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyMDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgNTBweCAwICNmZmZmZmY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAuc2NoZWR1bGUge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgYm94LXNoYWRvdzogMCA3MHB4IDAgI2ZmZmZmZjtcbiAgfVxufVxuLnNjaGVkdWxlX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLnNjaGVkdWxlX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xufVxuLnNjaGVkdWxlX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuLnNjaGVkdWxlX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZDEyZDM1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xufVxuLnNjaGVkdWxlX190ZXh0Omxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG4uc2NoZWR1bGVfX3RleHQ6bGFzdC1jaGlsZCAuc2NoZWR1bGVfX21haW4tdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uc2NoZWR1bGVfX21haW4tdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiA0MiU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc2NoZWR1bGVfX2l0ZW0tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAuc2NoZWR1bGUgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuc2NoZWR1bGVfX2hlYWRlciB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuc2NoZWR1bGVfX3RpdGxlLCAuc2NoZWR1bGVfX3N1YnRpdGxlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLnNjaGVkdWxlX19jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLnNjaGVkdWxlX19oZWFkZXIge1xuICAgIGZsZXg6IDAuNzU7XG4gIH1cbiAgLnNjaGVkdWxlX190aXRsZSwgLnNjaGVkdWxlX19zdWJ0aXRsZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnNjaGVkdWxlX19pdGVtIHtcbiAgICBnYXA6IDEzcHg7XG4gIH1cbiAgLnNjaGVkdWxlX190ZXh0Omxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbiAgLnNjaGVkdWxlX19jb250ZW50IHtcbiAgICBnYXA6IDI1cHg7XG4gIH1cbn1cblxuLmN1cnJlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbGluZS1oZWlnaHQ6IDE1NSU7XG59XG4uY3VycmVudF9faGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1cnJlbnRfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmN1cnJlbnRfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY3VycmVudF9faXRlbS1waG90b3MtLTIge1xuICBnYXA6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuY3VycmVudF9faXRlbS1waG90b3MtLTIge1xuICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xuICB9XG59XG4uY3VycmVudF9faXRlbS1waG90b3MtLTMge1xuICBnYXA6IDhweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5jdXJyZW50X19pdGVtLXBob3Rvcy0tMyB7XG4gICAgbWF4LWhlaWdodDogMTcwcHg7XG4gIH1cbn1cbi5jdXJyZW50X19pdGVtLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XG4gIC5jdXJyZW50X19pdGVtLXBob3RvcyB7XG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIH1cbn1cbi5jdXJyZW50X19pdGVtLWltYWdlIGltZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY3VycmVudF9faXRlbS1pbWFnZTpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5jdXJyZW50X19pdGVtLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBjb2xvcjogI2QxMmQzNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jdXJyZW50X19hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1cnJlbnRfX2FjdGlvbnMtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xuICAuY3VycmVudF9fc3VidGl0bGUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuY3VycmVudF9fYWN0aW9ucy1idXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IDM5MnB4O1xuICB9XG4gIC5jdXJyZW50X19pdGVtLXBob3Rvcy0tMiAuaW1hZ2UtLXNxdWFyZSB7XG4gICAgaGVpZ2h0OiAxODZweDtcbiAgICB3aWR0aDogMTg2cHg7XG4gIH1cbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0yIC5pbWFnZS0tbG9uZyB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuY3VycmVudF9faXRlbS1waG90b3MtLTMge1xuICAgIGdhcDogMjBweDtcbiAgfVxuICAuY3VycmVudF9faXRlbS1waG90b3MtLTMgLmltYWdlOm50aC1jaGlsZCgzKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY3VycmVudF9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0yIHtcbiAgICBnYXA6IDI4cHg7XG4gIH1cbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0yIC5pbWFnZS0tc3F1YXJlIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgfVxuICAuY3VycmVudF9faXRlbS1waG90b3MtLTMgLmltYWdlOm50aC1jaGlsZCgzKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmN1cnJlbnRfX2FjdGlvbnMtYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDMyNXB4O1xuICB9XG59XG5cbi5pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuaW1hZ2UtLWxvbmcge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5pbWFnZS0tbG9uZyAuaW1hZ2VfX2ltYWdlIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cbi5pbWFnZS0tc3F1YXJlIGltZyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuaW1hZ2UtLXNxdWFyZSB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG59XG4uaW1hZ2VfX2ltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW1hZ2VfX2hvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNkMTJkMzU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4uaW1hZ2U6aG92ZXIgLmltYWdlX19ob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG4uaW1hZ2VfX2hvdmVyLS1ib3R0b20ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG4uaW1hZ2U6aG92ZXIgLmltYWdlX19ob3Zlci0tYm90dG9tIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbn1cbi5pbWFnZV9faG92ZXItLXRvcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG59XG4uaW1hZ2U6aG92ZXIgLmltYWdlX19ob3Zlci0tdG9wIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbn1cbi5pbWFnZV9faG92ZXItLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuLmltYWdlOmhvdmVyIC5pbWFnZV9faG92ZXItLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuLm1vcmUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vcmVfX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG59XG4ubW9yZV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9yZV9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5tb3JlX19pdGVtLXBob3RvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLm1vcmVfX2l0ZW0tcGhvdG86aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ubW9yZV9faXRlbS1waG90bzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC03NSU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkMTJkMzU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpO1xufVxuLm1vcmVfX2l0ZW0tcGhvdG86aG92ZXI6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogc2hpbmUgMC43NXM7XG59XG4ubW9yZV9faXRlbS1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vcmVfX2l0ZW0tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjZDEyZDM1O1xufVxuLm1vcmVfX2l0ZW0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcbiAgLm1vcmVfX2hlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgfVxuICAubW9yZV9faXRlbSB7XG4gICAgbWF4LXdpZHRoOiAzOTJweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5tb3JlX19pdGVtLXBob3RvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB9XG4gIC5tb3JlX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNHB4O1xuICB9XG4gIC5tb3JlX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xuICAubW9yZV9fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9yZV9fdGl0bGUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsaW5lLWhlaWdodDogMTA1JTtcbiAgfVxuICAubW9yZV9faXRlbS1waG90byB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuICAubW9yZV9faXRlbS10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMTY1JTtcbiAgfVxuICAubW9yZV9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG5cbi5jb250YWN0c19faGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cbi5jb250YWN0c19fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdHNfX2luZm8taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY29udGFjdHNfX2luZm8tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmNvbnRhY3RzIC5hZHJlc3NfX2xpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzE2MTYxNjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAwLjNzO1xufVxuLmNvbnRhY3RzIC5hZHJlc3NfX2xpbms6aG92ZXIge1xuICBjb2xvcjogI2QxMmQzNTtcbn1cbi5jb250YWN0cyAuYWRyZXNzX190aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhY3RzX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuLmNvbnRhY3RzX19pbnB1dCB7XG4gIHBhZGRpbmc6IDEycHggMTFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmE7XG4gIGNvbG9yOiAjMTYxNjE2O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbn1cbi5jb250YWN0c19faW5wdXQ6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkN2RlO1xufVxuLmNvbnRhY3RzX19pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNjE2MTY7XG59XG4uY29udGFjdHNfX2J1dHRvbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcbiAgLmNvbnRhY3RzX19oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDUycHg7XG4gIH1cbiAgLmNvbnRhY3RzX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIzcHg7XG4gIH1cbiAgLmNvbnRhY3RzX19pbmZvIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5jb250YWN0c19fZm9ybSB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuY29udGFjdHNfX2luZm8taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XG4gIC5jb250YWN0c19faGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICB9XG4gIC5jb250YWN0c19fY29udGVudCB7XG4gICAgZ2FwOiA2NXB4O1xuICB9XG4gIC5jb250YWN0c19faW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDc1cHg7XG4gIH1cbiAgLmNvbnRhY3RzIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIC5jb250YWN0c19fZm9ybSB7XG4gICAgZmxleDogMC43NTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcbiAgLmZvb3RlciB7XG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYmFzZS9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Njc3MtcmVzZXQvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9iYXNlL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9oZWxwZXJzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2hlbHBlcnMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9faGVyby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fbWVudS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fc2NoZWR1bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2N1cnJlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX21vcmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2NvbnRhY3RzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDQUY7RURHQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0UsdUJBQUE7RUNGRjtFREtBO0lBQ0UseUJBQUE7RUNIRjtFRE1BO0lBQ0Usd0JBQUE7RUNKRjtFRE9BO0lBQ0UseUJBQUE7RUNMRjtFRFFBO0lBQ0UsdUJBQUE7RUNORjtFRFNBO0lBQ0UseUJBQUE7RUNQRjtFRFVBO0lBQ0UsdUJBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRTtJQUNFLFVBQUE7RUNURjtFRFlBO0lBQ0UsWUFBQTtJQUNBLFFBQUE7RUNWRjtFRGFBO0lBQ0UsVUFBQTtFQ1hGO0FBQ0Y7QURjQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VDWkY7RURlQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQ2JGO0FBQ0Y7QUM3REE7O3VEQUFBO0FBR0E7RUFDRSw4QkFBQTtBRCtERjs7QUM3REU7RUFDRSx1QkFBQTtBRGdFSjs7QUM1REE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBRUEsa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0FENkRGOztBQ3pEQSw2QkFBQTtBQUNBOzs7RUFHRSxzQkFBQTtBRDRERjs7QUN4REEsd0RBQUE7QUFDQTtFQUNFLDhCQUFBO0FEMkRGOztBQ3ZEQTs7Ozs7O0VBQUE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUR5REY7O0FDdERBLHlEQUFBO0FBQ0E7RUFDRSxVQUFBO0FEeURGOztBQ3REQSxnREFBQTtBQUNBOzs7Ozs7Ozs7Ozs7RUFZRSxjQUFBO0FEeURGOztBQ3REQTs7RUFFRSxnQkFBQTtBRHlERjs7QUN0REE7O0VBRUUsWUFBQTtBRHlERjs7QUN2REU7OztFQUVFLFdBQUE7RUFDQSxhQUFBO0FEMkRKOztBQ3ZEQTs7RUFBQTtBQUdBOztFQUVFLGdCQUFBO0FEMERGOztBQ3ZEQTs7OztFQUlFLDBDQUFBO0FEMERGOztBQ3ZEQTs7OztFQUlFLHdCQUFBO0VBQ0EscUJBQUE7QUQwREY7O0FDdkRBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBRDBERjs7QUN2REE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRDBERjs7QUN0REU7RUFDRSxhQUFBO0FEeURKOztBQ3JEQTs7RUFBQTtBQUdBOzs7RUFHRSxxQkFBQTtFQUNBLGVBQUE7QUR3REY7O0FDckRBOzs7RUFBQTtBQUlBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUR3REY7O0FDckRBOztFQUFBO0FBR0E7RUFDRSxhQUFBO0FEd0RGOztBQ3JEQTs7RUFBQTtBQUdBOztFQUVFLGFBQUE7QUR3REY7O0FDckRBLG9DQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUR3REY7O0FDckRBLHNDQUFBO0FBQ0E7RUFDRSxxQkFBQTtBRHdERjs7QUNyREE7OztFQUFBO0FBSUE7O0VBRUUsbUJBQUE7QUR3REY7O0FDckRBOzs7OztFQUFBO0FBT0E7O0VBRUUsb0JBQUE7QUR1REY7O0FDcERBOzs7O0VBSUUsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FEdURGOztBQ3BEQTs7RUFBQTtBQUdBOztFQUVFLGVBQUE7QUR1REY7O0FDcERBO0VBQ0Usb0JBQUE7QUR1REY7O0FDcERBOztFQUFBO0FBR0E7O0VBRUUsVUFBQTtBRHVERjs7QUNwREE7Ozs7RUFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7QUR1REY7O0FDcERBOzs7RUFBQTtBQUlBOztFQUVFLHdCQUFBO0FEdURGOztBQ3BEQTs7RUFBQTtBQUdBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0FEdURGOztBQ3BEQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtBRHVERjs7QUNwREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHVERjs7QUNwREE7O0VBQUE7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEdURGOztBQ25EQTs7O0VBQUE7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FEc0RGOztBQ25EQTs7RUFBQTtBQUdBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0FEc0RGOztBQ25EQTs7RUFBQTtBQUdBO0VBQ0UsNkJBQUE7QURzREY7O0FDbkRBOzs7RUFBQTtBQUlBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBRHNERjs7QUNuREE7Ozs7RUFJRSxpQ0FBQTtBRHNERjs7QUNuREE7O0VBQUE7QUFHQTtFQUNFLGNBQUE7QURzREY7O0FDbkRBOzs7RUFBQTtBQUlBOztFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRHNERjs7QUNuREE7RUFDRSxZQUFBO0FEc0RGOztBQ25EQTtFQUNFLFNBQUE7QURzREY7O0FDbkRBOzs7RUFBQTtBQUlBOzs7OztFQUtFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRHNERjs7QUNuREE7OztFQUFBO0FBSUE7O0VBRUUsTUFBQTtFQUNBLGlCQUFBO0FEc0RGOztBQ25EQTs7O0VBQUE7QUFJQTs7RUFFRSxNQUFBO0VBQ0Esb0JBQUE7QURzREY7O0FDbkRBOztFQUFBO0FBR0E7Ozs7RUFJRSwwQkFBQTtBRHNERjs7QUNuREE7O0VBQUE7QUFJQTs7OztFQUlFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURxREY7O0FDakRBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRG1ERjs7QUNoREE7RUFDRSxZQUFBO0FEbURGOztBQ2hEQTtFQUNFLGNBQUE7QURtREY7O0FDL0NBOztFQUFBO0FBR0E7RUFDRSx3QkFBQTtBRGtERjs7QUM5Q0E7O0VBQUE7QUFHQTs7RUFFRSxZQUFBO0FEaURGOztBQzdDQTs7O0VBQUE7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0EsTUFBQTtBRGdERjs7QUM3Q0E7O0VBQUE7QUFHQTtFQUNFLHdCQUFBO0FEZ0RGOztBQzdDQTs7O0VBQUE7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0FEZ0RGOztBQzdDQTsrRUFBQTtBQUdBOztFQUFBO0FBR0E7RUFDRSxrQkFBQTtBRCtDRjs7QUM1Q0E7OytFQUFBO0FBSUE7RUFDRSxhQUFBO0FEOENGOztBRS9tQkE7RUFDRSx1QkFBQTtBRmtuQkY7O0FFL21CQTtFQUNFLDRCQUFBO0FGa25CRjs7QUUvbUJBO0VBQ0UsWUFBQTtBRmtuQkY7O0FFL21CQTs7O0VBR0UsZ0JBQUE7QUZrbkJGOztBRS9tQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2xCTTtBSG9vQlI7QUkxa0JFO0VGM0NGO0lBTUksZUFBQTtFRm1uQkY7QUFDRjtBSXprQkU7RUZqREY7SUFVSSxlQUFBO0VGb25CRjtBQUNGOztBRWpuQkE7RUFDRSxlQUFBO0VBQ0EsY0NoQ0s7RURpQ0wsaUJBQUE7QUZvbkJGO0FJMWxCRTtFRjdCRjtJQU1JLGVBQUE7SUFDQSxpQkFBQTtFRnFuQkY7QUFDRjtBSTFsQkU7RUZuQ0Y7SUFXSSxlQUFBO0lBQ0EsaUJBQUE7RUZzbkJGO0FBQ0Y7O0FFbm5CQTtFQUNFLGVBQUE7QUZzbkJGO0FJcG1CRTtFRm5CRjtJQUlJLGlCQUFBO0VGdW5CRjtBQUNGOztBRXBuQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUZ1bkJGOztBRXBuQkE7RUFDRSxjQzVESztFRDZETCxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRnVuQkY7O0FFcG5CQTtFRTNERSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGNEaEJNO0VDaUJOLHlCRHRCWTtFQ3VCWixnQkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBSitxQkY7QUk3cUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSx5QkR4Q2U7RUN5Q2YseUJBQUE7QUo4cUJKO0FJM3FCRTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBSjZxQko7QUkxcUJFO0VBQ0UsUUFBQTtBSjRxQko7O0FFdHBCQTtFQUNFLGdCQUFBO0FGeXBCRjs7QUV0cEJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGeXBCRjtBSTVxQkU7RUZlRjtJQU9JLGdCQUFBO0lBQ0Esa0JBQUE7RUYwcEJGO0FBQ0Y7QUk1cUJFO0VGU0Y7SUFZSSxpQkFBQTtJQUNBLG1CQUFBO0VGMnBCRjtBQUNGOztBRXhwQkEseUNBQUE7QUFDQTs7RUFFRSx5QkFBQTtFQUNBLGdDQy9GSztFRGdHTCxzQ0FBQTtFQUNBLGdDQUFBO0FGMnBCRjs7QUV4cEJBOztFQUVFLHlCQUFBO0VBQ0Esc0NBQUE7QUYycEJGOztBRXhwQkE7O0VBRUUseUJBQUE7RUFDQSxzQ0FBQTtBRjJwQkY7O0FFeHBCQTtFQUNFLGFBQUE7QUYycEJGO0FJM3NCRTtFRitDRjtJQUlJLGNBQUE7RUY0cEJGO0FBQ0Y7O0FFenBCQTtFQUNFLGNBQUE7QUY0cEJGO0FJMXRCRTtFRjZERjtJQUlJLGFBQUE7RUY2cEJGO0FBQ0Y7QUl6dEJFO0VGdURGO0lBUUksY0FBQTtFRjhwQkY7QUFDRjs7QUUzcEJBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUY4cEJGO0FFNXBCRTtFQUNFLHdCQUFBO0FGOHBCSjs7QUs1eUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBTDZ5QkY7QUl4dkJFO0VDL0RGO0lBYUksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlEQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLHNCQUFBO0VMOHlCRjtBQUNGO0FJNXZCRTtFQ3JFRjtJQXNCSSxtQkFBQTtJQUNBLHlEQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLHNCQUFBO0VMK3lCRjtBQUNGOztBSzV5QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUwreUJGO0FLN3lCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FMK3lCSjtBSzV5QkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FMOHlCSjtBSXp4QkU7RUN2QkE7SUFLSSxnQkFBQTtFTCt5Qko7QUFDRjtBSXh4QkU7RUM3QkE7SUFTSSxlQUFBO0VMZ3pCSjtBQUNGO0FLN3lCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUwreUJKOztBSzN5QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBTDh5QkY7QUk3eUJFO0VDSEY7SUFLSSxXQUFBO0lBQ0EsWUFBQTtFTCt5QkY7QUFDRjs7QUszeUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUw4eUJKO0FJeHpCRTtFQ1FBO0lBS0ksV0FBQTtJQUNBLFlBQUE7RUwreUJKO0FBQ0Y7QUk5ekJFO0VDT0Y7SUFZSSxTQUFBO0VMK3lCRjtBQUNGO0FJN3pCRTtFQ0NGO0lBZ0JJLFNBQUE7RUxnekJGO0VLOXlCRTtJQUNFLGFBQUE7RUxnekJKO0FBQ0Y7O0FLNXlCQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFFQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FMNnlCRjtBSzN5QkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSx5QkY5R0k7RUUrR0osa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBTDR5Qko7QUsxeUJJO0VBRUUsa0JBQUE7QUwyeUJOO0FJdjJCRTtFQytDQTtJQWlCSSxXQUFBO0VMMnlCSjtBQUNGO0FLdnlCSTtFQUNFLFdBQUE7QUx5eUJOO0FLdHlCSTtFQUNFLFVBQUE7QUx3eUJOO0FLcHlCRTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBTHN5Qko7QUtueUJFO0VBQ0Usd0JBQUE7QUxxeUJKO0FLbHlCRTtFQUNFLHlCQUFBO0FMb3lCSjtBS2p5QkU7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUxteUJKO0FLL3hCSTtFQUNFLFFBQUE7QUxpeUJOO0FLOXhCSTtFQUNFLFFBQUE7QUxneUJOOztBSzN4QkE7RUFDRSxrQkFBQTtBTDh4QkY7QUl0NEJFO0VDdUdGO0lBSUksYUFBQTtJQUNBLDJCQUFBO0VMK3hCRjtBQUNGO0FLN3hCRTtFQUNFLGVBQUE7QUwreEJKO0FLNXhCRTtFQUNFLGlCQUFBO0FMOHhCSjtBSzN4QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0VBQ0EsZ0JBQUE7QUwweEJKO0FLeHhCSTtFQUVFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNGek1FO0VFME1GLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUx5eEJOO0FLdHhCSTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7QUx3eEJOO0FLdHhCTTtFQUNFLFlBQUE7QUx3eEJSOztBS2x4QkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdURBQUE7RUFDQSxxQkFBQTtBTHF4QkY7QUtueEJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJGek9JO0VFME9KLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBTHF4Qko7QUtseEJFO0VBQ0UsZUFBQTtBTG94Qko7QUtqeEJFO0VBQ0UsZUFBQTtBTG14Qko7O0FLL3dCQTtFQUNFLGtCQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFFQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0FMK3dCRjtBSTM5QkU7RUM4TEY7SUFpQkkseURBQUE7RUxneEJGO0FBQ0Y7QUkxOUJFO0VDd0xGO0lBcUJJLHlEQUFBO0VMaXhCRjtBQUNGO0FLL3dCRTtFQUNFLDZCQUFBO0FMaXhCSjs7QU12aUNBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsK0JBQUE7RUFDQSxtREFDRTtFQUVGLFlBQUE7RUFDQSxVQUFBO0FOcWlDRjtBTW5pQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QU5xaUNKO0FNbmlDSTtFQUNFLDJCQUFBO0FOcWlDTjtBTWppQ0U7RUFDRSxrQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBRUEseUJIdENVO0VHdUNWLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBTmdpQ0o7QU03aENFO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBRUEsY0hoREk7RUdpREoseUJBQUE7RUFDQSx5Qkh2RFU7QUhtbENkO0FJcGhDRTtFRW5CQTtJQWNJLGtCQUFBO0VONmhDSjtBQUNGO0FJbmhDRTtFRXpCQTtJQWtCSSxtQkFBQTtFTjhoQ0o7QUFDRjtBTTNoQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FONmhDSjtBSWxpQ0U7RUVHQTtJQUtJLGtCQUFBO0VOOGhDSjtBQUNGO0FJamlDRTtFRUhBO0lBU0ksbUJBQUE7RU4raENKO0FBQ0Y7QU01aENFO0VBQ0Usa0JBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBRUEsOEVBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBRUEsZ0NBQUE7QU4waENKO0FNeGhDSTtFQUNFLFdBQUE7RUFDQSxtQkhqR0U7RUdrR0YsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FOMGhDTjtBTXZoQ0k7RUFDRSxzQkFBQTtBTnloQ047QU10aENJO0VBQ0UsV0FBQTtBTndoQ047QU1waENFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FOc2hDSjtBTXBoQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNIaElFO0VHaUlGLHFCQUFBO0VBQ0EseUJBQUE7QU5xaENOO0FNbGhDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBTm9oQ047QU1qaENJO0VBQ0UsV0FBQTtBTm1oQ047QU1oaENJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FOa2hDTjtBTS9nQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CSDVKRTtFRzZKRixnQ0FBQTtBTmloQ047QU05Z0NJO0VBQ0UsV0FBQTtBTmdoQ047O0FPdHJDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QVB5ckNGO0FJOW5DRTtFRy9ERjtJQU9JLGdCQUFBO0lBQ0EsNEJBQUE7RVAwckNGO0FBQ0Y7QU94ckNFO0VBQ0UsbUJBQUE7QVAwckNKO0FPdnJDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QVB5ckNKO0FPdHJDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QVB3ckNKO0FPcnJDRTtFQUNFLGNKNUJVO0VJNkJWLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FQdXJDSjtBT3ByQ0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FQc3JDSjtBT3ByQ0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QVBzckNOO0FPbHJDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FQb3JDSjtBT2pyQ0U7RUFDRSxrQkFBQTtBUG1yQ0o7QUl2cUNFO0VHUkU7SUFDRSxhQUFBO0VQa3JDSjtFTy9xQ0U7SUFDRSxPQUFBO0VQaXJDSjtFTzlxQ0U7SUFFRSxZQUFBO0VQK3FDSjtFTzVxQ0U7SUFDRSxPQUFBO0VQOHFDSjtBQUNGO0FJL3FDRTtFR0tFO0lBQ0UsVUFBQTtFUDZxQ0o7RU8xcUNFO0lBRUUsV0FBQTtFUDJxQ0o7RU94cUNFO0lBQ0UsU0FBQTtFUDBxQ0o7RU92cUNFO0lBQ0UsZ0JBQUE7RVB5cUNKO0VPdHFDRTtJQUNFLFNBQUE7RVB3cUNKO0FBQ0Y7O0FRcndDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QVJ3d0NGO0FRdHdDRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QVJ3d0NKO0FRcndDRTtFQUNFLGtCQUFBO0FSdXdDSjtBUXB3Q0U7RUFDRSxtQkFBQTtBUnN3Q0o7QVFud0NFO0VBQ0UsU0FBQTtBUnF3Q0o7QUk5dENFO0VJeENBO0lBSUksaUJBQUE7RVJzd0NKO0FBQ0Y7QVFud0NFO0VBQ0UsUUFBQTtBUnF3Q0o7QUl0dUNFO0VJaENBO0lBSUksaUJBQUE7RVJzd0NKO0FBQ0Y7QVFud0NFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBRUEsbUJBQUE7QVJvd0NKO0FJMXVDRTtFSTlCQTtJQU9JLHVCQUFBO0VScXdDSjtBQUNGO0FRandDSTtFQUNFLHlCQUFBO0FSbXdDTjtBUS92Q007RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QVJpd0NSO0FRNXZDRTtFQUNFLGtCQUFBO0VBRUEsY0w3RFU7RUs4RFYsZ0JBQUE7QVI2dkNKO0FRMXZDRTtFQUNFLGtCQUFBO0FSNHZDSjtBUTF2Q0k7RUFDRSxXQUFBO0FSNHZDTjtBSWx3Q0U7RUlXRTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VSMHZDSjtFUXZ2Q0U7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VSeXZDSjtFUXJ2Q0k7SUFDRSxhQUFBO0lBQ0EsWUFBQTtFUnV2Q047RVFwdkNJO0lBQ0UsT0FBQTtFUnN2Q047RVFsdkNFO0lBQ0UsU0FBQTtFUm92Q0o7RVFsdkNJO0lBQ0UsYUFBQTtFUm92Q047RVFodkNFO0lBQ0UsbUJBQUE7RVJrdkNKO0FBQ0Y7QUl0eENFO0VJd0NFO0lBQ0UsU0FBQTtFUml2Q0o7RVEvdUNJO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RVJpdkNOO0VRNXVDSTtJQUNFLGNBQUE7RVI4dUNOO0VRMXVDRTtJQUNFLGdCQUFBO0VSNHVDSjtBQUNGOztBUXh1Q0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBUjJ1Q0Y7QUl2ekNFO0VJOEVBO0lBRUksT0FBQTtFUjJ1Q0o7QUFDRjtBSTV6Q0U7RUlvRkE7SUFFSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VSMHVDSjtBQUNGO0FRdHVDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FSd3VDTjtBSXYwQ0U7RUk0RkE7SUFPSSxZQUFBO0VSd3VDSjtBQUNGO0FRcnVDRTtFQUNFLGlCQUFBO0FSdXVDSjtBUXB1Q0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CTDVLVTtFSzZLVixjTHhLSTtFS3lLSixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtFQUNBLGdDQUFBO0FSbXVDSjtBUWh1Q0U7RUFDRSx5QkFBQTtBUmt1Q0o7QVEvdENFO0VBQ0UsMkJBQUE7QVJpdUNKO0FROXRDRTtFQUNFLHlCQUFBO0FSZ3VDSjtBUTd0Q0U7RUFDRSw0QkFBQTtBUit0Q0o7QVE1dENFO0VBQ0UseUJBQUE7QVI4dENKO0FRM3RDRTtFQUNFLDJCQUFBO0FSNnRDSjtBUTF0Q0U7RUFDRSx5QkFBQTtBUjR0Q0o7O0FTNTZDQTtFQUNFLGdCQUFBO0FUKzZDRjtBUzc2Q0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QVQrNkNKO0FTNTZDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FUODZDSjtBUzM2Q0U7RUFDRSxtQkFBQTtBVDY2Q0o7QVMxNkNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QVQ0NkNKO0FTMTZDSTtFQUNFLHFCQUFBO0FUNDZDTjtBU3o2Q0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBVDI2Q047QVN4NkNJO0VBQ0Usc0JBQUE7QVQwNkNOO0FTdDZDRTtFQUNFLGtCQUFBO0FUdzZDSjtBU3I2Q0U7RUFDRSxrQkFBQTtFQUNBLGNOdERVO0FINjlDZDtBU3A2Q0U7RUFDRSxpQkFBQTtBVHM2Q0o7QUlqNkNFO0VLREU7SUFDRSxtQkFBQTtFVHE2Q0o7RVNsNkNFO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsT0FBQTtFVG82Q0o7RVNqNkNFO0lBQ0UsbUJBQUE7RVRtNkNKO0VTaDZDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFNBQUE7RVRrNkNKO0VTLzVDRTtJQUNFLG1CQUFBO0VUaTZDSjtBQUNGO0FJaDdDRTtFS21CRTtJQUNFLG1CQUFBO0VUZzZDSjtFUzc1Q0U7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VUKzVDSjtFUzU1Q0U7SUFDRSxtQkFBQTtFVDg1Q0o7RVMzNUNFO0lBQ0UsaUJBQUE7RVQ2NUNKO0VTMTVDRTtJQUNFLG1CQUFBO0VUNDVDSjtBQUNGOztBVXZnREU7RUFDRSxtQkFBQTtBVjBnREo7QVV2Z0RFO0VBQ0Usa0JBQUE7QVZ5Z0RKO0FVdGdERTtFQUNFLG1CQUFBO0FWd2dESjtBVXJnREU7RUFDRSxtQkFBQTtBVnVnREo7QVVwZ0RFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjUGpCRztFT2tCSCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBVnNnREo7QVVwZ0RJO0VBQ0UsY1AzQlE7QUhpaURkO0FVbGdERTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FWb2dESjtBVWpnREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FWbWdESjtBVWhnREU7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJQdENDO0VPdUNELGNQM0NHO0VPNENILGdDQUFBO0FWa2dESjtBVWhnREk7RUFDRSx5QkFBQTtBVmtnRE47QVUvL0NJO0VBQ0UseUJBQUE7QVZpZ0ROO0FVNy9DRTtFQUNFLGNBQUE7QVYrL0NKO0FJNS9DRTtFTUNFO0lBQ0UsbUJBQUE7RVY4L0NKO0VVMy9DRTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFNBQUE7RVY2L0NKO0VVMS9DRTtJQUNFLE9BQUE7RVY0L0NKO0VVei9DRTtJQUNFLE9BQUE7RVYyL0NKO0VVeC9DRTtJQUNFLG1CQUFBO0VWMC9DSjtBQUNGO0FJemdERTtFTW1CRTtJQUNFLG1CQUFBO0VWeS9DSjtFVXQvQ0U7SUFDRSxTQUFBO0VWdy9DSjtFVXIvQ0U7SUFDRSxhQUFBO0lBQ0EsU0FBQTtFVnUvQ0o7RVVwL0NFO0lBQ0UsaUJBQUE7RVZzL0NKO0VVbi9DRTtJQUNFLFVBQUE7RVZxL0NKO0FBQ0Y7O0FXaG1EQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FYbW1ERjtBSTNpREU7RU8vREY7SUFVSSxpQkFBQTtJQUNBLHlEQUFBO0VYb21ERjtBQUNGO0FJM2lERTtFT3JFRjtJQWVJLHlEQUFBO0VYcW1ERjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2hpbmUge1xcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDEyNSU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxvdyB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjYWxsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrZW5idXJucyB7XFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDU1JSwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgfVxcbn1cXG5cIixcIkBrZXlmcmFtZXMgc2hpbmUge1xcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDEyNSU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmxvdyB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjYWxsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxNSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xcbiAgfVxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xcbiAgfVxcbiAgNDUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrZW5idXJucyB7XFxuICAyNSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDU1JSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgfVxcbn1cXG4vKipcXG4gKiBNb2Rlcm4gQ1NTIFJlc2V0IFR3ZWFrc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaHRtbCB7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcblxcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxufVxcblxcbi8qIEJveCBzaXppbmcgbm9ybWFsaXphdGlvbiAqL1xcbiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBFbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIENTUyBSZXNldCBUd2Vha3NcXG4gKlxcbiAqIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICogdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XFxuICogTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4gKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxubWFpbixcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIElucHV0IFJlc2V0XFxuICovXFxuaW5wdXQ6cmVxdWlyZWQsXFxuaW5wdXQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKi9cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgcGljdHVyZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbnBpY3R1cmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcXG5pbnB1dFt0eXBlPXJlc2V0XSxcXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuW2Rpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxuICovXFxuaW5wdXRbdHlwZT1jaGVja2JveF0sXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqIG9uIE9TIFguXFxuICovXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEJhc2VkIG9uIG5vcm1hbGl6ZS5jc3MgdjguMC4xXFxuICogZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3NcXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtNXB4O1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtNXB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1idXR0b25dLFxcblt0eXBlPXJlc2V0XSxcXG5bdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5ib2R5Om5vdCg6LW1vei1oYW5kbGVyLWJsb2NrZWQpIGZpZWxkc2V0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcbiAqIE1pc2NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWxcXFwiLCBzZXJpZjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaDEsXFxuLmgyLFxcbi5oMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEwNSU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcXG4gIC5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAuaDEge1xcbiAgICBmb250LXNpemU6IDc3cHg7XFxuICB9XFxufVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogIzE2MTYxNjtcXG4gIGxpbmUtaGVpZ2h0OiAxMTUlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLmgyIHtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTA1JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAuaDIge1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xcbiAgfVxcbn1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5oMyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xcbiAgfVxcbn1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnAge1xcbiAgY29sb3I6ICMxNjE2MTY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTRweCA0OHB4O1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTJkMzU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmJ1dHRvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZTFjMjM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4uYnV0dG9uOmhvdmVyOjphZnRlciB7XFxuICB0b3A6IGF1dG87XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5idXR0b246YWN0aXZlIHtcXG4gIHRvcDogMnB4O1xcbn1cXG5cXG4ubm8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NDRweDtcXG4gICAgcGFkZGluZzogNzBweCA3MnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyNjBweDtcXG4gICAgcGFkZGluZzogNzBweCAxMjBweDtcXG4gIH1cXG59XFxuXFxuLyogQ2hhbmdlIEF1dG9jb21wbGV0ZSBzdHlsZXMgaW4gQ2hyb21lICovXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4ZmE7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzE2MTYxNjtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMDBweCAjZjhmOGZhIGluc2V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XFxufVxcblxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkN2RlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwMHB4ICNmOGY4ZmEgaW5zZXQ7XFxufVxcblxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTYxNjE2O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwMHB4ICNmOGY4ZmEgaW5zZXQ7XFxufVxcblxcbi5kZXNrdG9wIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xcbiAgLmRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLm5vLXRhYmxldCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcXG4gIC5uby10YWJsZXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5uby10YWJsZXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLnNlY3Rpb24tLWFuaW1hdGlvbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjY1cztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcbi5zZWN0aW9uLS1hY3RpdmUgLnNlY3Rpb24tLWFuaW1hdGlvbiB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjVweCAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm8tbW9iaWxlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLmhlcm8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbiAgICBwYWRkaW5nOiA0OHB4IDcycHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm8tdGFibGV0LmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5oZXJvIHtcXG4gICAgcGFkZGluZzogNDhweCAxMThweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvaGVyby1kZXNrdG9wLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmhlYWRlcl9fdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDE5dmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAuaGVhZGVyX19jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAuaGVhZGVyX19jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogOXZoO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDQ2cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiA4N3B4O1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICB9XFxufVxcblxcbi5pY29uc19faWNvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcXG4gIC5pY29uc19faWNvbiB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAuaWNvbnMge1xcbiAgICBnYXA6IDU1cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xcbiAgLmljb25zIHtcXG4gICAgZ2FwOiA2MHB4O1xcbiAgfVxcbiAgLmljb25zIC5pY29uLXBob25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmljb24tbWVudSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5pY29uLW1lbnVfX2xpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uaWNvbi1tZW51X19saW5lOm50aC1jaGlsZCgyKSwgLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoMykge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLmljb24tbWVudV9fbGluZSB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgfVxcbn1cXG4uaWNvbi1tZW51OmhvdmVyIC5pY29uLW1lbnVfX2xpbmU6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiAxMnB4O1xcbn1cXG4uaWNvbi1tZW51OmhvdmVyIC5pY29uLW1lbnVfX2xpbmU6bnRoLWNoaWxkKDQpIHtcXG4gIHdpZHRoOiA5cHg7XFxufVxcbi5pY29uLW1lbnUub3BlbiBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICB0b3A6IDE0cHg7XFxuICB3aWR0aDogMCU7XFxuICBsZWZ0OiA1MCU7XFxufVxcbi5pY29uLW1lbnUub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5pY29uLW1lbnUub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4uaWNvbi1tZW51Lm9wZW4gc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDAlO1xcbiAgbGVmdDogNTAlO1xcbn1cXG4uaWNvbi1tZW51Lm9wZW46aG92ZXIgLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDA7XFxufVxcbi5pY29uLW1lbnUub3Blbjpob3ZlciAuaWNvbi1tZW51X19saW5lOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmljb24tY29udGFjdHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5pY29uLWNvbnRhY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgfVxcbn1cXG4uaWNvbi1jb250YWN0czpmaXJzdC1jaGlsZCAuaWNvbi1jb250YWN0c19faW5mbyB7XFxuICBtYXgtaGVpZ2h0OiAxcHg7XFxufVxcbi5pY29uLWNvbnRhY3RzOmZpcnN0LWNoaWxkOmhvdmVyIC5pY29uLWNvbnRhY3RzX19pbmZvIHtcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbn1cXG4uaWNvbi1jb250YWN0c19faW5mbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDhweDtcXG4gIHRvcDogLTQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0IGFsbDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5pY29uLWNvbnRhY3RzX19pbmZvLWxpbmssIC5pY29uLWNvbnRhY3RzX19pbmZvLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmljb24tY29udGFjdHNfX2luZm8tbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5pY29uLWNvbnRhY3RzX19pbmZvLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udHJpZ2dlci1jYWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDc1JSAyNSU7XFxuICBhbmltYXRpb246IGNhbGwgMXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuNTcsIDAuOTkpO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4udHJpZ2dlci1jYWxsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGFuaW1hdGlvbjogYmxvdyAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4udHJpZ2dlci1jYWxsOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbm9uZTtcXG59XFxuLnRyaWdnZXItY2FsbDpob3Zlcjo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG4uaW1hZ2UtdmlkZW8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm8tbW9iaWxlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxuICBpbnNldDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICBzY2FsZTogMS4yO1xcbiAgYW5pbWF0aW9uOiBrZW5idXJucyAzMHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLmltYWdlLXZpZGVvIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvaGVyby10YWJsZXQuanBnXFxcIik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xcbiAgLmltYWdlLXZpZGVvIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvaGVyby1kZXNrdG9wLmpwZ1xcXCIpO1xcbiAgfVxcbn1cXG4uaW1hZ2UtdmlkZW8gKyAuaGVhZGVyIC5oZWFkZXJfX2NvbnRlbnQge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMxNjE2MTY7XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGluc2V0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXMgZWFzZTtcXG4gIHotaW5kZXg6IDIwMDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tZW51LmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ubWVudS5oaWRkZW4gLm1lbnVfX3dyYXBwZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbn1cXG4ubWVudV9fd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEyZDM1O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxufVxcbi5tZW51X19oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEyZDM1O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLm1lbnVfX2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDQ4cHggNzJweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAubWVudV9faGVhZGVyIHtcXG4gICAgcGFkZGluZzogNDhweCAxMThweDtcXG4gIH1cXG59XFxuLm1lbnVfX2NvbnRlbnQge1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQ0cHgpIHtcXG4gIC5tZW51X19jb250ZW50IHtcXG4gICAgcGFkZGluZzogMTVweCA3MnB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5tZW51X19jb250ZW50IHtcXG4gICAgcGFkZGluZzogNDhweCAxMThweDtcXG4gIH1cXG59XFxuLm1lbnVfX2xpbmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWIzNDNkLCAjZmZmZmZmIDUwJSwgI2ZmZmZmZiA1MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4ubWVudV9fbGluazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtOHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLm1lbnVfX2xpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG59XFxuLm1lbnVfX2xpbms6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lbnVfX2NvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWVudV9fY29udGFjdHMtY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTcwJTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm1lbnVfX2NvbnRhY3RzLWNvbnRhY3QtLWxhc3Qge1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLm1lbnVfX2NvbnRhY3RzLWNvbnRhY3Q6aG92ZXIgLm1lbnVfX2NvbnRhY3RzLW51bWJlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVudV9fY29udGFjdHMtbnVtYmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuLm1lbnVfX2NvbnRhY3RzLW51bWJlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNHB4O1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5tZW51X19jb250YWN0cy1udW1iZXI6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNjaGVkdWxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDIwMDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBib3gtc2hhZG93OiAwIDUwcHggMCAjZmZmZmZmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLnNjaGVkdWxlIHtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgYm94LXNoYWRvdzogMCA3MHB4IDAgI2ZmZmZmZjtcXG4gIH1cXG59XFxuLnNjaGVkdWxlX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcXG59XFxuLnNjaGVkdWxlX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG4uc2NoZWR1bGVfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcbi5zY2hlZHVsZV9fc3VidGl0bGUge1xcbiAgY29sb3I6ICNkMTJkMzU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxufVxcbi5zY2hlZHVsZV9fdGV4dDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxufVxcbi5zY2hlZHVsZV9fdGV4dDpsYXN0LWNoaWxkIC5zY2hlZHVsZV9fbWFpbi10ZXh0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4uc2NoZWR1bGVfX21haW4tdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDQyJTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5zY2hlZHVsZV9faXRlbS10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAuc2NoZWR1bGUgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuc2NoZWR1bGVfX2hlYWRlciB7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuICAuc2NoZWR1bGVfX3RpdGxlLCAuc2NoZWR1bGVfX3N1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbiAgLnNjaGVkdWxlX19jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAuc2NoZWR1bGVfX2hlYWRlciB7XFxuICAgIGZsZXg6IDAuNzU7XFxuICB9XFxuICAuc2NoZWR1bGVfX3RpdGxlLCAuc2NoZWR1bGVfX3N1YnRpdGxlIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAuc2NoZWR1bGVfX2l0ZW0ge1xcbiAgICBnYXA6IDEzcHg7XFxuICB9XFxuICAuc2NoZWR1bGVfX3RleHQ6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICB9XFxuICAuc2NoZWR1bGVfX2NvbnRlbnQge1xcbiAgICBnYXA6IDI1cHg7XFxuICB9XFxufVxcblxcbi5jdXJyZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDE1NSU7XFxufVxcbi5jdXJyZW50X19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmN1cnJlbnRfX3RpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmN1cnJlbnRfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uY3VycmVudF9faXRlbS1waG90b3MtLTIge1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0yIHtcXG4gICAgbWF4LWhlaWdodDogMTMwcHg7XFxuICB9XFxufVxcbi5jdXJyZW50X19pdGVtLXBob3Rvcy0tMyB7XFxuICBnYXA6IDhweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gIC5jdXJyZW50X19pdGVtLXBob3Rvcy0tMyB7XFxuICAgIG1heC1oZWlnaHQ6IDE3MHB4O1xcbiAgfVxcbn1cXG4uY3VycmVudF9faXRlbS1waG90b3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAuY3VycmVudF9faXRlbS1waG90b3Mge1xcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIH1cXG59XFxuLmN1cnJlbnRfX2l0ZW0taW1hZ2UgaW1nIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5jdXJyZW50X19pdGVtLWltYWdlOmhvdmVyIGltZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbn1cXG4uY3VycmVudF9faXRlbS10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBjb2xvcjogI2QxMmQzNTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5jdXJyZW50X19hY3Rpb25zIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmN1cnJlbnRfX2FjdGlvbnMtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLmN1cnJlbnRfX3N1YnRpdGxlIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG4gIC5jdXJyZW50X19hY3Rpb25zLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLXdpZHRoOiAzOTJweDtcXG4gIH1cXG4gIC5jdXJyZW50X19pdGVtLXBob3Rvcy0tMiAuaW1hZ2UtLXNxdWFyZSB7XFxuICAgIGhlaWdodDogMTg2cHg7XFxuICAgIHdpZHRoOiAxODZweDtcXG4gIH1cXG4gIC5jdXJyZW50X19pdGVtLXBob3Rvcy0tMiAuaW1hZ2UtLWxvbmcge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0zIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0zIC5pbWFnZTpudGgtY2hpbGQoMykge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmN1cnJlbnRfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjBweCkge1xcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0yIHtcXG4gICAgZ2FwOiAyOHB4O1xcbiAgfVxcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0yIC5pbWFnZS0tc3F1YXJlIHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgfVxcbiAgLmN1cnJlbnRfX2l0ZW0tcGhvdG9zLS0zIC5pbWFnZTpudGgtY2hpbGQoMykge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5jdXJyZW50X19hY3Rpb25zLWJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogMzI1cHg7XFxuICB9XFxufVxcblxcbi5pbWFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAuaW1hZ2UtLWxvbmcge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmltYWdlLS1sb25nIC5pbWFnZV9faW1hZ2Uge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG59XFxuLmltYWdlLS1zcXVhcmUgaW1nIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xcbiAgLmltYWdlLS1zcXVhcmUge1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICB9XFxufVxcbi5pbWFnZV9faW1hZ2Uge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5pbWFnZV9faG92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2QxMmQzNTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5pbWFnZTpob3ZlciAuaW1hZ2VfX2hvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcbi5pbWFnZV9faG92ZXItLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxufVxcbi5pbWFnZTpob3ZlciAuaW1hZ2VfX2hvdmVyLS1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG59XFxuLmltYWdlX19ob3Zlci0tdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxufVxcbi5pbWFnZTpob3ZlciAuaW1hZ2VfX2hvdmVyLS10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG59XFxuLmltYWdlX19ob3Zlci0tcmlnaHQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG4uaW1hZ2U6aG92ZXIgLmltYWdlX19ob3Zlci0tcmlnaHQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG59XFxuXFxuLm1vcmUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1vcmVfX2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDExMCU7XFxufVxcbi5tb3JlX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vcmVfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4ubW9yZV9faXRlbS1waG90byB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5tb3JlX19pdGVtLXBob3RvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm1vcmVfX2l0ZW0tcGhvdG86OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtNzUlO1xcbiAgei1pbmRleDogMjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2QxMmQzNTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRyYW5zZm9ybTogc2tld1goLTI1ZGVnKTtcXG59XFxuLm1vcmVfX2l0ZW0tcGhvdG86aG92ZXI6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IHNoaW5lIDAuNzVzO1xcbn1cXG4ubW9yZV9faXRlbS1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vcmVfX2l0ZW0tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgY29sb3I6ICNkMTJkMzU7XFxufVxcbi5tb3JlX19pdGVtLXRleHQge1xcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAubW9yZV9faGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG4gIH1cXG4gIC5tb3JlX19pdGVtIHtcXG4gICAgbWF4LXdpZHRoOiAzOTJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuICAubW9yZV9faXRlbS1waG90byB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICB9XFxuICAubW9yZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDtcXG4gIH1cXG4gIC5tb3JlX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjYwcHgpIHtcXG4gIC5tb3JlX19jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb3JlX190aXRsZSB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMDUlO1xcbiAgfVxcbiAgLm1vcmVfX2l0ZW0tcGhvdG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgfVxcbiAgLm1vcmVfX2l0ZW0tdGV4dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNjUlO1xcbiAgfVxcbiAgLm1vcmVfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICB9XFxufVxcblxcbi5jb250YWN0c19faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcbi5jb250YWN0c19fdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29udGFjdHNfX2luZm8taXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uY29udGFjdHNfX2luZm8tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcXG59XFxuLmNvbnRhY3RzIC5hZHJlc3NfX2xpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMxNjE2MTY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgZWFzZS1pbi1vdXQgMC4zcztcXG59XFxuLmNvbnRhY3RzIC5hZHJlc3NfX2xpbms6aG92ZXIge1xcbiAgY29sb3I6ICNkMTJkMzU7XFxufVxcbi5jb250YWN0cyAuYWRyZXNzX190aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uY29udGFjdHNfX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcbi5jb250YWN0c19faW5wdXQge1xcbiAgcGFkZGluZzogMTJweCAxMXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGZhO1xcbiAgY29sb3I6ICMxNjE2MTY7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcXG59XFxuLmNvbnRhY3RzX19pbnB1dDpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkN2RlO1xcbn1cXG4uY29udGFjdHNfX2lucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNjE2MTY7XFxufVxcbi5jb250YWN0c19fYnV0dG9uIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDRweCkge1xcbiAgLmNvbnRhY3RzX19oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MnB4O1xcbiAgfVxcbiAgLmNvbnRhY3RzX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDIzcHg7XFxuICB9XFxuICAuY29udGFjdHNfX2luZm8ge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbiAgLmNvbnRhY3RzX19mb3JtIHtcXG4gICAgZmxleDogMTtcXG4gIH1cXG4gIC5jb250YWN0c19faW5mby1pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAuY29udGFjdHNfX2hlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxuICB9XFxuICAuY29udGFjdHNfX2NvbnRlbnQge1xcbiAgICBnYXA6IDY1cHg7XFxuICB9XFxuICAuY29udGFjdHNfX2luZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDc1cHg7XFxuICB9XFxuICAuY29udGFjdHMgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgfVxcbiAgLmNvbnRhY3RzX19mb3JtIHtcXG4gICAgZmxleDogMC43NTtcXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9mb290ZXItbW9iaWxlLTMuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0NHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgbWluLWhlaWdodDogMzYwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2Zvb3Rlci10YWJsZXQtMi5qcGdcXFwiKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvZm9vdGVyLWRlc2t0b3AtMS5qcGdcXFwiKTtcXG4gIH1cXG59XCIsXCIvKipcXG4gKiBNb2Rlcm4gQ1NTIFJlc2V0IFR3ZWFrc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaHRtbCB7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuXFxuICAmOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxufVxcblxcblxcbi8qIEJveCBzaXppbmcgbm9ybWFsaXphdGlvbiAqL1xcbiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4vKiBFbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcblxcbi8qKlxcbiAqIENTUyBSZXNldCBUd2Vha3NcXG4gKlxcbiAqIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICogdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XFxuICogTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4gKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogbWFrZSBzdXJlIHRvIHNldCBzb21lIGZvY3VzIHN0eWxlcyBmb3IgYWNjZXNzaWJpbGl0eSAqL1xcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxubWFpbixcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG5cXG4gICY6YmVmb3JlLFxcbiAgJjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKipcXG4gKiBJbnB1dCBSZXNldFxcbiAqL1xcbmlucHV0OnJlcXVpcmVkLFxcbmlucHV0IHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbmlucHV0IHtcXG4gICY6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBwaWN0dXJlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxucGljdHVyZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDYrLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5bZGlzYWJsZWRdIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cXG4gKi9cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCAzKy5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxufVxcblxcblxcbi8qKlxcbiAqIEJhc2VkIG9uIG5vcm1hbGl6ZS5jc3MgdjguMC4xXFxuICogZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3NcXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtNXB4O1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtNXB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5cXG5sZWdlbmQge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcblxcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5ib2R5Om5vdCg6LW1vei1oYW5kbGVyLWJsb2NrZWQpIGZpZWxkc2V0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuICogTWlzY1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCJAdXNlIFxcXCJzY3NzLXJlc2V0L3Jlc2V0XFxcIjtcXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2luemVsXFxcIiwgc2VyaWY7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmgxLFxcbi5oMixcXG4uaDMge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMDUlO1xcbiAgY29sb3I6ICR3aGl0ZTtcXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBmb250LXNpemU6IDc3cHg7XFxuICB9XFxufVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogJGRhcms7XFxuICBsaW5lLWhlaWdodDogMTE1JTtcXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgIGZvbnQtc2l6ZTogNDZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEwNSU7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTE1JTtcXG4gIH1cXG59XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcXG4gIH1cXG59XFxuXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wIHtcXG4gIGNvbG9yOiAkZGFyaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5idXR0b24ge1xcbiAgQGluY2x1ZGUgYnRuO1xcbn1cXG5cXG4ubm8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDUwcHggMjBweDtcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxuXFxuICBAaW5jbHVkZSB0YWJsZXQge1xcbiAgICBtYXgtd2lkdGg6IDc0NHB4O1xcbiAgICBwYWRkaW5nOiA3MHB4IDcycHg7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgbWF4LXdpZHRoOiAxMjYwcHg7XFxuICAgIHBhZGRpbmc6IDcwcHggMTIwcHg7XFxuICB9XFxufVxcblxcbi8qIENoYW5nZSBBdXRvY29tcGxldGUgc3R5bGVzIGluIENocm9tZSAqL1xcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkYmc7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGRhcms7XFxuICBib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggJGJnIGluc2V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XFxufVxcblxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwMHB4ICRiZyBpbnNldDtcXG59XFxuXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwMHB4ICRiZyBpbnNldDtcXG59XFxuXFxuLmRlc2t0b3Age1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLm5vLXRhYmxldCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5zZWN0aW9uLS1hbmltYXRpb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42NXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcblxcbiAgLnNlY3Rpb24tLWFjdGl2ZSAmIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbiAgfVxcbn1cXG5cIixcIiRtYWluLWFjY2VudDogI2QxMmQzNTtcXG4kbWFpbi1hY2NlbnQtZGFyazogI2FlMWMyMztcXG4kbWFpbi1hY2NlbnQtbGlnaHQ6ICNlYjM0M2Q7XFxuXFxuJGRhcms6ICMxNjE2MTY7XFxuJHdoaXRlOiAjZmZmZmZmO1xcblxcbiR0ZXh0OiAjN2U3ZTgzO1xcbiRiZzogI2Y4ZjhmYTtcXG4kYm9yZGVyOiAjZDVkN2RlO1xcblxcbiRtb2JpbGUtd2lkdGg6IDMyMHB4O1xcbiR0YWJsZXQtd2lkdGg6IDc0NHB4O1xcbiRkZXNrdG9wLXdpZHRoOiAxMjYwcHg7XFxuXCIsXCJAbWl4aW4gY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIG1heC13aWR0aDogMTAyMHB4O1xcblxcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5AbWl4aW4gYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMTRweCA0OHB4O1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XFxuXFxuICBjb2xvcjogJHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYWNjZW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMDtcXG5cXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWFjY2VudC1kYXJrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgfVxcblxcbiAgJjpob3Zlcjo6YWZ0ZXIge1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgJjphY3RpdmUge1xcbiAgICB0b3A6IDJweDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdGFibGV0IHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR0YWJsZXQtd2lkdGgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBkZXNrdG9wIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIixcIi5oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjVweCAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG5cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm8tbW9iaWxlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXG4gICAgcGFkZGluZzogNDhweCA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9oZXJvLXRhYmxldC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBwYWRkaW5nOiA0OHB4IDExOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9oZXJvLWRlc2t0b3AuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcblxcbiAgJl9fdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgJl9fY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDE5dmg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgICBtYXJnaW4tdG9wOiAxNXZoO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICAgIG1hcmdpbi10b3A6IDl2aDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxuICB9XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA0NnB4O1xcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgd2lkdGg6IDg3cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gIH1cXG59XFxuXFxuLmljb25zIHtcXG4gICZfX2ljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xcbiAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgIGhlaWdodDogMzJweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgZ2FwOiA1NXB4O1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxuICAgIGdhcDogNjBweDtcXG5cXG4gICAgLmljb24tcGhvbmUge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmljb24tbWVudSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxuICAmX19saW5lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMThweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXG5cXG4gICAgJjpudGgtY2hpbGQoMiksXFxuICAgICY6bnRoLWNoaWxkKDMpIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgICB3aWR0aDogMjVweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgIC5pY29uLW1lbnVfX2xpbmU6bnRoLWNoaWxkKDEpIHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgfVxcblxcbiAgICAuaWNvbi1tZW51X19saW5lOm50aC1jaGlsZCg0KSB7XFxuICAgICAgd2lkdGg6IDlweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi5vcGVuIHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gICYub3BlbiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG4gICYub3BlbiBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB9XFxuXFxuICAmLm9wZW4gc3BhbjpudGgtY2hpbGQoNCkge1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgJi5vcGVuOmhvdmVyIHtcXG4gICAgLmljb24tbWVudV9fbGluZTpudGgtY2hpbGQoMSkge1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLW1lbnVfX2xpbmU6bnRoLWNoaWxkKDQpIHtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaWNvbi1jb250YWN0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgfVxcblxcbiAgJjpmaXJzdC1jaGlsZCAmX19pbmZvIHtcXG4gICAgbWF4LWhlaWdodDogMXB4O1xcbiAgfVxcblxcbiAgJjpmaXJzdC1jaGlsZDpob3ZlciAmX19pbmZvIHtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAmX19pbmZvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNDhweDtcXG4gICAgdG9wOiAtNDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0IGFsbDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgJi1saW5rLFxcbiAgICAmLXRpdGxlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcblxcbiAgICAmLWxpbmsge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAwLjY7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi50cmlnZ2VyLWNhbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNzUlIDI1JTtcXG4gIGFuaW1hdGlvbjogY2FsbCAxcyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC41NywgMC45OSk7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxuXFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBhbmltYXRpb246IGJsb3cgMC40cyBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xcbiAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gICY6aG92ZXI6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uaW1hZ2UtdmlkZW8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG5cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm8tbW9iaWxlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxuXFxuICBpbnNldDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICBzY2FsZTogMS4yO1xcbiAgYW5pbWF0aW9uOiBrZW5idXJucyAzMHMgbGluZWFyIGluZmluaXRlO1xcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvaGVyby10YWJsZXQuanBnXFxcIik7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvaGVyby1kZXNrdG9wLmpwZ1xcXCIpO1xcbiAgfVxcblxcbiAgJiArIC5oZWFkZXIgLmhlYWRlcl9fY29udGVudCB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAkZGFyaztcXG4gIH1cXG59XFxuXCIsXCIubWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICB0cmFuc2l0aW9uOlxcbiAgICBvcGFjaXR5IDAuNXMgZWFzZSxcXG4gICAgdmlzaWJpbGl0eSAwLjVzIGVhc2U7XFxuICB6LWluZGV4OiAyMDA7XFxuICBvcGFjaXR5OiAxO1xcblxcbiAgJi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgIC5tZW51X193cmFwcGVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX3dyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWFjY2VudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbiAgfVxcblxcbiAgJl9faGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDI1cHggMjBweDtcXG5cXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYWNjZW50O1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xcbiAgICAgIHBhZGRpbmc6IDQ4cHggNzJweDtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgICBwYWRkaW5nOiA0OHB4IDExOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19jb250ZW50IHtcXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xcbiAgICAgIHBhZGRpbmc6IDE1cHggNzJweDtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgICBwYWRkaW5nOiA0OHB4IDExOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19saW5rIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1haW4tYWNjZW50LWxpZ2h0LCAkd2hpdGUgNTAlLCAkd2hpdGUgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlO1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLThweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIH1cXG5cXG4gICAgJjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fY29udGFjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAmLWNvbnRhY3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcblxcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7XFxuICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcblxcbiAgICAmLWNvbnRhY3QtLWxhc3Qge1xcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgICYtY29udGFjdDpob3ZlciAubWVudV9fY29udGFjdHMtbnVtYmVyOjpiZWZvcmUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICYtbnVtYmVyIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAmLW51bWJlcjo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDAlO1xcbiAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAmLW51bWJlcjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5zY2hlZHVsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyMDA7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYm94LXNoYWRvdzogMCA1MHB4IDAgJHdoaXRlO1xcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgYm94LXNoYWRvdzogMCA3MHB4IDAgJHdoaXRlO1xcbiAgfVxcblxcbiAgJl9faGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcXG4gIH1cXG5cXG4gICZfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7XFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgfVxcblxcbiAgJl9fc3VidGl0bGUge1xcbiAgICBjb2xvcjogJG1haW4tYWNjZW50O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgfVxcblxcbiAgJl9fdGV4dDpsYXN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcblxcbiAgICAuc2NoZWR1bGVfX21haW4tdGV4dCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19tYWluLXRleHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1pbi13aWR0aDogNDIlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcblxcbiAgJl9faXRlbS10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICBmbGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlLFxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICAmX19oZWFkZXIge1xcbiAgICAgIGZsZXg6IDAuNzU7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUsXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAmX19pdGVtIHtcXG4gICAgICBnYXA6IDEzcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGV4dDpsYXN0LWNoaWxkIHtcXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgIGdhcDogMjVweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5jdXJyZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbGluZS1oZWlnaHQ6IDE1NSU7XFxuXFxuICAmX19oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAmX190aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIH1cXG5cXG4gICZfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICB9XFxuXFxuICAmX19pdGVtLXBob3Rvcy0tMiB7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAxMzBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faXRlbS1waG90b3MtLTMge1xcbiAgICBnYXA6IDhweDtcXG5cXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAxNzBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faXRlbS1waG90b3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuXFxuICAgIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2l0ZW0taW1hZ2Uge1xcbiAgICBpbWcge1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgaW1nIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmX19pdGVtLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcblxcbiAgICBjb2xvcjogJG1haW4tYWNjZW50O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcblxcbiAgJl9fYWN0aW9ucyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgJi1idXR0b24ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICBAaW5jbHVkZSB0YWJsZXQge1xcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuXFxuICAgICZfX2FjdGlvbnMtYnV0dG9uIHtcXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgbWluLXdpZHRoOiAzOTJweDtcXG4gICAgfVxcblxcbiAgICAmX19pdGVtLXBob3Rvcy0tMiB7XFxuICAgICAgLmltYWdlLS1zcXVhcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxODZweDtcXG4gICAgICAgIHdpZHRoOiAxODZweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmltYWdlLS1sb25nIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0tcGhvdG9zLS0zIHtcXG4gICAgICBnYXA6IDIwcHg7XFxuXFxuICAgICAgLmltYWdlOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICAmX19pdGVtLXBob3Rvcy0tMiB7XFxuICAgICAgZ2FwOiAyOHB4O1xcblxcbiAgICAgIC5pbWFnZS0tc3F1YXJlIHtcXG4gICAgICAgIGhlaWdodDogMzIwcHg7XFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0tcGhvdG9zLS0zIHtcXG4gICAgICAuaW1hZ2U6bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19hY3Rpb25zLWJ1dHRvbiB7XFxuICAgICAgbWluLXdpZHRoOiAzMjVweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgJi0tbG9uZyB7XFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxuICAgICAgZmxleDogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tbG9uZyAuaW1hZ2VfX2ltYWdlIHtcXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcXG4gICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtLXNxdWFyZSB7XFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XFxuICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19pbWFnZSB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcblxcbiAgJl9faG92ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZDogJG1haW4tYWNjZW50O1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAmOmhvdmVyICZfX2hvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG5cXG4gICZfX2hvdmVyLS1ib3R0b20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuXFxuICAmOmhvdmVyICZfX2hvdmVyLS1ib3R0b20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcblxcbiAgJl9faG92ZXItLXRvcCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICB9XFxuXFxuICAmOmhvdmVyICZfX2hvdmVyLS10b3Age1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcblxcbiAgJl9faG92ZXItLXJpZ2h0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcblxcbiAgJjpob3ZlciAmX19ob3Zlci0tcmlnaHQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbn1cXG5cIixcIi5tb3JlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAmX19oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAmX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgfVxcblxcbiAgJl9faXRlbS1waG90byB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB9XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAtNzUlO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogI2QxMmQzNTtcXG4gICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMjVkZWcpO1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgYW5pbWF0aW9uOiBzaGluZSAwLjc1cztcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faXRlbS1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgJl9faXRlbS10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgY29sb3I6ICRtYWluLWFjY2VudDtcXG4gIH1cXG5cXG4gICZfX2l0ZW0tdGV4dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgIG1heC13aWR0aDogMzkycHg7XFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgZmxleDogMTtcXG4gICAgfVxcblxcbiAgICAmX19pdGVtLXBob3RvIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgJl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgd2lkdGg6IDQ1MHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDUlO1xcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0tcGhvdG8ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9faXRlbS10ZXh0IHtcXG4gICAgICBsaW5lLWhlaWdodDogMTY1JTtcXG4gICAgfVxcblxcbiAgICAmX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIuY29udGFjdHMge1xcbiAgJl9faGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG4gIH1cXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgJl9faW5mby1pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIH1cXG5cXG4gICZfX2luZm8tdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbiAgfVxcblxcbiAgLmFkcmVzc19fbGluayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAkZGFyaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAwLjNzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJG1haW4tYWNjZW50O1xcbiAgICB9XFxuICB9XFxuXFxuICAuYWRyZXNzX190aXRsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcblxcbiAgJl9fZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG5cXG4gICZfX2lucHV0IHtcXG4gICAgcGFkZGluZzogMTJweCAxMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZDogJGJnO1xcbiAgICBjb2xvcjogJGRhcms7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjNzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xcbiAgICB9XFxuXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXJrO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNTJweDtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBnYXA6IDIzcHg7XFxuICAgIH1cXG5cXG4gICAgJl9faW5mbyB7XFxuICAgICAgZmxleDogMTtcXG4gICAgfVxcblxcbiAgICAmX19mb3JtIHtcXG4gICAgICBmbGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICZfX2luZm8taXRlbSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICBnYXA6IDY1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9faW5mbyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDc1cHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fZm9ybSB7XFxuICAgICAgZmxleDogMC43NTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5mb290ZXIge1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvZm9vdGVyLW1vYmlsZS0zLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcblxcbiAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgbWluLWhlaWdodDogMzYwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2Zvb3Rlci10YWJsZXQtMi5qcGdcXFwiKTtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9mb290ZXItZGVza3RvcC0xLmpwZ1xcXCIpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3Njc3MvaW5kZXguc2Nzc1wiO1xuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgZXZlbnQ6IEV2ZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmVudW0gTWVudUlEcyB7XG4gIG9wZW4gPSBcIm9wZW4tbWVudVwiLFxuICBjbG9zZSA9IFwiY2xvc2UtbWVudVwiLFxuICBtZW51ID0gXCJtZW51XCIsXG59XG5cbmVudW0gTWVudUNsYXNzZXMge1xuICByZW1vdmVCb2R5U2Nyb2xsID0gXCJuby1zY3JvbGxcIixcbiAgaGlkZU1lbnUgPSBcImhpZGRlblwiLFxuICBvcGVuTWVudUJsb2NrID0gXCJvcGVuXCIsXG59XG5cbmludGVyZmFjZSBJTWVudSB7XG4gIG9wZW5CdXR0b246IEhUTUxFbGVtZW50O1xuICBjbG9zZUJ1dHRvbjogSFRNTEVsZW1lbnQ7XG4gIGJsb2NrVG9TaG93OiBIVE1MRWxlbWVudDtcbn1cblxuY2xhc3MgTWVudSBpbXBsZW1lbnRzIElNZW51IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG9wZW5CdXR0b246IEhUTUxFbGVtZW50LFxuICAgIHB1YmxpYyBjbG9zZUJ1dHRvbjogSFRNTEVsZW1lbnQsXG4gICAgcHVibGljIGJsb2NrVG9TaG93OiBIVE1MRWxlbWVudCxcbiAgKSB7XG4gICAgdGhpcy5hZGRUb2dnbGVJY29uKG9wZW5CdXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZE9uTWVudUxpbmtDbGljaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRUb2dnbGVJY29uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2xhc3MuYmluZChudWxsLCBNZW51Q2xhc3Nlcy5vcGVuTWVudUJsb2NrKSk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZU1lbnUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgY2xpY2tlZCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBidXR0b246IEhUTUxFbGVtZW50ID0gY2xpY2tlZC5pZCA/IGNsaWNrZWQgOiAoY2xpY2tlZC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KTtcblxuICAgIGlmIChidXR0b24uaWQgPT09IE1lbnVJRHMub3Blbikge1xuICAgICAgdGhpcy5ibG9ja1RvU2hvdy5jbGFzc0xpc3QucmVtb3ZlKE1lbnVDbGFzc2VzLmhpZGVNZW51KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChNZW51Q2xhc3Nlcy5yZW1vdmVCb2R5U2Nyb2xsKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub3BlbkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKE1lbnVDbGFzc2VzLm9wZW5NZW51QmxvY2spO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uLmlkID09PSBNZW51SURzLmNsb3NlKSB7XG4gICAgICB0aGlzLmJsb2NrVG9TaG93LmNsYXNzTGlzdC5hZGQoTWVudUNsYXNzZXMuaGlkZU1lbnUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKE1lbnVDbGFzc2VzLnJlbW92ZUJvZHlTY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkT25NZW51TGlua0NsaWNrKCkge1xuICAgIGlmICh0aGlzLmJsb2NrVG9TaG93KSB7XG4gICAgICB0aGlzLmJsb2NrVG9TaG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNjcm9sbFRvLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG8oZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgY29uc3QgaHJlZiA9IGVsZW1lbnQuaHJlZjtcblxuICAgIGlmIChocmVmKSB7XG4gICAgICBjb25zdCBpZCA9IGhyZWYuc3BsaXQoXCIjXCIpWzFdO1xuXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgdGhpcy5ibG9ja1RvU2hvdy5jbGFzc0xpc3QuYWRkKE1lbnVDbGFzc2VzLmhpZGVNZW51KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKE1lbnVDbGFzc2VzLnJlbW92ZUJvZHlTY3JvbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvcGVuTWVudUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtNZW51SURzLm9wZW59YCk7XG5jb25zdCBjbG9zZU1lbnVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7TWVudUlEcy5jbG9zZX1gKTtcbmNvbnN0IG1lbnU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7TWVudUlEcy5tZW51fWApO1xuXG5pZiAob3Blbk1lbnVCdXR0b24gJiYgY2xvc2VNZW51QnV0dG9uICYmIG1lbnUpIHtcbiAgbmV3IE1lbnUob3Blbk1lbnVCdXR0b24sIGNsb3NlTWVudUJ1dHRvbiwgbWVudSk7XG59XG5cbmNvbnN0IGNhbGxBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICBpZiAoaWNvbi5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpY29uLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidHJpZ2dlci1jYWxsXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbi50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRyaWdnZXItY2FsbFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgaWNvbnMgPSBBcnJheS5mcm9tKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pY29uPVwicGhvbmVcIl0nKSk7XG5cbiAgaWYgKGljb25zLmxlbmd0aCA+IDApIHtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiBvYnNlcnZlci5vYnNlcnZlKGljb24pKTtcbiAgfVxufTtcblxuY29uc3QgaGVyb0FuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBpZiAoYmxvY2suaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgYmxvY2sudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJpbWFnZS12aWRlb1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJsb2NrLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaW1hZ2UtdmlkZW9cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGhlcm8gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYmxvY2s9XCJoZXJvXCJdJyk7XG5cbiAgaWYgKGhlcm8pIHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGhlcm8pO1xuICB9XG59O1xuXG5jb25zdCBpbnRlcnNlY3Rpb25IYW5kbGVyID0gKGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB7XG4gIGNvbnN0IG5leHQgPSBlbnRyeS50YXJnZXQ7XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLS1hY3RpdmVcIik7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ibG9jaz1cInNlY3Rpb25cIl0nKSk7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgdGhyZXNob2xkOiAwLjAyLFxuICB9O1xuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIGludGVyc2VjdGlvbkhhbmRsZXIoZW50cnkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBjb25maWcpO1xuXG4gIGlmIChzZWN0aW9ucy5sZW5ndGgpIHtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgIH0pO1xuICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2FsbEFuaW1hdGlvbik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaGVyb0FuaW1hdGlvbik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY29udGVudEFuaW1hdGlvbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=