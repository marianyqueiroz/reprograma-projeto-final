const express = require("express");
const router = express.Router();
const controller = require("../controllers/cursosController");

router.get("/", controller.getAll);
router.post("/", controller.postCurso);
router.put("/:_id", controller.putCurso);
router.delete("/:_id", controller.deleteCurso)

module.exports = router;