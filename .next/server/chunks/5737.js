"use strict";
exports.id = 5737;
exports.ids = [5737];
exports.modules = {

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    let swiperPagination = document.querySelector(".swiper-pagination");
    if (swiperPagination) {
        swiperPagination.innerHTML = swiperPagination.innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 6429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3614);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_6__.Parallax
]);
const IntroWithHorizontal = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        });
        setTimeout(()=>{
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "slider",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 1000,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-img valign",
                                "data-overlay-dark": "6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        className: "video-background",
                                        style: {
                                            position: "absolute",
                                            zIndex: -1
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                src: slide.video,
                                                type: "video/mp4"
                                            }),
                                            "Your browser does not support the video tag."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-8 col-md-10",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "caption hmone mt-0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            "data-splitting": true,
                                                            className: "words chars splitting",
                                                            children: slide.title.second
                                                        }),
                                                        slide?.content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "mt-10",
                                                            children: [
                                                                slide.content.first,
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            href: "/about",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "btn-curve btn-bord btn-lit mt-30",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }, slide.id))
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top playfont"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithHorizontal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Reviews)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/data/reviews.json
const reviews_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/msj-reviews/Kevin.png","content":"I’ve been working with San Jose mortgage for about 2 months now I had issues with my license on my end and instead of just leaving me out there to deal with it my self and San Jose mortgage worked with me a HUGE shout thanks to Cinthya Vega she is amazing! she followed up with me every step of the way and helped me so much when I was lost.","username":"Kevin Martinez"},{"id":2,"image":"/assets/img/msj-reviews/Lexie.png","content":"I’m a new lo and I had a decent delay with my license approval. It was pretty discouraging but Cinthya checked up on me and with her relatable and professional responses, it kept me super excited and She was amazing and stayed consistent with me, keeping the same energy level which helped me out so much during the process. I couldn’t be more grateful to her!","username":"Lexie "},{"id":3,"image":"/assets/img/msj-reviews/Siddhartha.png","content":"Omar helped me get loan to buy my first home. He is professional, sincere in his work, and overall a friendly person. I liked the fact that he was quick to respond to emails and text messages. He helped me throughout the house hunt process, discussions on home buying and it\'s various facets in one\'s life. Overall, I am happy to strongly recommend Omar.","username":"Siddartha Chattopadhyay"},{"id":4,"image":"/assets/img/msj-reviews/Ramyakanth.png","content":"I have worked with Omar for 4 times so far on multiple properties.  Omar is very knowledgeable on the home mortgage and very straight forward in his approach.  Omar goes extra mile to make sure all the process is in place and loan is processed successfully.  Omar is personally very straight forward, honest.  I strongly recommend Omar to use his service for Home Mortgage.!","username":"Ramyakanth Edupuganti"},{"id":5,"image":"/assets/img/msj-reviews/Carlos.png","content":"This company offers a wide variety of products for homeownership, as well as amazing customer support. Cinthya was very instrumental in helping me get my license approved. A lot of communication and follow up that were needed to get things done. Thank you!","username":"Carlos Guevara"},{"id":6,"image":"/assets/img/msj-reviews/Steven.png","content":"I’m a new lo and I had a decent delay with my license approval. It was pretty discouraging but Cinthya checked up on me and with her relatable and professional responses, it kept me super excited and motivated! She was amazing and keeping the same energy level which helped me out so much during the process. I couldn’t be more grateful to her.!","username":"Steven "},{"id":7,"image":"/assets/img/msj-reviews/Derek.png","content":"I’m a current employee of Mission San Jose Mortgage and have been with the company for about 4 months now. Mission San Jose Mortgage will always have a special place in my heart bc they were the first company to give me a shot. They help me prepare for my NMLS exam and we passed it on the first shot!","username":"Derek Mass"},{"id":8,"image":"/assets/img/msj-reviews/Sarai.png","content":"Cinthya, the concierge at Mission San Jose Mortgage was extremely helpful in getting my MLO License sponsored. She was patient with me and made time to answer whatever question I had in regard to the process. If you need anything she will make an effort to help you out or find someone who can. I would recommend her 100%.","username":"Sarai Rivera"},{"id":9,"image":"/assets/img/msj-reviews/Hope.png","content":"Thank you so very much for all of your help in securing my loan for my new home here in Stockton . You guys were organized & friendly & professional, as well as kind which made all of the difference in my interactions with you and your team. Thank you for your patience as well as treating me as a person rather than just a home loan customer.  Thank you for making my dream come true of providing a home for my family.","username":"Hope Lopez"},{"id":10,"image":"/assets/img/msj-reviews/Farnaz.png","content":"My experience with Mission Mortgage was about the most professional, efficient and pleasant events. this loan process with Mission Mortgage was one of the most honest, efficient and pleasant buying experience I\'ve had in my life and trust me I\'ve had the opportunity and time to have had many buying experiences both with homes .I personally think anyone who chooses Mission Mortgage as their mortgage company would have made an astute business decision.","username":"Farnaz Torania"},{"id":11,"image":"/assets/img/msj-reviews/Sarfaraz.png","content":"Highly recommend Mission San Jose Mortgage. Omar has been a trusted resource for me every time I\'ve made a home buying or refinance decision. Very knowledgable about the industry and the service has been great.","username":"Sarfaraz Rydhan"},{"id":12,"image":"/assets/img/msj-reviews/Imran.png","content":"My experience with Mission San Jose Mortgage was what I was looking for, straight to the point, fast, and very helpful. I recommend them to anyone who looking to get their first Home. Thank you for making it easy for me.","username":"Mohammad Imran"},{"id":13,"image":"/assets/img/msj-reviews/Michael.png","content":"Came to Mission San Jose Mortgage after my clients deal fell through with another lender. Bon was very professional and helped guide my buyer\'s through the process. Deal closed today, and my buyer\'s have their dream home. Thanks Bon for all your hard work. Michael RE agent.","username":"Michael Falls"},{"id":14,"image":"/assets/img/msj-reviews/Jayden.png","content":"What a wonderful team MSJ is the place to go if you need to refinance or purchase a home. Omar has so much knowledge and is great to work with, he will close your loans. Thanks for everything Omar hope to work with you sooner than later. A + +","username":"Jayden Bella"},{"id":15,"image":"/assets/img/msj-reviews/Angel.png","content":"Philip was a huge help. The underwriting has gotten a lot stricter in recent years and Philip was very professional thorough and stuck with me until closing. I recommend Philip Kilmer at Mission San Jose Mortgage.","username":"Angel Moralez"},{"id":16,"image":"/assets/img/msj-reviews/Joth.png","content":"Ramanjeet was very helpful in the refinance process. She guided us and even came to get the paperwork. She went above and beyond to get us the best rate. I would definitely refer her to friends and family.","username":"Joth Jeerh"},{"id":17,"image":"/assets/img/msj-reviews/Salvador.png","content":"Bon Sun, did an excellent job during the loan process and always kept the buyers and agents informed, very professional lending team! I highly recommend Mission San Jose mortgage of Stockton.","username":"Salvador Martinez"},{"id":18,"image":"/assets/img/msj-reviews/Anthony.png","content":"I have used Mission San Jose Mortgage for my home and investment properties, specifically Omar Khamisa. Very knowledgeable team, great customer service, I highly recommend Mission San Jose Mortgage.","username":"Anthony Wofford"},{"id":19,"image":"/assets/img/msj-reviews/Kim.png","content":"Being able to have Philip Kilmer help me get my first home was an amazing experience. He made everything so easy to understand. He also went above and beyond to help me save.  Would 100% highly recommend his service!!","username":"Kim Chhim"},{"id":20,"image":"/assets/img/msj-reviews/Ron.png","content":"Omar and his wonderful staff, Bon And Huiyan were very professional.  They were all very helpful and knowledgeable,  making the whole refi a wonderful experience for us.  I would certainly recommend them to anyone looking to refinance or buy a home!","username":"Ron H"},{"id":21,"image":"/assets/img/msj-reviews/Sally.png","content":"Mission San Jose mortgage can handle anything in the last minute. Omar and staff Deliver excellent and provide an extra mile service. I highly recommend, and Sally Dauz BHHS DRYSDALE .","username":"Sally Dauz"},{"id":22,"image":"/assets/img/msj-reviews/Tony.png","content":"Overall a great place to work.  Cinthya has been a tremendous help with licensing. Training and support has been awesome.  We are all eager to go the extra mile. Its a pleasure to work with such a dedicated group.","username":"Tony Conner"},{"id":23,"image":"/assets/img/msj-reviews/Jagit.png","content":"raelene mellinger, did an excellent job during the process of paperwork. she is very professional and knowledgeable. she deserves a big raise for all her hardwork. it was the best experience that i have ever had. thank you making this easy for me.","username":"Jagit Singh (JAG)"},{"id":24,"image":"/assets/img/msj-reviews/Jasminder.png","content":"I work with Ramanjeet Kaur in refiance my house. she worked hard in order to get my loan approved. she td me every detail and help me to understand the loan process. I\'m thankful to Mission San Jose Mortgage for wonderful services","username":"Jasminder Chima"},{"id":25,"image":"/assets/img/msj-reviews/Broker.png","content":"Awesome group of Professionals! They go above and beyond for the client! I have worked with many Lenders over the years and Mission mortgage is at the Top of my list!","username":"Broker Associate Christina"},{"id":26,"image":"/assets/img/msj-reviews/Elizabeth.png","content":"We can\'t think Omar and his team enough for the dedicated long and hard work on what had to been the most confusing, delicate.  Omar\'s above and beyond work has been exceptional.","username":"Elizabeth Baker"},{"id":27,"image":"/assets/img/msj-reviews/Zulfiqar.png","content":"Qaiser ullah help to go get pre approved loan for the house in Stockton He done hard and great job for me He is the greatest loan officer if anyone have any question about loan or too get the loan I will recommend Qaiser ullah to everyone He got me the best interest rate compare then others. Thank you Qaiser Bahi I really appreciate that","username":"Zulfiqar Ahmed"},{"id":28,"image":"/assets/img/msj-reviews/Cinema.png","content":"I have worked with San Jose Mortage on 2 occasions and both times things went flawlessly thanks to Qaiser. I always got the best rate on the market and Qaiser was always available whenever I had any concerns. I would highly recommend MMS and ask for Qaiser for any of your loan needs. He will take care of you.","username":"Z Cinema"},{"id":29,"image":"/assets/img/msj-reviews/Richard.png","content":"Raelene Mellinger went above and beyond our expectations during our home purchase process. Answered every question we had promptly and professionally. I recommend her to anyone!!!","username":"Richard Gutierrez"},{"id":30,"image":"/assets/img/msj-reviews/Danny.png","content":"Huiyan was the Biggest Help Ever. She Deserves a Serious Raise for All Her Hard Work and Total Kindness. It was a Please working with Huiyan. Omar, You need to give Huiyan a Big, Big, Big Raise! Thank You Kindly :) .!","username":"Danny Martinez"},{"id":31,"image":"/assets/img/msj-reviews/Danny.png","content":"Cynthia is amazing she was with me every step of the way in my licensing process thank you Cynthia.!","username":"Danny Martinez"},{"id":32,"image":"/assets/img/msj-reviews/Jayveon.png","content":"5/5 Stars. Special thank you to Omar Khamisa and Cinthya Vega for going above and beyond to help me get licensed.!","username":"Jayvoun Chark"},{"id":33,"image":"/assets/img/msj-reviews/Shushu.png","content":"omar khamis  helped me to refinance my home he the best  mortgage broker any one looking  for broker don\'t go anywhere omer is the right man. Thank you very much omar  khamisa","username":"Shusha Dua"},{"id":34,"image":"/assets/img/msj-reviews/Tomas.png","content":"It has been a great experience buying my house with this group of professionals. They make the process easier. We closed way before expecting time thank you  mission San Jose mortgage","username":"Tomas Luna"}]');
;// CONCATENATED MODULE: ./src/components/Reviews/index.jsx
/* eslint-disable @next/next/no-img-element */ 





