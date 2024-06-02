module.exports.index = (req, res) => {
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm"
    })
}