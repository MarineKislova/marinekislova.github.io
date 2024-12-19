import modalWindow from "./modules/popUp.js";
import toggleMenu from "./modules/burgerMenu.js";
// import { closeMenu } from "./modules/burgerMenu.js";
import card from "./modules/data.js";
import createCards from "./modules/cards.js";
import{cards} from "./modules/cards.js";

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

  // Filter projects by category
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      cards.querySelectorAll(".my-projects__item").forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });

      // Highlight active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // project cards

  if (document.querySelector(".my-projects__container")) {
    createCards(card);
  }
});
