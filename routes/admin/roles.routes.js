const express = require("express");
const router = express.Router();
const roles = require("../../controller/admin/roles.controller");
router.get("/roles", roles.roleIndex);
router.get("/roles/create", roles.createRole);
router.post("/roles/create", roles.createPostRole)
module.exports = router
