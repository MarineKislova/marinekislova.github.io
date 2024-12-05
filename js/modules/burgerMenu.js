//burger menu

function toggleMenu({ burgerSelector, navSelector, btnSelector }) {
  const burger = document.querySelector(burgerSelector);
  const nav = document.querySelector(navSelector);
  const closeMenuBtn = document.querySelectorAll(btnSelector);
  burger.classList.toggle("active");
  nav.classList.toggle("open");
  if (burger.classList.contains("active")) {
    burger.classList.add("active");
    burger.style.position = "fixed";
    burger.style.right = 3 + "px";
  } else {
    burger.style.position = "relative";
    burger.style.right = 3 + "px";
    nav.classList.remove("open");
    burger.classList.remove("active");
  }
  function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("open");
    burger.style.position = "relative";
    burger.style.right = 3 + "px";
  }
  closeMenuBtn.forEach((btn) => {
    btn.addEventListener("click", closeMenu);
  });
  // return {
  //   closeMenu: closeMenu,
  // };
}

export default toggleMenu;
