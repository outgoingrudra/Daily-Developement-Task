const p1 = createOrder("mik")


p1
.then(function(orderId){
    console.log("Your order id : ",orderId)
})
.catch(function(err){
    console.log(err.message)
})



function createOrder(item){
    
    const pr = new Promise(function(resolve , reject){
        if(item=="milk")
        {
            setTimeout(() => {
                resolve("12399")
            }, 3000);
        }
        else{
            reject(new Error("Wrong item "))
        }
    })

    return pr 
}
