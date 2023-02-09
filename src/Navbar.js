import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

export const Navbar = (props) => {
    
    const logo = require('./logo512.jpg');
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="nav-container">
            <div className={props.className}>
                <img src={logo} alt='profile-img' className='profile-img' style={{width: 200, height: 200}}/>
                <h1 className="name">Clifton Beale</h1>
                <h3 className={props.className2}>Front-End Web Developer <br></br><br></br> #VetsWhoCode</h3>
                <div className={props.className3} onClick={props.home}>About
                    <Link to="/" className="nav-item"></Link> 
                </div>
         
                <div className={props.className4} onClick={props.projects}>Projects  
                    <Link to="/" className="nav-item"></Link>
                </div>
                <button className="themer" onClick={props.theme}>{"Toggle Display: " + Capitalize(props.themeSetting)}</button>
            </div>
            
        </div>
    )
}