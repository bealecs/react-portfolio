import './Portfolio.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {

    return (
        <nav className="navbar">
          <div className="navbox-home" onClick={props.home}>About
            <Link to="/" className="nav-item"></Link> 
          </div>
         
          <div className="navbox" onClick={props.projects}>Projects  
            <Link to="/" className="nav-item"></Link>
          </div>
        </nav>
    );
}