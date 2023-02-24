const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

email.addEventListener('click', sesion);

function sesion () {
    menu.classList.toggle('inactive')


}