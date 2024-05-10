//Clases:
class Contacto {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

//Funciones:
function agregarContacto(contacto){
    //Creo el elemento de la lista:
    const listItem = document.createElement("li");
    listItem.textContent = `${contacto.nombre} - ${contacto.email}`;

    listaContactos.appendChild(listItem);

    guardarContacto(contacto);
}

function guardarContacto(contacto){
    //Traigo los contactos del almacenamiento local:
    let contactos = obtenerContactos();
    contactos.push(contacto);

    //Guardo los contactos en el almacenamiento local:
    localStorage.setItem("contactos", JSON.stringify(contactos));
}

function obtenerContactos() {
    //Traigo los elementos del almacenamiento local:
    let contactos = localStorage.getItem("contactos");

    //Verifico si hay datos en el almacenamiento local:
    if(contactos !== null){
        return JSON.parse(contactos);
    } else {
        return [];
    }
}

function renderizarContactos(contacto){
    const listItem = document.createElement("li");
    listItem.textContent = `${contacto.nombre} - ${contacto.email}`;

    listaContactos.appendChild(listItem);
}

function cargarContactos() {
    //Traigo los elementos del almacenamiento local:
    let contactos = obtenerContactos()
    
    for (const contacto of contactos) {
        renderizarContactos(contacto);
    }
}

//Programa:
const formContacto = document.getElementById("formContacto");
const listaContactos = document.getElementById("listaContactos");

cargarContactos();

formContacto.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    const contacto = new Contacto(nombre, email);

    agregarContacto(contacto);

    formContacto.reset();
});

