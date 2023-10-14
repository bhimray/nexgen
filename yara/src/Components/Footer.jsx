import React from 'react'
import '../styles/style.css'

const Footer = () => {
    return (
        <footer>
            <div className="block-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col1">
                            <h2>OUR BOTTLES FOR A BETTER WORLD</h2>
                            <p>The iDrink brand was created by Total Juggling Srl, a Venetian company that looking towards the future, understood the need to produce articles to help to improve the quality of life of individuals in the most environmentally friendly way possible.</p>
                            <img src="../../public/img/logo_yyy.svg" alt="" title="logo_white_ok" />
                        </div>
                        <div className="col col2">
                            <div className="menu-title">
                                <h3 className="title">
                                    ABOUT
                                    <i className="fas fa-dice-d20"></i>
                                </h3>
                            </div>
                            <div className="menu-menu-about-footer-container"><ul id="menu-menu-about-footer" className=""><li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101211" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101211 nav-item"><a title="About Us" href="https://i-drinkbottles.com/about-us/" className="nav-link">About Us</a></li>
                                <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101210" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101210 nav-item"><a title="B-evo" href="https://i-drinkbottles.com/b-evo/" className="nav-link">B-evo</a></li>
                            </ul></div>        </div>

                        <div className="col col3">
                            <div className="menu-title">
                                <h3 className="title">
                                    FAQ
                                    <i className="fas fa-question"></i>
                                </h3>
                            </div>
                            <div className="menu-menu-faq-footer-container"><ul id="menu-menu-faq-footer" className=""><li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101212" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101212 nav-item"><a title="Help and support" href="https://i-drinkbottles.com/?page_id=317" className="nav-link">Help and support</a></li>
                                <li itemScope="itemscope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-101218" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-101218 nav-item"><a title="Privacy Policy" href="https://i-drinkbottles.com/privacy-policy/" className="nav-link">Privacy Policy</a></li>
                            </ul>
                            </div>
                        </div>

                        <div className="col col4">
                            <div className="menu-title">
                                <h3 className="title">
                                    CONTACT INFO
                                </h3>
                                <ul className="contact-list">
                                    <li>
                                        <a href="tel:+39 0414567529" target="">
                                            Phone: +39 0414567529
                                            <i className="fas fa-phone"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@i-total.it" target="">
                                            Email: info@i-total.it
                                            <i className="far fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col5">
                            <h3 className="title">
                                SOCIAL NETWORK
                            </h3>
                            <div className="social-container">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/idrinkbottles" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/idrinkbottles/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/itotal/" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCKn7d9hKdTd4pBZbiID8KvA" target="_blank">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer