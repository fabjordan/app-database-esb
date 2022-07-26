var amqp = require("amqplib/callback_api");

const queue = "cache-manager-response";
const message = '{"url":"http://localhost:3333/users","method":"GET"}';

function sendResponse() {
  amqp.connect("amqp://admin:admin@172.17.0.1:5672/%2fvdev",
    function (err, conn) {
      conn.createChannel(function (err, ch) {
        ch.assertQueue(queue, { durable: true });
        ch.sendToQueue(queue, new Buffer.from(message));
        console.log(" [x] Sent %s", message);
      });
      // setTimeout(function () {
      //   conn.close();
      //   process.exit(0);
      // }, 500);
    }
  );
}

module.exports = {
  sendResponse: sendResponse,
};
