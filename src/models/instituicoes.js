const mongoose = require("mongoose");

const instituicoesSchema = new mongoose.Schema({
    tipo : { type : String },
    nome : { type : String },
    rua : { type : String },
    bairro : { type : String },
    cidade : { type : String },
    contato : { type : String } 

}, {
    versionKey: false
});

const instituicoes = mongoose.model("instituicoes", instituicoesSchema);

module.exports = instituicoes;