const refs = {
  appNavigation: document.getElementById("app-navigation"),
  hero: {
    video: document.getElementById("hero-video"),
    nextBtn: document.getElementById("hero-video-next-btn"),
  },
};

const heroMovies = {
  index: 0,
  list: new Array(4).fill("").map((_, idx) => `videos/hero-${idx + 1}.mp4`),
};

refs.hero.nextBtn.addEventListener("click", () => {
  heroMovies.index++;
  if (heroMovies.index > heroMovies.list.length - 1) {
    heroMovies.index = 0;
  }
  refs.hero.video.src = heroMovies.list[heroMovies.index];
});

refs.appNavigation.addEventListener("click", (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  const targetElId = evt.target.dataset.targetId;
  if (!targetElId) return;
  const targetEl = document.getElementById(targetElId);
  if (!targetEl) return;

  setTimeout(() => {
    window.scrollTo({
      top: targetEl.offsetTop,
      behavior: "smooth",
    });
    // targetEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
});
