const mongoose = require("mongoose");
const generate = require("../helpers/genereate");
const accountSchema = new mongoose.Schema({
    fullName : String,
    email : String,
    password : String,
    token : {
        type : String,
        default : generate.generateRandomString
    },
    avatar : String,
    role_id : String,
    status : String,
    deleted : {
        type : Boolean,
        default : false,
    },
    deletedAt : Date,
},{
    timestamps: true,
});
const Account = mongoose.model("Account", accountSchema, "accounts");
module.exports = Account;