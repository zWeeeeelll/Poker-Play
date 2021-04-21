const express = require("express");
const server = express();

//configuracao da pasta public
server.use(express.static("public"))


//pagina inicial
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

//ligar o servidor
server.listen(3000);