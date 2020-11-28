const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const index = require("./routes/index");
const instituicoes = require("./routes/instituicoesRoute");

mongoose.connect("mongodb://localhost:27017/reprograma", { useNewUrlParser: true, useUnifiedTopology: true });

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

module.exports = app;