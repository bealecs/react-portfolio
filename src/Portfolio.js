import React from "react";
import './Portfolio.css';
import {Navbar} from './Navbar'
import {Footer} from './Footer';
import { ProjectsCarousel } from "./ProjectsCarousel";
import { About } from "./About";
import { FeedbackForm } from "./Feedback";
import { Landing } from "./Landing";

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
      window.scrollTo(0, 900);
    } else if (NavState) {
      window.scrollTo(0, 900);
      console.log('already showing projects..');
    } else {
      alert('Something went wrong...');
      console.log('Something went wrong...');
    }
  }
  const handleClick2 = () => {
    if (NavState) {
      setNavState(false);
      window.scrollTo(0, 900);
    } else if (!NavState) {
      window.scrollTo(0, 900);
      console.log('already showing the home page...');
    } else {
      alert('Something went wrong...');
      console.log('Something went wrong...');
    }
  }

  var containerClassName = "container-" + theme;

  const aboutClassNames = {
    aboutBackground: "about-background-" + theme,
    aboutContainerClassName: "about-section-" + theme,
    outro: "outro-" + theme,
    message: "about-message-" + theme,
    aboutCards: "about-cards-" + theme,
    cards: "cards-" + theme,
    skillCards: "skill-cards-" + theme,
    para: "para-" + theme
  }

  const navClassNames = {
    welcomeTheme: "welcome-container-" + theme,
    aboutButton: "navbox-home-" + theme,
    projectsButton: "navbox-" + theme,
    themer: "themer-" + theme,
    theme: theme,
    navContainer: "nav-container-" + theme,
    logoFlex: "logo-flex-" + theme
  }
  
  const landingClassNames = {
    landingTheme: "landing-container-" + theme,
    welcomeThemeGoal: "goal-" + theme,
    img: "profile-" + theme,
    name: "name-" + theme,
    typewrite: "typewriter-" + theme,
    arrowDown: "arrow-down-" + theme
  }

  const projectClassNames = {
    outro: "outro-" + theme,
    projBackground: "projects-background-" + theme,
    projectCards: "project-cards-" + theme,
    mainProject: "main-project-" + theme
  }

  const footerClassNames = {
    footerTheme: "footer-" + theme,
    footerArrow: "footer-arrow-" + theme,

  }
  
  const feedbackClassNames = {
    feedbackTheme: "feedback-" + theme,
    submitFeedback: "submit-feedback-" + theme
  }

  return (
    <div className={containerClassName}>
      <div className="header-container">
        <Navbar
          className={navClassNames}
          home={handleClick2}
          projects={handleClick} 
          theme={toggleTheme}/>
      </div>
      <Landing className={landingClassNames}/>
      {NavState ? <ProjectsCarousel className={projectClassNames}/> : <About className={aboutClassNames}/>}
      <FeedbackForm className={feedbackClassNames}/>
      <Footer className={footerClassNames}/> 
    </div>
    
  )
}