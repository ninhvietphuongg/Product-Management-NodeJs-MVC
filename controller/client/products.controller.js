const Product = require("../../model/system");
module.exports.index = async (req, res) => {
    const filter = {
        deleted : false
    }
    const products = await Product.find(filter)
    for (const item of products) {
        item.priceNew = (item.price * (100 - item.discountPercentage)/100).toFixed(0);
      }    
      res.render("client/products/index", {
        pageTitle : "Trang sản phẩm",
        products : products,
    })
}