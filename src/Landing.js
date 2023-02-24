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
                        strings: ['Husband', 'Web Developer', 'Veteran', 'Problem Solver' , 'Doggie Dad x2', 'Gamer', 'Snowboarder'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </div>
                <h3 className={props.className2}>#VetsWhoCode 
                    <br/>
                    <br/> 
                    <span 
                        className={props.className8} 
                        onClick={() => window.scrollTo(0, 900)}>⇓</span>
                </h3>
            </div>
        </>
    )
}