var friendList = []; //Array para almacenar los amigos
var noRepeated = []; //Array para que no salga el mismo firend dos veces
const ul = document.getElementById("listaAmigos"); //Obtener el elemento ul donde se mostraran los amigos
const ul2 = document.getElementById("listaAmigos"); //Obtener el elemento ul donde se mostraran los amigos
var drawFinished = false; //Variable para controlar si el sorteo ha terminado



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
    ul.innerHTML = ""; //Limpiar el contenido del ul antes de agregar los amigos

    for (let i = 0; i < friendList.length; i++){ //Recorrer el Array de amigos
        let li = document.createElement('li'); //Crear un nuevo elemento li para cada amigo
        li.textContent = `${friendList[i]}`; //Asignar el nombre del amigo al contenido del li
        ul.appendChild(li); //Agregar el li al ul
    }
}


function randomIndex(){
    let randomListIndex = Math.floor(Math.random() * friendList.length); //Generar un indice aleatorio
    return randomListIndex
}

function drawFriend() {
    if(drawFinished) return initialConditions();
    if (friendList.length < 2) {
        alert('The list must contain at least two friends to be draw.');
        return;
    }
    //Sortear un amigo secreto
    let secretFriend = friendList[randomIndex()];

    //Si ya se sprtio, repite la accion por favor !!!(recurción)
    if (noRepeated.includes(secretFriend)) {
        //Si todos los amigos ya han sido sorteados, mostrar un mensaje
        if (noRepeated.length === friendList.length) {
            alert('All friends have already been draw!');
            initialConditions();
            return;
        }
        return drawnFriend();
    }

    //Agregar el amigo secreto al array de no repetidos
    noRepeated.push(secretFriend);

    //Crear un elemento p para mostrar el amigo secreto
    let p = document.createElement('h1');
    p.textContent = `Your secret friend is ${secretFriend}`;
    ul.innerHTML ='';
    ul2.appendChild(p);
    drawFinished = true; //Marcar que el sorteo ha terminado  
}

function initialConditions(){
    //reiniciar los arrays
    friendList = [];
    noRepeated = [];
    drawFinished = false; //Reiniciar la variable de control del sorteo
    //Limpiar la lista
    //limpiar el mensaje de salida
    ul.innerHTML = '';
    
}



console.log(friendList)//Para ver el contenido del array en la consola

