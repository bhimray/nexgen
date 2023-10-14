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
                                    <img src="../../public/img/logo_yyy.svg" alt="" title="Logo_black_Header_2021" />
                                </a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="menu-main-menu-left-container">
                                    <ul id="menu-main-menu-left" className="nav navbar-nav">
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-164 nav-item"><a title="About Us" href="https://i-drinkbottles.com/about-us/" className="nav-link">About Us</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-127" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-127 nav-item"><a title="Our Products" href="https://i-drinkbottles.com/our-products/" className="nav-link">Our Products</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101558" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101558 nav-item"><a title="On the Go" href="https://i-drinkbottles.com/on-the-go/" className="nav-link">On the Go</a></li>
                                    </ul>
                                </div>
                                <div className="logo-desktop">
                                    <a className="navbar-brand" href="https://i-drinkbottles.com">
                                        <img src="../../public/img/logo_yyy.svg" alt="" style={{ fill: "black" }} title="Logo_black_Header_2021" />
                                    </a>
                                </div>
                                <div className="menu-main-menu-right-container">
                                    <ul id="menu-main-menu-right" className="nav navbar-nav">
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101611" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101611 nav-item"><a title="FAQs" href="https://i-drinkbottles.com/faqs-2/" className="nav-link">FAQs</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-354" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-354 nav-item"><a title="Contacts" href="https://i-drinkbottles.com/contact-idrink/" className="nav-link">Contacts</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-397" className="has-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-397 nav-item"><a title="Store Locator" href="https://i-drinkbottles.com/i-drink-point-store-locator/" className="nav-link">Store Locator</a></li>
                                        <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101415" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101415 nav-item"><a title="Business" href="https://shop.i-total.it/login" className="nav-link">Business</a></li>
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


            <section className="block-hero-video ">
                <video src={landingVideo} autoPlay loop muted className="html-video z-index-1">
                    {/* <source type="video/mp4" src={videoPath}/>
                <source type="video/mp4" src={videoPath}/>
                <source type="video/mp4" src={videoPath}/> */}
                </video>
            </section>

        </div>

    )
}

export default LandingPage