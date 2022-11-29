import React from "react";
import './Portfolio.css';
import { Link } from 'react-router-dom';


export function ProjectListing() {
    return (
        <div className="project-listing">
            <a href="./Game_Projects/calculator.html" className="project-anchors" target="_blank"><button className="project-buttons">Calculator</button></a>
            <a href="https://www.google.com" className="project-anchors" target="_blank"><button className="project-buttons">Magic 8-Ball</button></a>
            <Link to="/meal" className="project-link"><button className="project-buttons">Meal Suggestion Generator</button></Link>
            <a href="https://www.google.com" className="project-anchors" target="_blank"><button className="project-buttons">Tic Tac Toe</button></a>
        </div>
    );
}