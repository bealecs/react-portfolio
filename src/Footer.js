import './Portfolio.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';


export function Footer(props) {
   
    return (
        <footer className="footer">
            <h4>Feel free to reach out! Find me here :</h4>
            <div className="footer-icons">
                <SocialIcon url="https://www.linkedin.com/in/clif-beale" target="_blank" bgColor='white' className="social-icon" />
                <SocialIcon url="https://github.com/bealecs?tab=repositories" target="_blank" bgColor="white" className="social-icon" />
                <SocialIcon url="https://discordapp.com/users/Clif#6040" target="_blank" bgColor="white" className="social-icon" />
                
            </div>
        </footer>
    );
}