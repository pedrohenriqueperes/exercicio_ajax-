document.addEventListener('DOMContentLoaded', function() {
    const username = 'pedrohenriqueperes'; // Nome de usuário no GitHub
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Atualizando os elementos da página com os dados recebidos
        document.querySelector('.profile-avatar').src = data.avatar_url;
        document.querySelector('.profile-name').textContent = data.name || username;
        document.querySelector('.profile-username').textContent = `@${username}`;
        document.querySelectorAll('.numbers-item')[0].querySelector('span').textContent = data.public_repos;
        document.querySelectorAll('.numbers-item')[1].querySelector('span').textContent = data.followers;
        document.querySelectorAll('.numbers-item')[2].querySelector('span').textContent = data.following;
        document.querySelector('.profile-link').href = data.html_url;
        document.querySelector('.profile-link').textContent = 'Ver no Github';
    })
    .catch(error => {
        console.error('Fetching error:', error.message);
    });
});
