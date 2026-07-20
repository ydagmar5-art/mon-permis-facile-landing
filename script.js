/* ============================================================
   MON PERMIS FACILE — interactions
   ============================================================ */
(function () {
  "use strict";

  /* Header shadow on scroll */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Reveal on scroll */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* Count-up on stats */
  const counters = document.querySelectorAll("[data-count]");
  const runCount = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    const dur = 1100;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("fr-FR");
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("fr-FR");
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCount(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => co.observe(el));
  }

  /* Current year */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* Single-open FAQ (accordion feel) */
  const faqItems = document.querySelectorAll(".faq details");
  faqItems.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        faqItems.forEach((other) => {
          if (other !== d) other.open = false;
        });
      }
    });
  });
})();
