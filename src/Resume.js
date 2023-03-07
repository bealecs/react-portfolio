import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const Resume = () => { 

    const resume = require('./resume.webp');

    return (
        <>
        <AdvancedNavbar />
            <div className="resume">
                <img src={resume} alt="A screenshot copy of my up to date resume"/>
                <a href="ClifsResume.pdf" download="ClifsResume.pdf" style={{textAlign:'center',cursor:"pointer"}}>Download a copy of Clif's Résumé</a>    
            </div>    
        </>
    )
}