let barIcon = document.getElementById('barIcon')
let navbar = document.getElementById('navbar')
let navX = document.getElementById('navX')

barIcon.addEventListener('click', () => {
    navbar.classList.add('active')
})
navX.addEventListener('click', () => {
    navbar.classList.remove('active')
})