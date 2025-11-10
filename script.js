// Smooth scroll reveal animations
document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal('.section', {
    distance: '60px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200,
  });

  ScrollReveal().reveal('.hero-content', {
    distance: '30px',
    duration: 1000,
    origin: 'top',
  });
});
