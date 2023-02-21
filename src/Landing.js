import React from "react";
import './Portfolio.css';
import Typewriter from "typewriter-effect";

export const Landing = (props) => {

    const logo = require('./logo512.jpg');
    
    return (
        <>
            <div className={props.className1}>
                <div className="landing-div">
                <img src={logo} alt='profile-img' className={props.className6} style={{width: 300, height: 300}}/>
                <h1 className={props.className5}>Clifton Beale</h1>
                </div>
                <div className={props.className7}>
                    <Typewriter
                        options={{
                        strings: ['Husband', 'Web Developer', 'Problem Solver' , 'Doggie Dad x2', 'Gamer', 'Snowboarder'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </div>
                <h3 className={props.className2}>#VetsWhoCode 
                    <br/>
                    <br/> 
                    <h1 
                        style={{margin:'auto', fontSize:'4.5rem', color:'#CCDBDC', cursor:'pointer'}} 
                        onClick={() => window.scrollTo(0, 1000)}>⇓</h1>
                </h3>
            </div>
        </>
    )
}