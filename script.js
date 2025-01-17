// Fungsi untuk menampilkan atau menyembunyikan menu saat tombol hamburger diklik
function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('show');
}

// Menambahkan event listener untuk mendeteksi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Mengatur elemen dengan class fade-in-left dan fade-in-right agar muncul dengan animasi
    const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
    const fadeInRightElements = document.querySelectorAll('.fade-in-right');
    
    // Memunculkan elemen secara perlahan
    function handleScrollAnimation() {
        fadeInLeftElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
        fadeInRightElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Mengecek apakah elemen berada dalam viewport saat discroll
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    // Menambahkan kelas visible untuk mengaktifkan animasi
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Panggil untuk memastikan animasi muncul saat pertama kali dimuat
});
