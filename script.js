document.addEventListener('DOMContentLoaded', () => {
    // Add tooltips to interactive sections
    const interactiveSections = document.querySelectorAll('.interactive-section');
    
    interactiveSections.forEach(section => {
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = 'Click to copy';
        section.appendChild(tooltip);

        // Add copy functionality
        section.addEventListener('click', (e) => {
            // Find the element to copy
            const copyElements = section.querySelectorAll('[data-copy]');
            
            // Combine text of all copyable elements
            const copyText = Array.from(copyElements)
                .map(el => el.textContent)
                .join('\n');

            // Copy to clipboard
            navigator.clipboard.writeText(copyText).then(() => {
                // Temporary highlight effect
                section.classList.add('copied');
                setTimeout(() => {
                    section.classList.remove('copied');
                }, 500);

                // Optional: Show a more prominent copy confirmation
                showCopyConfirmation(section);
            });
        });
    });

    // Optional: Advanced copy confirmation
    function showCopyConfirmation(section) {
        const confirmationEl = document.createElement('div');
        confirmationEl.textContent = 'Copied!';
        confirmationEl.style.position = 'fixed';
        confirmationEl.style.top = '20px';
        confirmationEl.style.left = '50%';
        confirmationEl.style.transform = 'translateX(-50%)';
        confirmationEl.style.backgroundColor = 'rgba(0, 255, 0, 0.7)';
        confirmationEl.style.color = 'white';
        confirmationEl.style.padding = '10px 20px';
        confirmationEl.style.borderRadius = '5px';
        confirmationEl.style.zIndex = '1000';

        document.body.appendChild(confirmationEl);

        setTimeout(() => {
            document.body.removeChild(confirmationEl);
        }, 1500);
    }

    // Optional: Add some dynamic effects
    function addHoverEffects() {
        interactiveSections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transform = 'scale(1.02)';
                section.style.transition = 'transform 0.2s ease';
            });

            section.addEventListener('mouseleave', () => {
                section.style.transform = 'scale(1)';
            });
        });
    }

    // Initialize hover effects
    addHoverEffects();
});