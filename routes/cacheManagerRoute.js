const axios = require("axios");
const express = require("express");
const router = express.Router();

const config = {
  headers: { Authorization: "Bearer 2e203314d5e4e6ba1b03f58237b69938639aafea" },
};

const requestCache = {
  sender: "cache-manager",
  service: "cache-manager-sync",
  receivers: ["cache-manager-queue-1"],
  content: {
    request: "users",
  },
};

/**
 * @description - Esta função simula uma solicitação de dados do Cache Manager.
 */
router.post("/request-cache", (req, res) => {
  const webhook = req.body;
  console.log("Dados da requisição:", webhook);

  axios
    .post("http://localhost:5000/api/message", requestCache, { config })
    .then(function (response) {
      console.log(response.data);
    })
    .catch((err) => console.log(err));

  res.status(200).send("Success");
});

/**
 * @description - Esta função simula a recuperação de dados do Cache Manager.
 */
router.post("/get-cache", (req, res) => {
  const webhook = req.body;
  console.log("Dados recebidos:", webhook);

  axios
    .get(webhook["url"])
    .then(function (response) {
      console.log(response.data);
    })
    .catch((err) => console.log(err));

  res.status(200).send("Success");
});

module.exports = router;
