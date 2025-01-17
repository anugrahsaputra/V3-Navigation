// script.js
<script>
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active'); // Menambah/menghapus kelas "active"
    });
</script>

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

const sections = document.querySelectorAll('.fade-in');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

