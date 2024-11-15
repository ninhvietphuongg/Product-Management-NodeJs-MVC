const express = require("express");
const multer = require("multer");
const upload = multer()
const uploadCloud = require("../../public/admin/js/upload.middleware")
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/products", productsAdmin.index);
router.patch(`/products/change-status/:status/:id`, productsAdmin.changeStatus);
router.delete(`/products/delete-status/:id`, productsAdmin.deleteStatus);
router.patch(`/products/change-multi-status`, productsAdmin.changeMultiStatus);
router.get("/products/create", productsAdmin.createIndex)
router.post("/products/create",
     upload.single("thumbnail"),
     uploadCloud.uploadSingle,
     productsAdmin.createPost)
router.get("/products/edit/:id", productsAdmin.editIndex)
router.patch("/products/edit/:id",
     upload.single("thumbnail"),
     uploadCloud.uploadSingle,
      productsAdmin.editPost);
router.get("/products/detail/:id", productsAdmin.detailIndex);

module.exports = router; 