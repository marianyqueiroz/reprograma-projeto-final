const capacitacoes = require("../models/capacitacoes.js");
const fs = require("fs");

const getAll = (req, res) => {
    console.log(req.url);

    capacitacoes.find(function (err, capacitacoes){
        res.status(200).send(capacitacoes);
    });
};

const postCapacitacao = (req, res) => {
    console.log(req.body);
  
    let capacitacao = new capacitacoes(req.body);
      capacitacao.save(function(err){
      if (err) res.status(500).send({ message: err.message });
      res.status(201).send(capacitacao.toJSON());
    });
  };

  const putCapacitacao = (req, res) => {
    const _id = req.params._id;
  
    try {
      capacitacoes.update(
          { _id },
          { $set: req.body },
          { upsert : true},
          function (err) {
          res.status(201).send({ message: "Capacitação atualizada com sucesso!" });
      });
    } catch (err) {
      return res.status(424).send({ message: err.message });
    };
  };

  const deleteCapacitacao = (req, res) => {
    const _id = req.params._id;

    capacitacoes.deleteOne({ _id }, function(err, capacitacoes) {
      if(err) {
        return res.status(424).send({ message: err.message})
      } else {
        return res.status(200).send(capacitacoes)
      }
    })
};


module.exports = {
    getAll,
    postCapacitacao,
    putCapacitacao,
    deleteCapacitacao
};