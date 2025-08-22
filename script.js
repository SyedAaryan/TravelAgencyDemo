document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Menu toggle logic
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Pop-up Modal Logic
    const bookNowBtn = document.querySelector('.btn-cta');
    const demoPopup = document.querySelector('#demo-popup');
    const closeBtn = document.querySelector('.close-btn');

    bookNowBtn.addEventListener('click', (event) => {
        event.preventDefault();
        demoPopup.classList.add('visible');
    });

    closeBtn.addEventListener('click', () => {
        demoPopup.classList.remove('visible');
    });

    demoPopup.addEventListener('click', (event) => {
        if (event.target === demoPopup) {
            demoPopup.classList.remove('visible');
        }
    });
});