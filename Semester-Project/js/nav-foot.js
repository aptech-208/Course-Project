<<<<<<< HEAD
$(document).ready(function () {
    // 1. DYNAMIC ISLAND SCROLL 
=======

$(document).ready(function () {
    // 1. DYNAMIC ISLAND SCROLL LOGIC
>>>>>>> e04afb23c4adc869706a5e07f07f632eec3d4634
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('#islandContainer').addClass('scrolled');
        } else {
            $('#islandContainer').removeClass('scrolled');
        }
    });

    // 2. REVEAL ANIMATIONS
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('reveal');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    // 3. SMOOTH SCROLLING
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 800);
    });
<<<<<<< HEAD

    const $mobileBtn = $('#mobileMenu');
    const $navLinks = $('.nav-links');

    $mobileBtn.on('click', function () {
        $navLinks.toggleClass('active');

        if ($navLinks.hasClass('active')) {
            $mobileBtn.html('✕'); // Close icon
            $('body').css('overflow', 'hidden'); // Lock scroll
        } else {
            $mobileBtn.html('☰'); // Menu icon
            $('body').css('overflow', 'auto'); // Unlock scroll
        }
    });

    // Close menu on link click
    $('.nav-links a').on('click', function () {
        $navLinks.removeClass('active');
        $mobileBtn.html('☰');
        $('body').css('overflow', 'auto');
    });

});
=======
});
>>>>>>> e04afb23c4adc869706a5e07f07f632eec3d4634
