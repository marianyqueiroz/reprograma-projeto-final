const cursos = require("../models/cursos.js");
const fs = require("fs");

const getAll = (req, res) => {
    console.log(req.url);

    cursos.find(function (err, cursos){
        res.status(200).send(cursos);
    });
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
          res.status(201).send({ message: "Curso atualizada com sucesso!" });
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