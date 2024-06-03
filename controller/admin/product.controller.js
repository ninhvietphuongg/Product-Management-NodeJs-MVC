const Product = require("../../model/system");
module.exports.index = async (req, res) => {
    const find = {
        deleted : false,
    }
    const filterStatus = [{
        name : 'Tất cả',
        status : "",
        class : ""
    },{
        name : "Hoạt động",
        status : "active",
        class : ""
    },{
        name : "Dừng hoạt động",
        status : "inactive",
        class : ""
    }]
    if(req.query.status){
        find.status = req.query.status;
    }
    const products = await Product.find(find)
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products : products,
        filterStatus : filterStatus
    })
}