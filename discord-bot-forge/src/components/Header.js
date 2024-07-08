// Header.js

import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleLogin = () => {
        const clientId = 'YOUR_DISCORD_CLIENT_ID';
        const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
        const scopes = encodeURIComponent('identify email guilds');
        const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;
        window.location.href = discordAuthUrl;
    };

    return (
        <header>
            <nav>
                <div className="logo">DiscordBotForge</div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={`nav-list ${isActive ? 'active' : ''}`}>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button id="login-button" onClick={handleLogin}>Sign in with Discord</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
