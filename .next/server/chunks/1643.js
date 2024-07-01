"use strict";
exports.id = 1643;
exports.ids = [1643];
exports.modules = {

/***/ 1643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/services1.json
const services1_namespaceObject = JSON.parse('{"u":[{"id":"01","title":"Conventional Loan","content":"Standard mortgage, not government-backed. Follows Fannie Mae and Freddie Mac guidelines.","link":"/conventional"},{"id":"02","title":"Government Loan","content":"Backed by government agencies like FHA or VA. Easier qualification, lower down payments.","link":"/government"},{"id":"03","title":"Portfolio","content":"Customized financing, not sold on the market. Tailored terms for unique situations.","link":"/portfolio"},{"id":"04","title":"Private Money","content":"Funding from private investors or individuals. Quick approval, flexible terms.","link":"/private-money"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Services1/index.jsx




const Services1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services section-padding bg-gray",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "playfont wow flipInX",
                                "data-wow-delay": ".5s",
                                children: "Our Product"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row bord-box bg-img wow fadeInUp",
                    "data-wow-delay": ".3s",
                    style: {
                        backgroundImage: `url(${services1_namespaceObject.image}`
                    },
                    children: services1_namespaceObject.u.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: item.link,
                            className: " col-lg-3 col-md-6 item-bx",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-20",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: item.content
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "more mt-20",
                                        children: "Read More"
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
};
/* harmony default export */ const components_Services1 = (Services1);


/***/ })

};
;