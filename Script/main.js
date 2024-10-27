document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a');

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            loadContent(targetId);
        });
    });

    function loadContent(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                mainContent.innerHTML = html;
                // Call the init function for the loaded page
                if (window[`init${capitalize(page)}`]) {
                    window[`init${capitalize(page)}`]();
                }
            })
            .catch(error => console.error('Error loading content:', error));
    }

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Load home page by default
    loadContent('home');
});
