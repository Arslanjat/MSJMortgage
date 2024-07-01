// pages/api/complaints.js

import MailService from "../../../lib/mail";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, complaints } = req.body;

    // Check if required fields are provided
    if (!name || !email || !phone || !complaints) {
      return res.status(400).json({ success: false, message: "Please provide all required fields." });
    }

    try {
      await MailService.sendMail({
        to: "arslansamijat@gmail.com", // replace with the actual recipient email
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
        `,
      });

      res.status(200).json({ success: true, message: "Complaint sent successfully." });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
