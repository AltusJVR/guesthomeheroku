// dependancies
const express = require("express"),
    app = express(),
    port = process.env.PORT || 8080,
    { static } = require("express"),
    ejs = require("ejs");
app.use(static("public"));
app.use(static("views"));
app.set("view engine", "ejs");

// Routes
// Index
app.get("/", function (req, res) {
    res.render("index");
});

// About
app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("*", function (req, res) {
    res.redirect("/");
});

// Listen on port
app.listen(port, function () {
    console.log("server running on " + port)
});