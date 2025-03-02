document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Ensure mobile menu toggle works
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('is-active');
        });

        // Close menu when a nav link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('is-active');
            });
        });
    } else {
        console.error('Mobile menu elements not found');
    }

});
