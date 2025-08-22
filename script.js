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

    // Show pop-up when 'Book Now' is clicked
    bookNowBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the default anchor tag behavior
        demoPopup.classList.add('visible');
    });

    // Hide pop-up when close button is clicked
    closeBtn.addEventListener('click', () => {
        demoPopup.classList.remove('visible');
    });

    // Hide pop-up when clicking outside the modal
    demoPopup.addEventListener('click', (event) => {
        if (event.target === demoPopup) {
            demoPopup.classList.remove('visible');
        }
    });
});