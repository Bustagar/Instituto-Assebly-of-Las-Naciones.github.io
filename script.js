document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        // Cierra el menú al hacer clic en cualquier otra parte de la pantalla
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});
