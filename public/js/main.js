// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializePortfolio();
});

function initializePortfolio() {
    initNavbar();
    initScrollAnimation();
    initContactForm();
    createParticleEffect();
}
