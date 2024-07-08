document.getElementById('login-button').addEventListener('click', () => {
    // Redirect to Discord OAuth2 authorization page
    const clientId = 'YOUR_DISCORD_CLIENT_ID';
    const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
    const scopes = encodeURIComponent('identify email guilds');
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;
    window.location.href = discordAuthUrl;
});

document.getElementById('get-started-button').addEventListener('click', () => {
    window.location.href = '#pricing';
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('active');
});
