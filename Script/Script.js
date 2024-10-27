document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav a');

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Editor functionality
    const editor = document.getElementById('editor');
    const saveDraftBtn = document.getElementById('save-draft');
    const publishBtn = document.getElementById('publish');

    saveDraftBtn.addEventListener('click', () => {
        const content = editor.innerHTML;
        localStorage.setItem('draft', content);
        alert('Draft saved!');
    });

    publishBtn.addEventListener('click', () => {
        const content = editor.innerHTML;
        // Here you would typically send the content to a server
        console.log('Published:', content);
        alert('Article published!');
    });

    // Load draft if exists
    const savedDraft = localStorage.getItem('draft');
    if (savedDraft) {
        editor.innerHTML = savedDraft;
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        // Here you would typically fetch results from a server
        // For now, we'll use a dummy search function
        const results = dummySearch(query);
        displaySearchResults(results);
    });

    function dummySearch(query) {
        const dummyArticles = [
            { title: 'JavaScript Basics', tags: ['javascript', 'programming'] },
            { title: 'CSS Flexbox Guide', tags: ['css', 'web design'] },
            { title: 'React vs Vue', tags: ['javascript', 'frameworks'] }
        ];
        return dummyArticles.filter(article => 
            article.title.toLowerCase().includes(query) || 
            article.tags.some(tag => tag.includes(query))
        );
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        results.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>Tags: ${article.tags.join(', ')}</p>
            `;
            searchResults.appendChild(articleElement);
        });
    }
});

