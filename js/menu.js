document.addEventListener("DOMContentLoaded", function () {
  const menuY = document.querySelector(".header__menu__y");
  const menuX = document.querySelector(".header__menu__x");
  const navListUl = document.querySelector(".navListUl");

  menuY.addEventListener("click", function () {
    menuY.style.display = "none";
    menuX.style.display = "block";
    navListUl.style.display = "block";
    navListUl.style.transform = "scaleY(1)";
    navListUl.style.opacity = "1";
  });

  menuX.addEventListener("click", function () {
    menuX.style.display = "none";
    navListUl.style.display = "none";
    menuY.style.display = "block";
    navListUl.style.transform = "scaleY(0)";
    navListUl.style.opacity = "0";
  });
});
