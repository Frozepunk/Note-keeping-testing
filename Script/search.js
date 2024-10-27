function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
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
}
