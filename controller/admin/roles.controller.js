const Role = require("../../model/roles.model");
module.exports.roleIndex = async(req, res) => {
    const roles = await Role.find({
        deleted : false
    })
    res.render("admin/roles/index", {
        pageTitle : "Nhóm quyền",
        roles : roles
    })
}
module.exports.createRole = async(req, res) => {
    res.render("admin/roles/create", {
        pageTitle : "Tạo mới nhóm quyền",
    })
}
module.exports.createPostRole = async(req, res) => {
    const role = new Role(req.body);
    await role.save();
    res.redirect(`back`)
}