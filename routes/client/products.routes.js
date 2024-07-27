const express = require("express");
const productController = require("../../controller/client/products.controller");
const router = express.Router();
router.get("/products", productController.index);
router.get("/products/detail/:slug", productController.detailIndex);
module.exports = router;