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
      if (err) res.status(500).send({ message: err.message });
      res.status(201).send("Uma nova instituição foi adicionada!");
    });
  };

  const putInstituicao = (req, res) => {
    const _id = req.params._id;
  
    try {
      instituicoes.update(
          { _id },
          { $set: req.body },
          { upsert : true},
          function (err) {
          res.status(201).send({ message: "Instituição atualizada com sucesso!" });
      });
    } catch (err) {
      return res.status(424).send({ message: err.message });
    };
  };

  const deleteInstituicao = (req, res) => {
    const _id = req.params._id;

    instituicoes.deleteOne({ _id }, function(err, instituicoes) {
      if(err) {
        return res.status(424).send({ message: err.message})
      } else {
        return res.status(200).send(instituicoes)
      }
    })
};


module.exports = {
    getAll,
    postInstituicoes,
    putInstituicao,
    deleteInstituicao
};