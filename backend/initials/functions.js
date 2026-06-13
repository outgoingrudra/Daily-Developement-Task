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

function squareRoot(x){
    low = 0 
     high = 214748
     ans = low
     while(low<=high){
        mid = Math.floor((high+low)/2);
        calc = mid * mid

        if(calc==x) return mid
        else if(calc<x){
            ans = mid
            low = mid +1
        }
        else high = mid -1
     }
     return ans 
        
}

module.exports = {add , multiply, users, factorial , isNegative , isOdd, squareRoot}


