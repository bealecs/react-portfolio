import React from "react";
import './Portfolio.css';
import Typewriter from "typewriter-effect";

export const Landing = (props) => {

    const logo = require('./logo512.webp');
    
    return (
        <>
            <div className={props.className.landingTheme}>
                <div className="landing-div">
                <img src={logo} alt='Clifton Beale' className={props.className.img} style={{width: 300, height: 300}}/>
                <h1 className={props.className.name}>Clifton Beale</h1>
                </div>
                <div className={props.className.typewrite}>
                    <Typewriter
                        options={{
                        strings: ['Husband', 'Web Developer', 'Veteran', 'Problem Solver' , 'Doggie Dad x2', 'Gamer', 'Snowboarder'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </div>
                <h3 className={props.className.welcomeThemeGoal}>#VetsWhoCode 
                    <br/>
                    <br/> 
                    <span 
                        className={props.className.arrowDown} 
                        onClick={() => window.scrollTo(0, 900)}>⇓</span>
                </h3>
            </div>
        </>
    )
}