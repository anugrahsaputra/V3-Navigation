// Fungsi untuk men-toggle menu pada perangkat mobile
function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

// Efek animasi saat elemen muncul di viewport
const faders = document.querySelectorAll('.fade-in-left, .fade-in-right');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
