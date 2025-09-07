function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const dateElement = document.getElementById("monthYear");
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const formattedDate = "Company Profile, " + monthNames[month] + " " + year;
  dateElement.textContent = formattedDate;
});

/**
document.addEventListener("DOMContentLoaded", () => {
  const sectionHero = document.querySelector(".section-hero");
  const fadeEls = document.querySelectorAll(".fade-on-scroll");

  const section2 = document.querySelector(".section-2");
  const appearEls = document.querySelectorAll(".appear-on-scroll");

  function handleScroll() {
    const viewportHeight = window.innerHeight;

    // --- Section 1: Fade out ---
    if (sectionHero) {
      const rect = sectionHero.getBoundingClientRect();
      let progress = 0;

      if (rect.top < 0) {
        progress = Math.min(-rect.top / (rect.height - viewportHeight), 1);
      } else {
        progress = 0;
      }

      const fadeSpeed = 0.7; // faster fade
      const opacity = Math.max(1 - progress * fadeSpeed, 0);
      fadeEls.forEach(el => {
        el.style.opacity = opacity;
      });
    }

    // --- Section 2: Fade in ---
    if (section2) {
      const rect2 = section2.getBoundingClientRect();
      let appearProgress = 0;

      if (rect2.top < viewportHeight) {
        appearProgress = Math.min((viewportHeight - rect2.top) / viewportHeight, 1);
      }

      const appearSpeed = 1.2; // increase this for faster appear
      const opacity = Math.min(appearProgress * appearSpeed, 1);

      appearEls.forEach(el => {
        el.style.opacity = opacity;
        el.style.transform = `translateY(${20 * (1 - opacity)}px)`; // slight slide up
      });
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll(); // trigger on load
});

**/


document.addEventListener("DOMContentLoaded", () => {
  const sectionHero = document.querySelector(".section-hero");
  const fadeEls = document.querySelectorAll(".fade-on-scroll");

  const section2 = document.querySelector(".section-2");
  const appearEls = document.querySelectorAll(".appear-on-scroll");

  function handleScroll() {
    const viewportHeight = window.innerHeight;

    // --- Section 1: Dramatic fade out / reappear ---
    if (sectionHero) {
      const rect = sectionHero.getBoundingClientRect();
      let progress = 0;

      if (rect.top < 0) {
        progress = Math.min(-rect.top / (rect.height - viewportHeight), 1);
      } else {
        progress = 0;
      }

      const fadeSpeed = 0.9; // faster fade
      const opacity = Math.max(1 - progress * fadeSpeed, 0);

      fadeEls.forEach(el => {
        el.style.opacity = opacity;
        el.style.transform = `
          translateY(${150 * (1 - opacity)}px)  /* slide down on fade */
          scale(${0.7 + 0.3 * opacity})         /* zoom */
          rotateX(${25 * (1 - opacity)}deg)     /* tilt */
        `;
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      });
    }

    // --- Section 2: Dramatic appear ---
    if (section2) {
      const rect2 = section2.getBoundingClientRect();
      let appearProgress = 0;

      if (rect2.top < viewportHeight) {
        appearProgress = Math.min((viewportHeight - rect2.top) / viewportHeight, 1);
      }

      const opacity = Math.min(appearProgress * 2, 1);

      appearEls.forEach(el => {
        el.style.opacity = opacity;
        el.style.transform = `
          translateY(${150 * (1 - opacity)}px)
          scale(${0.7 + 0.3 * opacity})
          rotateX(${25 * (1 - opacity)}deg)
        `;
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      });
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll(); // initial trigger
});
