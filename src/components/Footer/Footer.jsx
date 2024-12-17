import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <img className="logo" src={assets.logo} alt="" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum nostrum, dolor dolorem qui amet adipisci error iste officiis culpa expedita consequatur asperiores totam facilis atque quod fugiat, voluptatibus ullam.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-middle">
                    <h2> COMPANY </h2>
                    <ul>
                        <li> Home</li>
                        <li> About Us</li>
                        <li> Delivery</li>
                        <li> Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h2> GET IN TOUCH </h2>
                    <ul>
                        <li>982-334-212</li>
                        <li>contact@lavanya.com</li>
                    </ul>
                </div>
                {/* <hr/> */}
                <p className="footer-copyright">Copyright 2024 © Lavanya.com - All Rights Reserved. </p>

            </div>

        </div>
    )
}

export default Footer
