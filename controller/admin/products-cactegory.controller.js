const ProductCategory = require("../../model/products-category.model");
const helpersFilterStatus = require("../../helpers/filter.status");

module.exports.index = async (req, res) => {

    let find = {
        deleted : false,
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
        pageTitle : "Danh mục sản phẩm",
        records : records,
        filterStatus : filterStatus
    })
}
module.exports.create = (req, res) => {
    res.render("admin/products-category/create", {
        pageTitle : "Tạo mới sản phẩm"
    })
}
module.exports.createPost = async (req, res) => {
    req.body.title = req.body.title;
    req.body.parent_id = req.body.parent_id;
    req.body.description = req.body.description;
    if(req.body.position == ""){
    const count = await ProductCategory.countDocuments();
    req.body.position = count + 1;
    }else{
        req.body.position = parseInt(req.body.position);
    }
    const record = new ProductCategory(req.body);
    await record.save();
    res.send("ok")
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
