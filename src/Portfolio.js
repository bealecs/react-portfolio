import React from "react";
import './Portfolio.css';
import {Navbar} from './Navbar'
import {Footer} from './Footer';
import SimpleSlider from "./Carousel";
import ProjectSlider from "./ProjectsCarousel";
import { About } from "./About";
import { FeedbackForm } from "./Feedback";

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
  var containerClassName = "container-" + theme;
  var aboutContainerClassName = "about-section-" + theme;
  var aboutButton = "navbox-home-" + theme;
  var projectsButton = "navbox-" + theme;
  var welcomeTheme = "welcome-container-" + theme;
  var welcomeThemeGoal = "goal-" + theme;
  var buttonTheme = "theme-" + theme;
  
  return (
    <div className={containerClassName}>
      <div className="header-container">
        <Navbar 
          className={welcomeTheme}
          className2={welcomeThemeGoal} 
          className3={aboutButton} 
          className4={projectsButton} 
          home={handleClick2}
          projects={handleClick} 
          theme={toggleTheme}
          themeSetting={theme}/>
      </div>
      {NavState ? <ProjectSlider className={aboutContainerClassName} className2={buttonTheme}/> : <About />}
      <FeedbackForm />
      <Footer/> 
    </div>
    
  )
}