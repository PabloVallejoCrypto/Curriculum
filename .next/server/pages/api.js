"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 9976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3118);
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    console.log(req);
    if (req.method === "GET") {
        // Process a POST request
        const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
            apiKey: "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"
        });
        const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            temperature: 0,
            max_tokens: 7
        });
        res.status(200).json({
            name: "response"
        });
    } else {
    // Handle any other HTTP method
    }
}


/***/ }),

/***/ 3118:
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9976));
module.exports = __webpack_exports__;

})();