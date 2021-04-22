const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get("/", (req, res)=> {
    res.render("index");
});

app.get("/browse", (req, res)=> {
    res.render("browse");
});

app.get("/about", (req, res)=> {
    res.render("about");
});

app.get("/houses", (req, res)=> {
    res.render("houses");
});

app.get("/apply", (req, res)=> {
    res.render("apply");
});


app.listen(5050);