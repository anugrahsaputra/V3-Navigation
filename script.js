// Toggle menu untuk navigasi responsif
function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

// Fungsi umum untuk inisialisasi carousel
function initCarousel(carouselId) {
    let currentIndex = 0; // Indeks slide aktif
    const carousel = document.getElementById(carouselId); // Ambil elemen carousel berdasarkan ID
    const slides = carousel.querySelectorAll(".carousel-slide img"); // Ambil semua gambar dalam carousel

    // Fungsi untuk menampilkan slide aktif
    function showCarousel() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "block" : "none";
        });
    }

    // Fungsi untuk pindah ke slide berikutnya
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Pindah ke indeks berikutnya (dengan rotasi)
        showCarousel();
    }

    // Fungsi untuk pindah ke slide sebelumnya
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Pindah ke indeks sebelumnya (dengan rotasi)
        showCarousel();
    }

    // Set interval otomatis untuk berganti slide setiap 3 detik
    setInterval(nextSlide, 3000);

    // Inisialisasi dengan menampilkan slide awal
    showCarousel();

    // Kembalikan fungsi kontrol untuk tombol navigasi
    return { nextSlide, prevSlide };
}

// Inisialisasi untuk setiap carousel
document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi Carousel 1
    window.carousel1 = initCarousel("carousel1");

    // Inisialisasi Carousel 2
    window.carousel2 = initCarousel("carousel2");
});

// Fungsi tombol navigasi untuk Carousel 1
function nextCarousel1() {
    carousel1.nextSlide();
}

function prevCarousel1() {
    carousel1.prevSlide();
}

// Fungsi tombol navigasi untuk Carousel 2
function nextCarousel2() {
    carousel2.nextSlide();
}

function prevCarousel2() {
    carousel2.prevSlide();
}

// Scroll animation untuk efek fade-in
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

// Panggil efek fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", handleScroll);
