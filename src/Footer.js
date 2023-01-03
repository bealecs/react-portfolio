import './Portfolio.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';


export function Footer(props) {
   function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <footer className="footer">
            <h4>Contact me:</h4>
            <div className="footer-icons">
                <SocialIcon url="https://www.linkedin.com/in/clif-beale" target="_blank" bgColor='white' className="social-icon" />
                <SocialIcon url="https://github.com/bealecs?tab=repositories" target="_blank" bgColor="white" className="social-icon" />
                <SocialIcon url="https://discordapp.com/users/Clif#6040" target="_blank" bgColor="white" className="social-icon" />
                <button className="themer" onClick={props.theme}>{"Display: " + Capitalize(props.themeSetting)}</button>
            </div>
        </footer>
    );
}