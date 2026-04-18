const fs = require("fs")

console.log("hello from js")
console.log(fs.readFileSync("abc.txt","utf-8"))
console.log("Bye")