const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();



// Configure CORS
const corsOptions = {
    origin: 'http://95.163.223.96',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Nodemailer setup
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

// Endpoint to send email
app.post("/api/sendEmail", (req, res) => {
    const { userEmail, userName, userPhone, message, emailType } = req.body;
    console.log("Received data:", req.body); // Log entire body
    console.log("Parsed data:", { userEmail, userName, userPhone, message, emailType }); // Log parsed data


    const mailOptions = {
        from: process.env.EMAIL,
        to: '338226eu46@gmail.com',
        subject: `${emailType} - New message`,
        text: `User email: ${userEmail}, User phone: ${userPhone}, User name: ${userName}, Message: ${message}`,
    };

    contactEmail.sendMail(mailOptions, (error) => {
        if (error) {
            console.log("Error sending email:", error); // Log any errors
            res.json(error);
        } else {
            console.log("Email sent successfully!");
            res.json({ code: 200, status: "Message Sent!" });
        }
    });
});

// Serve static files
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
