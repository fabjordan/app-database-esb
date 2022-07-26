const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

app.use("/webhooks", require("./routes/webhooksRoute"));
app.use("/cache-manager", require("./routes/cacheManagerRoute"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
