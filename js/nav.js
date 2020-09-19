const navToggle = document.querySelector(".hamburger__container");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li a");
const section = document.querySelector("section");

const nav = () => {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.children[0].classList.toggle("open");
    links.forEach((element) => {
      element.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.children[0].classList.remove("open");
      });
    });
    // Close navigation when an item is clicked
    section.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.children[0].classList.remove("open");
    });
  });
};

export default nav;
