const JSONStream = require("JSONStream");
const express = require("express");
const axios = require("axios");
const fs = require("fs");
const { faker } = require("@faker-js/faker");

const router = express.Router();

const urlResponse = process.env.JSON_SERVER_URL + "/data";

const message = {
  sender: process.env.APP_NAME,
  service: "cache-manager-res-sync",
  receivers: [],
  content: {
    url: urlResponse,
    method: "GET",
  },
};

/**
 * @description - Esta função é responsável por receber a solicitação do Cache Manager
 * e enviar o endpoint de consulta dos dados para o service solicitante.
 */
router.post("/cache-data-url", (req, res) => {
  const webhook = req.body;
  console.log("Dados do webhook:", webhook);

  axios
    .post("http://localhost:5000/api/message", message)
    .then(function (response) {
      console.log(response.data);
    })
    .catch((err) => console.log(err));

  res.status(200).send("Success");
});

router.get("/cache-data-url", async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Transfer-Encoding": "chunked",
  });
  
  var chunks = 100;
  for (let index = 0; index <= chunks; index++) {
    const data = await generator();
    console.log("data", data);
    res.write(data);
  }

  res.end();
});

async function generator() {
  const data =
    JSON.stringify({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }) + "\n";

  return new Promise((resolve) => setTimeout(() => resolve(data), 100));
}

module.exports = router;
