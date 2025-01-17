// Toggle menu for responsive navigation
function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

// Carousel functionality
let currentIndex = 0;

function showCarousel() {
    const slides = document.querySelectorAll(".carousel-slide img");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? "block" : "none";
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".carousel-slide img");
    currentIndex = (currentIndex + 1) % slides.length;
    showCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll(".carousel-slide img");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showCarousel();
}

// Automatically switch carousel slides every 3 seconds
setInterval(nextSlide, 3000);

// Initialize carousel on page load
document.addEventListener("DOMContentLoaded", () => {
    showCarousel();
});

// Scroll animation for fade-in effects
function handleScroll() {
    const fadeInElements = document.querySelectorAll(".fade-in-left, .fade-in-right");
    fadeInElements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = "translateX(0)";
        }
    });
}

document.addEventListener("scroll", handleScroll);

// Initial call for fade-in effect
document.addEventListener("DOMContentLoaded", handleScroll);

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex += step;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    document.querySelector('.carousel-container').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Optional: auto-slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
