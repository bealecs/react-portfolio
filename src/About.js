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
                    <img src={code}/>
                    <h4>I like to code</h4>
                    <p>I have had a passion for technology since I was young. I began teaching myself some java at around age 13, and took off from there.
                        I can start coding and get lost in my work and spend hours doing it without getting bored. It's like solving a puzzle for me.
                    </p>
                </div>
                <div className={props.cards}>
                    <img src={gaming} style={{aspectRatio:'1.6'}}/>
                    <h4>I like gaming</h4>
                    <p>I think my love for coding and my love for gaming go hand in hand. I discovered my passion for coding from playing MMORPGs when I was young. To this day, 
                        I am still up to date on a lot of the popular games and enjoy playing in my free time.
                    </p>
                </div>
                <div className={props.cards}>
                    <img src={working}/>
                    <h4>I like to work</h4>
                    <p>I have a strong work ethic when doing work that I enjoy. Like I said, I can go hours and hours coding without getting bored. It keeps my brain and fingers busy, which is good
                        for me! Working out problems as they come is what I do best.
                    </p>
                </div>
                <div className={props.cards}>
                    <img src={family}/>
                    <h4>I'm a family man</h4>
                    <p>I got married in September of 2023 to my beautiful wife Marisela. Since then, we closed on our first house! Together we have two puppies, Max and Nymeria, and I wouldn't trade it for the world.</p>
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
        </div>
    )
}