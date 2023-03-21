import React from "react";
import { Link } from "react-router-dom";

export const ProjectsCarousel = (props) => {

  const pips = require("./pipswithpaul.webp");
  const catalog = require("./clifscatalog.webp");
  const cclighting = require("./cclightingpage.webp");

    return (
      <div className={props.className.projBackground}>
        <h2>My Projects</h2>
        <div className={props.className.mainProject}>
          <div className={props.className.projectCards}>
            <Link to='/pipswithpaul'>
            <h4>Pips With Paul</h4>
            <p>I offered a friend my services to create a website for him. My friend, Paul, teaches his students how to navigate the Forex trading market to be successful. This project
                uses NextJS, Firebase for authentication & firestore, and Stripe to integrate subscription based plans for his students. While it has proven challenging venturing into new
                frameworks and libraries, it is always fun to learn new things.<br></br><br></br>
                Read more <a href="/pipswithpaul" target="_blank" rel="noopener noreferrer" style={{fontWeight:"bold", textDecoration:'underline', cursor:'pointer'}}>here</a> 
            </p>
            <img style={{padding:"2%", alignItems:'center'}} src={pips} alt="screenshot of my website Pips With Paul"/>
            </Link>
          </div>
          <div className={props.className.projectCards}>
            <Link to='/clifscatalog'>
            <h4>Clif's Catalog</h4>
            <p>This project started out as a random meal generator, and then I decided I wanted to go a little further. Now, you can not only generate random meals, but you can also
                search for different meals by individual categories. This project was created mainly using React JS. Utilizes TheMealDB API for the meal content. My favorite thing about this
                project is still the random meal generator, though.<br></br><br></br>
                Read more <a href="/meal" target="_blank" rel="noopener noreferrer" style={{fontWeight:"bold", textDecoration:'underline', cursor:'pointer'}}>here</a> 
            </p>
            <img style={{padding:'2%', alignItems:'center'}} src={catalog} alt="screenshot of my website clif's catalog"/>
            </Link>
          </div>
          <div className={props.className.projectCards}>
            <Link to='/cclighting'>
            <h4>CC Lighting</h4>
            <p>This project is was completed for my older brother and good friend that own an exterior lighting company in southeastern VA. Customers can use their site for getting
              in contact with Cross & Carlile, checking out their showcased photo gallery of previous work, learning about the background of Cross & Carlile, and even seeing their customer's
              reviews and the products/warranties that they use. This project was created with React and uses EmailJS for the contact page. <br></br><br></br>
                Read more <a href="/cclighting" target="_blank" rel="noopener noreferrer" style={{fontWeight:"bold", textDecoration:'underline', cursor:'pointer'}}>here</a> 
            </p>
            <img style={{padding:'2%', alignItems:'center'}} src={cclighting} alt="screenshot of my website cc lighting"/>
            </Link>
          </div>
        </div>
        <h2 className={props.className.outro}>Since I started learning, I've had high hopes. Becoming a member of the Vets Who Code group is a huge step in the right direction for me. I have been diving deep into learning 
          different frameworks and just learning with what was out there. In the future, I hope to integrate more AI into my work in order to assist and amplify my skills. All in all, I am very
          excited to see where this road takes me. Thank you for checking out my page!
        </h2>
      </div>
    );
  }