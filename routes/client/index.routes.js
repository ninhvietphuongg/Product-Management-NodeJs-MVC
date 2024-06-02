const express = require("express");
const app = express();
const productRoutes = require("./products.routes");
const homeRoutes = require("./home.routes");
module.exports = (app) => {
    app.use("/", homeRoutes);
    app.use("/", productRoutes);
}