const fs = require("fs");
fs.writeFileSync("read.txt", "Hey all, Virat is King! ");


fs.appendFileSync("read.txt", "And king never bargains!");

const buf = fs.readFileSync("read.txt");
// console.log(buf);

{/* <Buffer 48 65 79 20 61 6c 6c 2c 20 56 69 72 61 74 20 69 73 20 4b 69 6e 67 21 20 41 6e 64 20 6b 69 6e 67 20 6e 65 76 65 72 20 62 61 72 67 61 69 6e 73 21> */ }

const org = buf.toString();
console.log(org);

fs.renameSync("read.txt", "readwrite.txt");