"use strict";
(() => {
var exports = {};
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 2938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(455);
/* harmony import */ var _lib_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_mail__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5142);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
// pages/api/complaints.js


dotenv__WEBPACK_IMPORTED_MODULE_1___default().config();
async function handler(req, res) {
    if (req.method === "POST") {
        const { name , email , phone , complaints  } = req.body;
        // Check if required fields are provided
        if (!name || !email || !phone || !complaints) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields."
            });
        }
        try {
            await _lib_mail__WEBPACK_IMPORTED_MODULE_0___default().sendMail({
                to: "arslansamijat@gmail.com",
                subject: "New Complaint",
                html: `
          <div style="background-color: #ffcc33; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
            <center>
              <h2 style="color: #333; margin-bottom: 20px;">New Complaint</h2>
            </center>  
            <div>
              <h3 style="color: #333;"><u>Name:</u> ${name}</h3>
              <h3 style="color: #333;"><u>Email:</u> ${email}</h3>
              <h3 style="color: #333;"><u>Phone:</u> ${phone}</h3>
              <h3 style="color: #333;"><u>Complaints:</u> ${complaints}</h3>
            </div>
          </div>
        `
            });
            res.status(200).json({
                success: true,
                message: "Complaint sent successfully."
            });
        } catch (error) {
            console.error("Error processing request:", error);
            res.status(500).json({
                success: false,
                message: "Error sending email."
            });
        }
    } else {
        res.status(405).json({
            success: false,
            message: "Method not allowed."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [455], () => (__webpack_exec__(2938)));
module.exports = __webpack_exports__;

})();