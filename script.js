const openMenuBtn = document.querySelector("#menu-open-btn");
const closeMenuBtn = document.querySelector("#menu-close-btn");
const nav = document.querySelector("#header-slider");
const menuOverlay = document.querySelector("#menu-overlay")
const navList = document.querySelector(".header__unordered")

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.setAttribute('aria-expanded', 'true');
    menuOverlay.removeAttribute('hidden')
    nav.removeAttribute('hidden')
    setTimeout(() => {
        closeMenuBtn.focus()
    }, 500)
})

closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.setAttribute('aria-expanded', 'false');
    nav.setAttribute('hidden', '')
    menuOverlay.setAttribute('hidden', '')
    setTimeout(() => {
        openMenuBtn.focus()
    }, 500)
})