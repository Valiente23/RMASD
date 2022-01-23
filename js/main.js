function deslizarNav() {
  let burgerMenu = document.querySelector(".burger-bar");
  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      let navResponsive = document.querySelector(".nav__container");
      navResponsive.classList.toggle("show-nav");
    });
  }
}
function removerNav() {
  let link1 = document.querySelector(".nav__link");
  if (link1) {
    link1.addEventListener("click", () => {
      let navResponsive = document.querySelector(".nav__container");
      navResponsive.classList.remove("show-nav");
    });
  }
}
deslizarNav();
removerNav();
