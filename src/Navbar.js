import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

export const Navbar = (props) => {
    
    const logo = require("./logo.png")
    
    return (
        <div className={props.navContainer}>
            <div className="logo-flex">
                <img src={logo} style={{cursor:'pointer'}} onClick={() => window.scrollTo(0, 0)} alt="a logo for my portfolio that says Clif Codes" />
            </div>
            <div className={props.className}>
                <div className={props.className3} onClick={props.home}>About
                    <Link to="/" className="nav-item"></Link> 
                </div>
                <div className={props.className4} onClick={props.projects}>Projects  
                    <Link to="/" className="nav-item"></Link>
                </div>
                
                <h2 className={props.className7} onClick={props.theme}>{props.themeSetting === "dark" ? "🔆" : "🌙"}</h2>
            </div>
        </div>
    )
}