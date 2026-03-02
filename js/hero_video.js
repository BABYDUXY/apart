const video = document.getElementById("heroVideo");

let hasPlayedOnce = false;

/* Scrollanje pritiskom na strelicu */
const scrollBtn = document.getElementById("scrollDownBtn");
const targetSection = document.getElementById("white_div_apt");
const snapContainer = document.documentElement;

let isScrolling = false;

scrollBtn.addEventListener("click", () => {
  if (isScrolling) return;

  isScrolling = true;

  snapContainer.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 1200);
});

/* Scrollanje pritiskom na navigaciju  */
document.querySelectorAll(".menu__item").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      snapContainer.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

/* Video fix za iphone */

const tryPlay = () => {
  video.play().catch(() => {});
};

window.addEventListener("load", tryPlay);

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      if (!hasPlayedOnce) {
        tryPlay();
        hasPlayedOnce = true;
      } else {
        tryPlay();
      }
    } else {
      video.pause();
      hasPlayedOnce = false;
    }
  },
  { threshold: 0.2 },
);

observer.observe(video);
/* ZA SCROLLANJE NA SUPOVIMA */
