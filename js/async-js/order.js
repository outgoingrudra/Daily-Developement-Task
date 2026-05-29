item = "wire"
const promise = CreateOrder(item)

promise
.then(function(orderDetails){
    console.log(orderDetails)
})
.catch(function(err){

    console.log(err.message)
})



function CreateOrder(item){
   items = ["watch","bulb","wire","fan","AC"]
   
    const p1 = new Promise(function(resolve , reject){
         
         if(items.includes(item)){
             orderDetails ={
            product : item,
            price : 3000,
            description : "Item purchased",
            delivery : "29 May 2026"
              }
         resolve(orderDetails)
    }
    else {
        reject(new Error("Item Not Present !!!"))
    }
    })

    return p1 
}