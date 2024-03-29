import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

export const Navbar = (props) => {
    
    return (
        <div className={props.className.navContainer}>
            <div className={props.className.logoFlex}>
                <h1 style={{fontFamily:'monospace'}} onClick={() => window.scrollTo(0, 0)}>Clif Codes</h1>
            </div>
            <div className={props.className.welcomeTheme}>
                <div className={props.className.aboutButton} onClick={props.home}>About
                    <Link to="/" className="nav-item"></Link> 
                </div>
                <div className={props.className.projectsButton} onClick={props.projects}>Projects  
                    <Link to="/" className="nav-item"></Link>
                </div>
                <Link to="/resume" className={props.className.projectsButton}>Resume</Link>
                <h2 className={props.className.themer} onClick={props.theme}>{props.className.theme === "dark" ? "🔆" : "🌙"}</h2>
            </div>
        </div>
    )
}