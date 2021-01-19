console.log("Hello");
// for activating the burger menu

const bugerIcon = document.querySelector("#burger-icon");
const navLinks = document.querySelector("#nav-links");

bugerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("is-active");
});
