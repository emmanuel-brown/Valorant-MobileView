import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const StayConnected = () =>{
    const [ slickPosition, setSlickPosition ] = useState(0)
    let position1 = useRef()
    let position2 = useRef()
    let position3 = useRef()
    let position4 = useRef()
    let position5 = useRef()
    const positions = [ position1, position2, position3, position4, position5 ]

    useEffect(() =>{
        if(positions[slickPosition].current){
            if(slickPosition > 0) positions[slickPosition - 1].current.style.backgroundColor = "transparent"
            if(slickPosition < 4) positions[slickPosition + 1].current.style.backgroundColor = "transparent"
            positions[slickPosition].current.style.backgroundColor = "#FF4655"
        }
    }, [slickPosition])
    const handlers = useSwipeable({
        onSwipedRight: () => slickPosition > 0 && setSlickPosition(slickPosition - 1),
        onSwipedLeft: () => slickPosition < 4 && setSlickPosition(slickPosition + 1),
        preventDefaultTouchmoveEvent: false,
        trackMouse: true,
      });

    console.log("Slick Positoin: ", slickPosition)
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
            <section id="carousel" {...handlers}>
                <div className="positioning">
                    <span className="positioning-block" ref={ position1 }></span>
                    <span className="positioning-block" ref={ position2 }></span>
                    <span className="positioning-block" ref={ position3 }></span>
                    <span className="positioning-block" ref={ position4 }></span>
                    <span className="positioning-block" ref={ position5 }></span>
                </div>
            </section>
        </section>
    )
}

export default StayConnected