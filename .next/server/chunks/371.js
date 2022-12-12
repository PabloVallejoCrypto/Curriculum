"use strict";
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 7706:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/googleMapsPhoto.efaffb98.jpg","height":630,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAuwwf/8QAHBAAAgEFAQAAAAAAAAAAAAAAAgMRAAEFEiEi/9oACAEBAAE/ACWJ5BpFMrXuPb8nzX//xAAaEQABBQEAAAAAAAAAAAAAAAACAAEEEiEy/9oACAECAQE/AIojQsbpf//EABoRAQABBQAAAAAAAAAAAAAAAAERAAMhIrH/2gAIAQMBAT8AvLqS4ntf/9k=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 5371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Apps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/cv/cardBase.json
var cardBase = __webpack_require__(6360);
// EXTERNAL MODULE: ./components/cardLevel.js
var cardLevel = __webpack_require__(8526);
// EXTERNAL MODULE: ./public/googleMapsPhoto.jpg
var googleMapsPhoto = __webpack_require__(7706);
// EXTERNAL MODULE: ./public/chaoticLogo.png
var chaoticLogo = __webpack_require__(8980);
;// CONCATENATED MODULE: ./public/badgeApps.png
/* harmony default export */ const badgeApps = ({"src":"/_next/static/media/badgeApps.85aebca2.png","height":769,"width":1148,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAf0lEQVR42mPol9Npl9Fqk9HskNHqADNapTWBggwT5HT7FVQ7ZYES2p0yWt2yOn3yehNAEvLafTwOfdIG3XKK3XKqfTJqk6UkJsrrMUzjk5lZWNhl79irlNOjntyn69XkWD9JjI9hkqTOZD+tPk25yUpJk5Ui+tWtO01TJ0rJAwBoPSPkfuhNoQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./components/loader.js
var loader = __webpack_require__(5140);
;// CONCATENATED MODULE: ./components/apps.js










const divStyle = {
    padding: "3%",
    backgroundColor: "#333",
    justifyContent: "center"
};
const titleStyle = {
    margin: "3%"
};
const buttonStyle = {
    margin: "3%",
    padding: "3%"
};
function Apps() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-lg-12 text-center",
        style: divStyle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 mx-auto",
                style: titleStyle,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: badgeApps,
                    className: "redondeado",
                    layout: "responsive",
                    alt: "Badge of the Title"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://github.com/PabloVallejoCrypto/Curriculum",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn mb-3 mx-auto magicButton",
                    style: buttonStyle,
                    children: "  All code here!  "
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(cardLevel/* default */.Z, {
                        title: "Google Maps API",
                        level: 1,
                        link: "/map",
                        logo: cardBase/* images.0 */.W[0],
                        description: cardBase/* descriptions.0 */.T[0]
                    }, 1),
                    /*#__PURE__*/ jsx_runtime_.jsx(cardLevel/* default */.Z, {
                        title: "GPT-2 AI",
                        level: 2,
                        link: "/text",
                        logo: cardBase/* images.1 */.W[1],
                        description: cardBase/* descriptions.1 */.T[1]
                    }, 2)
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cardLevel/* default */.Z, {
                title: "DeepAI NFT",
                link: "/crypto",
                level: 5,
                logo: chaoticLogo/* default */.Z,
                description: cardBase/* descriptions.4 */.T[4]
            }, 5),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn mb-3 mx-auto magicButton",
                        children: " RETURN "
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 8526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Card(props = {}) {
    const divStyle = {
        padding: "2.5%",
        margin: "2%",
        animation: "coolStart 3." + props.level * 4 + "s ease",
        justifyContent: "center"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " col-lg-4 cardStyle2 text-left mx-auto mb-3",
        id: "level" + props.level,
        style: divStyle,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: props.logo,
                        className: "btn redondeado mx-auto",
                        layout: "responsive",
                        width: "75px",
                        height: "75px",
                        alt: props.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "display-6",
                        children: [
                            " ",
                            props.title,
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    textAlign: "left"
                },
                children: props.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: props.link,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn mx-auto mb-3 magicButton cuadrado",
                    children: "GO TO APP"
                })
            })
        ]
    });
}


/***/ }),

/***/ 5140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function Loader() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-10 mx-auto text-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "loader",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inner one"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inner two"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inner three"
                    })
                ]
            })
        })
    });
}
;


/***/ }),

/***/ 6360:
/***/ ((module) => {

module.exports = JSON.parse('{"W":["https://img.icons8.com/color/480/000000/google-maps.png","https://img.icons8.com/nolan/512/artificial-intelligence.png"],"T":["Next JS app. Google Maps API implemented with Redux for state storage. Include LoadScript, Marker and AutoComplete (Search Box) methods, all saved by Redux.","Next JS app. GPT-2 Artificial Intelligence implementation. DeepAI API Text-Generator Model. Inputs saved with Redux.",0,0,"Next JS app. Own crypto NFT generator with some DeepAI Artificial Intelligence implementation for image generating. You\'ll need a wallet, Metamask recomended."]}');

/***/ })

};
;