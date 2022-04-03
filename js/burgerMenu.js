const openBurgerButton = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");
const closeBurgerButton = document.querySelector(".close");

function openBurgerMenu() {
  navBar.style.transform = "translateY(0)";
}

function closeBurgerMenu() {
  navBar.style.transform = "translateY(-100%)";
}

openBurgerButton.addEventListener("click", openBurgerMenu);
closeBurgerButton.addEventListener("click", closeBurgerMenu);
