const express = require("express");
const multer = require("multer");
const upload = multer();
const uploadCloud = require("../../public/admin/js/upload.middleware")
const myAccount = require("../../controller/admin/my.account.controller");

const router = express.Router();

router.get("/", myAccount.index)
router.get("/edit", myAccount.edit)
router.patch("/edit/:id", 
    upload.single("avtar"),
    uploadCloud.uploadSingle,
    myAccount.editPost)
    module.exports = router