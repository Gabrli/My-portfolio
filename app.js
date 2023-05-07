const btnProjects = document.querySelector('.btn-project')
const btnModalProjectClose = document.querySelector('.project-btn-close')
const projectsModal = document.querySelector('.modal-project-container')
const btnContact = document.querySelector('.btn-contact')
const contactModal = document.querySelector('.modal-contact-container')
const contactBtnClose = document.querySelector('.modal-btn-close-contact')
const btnEmail = document.querySelector('#email-btn')


const showModalContact = () => {
    contactModal.classList.add('modal-active')
}
btnProjects.addEventListener('click', () => {
    projectsModal.classList.add('modal-active')
})
btnModalProjectClose.addEventListener('click', () => {
    projectsModal.classList.remove('modal-active')
})
btnContact.addEventListener('click', ShowModalContact)
btnEmail.addEventListener('click', ShowModalContact)
contactBtnClose.addEventListener('click', () => {
    contactModal.classList.remove('modal-active')
})
