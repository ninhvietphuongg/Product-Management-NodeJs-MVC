const express = require("express");
const multer = require("multer");
const upload = multer();
const accountController = require("../../controller/admin/account.controller");
const uploadCloud = require("../../public/admin/js/upload.middleware");
const validation = require("../../public/validations/admin/accounts.validate");

const router = express.Router();
router.get("/accounts", accountController.index);
router.get("/accounts/create", accountController.createIndex);
router.post("/accounts/create", 
    upload.single("avatar"),
    uploadCloud.uploadSingle,
    accountController.createPost,

)
module.exports = router;