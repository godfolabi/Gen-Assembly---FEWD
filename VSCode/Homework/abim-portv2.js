const menu = document.querySelector(".navbar__toggle");
const navContainer = document.querySelector(".navbar__container");


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  navContainer.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle("is-active");
      navContainer.classList.remove("active");
    }
  };
  
  menuLinks.addEventListener("click", hideMobileMenu);
  navLogo.addEventListener("click", hideMobileMenu);


