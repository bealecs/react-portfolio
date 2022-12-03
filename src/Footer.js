import './Portfolio.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
    return (
        <footer className="footer">
            <h4>Contact me:</h4>
            <div className="footer-icons">
                <SocialIcon url="https://www.linkedin.com/in/clif-beale" target="_blank" bgColor="white" className="social-icon" />
                <SocialIcon url="https://github.com/bealecs?tab=repositories" target="_blank" bgColor="white" className="social-icon" />
                <SocialIcon url="https://twitter.com/ClifCodes" target="_blank" bgColor="white" className="social-icon" />
            </div>
        </footer>
    );
}