const cursos = require("../models/cursos.js");
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken");
const fs = require("fs");

const getAll = (req, res) => {
    const authHeader = req.get("authorization");

    if (!authHeader){
        return res.status(401).send("Insira o header!");
    };

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET, function(erro) {
        if(erro) {
            return res.status(403).send("O seu token é inválido!")
        }

        cursos.find(function (err, cursos){
            if(err){
                res.status(500).send({ message : err.message })
            }
            res.status(200).send(cursos);
        });
    })

};

const postCurso = (req, res) => {
    console.log(req.body);
  
    let curso = new cursos(req.body);
      curso.save(function(err){
      if (err) res.status(500).send({ message: err.message });
      res.status(201).send(curso.toJSON());
    });
  };

  const putCurso = (req, res) => {
    const _id = req.params._id;
  
    try {
      cursos.update(
          { _id },
          { $set: req.body },
          { upsert : true},
          function (err) {
          res.status(201).send({ message: "Curso atualizado com sucesso!" });
      });
    } catch (err) {
      return res.status(424).send({ message: err.message });
    };
  };

  const deleteCurso = (req, res) => {
    const _id = req.params._id;

    cursos.deleteOne({ _id }, function(err, cursos) {
      if(err) {
        return res.status(424).send({ message: err.message})
      } else {
        return res.status(200).send(cursos)
      }
    })
};


module.exports = {
    getAll,
    postCurso,
    putCurso,
    deleteCurso
};