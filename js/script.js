import modalWindow from "./modules/popUp.js";
import toggleMenu from "./modules/burgerMenu.js";
// import { closeMenu } from "./modules/burgerMenu.js";

window.addEventListener("DOMContentLoaded", () => {
  // Initialize burger menu module

  document.querySelector(".burger").addEventListener("click", () =>
    toggleMenu({
      burgerSelector: ".burger",
      navSelector: ".header__nav",
      btnSelector: "[data-closeMenu]",
    })
  );

  // Initialize pop-up modal window module
  if (document.querySelector(".contact-popUp")) {
    modalWindow({
      openSelector: "[data-openPopUp]",
      closeSelector: "[data-closePopUp]",
      parentSelector: ".contact-popUp",
    });
  }
});
