//  async is a keyword which is used before a function
//  async function - is a function which returns a promise
// await keyword can only be used inside an async function
// await keyword stops the execution of the async function upto when the promise is not settled . 
function Order() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order Successful");
    }, 3000);
  });
}

function Payment(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Payment successful')
        }, 3000);
    })
}
async function Hello() {
  try {
    console.log("Hi");
    const abc = await Order();
    console.log(abc);
    const def = await Payment()
    console.log(def);
    console.log("Bye");
  } catch (error) {
    console.log(error);
  }
}
Hello();

// Hi
// wait for 3 sec
//Order Successful
// wait for 3 sec
// Payment Completed 
//Bye
