// --------------
// --------------
// Hamburger Menu
// --------------
// --------------

const hamburgerIcon = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav__links");
const logo = document.getElementById("logo");

// Toggles the menu
hamburgerIcon.addEventListener("click", () => {
   menu.classList.toggle("nav-active");
})

// Removes menu if a link is clicked
navLinks.forEach(navLinks => {
   navLinks.addEventListener("click", () => {
      menu.classList.remove("nav-active");
   });
});

// Removes menu if logo is clicked
logo.addEventListener("click", () => {
   menu.classList.remove("nav-active");
})