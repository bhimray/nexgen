import React from "react";
import "../styles/landingPageCss.css";
import Typewriter from "./Typewrite";

type Props = {};

const JuicybarPage = (props: Props) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="backgroundImg2" style={{ filter: "blur(2px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10rem",
          }}
        >
          <Typewriter
            text={"BUY 2 JUICY BAR, GET 1 FREE"}
            textSize=""
            delay={"100"}
            textColor={"black"}
            infinite
          />
        </div>
      </div>
    </div>
  );
};

export default JuicybarPage;
