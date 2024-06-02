const mongoose = require("mongoose");
module.exports.connect = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/product-management-b1-24");
        console.log("Connect Database success !")
    }catch(error){
        console.log(error);
    }
}