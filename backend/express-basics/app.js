import express from "express"

const app = express()
app.use(express.json())

let users = []

app.get("/",(req,res)=>{
   users.push(req.body)
   res.send("received")
})

app.get("/users",(req,res)=>{
   res.send(users)
})


app.get("/delete",(req,res)=>{
    users = []
   res.send("users deleted")
})

app.get("/login",(req,res)=>{
     let name = req.body.name
     let password = req.body.password

     for(let user of users){
        if(user.name == name && user.password ==password){
            return res.send("Login Successful")
        }
      
     }
        return res.send("Login failed")       
})

app.get("/about",(req,res)=>{
         res.send("About data")
})

app.listen(3000,()=>{
    console.log("Server is running on PORT : 3000")
})


