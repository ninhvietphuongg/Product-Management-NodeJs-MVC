const express = require("express");
const multer = require("multer");
const upload = multer();
const accountController = require("../../controller/admin/account.controller");
const uploadCloud = require("../../public/admin/js/upload.middleware");

const router = express.Router();
router.get("/", accountController.index);
router.get("/create", accountController.createIndex);
router.post("/create", 
    upload.single("avatar"),
    uploadCloud.uploadSingle,
    accountController.createPost,
)
router.get("/edit/:id", accountController.editIndex)
router.patch("/edit/:id", 
    upload.single("avatar"),
    uploadCloud.uploadSingle,
    accountController.editPost)
module.exports = router;