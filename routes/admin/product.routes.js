const express = require("express");
const productsAdmin = require("../../controller/admin/product.controller");
const router = express.Router();
router.get("/products", productsAdmin.index);
router.patch(`/products/change-status/:status/:id`, productsAdmin.changeStatus);
router.delete(`/products/delete-status/:id`, productsAdmin.deleteStatus);
module.exports = router;