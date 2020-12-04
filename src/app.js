require('dotenv-safe').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const index = require("./routes/index");
const instituicoes = require("./routes/instituicoesRoute");
const capacitacoes = require("./routes/capacitacoesRoute");
const cursos = require("./routes/cursosRoute");
const usuaries = require("./routes/usuariesRoute");

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function (){
    console.log("Conexão feita com sucesso!");
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Woth, Content-Type, Accept"
    );
    next();
});
app.use("/", index);
app.use("/instituicoes", instituicoes);
app.use("/capacitacoes", capacitacoes);
app.use("/cursos", cursos);
app.use("/usuaries", usuaries);

module.exports = app;