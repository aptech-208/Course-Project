// Existing Toggle for Mobile Menu
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// NEW: Toggle Dropdown on Click for Mobile
const dropbtn = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropbtn.addEventListener('click', (e) => {
    // Only trigger if screen is 992px or less
    if (window.innerWidth <= 992) {
        e.preventDefault(); // Prevent jump if it's a link
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    }
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});