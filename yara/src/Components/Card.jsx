import React from 'react'
import '../styles/style.css'

const Card = ({ imageSource, Name, Description, productLink }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1600" className="col-md-6 col-sm-12 col-12 mb-5 aos-init aos-animate">
            <div className="tax">
                <div className="tax-container">
                    <div className="tax-image-container">
                        <img src={imageSource} alt="" />
                        <span className="tax-name">{Name}</span>
                    </div>
                    <div className="tax-description-container">
                        <p className="tax-name">{Name}</p>
                        <p className="tax-desc">{Description}</p>
                        <a className="btn" href={productLink}>
                            SEE MORE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card