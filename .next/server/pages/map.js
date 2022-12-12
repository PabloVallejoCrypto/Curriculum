(function() {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 8343:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ map; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(2590);
;// CONCATENATED MODULE: external "@react-google-maps/api"
var api_namespaceObject = require("@react-google-maps/api");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./public/chaoticLogo.png
var chaoticLogo = __webpack_require__(6576);
// EXTERNAL MODULE: ./components/store.js
var store = __webpack_require__(2223);
;// CONCATENATED MODULE: ./components/map/map.js








const containerStyle = {
  padding: "5%",
  width: '100vw',
  height: '100vh'
};
const center = {
  lat: 41.390205,
  lng: 2.154007
};
const libraries = (/* unused pure expression or super */ null && (["places"]));
const inputStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px"
};
const returnStyle = {
  position: "absolute",
  bottom: "25px",
  left: "25px",
  textDecoration: "none"
};
function Map(props) {
  const {
    isLoaded,
    loadError
  } = (0,api_namespaceObject.useJsApiLoader)({
    googleMapsApiKey: props.KEY.KEY,
    libraries: ['places']
  });
  const [map, setMap] = external_react_default().useState(null);
  const [mapCenter, setMapCenter] = external_react_default().useState(center);
  const [markerPosition, setMarkerPosition] = external_react_default().useState(null);
  const [markerHidden, setMarkerHidden] = external_react_default().useState(true);
  const [autoComplete, setAutoComplete] = external_react_default().useState(null);

  const mapClick = clickPosition => {
    setMarkerPosition({
      lat: clickPosition.latLng.lat(),
      lng: clickPosition.latLng.lng()
    });
    store/* default.dispatch */.Z.dispatch({
      type: 'newMark',
      payload: {
        type: "mapClick",
        lat: clickPosition.latLng.lat(),
        lng: clickPosition.latLng.lng()
      }
    });
    setMarkerHidden(false);
  };

  const onLoad = autocomplete => setAutoComplete(autocomplete);

  const onPlacesChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());

      if (autoComplete.getPlace().geometry !== undefined) {
        setMarkerPosition({
          lat: autoComplete.getPlace().geometry.location.lat(),
          lng: autoComplete.getPlace().geometry.location.lng()
        });
        setMarkerHidden(false);
        store/* default.dispatch */.Z.dispatch({
          type: 'newMark',
          payload: autoComplete.getPlace()
        });
        setMapCenter({
          lat: autoComplete.getPlace().geometry.location.lat(),
          lng: autoComplete.getPlace().geometry.location.lng()
        });
      } else {
        console.log("No place found");
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const onUnmount = external_react_default().useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(api_namespaceObject.GoogleMap, {
      id: "googleMap",
      mapContainerStyle: containerStyle,
      center: mapCenter,
      zoom: 10,
      onLoad: onLoad,
      onUnmount: onUnmount,
      onClick: mapClick,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(api_namespaceObject.Marker, {
          position: markerPosition,
          hidden: markerHidden,
          id: "chaoticMarker"
        }), /*#__PURE__*/jsx_runtime_.jsx(api_namespaceObject.Autocomplete, {
          onLoad: onLoad,
          onPlaceChanged: onPlacesChanged,
          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            className: "text-center",
            placeholder: "Search your favorite place",
            style: inputStyle
          })
        })]
      }), "}"]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/apps",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "badge badgeWhite",
        style: returnStyle,
        children: "  RETURN  "
      })
    })]
  }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}
;// CONCATENATED MODULE: ./pages/map/index.js





const rowStyle = {
  padding: "3%"
};

function MapPage(pageProps) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(head/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Map, {
      KEY: pageProps
    })]
  });
} //


MapPage.getInitialProps = async context => {
  return {
    KEY: process.env.GOOGLE_API_KEY
  };
};

/* harmony default export */ var map = (MapPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [821,61,932,223], function() { return __webpack_exec__(8343); });
module.exports = __webpack_exports__;

})();