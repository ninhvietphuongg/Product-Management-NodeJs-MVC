const express = require("express");
const router = express.Router();
router.get("/products", (req, res) => {
    res.send("Trang sản phẩm bên client")
})
module.exports = router;