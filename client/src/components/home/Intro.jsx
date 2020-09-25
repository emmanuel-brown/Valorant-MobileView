import React from 'react'
import Button from '../defaults/button'
import ValorantHome from '../videos/ValorantHome.mp4'
import Val_logo from '../navbar/images/valorant_4_White.png'
import StripeH from '../defaults/stripe/stripeH'

const Intro = () =>{
    return(
        <main id="home">
            <StripeH backgroundColor="#F7F7F7"/>
            <section className="intro">
                <img src={Val_logo} alt="" className="intro-logo"/>
                <p className="intro-txt">A 5v5 character-based tactical shooter</p>
                <div className="intro-button">
                    <Button txt="PLAY NOW" color="#F7F7F7" bgColor="#FF4655"/>
                </div>
                <video autoPlay loop muted className="intro-video">
                    <source src={ValorantHome} type='video/mp4' />
                </video>
            </section>
        </main>
    )
}

export default Intro