const express = require('express');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get("/", (req, res)=> { 
    res.render("index", {pagetitle: "Homepage"});
});

app.get("/contact", (req, res)=> { 
    res.render("page2");
});

app.get("/users/:username", (req, res)=> { 
    res.send(`<h1> Welcome ${req.params.username}`);
});


app.listen(5050, ()=>{ console.log("Server Started!"); });