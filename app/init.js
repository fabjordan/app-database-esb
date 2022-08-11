const axios = require('axios');

const createReceiver = _ => {
  axios
    .post(`${process.env.ESB_URL}/api/receiver`, {
      name: 'cache-manager-pocdb',
      services: [{
        deliveryType: 'sendDirect',
        name: 'cache-manager-req-sync',
        callbackURL: `${process.env.APP_URL}/webhooks/send-data`,
        hmacEnvKey: 'HMAC_POC_DB',
        sendOnlyContent: false,
        attemptInterval: 5,
      }],
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  createReceiver
}