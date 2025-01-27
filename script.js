// Script for Toggle Menu
function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "flex") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "flex";
    }
}

// Script for Fade-In Animations
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in-right, .fade-in-left");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeInElements.forEach((element) => {
        observer.observe(element);
    });
});

// Adding 'visible' class to activate fade-in
const fadeCSS = `
    .fade-in-right.visible {
        animation: fadeInRight 1s ease-in-out forwards;
    }
    .fade-in-left.visible {
        animation: fadeInLeft 1s ease-in-out forwards;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = fadeCSS;
document.head.appendChild(styleSheet);

// Script to close the menu when clicking on a menu item
const menuItems = document.querySelectorAll("#menu-list a");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const menuList = document.getElementById("menu-list");
        menuList.style.display = "none"; // Hide the menu when a link is clicked
    });
});

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const indicators = document.querySelectorAll('.indicator .line');
let currentIndex = 0;

// Fungsi untuk mengupdate slider dan indikator
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Fungsi untuk mengupdate indikator
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
    });
}

// Auto slide setiap 3 detik
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;  // Geser ke gambar berikutnya
    updateSlider();
}, 3000); // 3000 ms = 3 detik

// Menambahkan fitur touch swipe
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Geser ke kiri (Next Image)
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    }

    if (touchEndX - touchStartX > 50) {
        // Geser ke kanan (Previous Image)
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    }

    updateSlider();
    }
