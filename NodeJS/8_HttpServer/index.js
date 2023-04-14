const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === '/home') {
        req.end("Home Side");
    }
    else if (req.url === '/about') {
        res.end("About Side");
    }
    else if (req.url === '/contact') {
        res.end("Contact Side");
    }
    else if (req.url === '/userapi') {
        res.end("userapi Side");
        fs.readFile(`${__dirname}/10_UserAPI/userapi.json`, "UTF-8", (err, data) => {
            // console.log(data);
            res.end(data);
            const objData=JSON.parse(data);
            console.log(objData[0].dates);
        });
    }
    else {
        res.writeHead(404);
        res.end("404 error,Page doesn't Exists");
    }
});

// 127.0.0.1
server.listen(8000, '127.0.0.1', () => {
    console.log("Listnening port no. 8000");

});







