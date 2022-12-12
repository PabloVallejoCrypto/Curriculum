"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 1185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ map)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__(7941);
;// CONCATENATED MODULE: external "@react-google-maps/api"
const api_namespaceObject = require("@react-google-maps/api");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/chaoticLogo.png
var chaoticLogo = __webpack_require__(8980);
// EXTERNAL MODULE: ./components/store.js
var store = __webpack_require__(3824);
;// CONCATENATED MODULE: ./components/map/map.js






const containerStyle = {
    padding: "5%",
    width: "100vw",
    height: "100vh"
};
const center = {
    lat: 41.390205,
    lng: 2.154007
};
const libraries = (/* unused pure expression or super */ null && ([
    "places"
]));
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
    const { isLoaded , loadError  } = (0,api_namespaceObject.useJsApiLoader)({
        googleMapsApiKey: props.KEY.KEY,
        libraries: [
            "places"
        ]
    });
    const [map, setMap] = external_react_default().useState(null);
    const [mapCenter, setMapCenter] = external_react_default().useState(center);
    const [markerPosition, setMarkerPosition] = external_react_default().useState(null);
    const [markerHidden, setMarkerHidden] = external_react_default().useState(true);
    const [autoComplete, setAutoComplete] = external_react_default().useState(null);
    const mapClick = (clickPosition)=>{
        setMarkerPosition({
            lat: clickPosition.latLng.lat(),
            lng: clickPosition.latLng.lng()
        });
        store/* default.dispatch */.Z.dispatch({
            type: "newMark",
            payload: {
                type: "mapClick",
                lat: clickPosition.latLng.lat(),
                lng: clickPosition.latLng.lng()
            }
        });
        setMarkerHidden(false);
    };
    const onLoad = (autocomplete)=>setAutoComplete(autocomplete);
    const onPlacesChanged = ()=>{
        if (autoComplete !== null) {
            console.log(autoComplete.getPlace());
            if (autoComplete.getPlace().geometry !== undefined) {
                setMarkerPosition({
                    lat: autoComplete.getPlace().geometry.location.lat(),
                    lng: autoComplete.getPlace().geometry.location.lng()
                });
                setMarkerHidden(false);
                store/* default.dispatch */.Z.dispatch({
                    type: "newMark",
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
            console.log("Autocomplete is not loaded yet!");
        }
    };
    const onUnmount = external_react_default().useCallback(function callback(map) {
        setMap(null);
    }, []);
    return isLoaded ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(api_namespaceObject.GoogleMap, {
                id: "googleMap",
                mapContainerStyle: containerStyle,
                center: mapCenter,
                zoom: 10,
                onLoad: onLoad,
                onUnmount: onUnmount,
                onClick: mapClick,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(api_namespaceObject.Marker, {
                            position: markerPosition,
                            hidden: markerHidden,
                            id: "chaoticMarker"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(api_namespaceObject.Autocomplete, {
                            onLoad: onLoad,
                            onPlaceChanged: onPlacesChanged,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                className: "text-center",
                                placeholder: "Search your favorite place",
                                style: inputStyle
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/apps",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "badge badgeWhite",
                    style: returnStyle,
                    children: "  RETURN  "
                })
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

;// CONCATENATED MODULE: ./pages/map/index.js



const rowStyle = {
    padding: "3%"
};
function MapPage(pageProps) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(head/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Map, {
                KEY: pageProps
            })
        ]
    });
}
//
MapPage.getInitialProps = async (context)=>{
    return {
        KEY: process.env.GOOGLE_API_KEY
    };
};
/* harmony default export */ const map = (MapPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,941,824], () => (__webpack_exec__(1185)));
module.exports = __webpack_exports__;

})();