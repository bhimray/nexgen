import React from 'react'
import Typewriter from './Typewrite'
import "../styles/landingPageCss.css"
import AnimatedText from './AnimatedText'
const LandingPage = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <div className='backgroundImg'>
                <header className="header">
                    <div className="logo-container">
                        <ul className='menuLeft'>
                            <li><AnimatedText text="About Us" /></li>
                            <li><AnimatedText text="Products" /></li>
                        </ul>
                        <img src="../../public/img/gold_logo.png" alt="Company Logo" className="logo" />
                        <ul className="menuRight">
                            <li><AnimatedText text="Location" /></li>
                            <li><AnimatedText text="Contact Us" /></li>
                        </ul>
                    </div>
                </header>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10rem" }}>
                    <Typewriter text={"15% OFF IN ALL VAPE N SMOKE"} textSize="" delay={"100"} infinite />
                </div>
            </div>
        </div>

    )
}

export default LandingPage