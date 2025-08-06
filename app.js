var friendList = []; //Array para almacenar los amigos


function addFriend(){ 
    let friend = document.getElementById("amigo");
    let friendName = friend.value.trim() //Obtener el valor del input y eliminar espacios al inicio y al final
    
    if(friendName != ''){
        friendList.push(friendName); //Agregar el dato al Array 
        friend.value = ''; //Limpiar el Array  
        actualizeFriendList(); //Llamar a la funcion que actualiza la lista de amigos
    } else {
        alert('Indique un nombre');  //Si el espacio esta vacio lanzar un alert s         
    }  
}

function actualizeFriendList(){
    const ul = document.getElementById("listaAmigos"); //Obtener el elemento ul donde se mostraran los amigos
    ul.innerHTML = ""; //Limpiar el contenido del ul antes de agregar los amigos

    for (let i = 0; i < friendList.length; i++){ //Recorrer el Array de amigos
        const li = document.createElement('li'); //Crear un nuevo elemento li para cada amigo
        li.textContent = `${friendList[i]}`; //Asignar el nombre del amigo al contenido del li
        ul.appendChild(li); //Agregar el li al ul
    }
    

}

console.log(friendList)