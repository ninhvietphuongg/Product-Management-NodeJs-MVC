const mongoose = require("mongoose");

const productShchema = mongoose.Schema({
    title: String,
    description : String,
    price : Number,
    discountPercentage : Number,
    stock : Number,
    status : String, 
    position : Number,
    deleted : Boolean,
    thumbnail : String,
});
const Product = mongoose.model(`Product`, productShchema, `products`)
module.exports = Product;