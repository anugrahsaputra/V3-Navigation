// Fungsi untuk membuka atau menutup menu saat ikon menu (hamburger) diklik
function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    var menuIcon = document.querySelector(".menu-icon");

    // Periksa apakah menu terbuka atau tertutup
    if (menuList.style.display === "block") {
        menuList.style.display = "none"; // Menutup menu
    } else {
        menuList.style.display = "block"; // Membuka menu
    }
}

// Fungsi untuk menambahkan efek fade-in ke elemen dengan kelas 'fade-in-left' atau 'fade-in-right'
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

    fadeInElements.forEach(function(element) {
        element.classList.add('fade-in'); // Menambahkan kelas untuk memulai animasi
    });
});

// Fungsi untuk menambahkan animasi fade-in pada elemen
function fadeInElement(element) {
    element.style.opacity = 0; // Set opacity ke 0 untuk memulai animasi
    element.style.transition = "opacity 1.5s ease-in"; // Menambahkan transisi

    // Menunggu hingga elemen siap, kemudian ubah opacity menjadi 1
    setTimeout(function() {
        element.style.opacity = 1;
    }, 100); // Sedikit delay untuk memulai animasi setelah elemen terlihat
}

// Fungsi untuk menambahkan efek fade-in ke elemen dengan kelas 'fade-in-left' atau 'fade-in-right'
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

    fadeInElements.forEach(function(element) {
        fadeInElement(element); // Memicu animasi fade-in pada setiap elemen
    });
});
