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

    let instituicoes = new instituicoes(req.body);
    instituicoes.save(function(err) {
        if (err) res.status(500).send({ message : err.message });

        res.status(201).send(instituicoes);
    });
};

module.exports = {
    getAll,
    postInstituicoes
};