const fs = require("fs");

// Making Folder
// fs.mkdirSync("Index2")

// Creating File in a folder and writing in it
fs.writeFileSync("index2.txt", "Something Something happen ,you won't understand!");

// Adding content to file
fs.appendFileSync("index2.txt", " But who are you?");

// Reading File
data=fs.readFileSync("index2.txt","utf8");
console.log(data);

// Delete File
// fs.unlinkSync("index2.txt");

// Delete Folder
// fs.rmdirSync("Index");

