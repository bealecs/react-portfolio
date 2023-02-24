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
  
  var aboutBackground = "about-background-" + theme;
  var containerClassName = "container-" + theme;
  var aboutContainerClassName = "about-section-" + theme;
  var aboutButton = "navbox-home-" + theme;
  var projectsButton = "navbox-" + theme;
  var welcomeTheme = "welcome-container-" + theme;
  var landingTheme = "landing-container-" + theme;
  var welcomeThemeGoal = "goal-" + theme;
  var name = "name-" + theme;
  var img = "profile-" + theme;
  var themer = "themer-" + theme;
  var message = "about-message-" + theme;
  var cards = "about-cards-" + theme;
  var cards2 = "cards-" + theme;
  var skillCards = "skill-cards-" + theme;
  var outro = "outro-" + theme;
  var navContainer = "nav-container-" + theme;
  var footerTheme = "footer-" + theme;
  var footerArrow = "footer-arrow-" + theme;
  var feedbackTheme = "feedback-" + theme;
  var submitFeedback = "submit-feedback-" + theme;
  var projBackground = "projects-background-" + theme;
  var typewrite = "typewriter-" + theme;
  var para = "para-" + theme;
  var arrowDown = "arrow-down-" + theme;
  var projectCards = "project-cards-" + theme;
  var mainProject = "main-project-" + theme;

  return (
    <div className={containerClassName}>
      <div className="header-container">
        <Navbar
          className={welcomeTheme}
          className3={aboutButton} 
          className4={projectsButton}
          className7={themer} 
          home={handleClick2}
          projects={handleClick} 
          theme={toggleTheme}
          themeSetting={theme}
          navContainer={navContainer}/>
      </div>
      <Landing 
        className1={landingTheme}
        className2={welcomeThemeGoal}
        className5={name}
        className6={img}
        className7={typewrite}
        className8={arrowDown}
        />
      {NavState ? <ProjectsCarousel outro={outro} background={projBackground} projectCards={projectCards} mainProject={mainProject} /> : <About className={aboutContainerClassName} aboutBackground={aboutBackground} outro={outro} message={message} aboutCards={cards} cards={cards2} skillCards={skillCards} para={para}/>}
      <FeedbackForm feedback={feedbackTheme} submitFeedback={submitFeedback}/>
      <Footer footer={footerTheme} className1={footerArrow}/> 
    </div>
    
  )
}