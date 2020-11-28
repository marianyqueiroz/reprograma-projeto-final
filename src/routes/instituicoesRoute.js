const express = require("express");
const router = express.Router();
const controller = require("../controllers/instituicoesController");

router.get("/instituicoes", controller.getAll);
router.post("/instituicoes", controller.postInstituicoes);

module.exports = router;