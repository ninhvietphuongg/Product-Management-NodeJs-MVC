const express = require("express");
const bodyParser = require('body-parser')
const system = require("./config/system.confix");
const path = require('path');
const dotenv = require('dotenv')
dotenv.config();

const methodOverride = require('method-override');
const flash = require('express-flash');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const routesClient = require("./routes/client/index.routes");
const routesAdmin = require("./routes/admin/index.routes");
const database = require("./model/database");
database.connect();
const port = process.env.PORT;
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

app.locals.prefixAdmin = system.prefixAdmin;
routesAdmin(app);
routesClient(app);
app.listen(port, () => {
    console.log(`Listening to ${port}`);
})