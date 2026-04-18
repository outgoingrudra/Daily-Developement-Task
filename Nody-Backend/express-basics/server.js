const express = require("express")


const app = express()
app.use(express.urlencoded({extended:true}))

app.listen(3000)


app.get("/",(req,res)=>{
     console.log(req.body)
     res.send("Form Submitted !!")
})