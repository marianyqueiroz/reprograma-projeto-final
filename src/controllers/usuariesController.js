const usuaries = require('../models/usuaries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const usuarie = new usuaries(req.body);

  usuarie.save(function(err) {
    if (err) {
      res.status(500).send({ message: err.message })
    }

    res.status(201).send(usuarie.toJSON())
  })
};

const login = (req, res) => {
  usuaries.findOne({ email: req.body.email }, function(error, usuaries) {
    if (!usuaries) {
      return res.status(404).send(`Não existe usuarie com o email ${req.body.email}`);
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, usuaries.senha);

    if (!senhaValida) {
      return res.status(403).send('Eita! Senha inválida');
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);

    return res.status(200).send(token);
  });
};

const getAll = (req, res) => {
    usuaries.find(function(err, usuaries){
      if(err) {
        res.status(500).send({ message: err.message })
      }
      res.status(200).send(usuaries);
    })
  };

    module.exports = {
      create,
      login,
      getAll
    }