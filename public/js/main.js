// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializePortfolio();
    initializeThemeToggle();
});

function initializePortfolio() {
    initNavbar();
    initScrollAnimation();
    initContactForm();
    createParticleEffect();
}
