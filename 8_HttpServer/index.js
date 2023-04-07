const http = require('http');

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
    else{
        res.writeHead(404);
        res.end("404 error,Page doesn't Exists");
    }
});

// 127.0.0.1
server.listen(8000, '127.0.0.1', () => {
    console.log("Listnening port no. 8000");

});







