const dashboardAdmin = require("./dashboard.routes");
const productsAdmin = require("./product.routes");
const productsCategory = require("./products-category.routes");
const rolesAdmin = require("./roles.routes");
const systemConfix = require("../../config/system.confix");
const accountsAdmin = require("./accounts.routes");
const auth = require("./auth.routes");
const authCheck = require("../../middlewares/auth.check")
module.exports = (app) => {
    const PathAdmin = `/${systemConfix.prefixAdmin}`;
    app.use(PathAdmin + "/dashboard", authCheck.requireAuth ,dashboardAdmin);
    app.use(PathAdmin + "/products", authCheck.requireAuth ,productsAdmin);
    app.use(PathAdmin + "/products-category", authCheck.requireAuth ,productsCategory);
    app.use(PathAdmin + "/roles", authCheck.requireAuth, rolesAdmin);
    app.use(PathAdmin + "/accounts", authCheck.requireAuth ,accountsAdmin);
    app.use(PathAdmin + "/auth", auth)
}