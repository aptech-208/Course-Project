const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        sidebar.classList.add('scrolled');
    } else {
        sidebar.classList.remove('scrolled');
    }
});

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('mobile-open');
    } else {
        sidebar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
    });
});