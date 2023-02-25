import React from "react";

export const ProjectsCarousel = (props) => {

  const pips = require("./pipswithpaul.png");
  const catalog = require("./clifscatalog.png");

    return (
      <div className={props.background}>
        <h2>My Projects</h2>
        <div className={props.mainProject}>
          <div className={props.projectCards}>
            <h4>Pips With Paul</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <img style={{width:'90%', padding:"2%"}} src={pips} alt="screenshot of my website Pips With Paul"/>
          </div>
          <div className={props.projectCards}>
            <h4>Clif's Catalog</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <img style={{width:'90%', padding:'2%'}} src={catalog} alt="screenshot of my website clif's catalog"/>
          </div>
        </div>
        <h2 className={props.outro}>Since I started learning, I've had high hopes. Becoming a member of the Vets Who Code group is a huge step in the right direction for me. I have been diving deep into learning 
          different frameworks and just learning with what was out there. In the future, I hope to integrate more AI into my work in order to assist and amplify my skills. All in all, I am very
          excited to see where this road takes me. Thank you for checking out my page!
        </h2>
      </div>
    );
  }