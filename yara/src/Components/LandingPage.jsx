import React from 'react'
import '../styles/style.css'
import landingVideo from "../../public/img/bottle.mp4"

const LandingPage = () => {
    return (
        <div>
            <header className="block-header">
                <div className="container">
                    <div className="row justify-content-center">
                        <nav className="navbar navbar-expand-lg fixed-top">
                            <button className="hamburger hamburger--collapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <div className="logo-mobile">
                                <a className="navbar-brand" href="">
                                    <img src="../../public/img/gold_logo.png" alt="" title="Logo_black_Header_2021" />
                                </a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="menu-main-menu-left-container">
                                    <ul id="menu-main-menu-left" className="nav navbar-nav">
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-164 nav-item"><a title="About Us" href="" className="nav-link">About Us</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-127" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-127 nav-item"><a title="Our Products" href="" className="nav-link">Our Products</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101558" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101558 nav-item"><a title="On the Go" href="" className="nav-link">On the Go</a></li>
                                    </ul>
                                </div>
                                <div className="logo-desktop">
                                    <a className="navbar-brand" href="">
                                        <img src="../../public/img/gold_logo.png" alt="" title="Logo_black_Header_2021" />
                                    </a>
                                </div>
                                <div className="menu-main-menu-right-container">
                                    <ul id="menu-main-menu-right" className="nav navbar-nav">
                                        <li itemScope="itemscope" itemType="" id="menu-item-101611" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101611 nav-item"><a title="FAQs" href="" className="nav-link">FAQs</a></li>
                                        <li itemScope="itemscope" itemType="" id="menu-item-354" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-354 nav-item"><a title="Contacts" href="" className="nav-link">Contacts</a></li>
                                        <li itemScope="itemscope" itemType="" id="menu-item-397" className="has-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-397 nav-item"><a title="Store Locator" href="" className="nav-link">Store Locator</a></li>
                                        <li itemScope="itemscope" itemType="" id="menu-item-101415" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101415 nav-item"><a title="Business" href="" className="nav-link">Business</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>


            <div className="component-scroll-up">
                <a className="scroll-top-arrow" href="javascript:void(0);">
                    <span>SCROLL UP</span>
                    <i className="ti ti-arrow-right"></i>
                </a>
            </div>
            <div style={{ height: "100vh", width: "100vw" }}>
                <img src="../../public/img/original_vape.jpg" alt="" style={{ fill: "black", width: "100%", objectFit: "cover" }} title="main_wallpaper" />
            </div>
            {/* <section className="block-hero-video ">
                <video src={landingVideo} autoPlay loop muted className="html-video z-index-1">
                    <source type="video/mp4" src={videoPath}/>
                <source type="video/mp4" src={videoPath}/>
                <source type="video/mp4" src={videoPath}/>
                </video>
            </section> */}
        </div>

    )
}

export default LandingPage