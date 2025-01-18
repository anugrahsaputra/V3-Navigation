// Script for Toggle Menu
function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.style.display === "flex") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "flex";
    }
}

// Script for Fade-In Animations
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in-right, .fade-in-left");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeInElements.forEach((element) => {
        observer.observe(element);
    });
});

// Adding 'visible' class to activate fade-in
const fadeCSS = `
    .fade-in-right.visible {
        animation: fadeInRight 1s ease-in-out forwards;
    }
    .fade-in-left.visible {
        animation: fadeInLeft 1s ease-in-out forwards;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = fadeCSS;
document.head.appendChild(styleSheet);

// Script to close the menu when clicking on a menu item
const menuItems = document.querySelectorAll("#menu-list a");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const menuList = document.getElementById("menu-list");
        menuList.style.display = "none"; // Hide the menu when a link is clicked
    });
});
