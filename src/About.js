import React from "react";

export const About = (props) => {

    const code = require("./code.png");
    const gaming = require("./gaming.png");
    const working = require('./working.png');
    const family = require('./family.png');

    return (
        <div className={props.message}>
            <h2>I'm a simple man</h2>
            <div className={props.aboutCards}>
                <div className={props.cards}>
                    <img style={{height:"50%"}} src={family}/>
                    <h4>Family</h4>
                    <p>I got married in September of 2022 to my beautiful wife Marisela. Since then, we closed on our first house! Together we have two puppies, Max and Nymeria, and I wouldn't trade it for the world.
                        My wife is my biggest supporter and has been a big help along my journey.
                    </p>
                </div>
                <div className={props.cards}>
                    <img style={{height:"50%"}} src={code}/>
                    <h4>Coding</h4>
                    <p>I have had a passion for technology since I was young. I began teaching myself some java at around age 13, and took off from there.
                        I can start coding and get lost in my work and spend hours doing it without getting bored. It's like solving a puzzle for me.
                    </p>
                </div>
                <div className={props.cards}>
                    <img style={{height:"50%"}} src={gaming}/>
                    <h4>Gaming</h4>
                    <p>I think my love for coding and my love for gaming go hand in hand. I discovered my passion for coding from playing MMORPGs when I was young. To this day, 
                        I am still up to date on a lot of the popular games and enjoy playing in my free time.
                    </p>
                </div>
                <div className={props.cards}>
                    <img style={{height:"50%"}} src={working}/>
                    <h4>Work</h4>
                    <p>I have a strong work ethic when doing work that I enjoy. Like I said, I can go hours and hours coding without getting bored. It keeps my brain and fingers busy, which is good
                        for me! Working out problems as they come is what I do best.
                    </p>
                </div>
            </div>
            <div className={props.outro}>
                <h2>I've come a long way</h2>
                <p>
                    For a little over a year now, I have really thrown my all at learning web development. My studies have leaned heavier towards the side of front-end development, but have not been limited to it.
                    It is my goal to grow each day, and #VetsWhoCode is helping to make that happen. #VetsWhoCode is a group of like-minded veterans that was built by veterans for veterans. I was fortunate
                    enough to be selected as a part of such a great group. I cannot wait to see what is in store for me down the road, and what else I will learn as the days go by. 
                </p>
            </div>
            <div className={props.skillCards}>
                <h4>My Applicable Skills:</h4>
                <ul>
                    <li>Version Control with Github - Check out my repos <a >here</a></li>
                    <li>Vanilla JavaScript : familiar with OOP and other important JS concepts</li>
                    <li>Worked with both React Library and NextJS Framework</li>
                    <li>UI/UX Design and wireframing with Figma</li>
                    <li>For a full view of my history/skills, please view <a>my current Résumé</a></li>
                </ul>
            </div>
        </div>
    )
}