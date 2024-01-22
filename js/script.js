// "use strict";

// timer 5 minutes
function countdown(minutes) {
  var seconds = 60;
  var mins = minutes
  function tick() {
      //This script expects an element with an ID = "counter". You can change that to what ever you want. 
      var counter = document.getElementById("timer");
      var current_minutes = mins-1
      seconds--;
      counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      } else {
          if(mins > 1){
              countdown(mins-1);           
          }
      }
  }
  tick();
}

countdown(5);

// // faq section

// let buttons = document.querySelectorAll(".faq__header");
// let content = document.querySelectorAll(".faq__item");

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     let index = Array.prototype.indexOf.call(buttons, button);
//     if (content[index].classList.contains("open")) {
//       content[index].classList.remove("open");
//     } else {
//       content[index].classList.add("open");
//     }
//   });
// });

// // carts show descriptions

// let btnsShowDescription = document.querySelectorAll(".show-description");
// let descriptions = document.querySelectorAll(".product__description");

// btnsShowDescription.forEach(function (button) {
//   button.addEventListener("click", function () {
//     let index = Array.prototype.indexOf.call(btnsShowDescription, button);
//     if (descriptions[index].classList.contains("show")) {
//       descriptions[index].classList.remove("show");
//       btnsShowDescription[index].classList.remove("show");
//     } else {
//       descriptions[index].classList.add("show");
//       btnsShowDescription[index].classList.add("show");
//     }
//   });
// });

// // mobile menu
const iconMenu = document.querySelector(".open-menu");
const menuBody = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

iconMenu.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("_lock");
  menuBody.classList.toggle("_active");
  iconMenu.classList.toggle("_active");
});

if (navLinks) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      document.body.classList.remove("_lock");
      menuBody.classList.remove("_active");
      iconMenu.classList.remove("_active");
    });
  });
}


// // sliders
// $(document).ready(function () {
//   // events
//   $(".calendar__slider").slick({
//     slidesToScroll: 1,
//     variableWidth: true,
//     autoplay: false,
//     infinite: true,
//     autoplaySpeed: 2000,
//   });
//   $(".reviews__slider").slick({
//     slidesToScroll: 1,
//     variableWidth: true,
//     centerMode: true,
//     autoplay: false,
//     infinite: true,
//     autoplaySpeed: 2000,
//   });

// });