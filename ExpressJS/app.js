const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello,my friends!");
});

app.get("/about", (req, res) => {
    res.end("About ok!!!");
});


app.listen(8000, () => {
    console.log("Listening the port 8000");

})


