const axios = require("axios");
const express = require("express");
const router = express.Router();

const config = {
  headers: { Authorization: "Bearer 2e203314d5e4e6ba1b03f58237b69938639aafea" },
};

const message = {
  sender: "app-database",
  service: "cache-manager-response",
  receivers: [],
  content: {
    url: "http://localhost:3333/users",
    method: "GET",
  },
};

/**
 * @description - Esta função é responsável por receber a solicitação do Cache Manager
 * e enviar o endpoint de consulta dos dados para o service solicitante.
 */
router.post("/esb", (req, res) => {
  const webhook = req.body;
  console.log("Dados do webhook:", webhook);

  axios
    .post("http://localhost:5000/api/message", message, { config })
    .then(function (response) {
      console.log(response.data);
    })
    .catch((err) => console.log(err));

  res.status(200).send("Success");
});

module.exports = router;
