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
module.exports.rolePermission = async(req, res) => {
    const find = {
        deleted : false
    }
    const records = await Role.find(find)
    res.render("admin/roles/permissions", {
        pageTitle : "Danh sách phân quyền",
        records : records
    })
}
module.exports.rolePermissionPatch = async(req, res) => {
    const permission = JSON.parse(req.body.roles)
    for(const item of permission){
        await Role.updateOne({
            _id : item.id
        },{
            permissions : item.permissions
        })
    }
    req.flash('success', 'Cập nhật phân quyền thành công !');
    res.redirect(`back`)
}