const ProductCategory = require("../../model/products-category.model");
const helpersFilterStatus = require("../../helpers/filter.status");
const createTreeHelper = require("../../helpers/create.tree.helpers");
const systemConfig = require("../../config/system.confix");
module.exports.index = async (req, res) => {

    let find = {
        deleted: false,
    };
    const filterStatus = helpersFilterStatus(req);

    if (req.query.status) {
        find.status = req.query.status;
    }
    // Find Search Title
    if (req.query.keyword) {
        const regex = new RegExp(req.query.keyword, "i");
        find.title = regex;
    }
    const records = await ProductCategory.find(find);
    res.render("admin/products-category/index", {
        pageTitle: "Danh mục sản phẩm",
        records: records,
        filterStatus: filterStatus
    })
}
module.exports.create = async (req, res) => {
    let find = {
        deleted: false
    }
    const records = await ProductCategory.find(find);
    const newRecords = createTreeHelper(records)
    res.render("admin/products-category/create", {
        pageTitle: "Tạo mới sản phẩm",
        records: newRecords
    })
}
module.exports.createPost = async (req, res) => {
    req.body.title = req.body.title;
    req.body.parent_id = req.body.parent_id;
    req.body.description = req.body.description;
    if (req.body.position == "") {
        const count = await ProductCategory.countDocuments();
        req.body.position = count + 1;
    } else {
        req.body.position = parseInt(req.body.position);
    }
    const record = new ProductCategory(req.body);
    await record.save();
    res.redirect("/admin/products-category");
}
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;
    await ProductCategory.updateOne({
        _id: id
    }, {
        status: status
    })

    res.redirect("back");
}
module.exports.deleteStatus = async (req, res) => {
    const id = req.params.id;
    await ProductCategory.deleteOne({
        _id: id
    })
    res.redirect(`back`);
}
module.exports.editIndex = async (req, res) => {
    try {
        const id = req.params.id;
        const productCategory = await ProductCategory.findOne({
            _id: id,
            deleted: false
        });
        const records = await ProductCategory.find({
            deleted: false
        })
        const newRecords = createTreeHelper(records)
        res.render("admin/products-category/edit", {
            pageTitle: "Chỉnh sửa danh mục sản phẩm",
            productCategory: productCategory,
            records: newRecords
        })
    } catch (error) {
        res.redirect(`/${systemConfig.prefixAdmin}/products-category`);
    }

}
module.exports.editPost = async (req, res) => {
    const id = req.params.id;
    req.body.position = parseInt(req.body.position);
    await ProductCategory.updateOne({
        _id: id
    }, req.body)
    res.redirect(`back`);
}
module.exports.detailProductCategory = async(req, res) => {
    const id = req.params.id;
    const records = await ProductCategory.findOne({
        _id : id
    })
    res.render("admin/products-category/detail", {
        pageTitle : "Chi tiết sản phẩm",
        product : records
    })
}