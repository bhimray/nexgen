import React, { useState, useEffect } from "react";
import "../styles/landingPageCss.css";

const Typewriter = ({
  text,
  textSize = "goldenrod",
  textColor,
  delay,
  infinite,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // ADD THIS CHECK
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
        console.log("current text", currentText);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return (
    <div
      className="offerText"
      style={{
        color: textColor ? textColor : "goldenrod",
        fontWeight: "bolder",
        fontSize: textSize,
      }}
    >
      {currentText}
    </div>
  );
};

export default Typewriter;
