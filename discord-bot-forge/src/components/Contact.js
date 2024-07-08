import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
// import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <div className="social-media">
                <a href="https://instagram.com/unofficialdxnny" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://discord.gg/7HnSE6Jsam" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>

            </div>
        </section>
    );
}

export default Contact;
