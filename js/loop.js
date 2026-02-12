// for(let i =0;i<10;i++)
// {
//     console.log(i)
// }



// x=10
// while(x>0){
//     console.log("While loop iteration -"+x)
//     x--
// }



// do{
//     console.log("hello")
//     x++
// }while(x<10)

// for table 
//let x =prompt("Enter a Number :")
// for(let i = 1;i<=10;i++){
//     console.log(x+" X "+i+" = "+x*i);
    
// }


Math.round(3.15)
Math.ceil(1.0000001)
Math.floor(2.1)
Math.pow(2,3)
Math.sqrt(121)
Math.max(12,11,5,24,23)
Math.min(11,23,1)
Math.random()



// let x  = 67
// let ur 
// do{
//    ur = prompt("Enter a Number :")
//   if(ur<x)
//      alert("Your Number is less than X")
//   else if(ur>x)
//      alert("Your Number is greater than X")
//   else
//      alert("Congrutulations ! You nailed it ! ")
  

// }while(ur!=x)


// reverse a string 

let str ="Hello World"
let ans =""
for(let i =0;i<str.length;i++)
{
    ans = str[i]+ans
}
console.log(ans);




// count vowels & consonants 
let s ="watErmelon"
let cnt =0
for(let i =0;i<s.length;i++)
{
    let x = s[i].toLowerCase()
    if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u')
        cnt++
}
console.log("total vowels :"+cnt);
console.log("total consonants :"+(s.length-cnt));



let name ="Abdul Pakir Janul Abdul Kalam"  // APJAK

let name_arr = name.split(" ")
ans = ""
for(let i = 0;i<name_arr.length ;i++)
      ans= ans + name_arr[i][0]
console.log(ans);

