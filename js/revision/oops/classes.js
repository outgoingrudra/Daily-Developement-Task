class Human {
    age  = 0
    name = "human"
    static totalHumans = 0 
    constructor(name,age){
        this.age = age 
        this.name = name
        Human.totalHumans+=1 
    }
    eat(){console.log("eating ")}
    details(){console.log("Hey ! "+this.name + "! Welcome !");
    }

}


let h1 = new Human("Rudra",20)
let h2 = new Human("Sampa",20)
let h3 = new Human("Vinay",20)
let h4 = new Human("Sahil",20)
let h5 = new Human("Kohli",20)
// h1.eat()
// h1.details()
console.log("Total humans : "+Human.totalHumans);



