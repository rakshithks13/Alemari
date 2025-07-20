const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/login", userController.login);     // POST /api/users/login
router.get("/:id", userController.findById);     // GET /api/users/:id

module.exports = router;
