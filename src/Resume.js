import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const Resume = () => { 

    const resume = require('./resume.webp');

    return (
        <>
        <AdvancedNavbar />
        <div className="resume-container">
            <div className="resume">
                <a href="ClifsResume.pdf" download="ClifsResume.pdf" style={{textAlign:'center',cursor:"pointer", fontSize:"2rem"}}>Download a copy</a> 
                <img src={resume} alt="A screenshot copy of my up to date resume"/> 
            </div>
        </div>    
        </>
    )
}