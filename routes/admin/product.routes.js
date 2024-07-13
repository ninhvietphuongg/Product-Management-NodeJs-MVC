const express = require("express");
const multer = require("multer");
const multerStorage  = require('../../helpers/multer.storage');
const upload = multer({storage : multerStorage()})
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/products", productsAdmin.index);
router.patch(`/products/change-status/:status/:id`, productsAdmin.changeStatus);
router.delete(`/products/delete-status/:id`, productsAdmin.deleteStatus);
router.patch(`/products/change-multi-status`, productsAdmin.changeMultiStatus);
router.get("/products/create", productsAdmin.createIndex)
router.post("/products/create", upload.single("thumbnail") ,productsAdmin.createPost)
router.get("/products/edit/:id", productsAdmin.editIndex)
router.patch("/products/edit/:id",upload.single("thumbnail"), productsAdmin.editPost);
module.exports = router;