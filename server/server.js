const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
const client = require("mqtt").connect("mqtt://broker.emqx.io");
var gas;
client.on("connect", () => {
  client.subscribe("paho/home96");
  client.publish("paho/home69", gas);
  console.log("Connected ....");
});
client.on("message", (topic, message) => {
  console.log("%s %s", topic, message);
  gas = message;
});

app.use(express.json());
app.use(cors({ origin: "*" }));


app.get("/getData", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello from backend",
  });
});
app.get("/closeWindow", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
