// "use strict";

// timer 5 minutes
function countdown(minutes) {
  var seconds = 60;
  var mins = minutes;
  function tick() {
    //This script expects an element with an ID = "counter". You can change that to what ever you want.
    var counter = document.getElementById("timer");
    var current_minutes = mins - 1;
    seconds--;
    counter.innerHTML =
      current_minutes.toString() +
      ":" +
      (seconds < 10 ? "0" : "") +
      String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      if (mins > 1) {
        countdown(mins - 1);
      }
    }
  }
  tick();
}

countdown(5);

// faq section

let accItem = document.getElementsByClassName("faq__item");
let accHD = document.getElementsByClassName("faq__question");
console.log(accItem);
console.log(accHD);

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "faq__item close";
  }
  if (itemClass == "faq__item close") {
    this.parentNode.className = "faq__item open";
  }
}

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

// sliders
$(document).ready(function () {
  // events
  $(".about__items").slick({
    slidesToScroll: 3,
    slidesToShow: 5,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".result__items").slick({
    slidesToScroll: 3,
    slidesToShow: 5,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".program__items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: "unslick",
      },
    ],
  });


  $(".reviews__items").slick({
    slidesToScroll: 3,
    slidesToShow: 2,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  });
});


