import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// ---- Multer storage ----
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, unique + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ---- POST /api/apply ----
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;

    // Create Zoho Transport
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_APP_PASSWORD,// app password from Zoho
      },
    });

    const mailOptions = {
      from: "hr@ajinfoteck.com",
      to: "hr@ajinfoteck.com",
      subject: `New Job Application for ${role}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Role: ${role}
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              path: req.file.path
            }
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email Sent!" });

  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;