const menu = document.querySelector(".mobile__menu");
const menuLinks = document.querySelector(".navbar__container");

menu.addEventListener("click", mobileMenu);

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("is-active");
};


  