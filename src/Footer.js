import './Portfolio.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';


export function Footer(props) {
   
    const logo = require('./logo.png');

    return (
        <footer className={props.footer}>
            
            <div className="footer-icons">
                <div>
                    <img src={logo} alt="Clif Codes logo"/>
                </div>
                <div>
                    <h4 style={{marginBottom:'10%'}}>View my LinkedIn Profile</h4>
                    <SocialIcon url="https://www.linkedin.com/in/clif-beale" target="_blank" bgColor='white' className="social-icon"/>
                </div>
                <div>
                    <h4 style={{marginBottom:'10%'}}>Check out my Github </h4>
                    <SocialIcon url="https://github.com/bealecs?tab=repositories" target="_blank" bgColor="white" className="social-icon" />
                </div>
                <div>
                    <h4 style={{marginBottom:'10%'}}>Send me a chat in Discord</h4>
                    <SocialIcon url="https://discordapp.com/users/Clif#6040" target="_blank" bgColor="white" className="social-icon" />
                </div>
                <div className={props.className1}>
                    <h4 style={{marginBottom:'10%'}}>Back to top of page</h4>
                    <h1 onClick={() => window.scrollTo(0, 0)}>⇑</h1>
                </div>
            </div>
        </footer>
    );
}