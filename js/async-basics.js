
let x = 1
let myInterval = setInterval(()=>{
    console.log("Interval -> "+x)
    x++
    if(x==5)
        clearInterval(myInterval)
},3000)



