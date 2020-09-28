import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const StayConnected = () =>{
    return(
        <section id="stayConnected">
            <div className="stripeV"></div>
            <h2 className="head">STAY CONNECTED TO US</h2>
            <h3 className="subHead">FIND US ON</h3>
            <div className="media">
                <FaTwitter className="media-icon" />
                <FaYoutube className="media-icon" />
                <FaInstagram className="media-icon" />
                <FaFacebookF className="media-icon" />
                <FaDiscord className="media-icon" />
            </div>
        </section>
    )
}

export default StayConnected