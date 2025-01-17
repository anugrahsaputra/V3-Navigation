// script.js
// JavaScript untuk Toggle Menu Hamburger
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

/* Styling untuk bagian Ekstrakurikuler */
#ekstrakurikuler {
    margin: 20px 0;
}

#ekstrakurikuler ul {
    list-style-type: square;
    padding-left: 20px;
}

/* Styling untuk Carousel Foto */
#carousel {
    margin: 20px 0;
}

.carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    margin: auto;
}

.carousel-slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-slide img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
}

.carousel-container:before, .carousel-container:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
}

.carousel-container:before {
    left: 10px;
}

.carousel-container:after {
    right: 10px; 
}

