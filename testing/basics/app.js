let users = [{
    name : "Rudra" , age : 21
},{
    name :"Sampa",age:20
},{
    name:"virat",age:36
}]


function SortByAge(){
    let sortedData = users.sort((a,b)=> a.age - b.age)
    return sortedData
}


module.exports = {SortByAge}
