"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 3236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/text/generateContainer.js



const styleInput = {
    borderRadius: "10px",
    margin: "1%"
};
function generateContainer() {
    const [value, setValue] = external_react_default().useState("You sould complete the input first");
    const changeValue = ()=>{
        const newValue = document.getElementById("inputText").value;
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        action: "/text/" + value,
        method: "GET",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                className: "text-center",
                onChange: changeValue,
                placeholder: "Your sentence",
                id: "inputText",
                style: styleInput
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                type: "submit",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn mx-auto magicButton cuadrado",
                    children: "  GENERATE  "
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/text/text.js




const styleDiv = {
    padding: "5%",
    backgroundColor: "#333",
    minHeight: "100vh"
};
const containerStyle = {
    padding: "5%"
};
const styleButton = {
    margin: "2%"
};
function Text(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-12 mx-auto text-center",
        style: styleDiv,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-8 cardStyle2 mx-auto",
            style: containerStyle,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "display-4",
                    children: " Text Generator "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "lead",
                    children: " GPT-2 implementation  "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "lead",
                    children: " Write something and let the AI generate! "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(generateContainer, {}),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-8 mx-auto",
                    style: {
                        textAlign: "left"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            className: "display-6",
                            children: [
                                " ",
                                props.text[1],
                                "  "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            id: "aiText",
                            children: props.text[0].output
                        })
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


/***/ })

};
;