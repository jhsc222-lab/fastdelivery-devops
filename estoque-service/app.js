const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de Estoque funcionando!");
});

app.listen(3000, () => {
  console.log("Estoque rodando");
});
