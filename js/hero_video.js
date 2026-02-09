const video = document.getElementById("heroVideo");

let hasPlayedOnce = false;
const scrollBtn = document.getElementById("scrollDownBtn");
const targetSection = document.getElementById("white_div_apt");

let isScrolling = false;

scrollBtn.addEventListener("click", () => {
  if (isScrolling) return; // sprječava višestruke click-ove

  isScrolling = true;
  const offset = 100;
  window.scrollTo({
    top: targetSection.offsetTop + offset,
    behavior: "smooth",
  });

  // reset scroll lock nakon 600ms (vrijeme animacije)
  setTimeout(() => {
    isScrolling = false;
  }, 600);
});

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
  { threshold: 0.2 }
);

observer.observe(video);
