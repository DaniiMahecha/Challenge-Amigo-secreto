// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var friendList = [];

function addFriend(){
    //Si el espacio esta vacio lanzar un alert sino
    let friend = document.getElementById("amigo");
    let friendName = friend.value.trim()
    
    if(friendName != ''){
        friendList.push(friendName); //Agregar el dato al Array 
        friend.value = ''; //Limpiar el Array  
    } else {
        alert('Indique un nombre');            
    }  
}

console.log(friendList)
    
    
