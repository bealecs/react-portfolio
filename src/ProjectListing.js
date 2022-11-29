import React from "react";
import './Portfolio.css';
import { Link } from 'react-router-dom';


export function ProjectListing() {
    return (
        <div className="project-listing">
            <a href="https://bealecs.github.io/portfolio/Game%20Projects/calculator.html" className="project-anchors" target="_blank"><button className="project-buttons">Calculator</button></a>
            <a href="https://bealecs.github.io/portfolio/Game%20Projects/8Ball.html" className="project-anchors" target="_blank"><button className="project-buttons">Magic 8-Ball</button></a>
            <Link to="/meal" className="project-link"><button className="project-buttons">Meal Suggestion Generator</button></Link>
            <a href="https://bealecs.github.io/portfolio/Game%20Projects/xo.html" className="project-anchors" target="_blank"><button className="project-buttons">Tic Tac Toe</button></a>
        </div>
    );
}