import React from "react";
import './Portfolio.css';

export function FeedbackForm(){

    const [feedback, setFeedback] = React.useState("");

    const handleChange = (e) => {
      setFeedback(e.target.value)
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch("https://v1.nocodeapi.com/bealecs1/google_sheets/YMpDayPAoKSPhQlU?tabId=feedback", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[feedback, new Date().toLocaleString()]]),
        }
        );
        await response.json();
        setFeedback('');
        alert(`Thank you for your feedback!`);
      } catch (err) {
        console.log(err);
        alert("There was an error processing your feedback, please try again.");
      }
    }
  
   
    return (
        <form id="Feedback" className="feedback" autoComplete="off">
        <label>If you took time to check out my portfolio today, feel free to leave me a comment with some feedback. Any feedback is greatly appreciated!</label>
          <input onChange={handleChange} name="feedback" type="text" value={feedback} className="feedback-box" placeholder="Please type your feedback here"/>
          <button onClick={handleSubmit} className="submit-feedback" value="Submit">Submit</button>
      </form>
    );
}


