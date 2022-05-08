import { client_services } from "./service/client-service.js";

const sectorDeContactos = document.getElementById('redes-sociales')     // Traemos a una variable el elemento del DOM identificado por el id redes-sociales
const sectorDeSkills = document.getElementById('sector-skills') 
const sectorDeHobbies = document.getElementById('sector-hobbies')
const sectorDeFormacion = document.getElementById('sector-formacion')
const sectorDeProyectos = document.getElementById('sector-proyectos')
function crearElemento(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `<img class=${parametro.class} src=${parametro.img}
    alt=""><p href="#">${parametro.nombre}</p>`
}


function elementoFormacion(parametro){                              // Creamos una función que crea el elemento tal cual queremos esté en el DOM    
    return `
    <img class="${parametro.class}" src=${parametro.img} alt="">
    <div class="itemFormacion">
        <p class="subtitulo">${parametro.nombre}</p>
        <div class="instituto">
            <p class="instituto-nombre">${parametro.institucion}</p>
            <p class="duracion">${parametro.duracion}</p>
        </div>
        <p class="description">${parametro.description}</p>
    </div>
    `
}

function crearElementoProyecto(parametro){
    return `
    <img class="img-proyecto" src=${parametro.image}>
    <div class="item-proyecto">
        <p class="subtitulo">${parametro.nombre}</p>    
        <p class="subtitulo-2">${parametro.description}</p>
    </div>
    `
}

async function crearElementosContactos(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(contacto => {                                             // Por cada elemente en el Array de redes
        let li = document.createElement('li')                               // va a crear un elemento de tipo li
        li.innerHTML = crearElemento(contacto)                      // va a agregar el resuitado de la función crearEllemento
        sectorDeContactos.appendChild(li)                                   // y finalmente lo agrega como hijo del sector de contactos en el DOM 
    });
}

async function crearElementosSkills(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-skills')
        li.innerHTML = crearElemento(skill)
        sectorDeSkills.appendChild(li)
    });
}

async function crearElementosHobbies(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-hobbies')
        li.innerHTML = crearElemento(skill)
        sectorDeHobbies.appendChild(li)
    });
}




async function crearElementoFormacion(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(skill =>{
        let li = document.createElement('li')
        li.classList.add('lista-formacion')
        li.innerHTML = elementoFormacion(skill)
        sectorDeFormacion.appendChild(li)
    });
}

async function crearElementoExperienciaLaboral(resource) {
    const data = await client_services.get_resources()
    data[resource].forEach(proyecto => {
        let li = document.createElement('li');
        li.classList.add('lista-proyectos');
        li.innerHTML = crearElementoProyecto(proyecto)
        sectorDeProyectos.appendChild(li)
    })
}

crearElementosContactos("redes")
crearElementosSkills("skills")
crearElementosHobbies('hobbies')
crearElementoFormacion('formacion')
crearElementoExperienciaLaboral('proyectos')





const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('.nav')
toggleButton.addEventListener('click',()=>{
    nav.classList.toggle('toggle_visible')
})