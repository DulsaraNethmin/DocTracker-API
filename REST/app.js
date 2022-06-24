require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

const {sequelize} = require('./models');
var corsOptions = {
  origin: "http://localhost:8080",
    credentials: true,
    optionSuccessStatus: 200

};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to DocTracker Api");
});

app.post("/send_mail", cors(), async (req, res) => {
	let { text } = req.body
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: process.env.MAIL_FROM,
		to: "test@test.com",
		subject: "test email",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Darwin</p>
         </div>
    `
	})
})


const PORT = process.env.PORT || 8080;
app.listen(8080,async() => {
  console.log(`Server is running on port ${PORT}.`);
  await sequelize.authenticate();
  console.log("DB connencted");
});