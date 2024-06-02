const Product = require("../../model/system");
module.exports.index = async (req, res) => {
    const products = await Product.find({})
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products : products
    })
}