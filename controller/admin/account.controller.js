const Account = require("../../model/accounts.model");
const Role = require("../../model/roles.model");
const md5 = require("md5")
module.exports.index = async (req, res) => {
    const records = await Account.find({
        deleted : false
    }).select("-token-password")
    for(const record of records){
        const role = await Role.findOne({
            _id : record.role_id,
            deleted : false
        })
        record.role = role;
    }
    res.render("admin/accounts/index", {
        pageTitle: "Trang danh sách tài khoản",
        records : records
    })

}
module.exports.createIndex = async (req, res) => {
    const roles = await Role.find({
        deleted: false
    })
    res.render("admin/accounts/create", {
        pageTitle: "Trang tạo tài khoản",
        roles : roles
    })
}
module.exports.createPost = async (req, res) => {
    const emailExist = await Account.findOne({
        email: req.body.email,
        deleted: false
    })

    if (emailExist) {
        req.flash("error", "Email đã tồn tại");
        res.redirect("back")
    } else {
        req.body.password = md5(req.body.password);
        const record = new Account(req.body);
        await record.save();
        req.flash()
        res.redirect(`back`);
    }
}