  const mongoose = require('mongoose');

  const usuariesSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String }
},{
    versionKey: false
});

const usuaries = mongoose.model('usuarie', usuariesSchema);

module.exports = usuaries;