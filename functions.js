const notes = []
const users = []
let idActiveUser = null

users.push(new User("Franco", "1234"))
users.push(new User("Joaquin", "5678"))
notes.push(new Note("Hacer nota de ejemplo", "Con id, titulo, contenido, persona, usuarios, categoria e historial", [idActiveUser], "TP1"))
//notes[0].newChange Modification(1, notes[0].id, notes[0].content, notes[0].title, notes[0].category))

console.log(notes, users)

function userExists(name, password) {
    let i = 0;
    while (i < users.length && users[i].name != name) {
        i++;
    }

    console.log(users)

    if (i == users.length){
        return -1
    } 

    else if (users[i].name == name && users[i].password == password) {
        return users[i].id;
    }

    else if (users[i].name == name && users[i].password != password) {
        return 0
    }
    return -1
}

function logIn(name, password) {
    let userId = userExists(name, password);
    if (userId >= 1) {
        changeScreen()
        idActiveUser = userId
        return true
    }
    else if (userId == 0) {
        return alert("La contraseña es Incorrecta")
    }

    else return alert("No existe el usuario")
}

function registerNewUser(name, password) {
    console.log(name)
    console.log(password)
    userExist = userExists(name, password)
    if ( userExist == 0) {
        return alert("El nombre ya esta en uso")
    } else if (userExist == 1){
        return alert("El nombre y la contraseña ya estan en uso")
    }
    else {
        
        users.push(new User(name, password))
        changeScreen()
        idActiveUser = user_id
    }

}

function addNewNote(title, content, category) {
    if (notes.push(new Note(title, content, idActiveUser, category))) {
        drawNewNote(title, content, category, note_id)
        return console.log(notes[notes.length - 1])
    }
    else {
        return console.log(-1)
    }
}

function filterNoteByID(id) {
    let i = 0;
    while (i < notes.length && notes[i].id != id) {
        i++;
    }

    console.log(notes[i])
    return i
}

function changeNote(id, title, content, category) {
    if (users[filterNoteByID(id)].newChange(title, content, idActiveUser, category)){
        return id
    } return -1
}