const express = require("express");
const multer  = require('multer')
const upload = multer({ dest: './public/admin/img/' })
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/products", productsAdmin.index);
router.patch(`/products/change-status/:status/:id`, productsAdmin.changeStatus);
router.delete(`/products/delete-status/:id`, productsAdmin.deleteStatus);
router.patch(`/products/change-multi-status`, productsAdmin.changeMultiStatus);
router.get("/products/create", productsAdmin.createIndex)
router.post("/products/create", upload.single("thumbnail") ,productsAdmin.createPost)
module.exports = router;