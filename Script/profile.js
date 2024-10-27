function initProfile() {
    const userInfo = document.getElementById('user-info');
    const userArticles = document.getElementById('user-articles');

    // Dummy user data
    const user = {
        name: 'John Doe',
        bio: 'Passionate writer and tech enthusiast',
        articles: [
            { title: 'My Journey in Web Development', date: '2023-04-15' },
            { title: 'The Future of AI', date: '2023-03-22' }
        ]
    };

    userInfo.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.bio}</p>
    `;

    user.articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `
            <h4>${article.title}</h4>
            <p>Published on: ${article.date}</p>
        `;
        userArticles.appendChild(articleElement);
    });
}
