// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
// const res = require('express/lib/response')
const app = express();

// Express Settings
app.set('views', __dirname + '/views')
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
// controllers and routes
app.use("/places", require("./controllers/places"));

// it already knows to look  the folder called views when using render
app.get("/", (req, res) => {
	res.render("home");
});

app.get("*", (req, res) => {
	res.render("error404");
});

app.listen(process.env.PORT,()=>(console.log('itsworking')));
