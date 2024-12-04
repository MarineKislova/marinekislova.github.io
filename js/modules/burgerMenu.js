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
    burger.style.top = 25 + "px";
    burger.style.right = 25 + "px";
    burger.style.bottom = 25 + "px";
  }
  function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("open");
    burger.style.position = "relative";
    burger.style.top = 0 + "px";
    burger.style.right = 0 + "px";
    burger.style.bottom = 0 + "px";
  }
  closeMenuBtn.forEach((btn) => {
    btn.addEventListener("click", closeMenu);
  });
  // return {
  //   closeMenu: closeMenu,
  // };
}

export default toggleMenu;
