// navbar responsiveness
window.navToggle = function (x) {
  var menu = document.getElementsByClassName("nav__links")[0];
  menu.classList.toggle("responsive");
  x.classList.toggle("open");
}