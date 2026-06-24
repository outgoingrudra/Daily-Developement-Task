import express from "express"

let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}


let product ={
    id : 2323423,
    name : "Mobile",
    price : 22222
}

let about =  `Aspiring Software Engineer passionate about building scalable, production-ready web applications. I craft clean, efficient code across the full stack — from polished UIs to robust REST APIs — while continuously expanding into cloud and backend ecosystems.`

const app = express()
let person = " Virat "

app.get("/",(req,res)=>{
    res.send("IT is Home Page")
})

app.get("/about",(req,res)=>{
    res.send(about)
})

app.get("/product",(req,res)=>{
    res.send(product)
})

app.get("/user",(req,res)=>{
    res.send(user)
})

app.listen(3000,()=>{
    console.log("server is running on PORT : 3000")
})


console.log("hey")

