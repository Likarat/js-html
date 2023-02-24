const email = document.querySelector('.navbar-email');
const menuPc = document.querySelector('.desktop-menu');
const navHamburguesa = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

email.addEventListener('click', sesion);
navHamburguesa.addEventListener('click', sesionMobile)

function sesion () {
    menuPc.classList.toggle('inactive')
}
function sesionMobile (){
    menuMobile.classList.toggle('inactive')
}