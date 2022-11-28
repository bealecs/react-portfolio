import './Portfolio.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbox">
            <Link to="/" className="nav-item">Home</Link>
          </div>
          <div className="navbox">
            <Link to="/meal" className="nav-item">Projects</Link>
          </div>
        </nav>
    );
}