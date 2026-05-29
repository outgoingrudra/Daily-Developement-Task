
const p1 = Login("Virat","13422")

p1
.then((function(user){
    console.log("Hello , "+ user.name)
}))
.catch(function(err){
    console.log("Login Failed ")
    console.log(err.message)
})


function Login(username ,password){
    let promise = new Promise(function (resolve , reject){
          let users = ["rudra","sampa","rahul","bikas","arpita"]
          if(users.includes(username)){
              let pass = "123422"
              if (pass==password){
                resolve({
                    name : username ,
                    address : "Kolkata"
                })
              }
              else {
                reject(new Error("Password not Matched !"))
              }
          }
          reject(new Error("User doesnt exist "))

    })

    return promise ;

}