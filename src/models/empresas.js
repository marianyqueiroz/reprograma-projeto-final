const mongoose = require('mongoose');

const empresasSchema = new mongoose.Schema({
  nome: { type: String },
  cnpj:{ type: String },
  email: { type: String },
  senha: { type: String }
},{
  versionKey: false
});

const empresas = mongoose.model('empresa', empresasSchema);

module.exports = empresas;