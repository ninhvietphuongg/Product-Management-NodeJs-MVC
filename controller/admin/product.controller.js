const Product = require("../../model/system");
const helpersFilterStatus = require("../../helpers/filter.status");
module.exports.index = async (req, res) => {
    const find = {
        deleted : false,
    }
    // Filter status
    const filterStatus = helpersFilterStatus(req);
    if(req.query.status){
        find.status = req.query.status;
    }
    // End filter status
    const products = await Product.find(find)
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products : products,
        filterStatus : filterStatus
    })
}