class Card {
    constructor(id , name){
        this.id = id
        this.name = name
    }
    details(){
        console.log(`Card id : ${this.id} , Name : ${this.name}`);
        
    }
}


let cards = []
let names =["PanCard","AadharCard","Passport","GymCard","collegeId"]

for(let i = 0 ; i< 10;i++){
    let n = names[Math.floor(Math.random()*names.length)]
    let num = Math.floor(Math.random()*10000000)
    cards.push(new Card(num,n))
}


for(let i = 0 ; i< 10;i++){
    
    cards[i].details()
}