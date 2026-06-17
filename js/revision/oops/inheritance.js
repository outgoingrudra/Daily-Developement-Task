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


class Employee extends Human{
    job = null
    constructor(name , age , job){
        super(name,age)
        this.job = job
    }
    details(){
        console.log("Hello ,"+this.name + " . Your profession is "+this.job);
    }
    get joby(){return this.job}
    set joby(job){this.job = job}
}
const e1 = new Employee("Rudra",21,"Software Enginner")
e1.details()

console.log(e1.joby);
e1.joby = "Full stack developer"

console.log(e1.joby);

