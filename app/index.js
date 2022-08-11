const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
require('dotenv').config();

const init = require('./init');
const WebhooksRouter = require('./routes/WebhooksRoute');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

// Create a receiver when start project
init.createReceiver();

// Routes
app.use("/webhooks", WebhooksRouter);

// Run server
app.listen(process.env.APP_PORT, () => {
  console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.APP_PORT}`);
});