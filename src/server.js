const express = require("express");
const path = require("node:path");

const app = express();
const router = require("./routes");

// Configurações do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Configuração para requisição da URL
app.use(express.urlencoded({extended: true}));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado em: http://localhost:${PORT}`));