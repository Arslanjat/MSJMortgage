require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Namecheap SMTP host
  port: process.env.SMTP_PORT, // Namecheap SMTP port
  secure: false, // true for 465, false for other ports (587)
  auth: {
    user: "arslansamijat@gmail.com", // your Namecheap email
    pass: "'rdfq bdwe igvm ufew", // your Namecheap email password
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
      from: "arslansamijat@gmail.com", // sender address
      to: "arslansamijat@gmail.com", // receiver address
      subject: data.subject, // subject line
      html: data.html, // html body
    };

    return sendEmail(mailOptions);
  },
};

module.exports = MailService;
