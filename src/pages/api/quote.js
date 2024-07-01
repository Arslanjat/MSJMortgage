import MailService from "../../../lib/mail";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, productName } = req.body; // Include productName here

    // Check if required fields are provided
    if (!name || !email || !phone || !productName) {
      return res.status(400).json({ success: false, message: "Please provide all required fields." });
    }

    try {
      await MailService.sendMail({
        to: "arslansamijat@gmail.com", // replace with the actual recipient email
        subject: "New Quote Form Submission",
        html: `
          <div style="background-color: #ffcc33; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
            <center>
              <h2 style="color: #333; margin-bottom: 20px;">New Quote Apply</h2>
            </center>  
            <div>
              <h3 style="color: #333;"><u>Product Name:</u> ${productName}</h3>
              <h3 style="color: #333;"><u>First Name:</u> ${name}</h3>
              <h3 style="color: #333;"><u>Email:</u> ${email}</h3>
              <h3 style="color: #333;"><u>phone:</u> ${phone}</h3>
            </div>
          </div>
        `,
      });

      res.status(200).json({ success: true, message: "" });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
