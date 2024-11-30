import React from 'react'
import "./Footer.css"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='social'>
                <li><a href=""><IoLogoFacebook /></a></li>
                <li><a href=""><IoLogoTwitter /></a></li>
                <li><a href=""><IoLogoInstagram /></a></li>
            </ul>
            <div className="dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default Footer
