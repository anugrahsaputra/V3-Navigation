// Fungsi untuk men-toggle menu navigasi
function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('active');
}

// Fungsi untuk memeriksa apakah elemen berada di viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menambahkan kelas visible pada elemen yang terlihat di viewport
function checkFadeInElements() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Memeriksa elemen saat menggulir dan saat halaman dimuat
window.addEventListener('scroll', checkFadeInElements);
window.addEventListener('load', checkFadeInElements);

// Pemeriksaan awal
checkFadeInElements();
