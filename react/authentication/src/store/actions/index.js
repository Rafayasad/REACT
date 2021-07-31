function storeUser(user){
    console.log("user from action",user);
    return{
        type: 'ADD_USER',
        data: user
    }
}
function removeUser(){
    return{
        type:'REMOVE_USER',
    }
}

export {
    storeUser,
    removeUser
}