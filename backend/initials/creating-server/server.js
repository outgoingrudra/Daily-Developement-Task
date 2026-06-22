const http = require("http")

const server = http.createServer(function(req,res){
       res.end("The message is comming from backend")
})

server.listen(7000,()=>{console.log("server running ")
})

