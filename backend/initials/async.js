function fn(){
    console.log("2 sec waited");  
}

console.log("hello");

setTimeout(fn,2000)

console.log("Bye");


//o/p

//hello
//Bye

// all code go to call stack
// call stack execute all sync code and dump all async code into libuv 
// async code will wait at threadpool 
// after it , the callback function of async code will be push to callback queues
// event loop will continously check if call stack empty 
// if call stack is empty then , callbacks from callback queue are pushed to callstack
// then callbacks are executed 




// async code -> wait + callback func