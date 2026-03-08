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