class Reviews extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return !this.props.bigTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navs mt-30",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "prev",
                    onClick: ()=>this.slider.slickPrev(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-long-arrow-alt-left"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "next",
                    onClick: ()=>this.slider.slickNext(),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-long-arrow-alt-right"
                    })
                })
            ]
        });
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: `testimonials grid section-padding ${this.props.withBg ? "bg-img parallaxie" : ""}`,
                style: {
                    backgroundImage: this.props.withBg ? `url(/assets/img/001.jpg)` : "none"
                },
                "data-overlay-dark": this.props.withBg ? 9 : null,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "",
                    children: [
                        !this.props.bigTitle && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "section-head text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-8 col-sm-10",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "playfont wow flipInX mt-10",
                                        "data-wow-delay": ".3s",
                                        children: "What People Says?"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                        className: "testim",
                                        ref: (c)=>this.slider = c,
                                        dots: false,
                                        arrows: true,
                                        autoplay: true,
                                        rows: 1,
                                        slidesToScroll: 2,
                                        slidesToShow: 2,
                                        responsive: [
                                            {
                                                breakpoint: 1024,
                                                settings: {
                                                    slidesToShow: 2
                                                }
                                            },
                                            {
                                                breakpoint: 767,
                                                settings: {
                                                    slidesToShow: 2
                                                }
                                            },
                                            {
                                                breakpoint: 480,
                                                settings: {
                                                    slidesToShow: 1
                                                }
                                            }, 
                                        ],
                                        children: reviews_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item wow fadeInUp",
                                                "data-wow-delay": ".3s",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "quote-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/img/clients/quote.svg",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "cont",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "",
                                                            children: [
                                                                '"',
                                                                item.content,
                                                                '"'
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "author",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: item.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: item.username
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, item.id))
                                    }),
                                    this.renderArrows()
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const components_Reviews = (Reviews);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ React.createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return /*#__PURE__*/ _jsx("div", {
            ref: this.target,
            children: this.props.children
        });
    }
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Split)));


