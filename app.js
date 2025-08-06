var friendList = []; //Array para almacenar los amigos


function addFriend(){ 
    let friend = document.getElementById("amigo");
    let friendName = friend.value.trim() //Obtener el valor del input y eliminar espacios al inicio y al final
    
    if(friendName != ''){
        if(friendList.includes(friendName)){
            alert('This name is already in the list')
        } else {
            friendList.push(friendName); //Agregar el dato al Array 
            friend.value = ''; //Limpiar el Array  
            actualizeFriendList(); //Llamar a la funcion que actualiza la lista de amigos
        }
    } else {
        alert('Write your name');  //Si el espacio esta vacio lanzar un alert s         
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


function randomIndex(){
    let randomListIndex = Math.floor(Math.random() * friendList.length);
    return randomListIndex
}

function drawnFriend(){
    const div = document.querySelector('.input-section') 
    if(friendList.length < 2 ){
        alert('The list must contain at least two friends to be drawn.');
    } else {
        let secretFriend = friendList[randomIndex()];
        console.log(secretFriend);
        const p = document.createElement('h1');
        p.textContent = `You're secret friend is ${secretFriend}`;
        div.appendChild(p);
    }

}



console.log(friendList)

