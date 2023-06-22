const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.getUsers);
router.post("/", Controller.postUser);
router.delete("/:id", Controller.delUser);
router.get("/:id", Controller.getUserById);

module.exports = router;
