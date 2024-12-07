const dashboardAdmin = require("./dashboard.routes");
const productsAdmin = require("./product.routes");
const productsCategory = require("./products-category.routes");
const routesAdmin = require("./roles.routes");
const systemConfix = require("../../config/system.confix");
const accountsAdmin = require("./accounts.routes");
const auth = require("./auth.routes");
module.exports = (app) => {
    const PathAdmin = `/${systemConfix.prefixAdmin}`;
    app.use(PathAdmin, dashboardAdmin);
    app.use(PathAdmin, productsAdmin);
    app.use(PathAdmin, productsCategory);
    app.use(PathAdmin, routesAdmin);
    app.use(PathAdmin, accountsAdmin);
    app.use(PathAdmin, auth)
}