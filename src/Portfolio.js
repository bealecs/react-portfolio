import React, { useEffect } from "react";
import './Portfolio.css';
import {Navbar} from './Navbar'
import {Footer} from './Footer';
import { Welcome } from "./Welcome";
import SimpleSlider from "./Carousel";
import ProjectSlider from "./ProjectsCarousel";
import { ProfileImage } from "./ProfileImage";


export function Portfolio() {
 
  const [NavState, setNavState] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = (e) => {
    if(theme === "dark") {
      setTheme("light");
    } else if(theme === "light") {
      setTheme("dark");
    }
  }
  const handleClick = () => {
    if (!NavState) {
      setNavState(true);
    } else if (NavState) {
      console.log('already showing projects..');
    } else {
      alert('Something went wrong...');
      console.log('Something went wrong...');
    }
  }
  const handleClick2 = () => {
    if (NavState) {
      setNavState(false);
    } else if (!NavState) {
      console.log('already showing the home page...');
    } else {
      alert('Something went wrong...');
      console.log('Something went wrong...');
    }
  }
  var containerClassName = "container-" + theme
  var aboutContainerClassName = "about-section-" + theme

  return (
    <div className={containerClassName}>
      <div className="header-container">
        <Welcome />
        <Navbar home={handleClick2} theme={toggleTheme} projects={handleClick}/>
        <ProfileImage />
      </div>
      {NavState ? <ProjectSlider className={aboutContainerClassName} /> : <SimpleSlider className={aboutContainerClassName} />} 
      <Footer theme={toggleTheme} themeSetting={theme}/> 
    </div>
  )
}