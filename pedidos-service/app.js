const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de Pedidos funcionando!");
});

app.listen(3000, () => {
  console.log("Pedidos rodando");
});
