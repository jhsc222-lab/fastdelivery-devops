const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de Pagamentos funcionando!");
});

app.listen(3000, () => {
  console.log("Pagamentos rodando");
});
