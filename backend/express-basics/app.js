import express from "express"

const app = express()
app.use((req,res)=>{
    let person = "Rudra Verma"
    
    res.send(person)
})

app.listen(3000)

