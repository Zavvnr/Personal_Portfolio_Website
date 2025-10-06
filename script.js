document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const headerPhoto = document.querySelector('.header-photo'); // Select the new header photo element

    // --- Keep your existing scroll logic for the main content ---
    const topColor = [0, 0, 0];
    const startBottomColor = [0, 0, 0];
    const endBottomColor = [130, 80, 200]; 

    // --- Main scroll listener ---
    window.addEventListener('scroll', () => {
        // ---- NEW/RE-ADDED: Header Photo Scroll Effect ----
        // If user has scrolled more than 50px, add the 'scrolled' class to headerPhoto
        if (window.scrollY > 50) {
            headerPhoto.classList.add('scrolled');
        } else {
            headerPhoto.classList.remove('scrolled');
        }

        // ---- Your existing gradient logic for the 'main' element ----
        const scrollPercentage = Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
        const r = startBottomColor[0] + (endBottomColor[0] - startBottomColor[0]) * scrollPercentage;
        const g = startBottomColor[1] + (endBottomColor[1] - startBottomColor[1]) * scrollPercentage;
        const b = startBottomColor[2] + (endBottomColor[2] - startBottomColor[2]) * scrollPercentage;
        const newBottomColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        main.style.backgroundImage = `linear-gradient(to bottom, rgb(${topColor.join(', ')}), ${newBottomColor})`;
    });
});