const menuOpen = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".close-menu");
menuOpen.addEventListener("click", function () {
  menu.classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});
menuClose.addEventListener("click", function () {
  menu.classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
