let abrir = document.querySelector('.hamb')
let cerrar = document.querySelector('.btn-danger')
let nav = document.querySelector('nav')
let navMobile= document.querySelector('.nav-mobile')
let cv = document.querySelector('.cv') 

let liInicio = document.querySelector('.ini')
let sobreMi = document.querySelector('.sobreMi')
let herramientas= document.querySelector('.herramientas')
let contacto = document.querySelector('.contacto-li')

let inicio = document.querySelector('.inicio')


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

/* inicio.addEventListener('click', close) */
