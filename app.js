const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
var expressVue = require("express-vue");

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
require("dotenv").config();

const expressVueMiddleware = expressVue.init();
app.use(expressVueMiddleware);

var options = {
    useNewUrlParser: true
};

mongoose.connect(process.env.DEVURL, options, function () {
    //mongoose.connection.db.dropDatabase();
});


//Catchall 404 route.
app.get("*", (req, res) => {
    res.redirect("../");
});

app.listen(process.env.PORT || 3000, "localhost", () => { //connect ith the environment port, or 3000 as a backup.
    console.log("CRM Online");
});