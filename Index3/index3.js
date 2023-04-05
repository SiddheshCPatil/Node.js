const fs = require("fs");

fs.writeFile("index3.txt", "Index3 is generating...", (err) => { console.log("File is Created!!") });

fs.appendFile("index3.txt", " And it gets generated", (err) => { console.log("Data is added!!") });

data=fs.readFile("index3.txt","UTF-8",(err,data)=>{console.log(data)});
console.log(data);