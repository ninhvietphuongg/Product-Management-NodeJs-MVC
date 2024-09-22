const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);
const productCategorySchema = mongoose.Schema({
    title : String,
    parent_id : {
        type : String,
        default : "",
    },
    description : String,
    thumbnail : String,
    position : Number,
    status : String,
    slug : {
        type : String,
        slug : "title",
        unique : true,
    },
    deleted : {
        type : Boolean,
        default : false,
    },
    deletedAt : Date
},
{
    timestamp : true
});
const ProductCategory = mongoose.model("ProductCategory", productCategorySchema, "products-category");
module.exports = ProductCategory