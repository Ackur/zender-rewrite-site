window.addEventListener("load", (event) => {
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

  // set next video url to scr
  refs.hero.nextBtn.addEventListener("click", () => {
    heroMovies.index++;
    if (heroMovies.index > heroMovies.list.length - 1) {
      heroMovies.index = 0;
    }
    refs.hero.video.src = heroMovies.list[heroMovies.index];
  });

  // scroll to
  refs.appNavigation.addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    const targetElId = evt?.target?.dataset?.targetId;
    if (!targetElId) return;
    const targetEl = document.getElementById(targetElId);
    if (!targetEl) return;

    setTimeout(() => {
      window.scrollTo({
        top: targetEl.offsetTop,
        behavior: "smooth",
      });
    });
  });

  //  ---===ANIMATIONS===---
  gsap.registerPlugin(ScrollTrigger);

  const animationTextBlur = gsap.utils.toArray(".animation-text-blur");

  animationTextBlur.forEach((el) => {
    gsap.set(el, { y: -100, filter: "blur(10px)" });
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "100px bottom",
        end: "bottom top",
        toggleActions: "restart none none none", //restart pause reverse pause
        // markers: true,
      },
      y: 0,
      filter: "blur(0)",
      duration: 0.75,
      delay: 0.35,
    });
  });

  gsap.to(".image-box", {
    scrollTrigger: {
      trigger: ".image-box",
      start: "+=700 bottom",
      end: "+=500",
      scrub: 1.3,
      // markers: true,
    },
    width: "100%",
    height: "100svh",
    borderRadius: "0",
  });

  const infoCards = gsap.utils.toArray(".info-cards--item");
  infoCards.forEach((el, idx) => {
    gsap.set(el, { opacity: 0, x: idx % 2 ? "-100%" : "100%" });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause resume reset", //onEnter, onLeave, onEnterBack, and onLeaveBack => "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
        // markers: true,
      },
      x: 0,
      opacity: 1,
      stagger: { each: 0.3, from: "random" },
      delay: 0.25,
      duration: 0.75,
      ease: "none",
    });
  });

  gsap.utils.toArray(".contacts-section--image").forEach((el) => {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.7,
        // markers: true,
      },
      opacity: 1,
      stagger: { each: 0.6, from: "random" },
      delay: (Math.random() * (0.7 - 0.3) + 0.3).toFixed(2),
      duration: 0.75,
      ease: "none",
    });
  });

  //  ---===ANIMATIONS=END===---
});
