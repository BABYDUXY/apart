const video = document.getElementById("heroVideo");

let hasPlayedOnce = false;

/* Scrollanje pritiskom na strelicu */
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const snapContainer = document.documentElement;
// Ako NIJE ios, onda dodaj event listener
if (!isIOS) {
  const scrollBtn = document.getElementById("scrollDownBtn");
  const targetSection = document.getElementById("white_div_apt");

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
} else {
  //AKo je IOS
}

/* Scrollanje pritiskom na navigaciju  */

document.querySelectorAll(".menu__item").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      if (isIOS) {
        // iOS FI
        target.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      } else {
        // Za android
        snapContainer.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
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
