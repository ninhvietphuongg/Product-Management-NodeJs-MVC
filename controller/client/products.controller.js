const Product = require("../../model/system");
// [GET] index
module.exports.index = async (req, res) => {
    const filter = {
        deleted : false
    }
    const products = await Product
    .find(filter)
    .sort({position : "desc"})
    for (const item of products) {
        item.priceNew = (item.price * (100 - item.discountPercentage)/100).toFixed(0);
      }    
      res.render("client/products/index", {
        pageTitle : "Trang sản phẩm",
        products : products,
    })
}
// [GET] index detail
module.exports.detailIndex = async(req, res) => {
    res.send("ok")
}