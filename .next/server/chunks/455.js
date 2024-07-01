"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 455:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


(__webpack_require__(5142).config)();
const nodemailer = __webpack_require__(5184);
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        ciphers: "SSLv3"
    }
});
const sendEmail = async (mailData)=>{
    try {
        const info = await transporter.sendMail(mailData);
        console.log("Email sent:", info);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
const MailService = {
    sendMail: (data)=>{
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: data.to,
            subject: data.subject,
            html: data.html
        };
        return sendEmail(mailOptions);
    }
};
module.exports = MailService;


/***/ })

};
;