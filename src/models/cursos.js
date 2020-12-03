const mongoose = require("mongoose");

const cursosSchema = new mongoose.Schema({
    tipo : { type : String },
    tema : { type : String },
    publicoAlvo : { type : String },
    pessoaFacilitadora : { type : String },
    link : { type : String }
}, {
    versionKey: false
});

const cursos = mongoose.model("cursos", cursosSchema);

module.exports = cursos;