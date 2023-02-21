import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

export const Navbar = (props) => {
    
    const logo = require("./logo.png")
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className={props.navContainer}>
            <div className="logo-flex">
                <img src={logo} alt="a logo for my portfolio that says Clif Codes" />
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