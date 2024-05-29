const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();


const corsOptions = {
    origin: 'http://95.163.223.96',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

app.post("/api/sendEmail", (req, res) => {
    const { userName, userEmail, userPhone, message, emailType } = req.body;
    const mailOptions = {
        from: process.env.email,
        to: '338226eu46@gmail.com',
        subject: `${emailType} - New message`,
        text: `User email: ${userEmail}, User phone: ${userPhone}, User name: ${userName}, Message: ${message}`,
    };
    contactEmail.sendMail(mailOptions, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent!" });
        }
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
