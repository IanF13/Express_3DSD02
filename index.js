const express = require("express");
const app = express();

const PORT = 8081;

app.get("/", function (req, res) {
  res.send("Mauricio de Souza");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
