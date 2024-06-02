const express = require("express");
const produtController = require("../../controller/client/products.controller")
const router = express.Router();
router.get("/products", produtController.index)
module.exports = router;