var amqp = require("amqplib/callback_api");
const axios = require("axios");
var response = require("./response");

const queue = "cache-manager-response";

amqp.connect("amqp://admin:admin@172.17.0.1:5672/%2fvdev",
  function (err, conn) {
    conn.createChannel(function (err, ch) {
      ch.assertQueue(queue, { durable: true });
      ch.prefetch(1);
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      ch.consume(
        queue,
        function (msg) {
          console.log(" [x] Received %s", msg.content.toString());

          axios.get(JSON.parse(msg.content.toString())['url'])
            .then(function (response) {
              console.log(response.data)
            }).catch(err => console.log(err));

        },
        { noAck: true }
      );
    });
  }
);
