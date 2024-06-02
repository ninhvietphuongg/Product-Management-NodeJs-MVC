const express = require("express");
const dashboardAdmin = require("../../controller/admin/dashboard.controller");
const router = express.Router();
router.get("/dashboard", dashboardAdmin.index);
module.exports = router;