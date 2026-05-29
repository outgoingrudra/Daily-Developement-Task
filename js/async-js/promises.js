// whenever the code is executed line by line -we call it sync
// whenever the code is executed not line by line -we call it async

// code segment -> which is performing some type of input output operations then we cant gurrantee the time of completeion of the code segment . it can be 2 ms or 200 s.here we use async operations for better execution of js 

//promise - promise is an object representing eventual completion or failure of an async operation

//  resolve will be called if promise is successful
// reject will be called if promise gets failed 

const p1 = new Promise(function(resolve , reject){
                 
     arr = [12,34,11]

     setTimeout(() => {
          reject(new Error("Some error occurred ! "))
     }, 4000);
})

p1
.then(function(output){
    console.log(output)
}).catch(function(err){
    console.log(err.message)
})