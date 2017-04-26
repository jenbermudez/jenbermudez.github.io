var $ = require('jquery.scrollto')
// navbar responsiveness
window.navToggle = function (x) {
  var menu = document.getElementsByClassName("nav__links")[0];
  menu.classList.toggle("responsive");
  x.classList.toggle("open");
}

window.smoothScroll = function (selector, x) {
  $(window).scrollTo(selector, 800);
  if(x) {
    var hamburger = document.getElementsByClassName("hamburger")[0];
    window.navToggle(hamburger);
  }
}