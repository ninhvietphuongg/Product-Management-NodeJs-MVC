const express = require("express");
const router = express.Router();
const roles = require("../../controller/admin/roles.controller");
router.get("/", roles.roleIndex);
router.get("/create", roles.createRole);
router.post("/create", roles.createPostRole)
router.get("/permissions", roles.rolePermission);
router.patch("/permissions", roles.rolePermissionPatch)
module.exports = router
