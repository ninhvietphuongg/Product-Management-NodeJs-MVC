const Product = require("../../model/system");
const helpersFilterStatus = require("../../helpers/filter.status");
const helpersPagination = require("../../helpers/pagination.helper");
module.exports.index = async (req, res) => {
    const find = {
        deleted: false,
    }
    // Filter status
    const filterStatus = helpersFilterStatus(req);
    if (req.query.status) {
        find.status = req.query.status;
    }
    // End filter status
    // Find Search Title
    if (req.query.keyword) {
        const regex = new RegExp(req.query.keyword, "i");
        find.title = regex;
    }
    // End Find Search Title
    // Pagination
    const pagesCount = await Product.countDocuments(find);
    const objectPagination = helpersPagination(req, pagesCount);
    // End Pagination
    const products = await Product
        .find(find)
        .sort({ position: "desc" })
        .skip(objectPagination.skipPages)
        .limit(objectPagination.limitPages)
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus,
        objectPagination: objectPagination,
    })
}
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;
    await Product.updateOne({
        _id: id
    }, {
        status: status
    })
    res.redirect("back");
}
module.exports.deleteStatus = async (req, res) => {
    const id = req.params.id;
    await Product.deleteOne({
        _id: id
    })
    res.redirect(`back`);
}
module.exports.changeMultiStatus = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(",");
    switch (type) {
        case "active":
            await Product.updateMany({
                _id: { $in: ids }
            }, {
                status: type
            })
            res.redirect(`back`);
            break;
        case "inactive":
            await Product.updateMany({
                _id: { $in: ids }
            }, {
                status: type
            })
            res.redirect(`back`);
            break;
        case "delete-all":
            await Product.updateMany({
                _id: { $in: ids }
            }, {
                deleted: true
            })
            res.redirect(`back`);
            break;
        case "change-position":
            for (var key of ids) {
                let [id, position] = key.split("-");
                position = parseInt(position);
                id = id.trim();
                await Product.updateOne({
                    _id: id
                }, {
                    position: position
                })
            }
            res.redirect(`back`);
            break;
        default:
            break;
    }

}
module.exports.createIndex = async (req, res) => {
    res.render("admin/products/create", {
        pageTitle: "Khởi tạo sản phẩm"
    })
}
module.exports.createPost = async (req, res) => {
    req.body.price = parseInt(req.body.price);
    req.body.stock = parseInt(req.body.stock);
    req.body.discountPercentage = parseInt(req.body.discountPercentage);
    if (req.body.position == "") {
        const count = await Product.countDocuments();
        req.body.position = count + 1;
    } else {
        req.body.position = parseInt(req.body.position);
    }
    if(req.file){
        req.body.thumbnail = `/admin/uploads/${req.file.filename}`
    }
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/admin/products`)
};

