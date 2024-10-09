const menuOpen = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

function close() {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
  menuOpen.src = "assets/images/icon-menu.svg";
}

menuOpen.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    menuOpen.src = "assets/images/icon-menu-close.svg";
  } else close();
});

overlay.addEventListener("click", close);
