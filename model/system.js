const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug)
const productShchema = mongoose.Schema({
    title: String,
    description : String,
    parent_id_product : {
        type : String,
        default : "",
    },
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
    createdBy:{
        account_id: String,
        createdAt : {
            type : Date,
            default : Date.now
        }
    },
    updatedBy : [
        {
        account_id : String,
        updatedAt : Date
    }
    ],
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