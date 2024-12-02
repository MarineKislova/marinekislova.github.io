import modalWindow from "./modules/popUp.js";

window.addEventListener("DOMContentLoaded", () => {
  //burger menu

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");
  function toggleMenu() {
    burger.classList.toggle("active");
    nav.classList.toggle("open");
  }
  burger.addEventListener("click", toggleMenu);

  // close menu on click nav links

  const closeMenuBtn = document.querySelectorAll("[data-closeMenu]");
  function closeMenu() {
    nav.classList.remove("open");
    burger.classList.remove("active");
  }

  closeMenuBtn.forEach((btn) => {
    btn.addEventListener("click", closeMenu);
  });

  // Initialize pop-up modal window module
  modalWindow({
    openSelector: "[data-openPopUp]",
    closeSelector: "[data-closePopUp]",
    parentSelector: ".contact-popUp",
  });
});
