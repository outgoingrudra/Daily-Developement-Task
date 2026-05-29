let amount = 10000

Transaction(amount)
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})

function Transaction(amt){
    return new Promise(function(resolve , reject){
        if(amt< 0)
            reject("Amount can't be negative")
        else  if(amt>1000000000)
            reject("Amount is invalid")
        else resolve("Transaction completed of "+amt+"$")
    })
}