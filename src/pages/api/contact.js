import MailService from "../../../lib/mail";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      fname,
      lname,
      email,
      address,
      state,
      zipcode,
      nmls,
      branch,
      number,
      message,
      experince,
      stateOfBuss,
    } = req.body;

    try {
      await MailService.sendMail({
        to: "arslansamijat@gmail.com", // replace with the actual recipient email
        subject: "New MLO Form Submission",
        html: `
          <div style="background-color: #ffcc33; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
            <center>
              <h1 style="color: #333; margin-bottom: 20px;">New MLO Request</h1>
            </center>  
            <div>
              <h2 style="color: #333;"><u>First Name:</u> ${fname}</h2>
              <h2 style="color: #333;"><u>Last Name:</u> ${lname}</h2>
              <h3 style="color: #333;"><u>Email:</u> ${email}</h3>
              <h3 style="color: #333;"><u>Street:</u> ${address}</h3>
              <h3 style="color: #333;"><u>State:</u> ${state}</h3>
              <h3 style="color: #333;"><u>Zipcode:</u> ${zipcode}</h3>
              <h3 style="color: #333;"><u>NMLS Number:</u> ${nmls}</h3>
              <h3 style="color: #333;"><u>Branch:</u> ${branch}</h3>
              <h3 style="color: #333;"><u>Number:</u> ${number}</h3>
              <h3 style="color: #333;"><u>Experience:</u> ${experince}</h3>
              <h3 style="color: #333;"><u>State to Conduct Business:</u> ${stateOfBuss}</h3>
              <h3 style="color: #333;"><u>Message:</u> ${message}</h3>
            </div>
          </div>
        `,
      });

      res.status(200).json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ success: false, message: "Error sending email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
