module.exports.index = (req, res) => {
    res.render("client/home/index", {
        pageTitle: "Home Client"
    })
}