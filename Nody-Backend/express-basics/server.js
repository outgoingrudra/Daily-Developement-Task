const express = require("express")

const app = express()
app.use(express.json())
app.post("/signup",(req,res)=>{
    console.log(req.body);

    res.send("Data received !")
    
})

app.listen(9000,()=>{console.log("App running !");
})