const express = require("express");
const app = express();
const routesClient = require("./routes/client/index.routes");
const port = 3000;
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static("public"));
routesClient(app);
app.listen(port, () => {
    console.log(`Listening to ${port}`);
})