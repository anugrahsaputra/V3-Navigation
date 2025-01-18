/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background: #4CAF50;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.logo-container {
    display: flex;
    align-items: center; /* Menjaga logo dan teks sejajar secara vertikal */
    justify-content: flex-start; /* Logo di kiri */
    padding: 20px; /* Tambahkan padding jika diperlukan */
}

.logo {
    width: 100px;
    height: auto;
}

.school-info {
    margin-left: 20px; /* Jarak antara logo dan informasi sekolah */
    display: flex;
    flex-direction: column; /* Mengatur teks dalam kolom */
    justify-content: center; /* Menjaga teks di tengah secara vertikal */
    align-items: center; /* Memusatkan teks secara horizontal */
    text-align: center; /* Memastikan teks berada di tengah */
}

@keyframes scale-fade {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.school-info h1 {
    margin: 0;
    color: black; /* Mengubah warna teks menjadi hitam */
    font-weight: bold; /* Membuat teks menjadi bold */
    animation: scale-fade 0.8s ease-out; /* Menambahkan animasi */
}

.slogan {
    font-style: italic;
}

nav {
    background: #333;
    color: white;
    padding: 10px 0;
}

#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.marquee-container {
    overflow: hidden;
    white-space: nowrap;
}

.marquee-text {
    display: inline-block;
    padding: 10px;
    animation: marquee 10s linear infinite;
}

@keyframes marquee {
    0% { transform: translate(100%, 0); }
    100% { transform: translate(-100%, 0); }
}

.menu-icon {
    display: none; /* Sembunyikan ikon menu di desktop */
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
}

/* Menu List */
#menu-list {
    list-style: none;
    display: flex;
}

#menu-list li {
    margin: 0 15px;
}

#menu-list a {
    color: white;
    text-decoration: none;
}

#menu-list a:hover {
    text-decoration: underline;
}

/* Main Content */
main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Fade-in effects */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Bubble effect */
.bubble {
    border: 2px solid #4CAF50;
    border-radius: 10px;
    padding: 15px;
    transition: transform 0.3s;
}

.bubble:hover {
    transform: scale(1.05);
}

.bold-text {
    font-weight: bold;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
}

.gallery img {
    width: 100px;
    height: auto;
    margin: 5px;
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #333;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Media Queries */
@media (max-width: 768px) {
    .menu-icon {
        display: block; /* Tampilkan ikon menu di perangkat mobile */
    }

    #menu-list {
        display: none;
        flex-direction: column;
        background: #333;
        position: absolute;
        top: 50px;
        right: 0;
        width: 200px;
    }

    #menu-list.active {
        display: flex; /* Tampilkan menu saat aktif */
    }

    #menu-list li {
        margin: 10px 0;
    }
    }
