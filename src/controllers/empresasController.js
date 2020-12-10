const empresas = require('../models/empresas');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const empresa = new empresas(req.body);

  empresa.save(function(err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }

    res.status(201).send(empresa.toJSON())
  })
};

const login = (req, res) => {
  empresas.findOne({ email: req.body.email }, function(error, empresas) {
    if (!empresas) {
      return res.status(404).send(`Não existe empresa com o email ${req.body.email}`);
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, empresas.senha);

    if (!senhaValida) {
      return res.status(403).send('Eita! Senha inválida');
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);

    return res.status(200).send(token);
  });
};

const getAll = (req, res) => {
    empresas.find(function(err, empresas){
      if(err) {
        res.status(500).send({ message: err.message })
      }
      res.status(200).send(empresas);
    })
  };

module.exports = {
  create,
  login,
  getAll
}