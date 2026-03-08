class Player {

    constructor(obj = {}) {
        this.name = obj.name || "Unknown"
        this.score = obj.score  || 100
        this.nickname = obj.nickname || "Cat" 
    }
    start() {
        console.log("Game Started !!")
    }
    exit() {
        console.log("Game Exited ! Bye Bye ! "+this.name)
    }
    details() {
        console.log("Name : "+ this.name)
        console.log("Score : "+ this.score)
        console.log("NickName : "+ this.nickname)
    }

}


var p1 = new Player({name :"rudra",score : 2000})
p1.details()


// class Music 
// methods - start ,pause , details 


class Music {
    static total =0
    constructor(name, file, singer, description = "No Description 🙅🏻") {
        this.name = name
        this.file = file
        this.singer = singer
        this.description = description
        Music.total += 1
    }

    details() {
        console.log("Song Name : "+this.name)
        console.log("Singer : " + this.singer)
        console.log("Description :"+this.description)
    }

}


// Shop class , Bird class , Student class

playlist = [
new Music("ABCD", "xyz", "Shreya"),
new Music("Har", "xyz", "Sonu"),
new Music("Ka", "xyz", "Atif")
]


console.log("Total Songs : "+Music.total)
