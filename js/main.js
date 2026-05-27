// sideb.life — main.js

// ── Fade in on scroll ──
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
fadeEls.forEach(el => fadeObserver.observe(el));

// ── Nav colour shift based on section ──
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('[data-nav]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const theme = e.target.getAttribute('data-nav');
      if (theme === 'light') {
        nav.classList.add('nav--light');
      } else {
        nav.classList.remove('nav--light');
      }
    }
  });
}, {
  threshold: 0,
  rootMargin: '-40px 0px -55% 0px'
});

sections.forEach(s => navObserver.observe(s));
