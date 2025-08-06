var friendList = []; //Array para almacenar los amigos
var noRepeated = []; //Array para que no salga el mismo firend dos veces


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
    let randomListIndex = Math.floor(Math.random() * friendList.length); //Generar un indice aleatorio
    return randomListIndex
}

function drawnFriend() {
    const div = document.querySelector('.input-section');
    if (friendList.length < 2) {
        alert('The list must contain at least two friends to be drawn.');
        return;
    }
    //Sortear un amigo secreto
    let secretFriend = friendList[randomIndex()];

    //Si ya se sprtio, repite la accion por favor !!!(recurción)
    if (noRepeated.includes(secretFriend)) {
        //Si todos los amigos ya han sido sorteados, mostrar un mensaje
        if (noRepeated.length === friendList.length) {
            alert('All friends have already been drawn!');
            return;
        }
        return drawnFriend();
    }

    //Agregar el amigo secreto al array de no repetidos
    noRepeated.push(secretFriend);

    //Crear un elemento h1 para mostrar el amigo secreto
    const p = document.createElement('h1');
    p.textContent = `Your secret friend is ${secretFriend}`;
    div.appendChild(p);
}




console.log(friendList)//Para ver el contenido del array en la consola

