document.getElementById('login-button').addEventListener('click', () => {
    const clientId = '1259357668527837184';
    const redirectUri = encodeURIComponent('https://unofficialdxnny.github.io/DiscordBotForge/DBS/create.html');
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

// Function to get user info from Discord API after authorization
async function getUserInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        const clientId = '1259357668527837184';
        const clientSecret = '2KyBEcTBLaXLP1TqicwWojR4VN07Fiyp';
        const redirectUri = 'https://unofficialdxnny.github.io/DiscordBotForge/DBS/create.html';

        const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri
            })
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const userResponse = await fetch('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const userData = await userResponse.json();
        document.getElementById('user-avatar').src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
        document.getElementById('user-name').innerText = userData.username;
    }
}

if (window.location.pathname.endsWith('/create.html')) {
    getUserInfo();
}
