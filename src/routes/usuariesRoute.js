const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuariesController");

router.post("/", controller.create);
router.get("/", controller.getAll);
router.post("/login", controller.login);
router.delete("/:_id", controller.deleteUsuarie);

module.exports = router;