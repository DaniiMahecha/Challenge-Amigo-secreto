<h1>🎁 Secret Friend Generator</h1>
<img width="493" height="399" alt="image" src="https://github.com/user-attachments/assets/6db13f0e-0031-4a90-8e36-04a578fa4213" />



<p align="left">
<img src="https://img.shields.io/badge/STATUS-FINISHED-orange">
</p>

A web application to organize secret friend gift exchanges in an easy and fun way.

## 🏆 Learning Badge
<h2>Oracle ONE & Alura Challenge Completed</h2>
<img width="500" height="500" alt="ff043987-239b-4661-bdb1-7f4ca6092c48" src="https://github.com/user-attachments/assets/11c18b91-1857-4754-bc76-c7bceef42c1e" />


## 📋 Description

Secret Friend Generator is a web application that allows you to create participant lists and randomly draw secret friends. Users can add names to a list and the application takes care of selecting a secret friend without repetitions until everyone has been drawn.
This project is part of the Secret Friend Challenge by Alura and Oracle ONE, designed to practice and improve JavaScript skills, DOM manipulation, and algorithms.

## ✨ Features 

- ➕ Add participants: Add names to the friend list
- 🎲 Random draw: Random selection without duplicates
- 🚫 Prevent repetitions: No repeated friend until completing the round
- 🔄 Auto restart: Option to start a new draw
- ✅ Data validation: Verification of duplicate names and empty fields
- 📱 Intuitive interface: Simple and easy-to-use design


## 🚀 Technologies Used

- HTML5: Application structure
- CSS3: Styles and responsive design
- JavaScript (Vanilla): Application logic

    - DOM manipulation
    - Random selection algorithms
    - Array handling
    - Form validation
 <img width="256" height="150" alt="HTML5_CSS_JavaScript" src="https://github.com/user-attachments/assets/b914e5b5-5069-41b4-b974-c87578b5f599" />



## 🔧 Functionalities

### Add friends
```javascript
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
```

### Draw a friend 
```javascript
function drawFriend(){
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
```

## 💻 Installation and Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tu-usuario/secret-friend-generator.git
   ```

2. **Navigate to project directory**:
   ```bash
   cd secret-friend-generator
   ```

3. **Open the HTML file in your browser**:
   ```bash
   open index.html
   # o simplemente haz doble clic en el archivo
   ```

## 🎮 How to Use

1. **Add Participants**:
   - Type a name in the text field
   - Click "Add" or press Enter
   - Repeat until adding all participants (minimum 2)
<img width="418" height="139" alt="image" src="https://github.com/user-attachments/assets/e4e54596-80cc-4560-adbf-c94d8f9af663" />


2. **Draw Secret Friend**:
   - Click "Draw Friend"
   - The application will show who your secret friend is
   - Continue drawing until everyone has an assignment
  <img width="407" height="201" alt="image" src="https://github.com/user-attachments/assets/533d2a1a-7fe2-4f16-8a49-cc619cb3a0af" />


3. **Reset**:
   - Once the draw is complete, you can reset for a new round

## 📁 Proyect structure 

```
challenge-amigo-secreto/
│
├── index.html
├── style.css
├── app.js
├── assets/
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md

```

## 🧠 Implemented Algorithms

- **Random selection**: Using `Math.random()` to generate random indexes
- **Duplicate control**: Auxiliary array to avoid repetitions
- **Input validation**: Data verification before processing

## 🎯 Project Challenges

This project allowed me to practice:

- ✅ JavaScript array manipulation
- ✅ Random number generation
- ✅ DOM manipulation
- ✅ Form validation
- ✅ Event handling
- ✅ Flow control algorithms


## 🔄 Possible Improvements

 - [ ] Save lists in localStorage
 - [ ] Export results to file
 - [ ] Transition animations
 - [ ] Dark mode
 - [ ] Paired draw (round trip)
 - [ ] Previous draw history

## 👨‍💻 Author

**Daniel Felipe Mahecha Peña**
- GitHub: [DaniiMahecha](https://github.com/DaniiMahecha)
- LinkedIn: [Daniel Felipe Mahecha Peña](www.linkedin.com/in/daniel-felipe-mahecha-peña)

## 🙏 Acknowledgments

- **Alura** y **Oracle ONE**  for the challenge and learning opportunity
<img width="561" height="230" alt="aluraoracle" src="https://github.com/user-attachments/assets/abf74425-38c4-4928-84d2-ff9d997fca86" />

---

⭐ If you liked this project, give it a star on GitHub!

## 📱 Demo

Play: [Secret Friend Generator](https://challenge-amigo-secreto-blue.vercel.app)

*Ready to organize your next gift exchange? Try Secret Friend Generator!*
