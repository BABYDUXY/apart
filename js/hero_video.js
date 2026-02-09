const video = document.getElementById("heroVideo");

let hasPlayedOnce = false;

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
