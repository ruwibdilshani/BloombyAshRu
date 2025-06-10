const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.contains("open");

  if (isOpen) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }

  btn.setAttribute("aria-expanded", !isOpen);
});
