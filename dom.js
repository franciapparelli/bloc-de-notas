//Código de DOM implementado por los docentes.

/**
 * Obtiene el texto ingresado en el input "Usuario", sección "Login".
 * @returns String que contiene el nombre de usuario.
 */
function getUser() {
    return document.getElementById("username").value;
}

/**
 * Obtiene el texto ingresado en el input "Contraseña", sección "Login".
 * @returns String que contiene la contraseña ingresada por el usuario.
 */
function getPassword() {
    return document.getElementById("password").value;
}

/**
 * Si se está mostrando la pantalla de login la oculta y muestra la de notas. Y viceversa.
 */
function changeScreen() {
    const notepad = document.getElementById("notepad");
    const login = document.getElementById("login");
    if(notepad.style.display !== "none") {
        notepad.style.display = "none";
        login.style.display = "";
    }
    else {
        notepad.style.display = "";
        login.style.display = "none";
    }
}

/**
 * Obtiene el texto ingresado en el input "Título de la nota", sección "Ingreso de nueva nota".
 * @returns String que contiene el título de la nota.
 */
function getNoteTitle() {
    return document.getElementById("title").value;
}

/**
 * Obtiene el texto ingresado en el input "Contenido", sección "Ingreso de nueva nota".
 * @returns String que contiene el contenido de la nota.
 */
function getNoteContent() {
    return document.getElementById("content").value;
}

/**
 * Obtiene el texto ingresado en el input "Categoría", sección "Ingreso de nueva nota".
 * @returns String que contiene la categoría de la nota.
 */
function getNoteCategory() {
    return document.getElementById("category").value;
}

/**
 * Obtiene el número ingresado en el input "Buscar por ID de nota", sección "Búsquedas y modificaciones".
 * @returns Número entero con el ID de la nota que se solicita.
 */
function getSearchID() {
    return document.getElementById("searchByID").value;
}

/**
 * Obtiene el texto ingresado en el input "Buscar por contenido", sección "Búsquedas y modificaciones".
 * @returns String que contiene el pedazo de texto que se busca esté contenido en la nota.
 */
function getSearchContent() {
    return document.getElementById("searchByContent").value;
}

/**
 * Dibuja una nueva nota en la parte inferior de la pantalla con DOM a partir de los datos ingresados.
 * @param {String} title Título de la nueva nota.
 * @param {String} content Contenido de la nueva nota.
 * @param {String} category Categoría de la nueva nota.
 * @param {Number} id ID de la nueva nota.
 */
function drawNewNote(title, content, category, id) {
    document.getElementById("allNotes").innerHTML += `        
        <div class="border" id="noteID${id}">
            <h5>Nota Nº: ${id}</h5>
            <h3 id="noteTitle${id}">${title}</h4>
            <p id="noteContent${id}">${content}</p>
            <br>
            <h5 id="noteCategory${id}">${category}</h5>
        </div>
        <br>`;
}

/**
 * Elimina mediante DOM la nota que corresponda al ID ingresado.
 * @param {Number} id ID de la nota a eliminar.
 */
function eraseNoteUI(id) {
    document.getElementById(`noteID${id}`).remove();
}

/**
 * Modifica los datos de una nota ya dibujada mediante DOM a partir de los datos ingresados.
 * @param {String} title Nuevo título de la nota.
 * @param {String} content Nuevo contenido de la nota.
 * @param {String} category Nueva categoría de la nota.
 * @param {Number} id ID de la nota a modificar.
 */
function modifyNoteUI(title, content, category, id) {
    document.getElementById(`noteTitle${id}`).innerHTML = title;
    document.getElementById(`noteContent${id}`).innerHTML = content;
    document.getElementById(`noteCategory${id}`).innerHTML = category;
}