const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
})
