const express = require("express");
const dashboardController = require("../../controller/client/home.controller");
const router = express.Router();
router.get("/", dashboardController.index);
module.exports = router;
