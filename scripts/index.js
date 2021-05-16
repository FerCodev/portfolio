let abrir = document.querySelector('.hamb')
let cerrar = document.querySelector('.btn-danger')
let nav = document.querySelector('nav')
let navMobile= document.querySelector('.nav-mobile')
let dom = document.querySelector('body')
let cv = document.querySelector('.cv') 

let liInicio = document.querySelector('.ini')
let sobreMi = document.querySelector('.sobreMi')
let herramientas= document.querySelector('.herramientas')
let contacto = document.querySelector('.contacto-li')


function open(e){
    e.preventDefault()
    nav.classList.add("ocultar")
    navMobile.classList.remove("ocultar")
    return
}

function close(){
    navMobile.classList.add("ocultar")
    nav.classList.remove("ocultar")
    return
}

abrir.addEventListener('click', open)

cerrar.addEventListener('click', close)
liInicio.addEventListener('click', close)
sobreMi.addEventListener('click', close)
herramientas.addEventListener('click', close)
contacto.addEventListener('click', close)
cv.addEventListener('click', close)

const cerrarDom = () => {
    let contacto = document.querySelector('.contacto')
    let banner= document.querySelector('.banner')
    let carousel = document.querySelector('.carousel')
    let sobreMi = document.querySelector('.sobremi')
    let footer = document.querySelector('footer')
    let inicioContenedor = document.querySelector('.inicio_contenedor')

    contacto.addEventListener('click', close)
    banner.addEventListener('click', close)
    carousel.addEventListener('click', close)
    sobreMi.addEventListener('click', close)
    footer.addEventListener('click', close)
    inicioContenedor.addEventListener('click', close)
    
}
cerrarDom()


//PRIMER CODIGO (ANTES DE OPTIMIZAR)

/* abrir.addEventListener('click', (e)=>{
    e.preventDefault()
    nav.classList.add("ocultar")
    navMobile.classList.remove("ocultar")
    console.log('diste click en abrir')
}) */

/* cerrar.addEventListener('click', ()=>{
    navMobile.classList.add("ocultar")
    nav.classList.remove("ocultar")
}) */

/* sobreMi.addEventListener('click', ()=>{
    navMobile.classList.add("ocultar")
    nav.classList.remove("ocultar")
    console.log('le diste click a sobre mi')
}) */

/* liInicio.addEventListener('click', ()=>{
    navMobile.classList.add("ocultar")
    nav.classList.remove("ocultar")
    console.log('le diste click al inicio')
}) */

/* herramientas.addEventListener('click', ()=>{
    navMobile.classList.add("ocultar")
    nav.classList.remove("ocultar")
    console.log('le diste click al contacto')
}) */
/* contacto.addEventListener('click', ()=>{
    navMobile.classList.add("ocultar")
    nav.classList.remove("ocultar")
    console.log('le diste click al contacto')
}) */
