const mongoose = require("mongoose");

const capacitacoesSchema = new mongoose.Schema({
    tipo : { type : String },
    tema : { type : String },
    publicoAlvo : { type : String },
    pessoaFacilitadora : { type : String }
}, {
    versionKey: false
});

const capacitacoes = mongoose.model("capacitacoes", capacitacoesSchema);

module.exports = capacitacoes;