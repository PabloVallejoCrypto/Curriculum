"use strict";
(() => {
var exports = {};
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 7370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ neuralTalk)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "deepai"
var external_deepai_ = __webpack_require__(5178);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/pexelsLogo.png
var pexelsLogo = __webpack_require__(6883);
// EXTERNAL MODULE: ./components/store.js
var store = __webpack_require__(3824);
;// CONCATENATED MODULE: ./components/neuralTalk/inputDiv.js




const styleDiv = {
    padding: "5%"
};
const styleInput = {
    borderRadius: "10px"
};
function InputDiv(props) {
    const makeChange = async ()=>{
        const inputUrl = document.getElementById("inputUrl");
        if (inputUrl.value != "") {
            store/* default.dispatch */.Z.dispatch({
                type: "neuralUrl",
                payload: inputUrl.value
            });
        } else {
            inputUrl.placeholder = "Incorrect Url";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        action: "/neuralTalk",
        method: "GET",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                className: "text-center",
                onChange: makeChange,
                placeholder: props.error ? "AI don't like that image" : "Image URL",
                id: "inputUrl",
                style: styleInput
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                type: "submit",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn magicButton",
                    children: "  GENERATE   "
                })
            })
        ]
    });
}
;

// EXTERNAL MODULE: ./components/loader.js
var loader = __webpack_require__(5140);
// EXTERNAL MODULE: external "openai"
var external_openai_ = __webpack_require__(3118);
;// CONCATENATED MODULE: ./components/neuralTalk/neuralTalk.js











const neuralTalk_styleDiv = {
    padding: "7.5%",
    backgroundColor: "#333",
    minHeight: "100vh"
};
const containerStyle = {
    padding: "5%"
};
const neuralTalk_styleInput = {
    borderRadius: "10px"
};
function NeuralTalk(props) {
    const state = store/* default.getState */.Z.getState();
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-12 mx-auto text-center",
        style: neuralTalk_styleDiv,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-8 cardStyle2 mx-auto",
            style: containerStyle,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "display-4",
                    children: " Neural Talk 2 AI "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "lead",
                    children: " Choose a random image and AI will tell you what is going on!  "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "  For security reasons we only allow Pexels.com images  "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://www.pexels.com/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "btn magicButton mb-3",
                        children: [
                            "Choose a cool image",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: pexelsLogo/* default */.Z,
                                className: "redondeado",
                                width: "35px",
                                height: "35px"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(InputDiv, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: state.neuralUrl[state.neuralUrl.length - 1],
                    className: "redondeado",
                    width: "250px",
                    height: "250px"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "display-6",
                    style: {
                        textAlign: "left"
                    },
                    children: "  Output  "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "lead",
                    style: {
                        textAlign: "left"
                    },
                    children: [
                        " ",
                        props.neural.output,
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/apps",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn cuadrado magicButton mb-3 mx-auto",
                        children: " RETURN "
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(7941);
;// CONCATENATED MODULE: ./pages/neuralTalk/index.js



//Components



function NeuralTalkPage(pageProps) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(head/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NeuralTalk, {
                neural: pageProps
            })
        ]
    });
}
//
NeuralTalkPage.getInitialProps = async (context)=>{
    return true;
};
/* harmony default export */ const neuralTalk = (NeuralTalkPage);


/***/ }),

/***/ 5178:
/***/ ((module) => {

module.exports = require("deepai");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 3118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,941,824,359], () => (__webpack_exec__(7370)));
module.exports = __webpack_exports__;

})();