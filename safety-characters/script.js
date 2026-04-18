/* SSAT Safety — scroll reveal + parallax */
(function(){
  'use strict';

  // Intersection-based reveal for chapters & .reveal targets
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.chapter, .reveal').forEach(el => io.observe(el));

  // Hero parallax on scroll (subtle)
  const chars = document.querySelectorAll('.hero__char');
  const speeds = [0.08, -0.12, 0.06, -0.10, 0.14];

  let ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      chars.forEach((c, i) => {
        const s = speeds[i] || 0.08;
        c.style.transform = `translate3d(0, ${y * s}px, 0)`;
      });
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive:true });

  // Cursor-following parallax on hero (desktop only)
  const hero = document.querySelector('.hero__stage');
  if (hero && window.matchMedia('(hover: hover)').matches){
    hero.addEventListener('mousemove', (ev) => {
      const rect = hero.getBoundingClientRect();
      const cx = (ev.clientX - rect.left) / rect.width - 0.5;
      const cy = (ev.clientY - rect.top) / rect.height - 0.5;
      chars.forEach((c, i) => {
        const depth = (i % 2 === 0 ? 1 : -1) * (8 + i * 2);
        c.style.transform = `translate3d(${cx * depth}px, ${cy * depth}px, 0)`;
      });
    });
    hero.addEventListener('mouseleave', () => {
      chars.forEach(c => { c.style.transform = ''; });
    });
  }

  // Nav background intensify on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }, { passive: true });
})();
