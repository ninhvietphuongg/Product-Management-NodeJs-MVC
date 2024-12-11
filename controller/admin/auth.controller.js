const Account = require("../../model/accounts.model");
const systemConfig = require("../../config/system.confix");
const md5 = require("md5")
module.exports.login = (req, res) => {
    if (req.cookies.token) {
        res.redirect(`/${systemConfig.prefixAdmin}/dashboard`)
    } else {
        res.render("admin/auth/login", {
            pagetTitle: "Trang đăng nhập"
        })
    }

}
module.exports.loginPost = async (req, res) => {
    const { email, password } = req.body;
    const user = await Account.findOne({
        email: email,
        deleted: false
    })
    if (!user) {
        req.flash("error", "Email không tồn tại");
        res.redirect("back");
        return;
    }
    if (md5(password) != user.password) {
        req.flash("error", "Sai mật khẩu");
        res.redirect("back")
        return;
    }
    if (user.status == "inactive") {
        req.flash("error", "Tài khoản đã bị khóa");
        res.redirect("back");
        return;
    }
    res.cookie("token", user.token)
    req.flash("success", "Đăng nhập thành công")
    res.redirect(`/${systemConfig.prefixAdmin}/dashboard`)
}
module.exports.logOut = (req, res) => {
    res.clearCookie("token");
    req.flash("success", "Đăng xuất thành công")
    res.redirect(`/${systemConfig.prefixAdmin}/auth/login`)
}