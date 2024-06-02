const express = require("express");
const app = express();
const routesClient = require("./routes/client/index.routes");
const routesAdmin = require("./routes/admin/index.routes");
const database = require("./model/database");
database.connect();
const port = 3000;
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static("public"));
routesAdmin(app);
routesClient(app);
app.listen(port, () => {
    console.log(`Listening to ${port}`);
})