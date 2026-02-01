const fs = require("fs")

console.log("Start");

setTimeout(()=>{ console.log("SET-TIMEOUT ! ")},0)
setImmediate(()=>{console.log("Set immediate !")})

fs.readFile("file.txt","utf8",(err,data)=>{
    console.log("File Reading ")
})


function A(){ console.log("func execution ! ");}


process.nextTick(()=>{console.log("process -next tick");
})
console.log("BYE ")