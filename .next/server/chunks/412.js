exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 8742:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"W":["https://img.icons8.com/color/480/000000/google-maps.png","https://img.icons8.com/nolan/512/artificial-intelligence.png"],"T":["Next JS app. Google Maps API implemented with Redux for state storage. Include LoadScript, Marker and AutoComplete (Search Box) methods, all saved by Redux.","Next JS app. GPT-2 Artificial Intelligence implementation. DeepAI API Text-Generator Model. Inputs saved with Redux.",0,0,"Next JS app. Own crypto NFT generator with some DeepAI Artificial Intelligence implementation for image generating. You\'ll need a wallet, Metamask recomended."]}');

/***/ }),

/***/ 9412:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Apps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/cv/cardBase.json
var cardBase = __webpack_require__(8742);
// EXTERNAL MODULE: ./components/cardLevel.js
var cardLevel = __webpack_require__(3121);
// EXTERNAL MODULE: ./public/googleMapsPhoto.jpg
var googleMapsPhoto = __webpack_require__(3664);
// EXTERNAL MODULE: ./public/chaoticLogo.png
var chaoticLogo = __webpack_require__(6576);
;// CONCATENATED MODULE: ./public/badgeApps.png
/* harmony default export */ var badgeApps = ({"src":"/_next/static/image/public/badgeApps.84ad24a1a85bbef1e33ca39401ae82de.png","height":769,"width":1148,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAiklEQVR42h3KOwrCQBSG0e+/M+OzMbUgCAEbGzfgBlyHuBzX42IEK4sghECIYuJcxe4UR+fV1l85u+MYAiDjuMMsBEyISewJAhACkgLTmP42lPHHkpTHBOsw+2V/k/oKybBR3TA/7hjKQhYPaLqHoqTenKTnjTjMF3yuF2LVemINfcdAw7i9u8eCL1l8LWHGLZb1AAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./components/loader.js
var loader = __webpack_require__(9059);
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "col-lg-12 text-center",
    style: divStyle,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-lg-6 mx-auto",
      style: titleStyle,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: badgeApps,
        className: "redondeado",
        layout: "responsive",
        alt: "Badge of the Title"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "https://github.com/PabloVallejoCrypto/Curriculum",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn mb-3 mx-auto magicButton",
        style: buttonStyle,
        children: "  All code here!  "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(cardLevel/* default */.Z, {
        title: "Google Maps API",
        level: 1,
        link: "/map",
        logo: cardBase/* images.0 */.W[0],
        description: cardBase/* descriptions.0 */.T[0]
      }, 1), /*#__PURE__*/jsx_runtime_.jsx(cardLevel/* default */.Z, {
        title: "GPT-2 AI",
        level: 2,
        link: "/text",
        logo: cardBase/* images.1 */.W[1],
        description: cardBase/* descriptions.1 */.T[1]
      }, 2)]
    }), /*#__PURE__*/jsx_runtime_.jsx(cardLevel/* default */.Z, {
      title: "DeepAI NFT",
      link: "/crypto",
      level: 5,
      logo: chaoticLogo/* default */.Z,
      description: cardBase/* descriptions.4 */.T[4]
    }, 5), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn mb-3 mx-auto magicButton",
          children: " RETURN "
        })
      })
    })]
  });
}

/***/ }),

/***/ 3121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);




function Card(props = {}) {
  const divStyle = {
    padding: "2.5%",
    margin: "2%",
    animation: "coolStart 3." + props.level * 4 + "s ease",
    justifyContent: "center"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: " col-lg-4 cardStyle2 text-left mx-auto mb-3",
    id: "level" + props.level,
    style: divStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row mx-auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        src: props.logo,
        className: "btn redondeado mx-auto",
        layout: "responsive",
        width: "75px",
        height: "75px",
        alt: props.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        className: "display-6",
        children: [" ", props.title, " "]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      style: {
        textAlign: "left"
      },
      children: props.description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      href: props.link,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "btn mx-auto mb-3 magicButton cuadrado",
        children: "GO TO APP"
      })
    })]
  });
}

/***/ }),

/***/ 9059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Loader; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);




function Loader() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "col-lg-10 mx-auto text-center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "#",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "loader",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "inner one"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "inner two"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "inner three"
        })]
      })
    })
  });
}
;

/***/ }),

/***/ 3664:
/***/ (function() {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/googleMapsPhoto.5642d1bfb0c3740c1eeac8a4a43b03f2.jpg","height":630,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAHf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAG//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAA//xAAcEAACAQUBAAAAAAAAAAAAAAACAxEAAQUSISL/2gAIAQEAAT8AJYnkGkUyte49vyfNf//EABoRAAEFAQAAAAAAAAAAAAAAAAIAAQQSITL/2gAIAQIBAT8AiiNCxul//8QAGhEBAAEFAAAAAAAAAAAAAAAAAREAAyEisf/aAAgBAwEBPwC8upLie1//2Q=="});

/***/ })

};
;