const mongoose = require("mongoose");

const productShchema = mongoose.Schema({
    title: String,
    description : String,
    price : Number,
    discountPercentage : Number,
    stock : Number,
    status : String, 
    position : Number,
    thumbnail : String,
    deleted : {
        type : Boolean,
        default : false,
    }
});
const Product = mongoose.model(`Product`, productShchema, `products`)
module.exports = Product;