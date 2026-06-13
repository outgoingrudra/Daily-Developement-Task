function add(a, b) {
    return a + b;
}

function multiply (a,b){
    return a*b
}

function Divide(a,b){
    return a/b
}
function factorial(x){
    if(x==0 || x==1) return 1
    return x * factorial(x-1)
}

const isOdd = (x)=> x%2==1
const isNegative =(x)=> x< 0
let  users = 1000 

module.exports = {add , multiply, users, factorial , isNegative , isOdd}