const fs = require('fs');
const http = require('http');


// 1st way of streaming

// const server = http.createServer()

// server.on("request", (req, res) => {
//     fs.readFile("input.txt", (err, data) => {
//         if (err) return console.log(err);
//         res.end(data.toString());        
//     });
// });

// server.listen(8000, "127.0.0.1");


// 2nd way of streaming

// const server = http.createServer()

// server.on("request", (req, res) => {
//     const rStream = fs.createReadStream("input.txt");

//     rStream.on("data", (reqData) => {
//         res.write(reqData);
//     });
//     rStream.on("end", () => {
//         res.end();
//     });
// });

// server.listen(8000, "127.0.0.1");



// 3rd way of streaming

const server = http.createServer()

server.on("request", (req, res) => {
   
    const rStream=fs.createReadStream("input.txt");
    rStream.pipe(res);
});

server.listen(8000, "127.0.0.1");