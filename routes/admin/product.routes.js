const express = require("express");
const multer = require("multer");
const upload = multer()
const uploadCloud = require("../../public/admin/js/upload.middleware")
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/", productsAdmin.index);
router.patch(`/change-status/:status/:id`, productsAdmin.changeStatus);
router.delete(`/delete-status/:id`, productsAdmin.deleteStatus);
router.patch(`/change-multi-status`, productsAdmin.changeMultiStatus);
router.get("/create", productsAdmin.createIndex)
router.post("/create",
     upload.single("thumbnail"),
     uploadCloud.uploadSingle,
     productsAdmin.createPost)
router.get("/edit/:id", productsAdmin.editIndex)
router.patch("/edit/:id",
     upload.single("thumbnail"),
     uploadCloud.uploadSingle,
      productsAdmin.editPost);
router.get("/detail/:id", productsAdmin.detailIndex);

module.exports = router; 