const cards = document.querySelector(".my-projects__items");

function createCards(cardsData) {
  //create cards
  cardsData.forEach((card) => {
    //create card item
    const cardItem = document.createElement("div");
    cardItem.classList.add("my-projects__item");
    cardItem.setAttribute("data-category", card.category);
    cards.appendChild(cardItem);

    //содержимое карточки
    //card tittle
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("my-projects__item-title");
    cardTitle.textContent = card.title;
    cardItem.appendChild(cardTitle);

    //create card image
    const cardImage = document.createElement("img");
    cardImage.classList.add("my-projects__image");
    cardImage.src = card.image;
    cardImage.alt = card.alt;
    cardItem.appendChild(cardImage);

    //card description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("my-projects__description");
    cardItem.appendChild(cardDescription);
    cardDescription.textContent = card.description;
    //card techonology
    const cardTechnologies = document.createElement("ul");
    cardTechnologies.classList.add("my-projects__technologies");
    cardTechnologies.textContent = card.technologies;
    cardItem.appendChild(cardTechnologies);

    //card  view more button
    const cardViewMoreBtn = document.createElement("button");
    cardViewMoreBtn.classList.add("my-projects__view-more");
    cardViewMoreBtn.textContent = "View more >";
    cardItem.appendChild(cardViewMoreBtn);

    cardViewMoreBtn.addEventListener("click", () => {
      // Показываем модальное окно с подробным описанием проекта
      document.querySelector(".modal-projects__title").textContent = card.title;
      document.querySelector(".modal-projects__image").src = card.image;
      document.querySelector(".modal-projects__image").alt = card.alt;
      document.querySelector(".modal-projects__description").textContent =
        card.fullDescription;
      document.querySelector(".modal-projects__technologies").innerHTML = ""; // Очищаем старые технологии
      document.querySelector(
        ".modal-projects__technologies"
      ).textContent = `Technologies Used: ${card.technologies}`; // Заполняем новые технологии
      //   card.technologies.forEach((tech) => {
      //     const li = document.createElement("li");
      //     li.textContent = tech;
      //     document.querySelector(".modal-projects__technologies").appendChild(li);
      //   });
      document.querySelector(".modal-projects__link").href = card.link;
      document.querySelector(".modal-projects__code-link").href = card.codeLink;

      // Показываем модальное окно
      document.querySelector(".modal-projects").style.display = "flex";
    });
  });
  // Логика закрытия модального окна
  document
    .querySelector(".modal-projects__close")
    .addEventListener("click", () => {
      document.querySelector(".modal-projects").style.display = "none";
    });

  // Закрытие при клике вне модального окна
  window.addEventListener("click", (event) => {
    if (event.target === document.querySelector(".modal-projects")) {
      document.querySelector(".modal-projects").style.display = "none";
    }
  });
}

export default createCards;
export { cards };
