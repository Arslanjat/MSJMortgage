require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports (587)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const sendEmail = async (mailData) => {
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
  sendMail: (data) => {
    const mailOptions = {
      from: process.env.SMTP_USER, // sender address from .env
      to: data.to, // receiver address
      subject: data.subject, // subject line
      html: data.html, // html body
    };

    return sendEmail(mailOptions);
  },
};

module.exports = MailService;
