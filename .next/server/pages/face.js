(function() {
var exports = {};
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 755:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ face; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "deepai"
var external_deepai_ = __webpack_require__(5212);
var external_deepai_default = /*#__PURE__*/__webpack_require__.n(external_deepai_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./public/pexelsLogo.png
var pexelsLogo = __webpack_require__(9948);
// EXTERNAL MODULE: ./components/loader.js
var loader = __webpack_require__(9059);
// EXTERNAL MODULE: ./components/store.js
var store = __webpack_require__(2223);
;// CONCATENATED MODULE: ./components/face/inputDiv.js





const styleDiv = {
  padding: "5%"
};
const styleInput = {
  borderRadius: "10px"
};
function InputDiv(props) {
  const makeChange = () => {
    const inputUrl = document.getElementById('inputUrl');

    if (inputUrl.value != '') {
      store/* default.dispatch */.Z.dispatch({
        type: 'faceUrl',
        payload: inputUrl.value
      });
      console.log("Value dispatched" + inputUrl.value);
    } else {
      inputUrl.placeholder = 'Incorrect Url';
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    action: "/face",
    method: "GET",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "text",
      className: "text-center",
      onChange: makeChange,
      placeholder: props.error ? "AI don't like that image" : 'Image URL',
      id: "inputUrl",
      style: styleInput
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      type: "submit",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn magicButton",
        children: "  GENERATE "
      })
    })]
  });
}
;
;// CONCATENATED MODULE: ./components/face/face.js










const face_styleDiv = {
  padding: "5%",
  backgroundColor: "#333",
  minHeight: "100vh"
};
const containerStyle = {
  padding: "5%"
};
const face_styleInput = {
  borderRadius: "10px"
};
function Face(props) {
  const state = store/* default.getState */.Z.getState();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-lg-12 mx-auto text-center",
    style: face_styleDiv,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-lg-8 cardStyle2 mx-auto",
      style: containerStyle,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "display-4",
        children: " Facial Recognition AI "
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "lead",
        children: " Choose a face image and AI will tell you their age and appearance!  "
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "  For security reasons we only allow Pexels.com images  "
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "https://www.pexels.com/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "btn magicButton mb-3",
          children: ["Choose a cool image", /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: pexelsLogo/* default */.Z,
            className: "redondeado",
            width: "35px",
            height: "35px"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: /*#__PURE__*/jsx_runtime_.jsx(InputDiv, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: state.faceUrl[state.faceUrl.length - 1],
        className: "redondeado",
        width: "250px",
        height: "250px"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-lg-4 mx-auto",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "lead",
          children: [" Gender:  ", props.face.faces[0].gender, "  "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "lead",
          children: [" Age range:  ", props.face.faces[0].age_range[0], " - ", props.face.faces[0].age_range[1], " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "lead",
          children: [" Age Coincidence:  ", props.face.faces[0].age_range_confidence, "  "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "lead",
          children: [" Cultural Appearance: ", props.face.faces[0].cultural_appearance, " "]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/apps",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn cuadrado magicButton mb-3 mx-auto",
          children: " RETURN "
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(2590);
;// CONCATENATED MODULE: ./pages/face/index.js



 //Components





function FacePage(pageProps) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(head/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Face, {
      face: pageProps
    })]
  });
} //


FacePage.getInitialProps = async context => {
  const state = store/* default.getState */.Z.getState();
  await external_deepai_default().setApiKey(process.env.DEEPAI_KEY);
  var resp = await external_deepai_default().callStandardApi("demographic-recognition", {
    image: state.faceUrl[state.faceUrl.length - 1]
  }).catch(e => {
    console.error(e);
    return state.faceDesc[0];
  });
  store/* default.dispatch */.Z.dispatch({
    type: 'faceDesc',
    payload: resp.output
  });
  return resp.output;
};

/* harmony default export */ var face = (FacePage);

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

/***/ }),

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,61,932,223,496], function() { return __webpack_exec__(755); });
module.exports = __webpack_exports__;

})();