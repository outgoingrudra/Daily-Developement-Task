import express from "express"

const app = express()

function first(req,res,next){
   //res.send("First")
   next()
}

function second(req,res){
     res.send("second")
}

function third(req,res){
     res.send("third")
}

app.get("/",first,second)

app.listen(3000)


