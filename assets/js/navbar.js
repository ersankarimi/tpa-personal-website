// set toggle display navbar
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerMenu.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");
  navList.style.top = 0;
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  navList.style.top = "-1000px";
  document.body.style.overflow = "auto";
});
