const contactLink = document.querySelector('.navigation__contact-link')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.close-button')

modal.addEventListener('submit', (event) => event.preventDefault())

const openModal = (event) => {
    event.preventDefault()
    modalContainer.classList.add('modal-container--visible')
}

const closeModal = () => modalContainer.classList.remove('modal-container--visible')

contactLink.addEventListener('click', openModal)

closeModalButton.addEventListener('click', closeModal)