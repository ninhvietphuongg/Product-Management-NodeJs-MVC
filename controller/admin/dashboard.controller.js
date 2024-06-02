module.exports.index = (req, res) => {
    res.render("admin/dashboard/index", {
        pageTitle : "Trang tổng quan"
    })
}