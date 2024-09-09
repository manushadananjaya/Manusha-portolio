// pages/api/sendmail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message }: EmailRequestBody = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail email address
          pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
        },
      });

      await transporter.sendMail({
        from: email, // Sender's email
        to: process.env.RECIPIENT_EMAIL, // Recipient's email
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br />${message}</p>`,
      });

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error("Email error:", error); 
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
