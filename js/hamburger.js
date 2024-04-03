const paintBlue = (el, change) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  if (top >= 0 - innerHeight / 2 && top < innerHeight / 2) {
    change.classList.add("druga");
  }
};

const paintWhite = (el, change) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  if (top >= -50 && top > 0 - innerHeight / 2 && top < innerHeight / 2) {
    change.classList.remove("druga");
  }
};

function RemoveIfOnScreen(el, change) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  if (toggler.checked) {
    change.style.opacity = "1";
  } else if (top <= 0 && top > 0 - innerHeight / 2) {
    change.style.opacity = "0";
  }
  if (top < 0 - innerHeight / 2) {
    change.style.opacity = "1";
  }
}
const elements = [];

const main = document.getElementById("main_page");
const apt = document.getElementById("white_div_apt");
const obrazac = document.getElementById("contact_us");
const lokacija = document.getElementById("location");
const hamburger = document.querySelector(".menu__btn > span");
const toggler = document.getElementById("menu__toggle");

addEventListener("DOMContentLoaded", (event) => {
  paintBlue(apt, hamburger);
  paintBlue(obrazac, hamburger);
  RemoveIfOnScreen(main, hamburger);
});

addEventListener("scroll", (event) => {
  paintBlue(apt, hamburger);
  paintWhite(lokacija, hamburger);
  paintBlue(obrazac, hamburger);
  RemoveIfOnScreen(main, hamburger);
});
