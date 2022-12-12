(function() {
var exports = {};
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 5648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deepai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5212);
/* harmony import */ var deepai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_text_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2490);
/* harmony import */ var _components_head_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2590);



 //Components




function TextPageDinamic(pageProps) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_head_js__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_text_text_js__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      text: pageProps
    })]
  });
} //


TextPageDinamic.getInitialProps = async context => {
  const {
    query
  } = context;
  await deepai__WEBPACK_IMPORTED_MODULE_1___default().setApiKey(process.env.DEEPAI_KEY);
  var resp = await deepai__WEBPACK_IMPORTED_MODULE_1___default().callStandardApi("text-generator", {
    text: query.newText
  }).catch(e => {
    console.error(e);
  });
  return [resp, query.newText];
};

/* harmony default export */ __webpack_exports__["default"] = (TextPageDinamic);

/***/ }),

/***/ 5212:
/***/ (function(module) {

"use strict";
module.exports = require("deepai");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,932,490], function() { return __webpack_exec__(5648); });
module.exports = __webpack_exports__;

})();