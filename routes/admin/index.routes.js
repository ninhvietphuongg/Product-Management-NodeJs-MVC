const dashboardAdmin = require("./dashboard.routes");
const productsAdmin = require("./product.routes");
module.exports = (app) => {
    app.use("/admin", dashboardAdmin);
    app.use("/admin", productsAdmin);
}