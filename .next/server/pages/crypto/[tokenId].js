(function() {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 2987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _tokenId_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "deepai"
var external_deepai_ = __webpack_require__(5212);
var external_deepai_default = /*#__PURE__*/__webpack_require__.n(external_deepai_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/crypto/tokenCard.js




const divStyle = {
  padding: "5%",
  backgroundColor: "#333",
  minHeight: "100vh"
};
const containerStyle = {
  padding: "3.5%"
};
const titleStyle = {
  margin: "3%",
  padding: "2%"
};
function TokenCard(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-lg-12",
    style: divStyle,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-lg-6 mx-auto cardStyle2 text-center",
      style: containerStyle,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "display-2",
        style: titleStyle,
        children: "  Deep NFToken  "
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: props.imageLink,
        className: "redondeado",
        layout: "responsive",
        width: "175px",
        height: "150px",
        alt: "Chaotic Barcelona Logo"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-lg-8 mx-auto",
        style: titleStyle,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "lead",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "badgeWhite",
            children: [" ID: ", props.tokenId, "  "]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/apps",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "lead text-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "btn mx-auto magicButton cuadrado",
              children: "  RETURN  "
            })
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(2590);
;// CONCATENATED MODULE: ./pages/crypto/[tokenId]/index.js



 //Components



const styleUrl = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.analogmuseum.org%2Fenglish%2Fexamples%2Florenz_attractor%2Fattractor.jpg&f=1&nofb=1";
const imageStyle = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*bsYCkBd9So8ojNbrsiKPnQ.jpeg&f=1&nofb=1';
const imageStyle1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.hipwallpaper.com%2Fi%2F92%2F40%2FOzV8Mv.jpg&f=1&nofb=1';
const imageStyle2 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.abm-enterprises.net%2Ffractal-art-2%2Fchaos-theory-3-wallpaper.jpg&f=1&nofb=1';

function TokenPage(pageProps) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(head/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(TokenCard, {
      imageLink: pageProps.imageLink,
      tokenId: pageProps.tokenId
    })]
  });
} //


TokenPage.getInitialProps = async context => {
  const {
    query
  } = context;
  await external_deepai_default().setApiKey(process.env.DEEPAI_KEY);
  var resp = await external_deepai_default().callStandardApi("text2img", {
    text: query.tokenId.toString()
  });
  var resp1 = await external_deepai_default().callStandardApi("deepdream", {
    image: resp.output_url
  });
  var resp2 = await external_deepai_default().callStandardApi("fast-style-transfer", {
    content: resp1.output_url,
    style: imageStyle
  });
  var resp3 = await external_deepai_default().callStandardApi("deepdream", {
    image: resp2.output_url
  });
  return {
    imageLink: resp3.output_url,
    tokenId: query.tokenId
  };
};

/* harmony default export */ var _tokenId_ = (TokenPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,932], function() { return __webpack_exec__(2987); });
module.exports = __webpack_exports__;

})();