class Car{
    name ="default"
    seat = 2
    mode = "manual"
    location = "Kolkata"
    features = ["100km/hr", "bluetooth"]
    image = "https://imageofCar"
    static totalCars = 0
    constructor(obj = {}) {
        if(obj.name)  this.name = obj.name
        if (obj.seat) this.seat = obj.seat
        if (obj.mode) this.mode = obj.mode 
        if (obj.location) this.location = obj.location
        if (obj.image) this.image = obj.image
        Car.totalCars += 1
        
    }
    get carName() {
        return this.name 
    }
    set carName(n) {
        this.name = n
    }
    details() {
        console.log("car name : "+this.name)
        console.log("car seat : "+this.seat)
        console.log("car mode : "+this.mode)
        console.log("car location : "+this.location)
    }

}

let car1 = new Car({ name: "BMW X5", mode: "manual", location: "Los Angeles", seat: 4 })

console.log(car1.carName)
car1.carName = "Mercedes"

console.log(car1.carName)




class Animal {

    color = "black"
    food = "grass"
    constructor(color, food) {
        this.color = color
        this.food = food
    }

    eat() {
        console.log("Animal is eating !")
    }
    sleep() {
        console.log("Animal is sleeping !")
    }


}
class Bird{

    fly() {
        console.log("Bird is flying !!")
    }


}
class Lion extends Animal{
    constructor(color, food) {
        super(color,food)
    }

    roar() {
        console.log("Lion is roaring !")
    }
    hunt() {
        console.log("Lion is hunting !!")
    }

}

let l1 = new Lion("brown","flesh")
l1.eat()
l1.hunt()
console.log(l1.color)