import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

export const Navbar = (props) => {
    
    const logo = require('./logo512.jpg');
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className={props.navContainer}>
            <div className={props.className}>
                {/* <img src={logo} alt='profile-img' className={props.className6} style={{width: 200, height: 200}}/>
                <h1 className={props.className5}>Clifton Beale</h1>
                <h3 className={props.className2}>Front-End Web Developer <br></br><br></br> #VetsWhoCode</h3> */}
                <div className="nav-buttons-div">
                <div className={props.className3} onClick={props.home}>About
                    <Link to="/" className="nav-item"></Link> 
                </div>
                <div className={props.className4} onClick={props.projects}>Projects  
                    <Link to="/" className="nav-item"></Link>
                </div>
                </div>
                <h2 className={props.className7} onClick={props.theme}>{props.themeSetting === "dark" ? "🔆" : "🌙"}</h2>
            </div>
            
        </div>
    )
}