// script.js
// Fungsi untuk toggle menu
function toggleMenu() {
    var menu = document.getElementById('menu-list');
    menu.classList.toggle('show');
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

// Fungsi untuk menambah kelas animasi saat elemen muncul di layar
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Menjalankan fungsi saat halaman digulir
window.addEventListener('scroll', animateOnScroll);

// Menambahkan kelas visible untuk memicu animasi
document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(element => {
    element.classList.remove('fade-in-left', 'fade-in-right');
    element.classList.add('visible');
});

