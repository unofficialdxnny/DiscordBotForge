import React from 'react';
import './Features.css';
import easyToUseImg from '../assets/images/3858639.png';
import customizableImg from '../assets/images/optimize.png';
import reliableHostingImg from '../assets/images/cloud-server.png';

function Features() {
    return (
        <section id="features">
            <h2>Features</h2>
            <div className="features-container">
                <div className="feature">
                    <img src={easyToUseImg} alt="Easy to Use" />
                    <h3>Easy to Use</h3>
                    <ul>
                        <li>Intuitive drag-and-drop interface</li>
                        <li>No coding skills required</li>
                        <li>Real-time bot testing</li>
                    </ul>
                </div>
                <div className="feature">
                    <img src={customizableImg} alt="Customizable" />
                    <h3>Customizable</h3>
                    <ul>
                        <li>Personalize your bot's behavior</li>
                        <li>Wide range of templates</li>
                        <li>Advanced configuration options</li>
                    </ul>
                </div>
                <div className="feature">
                    <img src={reliableHostingImg} alt="Reliable Hosting" />
                    <h3>Reliable Hosting</h3>
                    <ul>
                        <li>24/7 uptime</li>
                        <li>Scalable infrastructure</li>
                        <li>Automatic updates and backups</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Features;
