function modalWindow({ openSelector, closeSelector, parentSelector }) {
  let openModal = document.querySelectorAll(openSelector);
  let closeModal = document.querySelectorAll(closeSelector); //закомментировано для динамического формирования
  let parentModal = document.querySelector(parentSelector);

  function showModal() {
    parentModal.style.display = "block";
  }

  openModal.forEach((item) => {
    item.addEventListener("click", showModal);
  });

  function hideModal() {
    parentModal.style.display = "none";
  }

  closeModal.forEach((item) => {
    item.addEventListener("click", hideModal);
  });
  showModal();
  hideModal();

  parentModal.addEventListener("click", (e) => {
    if (e.target === parentModal) {
      hideModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      hideModal();
    }
  });
}

export default modalWindow;
