// dependancies
const express = require("express"),
    app = express(),
    port = process.env.PORT || 8080,
    { static } = require("express"),
    ejs = require("ejs");
app.use(static("public"));
app.use(static("views"));
app.use("view engine", "ejs")




// Routes
// Index
app.get("/", function (req, res) {
    res.render("index");
});

app.get("*", function (req, res) {
    res.redirect("/");
});

// Listen on port
app.listen(port, function () {
    console.log("server running on " + port)
});