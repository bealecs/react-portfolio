import React from "react";
import { ProfileImage } from "./ProfileImage";
import { AboutContainer } from "./AboutContainer";
import SimpleSlider from "./Carousel";

export function Welcome() {
    return (
        <div className="welcome-container">
            <div className="container2">
            <section className="body">
                <h1 className="name">Clifton Beale</h1>
                <h3 className="goal">Aspiring Front-End Web Developer</h3>
            </section>
            <ProfileImage />
            </div>
            <section className="about-section">
                <SimpleSlider />
            </section>
         </div>
    );
}