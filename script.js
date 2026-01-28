const openMenuBtn = document.querySelector("#menu-open-btn");
const closeMenuBtn = document.querySelector("#menu-close-btn");
const nav = document.querySelector("#header-slider");
const menuOverlay = document.querySelector("#menu-overlay")
const navList = document.querySelector(".header__unordered")

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.setAttribute('aria-expanded', 'true');
    menuOverlay.removeAttribute('hidden')
    nav.style.visibility = 'visible'; /* use visibility instead of hidden attribute becuase transisiton animation doesnt work when display is changed */
    nav.classList.add('open')
    setTimeout(() => {
        closeMenuBtn.focus()
    }, 500)
})

closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.setAttribute('aria-expanded', 'false');
    menuOverlay.setAttribute('hidden', '');
    nav.classList.remove('open');
    setTimeout(() => {
        nav.style.visibility = 'hidden';
        openMenuBtn.focus()
    }, 300);
})

menuOverlay.addEventListener('click', () => {
    openMenuBtn.setAttribute('aria-expanded', 'false');
    nav.style.visibility = 'hidden';
    nav.classList.remove('open');
    menuOverlay.setAttribute('hidden', '');
    setTimeout(() => {
        openMenuBtn.focus()
    }, 500);
})