import React from "react";
import "../styles/AnimatedText.css";

const AnimatedText = ({ text }) => {
  return (
    <div className="animated-text-container">
      <span className="animated-text">{text}</span>
    </div>
  );
};

export default AnimatedText;
