const Account = require("../../model/accounts.model")
const md5 = require("md5")
module.exports.index = (req, res) => {
    res.render("admin/my-account/index", {
        pageTitle: 'Trang thông tin cá nhân'
    })
}
module.exports.edit = (req, res) => {
    res.render("admin/my-account/edit",{
        pageTitle: "Trang chỉnh sửa cá nhân"
    })
}
module.exports.editPost = async(req, res) => {
    const id = req.params.id;
    const emailExist = await Account.findOne({
        _id : {$ne: id},
        email: req.body.email,
        deleted: false
    })
    if (emailExist) {
        req.flash("error", "Email đã tồn tại ")
    } else {
        req.body.password = md5(req.body.password);
        if (req.file) {
            req.body.thumbnail = `/admin/uploads/${req.file.filename}`
        }
        await Account.updateOne({
            _id: id
        }, req.body)
        req.flash("success", "Cập nhật tài khoản thành công !")
    }
    res.redirect(`back`)
}