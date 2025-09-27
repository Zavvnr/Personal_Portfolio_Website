document.addEventListener('DOMContentLoaded', () => {
    // Select the main element instead of the body
    const main = document.querySelector('main');

    // Define the fixed top color and the starting/ending colors for the bottom of the gradient
    const topColor = [0, 0, 0]; // Fixed black color for the top
    const startBottomColor = [0, 0, 0];   // Black for the bottom at the start
    const endBottomColor = [130, 80, 200];  // A dark purple for the bottom at the end

    // Listen for the scroll event on the window
    window.addEventListener('scroll', () => {
        // Calculate the scroll percentage from 0 to 1
        const scrollPercentage = Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));

        // Interpolate the color for the bottom of the gradient
        const r = startBottomColor[0] + (endBottomColor[0] - startBottomColor[0]) * scrollPercentage;
        const g = startBottomColor[1] + (endBottomColor[1] - startBottomColor[1]) * scrollPercentage;
        const b = startBottomColor[2] + (endBottomColor[2] - startBottomColor[2]) * scrollPercentage;

        // Create the new bottom color string
        const newBottomColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

        // Update the background-image CSS property of the main element
        main.style.backgroundImage = `linear-gradient(to bottom, rgb(${topColor.join(', ')}), ${newBottomColor})`;
    });
});