const express = require("express");
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/products", productsAdmin.index);
router.get(`/products/change-status/:status/:id`, productsAdmin.changeStatus);
module.exports = router;