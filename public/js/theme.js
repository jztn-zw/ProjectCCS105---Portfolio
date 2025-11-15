// theme.js - Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    updateHeroImages(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        updateHeroImages(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const iconName = theme === 'dark' ? 'sun' : 'moon';
        themeToggle.innerHTML = `<i data-lucide="${iconName}"></i>`;
        lucide.createIcons();
    }
    
    function updateHeroImages(theme) {
        const mainPhoto = document.querySelector('.main-photo');
        const hoverPhoto = document.querySelector('.hover-photo');
        
        if (theme === 'light') {
            mainPhoto.src = 'img/2.png'; // Dark image as default in light mode
            hoverPhoto.src = 'img/4.png'; // Light image on hover in light mode
        } else {
            // In dark mode, keep original setup
            mainPhoto.src = 'img/3.png'; // Light image as default in dark mode
            hoverPhoto.src = 'img/1.png'; // Dark image on hover in dark mode
        }
    }
}