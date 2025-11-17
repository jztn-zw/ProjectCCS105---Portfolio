document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializePortfolio();
    initializeThemeToggle();
    addCustomStyles();
});

function initializePortfolio() {
    initializeNavigation();
    initializeAnimations();
    initializeContactForm();
}