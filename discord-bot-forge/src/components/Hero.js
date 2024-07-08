import React from 'react';
import './Hero.css';

function Hero() {
    const handleGetStarted = () => {
        window.location.href = '#pricing';
    };

    return (
        <section id="hero">
            <h1>Create Discord Bots Without Writing Code</h1>
            <p>Build and deploy your own Discord bots effortlessly.</p>
            <button id="get-started-button" className="btn" onClick={handleGetStarted}>Get Started</button>
        </section>
    );
}

export default Hero;
