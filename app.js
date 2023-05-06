const BtnProjects = document.querySelector('.btn-project')
const BtnModalProjectClose = document.querySelector('.project-btn-close')
const ProjectsModal = document.querySelector('.modal-project-container')
const BtnContact = document.querySelector('.btn-contact')
const ContactModal = document.querySelector('.modal-contact-container')
const ContactBtnClose = document.querySelector('.modal-btn-close-contact')
const BtnEmail = document.querySelector('#email-btn')


const ShowModalContact = () => {
    ContactModal.classList.add('modal-active')
}
BtnProjects.addEventListener('click', () => {
    ProjectsModal.classList.add('modal-active')
})
BtnModalProjectClose.addEventListener('click', () => {
    ProjectsModal.classList.remove('modal-active')
})
BtnContact.addEventListener('click', ShowModalContact)
BtnEmail.addEventListener('click', ShowModalContact)
ContactBtnClose.addEventListener('click', () => {
    ContactModal.classList.remove('modal-active')
})