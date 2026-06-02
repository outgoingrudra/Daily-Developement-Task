// booking something
// payment
// delivery

function Booking() {
    console.log("Booking starts")
  const booking = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Booking Successful !!");
    }, 3000);
  });
  return booking;
}

function Payment() {
    console.log("Payment starts")
  const payment = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment successful");
    }, 4000);
  });
  return payment;
}

function Delivery() {
    console.log("delivery starts");
    
  const delivery = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Delivery done ✅");
    }, 1000);
  });
  return delivery;
}

Booking()
.then((res) => {
  console.log(res);
  return Payment();
})
.then((res)=>{
    console.log(res)
    return Delivery()
})
.then((res)=>{
    console.log(res);
    
})

// Booking starts
// wait for 3 sec
// Booking successful

//Payment starts
// wait for 4 sec
//Payment successful


// delivery starts
// wait for 1 sec
// delivery done 