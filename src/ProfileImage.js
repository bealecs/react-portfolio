import React from "react";
import './Portfolio.css';

export function ProfileImage() {
    
    const logo = require('./logo512.jpg');

    return (
        <div className="container3">
            <img src={logo} alt='profile-img' className='profile-img' style={{width: 200, height: 200}}/>
        </div>
    );
}