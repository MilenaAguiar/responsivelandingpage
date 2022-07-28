const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector ('.button')

openModal.onclick = function () {
    modal.classList.add('show');
}

closeModal.onclick = function () {
    modal.classList.remove('show');
}

const menuBotao = document.querySelector('.cabecalho-link')
const menu = document.querySelector('.cabecalho-inside-menu')

menuBotao.addEventListener('click', () =>{
    menu.classList.toggle('cabecalho-inside-menu_ativo')
})

