const express = require("express");
const app = express();
const productRoutes = require("./products.routes");
module.exports = (app) => {
    app.use("/", productRoutes);
}