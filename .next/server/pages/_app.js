(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader"), loadingText = document.querySelector(".loading-text");
    const addDoneClass = ()=>{
        preloader.classList.add("isdone");
        loadingText.classList.add("isdone");
    };
    Pace.on("start", function() {
        preloader.classList.remove("isdone");
        loadingText.classList.remove("isdone");
    });
    Pace.on("done", function() {
        addDoneClass();
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        addDoneClass();
    }
    document.addEventListener("load", ()=>{
        addDoneClass();
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/loading-screen.jsx





const LoadingScreen = ()=>{
    external_react_default().useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (app/* showLoading */.QP) {
            common_loadingPace();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${app/* showLoading */.QP === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "preloader",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "loading-text",
                        children: "Mission San Jose Mortgage"
                    })
                })
            }),
            app/* showLoading */.QP ? /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/assets/js/pace.min.js"
            }) : ""
        ]
    });
};
/* harmony default export */ const loading_screen = (LoadingScreen);

;// CONCATENATED MODULE: ./src/common/mouseEffect.js
const mouseEffect = ()=>{
    function mousecursor() {
        const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
        let n, i = 0, o = !1;
        window.onmousemove = function(s) {
            o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
        };
        if (document.querySelector(".cursor-pointer")) {
            document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
            document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
        }
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
        });
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            });
        }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }
    mousecursor();
};
/* harmony default export */ const common_mouseEffect = (mouseEffect);

;// CONCATENATED MODULE: ./src/components/Cursor/index.jsx



const Cursor = ()=>{
    external_react_default().useEffect(()=>{
        common_mouseEffect();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    });
};
/* harmony default export */ const components_Cursor = (Cursor);

;// CONCATENATED MODULE: ./src/common/scrollToTop.js
const scrollToTop = ()=>{
    let offset = 150;
    let progressWrap = document.querySelector(".progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    const updateProgress = ()=>{
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    if (progressWrap) {
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        updateProgress();
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                document.querySelector(".progress-wrap").classList.remove("active-progress");
            }
        });
        progressWrap.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return false;
        });
    }
};
/* harmony default export */ const common_scrollToTop = (scrollToTop);

;// CONCATENATED MODULE: ./src/components/scrollToTop/index.jsx



const ScrollToTop = ()=>{
    external_react_default().useEffect(()=>{
        common_scrollToTop();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: ""
            })
        })
    });
};
/* harmony default export */ const components_scrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./src/pages/_app.js








function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Mission San Jose Mortgage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cursor, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(loading_screen, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_scrollToTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wow",
                src: "/assets/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "splitting",
                strategy: "beforeInteractive",
                src: "/assets/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/assets/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "isotope",
                src: "/assets/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/assets/js/main.js",
                id: "init",
                strategy: "lazyOnload"
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2806:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"E8":"/assets/img/msj_logo2.png","Q1":"/assets/img/msj_logo_sm.jpg","xU":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.56863290859!2d-121.33473272373516!3d37.987195099894734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80900c3570dde419%3A0xbf299620fabd9454!2s2111%20W%20March%20Ln%20%23%20B200%2C%20Stockton%2C%20CA%2095207%2C%20USA!5e0!3m2!1sen!2s!4v1703723635275!5m2!1sen!2s","QP":true}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699], () => (__webpack_exec__(2021)));
module.exports = __webpack_exports__;

})();