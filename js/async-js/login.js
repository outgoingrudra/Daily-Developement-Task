
let users = [
    {
       name : "rudra",
       password : "123"
    },
    {
       name : "sampa",
       password : "1233"
    },
     {
       name : "arpita",
       password : "1234"
    },
     {
       name : "virat",
       password : "1231"
    }
]




let password =  1233
let name = "virat"

Login(name,password)
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})


function Login(name , password){
    return new Promise(function(resolve,reject){
        let user = users.find(p => p.name == name)
        if(user){
            if(user.password == password){
                resolve("Login Successful !!!"+name)
            }
            else {
                reject("password is wrong ")
            }
        }
        reject("user not available !!!")
    })
}