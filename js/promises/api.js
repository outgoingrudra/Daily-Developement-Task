// Promise.all(input - array of promises ) -> parallely promise execute and return result

// if all promises successful -> then return output array
// if one of them fails -> return the error (not an array)


const p1 = new Promise(function(resolve,reject){
              setTimeout(() => {
                  resolve("p1")
              }, 3000);
})

const p2 = new Promise(function(resolve,reject){
              setTimeout(() => {
                  reject("p2  rejected ")
              }, 2000);
})

const p3 = new Promise(function(resolve,reject){
              setTimeout(() => {
                  resolve("p3")
              }, 4000);
})

// Promise.all([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
    
// })
// op array - [p1,p2,p3]

// Promise.allSettled() -> similar to Promise.all()
// just if one of the promise got rejected , still it returns an array containing the outputs of all Promises
// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
    
// })


// Promise.race() -> returns the first promise which is settled 
// Promise.race([p1,p2,p3]).then((res)=>{
//              console.log(res)
// }).catch((err)=>{
//     console.log(err);
    
// })


// Promise.any() -> it will return the first promise which will be resolved . 

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
    
})