import React from 'react'
import '../styles/style.css'
import landingVideo from "../../public/img/bottle.mp4"

const LandingPage = () => {
    return (
        <div>
            <header class="block-header">
                    <div class="container">
                        <div class="row justify-content-center">
                            <nav class="navbar navbar-expand-lg fixed-top">
                                <button class="hamburger hamburger--collapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                                <div class="logo-mobile">
                                    <a class="navbar-brand" href="https://i-drinkbottles.com">                            
                                        <img src="../../public/img/yara_logo.png" alt="" title="Logo_black_Header_2021" />
                                    </a>
                                </div>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div class="menu-main-menu-left-container">
                                        <ul id="menu-main-menu-left" class="nav navbar-nav">
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-164 nav-item"><a title="About Us" href="https://i-drinkbottles.com/about-us/" class="nav-link">About Us</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-127" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-127 nav-item"><a title="Our Products" href="https://i-drinkbottles.com/our-products/" class="nav-link">Our Products</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-101558" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101558 nav-item"><a title="On the Go" href="https://i-drinkbottles.com/on-the-go/" class="nav-link">On the Go</a></li>
                                        </ul>
                                    </div>                    
                                    <div class="logo-desktop">
                                        <a class="navbar-brand" href="https://i-drinkbottles.com">                                
                                            <img src="../../public/img/yara_logo.png" alt="" title="Logo_black_Header_2021" />
                                        </a>
                                    </div>
                                    <div class="menu-main-menu-right-container">
                                        <ul id="menu-main-menu-right" class="nav navbar-nav">
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-101611" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101611 nav-item"><a title="FAQs" href="https://i-drinkbottles.com/faqs-2/" class="nav-link">FAQs</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-354" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-354 nav-item"><a title="Contacts" href="https://i-drinkbottles.com/contact-idrink/" class="nav-link">Contacts</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-397" class="has-icon menu-item menu-item-type-post_type menu-item-object-page menu-item-397 nav-item"><a title="Store Locator" href="https://i-drinkbottles.com/i-drink-point-store-locator/" class="nav-link">Store Locator</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-101415" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-101415 nav-item"><a title="Business" href="https://shop.i-total.it/login" class="nav-link">Business</a></li>
                                        </ul>
                                    </div>      
                                </div>
                            </nav>
                        </div>
                    </div>
            </header>
        

            <div class="component-scroll-up">
                <a class="scroll-top-arrow" href="javascript:void(0);">
                <span>SCROLL UP</span>
                <i class="ti ti-arrow-right"></i>
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