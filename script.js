// Menambahkan animasi fade-in saat elemen muncul di layar
window.addEventListener('DOMContentLoaded', () => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const checkVisibility = () => {
        fadeInSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // 20% lebih rendah dari layar

            if (sectionPosition < screenPosition) {
                section.classList.add('visible');
            }
        });
    };

    // Periksa apakah elemen muncul saat pertama kali halaman dimuat
    checkVisibility();

    // Periksa visibilitas elemen setiap kali halaman digulir
    window.addEventListener('scroll', checkVisibility);
});
