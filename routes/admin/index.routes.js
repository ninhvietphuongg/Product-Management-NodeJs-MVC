const express = require("express");
const dashboardAdmin = require("./dashboard.routes");
const app = express();
module.exports = (app) => {
    app.use("/admin", dashboardAdmin);
}