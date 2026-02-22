const express = require("express")


const app = express()

app.listen(3000)

app.use(func)


function func(req,res){
    let x = 10
    let y = 30
    res.send("Hello from Callback func "+(x+y))
}