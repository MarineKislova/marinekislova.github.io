import modalWindow from "./modules/popUp.js";
import toggleMenu from "./modules/burgerMenu.js";
// import { closeMenu } from "./modules/burgerMenu.js";
import card from "./modules/data.js";
import createCards from "./modules/cards.js";
import { cards } from "./modules/cards.js";

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

  document.querySelectorAll(".project__card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  //year in footer
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  // count visitors
  const gistId = "b59ca16ceb4e7b4b792e1915c6eccff6";
  const filename = "counter.json";

  // 1. Получаем текущий счетчик
  fetch(`https://api.github.com/gists/${gistId}`)
    .then((r) => r.json())
    .then((gist) => {
      const content = JSON.parse(gist.files[filename].content);
      content.visits += 1;

      console.log("Visits:", content.visits);

      // 2. Отправляем обновленные данные обратно в gist
      return fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Тебе нужно вставить свой GitHub token!
          Authorization: "token ВСТАВЬ_СВОЙ_ТОКЕН",
        },
        body: JSON.stringify({
          files: {
            [filename]: {
              content: JSON.stringify(content, null, 2),
            },
          },
        }),
      });
    })
    .catch((err) => console.error("Error:", err));
});
