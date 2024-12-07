const express = require("express");
const router = express.Router();
const authController = require("../../controller/admin/auth.controller");
router.get("/auth/login", authController.login);
router.post("/auth/login", authController.loginPost);
router.get("/auth/logout", authController.logOut);
module.exports = router;