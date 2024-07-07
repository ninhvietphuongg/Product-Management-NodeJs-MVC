const dashboardAdmin = require("./dashboard.routes");
const productsAdmin = require("./product.routes");
const systemConfix = require("../../config/system.confix");
module.exports = (app) => {
    const PathAdmin = `/${systemConfix.prefixAdmin}`;
    app.use(PathAdmin, dashboardAdmin);
    app.use(PathAdmin, productsAdmin);
}