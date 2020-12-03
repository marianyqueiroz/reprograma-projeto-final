const express = require("express");
const router = express.Router();
const controller = require("../controllers/capacitacoesController");

router.get("/", controller.getAll);
router.post("/", controller.postCapacitacao);
router.put("/:_id", controller.putCapacitacao);
router.delete("/:_id", controller.deleteCapacitacao)

module.exports = router;