// script.js
// Fungsi untuk toggle menu (seperti sebelumnya)
function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Carousel otomatis dan navigasi
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-container').addEventListener('click', changeImage);

// Mulai carousel otomatis
setInterval(changeImage, 3000);  // Ganti gambar setiap 3 detik
