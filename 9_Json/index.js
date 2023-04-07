const fs = require('fs');

const data={
    name:"Virat",
    Profession:"Cricket",
    Age:34,
};


// Obect Data to JSON Data
const jsonData=JSON.stringify(data);

// Creating File
fs.writeFile('json.json',jsonData,()=>{
    console.log("File Created!");
})

//Reading File
readData=fs.readFile('json.json',"UTF-8",(err,readData)=>{
    console.log(readData);
    
})

// JSON Data to Object Data
const objData=JSON.parse(jsonData);
console.log(objData);











// Object to JSON 
// const jsonData=JSON.stringify(data);
// console.log(jsonData);

//JSON to Object
// const objData=JSON.parse(jsonData);
// console.log(objData);
// console.log(jsonData);


