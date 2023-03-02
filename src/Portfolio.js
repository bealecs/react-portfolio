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
  var landingTheme = "landing-container-" + theme;
  var welcomeThemeGoal = "goal-" + theme;
  var name = "name-" + theme;
  var img = "profile-" + theme;
  var outro = "outro-" + theme;
  var footerTheme = "footer-" + theme;
  var footerArrow = "footer-arrow-" + theme;
  var feedbackTheme = "feedback-" + theme;
  var submitFeedback = "submit-feedback-" + theme;
  var projBackground = "projects-background-" + theme;
  var typewrite = "typewriter-" + theme;
  var arrowDown = "arrow-down-" + theme;
  var projectCards = "project-cards-" + theme;
  var mainProject = "main-project-" + theme;

  return (
    <div className={containerClassName}>
      <div className="header-container">
        <Navbar
          className={navClassNames}
          home={handleClick2}
          projects={handleClick} 
          theme={toggleTheme}/>
      </div>
      <Landing 
        className={landingClassNames}
        />
      {NavState ? <ProjectsCarousel outro={outro} background={projBackground} projectCards={projectCards} mainProject={mainProject} /> : <About className={aboutClassNames}/>}
      <FeedbackForm feedback={feedbackTheme} submitFeedback={submitFeedback}/>
      <Footer footer={footerTheme} className1={footerArrow}/> 
    </div>
    
  )
}