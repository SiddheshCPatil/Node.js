const express = require('express');
const nav = express();
const port = 8000;

nav.get("/", (req, res) => {
    res.send("<h1>Welcome to HOME Page!!!</h1>");
});

nav.get("/about", (req, res) => {
    res.send("Welcome to ABOUT Page!!!")
});

nav.get("/contact", (req, res) => {
    res.send("Welcome to CONTACT Page!!!")
});

nav.get("/temp", (req, res) => {
    // res.send("Welcome to TEMP Page!!!")
    res.send({
        id: 1,
        name: "Siddhesh",
    });
});

nav.listen(port);

