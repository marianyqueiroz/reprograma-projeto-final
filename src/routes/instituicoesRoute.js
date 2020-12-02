const express = require("express");
const router = express.Router();
const controller = require("../controllers/instituicoesController");

router.get("/", controller.getAll);
router.post("/", controller.postInstituicoes);

module.exports = router;