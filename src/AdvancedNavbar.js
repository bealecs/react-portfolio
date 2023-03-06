import React from "react";
import { Link } from 'react-router-dom';
import './Portfolio.css';

export const AdvancedNavbar = (props) => {
    
    return (
        <div style={{display:'flex', justifyContent:'space-between', backgroundColor:"#003249", alignItems:'center'}}>
            <div>
                <h1 style={{fontFamily:'monospace', color:'#CCDBDC', fontSize:"3rem"}} onClick={() => window.scrollTo(0, 0)}>Clif Codes</h1>
            </div>
            <div>
            <Link to="/" className="nav-item">
                <span style={{paddingRight:'1%', color:'#CCDBDC', fontSize:'2rem', cursor:'pointer'}}>Back to home  
                </span>
                </Link> 
            </div>
        </div>
    )
}