"use strict";
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 3824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    marks: [],
    accounts: [],
    faceUrl: [
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    ],
    neuralUrl: [
        "https://images.pexels.com/photos/8276230/pexels-photo-8276230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    ],
    faceDesc: [
        {
            faces: [
                {
                    age_range: [
                        0,
                        100
                    ],
                    cultural_appearance: "Cool"
                }
            ]
        }
    ],
    neuralDesc: [
        {
            output: "Business boy."
        }
    ]
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "newMark":
            initialState.marks.push(action.payload);
            return initialState;
        case "accounts":
            initialState.accounts.push(action.payload);
            return initialState;
        case "faceUrl":
            console.log("STORE  " + action.payload);
            initialState.faceUrl.push(action.payload);
            return initialState;
        case "faceDesc":
            initialState.faceDesc.push(action.payload);
            return initialState;
        case "neuralUrl":
            initialState.neuralUrl.push(action.payload);
            return initialState;
        case "neuralDesc":
            initialState.neuralDesc.push(action.payload);
            return initialState;
        default:
            return state;
    }
};
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ })

};
;