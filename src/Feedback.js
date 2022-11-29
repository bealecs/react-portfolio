import React from "react";
import './Portfolio.css';

export function FeedbackForm(){
    return (
        <form className="feedback">
        <label>If you took time to check out my portfolio today, feel free to leave me a comment with some feedback. Any feedback is greatly appreciated!</label>
          <input type="text" className="feedback-box" placeholder="Feedback here.." />
          <input type="submit" className="submit-feedback" value="Submit" />
      </form>
    );
}