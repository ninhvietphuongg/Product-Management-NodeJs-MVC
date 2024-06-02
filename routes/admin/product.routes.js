const express = require("express");
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/products", productsAdmin.index);
module.exports = router;