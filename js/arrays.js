// let arr = [12,20]
// arr.push(23)
// console.log(arr)


// console.log(arr.pop())
// let arr =[]
// // making an array of even numbers of length 10
// for(let i =2 ;i<= 20;i+=2){
//     arr.push(i)
// }
// console.log(arr)



arr =[]
// making an array of fibonaci numbers 
a = 0
b = 1
arr.push(0)
arr.push(1)
for(let i =0;i<10;i++){
    let c = a+b
    arr.push(c)
    a=b
    b=c
}
console.log(arr)

// add first 20 palindrome number in array
// add all leap years between 2000 - 2200

// let years =[]
// for(let i = 2000;i<=2200;i+=4)
// {
//     if((i%4==0 && i%100!=0) || (i%400==0))
//            years.push(i)

// }

// console.log(years)

let x = [1,2,3,4,5]
x.shift() // will pop the first element 
x.unshift(10)// will add something to the first position
console.log(x)
console.log("array length " + x.length )

arr = [1,2,3,4,5,6,7,8,9]
let rev = arr.reverse()
console.log(rev)

let nums = [23,11,46,67,33,66] 
let idx  = nums.indexOf(46)
console.log("index of 46 : "+idx)

// calc average value of the array