import React from "react";
import './Portfolio.css';
import {Navbar} from './Navbar'
import {Footer} from './Footer';
import { Welcome } from "./Welcome";
import SimpleSlider from "./Carousel";
import ProjectSlider from "./ProjectsCarousel";
import { ProfileImage } from "./ProfileImage";


export function Portfolio() {
 
  const [NavState, setNavState] = React.useState(false);

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


  return (
    <div className="container">
      <div className="header-container">
        <Welcome />
        <Navbar home={handleClick2} projects={handleClick}/>
        <ProfileImage />
      </div>
      {NavState ? <ProjectSlider /> : <SimpleSlider />} 
      <Footer /> 
    </div>
  )
}