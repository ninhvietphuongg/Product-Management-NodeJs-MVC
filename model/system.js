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
    thumbnail : Date,
});
const Product = mongoose.model(`products`, productShchema, `Product`)
module.exports = Product;