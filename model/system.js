const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug)
const productShchema = mongoose.Schema({
    title: String,
    description : String,
    price : Number,
    discountPercentage : Number,
    stock : Number,
    status : String, 
    position : Number,
    thumbnail : String,
    slug : {
        type: String,
        slug : "title",
        unique : true
    },
    deleted : {
        type : Boolean,
        default : false,
    },
    deletedAt : Date,
},
{
    timestamp : true
}
);
const Product = mongoose.model(`Product`, productShchema, `products`)
module.exports = Product;