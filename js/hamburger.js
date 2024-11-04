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
const rentasup = document.getElementById("rentasup");
const boatride = document.getElementById("boatride");
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
  paintWhite(rentasup, hamburger);
  paintBlue(boatride, hamburger);
  paintBlue(obrazac, hamburger);
  RemoveIfOnScreen(main, hamburger);
});

// Postavljanje animacija
const mapa = document.querySelector(".mapa");

const short_text = document.querySelector("#short_text");
const appearing = document.querySelector(".appearing");

const slika = document.querySelector("#image-slider");
const observer_location = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lokacija.style.animationName = "location_scroll";
        mapa.style.animationName = "map_scroll";
      }
    });
  },
  { threshold: 0 }
);

const observer_apart = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        slika.style.animationName = "slika";
        short_text.style.animationName = "map_scroll";
        appearing.style.animationName = "appearing";
      }
    });
  },
  { threshold: 0.1 }
);

const mediaQuery = window.matchMedia("(min-width: 768px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  observer_location.observe(obrazac);
  observer_apart.observe(apt);
}
