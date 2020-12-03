const express = require("express");
const router = express.Router();
const controller = require("../controllers/instituicoesController");

router.get("/", controller.getAll);
router.post("/", controller.postInstituicoes);
router.put("/:_id", controller.putInstituicao);
router.delete("/:_id", controller.deleteInstituicao)

module.exports = router;