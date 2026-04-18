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

  // (Hero characters use a pure CSS float animation — no JS transform
  //  so the bobbing stays smooth and consistent.)

  // Nav background intensify on scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }, { passive: true });
})();
