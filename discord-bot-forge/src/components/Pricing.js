import React from 'react';
import './Pricing.css';
import freeTierImg from '../assets/images/no-money.png';
import premiumTierImg from '../assets/images/premium-quality.png';

function Pricing() {
    return (
        <section id="pricing">
            <h2>Pricing</h2>
            <div className="pricing-container">
                <div className="pricing-tier">
                    <img src={freeTierImg} alt="Free Tier" />
                    <h3>Free</h3>
                    <ul>
                        <li>Create one bot</li>
                        <li>Host it yourself</li>
                        <li>Basic support</li>
                    </ul>
                </div>
                <div className="pricing-tier">
                    <img src={premiumTierImg} alt="Premium Tier" />
                    <h3>Premium</h3>
                    <ul>
                        <li>£15/month</li>
                        <li>Create unlimited bots</li>
                        <li>Hosting included</li>
                        <li>Priority support</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
