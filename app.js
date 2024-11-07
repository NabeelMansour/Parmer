// setup nav
const navBtn = document.getElementById('nav-btn')
const nav = document.getElementById('nav')
const navClose = document.getElementById('nav-close')

// show nav
navBtn.addEventListener('click', () => {
    nav.classList.add('showNav')
})
// close nav
navClose.addEventListener('click', () => {
    nav.classList.remove('showNav')
})