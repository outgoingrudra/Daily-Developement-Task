const fs = require("fs")

console.log("start");

fs.readFileSync("file.txt","utf8")
console.log("file loaded ")
console.log("BYE");

