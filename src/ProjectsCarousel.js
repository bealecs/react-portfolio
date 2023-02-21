import React, { Component } from "react";
import Slider from "react-slick";
import { FeedbackForm } from "./Feedback";

export default class ProjectSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    const calculator = "https://clipartix.com/wp-content/uploads/2018/03/easy-clipart-2018-4.png";
    const food = "https://clipartix.com/wp-content/uploads/2018/03/burger-clipart-2018-15.png";
    const xo = require("./xo.png");
    const ball = "https://pipswithpaul.vercel.app"
    const calcUrl = 'https://bealecs.github.io/portfolio/Game%20Projects/calculator.html';
    const ballUrl = 'https://freepngimg.com/thumb/stock_market/25581-7-stock-market-graph-up-transparent-image-thumb.png';
    const xoUrl = 'https://bealecs.github.io/portfolio/Game%20Projects/xo.html';
    const mealUrl = "https://clifscatalog.netlify.app";

    return (
      <div className={this.props.background}>
      <h2 className={this.props.starter}>Showcase : </h2>
      <div className={this.props.className}>
        <div className="slider-container">
        <h2> My Projects</h2>
        <Slider {...settings} style={{marginBottom:'5%'}}>
        <div className="proj">
            <div className="proj-inline">
              <img src={ballUrl} alt="stock market clipart" style={{ width: 300, height: 300 }} />
              <h2>Pips with Paul</h2>
            </div>
            <div className="proj-inline2">
              <p>This is a project that I am currently working on for a friend. He is a mentor for Forex market training, and is launching a subscription based training platform with my help. I am
                creating this project using NextJs with Firebase for my user authentication and database.
              </p>
              <a href={ball} target="_blank" rel="noopener noreferrer"><button className={this.props.className2}>Go</button></a>
            </div>
          </div>
          <div className="proj">
            <div className="proj-inline">
              <img src={food} alt="a hamburger" style={{ width: 300, height: 300 }} />
              <h2>Random Meal Suggestor</h2>
            </div>
            <div className="proj-inline2">
              <p>I created this using TheMealDB API to pick a randomly suggested meal from their database. My wife and I are always indecisive about what we want to eat. This way, we don't have to be; 
                we can just click a button and have a suggestion at our fingertips. Don't like the suggestion? Just roll it again!
              </p>
              <a href={mealUrl} target="_blank" rel="noopener noreferrer"><button className={this.props.className2}>Go</button></a>
            </div>
          </div>
          <div className="proj">
            <div className="proj-inline">
              <img src={calculator} alt="a calculator" style={{ width: 300, height: 300 }} />
              <h2>Calculator</h2>
            </div>
            <div className="proj-inline2">
              <p>This is a simple calculator using HTML, CSS for styling, and JavaScript for the functionality. 
                Features A/C button, DEL button, multiplication + addition + subtraction + division operators</p>
              <a href={calcUrl} target="_blank" rel="noopener noreferrer"><button className={this.props.className2}>Go</button></a>
            </div>
          </div>
          
        </Slider>
      </div>
      </div>
      <h2 className={this.props.outro}>Since I started learning, I've had high hopes. Becoming a member of the Vets Who Code group is a huge step in the right direction for me. I have been diving deep into learning 
      different frameworks and just learning with what was out there. In the future, I hope to integrate more AI into my work, and maybe even add APIs integrating AI technology into my work. All in all, I am very
      excited to see where this road takes me. Thank you for checking out my page!</h2>
      </div>
    );
  }
}