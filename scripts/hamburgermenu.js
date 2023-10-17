const hamburgerMenu = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
});