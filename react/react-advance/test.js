Object.prototype.myEntries = function () {
    if(this==null) return []
    let arr= []
    for(let key of Object.keys(this)){
            arr.push([key,this[key]])
    }
    return arr
    
}





let obj = {
    name: "Rudra",
    age: 22
}

console.log(
obj.myEntries());
