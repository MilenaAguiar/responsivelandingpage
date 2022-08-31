/* -----------
    Modal
--------------*/
const modal = document.querySelector('.modal-wrapper')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.button')

openModal.onclick = function () {
    modal.classList.add('show');
}

closeModal.onclick = function () {
    modal.classList.remove('show');
}

/* -----------
    Menu
--------------*/
const menuBotao = document.querySelector('.cabecalho-link')
const menu = document.querySelector('.menu-wrapper')

menuBotao.addEventListener('click', () => {
    menu.classList.toggle('menu-wrapper_ativo')
})


const menuScreen = document.querySelector('.menu-scrim')
menuScreen.addEventListener('click', () => {
    menu.classList.toggle('menu-wrapper_ativo')
})

const listaDosLinksDoMenu = document.querySelectorAll('.menu-item-link')
listaDosLinksDoMenu.forEach(itemLista => {
    itemLista.addEventListener('click', () => {
        menu.classList.toggle('menu-wrapper_ativo')
    })
});