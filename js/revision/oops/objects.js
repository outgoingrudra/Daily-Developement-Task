const car = {
    model : "Mustang",
    color : "Red",
    year : 2023,
    name : "Rudra",
    drive : function(){
        console.log("Driving .. "+this.model);
    },
    Name : function(){
        console.log(this.name);
        
    }
}

console.log(car.model);
car.drive()
car.Name()

let fn  = car.Name
fn()
