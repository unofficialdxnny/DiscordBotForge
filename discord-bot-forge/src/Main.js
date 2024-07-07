// src/ProductShowcase.js
import React from 'react';
import './Main.css';

const MainSection = () => {
    return (
        <div className="product-showcase">
            <div className="product-info">
                <h1>Product Title</h1>
                <p>
                    This is a description of the product. It highlights key features and benefits,
                    enticing users to learn more about it.
                </p>
                <button className="discord-login-btn">Login with Discord</button>
            </div>
            <div className="product-image">
                <img src="https://cdn.discordapp.com/attachments/1223616744979955834/1259571196526334015/MainImage.png?ex=668c2a96&is=668ad916&hm=eb402029e2c3cd99c01912535fbf8b1d89cfb265300f1ce85de6b3e8639b1850&" alt="Product" />
            </div>
        </div>
    );
};

export default MainSection;
