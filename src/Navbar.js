import './Portfolio.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {

    return (
        <nav className="navbar">
          <div className="navbox-home" onClick={props.action}>Home
            {/* <button className='nav-button' onClick={props.action}>Home</button> */}
            <Link to="/" className="nav-item"></Link> 
          </div>
          <div className="navbox" onClick={props.onClick}>Projects
            {/* <button className='nav-button' onClick={props.onClick}>Projects</button> */}
            <Link to="/" className="nav-item"></Link>
          </div>
        </nav>
    );
}