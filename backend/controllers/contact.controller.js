import Contact from "../models/contact.model.js";
import emailTemplate from "../utils/email-template.js";
import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER } from "../config/env.js";

const contactController = async(req, res) => {
    
    try {
        const info = req.body
        const newContact = new Contact({...info})

        await newContact.save();

        // NODE MAILER TRANSPORTER
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        });

        // EMAIL CONTENT;
        const mailOptions = {
            from: EMAIL_USER,
            to: info.email,
            subject: "Thank You For Contacting Me!",
            html: emailTemplate(info.name, info.sessionDate),
        };

        await transporter.sendMail(mailOptions)
        res.status(200).json({success: true, message: "Please check your email for confirmation"});
        
    } catch (error) {
         res.status(400).json({success: false, message: "error to send info"})
        console.log("contact error : ", error.message )
    }
}

export default contactController;