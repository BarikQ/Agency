document.addEventListener("DOMContentLoaded", function (event) {
  let menuButtons = document.querySelectorAll(".menu-burger");
  let menuCheckbox = document.querySelector(".overlay-checkbox");
  let pageBody = document.body;

  menuButtons.forEach(element => {
    element.addEventListener('click', (event) => {
      menuCheckbox = document.querySelector(".overlay-checkbox");

      if (!menuCheckbox.checked) {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
      } else {
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
      }
    });
  });
});