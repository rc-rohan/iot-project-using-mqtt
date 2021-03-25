
const client = require("mqtt").connect("mqtt://broker.hivemq.com");

var state = "closed";
const name = "RAJ";
client.on("connect", () => {
  client.subscribe("SIT/b1");
  client.publish("garage/connected", name);
  console.log("Connected ....");
});
client.on("message", (topic, message) => {
  console.log("%s %s", topic, message);
});

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("HI My Name is:" + name);
    console.log("server created");
  })
  .listen(8000);

