document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Menu toggle logic (same as before)
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Pop-up Modal Logic (updated)
    const demoPopup = document.querySelector('#demo-popup');
    const closeBtn = document.querySelector('.close-btn');

    // Select all buttons and links that should trigger the pop-up
    const popupTriggers = document.querySelectorAll('.btn-cta, .demo-link');

    // Loop through all elements and add a click event listener
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the link from navigating
            if (demoPopup) {
                demoPopup.classList.add('visible');
            }
        });
    });

    if (closeBtn) {
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
    }
});