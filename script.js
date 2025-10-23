  // Initialize AOS
        AOS.init({
            duration: 800, // values from 50 to 3000, with step 50ms
            once: true, // whether animation should happen only once - while scrolling down
        });

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile menu toggle
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });