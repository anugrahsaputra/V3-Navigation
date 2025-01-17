// Fungsi untuk menambahkan efek fade-in pada elemen dengan kelas tertentu
function fadeInElement(element, duration) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}s ease-in-out`;
    element.style.opacity = 1;
}

// Menambahkan animasi fade-in ke setiap bagian ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Menambahkan sedikit delay agar animasi bergantian
        setTimeout(() => {
            fadeInElement(section, 1);
        }, index * 300); // Delay per bagian
    });
});

// Menu toggle untuk tampilan responsif
function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('active');
}

// Menambahkan animasi ke carousel gambar
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function changeSlide() {
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(-${currentIndex * 220}px)`; // Menyesuaikan lebar gambar
}

// Fungsi untuk memulai carousel
function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        changeSlide();
    }, 3000); // Ganti gambar setiap 3 detik
}

// Mulai carousel setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    startCarousel();
});
