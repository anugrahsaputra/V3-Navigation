// Toggle menu for responsive navigation
function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

// Script untuk Carousel 1
let currentIndex1 = 0;
const slides1 = document.querySelectorAll("#carousel-1 .carousel-slide img");
const totalSlides1 = slides1.length;

function moveCarousel1() {
    currentIndex1 = (currentIndex1 + 1) % totalSlides1;
    const offset = -currentIndex1 * 100;
    document.querySelector("#carousel-1 .carousel-slide").style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel1, 3000); // Ganti gambar setiap 3 detik

// Script untuk Carousel 2
let currentIndex2 = 0;
const slides2 = document.querySelectorAll("#carousel-2 .carousel-slide img");
const totalSlides2 = slides2.length;

function moveCarousel2() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    const offset = -currentIndex2 * 100;
    document.querySelector("#carousel-2 .carousel-slide").style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel2, 3000); // Ganti gambar setiap 3 detik
}

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

