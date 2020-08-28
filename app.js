// dependancies
const express = require("express"),
    app = express(),
    port = process.env.port || 8080,
    { static } = require("express");
app.use(static("public"));
app.use(static("views"));

// Routes
// Index
app.get("/", function (req, res) {
    res.render("index.html");
});

app.get("*", function (req, res) {
    res.redirect("/");
});

// Listen on port
app.listen(port, function () {
    console.log("server running on " + port)
});