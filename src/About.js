import React from "react";
import { Link } from "react-router-dom";

export const About = (props) => {
    
    const collage = require('./collage.webp')

    return (
        <>
        <div className={props.className.aboutBackground} id="about">
        <div className={props.className.message}>
            <h2 style={{fontWeight:'bold'}}>About me</h2>
            <div className={props.className.aboutCards}>
                <div>
                    <img src={collage} alt="collage of photos from my life - includes pictures of my wife (Marisela) and me"/>
                </div>
                <div>
                    <p className={props.className.para}>I value my wife and puppies more than anything. I play hard, and work even harder. Most of my time is spent either with my wife, Marisela, working, or developing.</p>
                </div>
            </div>
            <div className={props.className.outro}>
                <h1 style={{marginBottom:'3%'}}>I've come a long way</h1>
                <p>
                    For a little over a year now, I have really thrown my all at learning web development. My studies have leaned heavier towards the side of front-end development, but have not been limited to it.
                    It is my goal to grow each day, and #VetsWhoCode is helping to make that happen. #VetsWhoCode is a group of like-minded veterans that was built by veterans for veterans.
                    Vets Who Code helps teach and train transitioning veterans that are struggling to find their place in the development community. I was fortunate
                    enough to be selected as a part of such a great group. Check them out <a href="https://vetswhocode.io/" target='_blank' rel="noopener noreferrer" style={{fontWeight:"bold", textDecoration:'underline', cursor:'pointer'}}>here</a>. I cannot wait to see what is in store for me down the road, and what else I will learn as the days go by. 
                </p>
            </div>
            <div className={props.className.skillCards}>
                <h4>My Applicable Skills:</h4>
                <ul>
                    <li>Version Control with Github - Check out my repos <a href="https://github.com/bealecs" target="_blank" rel="noopener noreferrer" style={{fontWeight:"bold", textDecoration:'underline', cursor:'pointer'}}>here</a></li>
                    <li>Vanilla JavaScript : familiar with OOP and other important JS concepts</li>
                    <li>Experience with both React Library and NextJS Framework</li>
                    <li>Experience with UI/UX Design and wireframing with Figma</li>
                    <li>For a full view of my history/skills, please view <Link to='/resume' style={{fontWeight:"bold", textDecoration:'underline', cursor:'pointer'}}>my current Résumé</Link></li>
                </ul>
            </div>
        </div>
        </div>
        </>
    )
}