require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const server = require('./server');
const cors = require("cors");
const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

app.use("/webhooks", require("./routes/webhooksRoute"));

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} is running at http://localhost:${port}`);
});
