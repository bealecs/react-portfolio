import React, { Component } from "react";
import Slider from "react-slick";

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
    const ball = require("./8ball.png");
    const food = "https://clipartix.com/wp-content/uploads/2018/03/burger-clipart-2018-15.png";
    const xo = require("./xo.png");
    const calcUrl = 'https://bealecs.github.io/portfolio/Game%20Projects/calculator.html';
    const ballUrl = 'https://bealecs.github.io/portfolio/Game%20Projects/8Ball.html';
    const xoUrl = 'https://bealecs.github.io/portfolio/Game%20Projects/xo.html';

    return (
      <div className="about-section">
        <div className="slider-container">
        <h2> My Projects</h2>
        <Slider {...settings}>
          <div className="proj">
            <img src={calculator} alt="a calculator" style={{ width: 300, height: 300 }} />
            <h2>Calculator</h2>
            <p>This is a simple calculator using HTML, CSS for styling, and JavaScript for the functionality. 
                Features A/C button, DEL button, multiplication + addition + subtraction + division operators</p>
            <a href={calcUrl} target="_blank" rel="noopener noreferrer"><button>Go</button></a>
          </div>
          <div className="proj">
            <img src={ball} alt="a magic 8-ball" style={{ width: 300, height: 300 }} />
            <h2>Magic 8 Ball</h2>
            <p>Just like the old magic 8 ball that you remember, equipped with 9 random responses for all of your best questions: ask away!</p>
            <a href={ballUrl} target="_blank" rel="noopener noreferrer"><button>Go</button></a>
          </div>
          <div className="proj">
            <img src={food} alt="a hamburger" style={{ width: 300, height: 300 }} />
            <h2>Random Meal Suggestor</h2>
            <p>I created this using TheMealDB API to pick a randomly suggested meal from their database. My wife and I are always indecisive about what we want to eat. This way, we don't have to be; 
                we can just click a button and have a suggestion at our fingertips. Don't like the suggestion? Just roll it again!
            </p>
            <button>Go</button>
          </div>
          <div className="proj">
            <img src={xo} alt="a tic-tac-toe board almost complete" style={{ width: 300, height: 300 }} />
            <h2>Tic-Tac-Toe</h2>
            <p>A childhood favorite, and a good task for a learner like myself. This project was my first to complete, and surprisingly enough uses very little JavaScript.
                Mostly, it is just changes in CSS styling using a little bit of JavaScript for placing tokens.
            </p>
            <a href={xoUrl} target="_blank" rel="noopener noreferrer"><button>Go</button></a>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}