/***/ }),

/***/ 8633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





class Team1 extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            loadedImages: 0
        };
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("https://1smtg.com:220/getAllUsers/msjmortgage.com/mlo/0").then((response)=>{
            this.setState({
                users: response.data
            });
        }).catch((error)=>{
            console.error("Error fetching users:", error);
        });
    };
    handleImageLoad = ()=>{
        this.setState((prevState)=>({
                loadedImages: prevState.loadedImages + 1
            }));
    };
    render() {
        const { users , loadedImages  } = this.state;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "team section-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tit",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "playfont wow flipInX",
                                            "data-wow-delay": ".5s",
                                            children: "Our Team"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: "Dream enablers, our mortgage officers turn keys into dreams. Navigating mortgages with expertise, we unlock your path to homeownership."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "navs mt-20 wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "prev",
                                                    onClick: ()=>this.slider.slickPrev(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-long-arrow-alt-left"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "next",
                                                    onClick: ()=>this.slider.slickNext(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-long-arrow-alt-right"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/team",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "btncru mt-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Our Team"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "team-container",
                                    ref: (c)=>this.slider = c,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    arrows: true,
                                    dots: false,
                                    autoplay: true,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 3
                                            }
                                        },
                                        {
                                            breakpoint: 767,
                                            settings: {
                                                slidesToShow: 2
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 1
                                            }
                                        }, 
                                    ],
                                    children: users.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: `/profile/${encodeURIComponent(user.id)}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "img wow imago",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "home-team",
                                                                    src: `https://1smtg.com/picture.php?name=${user.picture}`,
                                                                    alt: "member",
                                                                    onLoad: this.handleImageLoad
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "social",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: user.facebook,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fab fa-facebook-f"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: user.twitter,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fab fa-twitter"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: user.instagram,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fab fa-instagram"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    children: user.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: user.title
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        "NMLS#: ",
                                                                        user.nmls_id
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, user.id))
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "dots-half bg-img bg-repeat",
                    style: {
                        backgroundImage: "url(/assets/img/dots.png)"
                    }
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(678);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1690);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2806);
/* eslint-disable @next/next/no-css-tags */ 





const LightLayout = ({ children , footerClass  })=>{
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                logo.setAttribute("src", _data_app_json__WEBPACK_IMPORTED_MODULE_5__/* .darkLogo */ .Q1);
            } else {
                navbar.classList.remove("nav-scroll");
                logo.setAttribute("src", _data_app_json__WEBPACK_IMPORTED_MODULE_5__/* .lightLogo */ .E8);
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style-light.css"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                navbarRef: navbarRef,
                logoRef: logoRef
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                classText: footerClass
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightLayout);


/***/ }),

/***/ 3304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1643);
/* harmony import */ var _components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _layouts_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6172);
/* harmony import */ var _components_Team1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8633);
/* harmony import */ var _components_Reviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__, _components_Team1__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__, _components_Team1__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-img-element */ 






const Home1 = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        document.querySelector("body").classList.add("homepage");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_light__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        footerClass: "mt-30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team1__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Reviews__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"second":"Mission San Jose Mortgage"},"content":{"first":"We are Licensed In Arizona, California, Colorado, Florida, Georgia, Idaho, Montana, New Mexico, Oregon, Texas, Washington, Ohio and Wyoming."},"video":"/assets/img/slid/msj_video.mp4"}]');

/***/ })

};
;