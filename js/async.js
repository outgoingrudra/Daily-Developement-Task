

function user(getItems){
    console.log("USer Details")
  getItems(user ,deleteItems)
}

function getItems(user, deleteItems){
    console.log("User items")
    deleteItems(user)
}

function deleteItems(user){
    console.log("Item deleted ");
    
}

c
//[user -> getItems -> deleteItems]

