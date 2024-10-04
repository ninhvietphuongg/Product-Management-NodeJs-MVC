const express = require("express");
const multer = require("multer");
const upload = multer()
const uploadCloud = require("../../public/admin/js/upload.middleware")
const productsCategory = require("../../controller/admin/products-cactegory.controller");
const router = express.Router();
router.get("/products-category", productsCategory.index);
router.get("/products-category/create", productsCategory.create);
router.post("/products-cactegory/create",
    upload.single("thumbnail"),
    uploadCloud.uploadSingle,
    productsCategory.createPost);
router.patch(`/products-category/change-status/:status/:id`, productsCategory.changeStatus);
router.delete(`/products-category/delete-status/:id`, productsCategory.deleteStatus);
router.get(`/products-category/edit/:id`, productsCategory.editIndex)
router.patch(`/products-category/edit/:id`, 
    upload.single("thumbnail"),
    uploadCloud.uploadSingle,
    productsCategory.editPost)
router.get(`/products-category/detail/:id`, productsCategory.detailProductCategory)
module.exports = router;