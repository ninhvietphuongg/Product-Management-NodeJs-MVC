const Product = require("../../model/system");
module.exports.index = async (req, res) => {
    const find = {
        deleted : false,
    }
  
    const products = await Product.find(find)
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products : products,
        filterStatus : filterStatus
    })
}