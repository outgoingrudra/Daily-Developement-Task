// parameter annotations
function sum(a : number , b : number){
    return a+b
}

console.log(sum(1,1));

// default params value
function details(person : string = "Guest"){
      console.log("Hi ,"+person);
      
}

details()
details("Rudra")
details("Sampa")

//return annotations

function Floor(a:number):number{
    return Math.floor(a)
}
console.log("Floor of 1.233 : ",Floor(1.233));

const count = (x:number):number => x+1

// void in TS

function Greet():void{
    console.log("Hi, Good Morning ");
    
}
Greet()

