// script.js
// JavaScript untuk Toggle Menu Hamburger
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});

