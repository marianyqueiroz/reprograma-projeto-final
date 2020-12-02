const instituicoes = require("../models/instituicoes.js");
const fs = require("fs");

const getAll = (req, res) => {
    console.log(req.url);

    instituicoes.find(function (err, instituicoes){
        res.status(200).send(instituicoes);
    });
};

const postInstituicoes = (req, res) => {
    console.log(req.body);
  
    let instituicao = new instituicoes(req.body);
      instituicao.save(function(err){
      if (err) res.status(500).send({ message: err.message })
  
      res.status(201).send(instituicao.toJSON());
    })
  };

module.exports = {
    getAll,
    postInstituicoes
};