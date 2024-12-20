const Product = require("../../model/system");
const helpersFilterStatus = require("../../helpers/filter.status");
const helpersPagination = require("../../helpers/pagination.helper");
const createTree = require("../../helpers/create.tree.helpers");
const ProductCategory = require("../../model/products-category.model")
const Account = require("../../model/accounts.model")
// [GET] Index
module.exports.index = async (req, res) => {
    const find = {
        deleted: false,
    }
    let sort = {};
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
    // Sort data
    if(req.query.sortKey && req.query.sortValue){
        const sortKey = req.query.sortKey;
        const sortValue = req.query.sortValue;
        sort[sortKey] = sortValue;
    }else{
        sort.position = "desc";
    }
    // End Sort Data
    // Pagination
    const pagesCount = await Product.countDocuments(find);
    const objectPagination = helpersPagination(req, pagesCount);
    // End Pagination
    const products = await Product
        .find(find)
        .sort(sort)
        .skip(objectPagination.skipPages)
        .limit(objectPagination.limitPages)
    for(const product of products){
        const user = await Account.findOne({
            _id : product.createdBy.account_id
        });
        if(user){
            product.accountFullName = user.fullName
        }
    }
    res.render("admin/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus,
        objectPagination: objectPagination,
    })
}
// [PATCH] Change Status (Active Or Inactive)
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;
    await Product.updateOne({
        _id: id
    }, {
        status: status
    })
    req.flash('success', 'Cập nhật trạng thái thành công!');

    res.redirect("back");
}
// [DELETE] Delete status
module.exports.deleteStatus = async (req, res) => {
    const id = req.params.id;
    await Product.updateOne({
        _id: id
    },{
        deleted : true,
        deletedBy : {
            account_id : res.locals.user.id,
            deletedAt : new Date()
        }
    })
    res.redirect(`back`);
}
// [PATCH] Change multi Status
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
                    position: position,
                    $push : {updatedBy : updatedBy}
                })
            }
            res.redirect(`back`);
            break;
        default:
            break;
    }

}
// [GET] Index create
module.exports.createIndex = async (req, res) => {
    const category = await ProductCategory.find({
        deleted : false
    })
    const newCategory = createTree(category)
    res.render("admin/products/create", {
        pageTitle: "Khởi tạo sản phẩm",
        category : newCategory
   })
}
// [POST] Create data
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

    req.body.createdBy = {
        account_id : res.locals.user.id
    }
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/admin/products`)
};
// [GET] Index edit
module.exports.editIndex = async(req, res) => {
    const id = req.params.id;
    const products = await Product.findOne({
        _id : id,
        deleted : false
    });
    res.render("admin/products/edit", {
        pageTitle :  "Trang chỉnh sửa",
        products : products
    })
}
//[PATCH] edit data
module.exports.editPost = async(req, res) => {
    const id = req.params.id;
    req.body.price = parseInt(req.body.price);
    req.body.discountPercentage = parseInt(req.body.discountPercentage);
    req.body.stock = parseInt(req.body.stock);
    req.body.position = parseInt(req.body.position);
    if(req.file){
        req.body.thumbnail = `/admin/uploads/${req.file.filename}`;
    }
    try{
        const updatedBy = {
            account_id : res.locals.user.id,
            updatedAt : new Date()
        }
        await Product.updateOne({
            _id : id
        },{
            ...req.body,
            $push:{updatedBy : updatedBy}
        })
        res.redirect(`/admin/products`)
        req.flash("success", "Cập nhật thành công")
    }catch(error){
        req.flash("error", "Cập nhật thất bại")
    }
   
}
//[GET] index detail
module.exports.detailIndex = async(req, res) => {
    const id = req.params.id;
    const products = await Product.findOne({
        _id : id,
    })
    res.render("admin/products/detail",{
        pageTitle : "Trang chi tiết sản phẩm",
        product : products
    })
}

