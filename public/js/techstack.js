function initTechCarousel() {
    const track = document.getElementById('techTrack');
    if (!track) return;

    // Get original logos
    const originalContent = track.innerHTML;
    
    // Duplicate content twice
    track.innerHTML = originalContent + originalContent + originalContent;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // speed ng carousel
    let animationId;
    let isPaused = false;
    
    // Wait for images to load to get accurate width
    setTimeout(() => {
        const firstItem = track.querySelector('.tech-logo-item');
        if (!firstItem) return;
        
        // Calculate width of one complete set
        const itemWidth = firstItem.offsetWidth;
        const itemsCount = track.children.length / 3; // Divide by 3 since we tripled
        const gap = 80; 
        const oneSetWidth = (itemWidth + gap) * itemsCount;

        function animate() {
            if (!isPaused) {
                scrollPosition += scrollSpeed;
                
                // When one set is fully scrolled, seamlessly jump back
                if (scrollPosition >= oneSetWidth) {
                    scrollPosition = 0;
                }
                
                track.style.transform = `translateX(-${scrollPosition}px)`;
            }
            animationId = requestAnimationFrame(animate);
        }

        // Start animation
        animate();

        // Pause on hover
        const carousel = track.closest('.tech-carousel');
        
        carousel.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        carousel.addEventListener('mouseleave', () => {
            isPaused = false;
        });

        // Cleanup
        window.addEventListener('beforeunload', () => {
            cancelAnimationFrame(animationId);
        });
    }, 100);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTechCarousel);
} else {
    initTechCarousel();
}