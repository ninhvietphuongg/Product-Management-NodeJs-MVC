const express = require("express");
const multer = require("multer");
const upload = multer()
const uploadCloud = require("../../public/admin/js/upload.middleware")
const productsCategory = require("../../controller/admin/products-cactegory.controller");
const router = express.Router();
router.get("/", productsCategory.index);
router.get("/create", productsCategory.create);
router.post("/create",
    upload.single("thumbnail"),
    uploadCloud.uploadSingle,
    productsCategory.createPost);
router.patch(`/change-status/:status/:id`, productsCategory.changeStatus);
router.delete(`/delete-status/:id`, productsCategory.deleteStatus);
router.get(`/edit/:id`, productsCategory.editIndex)
router.patch(`/edit/:id`, 
    upload.single("thumbnail"),
    uploadCloud.uploadSingle,
    productsCategory.editPost)
router.get(`/detail/:id`, productsCategory.detailProductCategory)
module.exports = router;