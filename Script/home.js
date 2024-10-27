function initHome() {
    const featuredArticles = document.getElementById('featured-articles');
    
    // Dummy data for featured articles
    const articles = [
        { title: 'Getting Started with JavaScript', excerpt: 'Learn the basics of JavaScript programming...' },
        { title: 'CSS Grid Layout', excerpt: 'Master the power of CSS Grid for responsive designs...' },
        { title: 'Introduction to React', excerpt: 'Build interactive UIs with React...' }
    ];

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article-card');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
        `;
        featuredArticles.appendChild(articleElement);
    });
}
