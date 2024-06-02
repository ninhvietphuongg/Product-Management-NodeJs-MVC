module.exports.index = (req, res) => {
    res.render("client/products/index", {
        titlePage : "Trang sản phẩm"
    })
}